import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Orders from "../orders/Orders";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
