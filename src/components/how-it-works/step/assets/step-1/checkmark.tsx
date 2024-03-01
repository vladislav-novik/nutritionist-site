"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  delay?: number;
  d: string;
}

const Component = ({ delay = 0, d }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.path
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: delay, type: 'spring', bounce: 0.1, stiffness: 200 }}
      fill="#1f525e"
      d={d}
    />
  );
};

export default Component;
