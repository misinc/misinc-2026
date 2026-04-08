import { ArrowLeft, ArrowRight, Bot, ChevronRight, Clock3, Globe2, Search, Sparkles } from "lucide-react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import "@/styles/faq-section-variants.css";

type FaqItem = {
  question: string;
  answer: string;
  tag: string;
  icon: typeof Clock3;
  accent: string;
};

const faqs: FaqItem[] = [
  {
    question: "How much does a professional website cost?",
    answer:
      "Project cost depends on scope, content complexity, integrations, and timeline. Most engagements are scoped after strategy discovery so the investment aligns with your business goals.",
    tag: "Pricing",
    icon: Clock3,
    accent: "#A62025",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most website projects run between six and twelve weeks depending on complexity and feedback cadence. Larger builds involving custom applications or automation can extend beyond that range.",
    tag: "Timeline",
    icon: Clock3,
    accent: "#C9923D",
  },
  {
    question: "What is the difference between SEO and AEO?",
    answer:
      "SEO focuses on rankings and qualified organic traffic. AEO focuses on helping content appear in direct answers, AI summaries, and conversational search results. They work best together.",
    tag: "Search Strategy",
    icon: Search,
    accent: "#FF9902",
  },
  {
    question: "Is Webflow better than WordPress?",
    answer:
      "Webflow is often better for teams that need visual control, speed, and easier ongoing content management with fewer plugin dependencies. WordPress can still fit certain legacy ecosystems.",
    tag: "Platform",
    icon: Globe2,
    accent: "#8D6A2A",
  },
  {
    question: "How can AI consulting help my business?",
    answer:
      "AI consulting helps identify high-impact workflows where automation can save time, reduce errors, and improve responsiveness. We focus on practical use cases tied to measurable outcomes.",
    tag: "AI Strategy",
    icon: Bot,
    accent: "#6B4A1E",
  },
  {
    question: "Do you work with companies outside New Mexico?",
    answer:
      "Yes. MIS, Inc. is based in Albuquerque, New Mexico, and works with organizations across the United States through a remote-friendly, milestone-driven process.",
    tag: "Geography",
    icon: Sparkles,
    accent: "#A62025",
  },
  {
    question: "Do I need all services at once?",
    answer:
      "No. Most clients start with one priority outcome and phase additional services over time. We help define the right sequence so you can move forward without unnecessary complexity or spend.",
    tag: "Scope",
    icon: ChevronRight,
    accent: "#C9923D",
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
    <header className="fsv-header">
      <p className="fsv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function VariantOne() {
  return (
    <section className="fsv-section">
      <SectionHeader
        eyebrow="Variant 1"
        title="Refined Editorial Accordion"
        body="A cleaner, sharper version of the current FAQ with stronger type, spacing, and a more intentional frame."
      />
      <div className="fsv-accordion-shell">
        <Accordion type="single" collapsible className="fsv-accordion">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`editorial-${index}`}>
              <AccordionTrigger className="fsv-trigger">
                <span>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="fsv-content">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function VariantTwo() {
  return (
    <section className="fsv-section fsv-section--split">
      <SectionHeader
        eyebrow="Variant 2"
        title="Narrative Split FAQ"
        body="A left-side story panel gives the FAQ a stronger reason to exist, while the right side stays compact and scannable."
      />
      <div className="fsv-split-shell">
        <aside className="fsv-story">
          <p className="fsv-mini-label">Buyer friction</p>
          <h3>Answer the high-intent objections before they slow the decision.</h3>
          <p>
            This direction turns the FAQ from a utility list into a strategic confidence section. It works better when
            the page needs more persuasion and less repetition.
          </p>
          <div className="fsv-story-note">
            <span>Pricing</span>
            <ArrowRight size={16} />
            <span>Timeline</span>
            <ArrowRight size={16} />
            <span>Platform fit</span>
          </div>
        </aside>
        <div className="fsv-split-list">
          {faqs.map((faq, index) => (
            <Accordion key={faq.question} type="single" collapsible defaultValue={index === 0 ? `split-${index}` : undefined}>
              <AccordionItem className="fsv-split-item" value={`split-${index}`}>
                <AccordionTrigger className="fsv-split-trigger">
                  <span className="fsv-pill">{faq.tag}</span>
                  <strong>{faq.question}</strong>
                </AccordionTrigger>
                <AccordionContent className="fsv-split-content">{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariantThree() {
  const featured = faqs[2];
  const FeaturedIcon = featured.icon;

  return (
    <section className="fsv-section fsv-section--mosaic">
      <SectionHeader
        eyebrow="Variant 3"
        title="Mosaic Answer Board"
        body="One featured FAQ and a supporting card grid create better pacing and a clearer focal point than a single uninterrupted accordion."
      />
      <div className="fsv-mosaic-grid">
        <article className="fsv-mosaic-hero" style={{ ["--accent" as string]: featured.accent }}>
          <div className="fsv-mosaic-top">
            <span className="fsv-pill">{featured.tag}</span>
            <FeaturedIcon />
          </div>
          <h3>{featured.question}</h3>
          <p>{featured.answer}</p>
        </article>
        {faqs.filter((faq) => faq !== featured).map((faq) => {
          const Icon = faq.icon;

          return (
            <article key={faq.question} className="fsv-mosaic-card" style={{ ["--accent" as string]: faq.accent }}>
              <div className="fsv-mosaic-top">
                <Icon />
                <span className="fsv-pill">{faq.tag}</span>
              </div>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="fsv-section fsv-section--rail">
      <SectionHeader
        eyebrow="Variant 4"
        title="Horizontal FAQ Rail"
        body="A numbered rail makes the content feel more guided and gives each answer a stronger individual presence."
      />
      <div className="fsv-rail-shell">
        <div className="fsv-rail-line" />
        {faqs.map((faq, index) => {
          const Icon = faq.icon;

          return (
            <article key={faq.question} className="fsv-rail-card" style={{ ["--accent" as string]: faq.accent }}>
              <div className="fsv-rail-top">
                <span className="fsv-card-index">0{index + 1}</span>
                <div className="fsv-icon-wrap">
                  <Icon />
                </div>
              </div>
              <span className="fsv-pill">{faq.tag}</span>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="fsv-section fsv-section--midnight">
      <SectionHeader
        eyebrow="Variant 5"
        title="Midnight FAQ Console"
        body="A darker premium direction that turns the FAQ into a stronger confidence and objection-handling section."
      />
      <div className="fsv-midnight-shell">
        <aside className="fsv-midnight-aside">
          <span className="fsv-chip fsv-chip--light">Objection handling</span>
          <h3>Use the FAQ as a closing tool, not just a content dump.</h3>
          <p>
            This version breaks the page rhythm hard and makes the section feel more curated. It works well when the
            rest of the page needs a stronger credibility shift near the bottom.
          </p>
        </aside>
        <div className="fsv-midnight-grid">
          {faqs.map((faq, index) => (
            <Accordion key={faq.question} type="single" collapsible defaultValue={index === 0 ? `midnight-${index}` : undefined}>
              <AccordionItem className="fsv-midnight-item" value={`midnight-${index}`}>
                <AccordionTrigger className="fsv-midnight-trigger">
                  <div>
                    <span className="fsv-chip fsv-chip--light">{faq.tag}</span>
                    <strong>{faq.question}</strong>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="fsv-midnight-content">{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FaqSectionVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="faq-section-lab">
        <section className="fsv-hero">
          <div className="fsv-hero-inner">
            <Link to="/services" className="fsv-back-link">
              <ArrowLeft />
              Back to Services
            </Link>
            <p className="fsv-eyebrow">FAQ Section Explorations</p>
            <h1>Five stronger directions for the Services page FAQ section.</h1>
            <p>
              These variations keep the same question set, but push the hierarchy, pacing, and sense of confidence much
              harder than the current default accordion.
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
