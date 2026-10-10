import { createSignal, For, onSettled } from "solid-js";

import { ThemeToggle } from "./ThemeToggle.tsx";

export const sections = ["Home", "About", "Projects", "Experience", "Contact"] as const;

const sectionId = (label: string) => label.toLowerCase();

// Floating glass bar
export function Nav() {
  const [active, setActive] = createSignal("home");

  onSettled(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -65% 0px" },
    );
    for (const label of sections) {
      const section = document.getElementById(sectionId(label));
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  });

  return (
    <header class="fixed inset-x-4 top-4 z-50">
      <nav
        aria-label="Main"
        class="mx-auto flex max-w-[1080px] items-center justify-between rounded-[28px] px-6.5 py-3.5 glass-nav"
      >
        <a
          href="#home"
          class="text-xl font-bold tracking-[-0.5px] text-primary transition-opacity hover:opacity-80"
        >
          SFS
        </a>
        <div class="flex items-center gap-6.5">
          <ul class="hidden items-center gap-6.5 md:flex">
            <For each={sections}>
              {(label) => (
                <li>
                  <a
                    href={`#${sectionId(label)}`}
                    aria-current={active() === sectionId(label) ? "location" : undefined}
                    class={[
                      "text-[14.5px] font-medium transition-colors hover:text-primary",
                      active() === sectionId(label) ? "text-primary" : "text-text",
                    ]}
                  >
                    {label}
                  </a>
                </li>
              )}
            </For>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
