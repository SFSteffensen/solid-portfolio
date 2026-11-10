import { For } from "solid-js";

import { GlassCard } from "./GlassCard.tsx";
import { SectionHeading } from "./SectionHeading.tsx";

type Entry = {
  when: string;
  title: string;
  org: string;
  body: string;
};

// Newest first
const timeline: Entry[] = [
  {
    when: "2026 – now",
    title: "Student software engineer",
    org: "The LEGO Group, Digital Office",
    body: "Building internal software at LEGO's Digital office alongside my studies.",
  },
  {
    when: "2025 – 2028",
    title: "BSc, Software Technology",
    org: "Technical University of Denmark (DTU)",
    body: "Algorithms and data structures, discrete math, software engineering, computer systems, operating systems, functional programming and computer graphics, with a steady stream of side projects alongside.",
  },
  {
    when: "2024",
    title: "Contract developer",
    org: "Zealand Business College (ZBC)",
    body: "Led a three-person team building an ingredient and nutrition manager for the confectionery department, backed by PostgreSQL with an admin panel.",
  },
  {
    when: "2021 – 2024",
    title: "HTX, Robot Technology",
    org: "Zealand Business College (ZBC)",
    body: "Higher technical exam with Mathematics A and Programming B. My final project on neural networks became RustCNN.",
  },
];

export function Experience() {
  return (
    <section id="experience" class="container scroll-mt-24 pt-16 pb-24">
      <SectionHeading eyebrow="// the path so far" title="Experience" />

      <ol class="flex flex-col gap-3.5">
        <For each={timeline}>
          {(entry) => (
            <li>
              <GlassCard class="flex flex-col gap-2 px-6 py-5.5 sm:flex-row sm:items-start sm:gap-4.5">
                <p class="flex-none pt-0.5 font-mono text-[13px] text-subtext0 sm:w-23">
                  {entry.when}
                </p>
                <span
                  aria-hidden="true"
                  class="mt-1.75 hidden size-2.5 flex-none rounded-full bg-primary sm:block"
                />
                <div>
                  <h3 class="mb-0.75 text-[17px] font-semibold">{entry.title}</h3>
                  <p class="mb-2 text-[13.5px] font-medium text-primary">{entry.org}</p>
                  <p class="max-w-[68ch] text-[14px] leading-[1.55] text-subtext0">{entry.body}</p>
                </div>
              </GlassCard>
            </li>
          )}
        </For>
      </ol>
    </section>
  );
}
