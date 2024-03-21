'use client'

import useResponsiveMargin from '@/utils/hooks/useResponsiveMargin'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode;
  animated?: boolean
  className?: string;
  id?: string;
};

const Component = ({ children, id, className, animated = false }: Props) => {
  const margin = useResponsiveMargin();

  return !animated ? (
    <section id={id} className={`${className} `}>
      {children}
    </section>
  ) : (
    <motion.section
      id={id}
      className={`${className}`}
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delayChildren: 0.5}}
      viewport={{ margin, once: true }}
    >
      {children}
    </motion.section>
  )
}

export default Component