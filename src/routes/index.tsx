import HackText from '~/components/Glitchtext';
import TypeWrite from '~/components/Typewrite';
import Projects from '~/components/Projects';
import AboutMe from '~/components/AboutMe';
import CV from '~/components/CV';
import More from '~/components/More';

export default function Home() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main class="scroll-snap-container text-center mx-auto z-20">
      <title>Sebastian Steffensen</title>
      <section id="intro" class="min-h-screen scroll-snap-child pb-32 flex flex-col justify-end items-center">
        <div id="meirl" class="transform-gpu w-32 h-48 sm:w-48 sm:h-64 md:w-56 md:h-80 p-2 bg-base-300 bg-opacity-80 rounded-2xl flex-col justify-center items-center gap-1 inline-flex mb-10 md:mb-0">
          <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden mt-2 mb-4">
            <img class="object-cover object-center w-full h-full" src="https://cdn.sfsteffensen.dev/Meirl.png" alt="Sebastian Steffensen" />
          </div>
          <HackText speed={300} class="text-center text-opacity-95 text-base sm:text-lg md:text-xl font-regular leading-normal" text="Sebastian" />
          <HackText speed={300} class="text-center text-opacity-95 text-base sm:text-lg md:text-xl font-regular leading-normal" text="Steffensen" />
        </div>
        <h2 class="text-5xl lg:text-6xl font-bold tracking-[2.5px] pb-2 pt-10">Hi, I'm Sebastian</h2>
        <div class="pt-5">
          <h1 class="text-4xl font-semibold pb-10">
            <span class="font-mono">
              <TypeWrite speed={30}>&lt;Welcome to my portfolio!/&gt;</TypeWrite>
            </span>
          </h1>
        </div>
        <div class="pt-5 space-x-5">
          <a href="#about" class="inline-block">
            <button onMouseDown={() => handleScrollTo('about')} class="btn btn-outline btn-primary uppercase tracking-widest rounded-full">About</button>
          </a>
          <a href="#projects" class="inline-block">
            <button onMouseDown={() => handleScrollTo('projects')} class="btn btn-outline btn-primary uppercase tracking-widest rounded-full">Projects</button>
          </a>
          <a href="#cv" class="inline-block">
            <button onMouseDown={() => handleScrollTo('cv')} class="btn btn-outline btn-primary uppercase tracking-widest rounded-full">CV</button>
          </a>
          <a href="#more" class="inline-block">
            <button onMouseDown={() => handleScrollTo('more')} class="btn btn-outline btn-primary uppercase tracking-widest rounded-full">More</button>
          </a>
        </div>
      </section>

      <section id="about" class="min-h-screen pt-14">
        <AboutMe />
      </section>

      <section id="projects" class='min-h-screen pt-14'>
        <Projects />
      </section>

      <section id="cv" class="min-h-screen pt-14">
        <CV />
      </section>

      <section id="more" class="min-h-screen pt-14">
        <More />
      </section>

      <footer class="footer items-center p-4 bg-neutral text-neutral-content">
        <aside class="items-center grid-flow-col">
          <p>Made With ♥︎ By Sebastian Steffensen</p>
        </aside>
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/SFSteffensen" target="_blank" rel="noopener noreferrer">
            <svg width="24.5" height="24" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" class="fill-current" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/sfsteffensen/" target="_blank" rel="noopener noreferrer">
            <svg height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" class="fill-current"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
          </a>
        </nav>
      </footer>
    </main>
  );
}
