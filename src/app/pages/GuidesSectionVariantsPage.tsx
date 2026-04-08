import type { ComponentType, SVGProps } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Bot,
  Compass,
  LayoutGrid,
  LibraryBig,
  ScrollText,
} from "lucide-react";
import { Link } from "react-router";
import {
  GuidesEditorialSection,
  type GuidesEditorialItem,
} from "@/app/components/sections";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import "@/styles/guides-section-variants.css";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type GuideCard = {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
  readTime: string;
  icon: IconComponent;
  accent: string;
};

const guides: GuideCard[] = [
  {
    title: "Webflow vs WordPress Guide",
    description:
      "Compare platform tradeoffs, governance, publishing speed, and long-term maintenance costs before committing.",
    href: "/guides/webflow-vs-wordpress",
    eyebrow: "Platform Strategy",
    readTime: "8 min read",
    icon: LayoutGrid,
    accent: "#a62025",
  },
  {
    title: "Website Redesign Checklist",
    description:
      "Use a practical step-by-step checklist to reduce redesign risk and align UX, SEO, and conversion goals.",
    href: "/guides/website-redesign-checklist",
    eyebrow: "Planning Framework",
    readTime: "6 min read",
    icon: ScrollText,
    accent: "#c9923d",
  },
  {
    title: "Cost of Web Design in Albuquerque",
    description:
      "Understand pricing ranges, delivery scope, and budget planning for business websites in the New Mexico market.",
    href: "/guides/web-design-cost-albuquerque",
    eyebrow: "Budget Clarity",
    readTime: "7 min read",
    icon: Compass,
    accent: "#c76438",
  },
  {
    title: "AI for Small Businesses Guide",
    description:
      "Identify realistic AI opportunities that improve team output, reduce manual work, and support measurable growth.",
    href: "/guides/ai-for-small-businesses",
    eyebrow: "AI Adoption",
    readTime: "9 min read",
    icon: Bot,
    accent: "#6b4a1e",
  },
];

const editorialGuides: GuidesEditorialItem[] = guides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.href,
  eyebrow: guide.eyebrow,
  accent: guide.accent,
}));

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
    <header className="gsv-header">
      <p className="gsv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function GuideLink({ href }: { href: string }) {
  return (
    <Link to={href} className="gsv-link">
      Open guide
      <ArrowRight />
    </Link>
  );
}

function VariantOne() {
  return (
    <GuidesEditorialSection
      eyebrow="Variant 1"
      title="Editorial Card Grid"
      description="Closest to the current structure, but with stronger spacing, metadata, and more visual lift so it feels designed instead of default."
      guides={editorialGuides}
    />
  );
}

function VariantTwo() {
  return (
    <section className="gsv-section gsv-section--split">
      <SectionHeader
        eyebrow="Variant 2"
        title="Narrative Split Layout"
        body="A stronger left-hand story frame with more vertical pressure on the right, so the guides feel like a curated library instead of a neutral resource list."
      />
      <div className="gsv-split-shell">
        <aside className="gsv-split-aside">
          <span className="gsv-chip gsv-chip--soft">Evergreen library</span>
          <h3>Built for high-intent questions that need durable answers.</h3>
          <p>
            This direction gives the section a strategic narrative first, then lets each guide operate as a clear next click.
          </p>
        </aside>
        <div className="gsv-split-list">
          {guides.map((guide, index) => {
            const Icon = guide.icon;

            return (
              <article key={guide.title} className="gsv-card gsv-card--row">
                <div className="gsv-row-index">0{index + 1}</div>
                <div className="gsv-row-copy">
                  <div className="gsv-card-top">
                    <span className="gsv-chip" style={{ color: guide.accent }}>
                      {guide.eyebrow}
                    </span>
                    <span className="gsv-meta">
                      <Icon />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                </div>
                <GuideLink href={guide.href} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VariantThree() {
  return (
    <section className="gsv-section gsv-section--mosaic">
      <SectionHeader
        eyebrow="Variant 3"
        title="Featured Mosaic"
        body="One lead guide gets more surface area, while the rest support it in a staggered composition that feels more custom and homepage-worthy."
      />
      <div className="gsv-mosaic">
        <article className="gsv-card gsv-card--feature">
          <div className="gsv-feature-mark">
            <BookOpenText />
            <span>Featured guide</span>
          </div>
          <h3>{guides[0].title}</h3>
          <p>{guides[0].description}</p>
          <div className="gsv-feature-notes">
            <span>Platform comparison</span>
            <span>Publishing governance</span>
            <span>Total cost perspective</span>
          </div>
          <GuideLink href={guides[0].href} />
        </article>

        <div className="gsv-mosaic-stack">
          {guides.slice(1).map((guide) => {
            const Icon = guide.icon;

            return (
              <article key={guide.title} className="gsv-card gsv-card--compact">
                <div className="gsv-card-top">
                  <span className="gsv-chip" style={{ color: guide.accent }}>
                    {guide.eyebrow}
                  </span>
                  <Icon className="gsv-compact-icon" />
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <GuideLink href={guide.href} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="gsv-section gsv-section--shelves">
      <SectionHeader
        eyebrow="Variant 4"
        title="Library Shelves"
        body="A more literal library metaphor with horizontal bands, stronger labels, and cleaner grouping so the section feels curated and ownable."
      />
      <div className="gsv-shelves">
        {guides.map((guide) => {
          const Icon = guide.icon;

          return (
            <article key={guide.title} className="gsv-shelf-card">
              <div className="gsv-shelf-spine" style={{ background: guide.accent }} />
              <div className="gsv-shelf-body">
                <div className="gsv-card-top">
                  <span className="gsv-chip">{guide.eyebrow}</span>
                  <span className="gsv-meta">
                    <Icon />
                    {guide.readTime}
                  </span>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
              <GuideLink href={guide.href} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="gsv-section gsv-section--midnight">
      <SectionHeader
        eyebrow="Variant 5"
        title="Midnight Knowledge Board"
        body="A darker, premium direction that turns the guides block into a stronger brand moment and gives the resources page more visual pacing."
      />
      <div className="gsv-midnight-shell">
        <aside className="gsv-midnight-lead">
          <div className="gsv-midnight-badge">
            <LibraryBig />
            Resource library
          </div>
          <h3>Give evergreen content more authority and presence.</h3>
          <p>
            This treatment creates a real section break and makes the guide collection feel more deliberate, premium, and worth exploring.
          </p>
        </aside>
        <div className="gsv-midnight-grid">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <article key={guide.title} className="gsv-midnight-card">
                <div className="gsv-card-top">
                  <span className="gsv-chip gsv-chip--light">{guide.eyebrow}</span>
                  <span className="gsv-meta gsv-meta--light">
                    <Icon />
                    {guide.readTime}
                  </span>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <GuideLink href={guide.href} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function GuidesSectionVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="guides-section-lab">
        <section className="gsv-hero">
          <div className="gsv-hero-inner">
            <Link to="/resources" className="gsv-back-link">
              <ArrowLeft />
              Back to Resources
            </Link>
            <p className="gsv-eyebrow">Guides Section Explorations</p>
            <h1>Five stronger directions for the Resources page guides section.</h1>
            <p>
              These concepts keep the same four guides and overall tone, but push hierarchy, rhythm, and layout harder so the section feels more intentional.
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
