import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import { fetchNavigation, type NavLink, type NavMenuItem } from "@/app/lib/contentApi";

type NavbarDropdownGroup = {
  label: string;
  href: string;
  items: NavLink[];
};

type NavbarMenuEntry =
  | { type: "link"; label: string; href: string; position: number }
  | { type: "dropdown"; label: string; href: string; position: number; items: NavLink[] };

const navbarDropdowns: NavbarDropdownGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Small Businesses", href: "/solutions/small-businesses" },
      { label: "Real Estate (Add On IDX)", href: "/solutions/real-estate" },
      { label: "Healthcare / Research", href: "#" },
      { label: "Nonprofits", href: "/solutions/nonprofits" },
      { label: "Professional Services", href: "/solutions/professional-services" },
      { label: "Startups", href: "/solutions/startups-saas" },
      { label: "Retail / Ecommerce", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      {
        label: "Web Design & Development",
        href: "/services",
        items: [
          { label: "New Website Design", href: "/services/web-design" },
          { label: "Website Redesign", href: "/services/web-design" },
          { label: "Webflow Development", href: "/services/webflow-development" },
          { label: "Square Development", href: "/services/square-website-design" },
          { label: "Ecommerce Development", href: "#" },
          { label: "Platform Migrations", href: "#" },
        ],
      },
      {
        label: "Custom Applications",
        href: "/services/custom-applications",
        items: [
          { label: "Web Apps", href: "/services/custom-applications" },
          { label: "SaaS MVP Development", href: "/services/custom-applications" },
          { label: "Internal Tools", href: "/services/custom-applications" },
          { label: "Integrations", href: "/services/custom-applications" },
        ],
      },
      {
        label: "AI & Automation",
        href: "/services",
        items: [
          { label: "AI Consulting", href: "/services/ai-consulting" },
          { label: "AI Chat Implementation", href: "/services/ai-consulting" },
          { label: "Internal AI Systems", href: "/services/ai-consulting" },
          { label: "AEO Strategy", href: "/services/aeo-services" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Blog", href: "/resources#blog" },
      { label: "Guides", href: "/resources#guides" },
      { label: "FAQs", href: "/resources#faqs" },
    ],
  },
];

const fallbackMenu: NavbarMenuEntry[] = [
  { type: "link", label: "Home", href: "/", position: 10 },
  { type: "dropdown", label: "Solutions", href: "/solutions", position: 20, items: navbarDropdowns[0].items },
  { type: "dropdown", label: "Services", href: "/services", position: 30, items: navbarDropdowns[1].items },
  { type: "link", label: "Case Studies", href: "/case-studies", position: 40 },
  { type: "dropdown", label: "Resources", href: "/resources", position: 50, items: navbarDropdowns[2].items },
  {
    type: "dropdown",
    label: "About",
    href: "/about",
    position: 60,
    items: [
      { label: "30 Years of Innovation", href: "#" },
      { label: "Partnerships & Certifications", href: "#" },
      { label: "Technology We’ve Built", href: "#" },
    ],
  },
  {
    type: "dropdown",
    label: "Contact",
    href: "/contact",
    position: 70,
    items: [
      { label: "Free Strategy Call", href: "/contact#strategy" },
      { label: "Request a Proposal", href: "/contact#proposal" },
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
  href,
  items,
  onNavigate,
}: {
  text: string;
  href: string;
  items: NavLink[];
  onNavigate: (href: string) => void;
}) {
  const hasNestedItems = items.some((item) => item.items && item.items.length > 0);

  return (
    <div className="group relative">
      <button
        onClick={() => onNavigate(href)}
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
      <div
        className={`invisible absolute left-1/2 top-[48px] z-30 -translate-x-1/2 rounded-[16px] border border-[#eadfda] bg-white p-[10px] opacity-0 shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${hasNestedItems ? "w-[720px]" : "w-[320px]"}`}
      >
        <div className="max-h-[320px] overflow-y-auto">
          {hasNestedItems ? (
            <div className="grid grid-cols-1 gap-[12px] md:grid-cols-3">
              {items.map((item) => (
                <div
                  key={`${text}-${item.label}`}
                  className="rounded-[12px] border border-[#f1e4db] bg-[#fffaf6] p-[14px]"
                >
                  <button
                    type="button"
                    onClick={() => onNavigate(item.href)}
                    className="text-left text-[12px] font-medium uppercase tracking-[1px] text-[#9B3139] transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </button>
                  <div className="mt-[10px] space-y-[4px]">
                    {(item.items ?? []).map((child) => (
                      <button
                        key={`${text}-${item.label}-${child.label}`}
                        type="button"
                        onClick={() => onNavigate(child.href)}
                        className="flex w-full cursor-pointer items-center rounded-[10px] px-[10px] py-[8px] text-left text-[13px] text-[#5E3A3D] transition-colors hover:bg-white"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            items.map((item) => (
              <button
                key={`${text}-${item.label}`}
                type="button"
                onClick={() => onNavigate(item.href)}
                className="flex w-full cursor-pointer items-center rounded-[10px] px-[12px] py-[10px] text-left text-[13px] text-[#5E3A3D] transition-colors hover:bg-[#FDF7F2]"
              >
                {item.label}
              </button>
            ))
          )}
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
  const [dynamicMenu, setDynamicMenu] = useState<NavbarMenuEntry[]>(fallbackMenu);

  useEffect(() => {
    let isActive = true;

    const loadNavigation = async () => {
      const data = await fetchNavigation();
      if (!data || !isActive) {
        return;
      }

      const menu: NavbarMenuEntry[] = (data.menu ?? []).map((item: NavMenuItem) =>
        item.type === "dropdown"
          ? {
              type: "dropdown",
              label: item.label,
              href: item.href,
              position: item.position,
              items: item.items,
            }
          : {
              type: "link",
              label: item.label,
              href: item.href,
              position: item.position,
            },
      );

      if (menu.length > 0) {
        setDynamicMenu(menu);
      }
    };

    void loadNavigation();
    return () => {
      isActive = false;
    };
  }, []);

  const navigateToPath = (path: string) => {
    if (path === "#") {
      setIsMenuOpen(false);
      setExpandedMobileMenu(null);
      return;
    }
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
            {dynamicMenu.map((entry) =>
              entry.type === "dropdown" ? (
                <NavbarDropdownMenu
                  key={entry.label}
                  text={entry.label}
                  href={entry.href}
                  items={entry.items}
                  onNavigate={navigateToPath}
                />
              ) : (
                <NavbarMenuItem
                  key={entry.label}
                  text={entry.label}
                  isActive={location.pathname === entry.href || location.pathname.startsWith(`${entry.href}/`)}
                  onClick={() => navigateToPath(entry.href)}
                />
              ),
            )}
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
                {dynamicMenu.map((entry) =>
                  entry.type === "dropdown" ? (
                  <div key={entry.label}>
                    <button
                      onClick={() =>
                        setExpandedMobileMenu((prev) =>
                          prev === entry.label ? null : entry.label,
                        )
                      }
                      className="w-full flex items-center justify-between text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                    >
                      <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                        {entry.label}
                      </p>
                      <ChevronDown
                        size={18}
                        className={`text-[#9B3139] transition-transform ${expandedMobileMenu === entry.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedMobileMenu === entry.label && (
                      <div className="px-[24px] pb-[8px]">
                        {entry.items.map((item) => (
                          item.items && item.items.length > 0 ? (
                            <div
                              key={`${entry.label}-${item.label}`}
                              className="mb-[10px] rounded-md border border-[#f1e4db] bg-[#fffaf6] px-[10px] py-[10px]"
                            >
                              <button
                                onClick={() => navigateToPath(item.href)}
                                className="text-left text-[12px] font-medium uppercase tracking-[1px] text-[#9B3139]"
                              >
                                {item.label}
                              </button>
                              <div className="mt-[6px]">
                                {item.items.map((child) => (
                                  <button
                                    key={`${entry.label}-${item.label}-${child.label}`}
                                    onClick={() => navigateToPath(child.href)}
                                    className="block w-full cursor-pointer rounded-md px-[10px] py-[9px] text-left text-[14px] text-[#6A4A4D] hover:bg-[#f9f9f9]"
                                  >
                                    {child.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <button
                              key={`${entry.label}-${item.label}`}
                              onClick={() => navigateToPath(item.href)}
                              className="block w-full cursor-pointer rounded-md py-[9px] text-left text-[14px] text-[#6A4A4D] hover:bg-[#f9f9f9] px-[10px]"
                            >
                              {item.label}
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                  ) : (
                    <button
                      key={entry.label}
                      onClick={() => navigateToPath(entry.href)}
                      className="w-full text-left py-[16px] px-[16px] rounded-lg hover:bg-[#f9f9f9] transition-colors"
                    >
                      <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#9B3139] text-[16px] tracking-[0.5px]">
                        {entry.label}
                      </p>
                    </button>
                  ),
                )}

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
