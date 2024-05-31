import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-primary p-4 bg-base-100">
      <h1 class="max-6-xs text-6xl text-primary font-thin uppercase my-16">Not Found</h1>
      <p class="mt-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p class="my-4">
        You can return to the{" "}
        <A href="/" class="text-accent font-bold hover:underline">
          home page
        </A>{" "}
      </p>
    </main>
  );
}
