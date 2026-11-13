// Eased scrolling for in-page buttons
const duration = 1000;
// Fast start, long gentle stop, like iOS scroll-to-top
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - 2 ** (-10 * t));

let frame = 0;
const cancel = () => cancelAnimationFrame(frame);

function scrollToElement(target: Element) {
  cancel();
  const start = window.scrollY;
  const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const end = Math.min(target.getBoundingClientRect().top + start - margin, maxScroll);
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({ top: start + (end - start) * easeOutExpo(progress), behavior: "instant" });
    if (progress < 1) frame = requestAnimationFrame(step);
  };
  frame = requestAnimationFrame(step);
}

export function initSmoothScroll() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.addEventListener("click", (event) => {
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.defaultPrevented || event.button !== 0 || modified) return;
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
    const target = link && document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!link || !target) return;

    event.preventDefault();
    history.pushState(null, "", link.hash);
    scrollToElement(target);
    if (target.hasAttribute("tabindex")) target.focus({ preventScroll: true });
  });

  // Let the user take over mid-scroll
  for (const type of ["wheel", "touchstart", "keydown"] as const) {
    window.addEventListener(type, cancel, { passive: true });
  }
}
