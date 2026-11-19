import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Trimmed Leads collects, uses and protects the information you share through our website and enquiry form.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated="November 2026"
      intro="How we collect, use and protect the information you share with Trimmed Leads."
    >
      <h2>Information we collect</h2>
      <p>When you submit an enquiry through our website, we collect the details you provide, which may include:</p>
      <ul>
        <li>Your name and business or company name</li>
        <li>WhatsApp number and email address</li>
        <li>Business type, preferred services, target location, project budget and timeline</li>
        <li>Any message you choose to include</li>
      </ul>
      <p>
        Like most websites, our hosting provider may also record basic technical information such as your browser type
        and the pages you visit, to keep the website secure and working properly.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and recommend a suitable package or service</li>
        <li>To contact you by phone, WhatsApp or email about your enquiry and our services</li>
        <li>To deliver and coordinate the services you choose</li>
        <li>To improve our website and services</li>
      </ul>

      <h2>Sharing of information</h2>
      <p>
        We do not sell your personal information. We share it only with service providers that help us run our
        business (for example, website hosting, email or form-handling tools), and only as needed for those purposes,
        or where required by law.
      </p>

      <h2>Data retention &amp; security</h2>
      <p>
        We keep enquiry information only for as long as it is needed for the purposes above, and we take reasonable
        measures to protect it from unauthorised access.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete the personal information you have shared with us, or to stop
        contacting you, at any time by reaching out through our <Link href="/contact">contact page</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        For any privacy-related questions, please contact {site.name} via our <Link href="/contact">contact page</Link>{" "}
        or on Instagram at{" "}
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
          {site.instagramHandle}
        </a>
        .
      </p>
    </LegalPage>
  );
}
