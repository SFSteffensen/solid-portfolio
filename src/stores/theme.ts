import { createSignal, createEffect } from "solid-js";

export type ThemeMode = "light" | "dark";
export type ThemePreference = "system" | "light" | "dark";

const [preference, setPreference] = createSignal<ThemePreference>("system");
const [systemTheme, setSystemTheme] = createSignal<ThemeMode>("light");
const [currentTheme, setCurrentTheme] = createSignal<ThemeMode>("light");

/* Get system theme preference */
function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/* Apply theme to document with view transition */
function applyTheme(theme: ThemeMode, togglePosition?: { x: number; y: number }) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  const updateTheme = () => {
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      metaTheme?.setAttribute("content", "#303446");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      metaTheme?.setAttribute("content", "#eff1f5");
    }
    setCurrentTheme(theme);
  };

  // If we have View Transition API and a toggle position, use it
  if (togglePosition && "startViewTransition" in document) {
    // Store the click position for CSS to use
    const x = (togglePosition.x / window.innerWidth) * 100;
    const y = (togglePosition.y / window.innerHeight) * 100;
    root.style.setProperty("--toggle-x", `${x}%`);
    root.style.setProperty("--toggle-y", `${y}%`);

    (document as any).startViewTransition(() => {
      updateTheme();
    });
  } else {
    // Fallback for browsers without View Transition API
    updateTheme();
  }

  console.log("Applied theme:", theme, "Preference:", preference());
}

/* Resolve actual theme from preference */
function resolveTheme(pref: ThemePreference, system: ThemeMode): ThemeMode {
  if (pref === "system") return system;
  return pref;
}

/* Set theme preference */
export function setThemePreference(
  pref: ThemePreference,
  togglePosition?: { x: number; y: number },
) {
  setPreference(pref);
  localStorage.setItem("theme-preference", pref);

  const resolved = resolveTheme(pref, systemTheme());
  applyTheme(resolved, togglePosition);
}

/* Toggle theme - cycles between light/dark when manual, switches to manual from system */
export function toggleTheme(togglePosition?: { x: number; y: number }) {
  const current = preference();

  if (current === "system") {
    // Switch to manual mode - pick opposite of current system theme
    const next: ThemePreference = currentTheme() === "dark" ? "light" : "dark";
    setThemePreference(next, togglePosition);
  } else {
    // Already manual - toggle between light and dark
    const next: ThemePreference = current === "light" ? "dark" : "light";
    setThemePreference(next, togglePosition);
  }
}

/* Initialize theme system with smart system-tracking */
export function initTheme() {
  if (typeof window === "undefined") return;

  // Get stored preference
  const stored = localStorage.getItem("theme-preference") as ThemePreference | null;
  const pref = stored || "system";

  // Get system preference
  const system = getSystemTheme();
  setSystemTheme(system);
  setPreference(pref);

  // Apply initial theme
  const resolved = resolveTheme(pref, system);
  applyTheme(resolved);

  // Listen for system theme changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = (e: MediaQueryListEvent) => {
    const newSystem: ThemeMode = e.matches ? "dark" : "light";
    setSystemTheme(newSystem);

    // If user is on manual override, reset to system when OS theme changes
    if (preference() !== "system") {
      console.log("System theme changed, resetting to system preference");
      setThemePreference("system");
    } else {
      // Already on system, just apply the new system theme
      applyTheme(newSystem);
    }
  };

  mediaQuery.addEventListener("change", handleChange);
}

/* Export signals */
export { preference, systemTheme, currentTheme };

/* Get current theme state */
export function getThemeState() {
  return {
    preference: preference(),
    systemTheme: systemTheme(),
    currentTheme: currentTheme(),
    isDark: currentTheme() === "dark",
  };
}
