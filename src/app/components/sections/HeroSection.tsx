import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import heroBackgroundVideo from "@/assets/bg-hero-balloon-video.mp4";
import { cn } from "@/app/components/ui/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export type HeroSectionAction = {
  label: string;
  to?: string;
  scrollToId?: string;
  variant?: "primary" | "secondary";
};

export type HeroSectionProps = {
  sectionId?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  backgroundVideoSrc?: string;
  primaryAction?: HeroSectionAction;
  secondaryAction?: HeroSectionAction;
  supplemental?: ReactNode;
  className?: string;
};

const defaultPrimaryAction: HeroSectionAction = {
  label: "Book a Free Strategy Call",
  scrollToId: "contact",
  variant: "primary",
};

const defaultSecondaryAction: HeroSectionAction = {
  label: "View Case Studies",
  scrollToId: "case-studies",
  variant: "secondary",
};

function HeroAction({
  action,
  onScroll,
}: {
  action: HeroSectionAction;
  onScroll: (id: string) => void;
}) {
  const variant = action.variant ?? "primary";
  const className =
    variant === "primary"
      ? "bg-[#9B3139] content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[500px] shrink-0 z-[1]"
      : "content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[500px] shrink-0 transition-all hover:bg-black/5";
  const textClassName =
    variant === "primary"
      ? "font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[15px] text-white tracking-[1px]"
      : "font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[15px] tracking-[1px]";
  const content = (
    <>
      {variant === "secondary" ? (
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]"
        />
      ) : null}
      <span className={textClassName}>{action.label}</span>
    </>
  );

  if (action.to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={action.to} className={className}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={() => {
        if (action.scrollToId) {
          onScroll(action.scrollToId);
        }
      }}
      className={className}
      whileHover={variant === "primary" ? { scale: 1.05, backgroundColor: "#7A2730" } : { scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}

export function HeroSection({
  sectionId = "hero",
  eyebrow,
  title = (
    <>
      Strategic Web Design & <br />
      AI Solutions That Drive Business Growth
    </>
  ),
  description = "We design websites, build custom tools, and use AI to help you attract more customers and grow your business.",
  backgroundVideoSrc = heroBackgroundVideo,
  primaryAction = defaultPrimaryAction,
  secondaryAction = defaultSecondaryAction,
  supplemental,
  className,
}: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={sectionId}
      className={cn(
        "content-stretch flex flex-col items-center pb-[80px] md:pb-[120px] pt-[64px] md:pt-[100px] relative shrink-0 w-full overflow-hidden",
        className,
      )}
      data-name="Section Hero"
    >
      <div className="hero-video-layer" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={backgroundVideoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="hero-video-scrim" aria-hidden="true" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(#9B3139 1px, transparent 1px), linear-gradient(90deg, #9B3139 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="content-stretch flex items-start relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12 z-10" data-name="Container">
        <motion.div
          className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] md:gap-[40px] isolate items-start min-h-px min-w-0 relative w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[20px] items-start relative shrink-0 text-[#2A2420] w-full z-[2]"
            variants={fadeInUp}
          >
            {eyebrow ? (
              <motion.p
                className="text-[12px] font-normal uppercase tracking-[1px] text-[#9B3139]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {eyebrow}
              </motion.p>
            ) : null}
            <motion.h1
              className="leading-[1.1] relative shrink-0 text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] w-full max-w-[900px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="leading-[1.6] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] max-w-[700px] text-[#4A3F37]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {description}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-[16px] items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <HeroAction action={primaryAction} onScroll={scrollToSection} />
            <HeroAction action={secondaryAction} onScroll={scrollToSection} />
          </motion.div>
          {supplemental ? (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
            >
              {supplemental}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
