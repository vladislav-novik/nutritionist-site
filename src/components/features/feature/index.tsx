'use client'

import classnames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Description from "./description";
import FeatureImage from "./image";

type Props = {
  feature: {
    title: string;
    content: string;
    image: string;
  };
  index: number;
  animationConfig?: any;
  direction: number;
  className?: string;
  isVisible: boolean;
};

const animationConfig = {
  variants: {
    enter: (direction: number) => {
      return {
        zIdndex: 0,
        x: direction > 0 ? 1000 : -1000,
        // x: 1000,
        opacity: 0,
        scale: 0.4
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction > 0 ? -1000 : 1000,
        // x: -1000,
        scale: 0.4,
        opacity: 0
      };
    }
  },
  transition: {
    opacity: { duration: 0.6 },
    x: { duration: 0.6 },
    scale: { duration: 0.6 }
  },
  initial: "enter",
  animate: "center",
  exit: "exit",
}

const Component = ({
  index,
  feature,
  className,
  isVisible = false,
  direction,
}: Props) => {

  return (
    <AnimatePresence initial={false} custom={direction}>
      {isVisible && (
        <motion.div
          key={index}
          {...animationConfig}
          custom={direction}
          className={classnames(
          {
            "bg-green text-brand-green-text top-12 sm:top-20": index === 0,
          },
          {
            "bg-pink text-brand-pink-text top-16 sm:top-24": index === 1,
          },
          {
            "bg-blue text-brand-blue-text top-20 sm:top-28": index === 2,
          },
          {
            "bg-yellow text-brand-yellow-text top-24 sm:top-32": index === 3,
          },
          `group flex flex-col items-start
            sticky rounded-3xl min-h-[140vw]
            sm:flex-row sm:min-w-80 sm:min-h-72
            md:rounded-3xl md:max-w-7xl md:w-full md:flex md:gap-x-8 md:absolute md:top-0`,
          className
        )}
      >
        <Description
          index={index}
          title={feature.title}
          content={feature.content}
        />
        <FeatureImage index={index} alt={feature.title} />
      </motion.div>
      )}
    </AnimatePresence>
  )
};

export default Component;
