import Link from "next/link";
import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

type Props = { title: string; intro: string; path: string; updated: string; children: React.ReactNode };

export default function LegalPage({ title, intro, path, updated, children }: Props) {
  return (
    <>
      <section className="band-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="legal">
            <p className="legal-updated">Last updated: {updated}</p>
            {children}
          </article>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: title, item: `${site.url}${path}` },
          ],
        }}
      />
    </>
  );
}
