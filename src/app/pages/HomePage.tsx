import { Link } from "react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight, Bot, Globe, Layers3, BriefcaseBusiness, CalendarRange, Sparkles, HandHeart, Rocket, ShoppingBag, Stethoscope, Store } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import heroBackgroundVideo from "@/assets/bg-hero-balloon-video.mp4";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import "@/styles/authority-section-variants.css";
import "@/styles/services-section-variants.css";
import "@/styles/solutions-section-variants.css";

type NavbarDropdownGroup = {
  label: string;
  sectionId: string;
  items: string[];
};

const navbarDropdowns: NavbarDropdownGroup[] = [
  {
    label: "Solutions",
    sectionId: "solutions",
    items: [
      "Small Businesses",
      "Real Estate",
      "Nonprofits",
      "Professional Services",
      "Startups & SaaS",
    ],
  },
  {
    label: "Services",
    sectionId: "services",
    items: [
      "Website Design",
      "Website Redesign",
      "Ecommerce Websites",
      "Conversion Optimization (CRO)",
      "Webflow Website Development",
      "Webflow Migrations (WordPress -> Webflow)",
      "Webflow Performance Optimization",
      "Square Online Website Design",
      "Square Ecommerce Setup",
      "Shopify -> Square Migrations",
      "Web Applications",
      "SaaS MVP Development",
      "Internal Tools & Dashboards",
      "API & System Integrations",
      "AI Strategy for Small Businesses",
      "AI Chat Implementation",
      "Workflow Automation",
      "Internal AI Systems",
      "AI Search Optimization",
      "Structured Content Strategy",
      "Schema & Structured Data Implementation",
      "AI Visibility Audits",
    ],
  },
  {
    label: "Resources",
    sectionId: "ai-aeo",
    items: [
      "Blog Listing",
      "Blog Post (Dynamic Template)",
      "Webflow vs WordPress Guide",
      "Website Redesign Checklist",
      "Cost of Web Design in Albuquerque",
      "AI for Small Businesses Guide",
      "Web Design FAQ",
      "Webflow FAQ",
      "AI & AEO FAQ",
    ],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

// Logo Component
function Logo() {
  return (
    <motion.div 
      className="h-[40px] md:h-[50px] relative shrink-0 flex items-center" 
      data-name="Logo"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img src={logo} alt="MIS, Inc." className="h-8 w-8 md:h-12 md:w-12" />
    </motion.div>
  );
}

// Label/Badge
function Label({ text }: { text: string }) {
  return (
    <div className="bg-[#FFAA1D] content-stretch hidden sm:flex items-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#9B3139] text-[12px] tracking-[0.25px] whitespace-nowrap">{text}</p>
    </div>
  );
}

// Navbar Left
function NavbarLeft() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Navbar Left">
      <button onClick={() => scrollToSection('hero')}>
        <Logo />
      </button>
    </div>
  );
}

// Navbar Menu Items
function NavbarMenuItem({ text, isActive, onClick }: { text: string; isActive?: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="content-stretch flex gap-[2px] h-[42px] items-center justify-center relative rounded-[500px] shrink-0 transition-opacity hover:opacity-60" data-name="Navbar Menu Item">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#9B3139] text-[14px] tracking-[1px]">{text}</p>
      {isActive && <div className="absolute bg-[#9B3139] h-px left-0 top-[31.5px] w-full" data-name="Border" />}
    </button>
  );
}

function NavbarDropdownMenu({
  text,
  items,
  onPrimaryClick,
}: {
  text: string;
  items: string[];
  onPrimaryClick: () => void;
}) {
  return (
    <div className="group relative">
      <button
        onClick={onPrimaryClick}
        className="content-stretch flex h-[42px] items-center justify-center gap-[4px] rounded-[500px] transition-opacity hover:opacity-60"
        aria-haspopup="menu"
      >
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] text-[#9B3139] text-[14px] tracking-[1px]">
          {text}
        </p>
        <ChevronDown size={16} className="text-[#9B3139] transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-[48px] z-30 w-[320px] -translate-x-1/2 rounded-[16px] border border-[#eadfda] bg-white p-[10px] opacity-0 shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="max-h-[320px] overflow-y-auto">
          {items.map((item) => (
            <button
              key={`${text}-${item}`}
              type="button"
              onClick={onPrimaryClick}
              className="flex w-full cursor-pointer items-center rounded-[10px] px-[12px] py-[10px] text-left text-[13px] text-[#5E3A3D] transition-colors hover:bg-[#FDF7F2]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Navbar Menu
function NavbarMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content-stretch hidden lg:flex gap-[24px] xl:gap-[32px] items-center relative shrink-0" data-name="Navbar Menu">
      <NavbarMenuItem text="Home" isActive onClick={() => scrollToSection('hero')} />
      {navbarDropdowns.map((group) => (
        <NavbarDropdownMenu
          key={group.label}
          text={group.label}
          items={group.items}
          onPrimaryClick={() => scrollToSection(group.sectionId)}
        />
      ))}
      <NavbarMenuItem text="Case Studies" onClick={() => scrollToSection('case-studies')} />
      <NavbarMenuItem text="About" onClick={() => scrollToSection('authority')} />
      <NavbarMenuItem text="Contact" onClick={() => scrollToSection('contact')} />
    </div>
  );
}

// Primary CTA Button
function PrimaryCTAButton({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <motion.button 
      onClick={onClick} 
      className="bg-[#9B3139] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[500px] shrink-0"
      whileHover={{ scale: 1.05, backgroundColor: "#7A2730" }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-white text-[14px] tracking-[1px] whitespace-nowrap">{text}</p>
    </motion.button>
  );
}

// Navbar Right
function NavbarRight() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Navbar Right">
      <NavbarMenu />
      <PrimaryCTAButton text="Book a Free Strategy Call" onClick={() => scrollToSection('contact')} />
    </div>
  );
}

// Navbar
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
    setExpandedMobileMenu(null);
  };

  return (
    <>
      <div className="content-stretch h-[75px] relative shrink-0 w-full" data-name="Navbar">
        <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center w-full h-full px-5 md:px-6 gap-[24px]">
          <div className="shrink-0 justify-self-start">
            <button onClick={() => scrollToSection('hero')}>
              <Logo />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <NavbarMenu />
          </div>
          <div className="justify-self-end">
            <PrimaryCTAButton text="Book a Free Strategy Call" onClick={() => scrollToSection('contact')} />
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-[1fr_auto_1fr] items-center w-full h-full px-5 md:px-6">
          <div className="justify-self-start">
            <button onClick={() => scrollToSection('hero')}>
              <Logo />
            </button>
          </div>

          <div className="justify-self-center">
            <motion.button 
              onClick={() => scrollToSection('contact')} 
              className="bg-[#9B3139] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[500px]"
              whileHover={{ scale: 1.05, backgroundColor: "#7A2730" }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-white text-[12px] sm:text-[13px] tracking-[1px] whitespace-nowrap">Book Free Call</p>
            </motion.button>
          </div>

          <div className="justify-self-end">
            <button
              className="p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-[#9B3139]" />
              ) : (
                <Menu size={24} className="text-[#9B3139]" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Panel - Slides from right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Slide-in Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-6 border-b border-[#f3f3f3]">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-[#9B3139]" />
                </button>
              </div>
              
              {/* Menu Items */}
              <nav className="flex flex-col p-6 gap-[8px]">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">Home</p>
                </button>
                <button 
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === "Solutions" ? null : "Solutions")}
                  className="text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px] flex items-center justify-between">
                    Solutions
                    <ChevronDown size={16} className={`transition-transform ${expandedMobileMenu === "Solutions" ? "rotate-180" : ""}`} />
                  </p>
                </button>
                {expandedMobileMenu === "Solutions" && (
                  <div className="px-[24px] pb-[8px]">
                    {navbarDropdowns[0].items.map((item) => (
                      <button
                        key={`mobile-solutions-${item}`}
                        type="button"
                        onClick={() => scrollToSection("solutions")}
                        className="block w-full cursor-pointer rounded-md py-[9px] text-left text-[14px] text-[#6A4A4D] hover:bg-[#f9f9f9] px-[10px]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
                <button 
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === "Services" ? null : "Services")}
                  className="text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px] flex items-center justify-between">
                    Services
                    <ChevronDown size={16} className={`transition-transform ${expandedMobileMenu === "Services" ? "rotate-180" : ""}`} />
                  </p>
                </button>
                {expandedMobileMenu === "Services" && (
                  <div className="px-[24px] pb-[8px]">
                    {navbarDropdowns[1].items.map((item) => (
                      <button
                        key={`mobile-services-${item}`}
                        type="button"
                        onClick={() => scrollToSection("services")}
                        className="block w-full cursor-pointer rounded-md py-[9px] text-left text-[14px] text-[#6A4A4D] hover:bg-[#f9f9f9] px-[10px]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
                <button 
                  onClick={() => scrollToSection('case-studies')}
                  className="text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">Case Studies</p>
                </button>
                <button 
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === "Resources" ? null : "Resources")}
                  className="text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px] flex items-center justify-between">
                    Resources
                    <ChevronDown size={16} className={`transition-transform ${expandedMobileMenu === "Resources" ? "rotate-180" : ""}`} />
                  </p>
                </button>
                {expandedMobileMenu === "Resources" && (
                  <div className="px-[24px] pb-[8px]">
                    {navbarDropdowns[2].items.map((item) => (
                      <button
                        key={`mobile-resources-${item}`}
                        type="button"
                        onClick={() => scrollToSection("ai-aeo")}
                        className="block w-full cursor-pointer rounded-md py-[9px] text-left text-[14px] text-[#6A4A4D] hover:bg-[#f9f9f9] px-[10px]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
                <button 
                  onClick={() => scrollToSection('authority')}
                  className="text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">About</p>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">Contact</p>
                </button>
                
                {/* CTA in mobile menu */}
                <div className="mt-[24px]">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-[#9B3139] flex items-center justify-center px-[24px] py-[16px] rounded-[500px] hover:bg-[#7A2730] transition-colors"
                  >
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] text-white text-[15px] tracking-[1px]">Book a Free Strategy Call</p>
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Header
function Header() {
  return (
    <SiteHeader>
      <MainNavbar />
    </SiteHeader>
  );
}

// Hero Section
function SectionHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="content-stretch flex flex-col items-center pb-[80px] md:pb-[120px] pt-[64px] md:pt-[100px] relative shrink-0 w-full overflow-hidden" data-name="Section Hero">
      <div className="hero-video-layer" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={heroBackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-video-scrim" aria-hidden="true" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[2]" 
        style={{
          backgroundImage: `linear-gradient(#9B3139 1px, transparent 1px), linear-gradient(90deg, #9B3139 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
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
            <motion.h1 
              className="leading-[1.1] relative shrink-0 text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] w-full max-w-[900px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Strategic Web Design & <br/>AI Solutions That Drive Business Growth
            </motion.h1>
            <motion.p 
              className="leading-[1.6] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] max-w-[700px] text-[#4A3F37]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              We design websites, build custom tools, and use AI to help you attract more customers and grow your business.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-[16px] items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button 
              onClick={() => scrollToSection('contact')} 
              className="bg-[#9B3139] content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[500px] shrink-0 z-[1]"
              whileHover={{ scale: 1.05, backgroundColor: "#7A2730" }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[15px] text-white tracking-[1px]">Book a Free Strategy Call</p>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('case-studies')}
              className="content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[500px] shrink-0 transition-all hover:bg-black/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
              <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[15px] tracking-[1px]">View Case Studies</p>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Strategic Services Section
function SectionStrategicServices() {
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

  const services = [
    {
      title: "Websites That Convert",
      description: "Modern, conversion-optimized websites built on Webflow and Square Online that grow with your business and adapt to changing needs.",
      eyebrow: "Growth Foundation",
      icon: Globe,
      accent: "var(--mis-primary)",
    },
    {
      title: "Custom Applications",
      description: "Tailored web applications and integrations designed to solve your specific business challenges and streamline operations.",
      eyebrow: "Operational Systems",
      icon: Layers3,
      accent: "var(--mis-brand-red)",
    },
    {
      title: "AI & AEO Optimization",
      description: "Forward-thinking AI integration and Answer Engine Optimization to ensure your business is found by both search engines and AI assistants.",
      eyebrow: "Visibility Multiplier",
      icon: Bot,
      accent: "#c9923d",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="ssv-section ssv-section--stacked home-services-section">
      <div className="ssv-stacked-shell home-services-shell">
        <motion.aside
          className="ssv-stacked-aside home-services-aside"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2>Strategic Technology for Growing Businesses</h2>
          <p>
            We design, develop, and optimize digital systems that help small businesses grow, simplify operations, and stay visible as the web shifts toward AI-assisted discovery.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="home-services-link"
          >
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </button>
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

// Authority Section
function SectionAuthority() {
  const milestones = [
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

  return (
    <section
      id="authority"
      className="authority-variant authority-variant--midnight content-stretch flex flex-col items-center relative shrink-0 w-full"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(255, 153, 2, 0.16), transparent 18%), linear-gradient(180deg, #451b17 0%, #261614 100%)",
      }}
    >
      <div className="content-stretch flex flex-col relative shrink-0 w-full max-w-[1200px]">
        <motion.div
          className="authority-variant-header content-stretch flex flex-col items-center relative shrink-0 w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="authority-lab-eyebrow">FOUNDED IN 1995</p>
          <h2 className="w-full max-w-[800px]">
            30 Years of Innovation.<br/>Built for What’s Next.
          </h2>
          <p className="max-w-[700px]">
            Since 1995, we’ve helped businesses navigate every major shift in web technology — from the early web to mobile-first design to AI-powered optimization.
          </p>
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
              <span>30</span>
              <p>Years of innovation</p>
            </div>
          </motion.div>

          <div className="midnight-grid">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;

              return (
            <motion.article
              key={milestone.label}
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

// Case Studies Preview Section
function SectionCaseStudies() {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjkyNzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      industry: "Healthcare",
      title: "Regional Medical Practice",
      outcome: "300% increase in online appointment bookings within 6 months"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2OTI3OTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      industry: "Nonprofit",
      title: "Community Foundation",
      outcome: "Streamlined donation process increased contributions by 85%"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMG9mZmljZXxlbnwxfHx8fDE3NjkyNzk2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      industry: "Professional Services",
      title: "Legal Association",
      outcome: "Custom member portal reduced admin time by 60%"
    }
  ];

  return (
    <section id="case-studies" className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full bg-[#fafafa]">
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <motion.div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.2] text-[#151515] text-[32px] md:text-[40px] lg:text-[48px] w-full">
            Recent Client Success Stories
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px] w-full">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white flex flex-col overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="h-[240px] overflow-hidden relative bg-gray-100">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-[24px] md:p-[32px] flex flex-col gap-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="content-stretch flex items-center px-[10px] py-[4px] relative rounded-[500px] shrink-0 bg-[#FFAA1D]/10">
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#9B3139] text-[11px] tracking-[0.5px] uppercase">{study.industry}</p>
                  </div>
                </div>
                <h3 className="font-['Manrope:Medium',sans-serif] font-medium text-[#151515] text-[20px] md:text-[22px] leading-[1.3]">
                  {study.title}
                </h3>
                <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[15px] leading-[1.6]">
                  {study.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solutions by Industry Section
function SectionSolutions() {
  const industries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant websites, patient portals, and appointment systems designed for medical practices and health organizations.",
      eyebrow: "Regulated Trust",
      icon: Stethoscope,
      accent: "#A62025",
    },
    {
      title: "Nonprofits",
      description: "Mission-driven websites with integrated donation systems, volunteer management, and storytelling features.",
      eyebrow: "Mission Momentum",
      icon: HandHeart,
      accent: "#C9923D",
    },
    {
      title: "Professional Services",
      description: "Sophisticated web presence for legal, consulting, and financial services with client portals and custom tools.",
      eyebrow: "Credibility Systems",
      icon: BriefcaseBusiness,
      accent: "#6B4A1E",
    },
    {
      title: "Small Business",
      description: "E-commerce solutions, local SEO optimization, and conversion-focused websites that drive growth.",
      eyebrow: "Growth Engine",
      icon: Store,
      accent: "#FF9902",
    },
    {
      title: "Startups",
      description: "Launch-ready websites, MVP experiences, and flexible digital systems built to help emerging companies move quickly and scale with confidence.",
      eyebrow: "Scale Fast",
      icon: Rocket,
      accent: "#C76438",
    },
    {
      title: "Retail / Ecommerce",
      description: "Online storefronts, product-focused user journeys, and conversion-driven ecommerce experiences designed to increase sales and repeat customers.",
      eyebrow: "Revenue Pathways",
      icon: ShoppingBag,
      accent: "#7C3D33",
    },
  ];

  return (
    <section id="solutions" className="solv-section content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1200px]">
        <motion.div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.2] text-[#151515] text-[32px] md:text-[40px] lg:text-[48px] w-full">
            Solutions Tailored to Your Industry
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
            <h3>Solutions designed around how each industry actually operates.</h3>
            <p>
              Instead of presenting every audience at the same weight, this version creates a stronger entry point and a more editorial scan path.
            </p>
            <div className="solv-mini-stack">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <Link key={`solutions-pill-${industry.title}`} to="#" className="solv-mini-pill">
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
                    to="#"
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

// AI & AEO Section
function SectionAIAEO() {
  return (
    {/* <section id="ai-aeo" className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full bg-gradient-to-b from-[#4FA5AE]/5 to-transparent">
      <div className="content-stretch flex flex-col md:flex-row gap-[48px] md:gap-[64px] items-center relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <motion.div
          className="flex-1 w-full h-[300px] md:h-[400px] bg-[#f9f9f9] rounded-sm overflow-hidden relative order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTI3OTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI and AEO Technology"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="flex-1 content-stretch flex flex-col gap-[24px] items-start w-full order-1 md:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.2] text-[#151515] text-[32px] md:text-[40px] lg:text-[48px] w-full">
            Optimized for Search — and AI
          </h2>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] leading-[1.6]">
            The future of search is changing. AI assistants like ChatGPT, Perplexity, and Google’s AI Overviews are reshaping how people find information online.
          </p>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] leading-[1.6]">
            Our Answer Engine Optimization (AEO) services ensure your business is discoverable not just in traditional search results, but in AI-generated answers. We combine proven SEO practices with forward-thinking AI optimization to future-proof your online presence.
          </p>
          <div className="grid grid-cols-2 gap-[16px] w-full mt-[16px]">
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[28px] md:text-[32px] leading-[1.1]">AEO</p>
              <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[14px]">Answer Engine Optimization</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#4FA5AE] text-[28px] md:text-[32px] leading-[1.1]">AI-Ready</p>
              <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[14px]">Future-Proof Strategy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section> */}
  );
}

// Final CTA Section
function SectionFinalCTA() {
  return (
    <section id="contact" className="content-stretch flex flex-col items-center py-[100px] md:py-[140px] relative shrink-0 w-full bg-[#fafafa]">
      <div className="content-stretch flex flex-col gap-[40px] md:gap-[48px] items-center relative shrink-0 w-full max-w-[900px] px-5 md:px-8 lg:px-12 text-center">
        <motion.div
          className="content-stretch flex flex-col gap-[20px] items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-['Manrope:Medium',sans-serif] font-medium uppercase tracking-[1.5px] text-[12px] md:text-[13px] text-[#9B3139]">
            Free Strategy Call
          </p>
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.1] text-[#151515] text-[36px] md:text-[48px] lg:text-[56px] w-full">
            Ready to Talk Through Your Next Project?
          </h2>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[700px]">
            Get practical guidance on web design, custom development, and AI strategy tailored to your business, goals, and stage of growth.
          </p>
        </motion.div>
        
        <motion.button 
          className="bg-[#9B3139] content-stretch flex items-center justify-center px-[36px] py-[18px] md:px-[42px] md:py-[20px] relative rounded-[500px] shrink-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, backgroundColor: "#7A2730" }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-white text-[15px] md:text-[16px] tracking-[1px]">Book a Free Strategy Call</p>
        </motion.button>

        <motion.p
          className="max-w-[560px] text-[14px] md:text-[15px] leading-[1.7] text-[#777]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          No pressure. Clear recommendations.
        </motion.p>
        
      </div>
    </section>
  );
}

// Main HomePage Component
export default function HomePage() {
  return (
    <SiteShell>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <Header />
        </div>
        
        <main className="flex-1">
          <SectionHero />
          <SectionStrategicServices />
          <SectionAuthority />
          <SectionCaseStudies />
          <SectionSolutions />
          {/* <SectionAIAEO /> */}
          <SectionFinalCTA />
        </main>
        
        <SiteFooter />
    </SiteShell>
  );
}
