import { createSignal } from "solid-js";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="grid min-h-dvh place-items-center bg-zinc-950 text-zinc-100">
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-4xl font-bold">Portfolio</h1>
        <button
          type="button"
          class="rounded-md bg-zinc-800 px-4 py-2 hover:bg-zinc-700"
          onClick={() => setCount(c => c + 1)}
        >
          Clicked {count()} times
        </button>
      </div>
    </main>
  );
}
