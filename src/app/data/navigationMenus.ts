import type { NavLink } from "@/app/lib/contentApi";

export type NavbarDropdownGroup = {
  label: string;
  href: string;
  items: NavLink[];
};

export const navbarDropdowns: NavbarDropdownGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Small Businesses", href: "/solutions/small-businesses" },
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

export const footerSolutionsLinks = navbarDropdowns[0].items;

export const footerServiceLinks = navbarDropdowns[1].items.flatMap((group) =>
  group.items && group.items.length > 0 ? group.items : [{ label: group.label, href: group.href }],
);
