"use client";

import Feature from "./feature";
import useViewportType from "@/utils/hooks/useViewportWidth";
import { useMemo } from "react";
import { stagger } from "framer-motion";

type Props = {
  features: {
    title: string;
    content: string;
    image: string;
  }[]
}

const staggerFeatures = stagger(0.5, { from: "first" });

const Component = ({ features }: Props) => {
  const viewportType = useViewportType();
  const isDesktop = useMemo(() => viewportType === "Desktop", [viewportType]);
  const getAnimationConfig = (i) => ({
    variants: {
      hidden: {
        opacity: 0,
        x: isDesktop ? 200 : 90,
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
    viewport: { once: true, amount: !isDesktop ? 0.7 : 0.4 },
  });

  return features && features.map((feature, index) => (
    <Feature
      key={index}
      feature={feature}
      index={index}
      animationConfig={getAnimationConfig(index)}
    />
  ))
};

export default Component;
