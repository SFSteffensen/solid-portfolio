# My Portfolio

My personal portfolio website, showcasing my work, skills, and experience.

## Stack

- [SolidJS 2.0](https://solidjs.com/) (release candidate), client-side only
- [Vite](https://vite.dev/) with [`@solidjs/vite-plugin`](https://github.com/solidjs/solid-vite-plugin)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript 7](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/) as package manager and runtime
- [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) static assets for hosting

## Getting Started

Install [Bun](https://bun.sh/):

```sh
curl -fsSL https://bun.sh/install | bash
```

Then clone the repository and install dependencies:

```sh
git clone https://github.com/SFSteffensen/solid-portfolio.git
cd solid-portfolio
bun install
```

## Scripts

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `bun dev`           | Start the dev server on `http://localhost:5173` |
| `bun run build`     | Type-check and build to `dist/`                 |
| `bun run preview`   | Preview the production build                    |
| `bun run typecheck` | Type-check only                                 |

## Deployment

The site is static: Cloudflare serves the Vite build in `dist/` straight from its edge, configured in `wrangler.jsonc`. [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) builds and deploys every push to `master`, and other branches get a preview URL.

`public/_headers` sets the caching rules: fingerprinted files in `/assets` are cached for a year, while `index.html` is revalidated on every visit so new deploys show up immediately.

To run the production setup locally:

```sh
bun run build
bunx wrangler dev
```
