"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import config from '@/app/app.config';

const component = () => {
  const { dict } = config
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
      delay: 0.8,
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, y: 10, x: 10 },
    show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.3 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      className="absolute top-full left-1/2 w-20 h-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={arrowVariants} className="w-full h-full">
        <Image
          src="/images/arrows/top-left.svg"
          alt="socials pointer"
          fill
        />
      </motion.div>
      <motion.p
        variants={textVariants}
        className="absolute top-full w-36 font-cursive leading-5 text-2xl text-primary"
      >
        {dict.subscribeToSocials}
      </motion.p>
    </motion.div>
  );
};

export default component;
