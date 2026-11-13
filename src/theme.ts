import { createSignal, flush } from "solid-js";

export type Theme = "light" | "dark";

const storageKey = "theme";
const systemDark = matchMedia("(prefers-color-scheme: dark)");

function storedTheme(): Theme | null {
  const value = localStorage.getItem(storageKey);
  return value === "light" || value === "dark" ? value : null;
}

// index.html sets the initial class before first paint
const [theme, setTheme] = createSignal<Theme>(
  document.documentElement.classList.contains("dark") ? "dark" : "light",
);

function apply(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  document.documentElement.classList.toggle("light", next === "light");
  setTheme(next);
  // Commit the update now, so a view transition captures the new state
  flush();
}

// Follow the system theme until the visitor picks one
systemDark.addEventListener("change", (event) => {
  if (!storedTheme()) apply(event.matches ? "dark" : "light");
});

// Switch theme with a circle wiping out from `origin` (the toggle)
export function toggleTheme(origin?: Element) {
  const next = theme() === "dark" ? "light" : "dark";
  localStorage.setItem(storageKey, next);

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reducedMotion) {
    apply(next);
    return;
  }

  if (origin) {
    const rect = origin.getBoundingClientRect();
    const root = document.documentElement.style;
    root.setProperty("--toggle-x", `${rect.left + rect.width / 2}px`);
    root.setProperty("--toggle-y", `${rect.top + rect.height / 2}px`);
  }
  document.startViewTransition(() => apply(next));
}

export { theme };
