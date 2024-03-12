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
          "bg-brand text-white border-brand":
            variant === "primary",
          "bg-white text-primary-dark border-btn-border":
            variant === "secondary",
          "bg-tetriary text-primary-dark border-tetriary": variant === "accent",
          "px-8 py-4 text-md": size === "sm",
          "px-8 py-4 text-md lg:px-10 lg:py-5 lg:text-lg": size === "md",
          "px-10 py-5 text-lg lg:px-12 lg:py-6 lg:text-xl": size === "lg",
        },
        `inline-block rounded-full border-2 font-bold transition-all
        active:scale-95
        focus-visible:outline-2 focus-visible:outline-primary-dark focus-visible:outline-dashed focus-visible:outline-offset-2
      hover:text-brand-dark hover:bg-white`
      )}
    >
      {children}
    </a>
  );
};

export default component;
