"use client"

import { motion } from "framer-motion";
type Props = {
  delay?: number;
  duration: number;
  rotate: number;
  startY: number;
  d: string;
  fill: string;
};

const Component = ({ fill, d, delay = 0, duration, rotate, startY }: Props) => {

  const confettiTransition = {
    delay: delay,
    duration: duration,
    ease: "easeInOut",
    loop: Infinity,
  };

  const confettiVariants = {
    hidden: { opacity: 0, y: startY, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: rotate },
  };

  return (
    <motion.path
      variants={confettiVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={confettiTransition}
      d={d}
      fill={fill}
    />
  );
};

export default Component;
