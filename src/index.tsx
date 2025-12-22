/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Router } from "@solidjs/router";
import "solid-devtools";

import "./styles/globals.css";
import Layout from "./components/Layout";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./routes/index")),
  },
  {
    path: "/about",
    component: lazy(() => import("./routes/about")),
  },
  {
    path: "/projects",
    component: lazy(() => import("./routes/projects")),
  },
  {
    path: "/projects/:slug",
    component: lazy(() => import("./routes/projects/[slug]")),
  },
  {
    path: "/experience",
    component: lazy(() => import("./routes/experience")),
  },
  {
    path: "/contact",
    component: lazy(() => import("./routes/contact")),
  },
  {
    path: "/*404",
    component: lazy(() => import("./routes/[...404]")),
  },
  {
    path: "/test",
    component: lazy(() => import("./routes/test")),
  },
];

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(() => <Router root={Layout}>{routes}</Router>, root!);
