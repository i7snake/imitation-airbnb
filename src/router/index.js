import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("@/views/home"));
const All = React.lazy(() => import("@/views/all"));
const Detail = React.lazy(() => import("@/views/detail"));
const Demo = React.lazy(() => import("@/views/demo"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/all",
    element: <All />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
];

export default routes;
