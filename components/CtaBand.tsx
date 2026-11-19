import Image from "next/image";
import ctaImage from "@/public/images/cta-dark-interior.jpg";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  children: React.ReactNode;
};

/** Large closing call-to-action on a dark, softly lit interior image. */
export default function CtaBand({ eyebrow = "Let's Talk", title, text, children }: Props) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <Image src={ctaImage} alt="" fill sizes="100vw" placeholder="blur" className="cta-band-img" />
      <div className="cta-band-overlay" aria-hidden="true" />
      <div className="container cta-band-inner reveal">
        <p className="eyebrow eyebrow--light eyebrow--center">{eyebrow}</p>
        <h2 id="cta-band-title" className="cta-band-title">
          {title}
        </h2>
        <p className="cta-band-text">{text}</p>
        <div className="cta-band-actions">{children}</div>
      </div>
    </section>
  );
}
