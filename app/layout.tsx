import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Trimmed Leads | Verified Interior, Architecture & Construction Leads in India",
    template: "%s | Trimmed Leads",
  },
  description:
    "Trimmed Leads provides verified, genuine and unshared interior design, architecture and construction leads across India — with pre-scheduled meetings.",
  applicationName: site.name,
  keywords: [
    "interior design leads",
    "interior designer leads",
    "interior leads India",
    "architecture leads",
    "architect leads India",
    "construction leads",
    "construction project leads",
    "verified interior leads",
    "interior marketing agency",
    "interior designer website development",
    "interior designer digital marketing",
    "construction company digital marketing",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Marketing",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Trimmed Leads" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#142033",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo-navy.png`,
  image: `${site.url}/og-image.jpg`,
  slogan: site.tagline,
  telephone: "+91-88265-99387",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-88265-99387",
    contactType: "sales",
    areaServed: "IN",
  },
  description:
    "Lead generation and digital marketing for interior designers, architects and construction professionals across India. Verified, genuine and unshared project opportunities with pre-scheduled meetings.",
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: site.founder },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [site.instagramUrl],
  knowsAbout: [
    "Interior design lead generation",
    "Architecture lead generation",
    "Construction lead generation",
    "Website development for interior designers",
    "Social media marketing for construction companies",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`} data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <RevealObserver />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
