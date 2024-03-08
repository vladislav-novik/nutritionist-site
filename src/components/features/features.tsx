"use client";

import { motion, stagger } from "framer-motion";
import Feature from "./feature";
import useViewportType from "@/utils/hooks/useViewportWidth";
import { useMemo } from "react";

const features = [
  {
    _id: "1",
    name: "Service 1",
    description: "Service 1 description",
    image: "/images/features/1.svg",
  },
  {
    _id: "2",
    name: "Service 2",
    description: "Service 2 description",
    image: "/images/features/2.svg",
  },
  {
    _id: "3",
    name: "Service 3",
    description: "Service 3 description",
    image: "/images/features/3.svg",
  },
];

const staggerFeatures = stagger(0.5, { from: "first" });

const Component = () => {
  const viewportType = useViewportType();

  const isDesktop = useMemo(() => viewportType === "Desktop", [viewportType]);

  const getAnmationConfig = (i) => ({
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
      {features.map((service, index) => (
        <Feature
          key={service._id}
          feature={service}
          animationConfig={getAnmationConfig(index)}
          isLast={index === features.length - 1}
        />
      ))}
    </div>
  );
};

export default Component;
