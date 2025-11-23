# Tailwind v4 Custom Theme Reference

Quick reference for all custom colors and utilities defined in `src/styles/globals.css`.

## Color Palette

### Catppuccin Latte (Light Theme)

Use these with standard Tailwind utilities: `bg-latte-blue`, `text-latte-red`, `border-latte-mauve`, etc.

```
Accent Colors:
- latte-rosewater  #dc8a78
- latte-flamingo   #dd7878
- latte-pink       #ea76cb
- latte-mauve      #8839ef
- latte-red        #d20f39
- latte-maroon     #e64553
- latte-peach      #fe640b
- latte-yellow     #df8e1d
- latte-green      #40a02b
- latte-teal       #179299
- latte-sky        #04a5e5
- latte-sapphire   #209fb5
- latte-blue       #1e66f5  ← Primary accent
- latte-lavender   #7287fd

Neutral Colors:
- latte-text       #4c4f69  ← Main text
- latte-subtext1   #5c5f77
- latte-subtext0   #6c6f85  ← Muted text
- latte-overlay2   #7c7f93
- latte-overlay1   #8c8fa1
- latte-overlay0   #9ca0b0
- latte-surface2   #acb0be
- latte-surface1   #bcc0cc
- latte-surface0   #ccd0da  ← Surface
- latte-base       #eff1f5  ← Background
- latte-mantle     #e6e9ef
- latte-crust      #dce0e8
```

### Catppuccin Frappé (Dark Theme)

Use these with standard Tailwind utilities: `bg-frappe-blue`, `text-frappe-red`, `border-frappe-mauve`, etc.

```
Accent Colors:
- frappe-rosewater  #f2d5cf
- frappe-flamingo   #eebebe
- frappe-pink       #f4b8e4
- frappe-mauve      #ca9ee6
- frappe-red        #e78284
- frappe-maroon     #ea999c
- frappe-peach      #ef9f76
- frappe-yellow     #e5c890
- frappe-green      #a6d189
- frappe-teal       #81c8be
- frappe-sky        #99d1db
- frappe-sapphire   #85c1dc
- frappe-blue       #8caaee  ← Primary accent
- frappe-lavender   #babbf1

Neutral Colors:
- frappe-text       #c6d0f5  ← Main text
- frappe-subtext1   #b5bfe2
- frappe-subtext0   #a5adce  ← Muted text
- frappe-overlay2   #949cbb
- frappe-overlay1   #838ba7
- frappe-overlay0   #737994
- frappe-surface2   #626880
- frappe-surface1   #51576d
- frappe-surface0   #414559  ← Surface
- frappe-base       #303446  ← Background
- frappe-mantle     #292c3c
- frappe-crust      #232634
```

## Usage Examples

### Background Colors
```tsx
<div class="bg-latte-base dark:bg-frappe-base">
  Light theme: latte-base, Dark theme: frappe-base
</div>

<div class="bg-latte-blue text-white">
  Blue background with white text
</div>
```

### Text Colors
```tsx
<h1 class="text-latte-text dark:text-frappe-text">
  Theme-aware text color
</h1>

<p class="text-latte-subtext0 dark:text-frappe-subtext0">
  Muted text that changes with theme
</p>
```

### Border Colors
```tsx
<div class="border border-latte-overlay0 dark:border-frappe-overlay0">
  Theme-aware border
</div>
```

### Gradients
```tsx
<div class="bg-gradient-to-r from-latte-blue to-latte-mauve">
  Gradient background
</div>
```

## Custom Glass Classes

### Apple Liquid Glass Materials

```css
.glass-clear
/* Clear glass (25% opacity, 5 shadow layers) */
/* Universal - works in both themes */

.glass-light-apple
/* Light glass (clean white, 6 shadow layers) */
/* Best for light themes */

.glass-dark-apple
/* Dark glass (rich black, 7 shadow layers) */
/* Best for dark themes */
```

### Catppuccin Glass Variants

```css
.glass-latte
/* Latte glass - for light theme */
/* Background: rgba(239, 241, 245, 0.7) */

.glass-frappe
/* Frappé glass - for dark theme */
/* Background: rgba(48, 52, 70, 0.75) */

.glass-accent-latte
/* Accent gradient glass - light theme */
/* Gradient from blue to lavender */

.glass-accent-frappe
/* Accent gradient glass - dark theme */
/* Gradient from blue to lavender */
```

### Navigation Glass

```css
.glass-nav-latte
/* Navigation bar glass - light theme */
/* Higher blur (32px) for navbar */

.glass-nav-frappe
/* Navigation bar glass - dark theme */
/* Higher blur (32px) for navbar */
```

### Hover Effects

```css
.glass-hover-latte
/* Add to any element for lift on hover (light) */
/* Transitions: transform, background, shadow */

.glass-hover-frappe
/* Add to any element for lift on hover (dark) */
/* Transitions: transform, background, shadow */
```

## Glass Component Examples

### Basic Glass Card
```tsx
<div class="glass-latte dark:glass-frappe rounded-xl p-6">
  <h2>Card Title</h2>
  <p>Card content</p>
</div>
```

### Glass Card with Hover
```tsx
<div class="glass-latte dark:glass-frappe glass-hover-latte dark:glass-hover-frappe rounded-xl p-6">
  <h2>Hover me!</h2>
</div>
```

### Accent Glass Card
```tsx
<div class="glass-accent-latte dark:glass-accent-frappe rounded-xl p-6">
  <h2>Accent Card</h2>
</div>
```

### Navigation Bar
```tsx
<nav class="glass-nav-latte dark:glass-nav-frappe">
  <div class="container mx-auto px-4 py-4">
    Navigation content
  </div>
</nav>
```

## Custom Utility Classes

### Typography

```css
.text-primary
/* Primary text color (blue) - theme-aware */
/* Light: latte-blue, Dark: frappe-blue */

.text-accent
/* Accent color (same as primary) */

.text-muted
/* Muted/secondary text - theme-aware */
/* Light: latte-subtext0, Dark: frappe-subtext0 */

.text-heading
/* Heading styles: bold, tight line-height */

.text-mono
/* Monospace font (SF Mono) */

.text-gradient
/* Gradient text effect (blue → mauve) */
/* Theme-aware gradient colors */
```

### Typography Examples
```tsx
<h1 class="text-heading text-gradient">
  Gradient Heading
</h1>

<p class="text-muted">
  Muted secondary text
</p>

<code class="text-mono text-primary">
  const code = "example";
</code>
```

### Accessibility

```css
.skip-link
/* Skip to content link */
/* Hidden until focused */

.sr-only
/* Screen reader only */
/* Visually hidden, accessible to screen readers */
```

### Accessibility Examples
```tsx
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<span class="sr-only">Loading...</span>
```

## Font Families

Available through `@theme`:

```css
font-sans  /* SF Pro Display */
font-mono  /* SF Mono */
```

### Font Usage
```tsx
<div class="font-sans">
  Default UI text (SF Pro Display)
</div>

<code class="font-mono">
  Monospace code (SF Mono)
</code>
```

## Spacing Scale

```css
--spacing-xs:   0.25rem  (4px)
--spacing-sm:   0.5rem   (8px)
--spacing-md:   1rem     (16px)
--spacing-lg:   1.5rem   (24px)
--spacing-xl:   2rem     (32px)
--spacing-2xl:  3rem     (48px)
--spacing-3xl:  4rem     (64px)
```

## Border Radius Scale

```css
--radius-sm:   0.375rem  (6px)
--radius-md:   0.5rem    (8px)
--radius-lg:   0.75rem   (12px)
--radius-xl:   1rem      (16px)
--radius-2xl:  1.5rem    (24px)
```

## Shadow Scale

```css
--shadow-sm   /* Subtle shadow */
--shadow-md   /* Medium shadow */
--shadow-lg   /* Large shadow */
--shadow-xl   /* Extra large shadow */
```

## Complete Component Example

```tsx
import { cn } from "~/utils/cn";

function Card({ title, children, hover = false }) {
  return (
    <div
      class={cn(
        // Base glass styles
        "glass-latte dark:glass-frappe",
        // Shape
        "rounded-xl p-6",
        // Optional hover effect
        hover && "glass-hover-latte dark:glass-hover-frappe cursor-pointer",
        // Transition
        "transition-all duration-300"
      )}
    >
      <h2 class="text-2xl font-semibold text-primary mb-4">
        {title}
      </h2>
      <div class="text-muted">
        {children}
      </div>
    </div>
  );
}
```

## Responsive Breakpoints

Standard Tailwind breakpoints apply:

```
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px
```

### Responsive Example
```tsx
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="glass-latte dark:glass-frappe rounded-xl p-6">
    Card 1
  </div>
  <div class="glass-latte dark:glass-frappe rounded-xl p-6">
    Card 2
  </div>
  <div class="glass-latte dark:glass-frappe rounded-xl p-6">
    Card 3
  </div>
</div>
```

## Dark Mode Pattern

Always use the `dark:` variant for theme switching:

```tsx
<div class="bg-latte-base dark:bg-frappe-base text-latte-text dark:text-frappe-text">
  This content adapts to the theme automatically
</div>
```

The `dark` class is applied to `<html>` by the FOUC prevention script based on:
1. User's `localStorage` preference
2. System `prefers-color-scheme` setting

## Tips

1. **Always provide dark variants**: Use `dark:` for all color utilities
2. **Use semantic colors**: Prefer Latte/Frappé colors over generic colors
3. **Glass effects**: Stack glass classes with shape/spacing utilities
4. **Hover states**: Combine with `glass-hover-*` classes
5. **Accessibility**: Use `.sr-only` for screen reader text
6. **Reduced motion**: Styles automatically respect `prefers-reduced-motion`

---

**See also**:
- `src/styles/globals.css` - Full style definitions
- `SETUP.md` - Complete setup documentation
- [Catppuccin Palette](https://catppuccin.com/palette) - Official color reference
