import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Bot, Globe, Layers3, type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import "@/styles/services-section-variants.css";

export type StrategicServiceItem = {
  title: string;
  description: string;
  eyebrow: string;
  icon: LucideIcon;
  accent: string;
};

export type StrategicServicesSectionProps = {
  sectionId?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
  ctaScrollToId?: string;
  services?: StrategicServiceItem[];
};

const defaultServices: StrategicServiceItem[] = [
  {
    title: "Websites That Convert",
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
    title: "AI & AEO Optimization",
    description:
      "Forward-thinking AI integration and Answer Engine Optimization to ensure your business is found by both search engines and AI assistants.",
    eyebrow: "Visibility Multiplier",
    icon: Bot,
    accent: "#c9923d",
  },
];

export function StrategicServicesSection({
  sectionId = "services",
  title = "Technology Solutions for Growing Businesses",
  description = "We design, develop, and optimize digital systems that help small businesses grow, simplify operations, and stay visible as the web shifts toward AI-assisted discovery.",
  ctaLabel = "Book a Free Strategy Call",
  ctaTo,
  ctaScrollToId = "contact",
  services = defaultServices,
}: StrategicServicesSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.innerWidth > 980;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 981px)");
    const syncDesktopState = () => setIsDesktop(mediaQuery.matches);

    syncDesktopState();
    mediaQuery.addEventListener("change", syncDesktopState);

    return () => mediaQuery.removeEventListener("change", syncDesktopState);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardTwoY = useTransform(scrollYProgress, [0, 0.26, 0.46, 1], [0, 0, -126, -126]);
  const cardThreeY = useTransform(scrollYProgress, [0, 0.56, 0.8, 1], [0, 0, -262, -262]);

  const handleCta = () => {
    const element = document.getElementById(ctaScrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id={sectionId} className="ssv-section ssv-section--stacked home-services-section">
      <div className="ssv-stacked-shell home-services-shell">
        <motion.aside
          className="ssv-stacked-aside home-services-aside"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          {ctaTo ? (
            <Link to={ctaTo} className="home-services-link">
              {ctaLabel}
              <ArrowRight size={18} />
            </Link>
          ) : (
            <button type="button" onClick={handleCta} className="home-services-link">
              {ctaLabel}
              <ArrowRight size={18} />
            </button>
          )}
        </motion.aside>

        <div className="ssv-stacked-list home-services-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardStyle =
              !isDesktop
                ? undefined
                : index === 1
                  ? { y: cardTwoY }
                  : index === 2
                    ? { y: cardThreeY }
                    : undefined;

            return (
              <motion.article
                key={service.title}
                className={`ssv-stacked-card home-services-card home-services-card--${index + 1}`}
                style={cardStyle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="ssv-icon-wrap" style={{ color: service.accent }}>
                  <Icon />
                </div>
                <div>
                  <p className="ssv-card-eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
