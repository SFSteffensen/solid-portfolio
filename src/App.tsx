import { For } from "solid-js";

import { About } from "./components/About.tsx";
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

        {/* Placeholders until each section is built */}
        <For each={["Experience", "Contact"]}>
          {(label) => (
            <section id={label.toLowerCase()} class="container min-h-[70vh] scroll-mt-24 py-24">
              <h2 class="text-[40px] font-bold tracking-heading">{label}</h2>
            </section>
          )}
        </For>
      </main>
    </div>
  );
}
