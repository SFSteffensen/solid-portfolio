import { type Component } from "solid-js";
import { A } from "@solidjs/router";

const NotFound: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-base to-mantle pt-32 flex items-center justify-center">
      <div class="glass rounded-2xl p-12 text-center max-w-md">
        <h1 class="text-9xl font-bold text-gradient mb-4">404</h1>
        <h2 class="text-3xl font-semibold text-text mb-4">Page Not Found</h2>
        <p class="text-subtext0 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <A
          href="/"
          class="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Go Home
        </A>
      </div>
    </div>
  );
};

export default NotFound;
