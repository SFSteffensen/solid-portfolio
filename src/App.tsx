import { For } from "solid-js";

import { Button } from "./components/Button.tsx";
import { GlassCard } from "./components/GlassCard.tsx";
import { Icon } from "./components/Icon.tsx";
import { Nav, sections } from "./components/Nav.tsx";
import { type Accent, Tag } from "./components/Tag.tsx";
import { TerminalWindow } from "./components/TerminalWindow.tsx";

const accents: Accent[] = [
  "red",
  "mauve",
  "blue",
  "sky",
  "teal",
  "green",
  "yellow",
  "peach",
  "pink",
  "lavender",
];

export default function App() {
  return (
    <div class="min-h-dvh bg-scene">
      <a
        href="#main"
        class="sr-only rounded-lg px-4 py-2 glass focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main" tabindex="-1">
        <section id="home" class="container flex scroll-mt-24 flex-col gap-8 pt-42 pb-20">
          <div>
            <p class="mb-4 font-mono text-[15px] text-subtext0">$ whoami</p>
            <h1 class="text-7xl leading-tight font-bold tracking-heading">
              Sebastian <span class="text-primary">Steffensen</span>
            </h1>
          </div>

          <div class="flex flex-wrap items-center gap-3.5">
            <Button icon="arrowDown" href="#projects">
              See my work
            </Button>
            <Button variant="secondary" icon="mail" href="#contact">
              Get in touch
            </Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="secondary" icon="external" href="https://github.com/SFSteffensen">
              More on GitHub
            </Button>
          </div>

          <div class="grid gap-6 md:grid-cols-[260px_1fr]">
            <TerminalWindow title="sfsteffensen">
              <div class="grid aspect-square place-items-center text-overlay1">
                <Icon name="terminal" size={48} />
              </div>
            </TerminalWindow>

            <GlassCard hover class="p-8">
              <h2 class="mb-2 text-xl font-semibold">Liquid glass</h2>
              <p class="text-subtext0">Every color here is beatiful.</p>
              <div class="mt-6 flex flex-wrap gap-2">
                <For each={accents}>{(accent) => <Tag color={accent}>{accent}</Tag>}</For>
              </div>
              <div class="mt-3 flex flex-wrap gap-2">
                <Tag color="peach" size="md">
                  Rust
                </Tag>
                <Tag color="sky" size="md">
                  SolidJS
                </Tag>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Placeholders until each section is built */}
        <For each={sections.slice(1)}>
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
