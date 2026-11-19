import { budgetOptions, businessTypes, packages, serviceOptions, startOptions } from "./site";

export type EnquiryInput = {
  fullName: string;
  businessName: string;
  whatsapp: string;
  email: string;
  businessType: string;
  services: string[];
  location: string;
  budget: string;
  startTime: string;
  message: string;
  packageId: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

const LIMITS: Record<string, number> = {
  fullName: 100,
  businessName: 140,
  whatsapp: 20,
  email: 160,
  location: 140,
  message: 2000,
};

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().replace(/\s+/g, " ").slice(0, max) : "");

/** Normalises an Indian mobile number to +91XXXXXXXXXX, or returns null if invalid. */
export function normaliseIndianMobile(raw: string): string | null {
  const digits = raw.replace(/[^\d]/g, "");
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits.length === 11 && digits.startsWith("0") ? digits.slice(1) : digits;
  return /^[6-9]\d{9}$/.test(local) ? `+91${local}` : null;
}

export function parseEnquiry(data: Record<string, unknown>): { value: EnquiryInput; errors: EnquiryErrors } {
  const services = Array.isArray(data.services)
    ? data.services.filter((s): s is string => typeof s === "string" && serviceOptions.some((o) => o.id === s))
    : [];

  const value: EnquiryInput = {
    fullName: clean(data.fullName, LIMITS.fullName),
    businessName: clean(data.businessName, LIMITS.businessName),
    whatsapp: clean(data.whatsapp, LIMITS.whatsapp),
    email: clean(data.email, LIMITS.email).toLowerCase(),
    businessType: clean(data.businessType),
    services,
    location: clean(data.location, LIMITS.location),
    budget: clean(data.budget),
    startTime: clean(data.startTime),
    message: typeof data.message === "string" ? data.message.trim().slice(0, LIMITS.message) : "",
    packageId: clean(data.packageId, 20),
  };

  const errors: EnquiryErrors = {};
  if (value.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (value.businessName.length < 2) errors.businessName = "Please enter your business or company name.";

  const phone = normaliseIndianMobile(value.whatsapp);
  if (!value.whatsapp) errors.whatsapp = "Please enter your WhatsApp number.";
  else if (!phone) errors.whatsapp = "Please enter a valid 10-digit Indian mobile number.";
  else value.whatsapp = phone;

  if (value.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.email)) errors.email = "Please enter a valid email address.";
  if (!businessTypes.includes(value.businessType as (typeof businessTypes)[number]))
    errors.businessType = "Please select your business type.";
  if (value.budget && !budgetOptions.some((b) => b.value === value.budget)) value.budget = "";
  if (value.startTime && !startOptions.includes(value.startTime as (typeof startOptions)[number])) value.startTime = "";

  return { value, errors };
}

export function describeEnquiry(e: EnquiryInput): { label: string; value: string }[] {
  const budget = budgetOptions.find((b) => b.value === e.budget)?.label ?? "";
  const services = e.services.map((id) => serviceOptions.find((o) => o.id === id)?.label ?? id).join(", ");
  return [
    { label: "Full Name", value: e.fullName },
    { label: "Business / Company", value: e.businessName },
    { label: "WhatsApp", value: e.whatsapp },
    { label: "Email", value: e.email },
    { label: "Business Type", value: e.businessType },
    { label: "Preferred Services", value: services },
    { label: "Preferred Location", value: e.location },
    { label: "Target Project Budget", value: budget },
    { label: "Start Time", value: e.startTime },
    { label: "Package Selected", value: packages.find((p) => p.id === e.packageId)?.name ?? "" },
    { label: "Message", value: e.message },
  ].map((row) => ({ ...row, value: row.value || "—" }));
}

/** Formats an enquiry as a WhatsApp message (only filled-in fields are included). */
export function formatEnquiryForWhatsapp(e: EnquiryInput): string {
  const lines = describeEnquiry(e)
    .filter((row) => row.value !== "—")
    .map((row) => `*${row.label}:* ${row.value}`);
  return ["*New Enquiry — Trimmed Leads Website*", "", ...lines].join("\n");
}
