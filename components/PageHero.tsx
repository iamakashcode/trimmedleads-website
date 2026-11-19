import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image: StaticImageData;
  imageAlt: string;
  crumb: { label: string; path: string };
  children?: React.ReactNode;
  imagePosition?: string;
};

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt, crumb, children, imagePosition }: Props) {
  return (
    <section className="page-hero">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="page-hero-img"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="container page-hero-content">
        <nav aria-label="Breadcrumb" className="breadcrumb hero-anim" style={{ "--d": "0ms" } as React.CSSProperties}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{crumb.label}</li>
          </ol>
        </nav>
        <p className="eyebrow eyebrow--light hero-anim" style={{ "--d": "80ms" } as React.CSSProperties}>
          {eyebrow}
        </p>
        <h1 className="page-hero-title hero-anim" style={{ "--d": "160ms" } as React.CSSProperties}>
          {title}
        </h1>
        {subtitle && (
          <p className="page-hero-sub hero-anim" style={{ "--d": "240ms" } as React.CSSProperties}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="hero-ctas hero-anim" style={{ "--d": "320ms" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: crumb.label, item: `${site.url}${crumb.path}` },
          ],
        }}
      />
    </section>
  );
}
