import { pageMeta } from "@/lib/seo";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ArrowRight, Check, Compass, HardHat, Layers, Megaphone, Monitor, Sofa } from "@/components/icons";
import { site } from "@/lib/site";
import architectureImg from "@/public/images/service-architecture.jpg";
import constructionImg from "@/public/images/service-construction.jpg";
import interiorImg from "@/public/images/service-interior.jpg";
import portfolioImg from "@/public/images/service-portfolio.jpg";
import socialImg from "@/public/images/service-social.jpg";
import websiteImg from "@/public/images/service-website.jpg";
import heroImg from "@/public/images/services-hero.jpg";

export const metadata = pageMeta({
  title: "Services — Interior Leads, Architect Leads, Construction Leads & Digital Marketing",
  description:
    "Verified interior designer leads, architecture leads and construction project leads across India, plus website development, portfolio design and social media marketing for interior and construction businesses.",
  path: "/services",
  ogTitle: "Services — Trimmed Leads",
  ogDescription:
    "Interior, architecture and construction leads with pre-scheduled meetings, plus websites, portfolios and social media marketing.",
});

type Service = {
  id: string;
  short: string;
  icon: (p: { size?: number }) => React.ReactNode;
  headline: string;
  description: string;
  listTitle: string;
  items: string[];
  image: StaticImageData;
  alt: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const services: Service[] = [
  {
    id: "interior-leads",
    short: "Interior Leads",
    icon: Sofa,
    headline: "Verified Interior Project Opportunities",
    description:
      "Connect with prospects looking for interior design, modular kitchen, renovation and related services.",
    listTitle: "Every opportunity includes",
    items: [
      "Verified client details",
      "Project requirement",
      "Location",
      "Budget information",
      "Meeting coordination",
      "Unshared opportunities",
    ],
    image: interiorImg,
    alt: "Soft, neutral living room interior with curved furniture",
    cta: { label: "Get Interior Leads", href: "/contact?service=interior-leads#enquiry-form" },
    secondary: { label: "View Packages", href: "/lead-packages" },
  },
  {
    id: "architecture-leads",
    short: "Architecture Leads",
    icon: Compass,
    headline: "Architecture & Design Opportunities",
    description: "Help architects connect with potential clients looking for professional architecture and design services.",
    listTitle: "Clients looking for",
    items: ["Residential architecture", "Commercial architecture", "Building design", "Renovation", "Planning & design"],
    image: architectureImg,
    alt: "Contemporary house with timber cladding and large glazing",
    cta: { label: "Get Architecture Leads", href: "/contact?service=architecture-leads#enquiry-form" },
    secondary: { label: "View Packages", href: "/lead-packages" },
  },
  {
    id: "construction-leads",
    short: "Construction Leads",
    icon: HardHat,
    headline: "Construction Project Opportunities",
    description: "Connect construction professionals with potential clients who have active building requirements.",
    listTitle: "Clients requiring",
    items: ["Residential construction", "Commercial construction", "Renovation", "Civil work", "Turnkey projects"],
    image: constructionImg,
    alt: "Aerial view of construction workers on a site",
    cta: { label: "Explore Construction Leads", href: "/contact?service=construction-leads#enquiry-form" },
    secondary: { label: "View Packages", href: "/lead-packages" },
  },
  {
    id: "social-media-marketing",
    short: "Social Media Marketing",
    icon: Megaphone,
    headline: "Build a Brand People Remember",
    description:
      "Consistent, design-led social media that showcases your projects and keeps your business visible to the clients you want.",
    listTitle: "Services include",
    items: [
      "Instagram marketing",
      "Content creation",
      "Reels",
      "Creative design",
      "Social media strategy",
      "Brand positioning",
    ],
    image: socialImg,
    alt: "Styled dining space with plants and statement lighting",
    cta: { label: "Book a Consultation", href: "/contact?service=social-media-marketing#enquiry-form" },
  },
  {
    id: "website-development",
    short: "Website Development",
    icon: Monitor,
    headline: "Turn Your Portfolio Into a Lead-Generating Website",
    description:
      "A premium website that presents your work beautifully and makes it easy for prospects to get in touch.",
    listTitle: "Features",
    items: [
      "Premium website design",
      "Responsive design",
      "Portfolio showcase",
      "WhatsApp integration",
      "Contact forms",
      "SEO-friendly structure",
      "Conversion-focused pages",
    ],
    image: websiteImg,
    alt: "Bright contemporary lounge with designer furniture",
    cta: { label: "Build My Website", href: "/contact?service=website-development#enquiry-form" },
  },
  {
    id: "portfolio-development",
    short: "Portfolio Development",
    icon: Layers,
    headline: "Present Your Work Like a Premium Brand",
    description: "Create professional digital portfolios that help prospects understand your work before the first meeting.",
    listTitle: "Showcasing",
    items: [
      "Completed projects",
      "Before & after work",
      "Services",
      "Client testimonials",
      "Company information",
      "Contact details",
    ],
    image: portfolioImg,
    alt: "Minimal bedroom interior with layered neutral tones",
    cta: { label: "Book a Consultation", href: "/contact?service=portfolio-development#enquiry-form" },
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.short,
      description: `${s.headline}. ${s.description}`,
      url: `${site.url}/services#${s.id}`,
      areaServed: { "@type": "Country", name: "India" },
      provider: { "@id": `${site.url}/#organization` },
    },
  })),
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Everything You Need to Grow Your Business <em>Online.</em>
          </>
        }
        subtitle="From qualified project opportunities to a powerful digital presence, Trimmed Leads provides growth-focused solutions for interior and construction businesses."
        image={heroImg}
        imageAlt="Open-plan modern living space with warm timber accents"
        crumb={{ label: "Services", path: "/services" }}
      >
        <Link href="/contact#enquiry-form" className="btn btn-gold">
          Get Qualified Leads <ArrowRight size={18} />
        </Link>
        <Link href="/lead-packages" className="btn btn-outline-light">
          View Lead Packages
        </Link>
      </PageHero>

      <nav className="service-nav" aria-label="Services on this page">
        <div className="container">
          <ul>
            {services.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span>0{i + 1}</span> {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <section key={s.id} id={s.id} className="service-row" aria-labelledby={`${s.id}-title`}>
              <div className="service-media reveal">
                <Image src={s.image} alt={s.alt} fill sizes="(min-width: 960px) 50vw, 100vw" placeholder="blur" />
                <span className="service-media-num">
                  <Icon size={16} /> Service 0{i + 1}
                </span>
              </div>
              <div className="service-body reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
                <p className="eyebrow">
                  0{i + 1} — {s.short}
                </p>
                <h2 id={`${s.id}-title`}>{s.headline}</h2>
                <p className="lead">{s.description}</p>
                <p className="service-list-title">{s.listTitle}</p>
                <ul className="check-list check-list--2">
                  {s.items.map((item) => (
                    <li key={item}>
                      <Check /> {item}
                    </li>
                  ))}
                </ul>
                <div className="btn-row">
                  <Link href={s.cta.href} className="btn btn-primary">
                    {s.cta.label} <ArrowRight size={18} />
                  </Link>
                  {s.secondary && (
                    <Link href={s.secondary.href} className="btn btn-outline">
                      {s.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand
        eyebrow="Talk to Our Team"
        title={
          <>
            Not sure where to start? <em>Let&apos;s talk.</em>
          </>
        }
        text="Share your business, target location and the projects you want. We'll suggest the right mix of leads and digital support."
      >
        <Link href="/contact#enquiry-form" className="btn btn-gold">
          Talk to Our Team <ArrowRight size={18} />
        </Link>
        <Link href="/lead-packages" className="btn btn-outline-light">
          Compare Packages
        </Link>
      </CtaBand>

      <JsonLd data={servicesJsonLd} />
    </div>
  );
}
