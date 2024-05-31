import TypeWrite from "~/components/Typewrite";

export default function AboutMe() {
  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1 class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt;About Me:/&gt;</TypeWrite>
          </h1>
          <div class="overflow-x-hidden mt-10 p-4 bg-neutral md:rounded-box">
            <div class="max-w-full space-y-4 text-left">
              <p class="text-lg md:text-xl">
                Hello, I'm Sebastian! I'm an introverted student developer from Denmark, graduating from ZBC Slagelse, from the Robot Technology line on June 26th, 2024. Although I may seem reserved initially, I am quite approachable and friendly once you get to know me.
              </p>
              <p class="text-lg md:text-xl">
                In my free time, I enjoy immersing myself in video games. I've been an avid gamer for years, and I love exploring new worlds and narratives through my favorite games.
              </p>
              <p class="text-lg md:text-xl">
                I have experience in several programming languages, including <span class='font-mono text-rust'>Rust</span>, <span class='font-mono text-typescript'>TypeScript</span>, <span class='font-mono gradient-py-text'>Python</span>, <span class='font-mono text-csharp'>C#</span>, and <span class='font-mono text-typst'>Typst</span>. Rust is my preferred language due to its emphasis on performance, safety, and concurrency. I appreciate writing code that runs efficiently and smoothly. Additionally, I favor using UNIX-like operating systems for their flexibility and customization, except when gaming.
              </p>
              <p class="text-lg md:text-xl">
                Outside of programming and gaming, I enjoy cooking and spending time with my friends and family. I am always eager to try new things and explore new places.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
