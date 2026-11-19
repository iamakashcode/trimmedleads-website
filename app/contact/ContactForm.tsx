"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Phone, WhatsApp } from "@/components/icons";
import { formatEnquiryForWhatsapp, parseEnquiry, type EnquiryErrors } from "@/lib/enquiry";
import { budgetOptions, businessTypes, packages, serviceOptions, site, startOptions, whatsappLink } from "@/lib/site";

/** Reads ?package= and ?service= from the URL to pre-fill the form. Render inside <Suspense>. */
export function ContactFormWithParams() {
  const params = useSearchParams();
  return <ContactForm packageId={params.get("package")} serviceId={params.get("service")} />;
}

type Props = { packageId?: string | null; serviceId?: string | null };

/**
 * Enquiry form. On submit, the details are validated and WhatsApp opens with the
 * full enquiry pre-filled to the Trimmed Leads number — the visitor just presses Send.
 */
export default function ContactForm({ packageId, serviceId }: Props) {
  const pkg = packages.find((p) => p.id === packageId);
  const presetService = serviceOptions.find((s) => s.id === serviceId)?.id;
  const presetBudget = pkg ? budgetOptions.find((b) => b.packageId === pkg.id)?.value : undefined;

  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sentUrl) successRef.current?.focus();
  }, [sentUrl]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const { value, errors: found } = parseEnquiry({
      fullName: fd.get("fullName"),
      businessName: fd.get("businessName"),
      whatsapp: fd.get("whatsapp"),
      email: fd.get("email"),
      businessType: fd.get("businessType"),
      services: fd.getAll("services"),
      location: fd.get("location"),
      budget: fd.get("budget"),
      startTime: fd.get("startTime"),
      message: fd.get("message"),
      packageId: fd.get("packageId"),
    });

    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const url = whatsappLink(formatEnquiryForWhatsapp(value));
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url; // pop-up blocked: open WhatsApp in this tab instead
    form.reset();
    setSentUrl(url);
  }

  if (sentUrl) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success-icon">
          <CheckCircle size={40} />
        </span>
        <h2 ref={successRef} tabIndex={-1}>
          Thank you! Our team will get in touch with you shortly.
        </h2>
        <p>
          WhatsApp has opened with your enquiry details. Please press <strong>Send</strong> in WhatsApp so they reach
          our team.
        </p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: 8 }}>
          <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsApp size={18} /> Open WhatsApp Again
          </a>
          <a href={site.phoneHref} className="btn btn-outline">
            <Phone size={18} /> Call {site.phoneDisplay}
          </a>
        </div>
        <button type="button" className="link-arrow" style={{ background: "none", border: 0, cursor: "pointer" }} onClick={() => setSentUrl(null)}>
          Send another enquiry <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  const fieldProps = (name: keyof EnquiryErrors) => ({
    "data-invalid": errors[name] ? "true" : undefined,
  });
  const describedBy = (name: keyof EnquiryErrors) => (errors[name] ? `${name}-error` : undefined);
  const errorText = (name: keyof EnquiryErrors) =>
    errors[name] ? (
      <span className="field-error" id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-required-note">
      <input type="hidden" name="packageId" value={pkg?.id ?? ""} />

      <div className="form-grid">
        <div className="field" {...fieldProps("fullName")}>
          <label htmlFor="fullName">
            Full Name<span className="req">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            className="input"
            autoComplete="name"
            required
            aria-invalid={!!errors.fullName}
            aria-describedby={describedBy("fullName")}
            placeholder="Your name"
          />
          {errorText("fullName")}
        </div>

        <div className="field" {...fieldProps("businessName")}>
          <label htmlFor="businessName">
            Business / Company Name<span className="req">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            className="input"
            autoComplete="organization"
            required
            aria-invalid={!!errors.businessName}
            aria-describedby={describedBy("businessName")}
            placeholder="Studio or company name"
          />
          {errorText("businessName")}
        </div>

        <div className="field" {...fieldProps("whatsapp")}>
          <label htmlFor="whatsapp">
            WhatsApp Number<span className="req">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            className="input"
            autoComplete="tel"
            required
            aria-invalid={!!errors.whatsapp}
            aria-describedby={describedBy("whatsapp")}
            placeholder="10-digit mobile number"
          />
          {errorText("whatsapp")}
        </div>

        <div className="field" {...fieldProps("email")}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            className="input"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            placeholder="you@company.com"
          />
          {errorText("email")}
        </div>

        <div className="field" {...fieldProps("businessType")}>
          <label htmlFor="businessType">
            Business Type<span className="req">*</span>
          </label>
          <select
            id="businessType"
            name="businessType"
            className="select"
            required
            defaultValue=""
            aria-invalid={!!errors.businessType}
            aria-describedby={describedBy("businessType")}
          >
            <option value="" disabled>
              Select business type
            </option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errorText("businessType")}
        </div>

        <div className="field">
          <label htmlFor="location">Preferred Location</label>
          <input
            id="location"
            name="location"
            className="input"
            autoComplete="address-level2"
            placeholder="City / area you want projects in"
          />
        </div>

        <fieldset className="field field--full">
          <legend>Preferred Service</legend>
          <div className="choice-grid">
            {serviceOptions.map((s) => (
              <label key={s.id} className="choice">
                <input type="checkbox" name="services" value={s.id} defaultChecked={s.id === presetService} />
                {s.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="budget">Target Project Budget</label>
          <select id="budget" name="budget" className="select" defaultValue={presetBudget ?? ""}>
            <option value="">Select budget range</option>
            {budgetOptions.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
          {pkg && <span className="field-hint">Selected package: {pkg.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="startTime">When do you want to start?</label>
          <select id="startTime" name="startTime" className="select" defaultValue="">
            <option value="">Select timeline</option>
            {startOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Tell us about your business and the kind of projects you're looking for"
          />
        </div>
      </div>

      <div className="form-footer">
        <button type="submit" className="btn btn-wa">
          <WhatsApp size={18} /> Submit Enquiry <ArrowRight size={18} />
        </button>
        <p className="form-note" id="form-required-note">
          Fields marked * are required. Your enquiry is sent to our team on WhatsApp ({site.phoneDisplay}). See our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </div>
    </form>
  );
}
