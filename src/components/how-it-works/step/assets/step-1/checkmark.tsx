"use client"

import { AnimationControls, VariantLabels, Variants, motion } from 'framer-motion'

type Props = {
  delay?: number
  d: string
  fill: string
  controls: AnimationControls
  initial: { opacity: number, y: number }
}

const Component = ({ delay = 0, d, fill, controls, initial }: Props) => {
  return (
    <motion.path
      animate={controls}
      initial={initial}
      transition={{ delay: delay, type: 'spring', bounce: 0.1, stiffness: 200 }}
      fill={fill}
      d={d}
    />
  );
};

export default Component;
