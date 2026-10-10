import { For } from "solid-js";

// Temporary token preview, replaced section by section in the next steps
const swatches = [
  "primary",
  "mauve",
  "blue",
  "sky",
  "teal",
  "green",
  "yellow",
  "peach",
  "pink",
  "lavender",
] as const;

export default function App() {
  return (
    <main class="grid min-h-dvh place-items-center bg-scene py-24">
      <div class="container flex flex-col gap-6">
        <p class="font-mono text-sm text-subtext0">$ whoami</p>
        <h1 class="text-7xl leading-tight font-bold tracking-heading">
          Sebastian <span class="text-primary">Steffensen</span>
        </h1>

        <div class="glass-hover rounded-2xl p-8 glass">
          <h2 class="mb-2 text-xl font-semibold">Liquid glass</h2>
          <p class="text-subtext0">Every color here is beatiful.</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <For each={swatches}>
              {(name) => (
                <li
                  class="rounded-sm px-2.5 py-1 font-mono text-xs font-semibold"
                  style={{
                    color: `var(--color-${name})`,
                    background: `color-mix(in srgb, var(--color-${name}) 16%, transparent)`,
                  }}
                >
                  {name}
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </main>
  );
}
