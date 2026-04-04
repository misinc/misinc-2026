import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarRange,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import "@/styles/authority-section-variants.css";

type Milestone = {
  value: string;
  label: string;
  detail: string;
  icon: typeof CalendarRange;
  accent: string;
};

const milestones: Milestone[] = [
  {
    value: "1995",
    label: "Founded",
    detail: "Built in Albuquerque at the first big wave of the web.",
    icon: CalendarRange,
    accent: "#A62025",
  },
  {
    value: "30+",
    label: "Years Experience",
    detail: "Three decades across strategy, design, systems, and delivery.",
    icon: Sparkles,
    accent: "#FF9902",
  },
  {
    value: "500+",
    label: "Projects Delivered",
    detail: "Launches, rebuilds, migrations, apps, and growth-focused iterations.",
    icon: BriefcaseBusiness,
    accent: "#C9923D",
  },
  {
    value: "2025",
    label: "AI Development",
    detail: "A new chapter in automation, AI search, and internal tooling.",
    icon: Bot,
    accent: "#6B4A1E",
  },
];

function LabHeader() {
  return (
    <section className="authority-lab-hero">
      <div className="authority-lab-hero__inner">
        <Link to="/" className="authority-lab-back-link">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <p className="authority-lab-eyebrow">Authority Section Explorations</p>
        <h1>Five stronger directions for the 30-year credibility block.</h1>
        <p className="authority-lab-hero-copy">
          These options keep the same message and milestones, but move away from four static boxes into layouts
          with more hierarchy, texture, motion cues, and presence.
        </p>
      </div>
    </section>
  );
}

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
    <header className="authority-variant-header">
      <p className="authority-lab-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function VariantOne() {
  return (
    <section className="authority-variant authority-variant--timeline">
      <SectionHeader
        eyebrow="Variant 1"
        title="Signal Timeline"
        body="A connected milestone rail that feels more like a story of accumulated momentum than a generic stat row."
      />
      <div className="timeline-rail">
        <div className="timeline-rail__line" />
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;

          return (
            <article
              key={milestone.label}
              className={`timeline-card timeline-card--${index + 1}`}
              style={{ ["--accent" as string]: milestone.accent }}
            >
              <span className="timeline-card__dot" />
              <div className="timeline-card__icon">
                <Icon size={18} />
              </div>
              <p className="timeline-card__value">{milestone.value}</p>
              <p className="timeline-card__label">{milestone.label}</p>
              <p className="timeline-card__detail">{milestone.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantTwo() {
  return (
    <section className="authority-variant authority-variant--split">
      <SectionHeader
        eyebrow="Variant 2"
        title="Founder-to-Future Split"
        body="A stronger left-right composition with a narrative panel on one side and more sculpted milestone cards on the other."
      />
      <div className="split-shell">
        <aside className="split-story">
          <p className="authority-mini-label">Why it works</p>
          <h3>It reads like a brand proof point, not a placeholder module.</h3>
          <p>
            The copy gets a dedicated narrative frame, while the milestones gain clearer hierarchy and more deliberate
            pacing through scale and stagger.
          </p>
          <div className="split-story__note">
            <span>Built for homepage use</span>
            <ArrowRight size={16} />
            <span>High confidence and easy to scan</span>
          </div>
        </aside>
        <div className="split-grid">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <article
                key={milestone.label}
                className={`split-card split-card--${index + 1}`}
                style={{ ["--accent" as string]: milestone.accent }}
              >
                <div className="split-card__topline">
                  <span className="authority-mini-label">Signal 0{index + 1}</span>
                  <Icon size={18} />
                </div>
                <p className="split-card__value">{milestone.value}</p>
                <p className="split-card__label">{milestone.label}</p>
                <p className="split-card__detail">{milestone.detail}</p>
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
    <section className="authority-variant authority-variant--editorial">
      <SectionHeader
        eyebrow="Variant 3"
        title="Editorial Feature Stack"
        body="One large flagship proof card and a stacked side column, which gives the section a clear focal point and better visual rhythm."
      />
      <div className="editorial-shell">
        <article className="editorial-feature">
          <p className="authority-mini-label">Flagship proof</p>
          <div className="editorial-feature__headline">
            <span>30 Years of Innovation.</span>
            <span>Built for What&apos;s Next.</span>
          </div>
          <p className="editorial-feature__copy">
            Since 1995, MIS has helped businesses navigate every major shift in web technology, from the early web to
            mobile-first design to AI-powered optimization.
          </p>
          <div className="editorial-feature__metrics">
            {milestones.slice(0, 2).map((milestone) => (
              <div key={milestone.label} className="editorial-feature__metric">
                <span>{milestone.value}</span>
                <p>{milestone.label}</p>
              </div>
            ))}
          </div>
        </article>
        <div className="editorial-stack">
          {milestones.slice(2).map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <article
                key={milestone.label}
                className={`editorial-stack-card editorial-stack-card--${index + 1}`}
                style={{ ["--accent" as string]: milestone.accent }}
              >
                <div className="editorial-stack-card__eyebrow">
                  <Icon size={18} />
                  <span>{milestone.label}</span>
                </div>
                <p className="editorial-stack-card__value">{milestone.value}</p>
                <p className="editorial-stack-card__detail">{milestone.detail}</p>
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
    <section className="authority-variant authority-variant--runway">
      <SectionHeader
        eyebrow="Variant 4"
        title="Runway Benchmarks"
        body="A more kinetic horizontal treatment with an implied path forward, useful if the section should feel more future-facing and less archival."
      />
      <div className="runway-shell">
        <div className="runway-shell__beam" />
        {milestones.map((milestone, index) => (
          <article
            key={milestone.label}
            className={`runway-card runway-card--${index + 1}`}
            style={{ ["--accent" as string]: milestone.accent }}
          >
            <span className="runway-card__step">0{index + 1}</span>
            <p className="runway-card__value">{milestone.value}</p>
            <p className="runway-card__label">{milestone.label}</p>
            <p className="runway-card__detail">{milestone.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="authority-variant authority-variant--midnight">
      <SectionHeader
        eyebrow="Variant 5"
        title="Midnight Control Room"
        body="A darker premium option with more contrast and glow, useful if this credibility moment should break the page rhythm and feel more cinematic."
      />
      <div className="midnight-shell">
        <div className="midnight-orbit">
          <span className="midnight-orbit__ripple midnight-orbit__ripple--1" aria-hidden="true" />
          <span className="midnight-orbit__ripple midnight-orbit__ripple--2" aria-hidden="true" />
          <span className="midnight-orbit__ripple midnight-orbit__ripple--3" aria-hidden="true" />
          <div className="midnight-orbit__core">
            <span>30</span>
            <p>Years of innovation</p>
          </div>
        </div>
        <div className="midnight-grid">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;

            return (
              <article
                key={milestone.label}
                className="midnight-card"
                style={{ ["--accent" as string]: milestone.accent }}
              >
                <div className="midnight-card__header">
                  <span className="authority-mini-label">Milestone</span>
                  <Icon size={18} />
                </div>
                <p className="midnight-card__value">{milestone.value}</p>
                <p className="midnight-card__label">{milestone.label}</p>
                <p className="midnight-card__detail">{milestone.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function AuthoritySectionVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="authority-section-lab">
        <LabHeader />
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
