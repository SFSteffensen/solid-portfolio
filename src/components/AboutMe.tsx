import TypeWrite from "~/components/Typewrite";

export default function AboutMe() {
  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1 class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt; About Me: /&gt;</TypeWrite>
          </h1>
          <div class="overflow-x-hidden mt-10 p-4 bg-neutral md:rounded-box">
            <div class="max-w-full space-y-4 text-left">
              <p class="text-lg md:text-xl">
                I'm Sebastian! I'm an introverted student developer from Denmark. I might come off as quiet or
                reserved at first, but don't worry - once you get to know me, I'm pretty friendly.
              </p>
              <p class="text-lg md:text-xl">
                When I'm not studying or working, you'll usually find me playing video games. I've been a fan for years and
                love exploring new worlds and stories through my favorite games.
              </p>
              <p class="text-lg md:text-xl">
                I have experience in several programming languages, including <span class='font-mono text-rust'>Rust</span>, <span
                  class='font-mono text-typescript'>TypeScript</span>, <span class='font-mono gradient-py-text'>Python</span>, and <span class='font-mono text-csharp'>C#</span>. However,
                Rust is definitely my favorite due to its emphasis on performance, safety, and concurrency. I'm a big fan of
                code that runs fast and smoothly. I also prefer using UNIX-like operating systems for everything
                except gaming. There's just something so satisfying about the flexibility and customization they offer.
              </p>
              <p class="text-lg md:text-xl">
                Outside of programming and gaming, I enjoy cooking and spending time with my friends and family. I'm always
                up for trying new things and exploring new places.
              </p>
              <p class="text-lg md:text-xl">
                {/*TODO: Write more about myself */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
