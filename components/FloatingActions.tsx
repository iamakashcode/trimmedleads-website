import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { ArrowRight, Phone, WhatsApp } from "./icons";

/** Floating WhatsApp button (desktop) and a sticky Get Started / Call / WhatsApp bar on mobile. */
export default function FloatingActions() {
  return (
    <>
      <a
        href={whatsappLink()}
        className="wa-float"
        aria-label="Chat with Trimmed Leads on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp size={28} />
        <span className="wa-float-label">Chat with us</span>
      </a>

      <div className="mobile-cta" role="region" aria-label="Quick actions">
        <Link href="/contact#enquiry-form" className="btn btn-primary mobile-cta-main">
          Get Started <ArrowRight size={18} />
        </Link>
        <a href={site.phoneHref} className="mobile-cta-call" aria-label={`Call ${site.phoneDisplay}`}>
          <Phone size={22} />
        </a>
        <a
          href={whatsappLink()}
          className="mobile-cta-wa"
          aria-label="Chat on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp size={24} />
        </a>
      </div>
    </>
  );
}
