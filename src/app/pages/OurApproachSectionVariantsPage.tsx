import type { ComponentType, SVGProps } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Compass,
  DraftingCompass,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Link } from "react-router";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { OurApproachSection } from "@/app/components/sections";
import "@/styles/approach-section-variants.css";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ApproachStep = {
  title: string;
  description: string;
  outcome: string;
  icon: IconComponent;
  accent: string;
};

const steps: ApproachStep[] = [
  {
    title: "Discover",
    description:
      "We align business goals, audience needs, and operating constraints before design or development starts.",
    outcome: "Sharper scope and fewer expensive assumptions.",
    icon: Compass,
    accent: "#A62025",
  },
  {
    title: "Design",
    description:
      "We shape clear user journeys, messaging hierarchy, and interface systems built for trust and conversion.",
    outcome: "Stronger clarity for buyers and internal teams.",
    icon: DraftingCompass,
    accent: "#C9923D",
  },
  {
    title: "Build",
    description:
      "We implement with performance, maintainability, CMS governance, and real operational use in mind.",
    outcome: "A system your team can actually run and extend.",
    icon: Wrench,
    accent: "#FF9902",
  },
  {
    title: "Optimize",
    description:
      "We improve continuously through analytics, testing, search visibility, and iterative UX refinement.",
    outcome: "Compounding gains after launch instead of drift.",
    icon: BarChart3,
    accent: "#6B4A1E",
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
    <header className="asv-header">
      <p className="asv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function VariantOne() {
  return (
    <section className="asv-section asv-section--pathway">
      <SectionHeader
        eyebrow="Variant 1"
        title="Momentum Pathway"
        body="A connected sequence with more visual movement, so the process feels like a guided progression instead of four equal cards."
      />
      <div className="asv-pathway">
        <div className="asv-pathway__line" />
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className={`asv-path-card asv-path-card--${index + 1}`}
              style={{ ["--accent" as string]: step.accent }}
            >
              <div className="asv-path-card__top">
                <span className="asv-step-index">0{index + 1}</span>
                <div className="asv-icon-wrap">
                  <Icon />
                </div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="asv-outcome-chip">{step.outcome}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantTwo() {
  return (
    <section className="asv-section asv-section--split">
      <SectionHeader
        eyebrow="Variant 2"
        title="Strategy Narrative Split"
        body="A stronger editorial composition with a left-side story panel and a right-side stack of process cards."
      />
      <div className="asv-split-shell">
        <aside className="asv-split-story">
          <p className="asv-mini-label">Why it lands</p>
          <h3>The process reads like a point of view, not just a checklist.</h3>
          <p>
            This direction gives the section a persuasive frame first, then lets the steps act as evidence. It feels
            more premium and more homepage-worthy.
          </p>
          <div className="asv-story-note">
            <span>Strategy first</span>
            <ArrowRight size={16} />
            <span>Execution with measurable follow-through</span>
          </div>
        </aside>
        <div className="asv-split-list">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="asv-split-card" style={{ ["--accent" as string]: step.accent }}>
                <div className="asv-split-card__top">
                  <span className="asv-mini-label">Step 0{index + 1}</span>
                  <Icon />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <strong>{step.outcome}</strong>
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
    <section className="asv-section">
      <SectionHeader
        eyebrow="Variant 3"
        title="Editorial Ladder"
        body="One featured opening panel and a staggered step ladder give the process a stronger focal point and better pacing."
      />
      <OurApproachSection
        sectionId="approach-variant-three"
        eyebrow="Our Approach"
        title="A process designed to create momentum, not just deliverables."
        description="Good outcomes come from disciplined sequencing. Each phase sharpens the next, so strategy, execution, and optimization work as one continuous system."
        featureEyebrow="Flagship message"
        featureTitle="Good outcomes come from disciplined sequencing."
        featureDescription="Instead of treating every phase as equal visual weight, this version emphasizes the overall promise and lets the steps cascade beside it."
        steps={steps}
        backgroundColor="transparent"
      />
    </section>
  );
}

function VariantFour() {
  return (
    <section className="asv-section asv-section--radial">
      <SectionHeader
        eyebrow="Variant 4"
        title="Orbit Framework"
        body="A central strategy hub with steps orbiting around it. More expressive and distinct, while still keeping the process readable."
      />
      <div className="asv-radial-grid">
        <article className="asv-radial-core">
          <div className="asv-radial-core__inner">
            <Sparkles />
            <h3>Strategy with a feedback loop</h3>
            <p>Each phase informs the next, and optimization feeds back into better discovery.</p>
          </div>
        </article>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className={`asv-radial-card asv-radial-card--${index + 1}`}
              style={{ ["--accent" as string]: step.accent }}
            >
              <Icon />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="asv-section asv-section--midnight">
      <SectionHeader
        eyebrow="Variant 5"
        title="Midnight Command Board"
        body="A darker premium option that gives the process more contrast and makes the section feel like a strategic control panel."
      />
      <div className="asv-midnight-shell">
        <aside className="asv-midnight-aside">
          <span className="asv-chip asv-chip--light">Operating model</span>
          <h3>A process that reduces risk while increasing momentum.</h3>
          <p>
            This direction breaks the page rhythm more aggressively, which helps the section feel more intentional and
            more persuasive.
          </p>
        </aside>
        <div className="asv-midnight-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="asv-midnight-card" style={{ ["--accent" as string]: step.accent }}>
                <div className="asv-midnight-card__top">
                  <span className="asv-chip asv-chip--light">0{index + 1}</span>
                  <Icon />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <strong>{step.outcome}</strong>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function OurApproachSectionVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="approach-section-lab">
        <section className="asv-hero">
          <div className="asv-hero-inner">
            <Link to="/solutions" className="asv-back-link">
              <ArrowLeft />
              Back to Solutions
            </Link>
            <p className="asv-eyebrow">Our Approach Explorations</p>
            <h1>Five stronger directions for the Solutions page process section.</h1>
            <p>
              These variations keep the same four-step process, but push the visual hierarchy, pacing, and emotional
              pull much harder than a standard card row.
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
