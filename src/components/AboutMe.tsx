import TypeWrite from "~/components/Typewrite";

export default function AboutMe() {
  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1 class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt; About Me: /&gt;</TypeWrite>
          </h1>
          <div class="overflow-x-hidden mt-10 p-4 bg-neutral md:rounded-box"> {/* Add padding and background */}
            <div class="max-w-full space-y-4 text-left"> {/* Add space between paragraphs */}
              <p class="text-lg md:text-xl">
                Hi, I'm Sebastian Steffensen, a passionate developer with a love for creating innovative solutions...
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
