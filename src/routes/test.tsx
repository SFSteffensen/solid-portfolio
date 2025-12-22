import { type Component, For } from "solid-js";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

const Test: Component = () => {
  const techStack = ["SolidJS", "TypeScript", "Tailwind", "Motion", "Vite"];
  
  const colors = [
    { name: "Primary", class: "bg-primary" },
    { name: "Red", class: "bg-red" },
    { name: "Green", class: "bg-green" },
    { name: "Blue", class: "bg-blue" },
    { name: "Yellow", class: "bg-yellow" },
    { name: "Mauve", class: "bg-mauve" },
    { name: "Pink", class: "bg-pink" },
    { name: "Teal", class: "bg-teal" },
    { name: "Sky", class: "bg-sky" },
    { name: "Peach", class: "bg-peach" },
    { name: "Lavender", class: "bg-lavender" },
  ];

  return (
    <div class="min-h-screen pt-32 pb-16">
      <div class="container mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div>
          <h1 class="text-6xl font-bold text-heading text-gradient mb-4">
            UI Test Kitchen 🧪
          </h1>
          <p class="text-xl text-subtext0">
            Testing all components in light and dark mode
          </p>
        </div>

        {/* Typography */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Typography</h2>
          <GlassCard>
            <h1 class="text-5xl font-bold text-heading mb-2">Heading 1 - 5xl</h1>
            <h2 class="text-4xl font-bold text-heading mb-2">Heading 2 - 4xl</h2>
            <h3 class="text-3xl font-semibold text-heading mb-2">Heading 3 - 3xl</h3>
            <h4 class="text-2xl font-semibold text-heading mb-2">Heading 4 - 2xl</h4>
            <h5 class="text-xl font-medium text-heading mb-2">Heading 5 - xl</h5>
            <h6 class="text-lg font-medium text-heading mb-4">Heading 6 - lg</h6>
            <p class="text-text mb-2">Body text - Regular weight with text-text color</p>
            <p class="text-subtext0 mb-2">Subtle text - subtext0 color for less emphasis</p>
            <p class="text-subtext1 mb-2">More subtle - subtext1 for even lighter text</p>
            <p class="font-mono text-sm text-overlay0">Monospace text - SF Mono for code</p>
          </GlassCard>
        </section>

        {/* Glass Cards */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Glass Cards</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard variant="default">
              <h3 class="text-xl font-bold text-heading mb-2">Default</h3>
              <p class="text-subtext0">Standard glass card with blur</p>
            </GlassCard>
            
            <GlassCard variant="hover">
              <h3 class="text-xl font-bold text-heading mb-2">Hover</h3>
              <p class="text-subtext0">Lifts on hover with shadow</p>
            </GlassCard>
            
            <GlassCard variant="accent">
              <h3 class="text-xl font-bold text-heading mb-2">Accent</h3>
              <p class="text-subtext0">Red accent background</p>
            </GlassCard>
            
            <GlassCard variant="nav">
              <h3 class="text-xl font-bold text-heading mb-2">Nav</h3>
              <p class="text-subtext0">Navigation bar styling</p>
            </GlassCard>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Buttons</h2>
          
          <GlassCard class="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 class="text-2xl font-semibold text-heading mb-4">Primary</h3>
              <div class="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" size="md" disabled>Disabled</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 class="text-2xl font-semibold text-heading mb-4">Secondary</h3>
              <div class="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
                <Button variant="secondary" size="md" disabled>Disabled</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div>
              <h3 class="text-2xl font-semibold text-heading mb-4">Ghost</h3>
              <div class="flex flex-wrap gap-4">
                <Button variant="ghost" size="sm">Small</Button>
                <Button variant="ghost" size="md">Medium</Button>
                <Button variant="ghost" size="lg">Large</Button>
                <Button variant="ghost" size="md" disabled>Disabled</Button>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Colors */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Catppuccin Colors</h2>
          <GlassCard>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <For each={colors}>
                {(color) => (
                  <div class="text-center">
                    <div class={`${color.class} h-20 rounded-xl mb-2 shadow-md`} />
                    <p class="text-sm text-text font-medium">{color.name}</p>
                  </div>
                )}
              </For>
            </div>
          </GlassCard>
        </section>

        {/* Tech Badges */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Tech Badges</h2>
          <GlassCard>
            <div class="flex flex-wrap gap-2">
              <For each={techStack}>
                {(tech) => (
                  <span class="px-4 py-2 bg-surface0 text-text rounded-lg text-sm font-medium hover:bg-surface1 transition-colors">
                    {tech}
                  </span>
                )}
              </For>
            </div>
          </GlassCard>
        </section>

        {/* Text Gradient */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Text Effects</h2>
          <GlassCard class="space-y-6">
            <div>
              <h3 class="text-5xl font-bold text-gradient mb-2">
                Gradient Text
              </h3>
              <p class="text-subtext0">Primary → Mauve gradient</p>
            </div>
            
            <div>
              <a href="#" class="text-2xl text-primary hover:opacity-80 transition-opacity">
                Link with Hover
              </a>
            </div>
          </GlassCard>
        </section>

        {/* Form Elements */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Form Elements</h2>
          <GlassCard class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-text mb-2">
                Text Input
              </label>
              <input
                type="text"
                placeholder="Enter something..."
                class="w-full px-4 py-3 bg-surface0 text-text rounded-xl border border-overlay0 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base outline-none transition-all"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-text mb-2">
                Textarea
              </label>
              <textarea
                placeholder="Enter a longer message..."
                rows="4"
                class="w-full px-4 py-3 bg-surface0 text-text rounded-xl border border-overlay0 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base outline-none transition-all resize-none"
              />
            </div>

            <div class="flex items-center gap-3">
              <input
                type="checkbox"
                id="test-checkbox"
                class="w-5 h-5 rounded border-overlay0 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base"
              />
              <label for="test-checkbox" class="text-text">
                Checkbox label
              </label>
            </div>
          </GlassCard>
        </section>

        {/* Loading States */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Loading States</h2>
          <GlassCard class="space-y-4">
            <div class="h-8 bg-surface0 rounded-lg animate-pulse" />
            <div class="h-8 bg-surface0 rounded-lg animate-pulse w-3/4" />
            <div class="h-8 bg-surface0 rounded-lg animate-pulse w-1/2" />
          </GlassCard>
        </section>

        {/* Social Icons Placeholder */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Social Links</h2>
          <GlassCard>
            <div class="flex gap-4">
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center bg-surface0 hover:bg-surface1 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span class="text-2xl">📧</span>
              </a>
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center bg-surface0 hover:bg-surface1 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span class="text-2xl">💼</span>
              </a>
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center bg-surface0 hover:bg-surface1 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span class="text-2xl">🐙</span>
              </a>
            </div>
          </GlassCard>
        </section>

        {/* Grid Layout Example */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Grid Layouts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <For each={[1, 2, 3, 4, 5, 6]}>
              {(num) => (
                <GlassCard variant="hover">
                  <div class="aspect-video bg-surface0 rounded-lg mb-4" />
                  <h3 class="text-xl font-bold text-heading mb-2">
                    Card {num}
                  </h3>
                  <p class="text-subtext0 mb-4">
                    This is a project card with an image placeholder above
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-blue/20 text-blue rounded-lg text-xs font-medium">
                      Tech 1
                    </span>
                    <span class="px-3 py-1 bg-green/20 text-green rounded-lg text-xs font-medium">
                      Tech 2
                    </span>
                  </div>
                </GlassCard>
              )}
            </For>
          </div>
        </section>

        {/* Surface Colors */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Surface Layers</h2>
          <div class="space-y-4">
            <div class="p-6 bg-base rounded-xl">
              <p class="font-medium">Base - Deepest background</p>
            </div>
            <div class="p-6 bg-mantle rounded-xl">
              <p class="font-medium">Mantle - Secondary background</p>
            </div>
            <div class="p-6 bg-crust rounded-xl">
              <p class="font-medium">Crust - Elevated background</p>
            </div>
            <div class="p-6 bg-surface0 rounded-xl">
              <p class="font-medium">Surface 0 - Primary surface</p>
            </div>
            <div class="p-6 bg-surface1 rounded-xl">
              <p class="font-medium">Surface 1 - Hover surface</p>
            </div>
            <div class="p-6 bg-surface2 rounded-xl">
              <p class="font-medium">Surface 2 - Active surface</p>
            </div>
          </div>
        </section>

        {/* Alert/Message Boxes */}
        <section>
          <h2 class="text-4xl font-bold text-heading mb-6">Messages</h2>
          <div class="space-y-4">
            <div class="p-4 bg-green/20 border border-green rounded-xl">
              <p class="text-green font-medium">✓ Success message</p>
            </div>
            <div class="p-4 bg-yellow/20 border border-yellow rounded-xl">
              <p class="text-yellow font-medium">⚠ Warning message</p>
            </div>
            <div class="p-4 bg-red/20 border border-red rounded-xl">
              <p class="text-red font-medium">✕ Error message</p>
            </div>
            <div class="p-4 bg-blue/20 border border-blue rounded-xl">
              <p class="text-blue font-medium">ℹ Info message</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Test;
