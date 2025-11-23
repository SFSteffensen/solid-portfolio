import { type Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-latte-base to-latte-mantle dark:from-frappe-base dark:to-frappe-mantle transition-colors duration-300">
      <div class="container mx-auto px-4 py-16">
        {/* Header */}
        <header class="text-center mb-16">
          <h1 class="text-6xl font-bold text-heading text-gradient mb-4">Portfolio v2</h1>
          <p class="text-xl text-muted">SolidJS + Vite + Tailwind v4 + Motion</p>
        </header>

        {/* Glass Cards Test */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Latte Glass Card */}
          <div class="glass-latte glass-hover-latte rounded-xl p-6">
            <h2 class="text-2xl font-semibold mb-2 text-primary">Latte Glass</h2>
            <p class="text-muted">
              Catppuccin Latte theme with glass morphism effect. Hover to see the lift animation.
            </p>
          </div>

          {/* Frappé Glass Card */}
          <div class="glass-frappe glass-hover-frappe rounded-xl p-6">
            <h2 class="text-2xl font-semibold mb-2 text-primary">Frappé Glass</h2>
            <p class="text-muted">
              Catppuccin Frappé theme with glass morphism effect. Hover to see the lift animation.
            </p>
          </div>

          {/* Accent Glass Card */}
          <div class="glass-accent-latte dark:glass-accent-frappe rounded-xl p-6">
            <h2 class="text-2xl font-semibold mb-2 text-primary">Accent Glass</h2>
            <p class="text-muted">Accent variant with gradient background. Changes with theme.</p>
          </div>
        </div>

        {/* Apple Glass Variants */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="glass-clear rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2">Clear Glass</h3>
            <p class="text-sm text-muted">Apple's clear glass material</p>
          </div>

          <div class="glass-light-apple rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2">Light Glass</h3>
            <p class="text-sm text-muted">Apple's light glass material</p>
          </div>

          <div class="glass-dark-apple rounded-xl p-6 text-frappe-text">
            <h3 class="text-lg font-semibold mb-2">Dark Glass</h3>
            <p class="text-sm">Apple's dark glass material</p>
          </div>
        </div>

        {/* Status */}
        <div class="glass-latte dark:glass-frappe rounded-2xl p-8 text-center">
          <h2 class="text-3xl font-bold mb-4">Setup Complete! ✨</h2>
          <div class="space-y-2 text-left max-w-2xl mx-auto">
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>SolidJS v1.9.9</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>Tailwind CSS v4.1</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>Motion v12.23.24</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>@solidjs/router v0.15.4</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>@solidjs/meta v0.29.4</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>Catppuccin Latte + Frappé themes</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>Apple Liquid Glass Materials</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>SF Pro Display + SF Mono fonts</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>ESLint + Prettier configured</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-latte-green dark:text-frappe-green">✓</span>
              <span>TypeScript strict mode</span>
            </div>
          </div>
          <p class="mt-6 text-muted font-mono text-sm">
            Toggle dark mode in your system preferences to test theme switching!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
