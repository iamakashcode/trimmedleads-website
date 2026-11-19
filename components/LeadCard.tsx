import { BadgeCheck, Calendar, Check, Clipboard, Home, Lock, MapPin, ShieldCheck, Wallet } from "./icons";
import { verificationPoints } from "@/lib/site";

/** Hero visual: an example of how a verified opportunity is presented. */
export default function LeadCard() {
  return (
    <div className="hero-visual hero-anim" style={{ "--d": "420ms" } as React.CSSProperties}>
      <span className="lead-chip lead-chip--a">
        <ShieldCheck size={16} /> Budget &amp; location verified
      </span>

      <figure className="lead-card" aria-label="Example of a verified project opportunity" style={{ margin: 0 }}>
        <div className="lead-card-head">
          <span className="lead-card-label">
            <span className="pulse-dot" aria-hidden="true" /> New Project Inquiry
          </span>
          <span className="tag">
            <BadgeCheck size={14} /> Verified
          </span>
        </div>

        <p className="lead-card-title">Complete Home Interiors</p>

        <dl className="lead-fields">
          <div>
            <dt>
              <MapPin size={14} /> Location
            </dt>
            <dd>Pune, Maharashtra</dd>
          </div>
          <div>
            <dt>
              <Wallet size={14} /> Budget
            </dt>
            <dd>₹18–20 Lac</dd>
          </div>
          <div>
            <dt>
              <Home size={14} /> Property Type
            </dt>
            <dd>3 BHK Apartment</dd>
          </div>
          <div>
            <dt>
              <Clipboard size={14} /> Requirement
            </dt>
            <dd>Full interiors + modular kitchen</dd>
          </div>
        </dl>

        <div className="lead-verify">
          <span>
            {verificationPoints.length}/{verificationPoints.length} details checked
          </span>
          <span className="lead-verify-bar" aria-hidden="true">
            {verificationPoints.map((p) => (
              <span key={p} />
            ))}
          </span>
        </div>

        <div className="lead-meeting">
          <span className="lead-meeting-icon">
            <Calendar size={20} />
          </span>
          <div>
            <strong>Meeting Scheduled</strong>
            <span>Thursday · 11:30 AM</span>
          </div>
          <span className="lead-meeting-check" aria-hidden="true">
            <Check size={16} />
          </span>
        </div>

        <figcaption className="lead-card-foot">
          <Lock size={15} /> Unshared — shared with one business only
        </figcaption>
      </figure>

      <span className="lead-chip lead-chip--b">
        <Lock size={15} /> Exclusive to you
      </span>
      <p className="lead-card-note">Illustrative example</p>
    </div>
  );
}
