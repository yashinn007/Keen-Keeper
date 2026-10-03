import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import TimelinePage from "../pages/TimelinePage/TimelinePage";
import StatusPage from "../pages/StatusPage/StatusPage";
import FriendDetailsPage from "../pages/FriendDetailsPage/FriendDetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
      {
        path: "/friendDetals/:friendId",
        Component: FriendDetailsPage,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
