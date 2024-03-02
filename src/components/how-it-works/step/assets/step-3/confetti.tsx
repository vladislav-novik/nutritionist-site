"use client"

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from 'react'

type Props = {
  delay?: number;
  d: string;
  fill: string;
};

const Component = ({ fill, d, delay = 0 }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const randDelay = Math.random() * 0.8;
  const randDuration = Math.random() * 0.5 + 1;
  const randRotate = Math.random() * 360 + 90;
  const randY = Math.random() * (-100);

  const confettiTransition = {
    delay: randDelay + delay,
    duration: randDuration,
    ease: "easeInOut",
    loop: Infinity,
  };

  const confettiVariants = {
    hidden: { opacity: 0, y: randY, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: randRotate },
  };

  return (
    <motion.path
      ref={ref}
      variants={confettiVariants}
      initial="hidden"
      animate={controls}
      transition={confettiTransition}
      d={d}
      fill={fill}
    />
  );
};

export default Component;
