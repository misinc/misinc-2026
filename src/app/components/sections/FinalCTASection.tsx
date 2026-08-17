import { motion } from "motion/react";
import { Link } from "react-router";
import type { ReactNode } from "react";

export type FinalCTASectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  actionLabel?: string;
  actionTo?: string;
  actionScrollToId?: string;
  footnote?: ReactNode;
  backgroundColor?: string;
};

export function FinalCTASection({
  sectionId = "contact",
  eyebrow = "Free Strategy Call",
  title = "Ready to Talk Through Your Next Project?",
  description = "Get practical guidance on web design, custom development, and AI strategy tailored to your business, goals, and stage of growth.",
  actionLabel = "Book a Free Strategy Call",
  actionTo,
  actionScrollToId = "contact",
  footnote = "No pressure. Clear recommendations.",
  backgroundColor = "#fafafa",
}: FinalCTASectionProps) {
  const handleAction = () => {
    const element = document.getElementById(actionScrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actionContent = (
    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-white text-[15px] md:text-[16px] tracking-[1px]">
      {actionLabel}
    </p>
  );

  return (
    <section
      id={sectionId}
      className="content-stretch flex flex-col items-center py-[100px] md:py-[140px] relative shrink-0 w-full"
      style={{ backgroundColor }}
    >
      <div className="content-stretch flex flex-col gap-[40px] md:gap-[48px] items-center relative shrink-0 w-full max-w-[900px] px-5 md:px-8 lg:px-12 text-center">
        <motion.div
          className="content-stretch flex flex-col gap-[20px] items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-['Manrope:Medium',sans-serif] font-medium uppercase tracking-[1.5px] text-[12px] md:text-[13px] text-[#9B3139]">
            {eyebrow}
          </p>
          <h2 className="home-section-heading w-full">
            {title}
          </h2>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[700px]">
            {description}
          </p>
        </motion.div>

        {actionTo ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={actionTo}
              className="bg-[#9B3139] content-stretch flex items-center justify-center px-[36px] py-[18px] md:px-[42px] md:py-[20px] relative rounded-[500px] shrink-0"
            >
              {actionContent}
            </Link>
          </motion.div>
        ) : (
          <motion.button
            type="button"
            className="bg-[#9B3139] content-stretch flex items-center justify-center px-[36px] py-[18px] md:px-[42px] md:py-[20px] relative rounded-[500px] shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: "#7A2730" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAction}
          >
            {actionContent}
          </motion.button>
        )}

        <motion.p
          className="max-w-[560px] text-[14px] md:text-[15px] leading-[1.7] text-[#777]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          {footnote}
        </motion.p>
      </div>
    </section>
  );
}
