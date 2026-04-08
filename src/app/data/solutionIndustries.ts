import { BriefcaseBusiness, HandHeart, House, Rocket, ShoppingBag, Store, type LucideIcon } from "lucide-react";

export type SolutionIndustryItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  to?: string;
};

export const defaultSolutionIndustries: SolutionIndustryItem[] = [
  {
    title: "Small Businesses",
    description:
      "Practical website and growth systems for owner-led teams that need results without operational overhead.",
    to: "/solutions/small-businesses",
    icon: Store,
    accent: "#9B3139",
  },
  {
    title: "Real Estate",
    description:
      "Listing-ready digital experiences, lead funnels, and CRM-connected workflows for brokers and teams.",
    to: "/solutions/real-estate",
    icon: House,
    accent: "#C9923D",
  },
  {
    title: "Nonprofits",
    description:
      "Mission-first websites focused on fundraising, volunteer recruitment, and measurable community impact.",
    to: "/solutions/nonprofits",
    icon: HandHeart,
    accent: "#C76438",
  },
  {
    title: "Professional Services",
    description:
      "Credibility-driven websites that support complex buying cycles for legal, financial, and consulting firms.",
    to: "/solutions/professional-services",
    icon: BriefcaseBusiness,
    accent: "#6B4A1E",
  },
  {
    title: "Startups & SaaS",
    description:
      "Conversion-focused experiences that support product positioning, activation, and scalable go-to-market growth.",
    to: "/solutions/startups-saas",
    icon: Rocket,
    accent: "#7C3D33",
  },
  {
    title: "Retail / Ecommerce",
    description:
      "Online storefronts, product-focused journeys, and conversion systems designed to increase revenue and repeat purchases.",
    to: "/solutions/retail-ecommerce",
    icon: ShoppingBag,
    accent: "#A62025",
  },
];
