import { createBrowserRouter } from "react-router";
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
import {
  MainHomePageApricotLight,
  NewHomePageV5AdobeDusk,
  NewHomePageV6RioGrande,
  NewHomePageV7SageHorizon,
  NewHomePageV8TurquoiseClay,
  NewHomePageV9SandstoneDawn,
  NewHomePageV10LogoEmber,
  NewHomePageV11LogoSignal,
  NewHomePageV12LogoHorizon,
  NewHomePageV13LogoSolar,
  NewHomePageV14LogoMarigold,
  NewHomePageV15LogoSunburst,
  NewHomePageV16LogoMesaGold,
  NewHomePageV17LogoApricotLight,
  NewHomePageV18LogoCreamsicleLight,
  NewHomePageV19LogoHoneyLight,
} from "@/app/pages/HomeGradientVariants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainHomePageApricotLight,
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
  {
    path: "/new-home-v5-adobe-dusk",
    Component: NewHomePageV5AdobeDusk,
  },
  {
    path: "/new-home-v6-rio-grande",
    Component: NewHomePageV6RioGrande,
  },
  {
    path: "/new-home-v7-sage-horizon",
    Component: NewHomePageV7SageHorizon,
  },
  {
    path: "/new-home-v8-turquoise-clay",
    Component: NewHomePageV8TurquoiseClay,
  },
  {
    path: "/new-home-v9-sandstone-dawn",
    Component: NewHomePageV9SandstoneDawn,
  },
  {
    path: "/new-home-v10-logo-ember",
    Component: NewHomePageV10LogoEmber,
  },
  {
    path: "/new-home-v11-logo-signal",
    Component: NewHomePageV11LogoSignal,
  },
  {
    path: "/new-home-v12-logo-horizon",
    Component: NewHomePageV12LogoHorizon,
  },
  {
    path: "/new-home-v13-logo-solar",
    Component: NewHomePageV13LogoSolar,
  },
  {
    path: "/new-home-v14-logo-marigold",
    Component: NewHomePageV14LogoMarigold,
  },
  {
    path: "/new-home-v15-logo-sunburst",
    Component: NewHomePageV15LogoSunburst,
  },
  {
    path: "/new-home-v16-logo-mesa-gold",
    Component: NewHomePageV16LogoMesaGold,
  },
  {
    path: "/new-home-v17-logo-apricot-light",
    Component: NewHomePageV17LogoApricotLight,
  },
  {
    path: "/new-home-v18-logo-creamsicle-light",
    Component: NewHomePageV18LogoCreamsicleLight,
  },
  {
    path: "/new-home-v19-logo-honey-light",
    Component: NewHomePageV19LogoHoneyLight,
  },
]);
