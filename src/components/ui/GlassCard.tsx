import { type Component, type JSX, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface GlassCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "accent";
  children: JSX.Element;
}

const GlassCard: Component<GlassCardProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "children", "class"]);

  const variantClasses = {
    default: "glass",
    hover:
      "glass transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:hover:shadow-latte-base/20",
    accent: "glass-accent",
  };

  return (
    <div
      class={cn("rounded-2xl p-6", variantClasses[local.variant || "default"], local.class)}
      {...others}
    >
      {local.children}
    </div>
  );
};

export default GlassCard;
