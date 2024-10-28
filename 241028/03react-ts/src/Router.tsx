import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Root from "./Root";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
