import type { ComponentType, SVGProps } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  HandHeart,
  Rocket,
  ShoppingBag,
  Stethoscope,
  Store,
} from "lucide-react";
import { Link } from "react-router";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import "@/styles/solutions-section-variants.css";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type IndustryCard = {
  title: string;
  description: string;
  eyebrow: string;
  icon: IconComponent;
  accent: string;
};

const industries: IndustryCard[] = [
  {
    title: "Healthcare",
    description:
      "HIPAA-compliant websites, patient portals, and appointment systems designed for medical practices and health organizations.",
    eyebrow: "Regulated Trust",
    icon: Stethoscope,
    accent: "#A62025",
  },
  {
    title: "Nonprofits",
    description:
      "Mission-driven websites with integrated donation systems, volunteer management, and storytelling features.",
    eyebrow: "Mission Momentum",
    icon: HandHeart,
    accent: "#C9923D",
  },
  {
    title: "Professional Services",
    description:
      "Sophisticated web presence for legal, consulting, and financial services with client portals and custom tools.",
    eyebrow: "Credibility Systems",
    icon: BriefcaseBusiness,
    accent: "#6B4A1E",
  },
  {
    title: "Small Business",
    description:
      "E-commerce solutions, local SEO optimization, and conversion-focused websites that drive growth.",
    eyebrow: "Growth Engine",
    icon: Store,
    accent: "#FF9902",
  },
  {
    title: "Startups",
    description:
      "Launch-ready websites, MVP experiences, and flexible digital systems built to help emerging companies move quickly and scale with confidence.",
    eyebrow: "Scale Fast",
    icon: Rocket,
    accent: "#C76438",
  },
  {
    title: "Retail / Ecommerce",
    description:
      "Online storefronts, product-focused user journeys, and conversion-driven ecommerce experiences designed to increase sales and repeat customers.",
    eyebrow: "Revenue Pathways",
    icon: ShoppingBag,
    accent: "#7C3D33",
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
    <header className="solv-header">
      <p className="solv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function VariantOne() {
  return (
    <section className="solv-section solv-section--mosaic">
      <SectionHeader
        eyebrow="Variant 1"
        title="Sector Mosaic"
        body="A mixed-scale layout with one featured vertical panel and tighter supporting cards, so the section feels designed rather than repeated."
      />
      <div className="solv-mosaic-grid">
        <article className="solv-mosaic-lead">
          <h3>Solutions designed around how each industry actually operates.</h3>
          <p>
            Instead of presenting every audience at the same weight, this version creates a stronger entry point and a more editorial scan path.
          </p>
          <div className="solv-mini-stack">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div key={industry.title} className="solv-mini-pill">
                  <Icon />
                  <span>{industry.title}</span>
                </div>
              );
            })}
          </div>
        </article>

        <div className="solv-mosaic-cards">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
            <article
              key={industry.title}
              className={`solv-card solv-mosaic-card solv-mosaic-card--${index + 1}`}
              style={{ ["--accent" as string]: industry.accent }}
            >
              <div className="solv-mosaic-card__title">
                <Icon />
                <h3>{industry.title}</h3>
              </div>
              <p>{industry.description}</p>
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}

function VariantTwo() {
  return (
    <section className="solv-section solv-section--columns">
      <SectionHeader
        eyebrow="Variant 2"
        title="Industry Columns"
        body="Three vertical bands create more rhythm and let each audience feel like a lane, rather than another card in a flat matrix."
      />
      <div className="solv-columns-grid">
        {[industries.slice(0, 2), industries.slice(2, 4), industries.slice(4, 6)].map((column, columnIndex) => (
          <div key={`column-${columnIndex + 1}`} className="solv-column">
            <div className="solv-column-marker">0{columnIndex + 1}</div>
            {column.map((industry) => {
              const Icon = industry.icon;

              return (
                <article key={industry.title} className="solv-card solv-column-card" style={{ ["--accent" as string]: industry.accent }}>
                  <div className="solv-card-top">
                    <span className="solv-chip">{industry.eyebrow}</span>
                    <Icon />
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function VariantThree() {
  return (
    <section className="solv-section solv-section--radial">
      <SectionHeader
        eyebrow="Variant 3"
        title="Radial Hub"
        body="A central strategy core with sectors orbiting around it. More expressive, more homepage-worthy, and still easy to collapse responsively."
      />
      <div className="solv-radial-grid">
        <article className="solv-radial-core">
          <div className="solv-radial-core__inner">
            <Building2 />
            <h3>Industry-fit strategy</h3>
            <p>Each sector needs a different trust signal, buying journey, and content architecture.</p>
          </div>
        </article>

        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <article
              key={industry.title}
              className={`solv-card solv-radial-card solv-radial-card--${index + 1}`}
              style={{ ["--accent" as string]: industry.accent }}
            >
              <Icon />
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="solv-section solv-section--midnight">
      <SectionHeader
        eyebrow="Variant 4"
        title="Midnight Sector Board"
        body="A darker, premium treatment that gives the Solutions section more contrast and creates a stronger transition in the homepage flow."
      />
      <div className="solv-midnight-shell">
        <aside className="solv-midnight-aside">
          <span className="solv-chip solv-chip--light">Audience map</span>
          <h3>Six sectors. One system. Different growth constraints.</h3>
          <p>
            This direction turns the section into more of a strategic control panel, which helps it stand apart from lighter content blocks above and below.
          </p>
        </aside>
        <div className="solv-midnight-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article key={industry.title} className="solv-midnight-card" style={{ ["--accent" as string]: industry.accent }}>
                <div className="solv-card-top">
                  <span className="solv-chip solv-chip--light">{industry.eyebrow}</span>
                  <Icon />
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="solv-section solv-section--rail">
      <SectionHeader
        eyebrow="Variant 5"
        title="Progressive Solution Rail"
        body="A stacked sequence with large indices and long cards, useful if the section should feel more directional and premium than a simple grid."
      />
      <div className="solv-rail-list">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <article key={industry.title} className="solv-rail-card" style={{ ["--accent" as string]: industry.accent }}>
              <div className="solv-rail-index">0{index + 1}</div>
              <div className="solv-rail-main">
                <div className="solv-card-top">
                  <span className="solv-chip">{industry.eyebrow}</span>
                  <Icon />
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function SolutionsSectionVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="solutions-section-lab">
        <section className="solv-hero">
          <div className="solv-hero-inner">
            <Link to="/" className="solv-back-link">
              <ArrowLeft />
              Back to Home
            </Link>
            <p className="solv-eyebrow">Solutions Section Explorations</p>
            <h1>Five stronger directions for the homepage Solutions section.</h1>
            <p>
              These options keep the same six audiences, but move past the plain two-column card grid into layouts with more character, hierarchy, and pacing.
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
