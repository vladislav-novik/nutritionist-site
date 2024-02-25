"use client";

import classnames from "classnames";
import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit";
  onClick?: (event) => void;
};

const component = ({
  className,
  children = "Take the 3 Min Quiz",
  type = "button",
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={classnames(
        `bg-[#5dc3fa] text-white font-semibold 
          transition-colors duration-200
        hover:bg-[#50a4d1] 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#50a4d1]`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default component;
