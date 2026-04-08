import { ArrowRight, Bot, Globe, Layers3, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import "@/styles/capabilities-bridge-section.css";

export type CapabilityBridgeItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  eyebrow: string;
  ctaLabel?: string;
};

export type CapabilitiesBridgeSectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  capabilities?: CapabilityBridgeItem[];
  defaultCtaLabel?: string;
  backgroundColor?: string;
};

const defaultCapabilities: CapabilityBridgeItem[] = [
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

export function CapabilitiesBridgeSection({
  sectionId = "capabilities-bridge",
  eyebrow = "Capabilities Bridge",
  title = "Core capabilities that power every solution path.",
  description = "These three capability areas work together to support strategy, design, engineering, and measurable operational improvement.",
  capabilities = defaultCapabilities,
  defaultCtaLabel = "Explore capability",
  backgroundColor,
}: CapabilitiesBridgeSectionProps) {
  return (
    <section
      id={sectionId}
      className="cbs-section"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="cbs-shell">
        <header className="cbs-header">
          <p className="cbs-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>

        <div className="cbs-editorial-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <Link
                key={capability.title}
                to={capability.href}
                className={`cbs-editorial-card cbs-editorial-card--${index + 1}`}
                style={{ ["--accent" as string]: capability.accent }}
              >
                <span className="cbs-chip">{capability.eyebrow}</span>
                <div className="cbs-icon-wrap">
                  <Icon />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="cbs-inline-link">
                  {capability.ctaLabel ?? defaultCtaLabel}
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
