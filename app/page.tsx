import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import LeadCard from "@/components/LeadCard";
import SectionHeader from "@/components/SectionHeader";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Calendar,
  Check,
  Compass,
  Filter,
  HardHat,
  Handshake,
  India,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sofa,
} from "@/components/icons";
import { formatINR, packages, verificationPoints } from "@/lib/site";
import architectsImg from "@/public/images/architects.jpg";
import constructionImg from "@/public/images/construction.jpg";
import heroImg from "@/public/images/hero-living-room.jpg";
import interiorImg from "@/public/images/interior-designers.jpg";
import websiteImg from "@/public/images/website-banner.jpg";

export const metadata = pageMeta({
  title: "Trimmed Leads | Verified Interior, Architecture & Construction Leads in India",
  absolute: true,
  description:
    "Get verified, genuine and unshared interior design, architect and construction project leads across India — with pre-scheduled meetings. Quality meetings, not random leads.",
  path: "/",
  ogTitle: "Trimmed Leads — Stop Chasing Leads. Start Closing Projects.",
  ogDescription:
    "Verified interior, architecture & construction opportunities with pre-scheduled meetings. PAN India, since 2021.",
});

const trust = [
  { icon: BadgeCheck, label: "Since 2021" },
  { icon: India, label: "PAN India" },
  { icon: ShieldCheck, label: "Verified Opportunities" },
  { icon: Lock, label: "Unshared Leads" },
  { icon: Calendar, label: "Pre-Scheduled Meetings" },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Verified",
    text: "Every prospect is checked for important project and requirement details.",
  },
  {
    icon: BadgeCheck,
    title: "Genuine",
    text: "Focus on real project requirements rather than low-quality enquiries.",
  },
  {
    icon: Lock,
    title: "Unshared",
    text: "Leads are provided exclusively instead of being circulated among multiple businesses.",
  },
  {
    icon: Handshake,
    title: "Meeting Focused",
    text: "The objective is to create meaningful conversations between businesses and potential clients.",
  },
];

const audiences = [
  {
    icon: Sofa,
    title: "Interior Designers",
    text: "Get qualified residential and commercial interior project opportunities.",
    image: interiorImg,
    alt: "Warm, contemporary living room interior with natural textures",
    href: "/services#interior-leads",
  },
  {
    icon: Compass,
    title: "Architects",
    text: "Connect with clients looking for architecture, planning and design services.",
    image: architectsImg,
    alt: "Modern residential architecture lit at dusk",
    href: "/services#architecture-leads",
  },
  {
    icon: HardHat,
    title: "Construction Professionals",
    text: "Discover potential clients with active construction and development requirements.",
    image: constructionImg,
    alt: "Construction team on an active building site",
    href: "/services#construction-leads",
  },
];

const steps = [
  { title: "Inquiry", text: "Potential client shares project requirement.", icon: MessageCircle },
  { title: "Verification", text: "Our team verifies the requirement, budget, location and project details.", icon: ShieldCheck },
  { title: "Qualification", text: "The opportunity is assessed for suitability.", icon: Filter },
  { title: "Meeting", text: "A qualified business conversation/meeting is scheduled.", icon: Calendar },
];

const webFeatures = [
  "Premium Website Design",
  "Mobile Responsive",
  "Portfolio Showcase",
  "WhatsApp Integration",
  "Lead Generation Focused",
  "SEO-Friendly Structure",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src={heroImg}
          alt="Premium modern living room interior with warm wood and soft natural light"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="hero-img"
        />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-grid">
          <div>
            <p className="eyebrow eyebrow--light hero-anim" style={{ "--d": "0ms" } as React.CSSProperties}>
              Interior · Architecture · Construction Leads
            </p>
            <h1 id="hero-title" className="hero-title hero-anim" style={{ "--d": "100ms" } as React.CSSProperties}>
              <span>Stop Chasing Leads.</span> <em>Start Closing Projects.</em>
            </h1>
            <p className="hero-lead hero-anim" style={{ "--d": "220ms" } as React.CSSProperties}>
              Verified Interior, Architecture &amp; Construction Opportunities — With Pre-Scheduled Meetings.
            </p>
            <p className="hero-support hero-anim" style={{ "--d": "300ms" } as React.CSSProperties}>
              Trimmed Leads helps interior designers, architects and construction professionals connect with genuine
              prospects who are actively looking for professional services.
            </p>
            <div className="hero-ctas hero-anim" style={{ "--d": "380ms" } as React.CSSProperties}>
              <Link href="/contact#enquiry-form" className="btn btn-gold">
                Get Qualified Leads <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn btn-outline-light">
                Explore Our Services
              </Link>
            </div>
          </div>

          <LeadCard />
        </div>

        <a href="#difference" className="hero-scroll" aria-label="Scroll to learn more">
          Scroll <ArrowDown size={14} />
        </a>
      </section>

      {/* Trust bar */}
      <section className="trust" aria-label="Why businesses trust Trimmed Leads">
        <div className="container">
          <ul className="trust-list reveal">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="trust-item">
                <span className="trust-icon">
                  <Icon size={20} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Difference */}
      <section className="section" id="difference">
        <div className="container">
          <SectionHeader
            align="split"
            eyebrow="What Makes Trimmed Leads Different"
            title={
              <>
                Quality Meetings. <em>Not Random Leads.</em>
              </>
            }
            intro="We don't sell lists or bulk enquiries. Each opportunity is checked, qualified and turned into a scheduled conversation — so your time goes to clients who are ready to talk."
          />

          <div className="card-grid card-grid--4">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <article
                key={title}
                className="feature-card reveal"
                style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              >
                <div className="feature-card-top">
                  <span className="feature-num">0{i + 1}</span>
                  <span className="icon-badge">
                    <Icon size={22} />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="verify-panel reveal">
            <div>
              <p className="eyebrow eyebrow--light">Before a meeting is scheduled</p>
              <h3>What we verify with every prospect</h3>
              <p>
                Each detail is confirmed with the client so you walk into the conversation knowing the scope, the
                budget and that they&apos;re ready to discuss the project.
              </p>
            </div>
            <ul className="verify-chips">
              {verificationPoints.map((point) => (
                <li key={point}>
                  <Check size={16} /> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="section bg-cream" aria-labelledby="who-we-help">
        <div className="container">
          <SectionHeader
            align="center"
            id="who-we-help"
            eyebrow="Who We Help"
            title={
              <>
                Built for the people who <em>design &amp; build</em> India
              </>
            }
            intro="Focused exclusively on interior, architecture and construction businesses — so every opportunity is relevant to the work you do."
          />

          <div className="audience-grid">
            {audiences.map(({ icon: Icon, title, text, image, alt, href }, i) => (
              <article
                key={title}
                className="audience-card reveal"
                style={{ "--d": `${i * 110}ms` } as React.CSSProperties}
              >
                <Image src={image} alt={alt} fill sizes="(min-width: 900px) 33vw, 100vw" placeholder="blur" />
                <span className="audience-icon">
                  <Icon size={24} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href} className="audience-link stretched">
                  View opportunities <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>

          <div className="center-cta reveal">
            <Link href="/contact#enquiry-form" className="btn btn-primary">
              Find Projects For Your Business <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-navy" aria-labelledby="process-title">
        <div className="container">
          <SectionHeader
            align="split"
            tone="dark"
            id="process-title"
            eyebrow="Our Process"
            title={
              <>
                From first enquiry to a <em>confirmed meeting</em>
              </>
            }
            intro="A simple four-step process designed to filter out noise before it ever reaches your phone."
          />
          <ol className="process">
            {steps.map((step, i) => (
              <li key={step.title} className="process-step reveal" style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>
                <span className="process-num">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section" aria-labelledby="pricing-teaser">
        <div className="container teaser">
          <div className="reveal">
            <p className="eyebrow">Lead Packages</p>
            <h2 className="section-title" id="pricing-teaser">
              Clear pricing, <em>matched to your project size</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Every package includes 10 verified, genuine and unshared leads with pre-scheduled meetings. Choose the
              budget category that fits the projects you want to win.
            </p>
            <div className="btn-row" style={{ marginTop: 36 }}>
              <Link href="/lead-packages" className="btn btn-primary">
                View Lead Packages <ArrowRight size={18} />
              </Link>
              <Link href="/contact#enquiry-form" className="btn btn-outline">
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            <ul className="teaser-list">
              {packages.map((p) => (
                <li key={p.id}>
                  <Link href={`/lead-packages#${p.id}`} className="teaser-row">
                    <span className="teaser-name">{p.name}</span>
                    <span className="teaser-budget">{p.budget} projects</span>
                    <span className="teaser-price">
                      {formatINR(p.price)}
                      <small>{p.leads} leads</small>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="teaser-note">Budget categories refer to the client&apos;s approximate project budget.</p>
          </div>
        </div>
      </section>

      {/* Website development banner */}
      <section className="section web-banner-section" aria-labelledby="web-banner-title">
        <div className="container">
          <div className="web-banner reveal">
            <div className="web-banner-media">
              <Image
                src={websiteImg}
                alt="Elegant living room styled for a design portfolio"
                fill
                sizes="(min-width: 960px) 50vw, 100vw"
                placeholder="blur"
              />
              <div className="browser" aria-hidden="true">
                <div className="browser-bar">
                  <i />
                  <i />
                  <i />
                  <span className="browser-url">yourstudio.in</span>
                </div>
                <div className="browser-body">
                  <div className="browser-lines">
                    <span />
                    <span />
                    <span />
                    <em className="browser-btn">Book a site visit</em>
                  </div>
                  <div className="browser-tiles">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>

            <div className="web-banner-body">
              <p className="eyebrow">Website Development</p>
              <h2 className="section-title" id="web-banner-title">
                Your Business Needs <em>More Than Leads.</em>
              </h2>
              <p className="web-banner-sub">Build a Digital Presence That Converts Visitors Into Enquiries.</p>
              <p className="web-banner-text">
                When a prospect looks you up before a meeting, your website should reflect the quality of your work. We
                design portfolio-led websites for interior, architecture and construction businesses.
              </p>
              <ul className="check-list check-list--2">
                {webFeatures.map((f) => (
                  <li key={f}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/services#website-development" className="btn btn-primary">
                Build My Website <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Get Started"
        title={
          <>
            Ready to Grow Your <em>Interior &amp; Construction</em> Business?
          </>
        }
        text="Let's connect you with better opportunities and build a stronger digital presence."
      >
        <Link href="/contact#enquiry-form" className="btn btn-gold">
          Get Started <ArrowRight size={18} />
        </Link>
        <Link href="/contact" className="btn btn-outline-light">
          Contact Us
        </Link>
      </CtaBand>
    </>
  );
}
