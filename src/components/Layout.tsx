import { type ParentComponent } from "solid-js";
import Nav from "./Nav";

const Layout: ParentComponent = (props) => {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" class="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main id="main-content" class="pt-24 min-h-screen" tabindex="-1">
        {props.children}
      </main>

      {/* Footer */}
      <footer class="glass border-t border-overlay0 py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="text-subtext0 text-sm">© {new Date().getFullYear()} Sebastian F. Steffensen</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
