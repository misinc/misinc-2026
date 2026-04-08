import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import "@/styles/resources-faq-variants.css";

export type ResourcesFaqCollectionItem = {
  title: string;
  href: string;
  preview: string[];
  eyebrow: string;
  accent: string;
};

export type ResourcesFaqCollectionsSectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  collections: ResourcesFaqCollectionItem[];
  backgroundColor?: string;
};

export function ResourcesFaqCollectionsSection({
  sectionId,
  eyebrow,
  title,
  description,
  collections,
  backgroundColor,
}: ResourcesFaqCollectionsSectionProps) {
  return (
    <section
      id={sectionId}
      className="rfv-section rfv-section--grid"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <header className="rfv-header">
        {eyebrow ? <p className="rfv-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <div className="rfv-grid">
        {collections.map((collection) => (
          <article key={collection.title} className="rfv-card rfv-card--editorial">
            <span className="rfv-chip" style={{ color: collection.accent }}>
              {collection.eyebrow}
            </span>
            <h3>{collection.title}</h3>
            <ul>
              {collection.preview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to={collection.href} className="rfv-link">
              View full FAQ
              <ArrowRight />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
