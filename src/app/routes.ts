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
]);
