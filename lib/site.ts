/**
 * Central business details for Trimmed Leads.
 * Update values here and they change everywhere on the site.
 */

export const site = {
  name: "Trimmed Leads",
  url: "https://www.trimmedleads.com",
  displayUrl: "www.trimmedleads.com",
  tagline: "Quality Meetings. Not Random Leads.",
  category: "Interior & Construction Lead Generation",
  founded: 2021,
  serviceArea: "PAN India",
  founder: "Shivani Singh",
  instagramHandle: "@trimmed_leads",
  instagramUrl: "https://www.instagram.com/trimmed_leads/",
  /** Phone number used for calls and WhatsApp. */
  phoneDisplay: "+91 88265 99387",
  phoneHref: "tel:+918826599387",
  whatsappNumber: "918826599387",
} as const;

export const defaultWhatsappMessage =
  "Hi Trimmed Leads, I'd like to know more about your verified leads and packages.";

/** WhatsApp chat link with an optional pre-filled message. */
export function whatsappLink(message: string = defaultWhatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/lead-packages", label: "Lead Packages" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceLinks = [
  { href: "/services#interior-leads", label: "Interior Leads" },
  { href: "/services#architecture-leads", label: "Architecture Leads" },
  { href: "/services#construction-leads", label: "Construction Leads" },
  { href: "/services#website-development", label: "Website Development" },
  { href: "/services#social-media-marketing", label: "Social Media Marketing" },
  { href: "/services#portfolio-development", label: "Portfolio Development" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-replacement-policy", label: "Refund / Replacement Policy" },
] as const;

/** The details checked for every opportunity before it reaches a client. */
export const verificationPoints = [
  "Location",
  "Property type",
  "Project requirement",
  "Approximate budget",
  "Service needed",
  "Readiness to discuss",
  "Meeting availability",
] as const;

export type PackageId = "basic" | "standard" | "pro" | "super-pro";

export const packages: {
  id: PackageId;
  name: string;
  price: number;
  budget: string;
  budgetShort: string;
  leads: number;
}[] = [
  { id: "basic", name: "Basic", price: 13500, budget: "₹5–10 Lac", budgetShort: "5–10L", leads: 10 },
  { id: "standard", name: "Standard", price: 16500, budget: "₹11–20 Lac", budgetShort: "11–20L", leads: 10 },
  { id: "pro", name: "Pro", price: 19000, budget: "₹21–30 Lac", budgetShort: "21–30L", leads: 10 },
  { id: "super-pro", name: "Super Pro", price: 22500, budget: "₹31–50 Lac & Above", budgetShort: "31–50L+", leads: 10 },
];

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

/* ---------- Enquiry form options (shared by the form and the API route) ---------- */

export const businessTypes = [
  "Interior Designer",
  "Architect",
  "Construction Company",
  "Contractor",
  "Other",
] as const;

export const serviceOptions = [
  { id: "interior-leads", label: "Interior Leads" },
  { id: "architecture-leads", label: "Architecture Leads" },
  { id: "construction-leads", label: "Construction Leads" },
  { id: "social-media-marketing", label: "Social Media Marketing" },
  { id: "website-development", label: "Website Development" },
  { id: "portfolio-development", label: "Portfolio Development" },
] as const;

export const budgetOptions = [
  { value: "5-10", label: "₹5–10 Lac", packageId: "basic" },
  { value: "11-20", label: "₹11–20 Lac", packageId: "standard" },
  { value: "21-30", label: "₹21–30 Lac", packageId: "pro" },
  { value: "31-50+", label: "₹31–50 Lac+", packageId: "super-pro" },
  { value: "other", label: "Other", packageId: null },
] as const;

export const startOptions = [
  "Immediately",
  "Within 7 Days",
  "Within 15 Days",
  "Within 30 Days",
  "Just Exploring",
] as const;
