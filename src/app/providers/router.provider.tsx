import {
  RouterProvider as ReactRouterDomProvider,
  createBrowserRouter,
  redirect,
} from "react-router";

import { welcomeRoutes } from "@pages/welcome/routes/welcome.routes";
import { questionsRoutes } from "@pages/questions/routes/questions.routes";

export const RouterProvider = () => {
  const router = createBrowserRouter([
    {
      index: true,
      loader: () => redirect("/welcome"),
    },
    welcomeRoutes,
    questionsRoutes,
  ]);

  return <ReactRouterDomProvider router={router} />;
};
