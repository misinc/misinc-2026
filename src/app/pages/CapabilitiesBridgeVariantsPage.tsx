import type { ComponentType, SVGProps } from "react";
import { ArrowLeft, ArrowRight, Bot, Globe, Layers3 } from "lucide-react";
import { Link } from "react-router";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { CapabilitiesBridgeSection } from "@/app/components/sections";
import "@/styles/capabilities-bridge-variants.css";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type CapabilityCard = {
  title: string;
  description: string;
  href: string;
  icon: IconComponent;
  accent: string;
  eyebrow: string;
};

const capabilities: CapabilityCard[] = [
  {
    title: "Web Design & Development",
    description:
      "Conversion-focused websites with strong messaging, scalable architecture, and polished implementation.",
    href: "/services/web-design",
    icon: Globe,
    accent: "#A62025",
    eyebrow: "Digital Foundation",
  },
  {
    title: "Custom Applications",
    description:
      "Purpose-built tools, workflows, and integrations that reduce friction and support real operations.",
    href: "/services/custom-applications",
    icon: Layers3,
    accent: "#FF9902",
    eyebrow: "Operational Systems",
  },
  {
    title: "AI Solutions",
    description:
      "Practical AI strategy, automation, and implementation that create leverage without adding noise.",
    href: "/services/ai-consulting",
    icon: Bot,
    accent: "#6B4A1E",
    eyebrow: "Efficiency Multiplier",
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
    <header className="cbv-header">
      <p className="cbv-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function VariantOne() {
  return (
    <section className="cbv-section">
      <SectionHeader
        eyebrow="Variant 1"
        title="Editorial Triptych"
        body="Three capabilities with more weight, better spacing, and stronger iconography than the current pill-link stack."
      />
      <CapabilitiesBridgeSection
        sectionId="capabilities-variant-one"
        eyebrow="Capabilities Bridge"
        title="Core capabilities that power every solution path."
        description="These three capability areas work together to support strategy, design, engineering, and measurable operational improvement."
        capabilities={capabilities}
        backgroundColor="transparent"
      />
    </section>
  );
}

function VariantTwo() {
  return (
    <section className="cbv-section cbv-section--split">
      <SectionHeader
        eyebrow="Variant 2"
        title="Narrative Split"
        body="A stronger story panel on the left and more sculpted capability cards on the right."
      />
      <div className="cbv-split-shell">
        <aside className="cbv-story">
          <p className="cbv-mini-label">Why this works</p>
          <h3>The section feels strategic instead of purely navigational.</h3>
          <p>
            This direction gives the capability links a clearer frame: these are the three core engines behind the
            solution work, not just more pages to click.
          </p>
          <div className="cbv-story-note">
            <span>3 core capabilities</span>
            <ArrowRight size={16} />
            <span>One integrated delivery model</span>
          </div>
        </aside>
        <div className="cbv-split-list">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <Link
                key={capability.title}
                to={capability.href}
                className="cbv-split-card"
                style={{ ["--accent" as string]: capability.accent }}
              >
                <div className="cbv-split-card__top">
                  <span className="cbv-mini-label">0{index + 1}</span>
                  <Icon />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <strong>{capability.eyebrow}</strong>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VariantThree() {
  return (
    <section className="cbv-section cbv-section--rail">
      <SectionHeader
        eyebrow="Variant 3"
        title="Bridge Rail"
        body="A directional layout with a lead panel and a connected rail of capabilities, so the section feels more like a system map."
      />
      <div className="cbv-rail-shell">
        <article className="cbv-rail-intro">
          <p className="cbv-mini-label">Core capability map</p>
          <h3>Three service lanes that support every solution path.</h3>
          <p>
            Web presence, operational systems, and AI leverage work together. This version makes that relationship much
            clearer than a simple vertical list.
          </p>
        </article>
        <div className="cbv-rail-line" />
        <div className="cbv-rail-list">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <Link
                key={capability.title}
                to={capability.href}
                className="cbv-rail-card"
                style={{ ["--accent" as string]: capability.accent }}
              >
                <div className="cbv-rail-card__step">0{index + 1}</div>
                <div className="cbv-icon-wrap">
                  <Icon />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VariantFour() {
  return (
    <section className="cbv-section cbv-section--mosaic">
      <SectionHeader
        eyebrow="Variant 4"
        title="Mosaic Spotlight"
        body="A mixed-scale composition with one flagship card and two support cards, giving the section a clearer focal point."
      />
      <div className="cbv-mosaic-grid">
        <Link
          to={capabilities[0].href}
          className="cbv-mosaic-hero"
          style={{ ["--accent" as string]: capabilities[0].accent }}
        >
          <span className="cbv-chip">{capabilities[0].eyebrow}</span>
          <h3>{capabilities[0].title}</h3>
          <p>{capabilities[0].description}</p>
        </Link>
        {capabilities.slice(1).map((capability) => {
          const Icon = capability.icon;

          return (
            <Link
              key={capability.title}
              to={capability.href}
              className="cbv-mosaic-card"
              style={{ ["--accent" as string]: capability.accent }}
            >
              <div className="cbv-mosaic-card__title">
                <Icon />
                <h3>{capability.title}</h3>
              </div>
              <p>{capability.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function VariantFive() {
  return (
    <section className="cbv-section cbv-section--midnight">
      <SectionHeader
        eyebrow="Variant 5"
        title="Midnight Control Board"
        body="A darker premium direction that makes the bridge section feel more cinematic and more decisive."
      />
      <div className="cbv-midnight-shell">
        <aside className="cbv-midnight-aside">
          <span className="cbv-chip cbv-chip--light">Delivery stack</span>
          <h3>Three core capabilities. One coordinated growth system.</h3>
          <p>
            This direction breaks the page rhythm hard, which makes the bridge feel less like filler and more like a
            point of strategic confidence.
          </p>
        </aside>
        <div className="cbv-midnight-grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <Link
                key={capability.title}
                to={capability.href}
                className="cbv-midnight-card"
                style={{ ["--accent" as string]: capability.accent }}
              >
                <div className="cbv-midnight-card__top">
                  <span className="cbv-chip cbv-chip--light">{capability.eyebrow}</span>
                  <Icon />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function CapabilitiesBridgeVariantsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="capabilities-bridge-lab">
        <section className="cbv-hero">
          <div className="cbv-hero-inner">
            <Link to="/solutions" className="cbv-back-link">
              <ArrowLeft />
              Back to Solutions
            </Link>
            <p className="cbv-eyebrow">Capabilities Bridge Explorations</p>
            <h1>Five stronger directions for the Solutions page capabilities bridge.</h1>
            <p>
              These variations keep the bridge focused on three core capabilities, but push the section far beyond a
              neutral list of links.
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
