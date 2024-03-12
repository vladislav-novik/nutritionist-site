"use client";

import classnames from "classnames";

type size = "sm" | "md" | "lg";
type variant = "primary" | "secondary" | "accent";
type Props = {
  children: React.ReactNode;
  variant: variant;
  size: size;
  type?: "button" | "submit";
  onClick?: (event) => void;
};

const component = ({
  type = "button",
  children,
  variant,
  size,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={(e) => onClick && onClick(e)}
      className={classnames(
        {
          "bg-brand-darkest text-tetriary border-brand-darkest":
            variant === "primary",
          "bg-white text-brand-darkest border-btn-border":
            variant === "secondary",
          "bg-brand-light text-brand-dark border-brand-light": variant === "accent",
          "px-8 py-4 text-md": size === "sm",
          "px-10 py-5 text-lg": size === "md",
          "px-12 py-6 text-xl": size === "lg",
        },
        `rounded-full border-2 font-bold transition-all
        active:scale-95
        focus-visible:outline-2 focus-visible:outline-brand-darkest focus-visible:outline-dashed focus-visible:outline-offset-2
        hover:text-brand-dark hover:bg-white`
      )}
    >
      {children}
    </button>
  );
};

export default component;
