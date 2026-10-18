import { For, Show } from "solid-js";

import { Button } from "./Button.tsx";
import { GlassCard } from "./GlassCard.tsx";
import { Icon } from "./Icon.tsx";
import { SectionHeading } from "./SectionHeading.tsx";
import { type Accent, accent, type Tech, TechTag } from "./Tag.tsx";

type Thumbnail =
  // Line art, painted in the accent through a mask
  | { art: string }
  // Screenshot or illustration filling the frame
  | { image: string }
  // Mono glyph on the tint, for projects without artwork
  | { glyph: string };

type Project = {
  name: string;
  description: string;
  tags: Tech[];
  thumbnail: Thumbnail;
  // Tints the thumbnail like a tag: a soft wash with the glyph or art in full color
  accent: Accent;
  repo?: string;
};

const cdn = "https://cdn.sfsteffensen.dev";

const projects: Project[] = [
  {
    name: "RustCNN",
    description:
      "A convolutional neural network in Rust, with multiple activation functions and optimization techniques.",
    tags: ["Rust", "Machine Learning"],
    thumbnail: { image: `${cdn}/RustCNN.webp` },
    accent: "peach",
    repo: "https://github.com/SFSteffensen/RustCNN",
  },
  {
    name: "Task Tuner",
    description: "A modern, cross-platform Lectio wrapper for Danish students.",
    tags: ["Rust", "SolidJS", "Tauri"],
    thumbnail: { glyph: "08:15" },
    accent: "mauve",
  },
  {
    name: "PassMan",
    description:
      "A password manager with bcrypt hash checking and a customizable password generator.",
    tags: ["Rust", "Tauri", "Svelte"],
    thumbnail: { glyph: "$2b$" },
    accent: "peach",
  },
  {
    name: "BF_interpreter",
    description: "A Brainfuck interpreter written in Rust.",
    tags: ["Rust"],
    thumbnail: { glyph: "><+-.,[]" },
    accent: "maroon",
    repo: "https://github.com/SFSteffensen/BF_interpreter",
  },
  {
    name: "logicz",
    description: "Gate-level logic circuit diagrams for Typst, written in a tiny netlist language.",
    tags: ["Typst"],
    // The full adder from the manual's front page, rendered with logicz itself
    thumbnail: { art: `${cdn}/logicz-full-adder.svg` },
    accent: "blue",
    repo: "https://github.com/SFSteffensen/logicz",
  },
  {
    name: "ZBC Icecreamer",
    description:
      "A recipe calculator for the confectionery line at ZBC Ringsted, for creating and managing new ice creams.",
    tags: ["Svelte", "Supabase", "Vercel"],
    thumbnail: { glyph: "−18°C" },
    accent: "pink",
  },
];

function Thumbnail(props: { project: Project }) {
  const image = () => {
    const thumbnail = props.project.thumbnail;
    return "image" in thumbnail ? thumbnail.image : undefined;
  };
  const art = () => {
    const thumbnail = props.project.thumbnail;
    return "art" in thumbnail ? thumbnail.art : undefined;
  };
  const glyph = () => {
    const thumbnail = props.project.thumbnail;
    return "glyph" in thumbnail ? thumbnail.glyph : undefined;
  };

  return (
    <div
      class="relative mb-3.5 grid aspect-[2/1] place-items-center overflow-hidden rounded-lg bg-(--accent)/14 text-(--accent)"
      style={{ "--accent": accent(props.project.accent) }}
    >
      <Show when={image()}>
        {(src) => (
          <img
            src={src()}
            alt=""
            loading="lazy"
            class="absolute inset-0 size-full object-cover object-top"
          />
        )}
      </Show>
      <Show when={art()}>
        {(src) => (
          // A mask so the white source art takes the accent color in both themes
          <div
            class="absolute inset-x-[14%] inset-y-[16%] bg-current mask-contain mask-center mask-no-repeat"
            style={{ "mask-image": `url(${src()})` }}
          />
        )}
      </Show>
      <Show when={glyph()}>
        {(text) => (
          <span aria-hidden="true" class="font-mono text-[32px] font-bold">
            {text()}
          </span>
        )}
      </Show>
    </div>
  );
}

function ProjectCard(props: { project: Project }) {
  return (
    // Only linked cards lift and press: a card that moves like a button should act like one
    <GlassCard
      hover={Boolean(props.project.repo)}
      class="group relative flex w-full flex-col p-4 has-[a:active]:scale-[0.98] has-[a:active]:duration-100 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-primary"
    >
      <Thumbnail project={props.project} />
      <h3 class="mb-1.5 text-[17px] font-semibold tracking-[-0.01em]">{props.project.name}</h3>
      <p class="mb-3 flex-1 text-[13.5px] leading-[1.55] text-subtext0">
        {props.project.description}
      </p>
      <div class="flex items-center gap-2">
        <ul class="flex flex-wrap gap-1.75">
          <For each={props.project.tags}>
            {(tag) => (
              <li>
                <TechTag name={tag} />
              </li>
            )}
          </For>
        </ul>
        <Show when={props.project.repo}>
          {(repo) => (
            <a
              href={repo()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.project.name} on GitHub`}
              // The ::after stretches the link over the whole card
              class="ml-auto text-subtext0 transition-colors group-hover:text-primary after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
            >
              <Icon name="github" size={16} />
            </a>
          )}
        </Show>
      </div>
    </GlassCard>
  );
}

export function Projects() {
  return (
    <section id="projects" class="container scroll-mt-24 py-24">
      <SectionHeading eyebrow="// things I’ve built" title="Projects">
        Systems experiments, desktop apps and the odd tool for school. The open-source ones link to
        GitHub.
      </SectionHeading>

      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <For each={projects}>
          {(project) => (
            <li class="flex">
              <ProjectCard project={project} />
            </li>
          )}
        </For>
      </ul>

      <div class="mt-7">
        <Button variant="secondary" icon="external" href="https://github.com/SFSteffensen">
          More on GitHub
        </Button>
      </div>
    </section>
  );
}
