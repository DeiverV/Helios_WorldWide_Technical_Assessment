import { RouteObject } from "react-router";

import { WelcomeLayout } from "../Welcome.layout";
import { WelcomePage } from "../main/Welcome";

export const welcomeRoutes: RouteObject = {
  path: "/welcome",
  element: <WelcomeLayout />,
  children: [
    {
      index: true,
      element: <WelcomePage />,
    },
  ],
};
