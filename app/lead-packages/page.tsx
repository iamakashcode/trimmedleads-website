import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, Check, Handshake, Plus, WhatsApp } from "@/components/icons";
import { formatINR, packages, site, verificationPoints, whatsappLink } from "@/lib/site";
import heroImg from "@/public/images/packages-hero.jpg";

export const metadata = pageMeta({
  title: "Lead Packages & Pricing — Verified Interior & Construction Leads from ₹13,500",
  description:
    "Compare Trimmed Leads packages: 10 verified, genuine, unshared interior, architecture and construction leads with pre-scheduled meetings. Basic ₹13,500 · Standard ₹16,500 · Pro ₹19,000 · Super Pro ₹22,500.",
  path: "/lead-packages",
  ogTitle: "Lead Packages & Pricing — Trimmed Leads",
  ogDescription:
    "Choose a package by project budget: 5–10 Lac, 11–20 Lac, 21–30 Lac or 31–50 Lac & above. 10 verified, unshared leads with pre-scheduled meetings.",
});

const faqs = [
  {
    q: "What does an “unshared” lead mean?",
    a: "An unshared lead is provided to one business only. It is not circulated among multiple businesses for the same requirement, so you aren’t competing with a crowd for the same client.",
  },
  {
    q: "What details are verified before I receive a lead?",
    a: `Our team checks the key project details with the prospect — ${verificationPoints
      .map((p) => p.toLowerCase())
      .join(", ")}.`,
  },
  {
    q: "How do I choose the right package?",
    a: "Packages are organised by the client’s approximate project budget. Choose the category that matches the size of projects you want to work on. If you’re unsure, tell us your preferred budget and location and our team will recommend an option.",
  },
  {
    q: "What happens if a client doesn’t proceed with the scheduled meeting?",
    a: "Our focus is on scheduled meetings. If a client denies or does not proceed with the scheduled meeting according to the agreed terms, a replacement lead may be provided as per the applicable package policy. Please see our Refund / Replacement Policy for details.",
  },
  {
    q: "Do you work in my city?",
    a: "Trimmed Leads works with interior, architecture and construction businesses across India. Share your target location when you enquire and our team will confirm the options available for your area.",
  },
];

const offersJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Trimmed Leads — Lead Packages",
  url: `${site.url}/lead-packages`,
  itemListElement: packages.map((p) => ({
    "@type": "Offer",
    name: `${p.name} Package — ${p.budget} budget projects`,
    description: `${p.leads} verified, genuine, unshared leads with pre-scheduled meetings for ${p.budget} budget projects.`,
    price: p.price,
    priceCurrency: "INR",
    url: `${site.url}/lead-packages#${p.id}`,
    seller: { "@id": `${site.url}/#organization` },
    itemOffered: { "@type": "Service", name: "Verified interior & construction leads", areaServed: "India" },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function LeadPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Lead Packages"
        title={
          <>
            Choose the Right Opportunity Package for <em>Your Business.</em>
          </>
        }
        subtitle="Select a budget category based on the type of projects you want to target."
        image={heroImg}
        imageAlt="Striking contemporary architecture against a clear sky"
        crumb={{ label: "Lead Packages", path: "/lead-packages" }}
      />

      {/* Pricing */}
      <section className="section" aria-labelledby="pricing-title">
        <div className="container">
          <SectionHeader
            align="center"
            id="pricing-title"
            eyebrow="Pricing"
            title={
              <>
                10 verified leads. <em>Pre-scheduled meetings.</em>
              </>
            }
            intro="Every package includes the same verification and meeting coordination — the difference is the size of the projects you want to target."
          />

          <div className="pricing-grid">
            {packages.map((p, i) => {
              const featured = p.id === "super-pro";
              return (
                <article
                  key={p.id}
                  id={p.id}
                  className={`price-card reveal${featured ? " price-card--featured" : ""}`}
                  style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
                  aria-labelledby={`${p.id}-name`}
                >
                  {featured && <span className="price-ribbon">Premium Projects</span>}
                  <h3 className="price-tier" id={`${p.id}-name`}>
                    {p.name}
                  </h3>
                  <p className="price-amount">{formatINR(p.price)}</p>
                  <p className="price-per">per package · {p.leads} leads</p>
                  <div className="price-budget">
                    <strong>{p.budget}</strong>
                    <span>Budget projects</span>
                  </div>
                  <ul className="price-includes">
                    <li>
                      <Check size={18} /> {p.leads} Verified Genuine Unshared Leads
                    </li>
                    <li>
                      <Check size={18} /> Pre-Scheduled Meetings
                    </li>
                  </ul>
                  <Link
                    href={`/contact?package=${p.id}#enquiry-form`}
                    className={`btn btn-block ${featured ? "btn-outline" : "btn-primary"}`}
                  >
                    Choose {p.name} <ArrowRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
          <p className="price-footnote">
            Budget category refers to the client&apos;s approximate project budget. Package details are confirmed with
            you before you begin.
          </p>
        </div>
      </section>

      {/* Policy */}
      <section className="section--tight" style={{ paddingTop: 0 }} aria-labelledby="policy-title">
        <div className="container">
          <div className="policy reveal">
            <span className="icon-badge">
              <Handshake size={28} />
            </span>
            <div>
              <h2 id="policy-title">Our Focus Is on Meetings.</h2>
              <p>
                Trimmed Leads focuses on scheduled meetings rather than simply counting enquiries. If a client denies
                or does not proceed with the scheduled meeting according to the agreed terms, a replacement lead may be
                provided as per the applicable package policy.
              </p>
            </div>
            <Link href="/terms-and-conditions" className="btn btn-outline">
              View Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-cream" aria-labelledby="compare-title">
        <div className="container">
          <SectionHeader
            align="split"
            id="compare-title"
            eyebrow="Package Comparison"
            title={
              <>
                Same quality. <em>Different project sizes.</em>
              </>
            }
            intro="Every tier is verified, unshared and meeting-focused. Pick the budget range that matches the work you want."
          />
          <div className="table-wrap reveal">
            <table className="compare">
              <caption className="sr-only">Comparison of Trimmed Leads packages</caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {packages.map((p) => (
                    <th key={p.id} scope="col">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["Verified Leads", "Unshared", "Pre-Scheduled Meetings"].map((feature) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    {packages.map((p) => (
                      <td key={p.id}>
                        <Check />
                        <span className="sr-only">Included</span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row">Budget Category</th>
                  {packages.map((p) => (
                    <td key={p.id}>
                      <strong>{p.budgetShort}</strong>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Leads per Package</th>
                  {packages.map((p) => (
                    <td key={p.id}>{p.leads}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  {packages.map((p) => (
                    <td key={p.id}>
                      <strong>{formatINR(p.price)}</strong>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container">
          <SectionHeader
            align="center"
            id="faq-title"
            eyebrow="Questions"
            title={
              <>
                Frequently <em>asked</em>
              </>
            }
          />
          <div className="faq reveal">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <Plus size={22} />
                </summary>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Need Guidance?"
        title={
          <>
            Not Sure Which Package Is <em>Right For You?</em>
          </>
        }
        text="Tell us your preferred project budget and location. Our team will recommend the most suitable option."
      >
        <Link href="/contact#enquiry-form" className="btn btn-gold">
          Talk to Our Team <ArrowRight size={18} />
        </Link>
        <a
          href={whatsappLink("Hi Trimmed Leads, please help me choose the right lead package.")}
          className="btn btn-outline-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp size={18} /> Chat on WhatsApp
        </a>
      </CtaBand>

      <JsonLd data={offersJsonLd} />
      <JsonLd data={faqJsonLd} />
    </>
  );
}
