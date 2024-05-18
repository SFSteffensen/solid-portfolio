import TypeWrite from "~/components/Typewrite";
import ProjectCard from "~/components/ProjectCard";
import { createSignal } from "solid-js";
import inView from '~/hooks/inView';

export default function Projects() {
  const projects = [
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Task Tuner",
      description: "A Modern cross-platform Lectio Wrapper for danish students, built with Rust, SolidJS, TailwindCSS and DaisyUI.",
      badges: ["Rust", "Solid", "Tauri"],
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Project Two",
      description: "A brief description of Project Two.",
      badges: ["React", "Styled Components", "Firebase"],
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Project Three",
      description: "A brief description of Project Three.",
      badges: ["Next.js", "TailwindCSS", "Vercel"],
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Project Four",
      description: "A brief description of Project Four.",
      badges: ["Vue", "Vite", "Netlify"],
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Project Five",
      description: "A brief description of Project Five.",
      badges: ["Svelte", "Sapper", "AWS"],
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Project Six",
      description: "A brief description of Project Six.",
      badges: ["Angular", "NestJS", "Heroku"],
    },
  ];

  let projectsTextRef;
  const [setProjectsTextRef, isProjectsTextInView] = inView();

  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1
            ref={(el) => { projectsTextRef = el; setProjectsTextRef(el); }}
            class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal"
          >
            <TypeWrite speed={30}>&lt; Projects: /&gt;</TypeWrite>
          </h1>
          {isProjectsTextInView() && (
            <div class="overflow-x-hidden mt-10">
              <div class="carousel relative carousel-center max-w-full p-4 space-x-4 bg-neutral md:rounded-box">
                {projects.map((project) => (
                  <div class="carousel-item flex-none w-80">
                    <ProjectCard
                      image={project.image}
                      title={project.title}
                      secondaryBadge={project.secondaryBadge}
                      description={project.description}
                      badges={project.badges}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
