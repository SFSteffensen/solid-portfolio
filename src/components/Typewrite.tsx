import { createSignal, onMount, onCleanup } from "solid-js";

interface TypeWriteProps {
    children: string;
    speed?: number;
}

function TypeWrite(props: TypeWriteProps) {
    const [text, setText] = createSignal("");
    let i = 0;
    let start: number | null = null;
    let animationFrameId: number | undefined;

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

    onMount(() => {
        animationFrameId = requestAnimationFrame(typeWriter);
    });

    onCleanup(() => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });

    return <div>{text()}</div>;
}

export default TypeWrite;