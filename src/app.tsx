import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";


export default function App() {

  return (
    <Router
      root={props => (
        <>
          <MetaProvider>
            <div class="Home">
              <Title>Sebastian Steffensen | Software Developer & Programmer</Title>
              <Meta charset="UTF-8" />
              <Link rel="canonical" href="https://sfsteffensen.dev" />
              <Meta name="description" content="Welcome to the portfolio of Sebastian Steffensen. Discover my projects, CV, and more. Get in touch for collaboration opportunities." />
              <Meta name="keywords" content="Sebastian Steffensen, portfolio, projects, CV, collaboration" />
              <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <script defer data-domain="sfsteffensen.dev" src="https://plausible.io/js/script.js"></script>
            </div>
          </MetaProvider>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
