import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import { useDarkMode } from "../hooks/darkMode";

export default function Nav() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isHovered, setIsHovered] = createSignal(false);

  const active = (path: string) =>
    path == location.pathname
      ? "border-primary dark:border-primary"
      : "border-transparent hover:border-primary dark:hover:border-primary";

  return (
    <nav class={`bg-base-100 dark:bg-neutral z-10`}>
      <ul class="w-full flex items-center justify-between p-3 space-x-0 sm:space-x-7">
        <div class="flex space-x-2 sm:space-x-0">
          <li class={`border-b-2 ${active("/")} mx-auto sm:mx-7 text-primary`}>
            <a href="/">Home</a>
          </li>
          <li class={`border-b-2 ${active("/about")} mx-auto sm:mx-7 text-primary`}>
            <a href="/about">About</a>
          </li>
        </div>
        <li class="flex items-center">
          <div class={`w-14 h-8 px-0.5 py-1 rounded-[100px] shadow-inner-custom items-center inline-flex ${isDarkMode() ? 'bg-green-500 hover:bg-[#7DE078]' : 'bg-secondary'} transition-all duration-300`} onClick={toggleDarkMode}>
            <div class={`w-7 h-7 relative bg-white rounded-[6.25rem] transition-transform duration-300 transform ${isDarkMode() ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
