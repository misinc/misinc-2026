import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import vintageLogo from "@/assets/1995-logo.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import "@/styles/new-home-v3.css";

type NavbarDropdownGroup = {
  label: string;
  sectionId: string;
  items: string[];
};

const navbarDropdowns: NavbarDropdownGroup[] = [
  {
    label: "Solutions",
    sectionId: "solutions",
    items: ["Small Businesses", "Real Estate", "Nonprofits", "Professional Services", "Startups & SaaS"],
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

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function NewHomeHeader({
  vintageMode,
  onToggleVintage,
}: {
  vintageMode: boolean;
  onToggleVintage: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="nh3-header-wrap">
      <div className="nh3-topbar">30 Years of Web Design (Since 1995) • Now with AI &amp; Custom App Development</div>
      <div className="nh3-header">
        <button className="nh3-logo" onClick={() => scrollToSection("hero")}>
          {vintageMode ? (
            <img src={vintageLogo} alt="MIS vintage logo" className="nh3-vintage-logo" />
          ) : (
            <img src={logo} alt="MIS, Inc." />
          )}
          <span>MIS, Inc.</span>
        </button>

        <nav className="nh3-nav desktop">
          <button onClick={() => scrollToSection("hero")}>Home</button>
          {navbarDropdowns.map((group) => (
            <div className="nh3-dd" key={group.label}>
              <button onClick={() => scrollToSection(group.sectionId)}>
                {group.label}
                <ChevronDown size={14} />
              </button>
              <div className="nh3-dd-menu">
                {group.items.map((item) => (
                  <button key={`${group.label}-${item}`} onClick={() => scrollToSection(group.sectionId)}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => scrollToSection("case-studies")}>Case Studies</button>
          <button onClick={() => scrollToSection("authority")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        <button className="nh3-cta desktop" onClick={() => scrollToSection("contact")}>
          Book a Free Strategy Call
        </button>
        <button className="nh3-vintage-toggle desktop" onClick={onToggleVintage}>
          {vintageMode ? "Back to 2026" : "Enter 1995 Mode"}
        </button>

        <button className="nh3-mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="nh3-nav-mobile">
          <button onClick={() => { scrollToSection("hero"); setOpen(false); }}>Home</button>
          {navbarDropdowns.map((group) => (
            <div key={`mobile-${group.label}`}>
              <button onClick={() => setMobileExpanded((v) => (v === group.label ? null : group.label))}>
                {group.label}
                <ChevronDown size={14} className={mobileExpanded === group.label ? "rot" : ""} />
              </button>
              {mobileExpanded === group.label && (
                <div className="nh3-mobile-submenu">
                  {group.items.map((item) => (
                    <button key={`${group.label}-${item}`} onClick={() => { scrollToSection(group.sectionId); setOpen(false); }}>
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={() => { scrollToSection("case-studies"); setOpen(false); }}>Case Studies</button>
          <button onClick={() => { scrollToSection("authority"); setOpen(false); }}>About</button>
          <button onClick={() => { scrollToSection("contact"); setOpen(false); }}>Contact</button>
          <button onClick={onToggleVintage}>{vintageMode ? "Back to 2026" : "Enter 1995 Mode"}</button>
        </nav>
      )}
    </header>
  );
}

export default function NewHomePageV3() {
  const [vintageMode, setVintageMode] = useState(false);

  return (
    <div className={`new-home-v3 ${vintageMode ? "nh3-vintage" : ""}`}>
      <NewHomeHeader
        vintageMode={vintageMode}
        onToggleVintage={() => setVintageMode((v) => !v)}
      />
      <main>
        <section id="hero" className="nh3-hero">
          <div className="nh3-hero-noise" />
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}>
            Albuquerque Web Design & AI Consulting That Drives Real Business Growth
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            Strategic web design using Webflow and Square, custom application development, and cutting-edge AI & AEO optimization services for growing businesses.
          </motion.p>
          <motion.div className="nh3-hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}>
            <button className="nh3-cta" onClick={() => scrollToSection("contact")}>Book a Free Strategy Call</button>
            <button className="nh3-ghost" onClick={() => scrollToSection("case-studies")}>View Case Studies</button>
          </motion.div>
        </section>

        <section id="services" className="nh3-section">
          <h2>Strategic Technology for Growing Businesses</h2>
          <div className="nh3-cards-3">
            {[
              ["Web Design That Converts", "Modern, conversion-optimized websites built on Webflow and Square Online that grow with your business and adapt to changing needs."],
              ["Custom Applications", "Tailored web applications and integrations designed to solve your specific business challenges and streamline operations."],
              ["AI & AEO Optimization", "Forward-thinking AI integration and Answer Engine Optimization to ensure your business is found by both search engines and AI assistants."],
            ].map(([title, body], i) => (
              <motion.article key={title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
                <h3>{title}</h3>
                <p>{body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="authority" className="nh3-section nh3-authority">
          <div>
            <h2>30 Years of Innovation. Built for What's Next.</h2>
            <p>Since 1995, we've helped businesses navigate every major shift in web technology — from the early web to mobile-first design to AI-powered optimization.</p>
          </div>
          <div className="nh3-metrics">
            {[
              ["1995", "Founded"],
              ["30+", "Years Experience"],
              ["500+", "Projects Delivered"],
              ["2024", "AI Integration"],
            ].map(([value, label], i) => (
              <motion.div key={label} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <p>{value}</p><span>{label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="local" className="nh3-section nh3-split">
          <div>
            <h2>Proudly Serving Albuquerque & New Mexico</h2>
            <p>Based in Albuquerque since 1995, we understand the unique needs of New Mexico businesses. From local startups to established nonprofits and professional organizations, we're your neighbors and your partners in growth.</p>
            <p>We combine the personal touch of a local agency with the technical expertise and forward-thinking approach needed to compete on a national stage.</p>
          </div>
          <motion.div className="nh3-image-wrap" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 26 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563302111-eab3c9c51f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1cXVlcnF1ZSUyMG5ldyUyMG1leGljbyUyMHNreWxpbmV8ZW58MXx8fHwxNzY5Mjc5NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Albuquerque New Mexico"
            />
          </motion.div>
        </section>

        <section id="case-studies" className="nh3-section">
          <h2>Recent Client Success Stories</h2>
          <div className="nh3-cards-3">
            {[
              ["Healthcare", "Regional Medical Practice", "300% increase in online appointment bookings within 6 months", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjkyNzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
              ["Nonprofit", "Community Foundation", "Streamlined donation process increased contributions by 85%", "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2OTI3OTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
              ["Professional Services", "Legal Association", "Custom member portal reduced admin time by 60%", "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMG9mZmljZXxlbnwxfHx8fDE3NjkyNzk2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
            ].map(([industry, title, outcome, src], i) => (
              <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <div className="nh3-image-wrap"><ImageWithFallback src={src} alt={title} /></div>
                <span>{industry}</span>
                <h3>{title}</h3>
                <p>{outcome}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="solutions" className="nh3-section">
          <h2>Solutions Tailored to Your Industry</h2>
          <div className="nh3-cards-2">
            {[
              ["Healthcare", "HIPAA-compliant websites, patient portals, and appointment systems designed for medical practices and health organizations."],
              ["Nonprofits", "Mission-driven websites with integrated donation systems, volunteer management, and storytelling features."],
              ["Professional Services", "Sophisticated web presence for legal, consulting, and financial services with client portals and custom tools."],
              ["Small Business", "E-commerce solutions, local SEO optimization, and conversion-focused websites that drive growth."],
            ].map(([title, body], i) => (
              <motion.article key={title} initial={{ opacity: 0, x: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}>
                <h3>{title}</h3>
                <p>{body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="ai-aeo" className="nh3-section nh3-split reverse">
          <motion.div className="nh3-image-wrap" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 26 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTI3OTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI and AEO Technology"
            />
          </motion.div>
          <div>
            <h2>Optimized for Search — and AI</h2>
            <p>The future of search is changing. AI assistants like ChatGPT, Perplexity, and Google's AI Overviews are reshaping how people find information online.</p>
            <p>Our Answer Engine Optimization (AEO) services ensure your business is discoverable not just in traditional search results, but in AI-generated answers. We combine proven SEO practices with forward-thinking AI optimization to future-proof your online presence.</p>
            <div className="nh3-mini-metrics">
              <div><strong>AEO</strong><span>Answer Engine Optimization</span></div>
              <div><strong>AI-Ready</strong><span>Future-Proof Strategy</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="nh3-section nh3-final">
          <h2>Ready to Build What's Next?</h2>
          <p>Let's discuss how strategic web design, custom development, and AI optimization can help your business grow. Schedule a free consultation — no pressure, just solutions.</p>
          <button className="nh3-cta">Book a Free Strategy Call</button>
          <div className="nh3-contact-row">
            <a href="mailto:contact@mis-inc.com">contact@mis-inc.com</a>
            <a href="tel:+15055551234">(505) 555-1234</a>
            <span>Albuquerque, NM</span>
          </div>
        </section>
      </main>
      <SiteFooter />
      {vintageMode && (
        <div className="nh3-vintage-dock" aria-label="1995 quick links">
          <button onClick={() => scrollToSection("hero")}>HOME</button>
          <button onClick={() => scrollToSection("case-studies")}>RECENT WORK</button>
          <button onClick={() => scrollToSection("services")}>RATES &amp; SERVICES</button>
          <button onClick={() => scrollToSection("contact")}>QUOTE REQUEST</button>
          <button onClick={() => scrollToSection("ai-aeo")}>LINKS</button>
        </div>
      )}
    </div>
  );
}
