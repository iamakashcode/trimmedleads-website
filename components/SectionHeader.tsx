type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center" | "split";
  tone?: "light" | "dark";
  id?: string;
};

export default function SectionHeader({ eyebrow, title, intro, align = "left", tone = "light", id }: Props) {
  return (
    <div className={`section-header section-header--${align} reveal`} data-tone={tone}>
      <div>
        <p className={`eyebrow${tone === "dark" ? " eyebrow--light" : ""}`}>{eyebrow}</p>
        <h2 className="section-title" id={id}>
          {title}
        </h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
