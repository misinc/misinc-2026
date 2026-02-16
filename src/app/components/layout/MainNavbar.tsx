import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";

type NavbarDropdownGroup = {
  label: string;
  href: string;
  items: { label: string; href: string }[];
};

const navbarDropdowns: NavbarDropdownGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Small Businesses", href: "/solutions/small-businesses" },
      { label: "Real Estate", href: "/solutions/real-estate" },
      { label: "Nonprofits", href: "/solutions/nonprofits" },
      { label: "Professional Services", href: "/solutions/professional-services" },
      { label: "Startups & SaaS", href: "/solutions/startups-saas" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Website Design", href: "/services/web-design" },
      { label: "Website Redesign", href: "/services/web-design" },
      { label: "Ecommerce Websites", href: "/services/square-website-design" },
      { label: "Conversion Optimization (CRO)", href: "/services/seo-strategy" },
      { label: "Webflow Website Development", href: "/services/webflow-development" },
      { label: "Webflow Migrations (WordPress -> Webflow)", href: "/services/webflow-development" },
      { label: "Webflow Performance Optimization", href: "/services/webflow-development" },
      { label: "Square Online Website Design", href: "/services/square-website-design" },
      { label: "Square Ecommerce Setup", href: "/services/square-website-design" },
      { label: "Shopify -> Square Migrations", href: "/services/square-website-design" },
      { label: "Web Applications", href: "/services/custom-applications" },
      { label: "SaaS MVP Development", href: "/services/custom-applications" },
      { label: "Internal Tools & Dashboards", href: "/services/custom-applications" },
      { label: "API & System Integrations", href: "/services/custom-applications" },
      { label: "AI Strategy for Small Businesses", href: "/services/ai-consulting" },
      { label: "AI Chat Implementation", href: "/services/ai-consulting" },
      { label: "Workflow Automation", href: "/services/ai-consulting" },
      { label: "Internal AI Systems", href: "/services/ai-consulting" },
      { label: "AI Search Optimization", href: "/services/aeo-services" },
      { label: "Structured Content Strategy", href: "/services/aeo-services" },
      { label: "Schema & Structured Data Implementation", href: "/services/aeo-services" },
      { label: "AI Visibility Audits", href: "/services/aeo-services" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Blog Listing", href: "/resources#blog" },
      { label: "Blog Post (Dynamic Template)", href: "/resources#blog" },
      { label: "Webflow vs WordPress Guide", href: "/resources#guides" },
      { label: "Website Redesign Checklist", href: "/resources#guides" },
      { label: "Cost of Web Design in Albuquerque", href: "/resources#guides" },
      { label: "AI for Small Businesses Guide", href: "/resources#guides" },
      { label: "Web Design FAQ", href: "/resources#faqs" },
      { label: "Webflow FAQ", href: "/resources#faqs" },
      { label: "AI & AEO FAQ", href: "/resources#faqs" },
    ],
  },
];

function Logo() {
  return (
    <motion.div
      className="h-[40px] md:h-[50px] relative shrink-0 flex items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img src={logo} alt="MIS, Inc." className="h-8 w-8 md:h-12 md:w-12" />
    </motion.div>
  );
}

function NavbarMenuItem({
  text,
  isActive,
  onClick,
}: {
  text: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[2px] h-[42px] items-center justify-center relative rounded-[500px] shrink-0 transition-opacity hover:opacity-60"
    >
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#9B3139] text-[14px] tracking-[1px]">
        {text}
      </p>
      {isActive && (
        <div className="absolute bg-[#9B3139] h-px left-0 top-[31.5px] w-full" />
      )}
    </button>
  );
}

function NavbarDropdownMenu({
  text,
  items,
  onNavigate,
}: {
  text: string;
  items: { label: string; href: string }[];
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="group relative">
      <button
        onClick={onNavigate}
        className="content-stretch flex h-[42px] items-center justify-center gap-[4px] rounded-[500px] transition-opacity hover:opacity-60"
        aria-haspopup="menu"
      >
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] text-[#9B3139] text-[14px] tracking-[1px]">
          {text}
        </p>
        <ChevronDown
          size={16}
          className="text-[#9B3139] transition-transform duration-200 group-hover:rotate-180"
        />
      </button>
      <div className="invisible absolute left-1/2 top-[48px] z-30 w-[320px] -translate-x-1/2 rounded-[16px] border border-[#eadfda] bg-white p-[10px] opacity-0 shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="max-h-[320px] overflow-y-auto">
        {items.map((item) => (
            <button
              key={`${text}-${item.label}`}
              type="button"
              onClick={() => onNavigate(item.href)}
              className="flex w-full cursor-pointer items-center rounded-[10px] px-[12px] py-[10px] text-left text-[13px] text-[#5E3A3D] transition-colors hover:bg-[#FDF7F2]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrimaryCTAButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="bg-[#9B3139] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[500px] shrink-0"
      whileHover={{ scale: 1.05, backgroundColor: "#7A2730" }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-white text-[14px] tracking-[1px] whitespace-nowrap">
        {text}
      </p>
    </motion.button>
  );
}

export function MainNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const navigateToPath = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    <>
      <div className="content-stretch h-[75px] relative shrink-0 w-full">
        <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center w-full h-full px-5 md:px-6 gap-[24px]">
          <div className="shrink-0 justify-self-start">
            <button onClick={() => navigateToPath("/")}>
              <Logo />
            </button>
          </div>
          <div className="content-stretch hidden lg:flex gap-[24px] xl:gap-[32px] items-center relative shrink-0 justify-center">
            <NavbarMenuItem
              text="Home"
              isActive={location.pathname === "/"}
              onClick={() => navigateToPath("/")}
            />
            {navbarDropdowns.map((group) => (
              <NavbarDropdownMenu
                key={group.label}
                text={group.label}
                items={group.items}
                onNavigate={navigateToPath}
              />
            ))}
            <NavbarMenuItem
              text="Case Studies"
              isActive={location.pathname === "/case-studies" || location.pathname.startsWith("/case-studies/")}
              onClick={() => navigateToPath("/case-studies")}
            />
            <NavbarMenuItem
              text="About"
              isActive={location.pathname === "/about"}
              onClick={() => navigateToPath("/about")}
            />
            <NavbarMenuItem
              text="Contact"
              isActive={location.pathname === "/contact"}
              onClick={() => navigateToPath("/contact")}
            />
          </div>
          <div className="justify-self-end">
            <PrimaryCTAButton
              text="Book a Free Strategy Call"
              onClick={() => navigateToPath("/contact#strategy")}
            />
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between h-full px-5 md:px-6">
          <button onClick={() => navigateToPath("/")}>
            <Logo />
          </button>
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#9B3139]"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-[20px] border-b border-[#f3f3f3]">
                <Logo />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-[#9B3139]"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="p-[24px] space-y-[8px]">
                <button
                  onClick={() => navigateToPath("/")}
                  className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                    Home
                  </p>
                </button>

                {navbarDropdowns.map((group) => (
                  <div key={group.label}>
                    <button
                      onClick={() =>
                        setExpandedMobileMenu((prev) =>
                          prev === group.label ? null : group.label,
                        )
                      }
                      className="w-full flex items-center justify-between text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                    >
                      <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                        {group.label}
                      </p>
                      <ChevronDown
                        size={18}
                        className={`text-[#9B3139] transition-transform ${expandedMobileMenu === group.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedMobileMenu === group.label && (
                      <div className="px-[24px] pb-[8px]">
                        {group.items.map((item) => (
                          <button
                            key={`${group.label}-${item.label}`}
                            onClick={() => navigateToPath(item.href)}
                            className="block w-full cursor-pointer rounded-md py-[9px] text-left text-[14px] text-[#6A4A4D] hover:bg-[#f9f9f9] px-[10px]"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  onClick={() => navigateToPath("/case-studies")}
                  className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                    Case Studies
                  </p>
                </button>
                <button
                  onClick={() => navigateToPath("/about")}
                  className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                    About
                  </p>
                </button>
                <button
                  onClick={() => navigateToPath("/contact")}
                  className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                    Contact
                  </p>
                </button>

                <div className="mt-[24px]">
                  <button
                    onClick={() => navigateToPath("/contact#strategy")}
                    className="w-full bg-[#9B3139] flex items-center justify-center px-[24px] py-[16px] rounded-[500px] hover:bg-[#7A2730] transition-colors"
                  >
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] text-white text-[15px] tracking-[1px]">
                      Book a Free Strategy Call
                    </p>
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
