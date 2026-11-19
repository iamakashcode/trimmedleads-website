"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoNavy from "@/public/brand/logo-mark-navy.png";
import logoWhite from "@/public/brand/logo-mark-white.png";
import { mainNav, site, whatsappLink } from "@/lib/site";
import { ArrowRight, Close, Instagram, Menu, Phone, WhatsApp } from "./icons";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const root = document.documentElement;
    root.classList.add("menu-open");
    window.addEventListener("keydown", onKey);
    return () => {
      root.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header className="site-header" data-solid={solid ? "true" : "false"} data-open={open ? "true" : "false"}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} — Home`} onClick={close}>
          <Image src={logoWhite} alt="" className="brand-logo brand-logo--light" preload sizes="96px" />
          <Image src={logoNavy} alt="" className="brand-logo brand-logo--dark" sizes="96px" />
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href={site.phoneHref} className="header-phone" aria-label={`Call ${site.phoneDisplay}`}>
            <Phone size={17} />
            <span>{site.phoneDisplay}</span>
          </a>
          <Link href="/contact#enquiry-form" className="btn btn-sm btn-header">
            Get Started <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {mainNav.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                  <ArrowRight size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu-footer">
          <Link href="/contact#enquiry-form" className="btn btn-gold btn-block" onClick={close}>
            Get Qualified Leads <ArrowRight size={18} />
          </Link>
          <div className="mobile-menu-contact">
            <a href={site.phoneHref} className="btn btn-outline">
              <Phone size={18} /> Call Now
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WhatsApp size={18} /> WhatsApp
            </a>
          </div>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="mobile-menu-social">
            <Instagram size={18} /> {site.instagramHandle}
          </a>
        </div>
      </div>
    </header>
  );
}
