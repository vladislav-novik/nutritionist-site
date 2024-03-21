'use client'

import useResponsiveMargin from '@/utils/hooks/useResponsiveMargin'
import classnames from 'classnames'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode;
  className?: string;
  animated?: boolean
  delay?: number
};

const Component = ({ children, className, animated = false, delay = 0 }: Props) => {
  const margin = useResponsiveMargin();

  const classes = classnames(className, `font-heading text-3xl font-semibold leading-none text-brand-dark 
    md:text-4xl`)

  return !animated ? (
    <h2 className={classes}>
      {children}
    </h2>
  ) : (
    <motion.h2
      className={classes}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ margin, once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.h2>
  )
};

export default Component;
