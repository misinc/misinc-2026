import { ArrowLeft, ArrowRight, BookMarked, Compass, Library, MessagesSquare, Sparkles } from "lucide-react";
import { Link } from "react-router";
import {
  ResourcesFaqCollectionsSection,
  type ResourcesFaqCollectionItem,
} from "@/app/components/sections";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import "@/styles/resources-faq-variants.css";

const collections: ResourcesFaqCollectionItem[] = [
  {
    title: "Web Design FAQ",
    href: "/faqs/web-design",
    preview: [
      "What should a modern business website include?",
      "How long does a redesign usually take?",
      "How do we measure conversion improvements?",
    ],
    eyebrow: "Planning",
    accent: "#a62025",
  },
  {
    title: "Webflow FAQ",
    href: "/faqs/webflow",
    preview: [
      "Is Webflow suitable for marketing teams?",
      "How does Webflow compare to WordPress maintenance?",
      "Can Webflow support multi-page service sites?",
    ],
    eyebrow: "Platform",
    accent: "#c9923d",
  },
  {
    title: "AI & AEO FAQ",
    href: "/faqs/ai-aeo",
    preview: [
      "What is the difference between SEO and AEO?",
      "How do answer engines evaluate content quality?",
      "Where should businesses start with AI implementation?",
    ],
    eyebrow: "AI Search",
    accent: "#6b4a1e",
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
    <header className="rfv-header">
      <p className="rfv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function FaqLink({ href, label = "View full FAQ" }: { href: string; label?: string }) {
  return (
    <Link to={href} className="rfv-link">
      {label}
      <ArrowRight />
    </Link>
  );
}

function VariantOne() {
  return (
    <ResourcesFaqCollectionsSection
      eyebrow="Variant 1"
      title="Refined FAQ Collection Cards"
      description="A sharper version of the current section with stronger spacing, cleaner hierarchy, and more intentional card polish."
      collections={collections}
    />
  );
}

function VariantTwo() {
  return (
    <section className="rfv-section rfv-section--split">
      <SectionHeader
        eyebrow="Variant 2"
        title="Guided Answer Paths"
        body="A left-side narrative frame helps explain why the FAQs matter, while the collection cards on the right stay easy to browse."
      />
      <div className="rfv-split-shell">
        <aside className="rfv-story">
          <div className="rfv-flag">
            <MessagesSquare />
            Common objections
          </div>
          <h3>Answer the questions people ask before they reach out.</h3>
          <p>
            This direction gives the section a clearer strategic role and turns the FAQ collections into decision-support content instead of a generic utility block.
          </p>
        </aside>
        <div className="rfv-split-list">
          {collections.map((collection) => (
            <article key={collection.title} className="rfv-card rfv-card--row">
              <div>
                <span className="rfv-chip" style={{ color: collection.accent }}>
                  {collection.eyebrow}
                </span>
                <h3>{collection.title}</h3>
                <ul>
                  {collection.preview.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <FaqLink href={collection.href} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariantThree() {
  return (
    <section className="rfv-section rfv-section--shelves">
      <SectionHeader
        eyebrow="Variant 3"
        title="Knowledge Shelves"
        body="A more literal library metaphor that frames the FAQs as a collection of practical references instead of another card grid."
      />
      <div className="rfv-shelves">
        {collections.map((collection) => (
          <article key={collection.title} className="rfv-shelf">
            <div className="rfv-shelf-spine" style={{ backgroundColor: collection.accent }} />
            <div className="rfv-shelf-body">
              <span className="rfv-chip">{collection.eyebrow}</span>
              <h3>{collection.title}</h3>
              <ul>
                {collection.preview.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <FaqLink href={collection.href} />
          </article>
        ))}
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="rfv-section rfv-section--atlas">
      <SectionHeader
        eyebrow="Variant 4"
        title="Answer Atlas"
        body="A more expressive layout that treats the FAQ collections as territories on a map, giving the section a distinct visual identity while keeping the content straightforward."
      />
      <div className="rfv-atlas">
        <article className="rfv-atlas-core">
          <div className="rfv-flag">
            <Compass />
            Answer map
          </div>
          <h3>Give visitors a clearer path to the answers they need.</h3>
          <p>
            This concept is more exploratory, but it still works as a clean list of FAQ collections with clear next clicks.
          </p>
        </article>
        {collections.map((collection, index) => (
          <article
            key={collection.title}
            className={`rfv-atlas-card rfv-atlas-card--${index + 1}`}
            style={{ ["--accent" as string]: collection.accent }}
          >
            <span className="rfv-chip">{collection.eyebrow}</span>
            <h3>{collection.title}</h3>
            <ul>
              {collection.preview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <FaqLink href={collection.href} />
          </article>
        ))}
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="rfv-section rfv-section--midnight">
      <SectionHeader
        eyebrow="Variant 5"
        title="Midnight Answer Console"
        body="A darker, premium treatment that makes the FAQ collections feel more curated and gives the page a stronger confidence shift near the bottom."
      />
      <div className="rfv-midnight-shell">
        <aside className="rfv-midnight-aside">
          <div className="rfv-flag rfv-flag--light">
            <Sparkles />
            Confidence layer
          </div>
          <h3>Make the FAQ collections feel like a strategic tool, not leftover content.</h3>
          <p>
            This direction creates a stronger visual break and gives the section more presence, while still presenting the same three collection paths.
          </p>
        </aside>
        <div className="rfv-midnight-grid">
          {collections.map((collection) => (
            <article key={collection.title} className="rfv-midnight-card">
              <div className="rfv-midnight-top">
                <Library />
                <span className="rfv-chip rfv-chip--light">{collection.eyebrow}</span>
              </div>
              <h3>{collection.title}</h3>
              <ul>
                {collection.preview.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <FaqLink href={collection.href} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResourcesFaqVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="resources-faq-lab">
        <section className="rfv-hero">
          <div className="rfv-hero-inner">
            <Link to="/resources" className="rfv-back-link">
              <ArrowLeft />
              Back to Resources
            </Link>
            <p className="rfv-eyebrow">Resources FAQ Explorations</p>
            <h1>Five directions for the Resources page FAQ collections section.</h1>
            <p>
              These concepts are built specifically for showcasing FAQ collections, not individual accordion questions. They keep the same MIS tone and palette while exploring stronger ways to organize and frame the content.
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
