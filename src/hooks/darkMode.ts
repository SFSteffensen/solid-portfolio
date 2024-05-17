import { onCleanup, onMount, createSignal } from "solid-js";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = createSignal(false);

  const initializeDarkMode = () => {
    const root = document.documentElement;

    const applyDarkMode = (enabled: boolean) => {
      if (enabled) {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem('color-theme', 'dark');
        setIsDarkMode(true);
      } else {
        root.setAttribute("data-theme", "light");
        localStorage.setItem('color-theme', 'light');
        setIsDarkMode(false);
      }
    };

    const storedTheme = localStorage.getItem('color-theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme)) {
      applyDarkMode(true);
    } else {
      applyDarkMode(false);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeHandler = () => {
      applyDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", changeHandler);

    onCleanup(() => {
      mediaQuery.removeEventListener("change", changeHandler);
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      const root = document.documentElement;
      if (newMode) {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem('color-theme', 'dark');
      } else {
        root.setAttribute("data-theme", "light");
        localStorage.setItem('color-theme', 'light');
      }
      return newMode;
    });
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      initializeDarkMode();
    }
  });

  return { isDarkMode, toggleDarkMode };
}
