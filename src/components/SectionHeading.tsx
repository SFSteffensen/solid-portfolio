import type { ParentProps } from "solid-js";
import { Show } from "solid-js";

export function SectionHeading(props: ParentProps<{ eyebrow: string; title: string }>) {
  return (
    <header class="mb-7">
      <p class="mb-2.5 font-mono text-[13px] tracking-[0.04em] text-primary">{props.eyebrow}</p>
      <h2 class="text-[40px] leading-[1.15] font-bold tracking-heading">{props.title}</h2>
      <Show when={props.children}>
        <p class="mt-3.5 max-w-155 text-[17px] leading-[1.6] text-subtext0">{props.children}</p>
      </Show>
    </header>
  );
}
