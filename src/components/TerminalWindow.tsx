import type { ParentProps } from "solid-js";

// macOS-style window frame: traffic lights and a mono title bar
export function TerminalWindow(props: ParentProps<{ title: string; class?: string }>) {
  return (
    <div
      class={[
        "overflow-hidden rounded-[14px] border border-overlay0/32 bg-base shadow-[0_20px_60px_light-dark(rgb(76_79_105/0.2),rgb(0_0_0/0.6))]",
        props.class,
      ]}
    >
      <div class="flex h-9 items-center gap-1.75 border-b border-overlay0/20 bg-mantle px-3.5">
        <span class="size-2.75 rounded-full bg-red" />
        <span class="size-2.75 rounded-full bg-yellow" />
        <span class="size-2.75 rounded-full bg-green" />
        {/* Offset by the traffic lights' width so the title centers on the window */}
        <span class="-ml-8.25 flex-1 text-center font-mono text-[11px] text-overlay0">
          {props.title}
        </span>
      </div>
      {props.children}
    </div>
  );
}
