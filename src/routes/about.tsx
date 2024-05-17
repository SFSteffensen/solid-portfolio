import TypeWrite from "~/components/Typewrite";

export default function About() {
  return (
    <main class="text-center mx-auto p-4 z-20">
      <div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold font-mono">
          <TypeWrite speed={50}>&lt; About /&gt;</TypeWrite>
        </h1>
        <p class="text-lg">
          I'm a software developer with a passion for creating intuitive, efficient, and effective software. I have experience in a variety of programming languages and frameworks, and I'm always eager to learn more and take on new challenges.
        </p>
      </div>
    </main>
  );
}
