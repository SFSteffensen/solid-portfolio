import type { ParentProps } from "solid-js";
import { Show } from "solid-js";

export type Accent =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender";

export const accent = (name: Accent) => `var(--color-${name})`;

// Brand colors, defined in index.css
export const tech = {
  Rust: { color: "var(--tech-rust)" },
  C: { color: "var(--tech-c)" },
  "F#": { color: "var(--tech-fsharp)" },
  Python: { color: "var(--tech-python)", gradient: "var(--tech-python-gradient)" },
  TypeScript: { color: "var(--tech-typescript)" },
  Typst: { color: "var(--tech-typst)" },
  macOS: { color: "var(--tech-macos)" },
  Linux: { color: "var(--tech-linux)" },
  SolidJS: { color: "var(--tech-solid)" },
  Tauri: { color: "var(--tech-tauri)" },
  Svelte: { color: "var(--tech-svelte)" },
  Supabase: { color: "var(--tech-supabase)" },
  Vercel: { color: "var(--tech-vercel)" },
  "Machine Learning": { color: accent("mauve") },
} satisfies Record<string, { color: string; gradient?: string }>;

export type Tech = keyof typeof tech;

type TagProps = ParentProps<{
  color: string;
  gradient?: string;
  size?: "sm" | "md";
}>;

// Tinted pill for tech-stack labels
export function Tag(props: TagProps) {
  return (
    <span
      class={[
        "inline-block bg-(--tag)/16 font-semibold text-(--tag)",
        props.size === "md"
          ? "rounded-md px-3 py-1.5 text-[13px]"
          : "rounded-sm px-2.5 py-1 text-[11.5px]",
      ]}
      style={{ "--tag": props.color }}
    >
      <Show when={props.gradient} fallback={props.children}>
        {(gradient) => (
          <span class="bg-clip-text text-transparent" style={{ "background-image": gradient() }}>
            {props.children}
          </span>
        )}
      </Show>
    </span>
  );
}

export function TechTag(props: { name: Tech; size?: "sm" | "md" }) {
  return (
    <Tag {...tech[props.name]} size={props.size}>
      {props.name}
    </Tag>
  );
}
