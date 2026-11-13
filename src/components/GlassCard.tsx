import type { ParentProps } from "solid-js";

// Frosted glass surface
export function GlassCard(props: ParentProps<{ class?: string; hover?: boolean }>) {
  return (
    <div class={["rounded-2xl glass", props.class, { "glass-hover": props.hover }]}>
      {props.children}
    </div>
  );
}
