"use client";

import classnames from "classnames";
import Link from "@/components/shared/Link";
import Image from "next/image";
import config from "@/app/app.config";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'
import TextLine from '../text-line'

type Props = {
  index: number;
};

const colors = ["brand-yellow", "brand-pink", "brand-blue"];

const Component = ({ index }: Props) => {
  const { dict } = config;
  const isOdd = (index + 1) % 2 === 1;
  const { title, description } = dict.sections.howItWorks.steps[index];

  const thirdStep = index === 2;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const bottom = useTransform(scrollYProgress, [1, 0], ["0px", "50px"]);

  return (
    <div className="grid gap-y-8 items-center grid-cols-1 md:gap-x-16 md:grid-cols-2 md:gap-y-8">
      <div
        className={classnames("relative sm:pl-6 md:px-0", {
          "md:order-1": !isOdd,
        })}
      >
        <div
          className={classnames(
            `bg-${colors[index]}`,
            `pt-8 px-8 rounded-xl max-w-xl w-full mx-auto 
            lg:rounded-[2.5rem]`
          )}
        >
          <TextLine />
          {thirdStep ? (
            <motion.div ref={ref} className="relative" style={{ bottom }}>
              <Image
                src={`/images/how-it-works/${index + 1}.png`}
                alt={title}
                width={500}
                height={500}
              />
            </motion.div>
          ) : (
            <Image
              src={`/images/how-it-works/${index + 1}.png`}
              alt={title}
              width={500}
              height={500}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center mx-auto max-w-sm md:text-left md:mx-0">
          <h3 className="font-bold text-brand leading-none text-2xl">
            0{index + 1}. {title}
          </h3>
          <p className="text-base text-brand-darker my-6 md:my-8 lg:text-lg">
            {description}
          </p>
          <Link to="#contacts" size="sm" variant="primary">
            {dict.buttons.wantToStart}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Component;
