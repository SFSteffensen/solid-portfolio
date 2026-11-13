import { render } from "@solidjs/web";

import App from "./App.tsx";
import { initSmoothScroll } from "./smoothScroll.ts";

import "./index.css";

render(() => <App />, document.getElementById("root")!);
initSmoothScroll();
