import TypeWrite from "~/components/Typewrite";
import ProjectCard from "~/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      image: "https://cdn.sfsteffensen.dev/RustCNN.webp",
      title: "RustCNN",
      description: "Developed a Rust-based CNN that integrates multiple activation functions and optimization techniques to enhance model performance and accuracy.",
      badges: ["Rust", "Machine Learning"],
    },
    {
      image: "https://cdn.sfsteffensen.dev/TaskTunerIcon.webp",
      title: "Task Tuner",
      description: "A modern cross-platform Lectio Wrapper for Danish students, built with Rust, SolidJS, TailwindCSS, and DaisyUI.",
      badges: ["Rust", "Solid", "Tauri"],
    },
    {
      image: "https://cdn.sfsteffensen.dev/icecreamer.webp",
      title: "ZBC Icecreamer",
      secondaryBadge: "In Progress",
      description: "Currently a public page for the confectionery line at ZBC Ringsted, aimed at streamlining the creation and management of new ice cream recipes.",
      badges: ["Svelte", "Supabase", "Vercel"],
    },
    {
      image: "https://cdn.sfsteffensen.dev/PassManIcon.webp",
      title: "PassMan - The Password Manager",
      description: "Developed a password manager using Tauri, Rust, Svelte, and Sveltekit, featuring a BCrypt hash-check system and a customizable password generator.",
      badges: ["Rust", "Tauri", "Svelte"],
    },
    {
      image: "https://cdn.sfsteffensen.dev/solidportfolio.webp",
      title: "Solid Portfolio",
      description: "A personal portfolio project built with Solid and DaisyUI. This project showcases my skills and experience, and I've enjoyed working with Solid and DaisyUI to create a polished and functional site.",
      badges: ["Solid", "TailwindCSS", "DaisyUI"],
    }
  ];

  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1 class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt;Projects:/&gt;</TypeWrite>
          </h1>
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
        </div>
      </div>
    </main>
  );
}
