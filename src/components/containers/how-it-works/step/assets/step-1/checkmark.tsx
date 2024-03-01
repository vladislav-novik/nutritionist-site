"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Component = ({ delay, d, id }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // d="M 498.160156 257.21875 C 499.832031 257.007812 501.355469 256.144531 502.390625 254.816406 L 531.53125 210.171875 C 533.6875 207.402344 533.195312 203.410156 530.425781 201.253906 C 527.652344 199.097656 523.65625 199.59375 521.5 202.359375 L 496.027344 240.074219 L 476.808594 214.257812 C 474.042969 212.097656 470.046875 212.59375 467.890625 215.367188 C 465.730469 218.132812 466.226562 222.125 468.996094 224.285156 L 493.46875 255.925781 C 494.800781 256.957031 496.488281 257.425781 498.160156 257.21875 "
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
      id={id}
      fill="#e30613"
      d={d}
      fillOpacity="1"
      fillRule="nonzero"
    />
  );
};

export default Component;
