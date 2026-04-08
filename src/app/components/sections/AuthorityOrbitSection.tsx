import { motion } from "motion/react";
import type { ReactNode } from "react";
import "@/styles/authority-orbit-section.css";

export type AuthorityOrbitSectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  orbitValue?: string;
  orbitLabel?: ReactNode;
  backgroundStyle?: string;
};

export function AuthorityOrbitSection({
  sectionId = "authority-orbit",
  eyebrow = "Founded in 1995",
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
}: AuthorityOrbitSectionProps) {
  return (
    <section
      id={sectionId}
      className="aos-section"
      style={{ background: backgroundStyle }}
    >
      <div className="aos-shell">
        <motion.div
          className="aos-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow ? <p className="aos-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {description ? <p className="aos-description">{description}</p> : null}
        </motion.div>

        <motion.div
          className="aos-orbit"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
        >
          <span className="aos-orbit__ripple aos-orbit__ripple--1" aria-hidden="true" />
          <span className="aos-orbit__ripple aos-orbit__ripple--2" aria-hidden="true" />
          <span className="aos-orbit__ripple aos-orbit__ripple--3" aria-hidden="true" />
          <div className="aos-orbit__core">
            <span>{orbitValue}</span>
            <p>{orbitLabel}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
