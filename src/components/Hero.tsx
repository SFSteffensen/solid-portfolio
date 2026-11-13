import { createSignal, onSettled } from "solid-js";

import { Button } from "./Button.tsx";
import { SocialLink, socials } from "./SocialLink.tsx";

const roles = [
  "neural networks in Rust 🦀",
  "desktop apps with Tauri",
  "decent websites",
  "Typst templates",
  "SolidJS sites",
  "fast and well-typed software",
  "things that ship",
  "anything i desire",
];

const characters = (text: string) =>
  Array.from(new Intl.Segmenter().segment(text), (part) => part.segment);

function useTypewriter(words: string[]) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return { text: () => words[0] ?? "", typing: () => false };
  }

  const [text, setText] = createSignal("");
  // True mid-word, so the cursor holds solid like a real terminal's
  const [typing, setTyping] = createSignal(false);
  const split = words.map(characters);

  onSettled(() => {
    let word = 0;
    let length = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const chars = split[word % split.length] ?? [];
      length += deleting ? -1 : 1;
      setText(chars.slice(0, length).join(""));
      setTyping(true);

      let delay = deleting ? 35 : 70;
      if (!deleting && length === chars.length) {
        deleting = true;
        delay = 1400;
        setTyping(false);
      } else if (deleting && length === 0) {
        deleting = false;
        word++;
        delay = 220;
        setTyping(false);
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  });

  return { text, typing };
}

export function Hero() {
  const typewriter = useTypewriter(roles);

  return (
    <section id="home" class="container scroll-mt-24 pt-42 pb-20">
      <div class="max-w-180">
        <p class="mb-4.5 font-mono text-[15px] text-subtext0">$ whoami</p>

        <h1 class="mb-4.5 text-[52px] leading-[1.02] font-bold tracking-[-0.03em] md:text-[76px]">
          Sebastian <br />
          <span class="text-primary">Steffensen</span>
        </h1>

        <p class="mb-4.5 min-h-8.5 text-[21px] font-semibold tracking-[-0.01em] md:text-[26px]">
          <span aria-hidden="true">
            I build {typewriter.text()}
            {/* Re-adding animate-blink restarts the cycle on its visible half */}
            <span class={["font-normal text-primary", { "animate-blink": !typewriter.typing() }]}>
              ▋
            </span>
          </span>
          <span class="sr-only">I build {new Intl.ListFormat("en").format(roles)}.</span>
        </p>

        <p class="mb-7.5 max-w-150 text-lg leading-[1.65] text-subtext0">
          Developer & engineering student in Copenhagen. I'm drawn to fast, well-typed software,
          anything from low-level Rust to glassy front-ends
        </p>

        <div class="flex flex-wrap items-center gap-3.5">
          <Button icon="arrowDown" href="#projects">
            See my work
          </Button>
          <Button variant="secondary" icon="mail" href="#contact">
            Get in touch
          </Button>
          <div class="ml-1.5 flex gap-3">
            <SocialLink {...socials.github} />
            <SocialLink {...socials.linkedin} />
          </div>
        </div>
      </div>
    </section>
  );
}
