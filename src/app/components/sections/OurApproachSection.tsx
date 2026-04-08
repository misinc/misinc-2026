import type { ReactNode } from "react";
import { BarChart3, Compass, DraftingCompass, Wrench, type LucideIcon } from "lucide-react";
import "@/styles/our-approach-section.css";

export type ApproachStepItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export type ApproachMetricItem = {
  value: string;
  label: string;
};

export type OurApproachSectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  featureEyebrow?: ReactNode;
  featureTitle?: ReactNode;
  featureDescription?: ReactNode;
  metrics?: ApproachMetricItem[];
  steps?: ApproachStepItem[];
  backgroundColor?: string;
};

const defaultMetrics: ApproachMetricItem[] = [
  { value: "4", label: "Clear phases" },
  { value: "1", label: "Continuous system" },
];

const defaultSteps: ApproachStepItem[] = [
  {
    title: "Discover",
    description:
      "We align business goals, audience needs, and constraints before design or development begins.",
    icon: Compass,
    accent: "#A62025",
  },
  {
    title: "Design",
    description:
      "We shape clear user journeys, messaging hierarchy, and interface systems built for trust and conversion.",
    icon: DraftingCompass,
    accent: "#C9923D",
  },
  {
    title: "Build",
    description:
      "We implement with performance, maintainability, CMS governance, and real operational use in mind.",
    icon: Wrench,
    accent: "#FF9902",
  },
  {
    title: "Optimize",
    description:
      "We improve continuously through analytics, testing, search visibility, and iterative UX refinement.",
    icon: BarChart3,
    accent: "#6B4A1E",
  },
];

export function OurApproachSection({
  sectionId = "our-approach",
  eyebrow = "Our Approach",
  title = "A process designed to create momentum, not just deliverables.",
  description = "Good outcomes come from disciplined sequencing. Each phase sharpens the next, so strategy, execution, and optimization work as one continuous system.",
  featureEyebrow = "Flagship message",
  featureTitle = "Good outcomes come from disciplined sequencing.",
  featureDescription = "Instead of treating every phase as equal visual weight, this version emphasizes the overall promise and lets the steps cascade beside it.",
  metrics = defaultMetrics,
  steps = defaultSteps,
  backgroundColor,
}: OurApproachSectionProps) {
  return (
    <section
      id={sectionId}
      className="oas-section"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="oas-shell">
        <header className="oas-header">
          <p className="oas-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>

        <div className="oas-editorial-shell">
          <article className="oas-editorial-feature">
            <p className="oas-mini-label">{featureEyebrow}</p>
            <h3>{featureTitle}</h3>
            <p>{featureDescription}</p>
            <div className="oas-feature-metrics">
              {metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`}>
                  <span>{metric.value}</span>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="oas-editorial-ladder">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className={`oas-ladder-card oas-ladder-card--${index + 1}`}
                  style={{ ["--accent" as string]: step.accent }}
                >
                  <div className="oas-ladder-card__title">
                    <Icon />
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                  <div className="oas-ladder-card__rail" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
