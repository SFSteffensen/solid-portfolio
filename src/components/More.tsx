import TypeWrite from "~/components/Typewrite";

export default function More() {
  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1 class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt; More: /&gt;</TypeWrite>
          </h1>
          <div class="overflow-x-hidden mt-10 p-4 bg-neutral md:rounded-box"> {/* Add padding and background */}
            <div class="max-w-full space-y-4 text-left">
              <p class="text-lg">
                For now, that's all about me, if you found this site interesting, or want to know more about me, feel free to get in touch with me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
