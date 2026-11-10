import { createSignal } from "solid-js";

import { Button } from "./Button.tsx";
import { GlassCard } from "./GlassCard.tsx";
import { SectionHeading } from "./SectionHeading.tsx";
import { email, socials } from "./SocialLink.tsx";

function useCopy(text: string) {
  const [copied, setCopied] = createSignal(false);
  let reset: ReturnType<typeof setTimeout> | undefined;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(reset);
    reset = setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copy };
}

export function Contact() {
  const clipboard = useCopy(email);

  return (
    <section id="contact" class="container scroll-mt-24 pt-16 pb-24">
      <SectionHeading eyebrow="// say hi" title="Get in touch">
        Open side projects, or just a chat about Rust and glass.
      </SectionHeading>

      <GlassCard class="flex flex-col gap-6 p-8.5 md:flex-row md:items-center md:justify-between">
        <div class="min-w-0">
          <p class="mb-2 font-mono text-[13px] tracking-[0.03em] text-subtext0">~/inbox</p>
          <a
            href={socials.email.href}
            class="text-[22px] font-semibold tracking-heading break-all transition-colors hover:text-primary md:text-[28px]"
          >
            {email}
          </a>
        </div>

        <div class="grid gap-3 sm:flex sm:flex-wrap sm:gap-3.5">
          <Button icon="mail" href={socials.email.href}>
            Write me
          </Button>
          <Button
            variant="secondary"
            icon={clipboard.copied() ? "check" : "copy"}
            onClick={() => void clipboard.copy()}
          >
            <span class="grid">
              <span class={["col-start-1 row-start-1", { invisible: clipboard.copied() }]}>
                Copy address
              </span>
              <span class={["col-start-1 row-start-1", { invisible: !clipboard.copied() }]}>
                Copied
              </span>
            </span>
          </Button>
          <span class="sr-only" aria-live="polite">
            {clipboard.copied() ? "Email address copied" : ""}
          </span>
        </div>
      </GlassCard>
    </section>
  );
}
