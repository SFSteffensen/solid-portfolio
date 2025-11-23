import { type Component } from "solid-js";

const Home: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-base to-mantle">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-6xl font-bold text-heading text-gradient mb-4">
          Home Page
        </h1>
        <p class="text-xl text-subtext0">
          This is the home page. Layout is working!
        </p>
      </div>
    </div>
  );
};

export default Home;
