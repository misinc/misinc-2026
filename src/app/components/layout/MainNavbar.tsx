import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "react-router";
import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";

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
        <ChevronDown
          size={16}
          className="text-[#9B3139] transition-transform duration-200 group-hover:rotate-180"
        />
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const navigateTo = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#${id}`;
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    <>
      <div className="content-stretch h-[75px] relative shrink-0 w-full">
        <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center w-full h-full px-5 md:px-6 gap-[24px]">
          <div className="shrink-0 justify-self-start">
            <button onClick={() => navigateTo("hero")}>
              <Logo />
            </button>
          </div>
          <div className="content-stretch hidden lg:flex gap-[24px] xl:gap-[32px] items-center relative shrink-0 justify-center">
            <NavbarMenuItem
              text="Home"
              isActive={location.pathname === "/"}
              onClick={() => navigateTo("hero")}
            />
            {navbarDropdowns.map((group) => (
              <NavbarDropdownMenu
                key={group.label}
                text={group.label}
                items={group.items}
                onPrimaryClick={() => navigateTo(group.sectionId)}
              />
            ))}
            <NavbarMenuItem text="Case Studies" onClick={() => navigateTo("case-studies")} />
            <NavbarMenuItem text="About" onClick={() => navigateTo("authority")} />
            <NavbarMenuItem text="Contact" onClick={() => navigateTo("contact")} />
          </div>
          <div className="justify-self-end">
            <PrimaryCTAButton
              text="Book a Free Strategy Call"
              onClick={() => navigateTo("contact")}
            />
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between h-full px-5 md:px-6">
          <button onClick={() => navigateTo("hero")}>
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
                  onClick={() => navigateTo("hero")}
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
                            key={`${group.label}-${item}`}
                            onClick={() => navigateTo(group.sectionId)}
                            className="block w-full cursor-pointer rounded-md py-[9px] text-left text-[14px] text-[#6A4A4D] hover:bg-[#f9f9f9] px-[10px]"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  onClick={() => navigateTo("case-studies")}
                  className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                    Case Studies
                  </p>
                </button>
                <button
                  onClick={() => navigateTo("authority")}
                  className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                    About
                  </p>
                </button>
                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                >
                  <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                    Contact
                  </p>
                </button>

                <div className="mt-[24px]">
                  <button
                    onClick={() => navigateTo("contact")}
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

