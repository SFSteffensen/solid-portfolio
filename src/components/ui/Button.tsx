import { type Component, type JSX, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: JSX.Element;
}

const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "size", "children", "class"]);
  
  const baseClasses = "rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-primary text-base hover:opacity-90 hover:shadow-lg hover:shadow-primary/50",
    secondary: "glass hover:glass-hover",
    ghost: "bg-transparent hover:bg-surface0 text-text",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      class={cn(
        baseClasses,
        variantClasses[local.variant || "primary"],
        sizeClasses[local.size || "md"],
        local.class
      )}
      {...others}
    >
      {local.children}
    </button>
  );
};

export default Button;
