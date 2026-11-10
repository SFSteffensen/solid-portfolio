import { About } from "./components/About.tsx";
import { Contact } from "./components/Contact.tsx";
import { Experience } from "./components/Experience.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { Nav } from "./components/Nav.tsx";
import { Projects } from "./components/Projects.tsx";

export default function App() {
  return (
    <div class="min-h-dvh bg-scene">
      <a
        href="#main"
        class="sr-only rounded-lg glass px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main" tabindex="-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
