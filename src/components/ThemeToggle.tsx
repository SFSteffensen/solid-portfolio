import { type Component, onMount, createEffect } from "solid-js";
import { animate } from "motion";
import { toggleTheme, currentTheme, preference } from "../stores/theme";

const ThemeToggle: Component = () => {
  let switchRef: HTMLButtonElement | undefined;
  let handleRef: HTMLDivElement | undefined;

  const handleToggle = (e: MouseEvent) => {
    // Get toggle position for ripple origin
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    toggleTheme({ x, y });
  };

  onMount(() => {
    if (!handleRef) return;

    // Animate the handle when theme changes
    createEffect(() => {
      if (!handleRef) return;

      const isDark = currentTheme() === "dark";

      animate(
        handleRef,
        { x: isDark ? 22 : 0 },
        {
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.8,
        },
      );
    });
  });

  // Get background color based on current theme mode and state
  const getBackgroundColor = () => {
    const isDark = currentTheme() === "dark";

    if (isDark) {
      // Dark mode - use Catppuccin Frappé green
      return "var(--color-frappe-green)";
    } else {
      // Light mode - OFF (gray)
      return "rgba(60, 60, 67, 0.3)";
    }
  };

  return (
    <button
      ref={switchRef}
      onClick={handleToggle}
      class="flex items-center justify-start p-[2px] w-16 h-7 rounded-[15px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base"
      style={{
        "background-color": getBackgroundColor(),
      }}
      aria-label={`Toggle theme (current: ${preference()})`}
      title={`Theme: ${preference()} (${currentTheme()})`}
    >
      <div
        ref={handleRef}
        class="w-[38px] h-6 rounded-[13px] bg-white shadow-md pointer-events-none"
      />
    </button>
  );
};

export default ThemeToggle;
