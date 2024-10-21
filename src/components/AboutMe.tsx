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
                Greetings! I'm Sebastian, a 19-year-old graduate from ZBC Slagelse. I am approachable and amiable, always eager to engage and collaborate.
              </p>
              <p class="text-lg md:text-xl">
                When I'm not immersed in learning, I dive headfirst into the captivating realm of video games. With years of avid gaming under my belt, I relish the opportunity to explore new worlds and narratives through my favorite titles.
              </p>
              <p class="text-lg md:text-xl">
                Proficient in a variety of programming languages, including <span class='font-mono text-rust'>Rust</span>, <span class='font-mono text-typescript'>TypeScript</span>, <span class='font-mono gradient-py-text'>Python</span>, <span class='font-mono text-csharp'>C#</span>, and <span class='font-mono text-typst'>Typst</span>, I excel particularly in Rust. Its focus on performance, safety, and concurrency aligns seamlessly with my coding philosophy. I take pride in crafting efficient and seamless code that delivers optimal performance. Moreover, I gravitate towards UNIX-like operating systems for their unparalleled flexibility and customization, except when I'm engrossed in gaming.
              </p>
              <p class="text-lg md:text-xl">
                Beyond the realms of programming and gaming, you'll find me honing my culinary skills or cherishing moments with loved ones. I possess an insatiable curiosity, always eager to venture into uncharted territories and embrace new experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
