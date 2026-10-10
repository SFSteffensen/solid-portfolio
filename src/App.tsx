import { For } from "solid-js";

import { Button } from "./components/Button.tsx";
import { GlassCard } from "./components/GlassCard.tsx";
import { Icon } from "./components/Icon.tsx";
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
    <main class="grid min-h-dvh place-items-center bg-scene py-24">
      <div class="container flex flex-col gap-8">
        <div>
          <p class="mb-4 font-mono text-[15px] text-subtext0">$ whoami</p>
          <h1 class="text-7xl leading-tight font-bold tracking-heading">
            Sebastian <span class="text-primary">Steffensen</span>
          </h1>
        </div>

        <div class="flex flex-wrap items-center gap-3.5">
          <Button icon="arrowDown">See my work</Button>
          <Button variant="secondary" icon="mail">
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
      </div>
    </main>
  );
}
