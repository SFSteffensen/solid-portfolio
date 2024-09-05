# My Portfolio

Welcome to my personal portfolio website! This project showcases my work, skills, and experience. It is built with SolidJS, TailwindCSS, and DaisyUI, and it includes features such as dark mode and smooth scrolling.

## Description

This portfolio website serves as a platform to display my projects, introduce myself, and provide contact information. It features a modern design with responsive layout, smooth scrolling animations, and theme toggling between light and dark modes.

## Getting Started

### Prerequisites

To run this project, you need to have [Bun](https://bun.sh/) installed. You can install Bun using the following command:

#### MacOS and Linux
```sh
curl -fsSL https://bun.sh/install | bash
```

#### Windows
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Cloning the Repository

Clone this repository to your local machine using:

```sh
git clone https://github.com/SFSteffensen/solid-portfolio.git
cd solid-portfolio
```

### Installing Dependencies

Install the project dependencies using Bun:

```sh
bun install
```

### Running the Development Server

Start the development server with:

```sh
bun dev
```

Your application should now be running on `http://localhost:3000`.

## Folder Structure

```plaintext
.
├── public
│   ├── assets
│   │   └── Meirl.png
│   └── fonts
│       ├── {SF Pro Display Fonts}
│       └── {SF Mono Fonts}
├── src
│   ├── components
│   │   ├── Glitchtext.tsx
│   │   ├── Nav.tsx
│   │   ├── Projects.tsx
│   │   └── Typewrite.tsx
│   ├── routes
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   └── 404.tsx
│   ├── hooks
│   │   └── darkMode.ts
│   ├── app.css
│   ├── app.tsx
│   ├── entry-client.tsx
│   ├── entry-server.tsx
│   └── global.d.ts
├── .github
│   └── workflows
│       └── docker-publish.yml
├── tailwind.config.cjs
├── README.md
├── .gitignore
├── app.config.ts
├── bun.lockb
├── package.json
├── postcss.config.cjs
├── tsconfig.json
├── Dockerfile
```

## Technologies Used

- **SolidJS**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **DaisyUI**: A plugin for TailwindCSS that provides a set of high-quality, accessible UI components.

## Acknowledgements

- [SolidJS](https://solidjs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
