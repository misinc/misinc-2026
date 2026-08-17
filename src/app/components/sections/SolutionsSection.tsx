import { motion } from "motion/react";
import { Link } from "react-router";
import type { ReactNode } from "react";
import { defaultSolutionIndustries, type SolutionIndustryItem } from "@/app/data/solutionIndustries";
import "@/styles/solutions-section-variants.css";
export type { SolutionIndustryItem } from "@/app/data/solutionIndustries";

export type SolutionsSectionProps = {
  sectionId?: string;
  title?: ReactNode;
  leadTitle?: ReactNode;
  leadDescription?: ReactNode;
  industries?: SolutionIndustryItem[];
  backgroundColor?: string;
};

export function SolutionsSection({
  sectionId = "solutions",
  title = "Solutions Tailored to Your Industry",
  leadTitle = "Solutions designed around how each industry actually operates.",
  leadDescription = "Instead of presenting every audience at the same weight, this version creates a stronger entry point and a more editorial scan path.",
  industries = defaultSolutionIndustries,
  backgroundColor,
}: SolutionsSectionProps) {
  return (
    <section
      id={sectionId}
      className="solv-section content-stretch flex flex-col items-center relative shrink-0 w-full"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1200px]">
        <motion.div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="home-section-heading w-full">
            {title}
          </h2>
        </motion.div>

        <div className="solv-mosaic-grid w-full">
          <motion.article
            className="solv-mosaic-lead"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>{leadTitle}</h3>
            <p>{leadDescription}</p>
            <div className="solv-mini-stack">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <Link key={`solutions-pill-${industry.title}`} to={industry.to ?? "#"} className="solv-mini-pill">
                    <Icon />
                    <span>{industry.title}</span>
                  </Link>
                );
              })}
            </div>
          </motion.article>

          <div className="solv-mosaic-cards">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    to={industry.to ?? "#"}
                    className={`solv-card solv-mosaic-card solv-mosaic-card--${index + 1}`}
                    style={{ ["--accent" as string]: industry.accent }}
                  >
                    <div className="solv-mosaic-card__title">
                      <Icon />
                      <h3>{industry.title}</h3>
                    </div>
                    <p>{industry.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
