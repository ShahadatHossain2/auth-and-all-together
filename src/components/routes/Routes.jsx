import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";

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
    ],
  },
]);
