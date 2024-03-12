"use client"

import classnames from 'classnames'
import {  motion, useAnimation, useInView } from 'framer-motion'
import Image from "next/image";
import { useEffect, useRef } from 'react'

type Props = {
  messageAssetPath: string;
  className?: string;
  animation: {
    delay: number;
  }
};

const Component = ({ messageAssetPath, className, animation }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref)

  const { delay } = animation

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: delay, type: 'spring', bounce: 0.25, stiffness: 80 }}
      className={classnames("flex w-full justify-center", className)}>
      <Image
        src={messageAssetPath}
        width={350}
        height={200}
        alt="Message"
      />
    </motion.div>
  );
};

export default Component;
