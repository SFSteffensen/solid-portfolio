import TypeWrite from "~/components/Typewrite";

export default function More() {
  return (
    <main class="text-center mx-auto min-h-screen z-20 overflow-x-hidden">
      <div class="flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center">
        <div class="md:px-10 w-full">
          <h1 class="text-2xl pb-8 sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt; More: /&gt;</TypeWrite>
          </h1>
          <div class="overflow-x-hidden mt-10 p-4 bg-neutral md:rounded-box">
            <div class="max-w-full space-y-4 text-left">
              <p class="text-lg md:text-xl">
                That's all for now about me. If you found this site interesting or want to know more, feel free to get in touch. I'm always open to new opportunities and collaborations.
              </p>
              <p class="text-lg md:text-xl">
                You can reach me through my social media profiles:
              </p>
              <ul class="text-lg md:text-xl list-disc list-inside space-y-2">
                <li>
                  <a href="https://www.linkedin.com/in/sfsteffensen" target="_blank" rel="noopener noreferrer" class="text-[#0B66C2] hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/SFSteffensen" target="_blank" rel="noopener noreferrer" class="text-[#1F2329] dark:text-[#E6EDF3] hover:underline">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:Sebastian@sfsteffensen.dev" class="text-[#20A4F7] hover:underline">
                    Email
                  </a>
                </li>
              </ul>
              <p class="text-lg md:text-xl">
                Thank you for visiting my site. I look forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
