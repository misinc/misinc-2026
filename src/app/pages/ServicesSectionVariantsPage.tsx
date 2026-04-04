import type { ComponentType, SVGProps } from "react";
import { ArrowLeft, ArrowRight, Bot, Globe, Layers3, ShoppingBag, Stethoscope } from "lucide-react";
import { Link } from "react-router";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import "@/styles/services-section-variants.css";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ServiceCard = {
  title: string;
  description: string;
  eyebrow: string;
  icon: IconComponent;
  accent: string;
};

const services: ServiceCard[] = [
  {
    title: "Web Design That Converts",
    description:
      "Modern, conversion-optimized websites built on Webflow and Square Online that grow with your business and adapt to changing needs.",
    eyebrow: "Growth Foundation",
    icon: Globe,
    accent: "var(--mis-primary)",
  },
  {
    title: "Custom Applications",
    description:
      "Tailored web applications and integrations designed to solve your specific business challenges and streamline operations.",
    eyebrow: "Operational Systems",
    icon: Layers3,
    accent: "var(--mis-brand-red)",
  },
  {
    title: "AI & Automation",
    description:
      "Forward-thinking AI integration, workflow automation, and implementation strategy that create leverage across your business.",
    eyebrow: "Efficiency Multiplier",
    icon: Bot,
    accent: "#c9923d",
  },
];

const industrySignals = [
  { label: "Healthcare", icon: Stethoscope },
  { label: "Retail / Ecommerce", icon: ShoppingBag },
  { label: "Professional Services", icon: ArrowRight },
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
    <div className="ssv-header">
      <p className="ssv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function VariantOne() {
  return (
    <section className="ssv-section ssv-section--editorial">
      <SectionHeader
        eyebrow="Variant 1"
        title="Editorial Stripe"
        body="A staggered, magazine-like layout that gives each service its own moment and a stronger sense of motion."
      />
      <div className="ssv-editorial-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article key={service.title} className={`ssv-editorial-card ssv-editorial-card--${index + 1}`}>
              <div className="ssv-editorial-bar" style={{ backgroundColor: service.accent }} />
              <span className="ssv-editorial-index">0{index + 1}</span>
              <div className="ssv-icon-wrap" style={{ color: service.accent }}>
                <Icon />
              </div>
              <p className="ssv-card-eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantTwo() {
  return (
    <section className="ssv-section ssv-section--spotlight">
      <SectionHeader
        eyebrow="Variant 2"
        title="Spotlight Band"
        body="A darker, higher-contrast section that lets the services feel more premium and creates a stronger break in the homepage flow."
      />
      <div className="ssv-spotlight-shell">
        <div className="ssv-spotlight-copy">
          <p className="ssv-card-eyebrow">Strategic Technology for Growing Businesses</p>
          <h3>Clear offers. Clear outcomes. A stronger visual story.</h3>
          <p>
            This direction makes the Services section feel like a flagship moment instead of a neutral card row.
          </p>
        </div>
        <div className="ssv-spotlight-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="ssv-spotlight-card">
                <div className="ssv-icon-wrap" style={{ color: service.accent }}>
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="ssv-pill" style={{ borderColor: service.accent, color: service.accent }}>
                  {service.eyebrow}
                </span>
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
    <section className="ssv-section ssv-section--rail">
      <SectionHeader
        eyebrow="Variant 3"
        title="Center-Weighted Rail"
        body="A horizontal composition with one featured middle card, giving the section a stronger focal point and more deliberate pacing."
      />
      <div className="ssv-rail-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          const featured = index === 1;

          return (
            <article key={service.title} className={`ssv-rail-card ${featured ? "is-featured" : ""}`}>
              <div className="ssv-rail-top">
                <p className="ssv-card-eyebrow">{service.eyebrow}</p>
                <div className="ssv-icon-wrap" style={{ color: service.accent }}>
                  <Icon />
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="ssv-rail-line" style={{ backgroundColor: service.accent }} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="ssv-section ssv-section--mosaic">
      <SectionHeader
        eyebrow="Variant 4"
        title="Mosaic Storyboard"
        body="A more sculpted, mixed-scale layout that feels more custom and less template-like while still being easy to scan."
      />
      <div className="ssv-mosaic-grid">
        <article className="ssv-mosaic-hero">
          <p className="ssv-card-eyebrow">Flagship Offer</p>
          <h3>{services[0].title}</h3>
          <p>{services[0].description}</p>
          <div className="ssv-signal-row">
            {industrySignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <span key={signal.label} className="ssv-signal">
                  <Icon />
                  {signal.label}
                </span>
              );
            })}
          </div>
        </article>
        <article className="ssv-mosaic-card">
          <p className="ssv-card-eyebrow">{services[1].eyebrow}</p>
          <h3>{services[1].title}</h3>
          <p>{services[1].description}</p>
        </article>
        <article className="ssv-mosaic-card ssv-mosaic-card--accent">
          <p className="ssv-card-eyebrow">{services[2].eyebrow}</p>
          <h3>{services[2].title}</h3>
          <p>{services[2].description}</p>
        </article>
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="ssv-section ssv-section--stacked">
      <SectionHeader
        eyebrow="Variant 5"
        title="Stacked Cards With Side Narrative"
        body="A split layout that gives the section a stronger narrative frame on the left and more expressive service cards on the right."
      />
      <div className="ssv-stacked-shell">
        <aside className="ssv-stacked-aside">
          <p className="ssv-card-eyebrow">Why this works</p>
          <h3>More visual pressure, less generic repetition.</h3>
          <p>
            The current homepage section communicates well, but it does not claim enough attention. This variation uses hierarchy and contrast to earn the scroll stop.
          </p>
          <Link to="/" className="ssv-inline-link">
            Back to homepage
            <ArrowLeft />
          </Link>
        </aside>
        <div className="ssv-stacked-list">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="ssv-stacked-card">
                <div className="ssv-icon-wrap" style={{ color: service.accent }}>
                  <Icon />
                </div>
                <div>
                  <p className="ssv-card-eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServicesSectionVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="services-section-lab">
        <section className="ssv-hero">
          <div className="ssv-hero-inner">
            <Link to="/" className="ssv-back-link">
              <ArrowLeft />
              Back to Home
            </Link>
            <p className="ssv-eyebrow">Services Section Explorations</p>
            <h1>Five stronger directions for the homepage Services section.</h1>
            <p>
              These variations keep the same offer structure and brand palette, but push the layout, rhythm, and emphasis much harder than the current white-card grid.
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
