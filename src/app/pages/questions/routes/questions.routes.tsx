import { RouteObject } from "react-router";

import { QuestionsLayout } from "../Questions.layout";
import { QuestionsPage } from "../main/Questions";

export const questionsRoutes: RouteObject = {
  path: "/questions",
  element: <QuestionsLayout />,
  children: [
    {
      index: true,
      element: <QuestionsPage />,
    },
  ],
};
