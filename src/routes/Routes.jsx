import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import TimelinePage from "../pages/TimelinePage/TimelinePage";
import StatusPage from "../pages/StatusPage/StatusPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/timeline",
        Component: TimelinePage,
      },
      {
        path: "/status",
        Component: StatusPage,
      },
    ],
  },
]);
