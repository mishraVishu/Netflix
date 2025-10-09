import AuthListener from "./AuthListener";
import Body from "./Body";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
]);

function Layout() {
  return (
    <>
      <AuthListener />
      <Outlet />
    </>
  );
}

const AppRoutes = () => <RouterProvider router={routes} />;

export default AppRoutes;
