import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";

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
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
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
              Albuquerque Web Design & AI Consulting That Drives Real Business Growth
            </motion.h1>
            <motion.p 
              className="leading-[1.6] relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] max-w-[700px] text-[#4A3F37]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Strategic web design using Webflow and Square, custom application development, and cutting-edge AI & AEO optimization services for growing businesses.
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
  const services = [
    {
      title: "Web Design That Converts",
      description: "Modern, conversion-optimized websites built on Webflow and Square Online that grow with your business and adapt to changing needs."
    },
    {
      title: "Custom Applications",
      description: "Tailored web applications and integrations designed to solve your specific business challenges and streamline operations."
    },
    {
      title: "AI & AEO Optimization",
      description: "Forward-thinking AI integration and Answer Engine Optimization to ensure your business is found by both search engines and AI assistants."
    }
  ];

  return (
    <section id="services" className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full bg-[#fafafa]">
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <motion.div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.2] text-[#151515] text-[32px] md:text-[40px] lg:text-[48px] w-full">
            Strategic Technology for Growing Businesses
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px] w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-[32px] md:p-[40px] flex flex-col gap-[16px] relative group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              <h3 className="font-['Manrope:Medium',sans-serif] font-medium text-[#151515] text-[22px] md:text-[24px] leading-[1.3]">
                {service.title}
              </h3>
              <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[15px] md:text-[16px] leading-[1.6]">
                {service.description}
              </p>
              <div className="bg-[#9B3139] h-[2px] shrink-0 w-0 group-hover:w-full transition-all duration-500 ease-out mt-[8px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Authority Section
function SectionAuthority() {
  const milestones = [
    { year: "1995", label: "Founded" },
    { year: "30+", label: "Years Experience" },
    { year: "500+", label: "Projects Delivered" },
    { year: "2024", label: "AI Integration" }
  ];

  return (
    <section id="authority" className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <motion.div
          className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.2] text-[#151515] text-[32px] md:text-[40px] lg:text-[48px] w-full max-w-[800px]">
            30 Years of Innovation. Built for What's Next.
          </h2>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] leading-[1.6] max-w-[700px]">
            Since 1995, we've helped businesses navigate every major shift in web technology — from the early web to mobile-first design to AI-powered optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[32px] w-full">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-[#f9f9f9] p-[32px] flex flex-col gap-[8px] items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="font-['Manrope:Light',sans-serif] font-light text-[#9B3139] text-[32px] md:text-[40px] leading-[1.1]">
                {milestone.year}
              </p>
              <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#151515] text-[13px] md:text-[14px] tracking-[1px] uppercase">
                {milestone.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Local Albuquerque Section
function SectionLocalAlbuquerque() {
  return (
    <section id="local" className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full bg-gradient-to-b from-[#FFAA1D]/5 to-transparent">
      <div className="content-stretch flex flex-col md:flex-row gap-[48px] md:gap-[64px] items-center relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <motion.div
          className="flex-1 content-stretch flex flex-col gap-[24px] items-start w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.2] text-[#151515] text-[32px] md:text-[40px] lg:text-[48px] w-full">
            Proudly Serving Albuquerque & New Mexico
          </h2>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] leading-[1.6]">
            Based in Albuquerque since 1995, we understand the unique needs of New Mexico businesses. From local startups to established nonprofits and professional organizations, we're your neighbors and your partners in growth.
          </p>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] leading-[1.6]">
            We combine the personal touch of a local agency with the technical expertise and forward-thinking approach needed to compete on a national stage.
          </p>
        </motion.div>
        
        <motion.div
          className="flex-1 w-full h-[300px] md:h-[400px] bg-[#f9f9f9] rounded-sm overflow-hidden relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1563302111-eab3c9c51f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1cXVlcnF1ZSUyMG5ldyUyMG1leGljbyUyMHNreWxpbmV8ZW58MXx8fHwxNzY5Mjc5NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Albuquerque New Mexico"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
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
      description: "HIPAA-compliant websites, patient portals, and appointment systems designed for medical practices and health organizations."
    },
    {
      title: "Nonprofits",
      description: "Mission-driven websites with integrated donation systems, volunteer management, and storytelling features."
    },
    {
      title: "Professional Services",
      description: "Sophisticated web presence for legal, consulting, and financial services with client portals and custom tools."
    },
    {
      title: "Small Business",
      description: "E-commerce solutions, local SEO optimization, and conversion-focused websites that drive growth."
    }
  ];

  return (
    <section id="solutions" className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px] w-full">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-[#f9f9f9] p-[32px] md:p-[40px] flex flex-col gap-[16px] relative group cursor-pointer border-l-[3px] border-transparent hover:border-[#9B3139] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ backgroundColor: "#ffffff", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
            >
              <h3 className="font-['Manrope:Medium',sans-serif] font-medium text-[#151515] text-[22px] md:text-[24px] leading-[1.3]">
                {industry.title}
              </h3>
              <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[15px] md:text-[16px] leading-[1.6]">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// AI & AEO Section
function SectionAIAEO() {
  return (
    <section id="ai-aeo" className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full bg-gradient-to-b from-[#4FA5AE]/5 to-transparent">
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
            The future of search is changing. AI assistants like ChatGPT, Perplexity, and Google's AI Overviews are reshaping how people find information online.
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
    </section>
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
          <h2 className="font-['Manrope:Light',sans-serif] font-light leading-[1.1] text-[#151515] text-[36px] md:text-[48px] lg:text-[56px] w-full">
            Ready to Build What's Next?
          </h2>
          <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[700px]">
            Let's discuss how strategic web design, custom development, and AI optimization can help your business grow. Schedule a free consultation — no pressure, just solutions.
          </p>
        </motion.div>
        
        <motion.button 
          className="bg-[#9B3139] content-stretch flex items-center justify-center px-[32px] py-[18px] relative rounded-[500px] shrink-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, backgroundColor: "#7A2730" }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-white text-[15px] md:text-[16px] tracking-[1px]">Book a Free Strategy Call</p>
        </motion.button>
        
        <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[24px] items-center text-[#777] text-[14px]">
          <a href="mailto:contact@mis-inc.com" className="font-['Manrope:Regular',sans-serif] hover:text-[#9B3139] transition-colors">contact@mis-inc.com</a>
          <span className="hidden sm:inline">•</span>
          <a href="tel:+15055551234" className="font-['Manrope:Regular',sans-serif] hover:text-[#9B3139] transition-colors">(505) 555-1234</a>
          <span className="hidden sm:inline">•</span>
          <p className="font-['Manrope:Regular',sans-serif]">Albuquerque, NM</p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="content-stretch flex flex-col items-center py-[48px] relative shrink-0 w-full border-t border-[#f3f3f3]">
      <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[32px] items-center justify-between relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <div className="flex items-center gap-[12px]">
          <Logo />
        </div>
        <p className="font-['Manrope:Regular',sans-serif] text-[#777] text-[13px] text-center md:text-left">
          © 2025 MIS, Inc. All rights reserved. • Albuquerque, New Mexico
        </p>
      </div>
    </footer>
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
          <SectionLocalAlbuquerque />
          <SectionCaseStudies />
          <SectionSolutions />
          <SectionAIAEO />
          <SectionFinalCTA />
        </main>
        
        <Footer />
    </SiteShell>
  );
}
