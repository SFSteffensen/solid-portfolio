# My Portfolio

My personal portfolio website, showcasing my work, skills, and experience.

## Stack

- [SolidJS 2.0](https://solidjs.com/) (release candidate), client-side only
- [Vite](https://vite.dev/) with [`@solidjs/vite-plugin`](https://github.com/solidjs/solid-vite-plugin)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript 7](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/) as package manager and runtime

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

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `bun dev`           | Start the dev server on `http://localhost:5173`  |
| `bun run build`     | Type-check and build to `dist/`                  |
| `bun run preview`   | Preview the production build                     |
| `bun run typecheck` | Type-check only                                  |

## Docker

The image builds the site and serves `dist/` with a small Bun static server (`serve.ts`) on port 3000:

```sh
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```
