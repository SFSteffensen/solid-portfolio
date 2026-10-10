import type { ParentProps } from "solid-js";
import { Show } from "solid-js";

import { Icon, type IconName } from "./Icon.tsx";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-(color:--color-base) hover:-translate-y-px hover:opacity-90 hover:shadow-[0_4px_14px_color-mix(in_srgb,var(--color-primary)_28%,transparent)]",
  secondary:
    "border border-text/12 bg-base/70 backdrop-blur-xl backdrop-saturate-180 hover:-translate-y-px hover:border-surface2 hover:bg-surface1",
  ghost: "hover:bg-surface0",
};

type ButtonProps = ParentProps<{
  variant?: Variant;
  icon?: IconName;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}>;

export function Button(props: ButtonProps) {
  const classes = () => [
    "inline-flex cursor-pointer items-center gap-2 rounded-xl px-5.5 py-3 text-[15px] font-medium transition-all duration-300 ease-smooth",
    variants[props.variant ?? "primary"],
  ];
  const content = (
    <>
      {props.children}
      <Show when={props.icon}>{(icon) => <Icon name={icon()} size={17} />}</Show>
    </>
  );

  return (
    <Show
      when={props.href}
      fallback={
        <button type={props.type ?? "button"} class={classes()} onClick={() => props.onClick?.()}>
          {content}
        </button>
      }
    >
      {(href) => (
        <a href={href()} class={classes()}>
          {content}
        </a>
      )}
    </Show>
  );
}
