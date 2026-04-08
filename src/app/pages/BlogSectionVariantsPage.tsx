import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  CalendarDays,
  Newspaper,
  RadioTower,
} from "lucide-react";
import { Link } from "react-router";
import {
  BlogLatestGridSection,
  type BlogLatestGridItem,
} from "@/app/components/sections";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import blogImageOne from "@/assets/24a40fea387d6d870b36715ebf5f41ccc1196a04.png";
import blogImageTwo from "@/assets/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";
import blogImageThree from "@/assets/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import blogImageFour from "@/assets/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import "@/styles/blog-section-variants.css";

const posts: BlogLatestGridItem[] = [
  {
    title: "How To Improve Local Search Visibility for Service Businesses",
    excerpt:
      "A practical framework for increasing qualified local traffic with stronger intent alignment and trust cues.",
    href: "/blog/improve-local-search-visibility",
    image: blogImageOne,
    category: "Local SEO",
    published: "March 18, 2026",
  },
  {
    title: "AEO Basics: Structuring Pages for AI-Powered Answers",
    excerpt:
      "Learn the page architecture and schema fundamentals that help content surface in answer-first experiences.",
    href: "/blog/aeo-basics-structured-content",
    image: blogImageTwo,
    category: "AEO",
    published: "March 10, 2026",
  },
  {
    title: "When a Website Redesign Is Strategic, Not Cosmetic",
    excerpt:
      "Signals that your current site is holding back growth and how to scope redesign work around outcomes.",
    href: "/blog/strategic-website-redesign-signals",
    image: blogImageThree,
    category: "Website Strategy",
    published: "February 25, 2026",
  },
  {
    title: "Using AI To Reduce Operational Bottlenecks",
    excerpt:
      "A measured approach to workflow automation that improves reliability without adding technical complexity.",
    href: "/blog/ai-for-operations-workflows",
    image: blogImageFour,
    category: "Operations AI",
    published: "February 11, 2026",
  },
];

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <header className="bsv-header">
      <p className="bsv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function PostLink({ href, label = "Read article" }: { href: string; label?: string }) {
  return (
    <Link to={href} className="bsv-link">
      {label}
      <ArrowRight />
    </Link>
  );
}

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

function VariantOne() {
  return (
    <BlogLatestGridSection
      eyebrow="Variant 1"
      title="Latest Articles Grid"
      description="A cleaner, upgraded version of the current blog section built specifically for recent posts, with clearer article metadata and stronger card rhythm."
      posts={posts}
    />
  );
}

function VariantTwo() {
  return (
    <section className="bsv-section bsv-section--feature-feed">
      <SectionHeader
        eyebrow="Variant 2"
        title="Featured Post With Recent Feed"
        body="A stronger editorial pattern that highlights one lead story while still letting recent posts read like an active, current publication feed."
      />
      <div className="bsv-feature-feed">
        <article className="bsv-card bsv-card--feature-post">
          <div className="bsv-media bsv-media--feature">
            <img src={posts[0].image} alt={posts[0].title} loading="lazy" />
          </div>
          <div className="bsv-card-body">
            <div className="bsv-flag">
              <Newspaper />
              Featured post
            </div>
            <ArticleMeta post={posts[0]} />
            <h3>{posts[0].title}</h3>
            <p>{posts[0].excerpt}</p>
            <PostLink href={posts[0].href} label="Read featured article" />
          </div>
        </article>
        <div className="bsv-recent-feed">
          {posts.slice(1).map((post) => (
            <article key={post.title} className="bsv-card bsv-card--feed-item">
              <div className="bsv-feed-thumb">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="bsv-feed-copy">
                <ArticleMeta post={post} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <PostLink href={post.href} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariantThree() {
  return (
    <section className="bsv-section bsv-section--timeline">
      <SectionHeader
        eyebrow="Variant 3"
        title="Signal Timeline"
        body="A more creative chronological layout that treats the blog as an ongoing stream of signals, updates, and perspective rather than just a stack of cards."
      />
      <div className="bsv-timeline">
        {posts.map((post, index) => (
          <article
            key={post.title}
            className={`bsv-timeline-item ${index % 2 === 0 ? "is-left" : "is-right"}`}
          >
            <div className="bsv-timeline-date">{post.published}</div>
            <div className="bsv-timeline-node" aria-hidden="true" />
            <div className="bsv-timeline-card">
              <div className="bsv-list-thumb">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="bsv-list-copy">
                <ArticleMeta post={post} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <PostLink href={post.href} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="bsv-section bsv-section--board">
      <SectionHeader
        eyebrow="Variant 4"
        title="Pinned Story Board"
        body="A more expressive concept that makes the blog feel like an active editorial wall, while still keeping each post visible and directly browseable."
      />
      <div className="bsv-board-intro">
        <div className="bsv-digest-note">
          <div className="bsv-flag">
            <BookMarked />
            Story board
          </div>
          <h3>A more art-directed way to present recent posts.</h3>
          <p>
            This keeps the section grounded in real articles, but gives the content more personality than a standard grid or feed.
          </p>
        </div>
        <div className="bsv-topic-row">
          {posts.map((post) => (
            <span key={post.category} className="bsv-topic-pill">
              {post.category}
            </span>
          ))}
        </div>
      </div>
      <div className="bsv-board">
        {posts.map((post, index) => (
          <article
            key={post.title}
            className={`bsv-board-card bsv-board-card--${index + 1}`}
          >
            <div className="bsv-media bsv-media--board">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="bsv-card-body">
              <ArticleMeta post={post} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <PostLink href={post.href} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="bsv-section bsv-section--journal-board">
      <SectionHeader
        eyebrow="Variant 5"
        title="Journal Board"
        body="A darker publication-style board that still functions as a blog-post list, but gives the resources page a more distinctive editorial moment."
      />
      <div className="bsv-journal-board">
        <aside className="bsv-journal-aside">
          <div className="bsv-flag bsv-flag--light">
            <RadioTower />
            MIS journal
          </div>
          <h3>Make timely posts feel more like a living publication.</h3>
          <p>
            This direction frames the blog as an active stream of insights while keeping the article cards familiar and easy to browse.
          </p>
        </aside>
        <div className="bsv-journal-grid">
          {posts.map((post) => (
            <article key={post.title} className="bsv-journal-card">
              <div className="bsv-journal-thumb">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="bsv-card-body">
                <ArticleMeta post={post} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <PostLink href={post.href} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogSectionVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="blog-section-lab">
        <section className="bsv-hero">
          <div className="bsv-hero-inner">
            <Link to="/resources" className="bsv-back-link">
              <ArrowLeft />
              Back to Resources
            </Link>
            <p className="bsv-eyebrow">Blog Section Explorations</p>
            <h1>Five blog-specific directions for the Resources page article section.</h1>
            <p>
              These concepts are built around listing and browsing posts, not generic content blocks. They keep the MIS visual language, but mix in a few more exploratory editorial ideas alongside the more practical layouts.
            </p>
          </div>
        </section>

        <VariantOne />
        <VariantTwo />
        <VariantThree />
        <VariantFour />
        <VariantFive />
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
