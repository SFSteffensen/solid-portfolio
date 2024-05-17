import TypeWrite from "~/components/Typewrite";

export default function About() {

  return (
    <main class="text-center mx-auto min-h-screen h-screen mt-10 p-4 z-20">
      <div class="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <div
          class="space-y-10 px-0 md:px-10">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono whitespace-normal">
            <TypeWrite speed={30}>&lt; Projects: /&gt;</TypeWrite>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam quis ante eget leo vehicula aliquet.
            Nullam at nisl eget arcu aliquam lacinia.
            Nullam at nisl eget arcu aliquam lacinia.
            Nullam at nisl eget arcu aliquam lacinia.
            Nullam at nisl eget arcu aliquam lacinia.
            Nullam at nisl eget arcu aliquam lacinia.
          </p>

          <pre class="p-[10px] bg-light-200 dark:bg-dark-950 rounded-lg">
            <code>
              <p><span class="text-[#C3A0E1]">{"fn"}</span> <span class="text-[#8abeb7]">{"Main"}</span><span>()</span>{" {"}</p>
              <p><span class="text-[#de935f]">{"println!"}</span>(<span class="text-[#AFD090]">"I Write !Functioning code"</span>);</p>
              <p>{"}"}</p>
            </code>
          </pre>
        </div>
      </div>
    </main>
  );
}
