import { pageMeta } from "@/lib/seo";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, Handshake, India, Lock, ShieldCheck, Target, TrendUp } from "@/components/icons";
import { site } from "@/lib/site";
import officeImg from "@/public/images/about-office.jpg";
import plansImg from "@/public/images/architect-plans.jpg";

export const metadata = pageMeta({
  title: "About Us — Lead Generation for Interior & Construction Businesses",
  description:
    "Founded in 2021, Trimmed Leads helps interior designers, architects and construction professionals across India grow with verified, unshared project opportunities and digital marketing.",
  path: "/about",
  ogTitle: "About Trimmed Leads — Helping Interior & Construction Businesses Grow Smarter",
  ogDescription:
    "Better opportunities, not just more enquiries. Learn how Trimmed Leads verifies every prospect before a meeting is scheduled.",
});

/**
 * Founder photo: add the image to /public/images (e.g. founder.jpg), then replace
 * `null` below with an import:  import founderPhoto from "@/public/images/founder.jpg";
 */
const founderPhoto: StaticImageData | null = null;

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Opportunities",
    text: "Location, property type, requirement, budget and readiness are confirmed before anything reaches you.",
  },
  {
    icon: Lock,
    title: "Unshared Leads",
    text: "Each opportunity goes to one business — not circulated to a list of competitors.",
  },
  {
    icon: Target,
    title: "Project-Based Targeting",
    text: "Choose the budget category and type of project you want, so the work fits your business.",
  },
  {
    icon: Handshake,
    title: "Meeting Focused",
    text: "We measure success in scheduled conversations, not in the number of enquiries forwarded.",
  },
  {
    icon: India,
    title: "PAN India Reach",
    text: "Working with interior, architecture and construction businesses across India.",
  },
  {
    icon: TrendUp,
    title: "Digital Growth Support",
    text: "Websites, portfolios and social media that help you convert the opportunities you receive.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Trimmed Leads"
        title={
          <>
            We Help Interior &amp; Construction Businesses <em>Grow Smarter.</em>
          </>
        }
        subtitle="Trimmed Leads was created to solve a simple problem — businesses need better opportunities, not just more enquiries."
        image={officeImg}
        imageAlt="Bright, modern office space with floor-to-ceiling windows"
        crumb={{ label: "About Us", path: "/about" }}
      />

      {/* Story */}
      <section className="section" aria-labelledby="story-title">
        <div className="container split">
          <div className="media-wrap reveal">
            <div className="media-frame">
              <Image
                src={plansImg}
                alt="Architect reviewing project drawings at a desk"
                fill
                sizes="(min-width: 960px) 45vw, 100vw"
                placeholder="blur"
              />
            </div>
            <div className="media-badge" aria-hidden="true">
              <div>
                <small>Est.</small>
                <strong>{site.founded}</strong>
              </div>
            </div>
          </div>

          <div className="story-text reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title" id="story-title">
              Started in 2021 with <em>one clear idea</em>
            </h2>
            <div className="prose">
              <p className="lead">
                Interior designers, architects and builders were spending more time chasing enquiries than meeting
                clients. Numbers that never picked up. Budgets that didn&apos;t match the brief. The same enquiry sold
                to several businesses at once.
              </p>
              <p>
                Trimmed Leads began in {site.founded} to do things differently. Instead of passing on every enquiry we
                can find, we check each one first — where the project is, what kind of property it is, what the client
                needs, the budget they have in mind and whether they&apos;re ready to talk. Only then do we arrange a
                meeting, and each opportunity goes to one business only.
              </p>
              <p>
                Alongside lead generation, we help our clients strengthen their digital presence through websites,
                portfolios and social media — because a great first meeting often starts with a great first
                impression online.
              </p>
            </div>
            <div className="signature-line">
              <div>
                <strong>Trimmed Leads</strong>
                <br />
                Interior &amp; Construction Lead Generation · PAN India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-cream" aria-label="Mission and vision">
        <div className="container mv-grid">
          <article className="mv-card reveal">
            <span className="mv-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="eyebrow">Our Mission</p>
            <blockquote>To connect the right businesses with the right project opportunities.</blockquote>
            <p>
              We focus on quality, verification and meaningful business conversations — so the time our clients spend
              on a lead is time spent with someone who is genuinely planning a project.
            </p>
          </article>
          <article className="mv-card mv-card--dark reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            <span className="mv-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="eyebrow eyebrow--light">Our Vision</p>
            <blockquote>
              To become a trusted growth partner for every interior, architecture and construction professional looking
              to scale their business.
            </blockquote>
            <p>
              Growth that lasts comes from steady, reliable opportunities and a brand that clients trust. That&apos;s
              the partnership we&apos;re building with every business we work with.
            </p>
          </article>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SectionHeader
            align="split"
            id="why-title"
            eyebrow="Why Clients Choose Us"
            title={
              <>
                Fewer wasted calls. <em>More real conversations.</em>
              </>
            }
            intro="Everything we do is designed around one outcome: a qualified meeting with a client who is ready to discuss their project."
          />
          <div className="card-grid card-grid--3">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <article key={title} className="why-card reveal" style={{ "--d": `${(i % 3) * 90}ms` } as React.CSSProperties}>
                <span className="icon-badge">
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section--tight bg-navy" aria-label="Trimmed Leads at a glance">
        <div className="container">
          <div className="stats">
            <div className="stat reveal">
              <span className="stat-value">
                <Counter from={2000} to={site.founded} />
              </span>
              <span className="stat-label">Since</span>
              <span className="stat-desc">Helping businesses find better opportunities since {site.founded}.</span>
            </div>
            <div className="stat reveal" style={{ "--d": "90ms" } as React.CSSProperties}>
              <span className="stat-value">
                <em>PAN</em>
              </span>
              <span className="stat-label">India Reach</span>
              <span className="stat-desc">Working with professionals in cities across India.</span>
            </div>
            <div className="stat reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
              <span className="stat-value">
                <Counter to={3} />
              </span>
              <span className="stat-label">Industries in Focus</span>
              <span className="stat-desc">Interior design, architecture &amp; construction — nothing else.</span>
            </div>
            <div className="stat reveal" style={{ "--d": "270ms" } as React.CSSProperties}>
              <span className="stat-value">
                <Counter to={7} />
              </span>
              <span className="stat-label">Point Verification</span>
              <span className="stat-desc">Details confirmed on every opportunity before a meeting.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section" aria-labelledby="founder-title">
        <div className="container founder">
          <div className="founder-portrait reveal">
            {founderPhoto ? (
              <Image src={founderPhoto} alt={`${site.founder}, Founder of Trimmed Leads`} fill sizes="440px" />
            ) : (
              <div className="founder-initials" role="img" aria-label={`Portrait of ${site.founder} — photo coming soon`}>
                <span>SS</span>
                <small>Founder</small>
              </div>
            )}
          </div>
          <div className="reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="eyebrow">Meet the Founder</p>
            <blockquote className="founder-quote">
              &ldquo;Built with a focus on quality, trust and long-term business relationships, Trimmed Leads aims to
              help interior and construction professionals create a stronger pipeline of opportunities.&rdquo;
            </blockquote>
            <h2 className="founder-name" id="founder-title">
              {site.founder}
            </h2>
            <p className="founder-role">Founder — Trimmed Leads</p>
            <div className="btn-row" style={{ marginTop: 36 }}>
              <Link href="/contact#enquiry-form" className="btn btn-primary">
                Book a Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Let&apos;s build your <em>pipeline</em> together
          </>
        }
        text="Tell us where you work and the kind of projects you want. We'll recommend the right package for your business."
      >
        <Link href="/contact#enquiry-form" className="btn btn-gold">
          Get Qualified Leads <ArrowRight size={18} />
        </Link>
        <Link href="/lead-packages" className="btn btn-outline-light">
          View Lead Packages
        </Link>
      </CtaBand>
    </>
  );
}
