import HackText from '~/components/Glitchtext';
import TypeWrite from '~/components/Typewrite';
import Projects from '~/components/Projects';

export default function Home() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main class="scroll-snap-container text-center mx-auto z-20 sm:px-6 lg:px-8">
      <section id="Hero" class=" min-h-screen scroll-snap-child pb-32 flex flex-col justify-end items-center">
        <div id="meirl" class="transform-gpu w-32 h-48 sm:w-48 sm:h-64 md:w-56 md:h-80 p-2 bg-base-300 bg-opacity-80 rounded-2xl flex-col justify-center items-center gap-1 inline-flex mb-10 md:mb-0">
          <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden mt-2 mb-4">
            <img class="object-cover object-center w-full h-full" src="/assets/Meirl.png" alt="Sebastian Steffensen" />
          </div>
          <HackText speed={300} class="text-center text-opacity-95 text-base sm:text-lg md:text-xl font-regular leading-normal" text="Sebastian" />
          <HackText speed={300} class="text-center text-opacity-95 text-base sm:text-lg md:text-xl font-regular leading-normal" text="Steffensen" />
        </div>
        <h2 class="text-5xl lg:text-6xl font-bold tracking-[2.5px] pb-2 pt-10">Hi, I'm Sebastian</h2>
        <div class="pt-5">
          <h1 class="text-4xl font-semibold pb-10">
            <span class="font-mono">
              <TypeWrite speed={30}>&lt; Welcome to my portfolio! /&gt;</TypeWrite>
            </span>
          </h1>
        </div>
        <div class="pt-5 space-x-5">
          <a href="#hero" class="inline-block">
            <button onClick={() => handleScrollTo('about')} class="btn btn-outline btn-primary uppercase tracking-widest rounded-full">About</button>
          </a>
          <a href="#projects" class="inline-block">
            <button onClick={() => handleScrollTo('projects')} class="btn btn-outline btn-primary uppercase tracking-widest rounded-full">Projects</button>
          </a>
          <a href="#more" class="inline-block">
            <button onClick={() => handleScrollTo('more')} class="btn btn-outline btn-primary uppercase tracking-widest rounded-full">More</button>
          </a>
        </div>
      </section>

      <section id="projects" class='min-h-screen'>
        <Projects /> {/* TODO: finish projects section */}
      </section>

      <section id="more">
        {/* Your more section content */}
      </section>
    </main>
  );
}
