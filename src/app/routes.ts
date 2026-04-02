import { createBrowserRouter } from "react-router";
import HomePage from "@/app/pages/HomePage";
import UIKitPage from "@/app/pages/UIKitPage";
import SolutionsPage from "@/app/pages/SolutionsPage";
import SolutionDetailPage from "@/app/pages/SolutionDetailPage";
import ServicesPage from "@/app/pages/ServicesPage";
import ServiceDetailTemplatePage from "@/app/pages/ServiceDetailTemplatePage";
import ResourcesPage from "@/app/pages/ResourcesPage";
import CaseStudiesPage from "@/app/pages/CaseStudiesPage";
import CaseStudyDetailPage from "@/app/pages/CaseStudyDetailPage";
import AboutPage from "@/app/pages/AboutPage";
import ContactPage from "@/app/pages/ContactPage";
import NewHomePage from "@/app/pages/NewHomePage";
import NewHomePageV2 from "@/app/pages/NewHomePageV2";
import NewHomePageV3 from "@/app/pages/NewHomePageV3";
import NewHomePageV4 from "@/app/pages/NewHomePageV4";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/ui-kit",
    Component: UIKitPage,
  },
  {
    path: "/solutions",
    Component: SolutionsPage,
  },
  {
    path: "/solutions/:slug",
    Component: SolutionDetailPage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/services/:slug",
    Component: ServiceDetailTemplatePage,
  },
  {
    path: "/resources",
    Component: ResourcesPage,
  },
  {
    path: "/case-studies",
    Component: CaseStudiesPage,
  },
  {
    path: "/case-studies/:slug",
    Component: CaseStudyDetailPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/new-home",
    Component: NewHomePage,
  },
  {
    path: "/new-home-v2",
    Component: NewHomePageV2,
  },
  {
    path: "/new-home-v3",
    Component: NewHomePageV3,
  },
  {
    path: "/new-home-v4",
    Component: NewHomePageV4,
  },
]);
