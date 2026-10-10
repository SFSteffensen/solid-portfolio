import type { ParentProps } from "solid-js";

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

// Catppuccin-tinted pill for tech-stack labels
export function Tag(props: ParentProps<{ color: Accent; size?: "sm" | "md" }>) {
  return (
    <span
      class={[
        "bg-(--tag)/16 font-semibold text-(--tag)",
        props.size === "md"
          ? "rounded-md px-3 py-1.5 text-[13px]"
          : "rounded-sm px-2.5 py-1 text-[11.5px]",
      ]}
      style={{ "--tag": `var(--color-${props.color})` }}
    >
      {props.children}
    </span>
  );
}
