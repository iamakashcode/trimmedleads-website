# Trimmed Leads — Website

Marketing website for **Trimmed Leads** (www.trimmedleads.com), built with Next.js 16 (App Router, TypeScript).

Pages: Home · About Us · Services · Lead Packages · Contact, plus Privacy Policy, Terms & Conditions and Refund / Replacement Policy.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build: `npm run build && npm start`.

## Before going live

1. **Phone & WhatsApp** — +91 88265 99387 is set in `lib/site.ts` (`phoneDisplay`, `phoneHref`, `whatsappNumber`). It is used for every Call and WhatsApp button.
2. **Enquiry form** — on submit, the form is validated and WhatsApp opens with the full enquiry pre-filled to that number; the visitor presses Send. No server setup or API keys are needed.
3. **Founder photo** — add it to `public/images/` and follow the comment at the top of `app/about/page.tsx`.
4. **Legal pages** — the Privacy, Terms and Refund / Replacement pages contain general starter wording. Have them reviewed and add your exact package terms.
5. **Photography** — images in `public/images/` are from Unsplash (free to use under the Unsplash License). Swap in real project photos when available, keeping the same file names.

## Where to edit things

| What | Where |
| --- | --- |
| Phone/WhatsApp number, business details, prices, nav links, form options | `lib/site.ts` |
| Page copy | `app/<page>/page.tsx` |
| Colours, typography, spacing | `app/globals.css` (tokens at the top) |
| Page titles & meta descriptions | `metadata` at the top of each page (uses `lib/seo.ts`) |
| Logo files | `public/brand/` |
| Favicon / share image | `app/icon.png`, `app/apple-icon.png`, `public/og-image.jpg` |

## Built in

- Responsive, mobile-first layout with sticky transparent header, mobile menu, floating WhatsApp button and sticky mobile "Get Started" bar
- Subtle scroll-reveal animations (respects reduced-motion settings; content stays visible without JavaScript)
- SEO: unique title/description/canonical/Open Graph per page, `sitemap.xml`, `robots.txt`, web manifest, and structured data (ProfessionalService, Service list, OfferCatalog, FAQPage, BreadcrumbList)
- Enquiry form with validation and Indian mobile number normalisation that sends the enquiry via WhatsApp, with package/service pre-selection from links (`/contact?package=pro`, `/contact?service=interior-leads`)
- Click-to-call and WhatsApp buttons in the header, mobile menu, sticky mobile bar, contact page and footer
- Security headers configured in `next.config.ts`

## Deploy

Works out of the box on Vercel (or any Node host running `npm start`). No environment variables are required — just point the `trimmedleads.com` domain at the deployment.
