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
          "bg-white text-brand-darkest border-btn-border":
            variant === "secondary",
          "bg-tetriary text-brand-darkest border-tetriary": variant === "accent",
          "px-8 py-4 text-base": size === "sm",
          "px-8 py-4 text-base lg:px-10 lg:py-5 lg:text-lg": size === "md",
          "px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-lg lg:px-12 lg:py-6 lg:text-xl": size === "lg",
        },
        `inline-block rounded-full border-2 font-bold transition-all
        active:scale-95
        focus-visible:outline-2 focus-visible:outline-brand-darkest focus-visible:outline-dashed focus-visible:outline-offset-2
      hover:text-brand-dark hover:bg-white`
      )}
    >
      {children}
    </a>
  );
};

export default component;
