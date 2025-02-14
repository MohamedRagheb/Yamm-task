import { lazy } from "react";

// Types
import { createBrowserRouter, RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    Component: lazy(() => import("../layouts/PrivateLayout")),
    children: [
      // { path: "*", Component: lazy(() => import("../pages/NotFound")) },
      {
        path: "/orders",
        Component: lazy(() => import("../pages/orders")),
      },
      {
        path: "/",
        Component: lazy(() => import("../pages/orders")),
        index: true,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
