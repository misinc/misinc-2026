import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Bot, BriefcaseBusiness, CalendarRange, Sparkles, type LucideIcon } from "lucide-react";
import "@/styles/authority-section-variants.css";

export type AuthorityMilestone = {
  value: string;
  label: string;
  detail: string;
  icon: LucideIcon;
  accent: string;
};

export type AuthoritySectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  orbitValue?: string;
  orbitLabel?: string;
  backgroundStyle?: string;
  milestones?: AuthorityMilestone[];
};

const defaultMilestones: AuthorityMilestone[] = [
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

export function AuthoritySection({
  sectionId = "authority",
  eyebrow = "FOUNDED IN 1995",
  title = (
    <>
      30 Years of Innovation.
      <br />
      Built for What&apos;s Next.
    </>
  ),
  description = "Since 1995, we’ve helped businesses navigate every major shift in web technology — from the early web to mobile-first design to AI-powered optimization.",
  orbitValue = "30",
  orbitLabel = "Years of innovation",
  backgroundStyle = "radial-gradient(circle at top left, rgba(255, 153, 2, 0.16), transparent 18%), linear-gradient(180deg, #451b17 0%, #261614 100%)",
  milestones = defaultMilestones,
}: AuthoritySectionProps) {
  return (
    <section
      id={sectionId}
      className="authority-variant authority-variant--midnight content-stretch flex flex-col items-center relative shrink-0 w-full"
      style={{ background: backgroundStyle }}
    >
      <div className="content-stretch flex flex-col relative shrink-0 w-full max-w-[1200px]">
        <motion.div
          className="authority-variant-header content-stretch flex flex-col items-center relative shrink-0 w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="authority-lab-eyebrow">{eyebrow}</p>
          <h2 className="home-section-heading is-inverse w-full max-w-[800px]">{title}</h2>
          <p className="max-w-[700px]">{description}</p>
        </motion.div>

        <div className="midnight-shell">
          <motion.div
            className="midnight-orbit"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="midnight-orbit__ripple midnight-orbit__ripple--1" aria-hidden="true" />
            <span className="midnight-orbit__ripple midnight-orbit__ripple--2" aria-hidden="true" />
            <span className="midnight-orbit__ripple midnight-orbit__ripple--3" aria-hidden="true" />
            <div className="midnight-orbit__core">
              <span>{orbitValue}</span>
              <p>{orbitLabel}</p>
            </div>
          </motion.div>

          <div className="midnight-grid">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;

              return (
                <motion.article
                  key={`${milestone.label}-${index}`}
                  className="midnight-card"
                  style={{ ["--accent" as string]: milestone.accent }}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -10,
                    scale: 1.022,
                    boxShadow: "0 34px 72px rgba(0, 0, 0, 0.32)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="midnight-card__header">
                    <span className="authority-mini-label">Milestone</span>
                    <Icon size={18} />
                  </div>
                  <p className="midnight-card__value">{milestone.value}</p>
                  <p className="midnight-card__label">{milestone.label}</p>
                  <p className="midnight-card__detail">{milestone.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
