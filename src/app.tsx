import { type Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-base to-mantle transition-colors duration-300">
      <div class="container mx-auto px-4 py-16">
        {/* Header */}
        <header class="text-center mb-16">
          <h1 class="text-6xl font-bold text-heading text-gradient mb-4">Portfolio v2</h1>
          <p class="text-xl text-subtext0">SolidJS + Vite + Tailwind v4 + Motion</p>
        </header>

        {/* Glass Cards Test */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Auto Glass Card */}
          <div class="glass glass-hover rounded-xl p-6">
            <h2 class="text-2xl font-semibold mb-2 text-primary">Auto Glass</h2>
            <p class="text-subtext0">
              Automatically switches between light and dark theme. Hover to see the lift animation.
              No need for dark: prefix!
            </p>
          </div>

          {/* Accent Glass Card */}
          <div class="glass-accent rounded-xl p-6">
            <h2 class="text-2xl font-semibold mb-2 text-primary">Accent Glass (Red)</h2>
            <p class="text-subtext0">
              Red accent variant with gradient background. Changes automatically with theme.
            </p>
          </div>

          {/* Navigation Glass */}
          <div class="glass-nav rounded-xl p-6">
            <h2 class="text-2xl font-semibold mb-2 text-primary">Navigation Glass</h2>
            <p class="text-subtext0">Extra blur for navbar. Perfect for sticky headers.</p>
          </div>
        </div>

        {/* Apple Glass Variants */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="glass-clear rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2 text-text">Clear Glass</h3>
            <p class="text-sm text-subtext0">Apple's clear glass material</p>
          </div>

          <div class="glass-light-apple rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2 text-text">Light Glass</h3>
            <p class="text-sm text-subtext0">Apple's light glass material</p>
          </div>

          <div class="glass-dark-apple rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2 text-frappe-text">Dark Glass</h3>
            <p class="text-sm text-frappe-subtext0">Apple's dark glass material</p>
          </div>
        </div>

        {/* Theme Colors Demo */}
        <div class="glass rounded-2xl p-8 mb-12">
          <h2 class="text-3xl font-bold mb-6 text-text">Semantic Color System</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center">
              <div class="w-16 h-16 rounded-lg bg-primary mx-auto mb-2"></div>
              <p class="text-sm text-subtext0">primary (red)</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 rounded-lg bg-base mx-auto mb-2 border border-overlay0"></div>
              <p class="text-sm text-subtext0">base</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 rounded-lg bg-surface0 mx-auto mb-2"></div>
              <p class="text-sm text-subtext0">surface0</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 rounded-lg bg-overlay0 mx-auto mb-2"></div>
              <p class="text-sm text-subtext0">overlay0</p>
            </div>
          </div>
          <div class="mt-6 space-y-2">
            <p class="text-text">
              <span class="font-semibold">text-text</span> - Main text color
            </p>
            <p class="text-subtext0">
              <span class="font-semibold">text-subtext0</span> - Muted/secondary text
            </p>
            <p class="text-subtext1">
              <span class="font-semibold">text-subtext1</span> - Even more muted
            </p>
          </div>
        </div>

        {/* Accent Colors */}
        <div class="glass rounded-2xl p-8 mb-12">
          <h2 class="text-3xl font-bold mb-6 text-text">Accent Colors (Auto-switching)</h2>
          <div class="grid grid-cols-3 md:grid-cols-5 gap-4">
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-red mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">red</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-green mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">green</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-blue mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">blue</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-yellow mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">yellow</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-mauve mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">mauve</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-pink mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">pink</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-teal mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">teal</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-sky mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">sky</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-peach mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">peach</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-lavender mx-auto mb-2"></div>
              <p class="text-xs text-subtext0">lavender</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div class="glass rounded-2xl p-8 text-center">
          <h2 class="text-3xl font-bold mb-4 text-text">Setup Complete! ✨</h2>
          <div class="space-y-2 text-left max-w-2xl mx-auto">
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">SolidJS v1.9.9</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">Tailwind CSS v4.1 with light-dark()</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">Motion v12.23.24</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">@solidjs/router v0.15.4</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">@solidjs/meta v0.29.4</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">Catppuccin Latte + Frappé (auto-switching)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">Apple Liquid Glass Materials</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">SF Pro Display + SF Mono fonts</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">ESLint + Prettier configured</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">Red primary accent color</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green">✓</span>
              <span class="text-text">No more dark: prefixes needed!</span>
            </div>
          </div>
          <p class="mt-6 text-subtext0 font-mono text-sm">
            Toggle dark mode in your system preferences to see automatic theme switching!
          </p>
          <p class="mt-2 text-subtext1 text-sm">
            (Or add the .dark class to &lt;html&gt; for manual control)
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
