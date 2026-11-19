import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Refund / Replacement Policy",
  description:
    "How replacement leads work at Trimmed Leads when a scheduled meeting does not proceed, and how refund requests are handled.",
  path: "/refund-replacement-policy",
});

export default function RefundReplacementPage() {
  return (
    <LegalPage
      title="Refund / Replacement Policy"
      path="/refund-replacement-policy"
      updated="November 2026"
      intro="Our focus is on meetings — here's how replacements and refund requests are handled."
    >
      <h2>Our focus is on meetings</h2>
      <p>
        Trimmed Leads focuses on scheduled meetings rather than simply counting enquiries. Every lead is verified before
        a meeting is arranged with your business.
      </p>

      <h2>Replacement leads</h2>
      <p>
        If a client denies or does not proceed with the scheduled meeting according to the agreed terms, a replacement
        lead may be provided as per the applicable package policy.
      </p>
      <ul>
        <li>Please inform our team promptly if a scheduled meeting does not take place.</li>
        <li>Each case is reviewed against the terms agreed for your package.</li>
      </ul>

      <h2>Refunds</h2>
      <p>
        Refund eligibility, if any, depends on the terms agreed for your package at the time of purchase. Please contact
        our team before purchasing if you have any questions about these terms.
      </p>

      <h2>How to raise a request</h2>
      <p>
        Reach out through our <Link href="/contact">contact page</Link> or WhatsApp with your business name, package
        and the details of the meeting concerned. Our team will review it and get back to you.
      </p>
    </LegalPage>
  );
}
