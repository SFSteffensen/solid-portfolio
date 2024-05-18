import { createEffect, createSignal, onMount, onCleanup } from "solid-js";
import inView from '~/hooks/inView';

interface TypeWriteProps {
  children: string;
  speed?: number;
}

function TypeWrite(props: TypeWriteProps) {
  const [text, setText] = createSignal("");
  let i = 0;
  let start: number | null = null;
  let animationFrameId: number | undefined;
  const [ref, setRef] = createSignal<HTMLElement>();
  const [setElement, isInView] = inView();

  const typeWriter = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    if (progress > (props.speed || 50)) {
      if (i < props.children.length) {
        setText(t => t + props.children.charAt(i));
        i++;
        start = null;
      }
    }

    if (i < props.children.length) {
      animationFrameId = requestAnimationFrame(typeWriter);
    }
  };

  createEffect(() => {
    if (isInView()) {
      animationFrameId = requestAnimationFrame(typeWriter);
    }
  });

  onCleanup(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  return (
    <div ref={(el) => { setRef(el); setElement(el); }} style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ visibility: 'hidden', position: 'absolute', top: 0, left: 0 }}>
        {props.children}
      </div>
      <div>{text()}</div>
    </div>
  );
}

export default TypeWrite;
