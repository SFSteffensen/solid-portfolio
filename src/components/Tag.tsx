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
export const languages = {
  Rust: { color: "var(--lang-rust)" },
  C: { color: "var(--lang-c)" },
  "F#": { color: "var(--lang-fsharp)" },
  Python: { color: "var(--lang-python)", gradient: "var(--lang-python-gradient)" },
  TypeScript: { color: "var(--lang-typescript)" },
  Typst: { color: "var(--lang-typst)" },
  macOS: { color: "var(--lang-macos)" },
  Linux: { color: "var(--lang-linux)" },
} satisfies Record<string, { color: string; gradient?: string }>;

export type Language = keyof typeof languages;

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

export function LanguageTag(props: { name: Language; size?: "sm" | "md" }) {
  return (
    <Tag {...languages[props.name]} size={props.size}>
      {props.name}
    </Tag>
  );
}
