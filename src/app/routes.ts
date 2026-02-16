import { createBrowserRouter } from "react-router";
import HomePage from "@/app/pages/HomePage";
import UIKitPage from "@/app/pages/UIKitPage";
import SolutionsPage from "@/app/pages/SolutionsPage";

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
]);
