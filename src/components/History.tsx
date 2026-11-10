import { createMemo, createSignal, For, onSettled, Show } from "solid-js";

import { GlassCard } from "./GlassCard.tsx";
import { SectionHeading } from "./SectionHeading.tsx";

type Branch = "study" | "work";

const branchNames: Branch[] = ["study", "work"];
const branches: Record<Branch, { lane: number; color: string }> = {
  study: { lane: 0, color: "var(--color-mauve)" },
  work: { lane: 1, color: "var(--color-green)" },
};

type Commit = {
  when: string;
  title: string;
  org: string;
  body: string;
  branch: Branch;
  head?: boolean;
};

const history: Commit[] = [
  {
    when: "2026 – now",
    title: "Student software engineer",
    org: "The LEGO Group, Digital Office",
    body: "Building internal software at LEGO's Digital office alongside my studies.",
    branch: "work",
    head: true,
  },
  {
    when: "2025 – 2028",
    title: "BSc, Software Technology",
    org: "Technical University of Denmark (DTU)",
    body: "Algorithms and data structures, discrete math, software engineering, computer systems, operating systems, functional programming and computer graphics, with a steady stream of side projects alongside.",
    branch: "study",
    head: true,
  },
  {
    when: "2024",
    title: "Contract developer",
    org: "Zealand Business College (ZBC)",
    body: "Led a three-person team building an ingredient and nutrition manager for the confectionery department, backed by PostgreSQL with an admin panel.",
    branch: "work",
  },
  {
    when: "2021 – 2024",
    title: "HTX, Robot Technology",
    org: "Zealand Business College (ZBC)",
    body: "Higher technical exam with Mathematics A and Programming B. My final project on neural networks became RustCNN.",
    branch: "study",
  },
];

// Easter egg: the real git object id of the title
// `printf %s "Student software engineer" | git hash-object --stdin`
async function gitHash(text: string) {
  const encoder = new TextEncoder();
  const content = encoder.encode(text);
  const object = new Uint8Array([...encoder.encode(`blob ${content.length}\0`), ...content]);
  const digest = await crypto.subtle.digest("SHA-1", object);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 7);
}

const ink = (color: string) => `color-mix(in oklab, ${color} 70%, var(--color-text))`;

// Graph column left of the cards
const gutter = 44;
const laneGap = 18;
const laneCount = new Set(Object.values(branches).map((branch) => branch.lane)).size;
const laneX = (lane: number) => gutter / 2 + (lane - (laneCount - 1) / 2) * laneGap;
// Vertical room the fork curve takes to swing from the trunk into its lane
const forkHeight = 32;

type Layout = { ys: number[]; height: number };

function useGraph(layout: () => Layout | undefined) {
  return createMemo(() => {
    const current = layout();
    if (!current) return undefined;
    const y = (index: number) => current.ys[index] ?? 0;

    const root = y(history.length - 1);
    const top = Math.min(...current.ys);
    // Draw at a steady pace
    const speed = Math.max(600, (root - top) / 1.6);

    const lanes = branchNames.flatMap((name) => {
      const { lane, color } = branches[name];
      const commits = history.flatMap((commit, index) => (commit.branch === name ? [index] : []));
      const newest = commits[0];
      const oldest = commits.at(-1);
      if (newest === undefined || oldest === undefined) return [];

      const x = laneX(lane);
      let start = y(oldest);
      let d = `M ${x} ${start} V ${y(newest)}`;

      if (lane !== 0) {
        const parent = history.findIndex(
          (commit, index) => index > oldest && branches[commit.branch].lane === 0,
        );
        if (parent !== -1) {
          const trunk = laneX(0);
          start = y(parent);
          const rise = Math.min(forkHeight, (start - y(oldest)) * 0.8);
          d =
            `M ${trunk} ${start} C ${trunk} ${start - rise / 2} ${x} ${start - rise / 2} ${x} ${start - rise}` +
            ` V ${y(newest)}`;
        }
      }

      return [
        {
          d,
          color,
          delay: (root - start) / speed,
          duration: (start - y(newest)) / speed,
        },
      ];
    });

    const dots = history.map((commit, index) => ({
      x: laneX(branches[commit.branch].lane),
      y: y(index),
      color: branches[commit.branch].color,
      head: commit.head ?? false,
      delay: (root - y(index)) / speed,
    }));

    return { lanes, dots, height: current.height };
  });
}

// git log --graph beside the cards
function GitGraph(props: { layout: Layout | undefined; drawn: boolean; animate: boolean }) {
  const graph = useGraph(() => props.layout);
  const transition = (value: string) => (props.animate ? value : "none");

  return (
    <Show when={graph()}>
      {(drawing) => (
        <svg
          aria-hidden="true"
          width={gutter}
          height={drawing().height}
          class="pointer-events-none absolute top-0 left-0 overflow-visible"
        >
          <For each={drawing().lanes}>
            {(lane) => (
              <path
                d={lane.d}
                pathLength="1"
                fill="none"
                stroke={lane.color}
                stroke-width="2.5"
                stroke-linecap="round"
                style={{
                  "stroke-dasharray": "1 1",
                  "stroke-dashoffset": props.drawn ? 0 : 1,
                  transition: transition(
                    `stroke-dashoffset ${lane.duration}s linear ${lane.delay}s`,
                  ),
                }}
              />
            )}
          </For>
          <For each={drawing().dots}>
            {(dot) => (
              <g
                style={{
                  opacity: props.drawn ? 1 : 0,
                  scale: props.drawn ? 1 : 0.4,
                  "transform-origin": `${dot.x}px ${dot.y}px`,
                  transition: transition(
                    `opacity 0.25s ease-out ${dot.delay}s, scale 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${dot.delay}s`,
                  ),
                }}
              >
                <Show when={dot.head}>
                  <circle cx={dot.x} cy={dot.y} r="9.5" fill={dot.color} fill-opacity="0.22" />
                </Show>
                <circle cx={dot.x} cy={dot.y} r="5" fill={dot.color} />
              </g>
            )}
          </For>
        </svg>
      )}
    </Show>
  );
}

export function History() {
  const animate = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [layout, setLayout] = createSignal<Layout>();
  const [drawn, setDrawn] = createSignal(!animate);
  const [hashes, setHashes] = createSignal<string[]>([]);
  let wrapper: HTMLDivElement | undefined;

  onSettled(() => {
    void Promise.all(history.map((commit) => gitHash(commit.title))).then(setHashes);

    const root = wrapper;
    if (!root) return undefined;

    const measure = () => {
      const box = root.getBoundingClientRect();
      const ys = Array.from(root.querySelectorAll("[data-commit]"), (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top + rect.height / 2 - box.top;
      });
      setLayout({ ys, height: box.height });
    };
    const resize = new ResizeObserver(measure);
    resize.observe(root);

    const reveal = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        reveal.disconnect();
        requestAnimationFrame(() => requestAnimationFrame(() => setDrawn(true)));
      },
      { rootMargin: "0px 0px -25% 0px" },
    );
    if (animate) reveal.observe(root);

    return () => {
      resize.disconnect();
      reveal.disconnect();
    };
  });

  return (
    <section id="history" class="container scroll-mt-24 pt-16 pb-24">
      <SectionHeading eyebrow="$ git log --graph" title="History" />

      <div ref={(el) => (wrapper = el)} class="relative">
        <GitGraph layout={layout()} drawn={drawn()} animate={animate} />

        <ol class="flex flex-col gap-3.5 pl-11">
          <For each={history}>
            {(commit, index) => (
              <li data-commit>
                <GlassCard class="px-6 py-5.5">
                  <p class="mb-2 flex flex-wrap items-baseline gap-x-2 font-mono text-[13px]">
                    {/* min-w holds the slot open until the hash resolves */}
                    <span
                      aria-hidden="true"
                      class="inline-block min-w-[7ch]"
                      style={{ color: ink("var(--color-yellow)") }}
                    >
                      {hashes()[index()]}
                    </span>
                    <Show when={commit.head}>
                      <span aria-hidden="true" class="text-subtext0">
                        (<span style={{ color: ink("var(--color-sky)") }}>HEAD</span> -&gt;{" "}
                        <span style={{ color: ink(branches[commit.branch].color) }}>
                          {commit.branch}
                        </span>
                        )
                      </span>
                    </Show>
                    <span class="ml-auto text-subtext0">{commit.when}</span>
                  </p>
                  <h3 class="mb-0.75 text-[17px] font-semibold">{commit.title}</h3>
                  <p class="mb-2 text-[13.5px] font-medium text-primary">{commit.org}</p>
                  <p class="max-w-[68ch] text-[14px] leading-[1.55] text-subtext0">{commit.body}</p>
                </GlassCard>
              </li>
            )}
          </For>
        </ol>
      </div>
    </section>
  );
}
