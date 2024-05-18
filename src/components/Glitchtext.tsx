import { onMount, onCleanup, createSignal, createEffect } from "solid-js";
import inView from '~/hooks/inView';

interface HackTextProps {
  text: string;
  class?: string;
  speed?: number;
  onAnimationEnd?: () => void;
}

export default function HackText(props: HackTextProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅabcdefghijklmnopqrstuvwxyzæøå</>{}[]()!@#$%^&*+-=0123456789";
  let animationFrameId: number | undefined;
  let iteration = 0;
  let start: number | null = null;
  const [ref, setRef] = createSignal<HTMLElement | null>(null);
  const [setElement, isInView] = inView();

  const animate = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    if (progress > (props.speed || 1000) / props.text.length) {
      const element = ref();
      if (element) {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return element.dataset.value![index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
        iteration++;
        start = timestamp; // Update start time to current timestamp
      }
    }
    if (iteration <= props.text.length) {
      animationFrameId = requestAnimationFrame(animate);
    } else if (props.onAnimationEnd) {
      props.onAnimationEnd();
    }
  };

  createEffect(() => {
    if (isInView() && ref()) {
      const element = ref();
      if (element) {
        element.dataset.value = props.text;
        element.innerText = props.text;
        animationFrameId = requestAnimationFrame(animate);
      }
    }
  });

  onCleanup(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  return (
    <div ref={(el) => { setRef(el); setElement(el); }} class={`${props.class}`} style={{ willChange: 'content' }}>
      {props.text}
    </div>
  );
}
