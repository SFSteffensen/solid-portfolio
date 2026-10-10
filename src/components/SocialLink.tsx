import { Icon, type IconName } from "./Icon.tsx";

type Social = { label: string; href: string; icon: IconName };

export const socials = {
  github: { label: "GitHub", href: "https://github.com/SFSteffensen", icon: "github" },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sfsteffensen",
    icon: "linkedin",
  },
  email: { label: "Email", href: "mailto:Sebastian@sfsteffensen.dev", icon: "mail" },
} satisfies Record<string, Social>;

// Square icon button that lifts and turns red on hover
export function SocialLink(props: Social) {
  const external = () => !props.href.startsWith("mailto:");

  return (
    <a
      href={props.href}
      target={external() ? "_blank" : undefined}
      rel={external() ? "noopener noreferrer" : undefined}
      aria-label={props.label}
      class="grid size-11.5 place-items-center rounded-lg bg-surface0 text-text transition-all duration-300 ease-smooth hover:-translate-y-0.75 hover:bg-surface1 hover:text-primary hover:shadow-[0_8px_18px_light-dark(rgb(76_79_105/0.2),rgb(0_0_0/0.4))]"
    >
      <Icon name={props.icon} />
    </a>
  );
}
