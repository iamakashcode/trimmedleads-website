import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/brand/logo-white.png";
import { legalLinks, mainNav, serviceLinks, site, whatsappLink } from "@/lib/site";
import { ArrowUpRight, Instagram, Phone, WhatsApp } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label={`${site.name} — Home`}>
              <Image src={logoWhite} alt={site.name} className="footer-logo" sizes="200px" />
            </Link>
            <p className="footer-tagline">{site.tagline}</p>
            <p className="footer-blurb">
              Verified, genuine and unshared project opportunities for interior designers, architects and
              construction professionals across India.
            </p>
            <div className="footer-social">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${site.instagramHandle}`}>
                <Instagram size={18} />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <WhatsApp size={18} />
              </a>
              <a href={site.phoneHref} aria-label={`Call ${site.phoneDisplay}`}>
                <Phone size={18} />
              </a>
            </div>
          </div>

          <nav className="footer-col" aria-label="Footer navigation">
            <h2 className="footer-heading">Navigation</h2>
            <ul>
              {mainNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Services">
            <h2 className="footer-heading">Services</h2>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2 className="footer-heading">Legal</h2>
            <ul>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <h2 className="footer-heading footer-heading--spaced">Reach Us</h2>
            <ul>
              <li>
                <a href={site.phoneHref}>
                  <Phone size={14} /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsApp size={14} /> WhatsApp Us
                </a>
              </li>
              <li>
                <a href={site.url}>{site.displayUrl}</a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {site.instagramHandle} <ArrowUpRight size={14} />
                </a>
              </li>
              <li className="footer-muted">{site.serviceArea} Services</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <p className="footer-muted">Interior · Architecture · Construction Lead Generation &amp; Digital Marketing</p>
        </div>
      </div>
    </footer>
  );
}
