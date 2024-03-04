"use client"

import { motion } from 'framer-motion'

type Props = {
  delay?: number;
  d: string;
}

const Component = ({ delay = 0, d }: Props) => {
  return (
    <motion.path
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true}}
      initial={{ opacity: 0, y: -10 }}
      transition={{ delay: delay, type: 'spring', bounce: 0.1, stiffness: 200 }}
      fill="#1f525e"
      d={d}
    />
  );
};

export default Component;
