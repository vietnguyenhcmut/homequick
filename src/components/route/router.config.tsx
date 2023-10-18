import { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";

const RootRoute = lazy(() => import('./RootRoute'));
const OverviewPage = lazy(() => import('./overview/OverviewPage'));
const DevicesPage = lazy(() => import('./devices/DevicesPage'));

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute/>,
    children: [
      {
        path: "/overview",
        element: <OverviewPage />
      },
      {
        path: "/devices",
        element: <DevicesPage />
      }
    ]
  },
]);

export default rootRouter;