import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import "@/styles/services-outcomes-variants.css";

type GoalCard = {
  title: string;
  problem: string;
  serviceLinks: { label: string; href: string }[];
  eyebrow: string;
  accent: string;
};

const goals: GoalCard[] = [
  {
    title: "Generate More Qualified Leads",
    problem:
      "Traffic is reaching your site, but the right prospects are not converting into booked conversations.",
    serviceLinks: [
      { label: "Web Design & Redesign", href: "/services/web-design" },
      { label: "SEO Strategy", href: "/services/seo-strategy" },
      { label: "AEO Services", href: "/services/aeo-services" },
    ],
    eyebrow: "Demand Quality",
    accent: "#A62025",
  },
  {
    title: "Increase Conversion Rates",
    problem:
      "Your site looks credible but fails to turn interest into inquiries, consultations, or revenue opportunities.",
    serviceLinks: [
      { label: "Webflow Development", href: "/services/webflow-development" },
      { label: "Web Design & Redesign", href: "/services/web-design" },
    ],
    eyebrow: "Revenue Efficiency",
    accent: "#C9923D",
  },
  {
    title: "Streamline Internal Workflows",
    problem:
      "Teams spend too much time on repetitive tasks, manual updates, and disconnected operational systems.",
    serviceLinks: [
      { label: "Custom Applications", href: "/services/custom-applications" },
      { label: "AI Consulting & Automation", href: "/services/ai-consulting" },
    ],
    eyebrow: "Operational Flow",
    accent: "#FF9902",
  },
  {
    title: "Improve Google Rankings",
    problem:
      "Important service pages are difficult to find in search and underperform against local or regional competitors.",
    serviceLinks: [
      { label: "SEO Strategy", href: "/services/seo-strategy" },
      { label: "Webflow Development", href: "/services/webflow-development" },
      { label: "Web Design & Redesign", href: "/services/web-design" },
    ],
    eyebrow: "Search Visibility",
    accent: "#8D6A2A",
  },
  {
    title: "Improve AI Search Visibility",
    problem:
      "Prospects are using AI tools for discovery, but your brand rarely appears in direct-answer responses.",
    serviceLinks: [
      { label: "AEO Services", href: "/services/aeo-services" },
      { label: "AI Consulting & Automation", href: "/services/ai-consulting" },
    ],
    eyebrow: "Answer Engines",
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
    <header className="sov-header">
      <p className="sov-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function ServicePills({
  serviceLinks,
  light = false,
}: {
  serviceLinks: GoalCard["serviceLinks"];
  light?: boolean;
}) {
  return (
    <div className={`sov-pill-row ${light ? "is-light" : ""}`}>
      {serviceLinks.map((link, index) => (
        <span key={link.label} className="sov-pill-item">
          <Link to={link.href} className="sov-pill">
            {link.label}
          </Link>
          {index < serviceLinks.length - 1 ? <span className="sov-pill-separator">/</span> : null}
        </span>
      ))}
    </div>
  );
}

function VariantOne() {
  return (
    <section className="sov-section sov-section--editorial">
      <SectionHeader
        eyebrow="Variant 1"
        title="Editorial Decision Grid"
        body="A stronger version of the current section with more rhythm, bolder card framing, and clearer visual entry points."
      />
      <div className="sov-editorial-grid">
        {goals.map((goal, index) => {
          return (
            <article
              key={goal.title}
              className={`sov-editorial-card sov-editorial-card--${index + 1}`}
              style={{ ["--accent" as string]: goal.accent }}
            >
              <div className="sov-editorial-top">
                <span className="sov-card-index">0{index + 1}</span>
                <span className="sov-card-chip">{goal.eyebrow}</span>
              </div>
              <h3>{goal.title}</h3>
              <p>{goal.problem}</p>
              <ServicePills serviceLinks={goal.serviceLinks} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantTwo() {
  return (
    <section className="sov-section sov-section--split">
      <SectionHeader
        eyebrow="Variant 2"
        title="Narrative Split"
        body="A left-side decision frame and right-side outcome cards make the section feel more strategic and less like a neutral utility grid."
      />
      <div className="sov-split-shell">
        <aside className="sov-story">
          <p className="sov-mini-label">Decision model</p>
          <h3>Pick the business result first. Let the services follow that priority.</h3>
          <p>
            This direction makes the section feel like a guided diagnostic instead of a list of options. It creates a
            stronger reason to keep scrolling and click with intent.
          </p>
          <div className="sov-story-note">
            <span>5 outcome paths</span>
            <ArrowRight size={16} />
            <span>Focused service recommendations</span>
          </div>
        </aside>
        <div className="sov-split-list">
          {goals.map((goal, index) => (
            <article key={goal.title} className="sov-split-card" style={{ ["--accent" as string]: goal.accent }}>
              <div className="sov-split-card__lead">
                <span className="sov-card-index">0{index + 1}</span>
                <span className="sov-card-chip">{goal.eyebrow}</span>
              </div>
              <div className="sov-split-card__body">
                <h3>{goal.title}</h3>
                <p>{goal.problem}</p>
                <ServicePills serviceLinks={goal.serviceLinks} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariantThree() {
  const featured = goals[0];

  return (
    <section className="sov-section sov-section--mosaic">
      <SectionHeader
        eyebrow="Variant 3"
        title="Mosaic Priority Board"
        body="One featured flagship outcome with supporting cards around it creates a clearer focal point and better pacing than five equal blocks."
      />
      <div className="sov-mosaic-grid">
        <article className="sov-mosaic-hero" style={{ ["--accent" as string]: featured.accent }}>
          <div className="sov-mosaic-hero__top">
            <span className="sov-card-chip">{featured.eyebrow}</span>
            <span className="sov-card-index">01</span>
          </div>
          <h3>{featured.title}</h3>
          <p>{featured.problem}</p>
          <ServicePills serviceLinks={featured.serviceLinks} />
        </article>

        {goals.slice(1).map((goal, index) => (
          <article key={goal.title} className="sov-mosaic-card" style={{ ["--accent" as string]: goal.accent }}>
            <div className="sov-mosaic-card__top">
              <span className="sov-card-chip">{goal.eyebrow}</span>
              <span className="sov-card-index">0{index + 2}</span>
            </div>
            <h3>{goal.title}</h3>
            <p>{goal.problem}</p>
            <ServicePills serviceLinks={goal.serviceLinks} />
          </article>
        ))}
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="sov-section sov-section--rail">
      <SectionHeader
        eyebrow="Variant 4"
        title="Outcome Rail"
        body="A horizontal-feeling rail with numbered steps makes the options feel more guided and more systematized."
      />
      <div className="sov-rail-shell">
        <article className="sov-rail-intro">
          <p className="sov-mini-label">Guided selection</p>
          <h3>Move from the business problem to the right service cluster.</h3>
          <p>
            This version gives the section an actual path to follow instead of compressing five cards into a shallow
            row. The rail feels more editorial and much less cramped.
          </p>
        </article>
        <div className="sov-rail-track">
          <div className="sov-rail-line" />
          {goals.map((goal, index) => (
            <article
              key={goal.title}
              className={`sov-rail-card sov-rail-card--${index + 1}`}
              style={{ ["--accent" as string]: goal.accent }}
            >
              <div className="sov-rail-card__top">
                <span className="sov-card-index">0{index + 1}</span>
                <span className="sov-card-chip">{goal.eyebrow}</span>
              </div>
              <h3>{goal.title}</h3>
              <p>{goal.problem}</p>
              <ServicePills serviceLinks={goal.serviceLinks} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="sov-section sov-section--midnight">
      <SectionHeader
        eyebrow="Variant 5"
        title="Midnight Outcome Console"
        body="A darker premium direction that gives the section more contrast and makes the decision paths feel more intentional."
      />
      <div className="sov-midnight-shell">
        <aside className="sov-midnight-aside">
          <span className="sov-chip sov-chip--light">Outcome selector</span>
          <h3>Frame the services around buyer intent, not internal categories.</h3>
          <p>
            This breaks the page rhythm more aggressively and makes the section feel like a strategic control panel
            instead of another warm card block.
          </p>
        </aside>
        <div className="sov-midnight-grid">
          {goals.map((goal, index) => (
            <article key={goal.title} className="sov-midnight-card" style={{ ["--accent" as string]: goal.accent }}>
              <div className="sov-midnight-card__top">
                <span className="sov-chip sov-chip--light">{goal.eyebrow}</span>
                <span className="sov-card-index">0{index + 1}</span>
              </div>
              <h3>{goal.title}</h3>
              <p>{goal.problem}</p>
              <ServicePills serviceLinks={goal.serviceLinks} light />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesOutcomesVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="services-outcomes-lab">
        <section className="sov-hero">
          <div className="sov-hero-inner">
            <Link to="/services" className="sov-back-link">
              <ArrowLeft />
              Back to Services
            </Link>
            <p className="sov-eyebrow">Outcome Section Explorations</p>
            <h1>Five stronger directions for the Services page outcome selector.</h1>
            <p>
              These variations keep the same five buyer outcomes and linked services, but push the hierarchy,
              composition, and visual pressure much harder than the current soft card grid.
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
