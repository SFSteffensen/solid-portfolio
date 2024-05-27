import TypeWrite from "~/components/Typewrite";

export default function CV() {
  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1 class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt; CV: /&gt;</TypeWrite>
          </h1>
          <div class="overflow-x-hidden mt-10 p-4 bg-neutral md:rounded-box">
            <div class="max-w-full space-y-4 text-left">
              <p class="text-lg md:text-xl">
                {/*TODO: Write a short snippet about what experience */}
              </p>
              <div class="mt-8">
                <iframe
                  src="https://pub-2506486b91ea471b9d9751fb6d2d0261.r2.dev/docs%2FSebastianSteffensenCV.pdf"
                  width="100%"
                  height="600px"
                  class="rounded-md shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
