import { lazy } from "react";

// React Router Dom
import { createHashRouter } from "react-router-dom";

// Types
import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    Component: lazy(() => import("../layouts/PrivateLayout")),
    children: [
      // { path: "*", Component: lazy(() => import("../pages/NotFound")) },
      { path: "/", Component: lazy(() => import("../pages")), index: true },
    ],
  },
];

export const router = createHashRouter(routes);
