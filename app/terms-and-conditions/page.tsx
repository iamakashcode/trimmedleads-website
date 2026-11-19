import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Trimmed Leads lead packages, pre-scheduled meetings, replacements and digital marketing services.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms-and-conditions"
      updated="November 2026"
      intro="The general terms that apply when you use our website or purchase a Trimmed Leads package or service."
    >
      <h2>About our service</h2>
      <p>
        Trimmed Leads provides verified, genuine and unshared project opportunities for interior designers, architects
        and construction professionals, along with digital marketing services such as website development, portfolio
        development and social media marketing.
      </p>

      <h2>Lead packages</h2>
      <ul>
        <li>Each package includes the number of leads stated for that package, in the selected budget category.</li>
        <li>
          Budget categories refer to the approximate project budget shared by the prospective client during
          verification.
        </li>
        <li>Leads are provided to one business only and are not shared with other businesses for the same requirement.</li>
        <li>Specific package details, timelines and delivery terms are confirmed with you before work begins.</li>
      </ul>

      <h2>Verification &amp; meetings</h2>
      <p>
        Our team verifies key details with each prospect — including location, property type, project requirement,
        approximate budget, service needed, readiness to discuss and meeting availability — before a meeting is
        scheduled. Information is provided in good faith based on what the prospect shares with us.
      </p>
      <p>
        Trimmed Leads arranges qualified business conversations. The outcome of any meeting, including whether a
        project is awarded, depends on the client and the business and is not guaranteed.
      </p>

      <h2>Replacements</h2>
      <p>
        Our focus is on scheduled meetings. If a client denies or does not proceed with the scheduled meeting according
        to the agreed terms, a replacement lead may be provided as per the applicable package policy. See our{" "}
        <Link href="/refund-replacement-policy">Refund / Replacement Policy</Link> for details.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Attend scheduled meetings on time, or inform us promptly if you need to reschedule.</li>
        <li>Engage with prospects professionally and use their information only for the project discussed.</li>
        <li>Provide accurate business details so we can match opportunities to your services and location.</li>
      </ul>

      <h2>Digital marketing services</h2>
      <p>
        The scope, deliverables, timelines and fees for website development, portfolio development and social media
        marketing are agreed separately for each project.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The version published on this page applies from the date shown
        above. For any questions, please <Link href="/contact">contact us</Link>.
      </p>
    </LegalPage>
  );
}
