import type { Metadata } from "next";
import { site } from "./site";

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Trimmed Leads — Verified interior, architecture and construction leads with pre-scheduled meetings across India",
};

type PageMetaInput = {
  /** Page <title>. Gets " | Trimmed Leads" appended unless `absolute` is true. */
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  /** Optional shorter title / description for social previews. */
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
};

/** Complete per-page metadata: title, description, canonical, Open Graph and Twitter. */
export function pageMeta({ title, description, path, absolute, ogTitle, ogDescription, noindex }: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      url: path,
      title: ogTitle ?? fullTitle,
      description: ogDescription ?? description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? fullTitle,
      description: ogDescription ?? description,
      images: [ogImage.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
