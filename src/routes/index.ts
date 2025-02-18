import { lazy } from "react";

// Types
import { createBrowserRouter, RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    Component: lazy(() => import("../layouts/PrivateLayout")),
    children: [
      // { path: "*", Component: lazy(() => import("../pages/NotFound")) },

      {
        path: "/",
        Component: lazy(() => import("../pages/home")),
        index: true,
      },
      {
        path: "/orders",
        Component: lazy(() => import("../pages/orders")),
      },
      {
        path: "/orders/:id",
        Component: lazy(() => import("../pages/showOrder")),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
