import { onMount, onCleanup, createSignal, createEffect } from "solid-js";

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
    const [ref, setRef] = createSignal<HTMLElement>();

    const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        if (progress > (props.speed || 1000) / props.text.length) {
            if (ref()) {
                // @ts-ignore
                ref().innerText = ref().innerText 
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            // @ts-ignore
                            return ref().dataset.value![index];
                        }

                        return letters[Math.floor(Math.random() * letters.length)]
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
    }

    onMount(() => {
        animationFrameId = requestAnimationFrame(animate);
    });

    onCleanup(() => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });

    createEffect(() => {
        if (ref()) {
            // @ts-ignore
            ref().dataset.value = props.text;
            // @ts-ignore
            ref().innerText = props.text;
        }
    });

    return (
        // @ts-ignore
        <div ref={setRef} class={`${props.class}`} style={{ willChange: 'content' }}>
            {props.text}
        </div>
    );
}