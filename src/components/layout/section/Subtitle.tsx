'use client'

import useResponsiveMargin from '@/utils/hooks/useResponsiveMargin'
import useViewportType from '@/utils/hooks/useViewportWidth'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

type Props = {
  children: React.ReactNode;
  className?: string;
  animated?: boolean
  delay?: number
};

const Component = ({ children, className, animated = false, delay = 0 }: Props) => {
  const margin = useResponsiveMargin();
  const viewportType = useViewportType()
  const isMobileViewport = useMemo(
    () => viewportType === 'Mobile',
    [viewportType]
  );

  const classes = classnames(
    className,
    "font-cursive text-lg leading-8 text-accent"
  )
  return !animated ? (
    <p className={classes}>
      {children}
    </p>
  ) : (
    <motion.p
      className={classes}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ margin, once: true }}
      transition={{ duration: 0.6, delay: isMobileViewport ? 0 : delay }}
    >
      {children}
    </motion.p>
  )
}

export default Component;
