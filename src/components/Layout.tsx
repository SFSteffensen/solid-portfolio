import { type ParentComponent } from "solid-js";

const Layout: ParentComponent = (props) => {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" class="skip-link">
        Skip to main content
      </a>

      {/* Navigation - TODO: Replace with actual Nav component */}
      <nav class="glass-nav fixed top-0 left-0 right-0 z-50">
        <div class="container mx-auto px-4 py-4">
          <p class="text-text">Navigation placeholder</p>
        </div>
      </nav>

      {/* Main content */}
      <main id="main-content" class="pt-20 min-h-screen" tabindex="-1">
        {props.children}
      </main>

      {/* Footer */}
      <footer class="glass border-t border-overlay0 py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="text-subtext0 text-sm">
            © {new Date().getFullYear()} Sebastian F. Steffensen
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
