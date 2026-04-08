import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import "@/styles/guides-section-variants.css";

export type GuidesEditorialItem = {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
  accent: string;
};

export type GuidesEditorialSectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  guides: GuidesEditorialItem[];
  backgroundColor?: string;
};

export function GuidesEditorialSection({
  sectionId,
  eyebrow,
  title,
  description,
  guides,
  backgroundColor,
}: GuidesEditorialSectionProps) {
  return (
    <section
      id={sectionId}
      className="gsv-section gsv-section--grid"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <header className="gsv-header">
        {eyebrow ? <p className="gsv-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <div className="gsv-grid">
        {guides.map((guide) => (
          <article key={guide.title} className="gsv-card gsv-card--editorial">
            <div className="gsv-card-top">
              <span className="gsv-chip" style={{ color: guide.accent }}>
                {guide.eyebrow}
              </span>
            </div>
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <Link to={guide.href} className="gsv-link">
              Open guide
              <ArrowRight />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
