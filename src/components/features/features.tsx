"use client";

import { motion, stagger } from "framer-motion";
import Feature from "./feature";
import useViewportType from "@/utils/hooks/useViewportWidth";
import { useMemo } from "react";
import config from '@/app/app.config';

const staggerFeatures = stagger(0.5, { from: "first" });

const Component = () => {
  const { dict: { features } } = config

  const viewportType = useViewportType();
  const isDesktop = useMemo(() => viewportType === "Desktop", [viewportType]);

  const getAnimationConfig = (i) => ({
    variants: {
      hidden: {
        opacity: 0,
        x: isDesktop ? 200 : 100,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
    transition: {
      type: "tween",
      duration: 0.5,
      delay: !isDesktop ? 0 : staggerFeatures(i, features.length),
    },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: !isDesktop ? 0.8 : 0.4 },
  });

  return (
    <div
      // className="grid grid-cols-1 justify-center gap-12 lg:grid-cols-2 xl:gap-y-18 xl:grid-cols-3 2xl:gap-24"
      className="w-fit flex flex-col gap-12 lg:flex-row xl:gap-18 2xl:gap-24"
    >
      {features.map((feature, index) => (
        <Feature
          key={index}
          feature={feature}
          animationConfig={getAnimationConfig(index)}
        />
      ))}
    </div>
  );
};

export default Component;
