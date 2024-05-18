import { createSignal, onCleanup, onMount } from 'solid-js';

export default function inView(options = {}) {
  const [isIntersecting, setIsIntersecting] = createSignal(false);
  const [ref, setRef] = createSignal<Element>();

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { ...options }
    );

    if (ref()) {
      observer.observe(ref());
    }

    onCleanup(() => {
      if (ref()) {
        observer.unobserve(ref());
      }
    });
  });

  return [setRef, isIntersecting] as const;
}
