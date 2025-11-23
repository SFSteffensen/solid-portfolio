import { type Component, createSignal, For, onMount } from "solid-js";
import { A } from "@solidjs/router";
import ThemeToggle from "./ThemeToggle";
import { initTheme } from "../stores/theme";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const Nav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => setIsOpen(!isOpen());
  const closeMenu = () => setIsOpen(false);

  onMount(() => {
    initTheme();
  });

  return (
    <nav class="fixed top-4 left-4 right-4 z-50">
      <div class="container mx-auto">
        <div class="glass-nav rounded-2xl px-6 py-6">
          <div class="flex items-center justify-between">
            {/* Logo/Name */}
            <A
              href="/"
              class="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
              onClick={closeMenu}
            >
              SFS
            </A>

            {/* Desktop Navigation */}
            <div class="hidden md:flex items-center gap-8">
              <For each={navLinks}>
                {(link) => (
                  <A
                    href={link.href}
                    class="text-text hover:text-primary transition-colors font-medium"
                    activeClass="text-primary"
                    inactiveClass="text-text"
                    end={link.href === "/"}
                  >
                    {link.label}
                  </A>
                )}
              </For>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              class="md:hidden w-10 h-10 rounded-lg bg-surface0 hover:bg-surface1 transition-colors flex flex-col items-center justify-center gap-1.5"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen()}
            >
              <span
                class={`w-5 h-0.5 bg-text transition-all ${
                  isOpen() ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span class={`w-5 h-0.5 bg-text transition-all ${isOpen() ? "opacity-0" : ""}`} />
              <span
                class={`w-5 h-0.5 bg-text transition-all ${
                  isOpen() ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            class={`md:hidden transition-all duration-300 overflow-hidden ${
              isOpen() ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div class="flex flex-col gap-2 pt-4 border-t border-overlay0">
              <For each={navLinks}>
                {(link) => (
                  <A
                    href={link.href}
                    class="text-text hover:text-primary hover:bg-surface0 transition-all px-4 py-2 rounded-lg font-medium"
                    activeClass="text-primary bg-surface0"
                    inactiveClass="text-text"
                    onClick={closeMenu}
                    end={link.href === "/"}
                  >
                    {link.label}
                  </A>
                )}
              </For>

              {/* Mobile Theme Toggle */}
              <div class="px-4 py-2 flex items-center justify-between">
                <span class="text-text font-medium">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
