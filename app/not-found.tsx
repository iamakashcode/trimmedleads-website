import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="band-hero" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <p className="eyebrow eyebrow--light">404</p>
        <h1>This page has moved — or never existed.</h1>
        <p>Let&apos;s get you back to better opportunities.</p>
        <div className="btn-row" style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn-gold">
            Back to Home <ArrowRight size={18} />
          </Link>
          <Link href="/lead-packages" className="btn btn-outline-light">
            View Lead Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
