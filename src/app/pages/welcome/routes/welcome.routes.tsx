import { redirect, RouteObject } from "react-router";

import { WelcomeLayout } from "../Welcome.layout";
import { WelcomePage } from "../main/Welcome";
import { ResultsPage } from "../results/Results";

export const welcomeRoutes: RouteObject = {
  path: "/",
  element: <WelcomeLayout />,
  children: [
    {
      index: true,
      loader: () => redirect("/welcome"),
    },
    {
      path: "/welcome",
      element: <WelcomePage />,
    },
    {
      path: "/results",
      element: <ResultsPage />,
    },
  ],
};
