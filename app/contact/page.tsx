import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Suspense } from "react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ArrowRight, Calendar, Globe, India, Instagram, Phone, ShieldCheck, WhatsApp } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";
import heroImg from "@/public/images/contact-hero.jpg";
import ContactForm, { ContactFormWithParams } from "./ContactForm";

export const metadata = pageMeta({
  title: "Contact Us — Get Qualified Interior & Construction Leads",
  description:
    "Tell us about your business, target location and the projects you want. Trimmed Leads will recommend the right verified lead package for interior designers, architects and construction companies across India.",
  path: "/contact",
  ogTitle: "Contact Trimmed Leads",
  ogDescription: "Get verified interior, architecture and construction leads with pre-scheduled meetings. Enquire today.",
});

const waProps = { target: "_blank", rel: "noopener noreferrer" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Build Your Next <em>Growth Opportunity.</em>
          </>
        }
        subtitle="Tell us about your business, target location and the type of projects you want to receive."
        image={heroImg}
        imageAlt="Light-filled modern home with a floating staircase and pool view"
        crumb={{ label: "Contact", path: "/contact" }}
      />

      <section className="section bg-cream">
        <div className="container contact-grid">
          <div className="form-card reveal" id="enquiry-form">
            <div className="form-card-head">
              <p className="eyebrow">Enquiry Form</p>
              <h2>Get qualified leads for your business</h2>
              <p>Share a few details and our team will get back to you with the most suitable option.</p>
            </div>
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>

          <aside className="contact-aside" aria-label="Contact information">
            <div className="info-stack">
              <div className="info-card info-card--dark reveal">
                <h2>{site.name}</h2>
                <p className="info-sub">Interior &amp; Construction Lead Generation</p>
                <div className="info-rows">
                  <div className="info-row">
                    <span className="icon-badge">
                      <Phone size={20} />
                    </span>
                    <div>
                      <small>Call / WhatsApp</small>
                      <a href={site.phoneHref}>{site.phoneDisplay}</a>
                    </div>
                  </div>
                  <div className="info-row">
                    <span className="icon-badge">
                      <Globe size={20} />
                    </span>
                    <div>
                      <small>Website</small>
                      <a href={site.url}>{site.displayUrl}</a>
                    </div>
                  </div>
                  <div className="info-row">
                    <span className="icon-badge">
                      <India size={20} />
                    </span>
                    <div>
                      <small>Service Area</small>
                      <span>PAN India Services</span>
                    </div>
                  </div>
                  <div className="info-row">
                    <span className="icon-badge">
                      <Instagram size={20} />
                    </span>
                    <div>
                      <small>Instagram</small>
                      <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                        {site.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>
                <a href={whatsappLink()} className="btn btn-wa btn-block" {...waProps}>
                  <WhatsApp size={20} /> Chat on WhatsApp <ArrowRight size={18} />
                </a>
                <a href={site.phoneHref} className="btn btn-outline-light btn-block" style={{ marginTop: 10 }}>
                  <Phone size={18} /> Call {site.phoneDisplay}
                </a>
              </div>

              <div className="info-card reveal" style={{ "--d": "100ms" } as React.CSSProperties}>
                <h3>What happens next?</h3>
                <ul className="check-list" style={{ margin: "14px 0 0" }}>
                  <li>
                    <ShieldCheck /> We review your business type, location and target budget.
                  </li>
                  <li>
                    <Calendar /> Our team gets in touch on WhatsApp or call to recommend the right package.
                  </li>
                  <li>
                    <ArrowRight /> Verified, unshared opportunities with meetings scheduled for you.
                  </li>
                </ul>
              </div>

              <div className="info-card reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
                <h3>Follow our work</h3>
                <p>Updates, insights and our latest work for interior and construction brands.</p>
                <div className="social-row">
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={`Instagram ${site.instagramHandle}`}
                  >
                    <Instagram size={20} />
                  </a>
                  <a href={whatsappLink()} className="social-btn" aria-label="WhatsApp" {...waProps}>
                    <WhatsApp size={20} />
                  </a>
                  <a href={site.phoneHref} className="social-btn" aria-label={`Call ${site.phoneDisplay}`}>
                    <Phone size={20} />
                  </a>
                </div>
                <Link href="/lead-packages" className="link-arrow" style={{ marginTop: 22 }}>
                  Compare lead packages <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Trimmed Leads",
          url: `${site.url}/contact`,
          about: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
