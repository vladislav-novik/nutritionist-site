import classnames from "classnames";

type size = "sm" | "md" | "lg";
type variant = "primary" | "secondary" | "accent";

type Props = {
  to: string;
  children: React.ReactNode;
  variant: variant;
  size: size;
};

const component = ({ to, children, variant, size }: Props) => {
  return (
    <a
      href={to}
      className={classnames({
          "bg-primary-dark text-tetriary border-primary-dark":
            variant === "primary",
          "bg-white text-primary-dark border-btn-border":
            variant === "secondary",
          "bg-tetriary text-primary-dark border-tetriary": variant === "accent",
          "px-8 py-4 text-md": size === "sm",
          "px-10 py-5 text-lg": size === "md",
          "px-12 py-6 text-xl": size === "lg",
        },
        `rounded-full border-1 font-bold transition-all
        active:scale-95
        focus-visible:outline-2 focus-visible:outline-primary-dark focus-visible:outline-dashed focus-visible:outline-offset-2
      hover:text-white hover:bg-secondary`
      )}
    >
      {children}
    </a>
  );
};

export default component;
