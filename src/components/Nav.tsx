import { createSignal } from "solid-js";
import { useDarkMode } from "../hooks/darkMode";

export default function Nav() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isHovered, setIsHovered] = createSignal(false);

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav class={`bg-base-100 dark:bg-neutral z-10 fixed top-0 w-full`}>
      <ul class="w-full flex items-center justify-between p-3 space-x-7">
        <div class="flex space-x-7">
          <li class="border-b-2 border-transparent hover:border-primary dark:hover:border-primary text-primary">
            <a href="#intro" onMouseDown={() => handleScrollTo('hero')}>Hero</a>
          </li>
          <li class="border-b-2 border-transparent hover:border-primary dark:hover:border-primary text-primary">
            <a href="#about" onMouseDown={() => handleScrollTo('about')}>About Me</a>
          </li>
          <li class="border-b-2 border-transparent hover:border-primary dark:hover:border-primary text-primary">
            <a href="#projects" onMouseDown={() => handleScrollTo('projects')}>Projects</a>
          </li>
          <li class="border-b-2 border-transparent hover:border-primary dark:hover:border-primary text-primary">
            <a href="#cv" onMouseDown={() => handleScrollTo('cv')}>CV</a>
          </li>
        </div>
        <li class="flex items-center">
          <div
            class={`w-14 h-8 px-0.5 py-1 rounded-[100px] shadow-inner-custom items-center inline-flex ${isDarkMode() ? 'bg-green-500 hover:bg-[#7DE078]' : 'bg-secondary'} transition-all duration-300`}
            onMouseDown={toggleDarkMode}
          >
            <div
              class={`w-7 h-7 relative bg-white rounded-[6.25rem] transition-transform duration-300 transform ${isDarkMode() ? 'translate-x-6' : 'translate-x-0'}`}
            ></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
