import { For } from "solid-js";

import { GlassCard } from "./GlassCard.tsx";
import { SectionHeading } from "./SectionHeading.tsx";
import { type Tech, TechTag } from "./Tag.tsx";
import { TerminalWindow } from "./TerminalWindow.tsx";

const portrait = "https://cdn.sfsteffensen.dev/Meirl.webp";

const facts: { key: string; value: string; color: string }[] = [
  { key: "name", value: "Sebastian F. Steffensen", color: "text-sky" },
  { key: "location", value: "Copenhagen 🇩🇰", color: "text-sky" },
  { key: "work", value: "Student SWE @LEGO", color: "text-yellow" },
];

const stack: Tech[] = ["Rust", "C", "F#", "Python", "TypeScript", "Typst", "macOS", "Linux"];

// Portrait in a terminal window
function Portrait() {
  return (
    <TerminalWindow title="sfsteffensen" class="w-full max-w-65">
      <img
        src={portrait}
        alt="Portrait of Sebastian Steffensen"
        width="260"
        height="240"
        loading="lazy"
        class="h-60 w-full object-cover object-top"
      />
      <div class="border-t border-overlay0/20 px-3.25 pt-2.5 pb-2 font-mono text-[11px] leading-[1.65]">
        <dl>
          <For each={facts}>
            {(fact) => (
              <div class="flex items-baseline gap-2">
                <dt class="min-w-16 text-overlay1">{fact.key}</dt>
                <dd class={fact.color}>{fact.value}</dd>
              </div>
            )}
          </For>
        </dl>
        <p class="mt-1.5 text-overlay0" aria-hidden="true">
          <span class="text-mauve">~</span>
          <span class="text-sky"> $ </span>
          <span class="animate-blink text-text">▋</span>
        </p>
      </div>
    </TerminalWindow>
  );
}

export function About() {
  return (
    <section id="about" class="container scroll-mt-24 pt-16 pb-24">
      <SectionHeading eyebrow="// get to know me" title="About" />

      <div class="grid items-center gap-6 md:grid-cols-[260px_1fr]">
        <Portrait />

        <div class="flex flex-col gap-4">
          <GlassCard class="space-y-3.5 p-7.5 leading-[1.7]">
            <p>
              I'm <strong class="font-semibold text-primary">Sebastian</strong> a developer and
              engineering student based near Copenhagen. I like understanding things from the ground
              up, which is how I ended up Rust for fun.
            </p>
            <p>
              On the front-end I'm all-in on trying out emerging frameworks and tooling, and I love
              building thoughtful UIs and components. Off-screen I'll rice just about every inch of
              my setup with Catppuccin and tinker with anything from CLI tools to home automation.
            </p>
            <p>
              These days I'm happily empiloyed at LEGO's Digital office. Outside work it's mainly
              fighting new programming concepts at university, and building my own projects in Rust.
            </p>
          </GlassCard>

          <GlassCard class="p-6.5">
            <h3 class="mb-3.5 font-mono text-[13px] tracking-[0.03em] text-subtext0">~/stack</h3>
            <ul class="flex flex-wrap gap-2">
              <For each={stack}>
                {(name) => (
                  <li>
                    <TechTag name={name} size="md" />
                  </li>
                )}
              </For>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
