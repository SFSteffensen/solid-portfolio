import { SocialLink, socials } from "./SocialLink.tsx";

export function Footer() {
  return (
    <footer class="container pt-10 pb-14 text-center">
      <div class="mb-4.5 flex justify-center gap-3">
        <SocialLink {...socials.github} />
        <SocialLink {...socials.linkedin} />
        <SocialLink {...socials.email} />
      </div>
      <p class="font-mono text-[12.5px] text-subtext0">
        Built with SolidJS, riced with Catppuccin {new Date().getFullYear()} SFSteffensen
      </p>
    </footer>
  );
}
