import { ArrowRight, CalendarDays } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import "@/styles/blog-section-variants.css";

export type BlogLatestGridItem = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  category: string;
  published: string;
};

export type BlogLatestGridSectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  posts: BlogLatestGridItem[];
  viewAllHref?: string;
  viewAllLabel?: string;
  backgroundColor?: string;
};

function ArticleMeta({ post }: { post: BlogLatestGridItem }) {
  return (
    <div className="bsv-meta-row">
      <span className="bsv-chip">{post.category}</span>
      <span className="bsv-meta-item">
        <CalendarDays />
        {post.published}
      </span>
    </div>
  );
}

export function BlogLatestGridSection({
  sectionId,
  eyebrow,
  title,
  description,
  posts,
  viewAllHref,
  viewAllLabel = "View All Blog Posts",
  backgroundColor,
}: BlogLatestGridSectionProps) {
  return (
    <section
      id={sectionId}
      className="bsv-section bsv-section--latest-grid"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <header className="bsv-header">
        {eyebrow ? <p className="bsv-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <div className="bsv-grid">
        {posts.map((post) => (
          <article key={post.title} className="bsv-card bsv-card--article">
            <div className="bsv-media">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="bsv-card-body">
              <ArticleMeta post={post} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={post.href} className="bsv-link">
                Read article
                <ArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {viewAllHref ? (
        <div className="bsv-section-footer">
          <Link to={viewAllHref} className="bsv-link">
            {viewAllLabel}
            <ArrowRight />
          </Link>
        </div>
      ) : null}
    </section>
  );
}
