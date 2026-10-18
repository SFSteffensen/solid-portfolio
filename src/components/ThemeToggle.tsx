import { theme, toggleTheme } from "../theme.ts";

const dark = () => theme() === "dark";

// iOS-style switch
export function ThemeToggle() {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark() ? "true" : "false"}
      aria-label="Dark mode"
      class={[
        "relative h-7 w-14 shrink-0 cursor-pointer rounded-[15px] transition-colors duration-300",
        dark() ? "bg-frappe-green" : "bg-[rgb(60_60_67/0.3)]",
      ]}
      onClick={(event) => toggleTheme(event.currentTarget)}
    >
      <span
        class={[
          "absolute top-0.75 left-0.75 size-5.5 rounded-full bg-white shadow-[0_2px_5px_rgb(0_0_0/0.3)] transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          { "translate-x-7": dark() },
        ]}
      />
    </button>
  );
}
