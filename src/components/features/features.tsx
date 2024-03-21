'use client'

import Feature from "./feature";
import useViewportType from "@/utils/hooks/useViewportWidth";
import { useMemo } from "react";
import config from "@/app/app.config";
import classnames from "classnames";
import Image from "next/image";
import { stagger } from 'framer-motion'

const staggerFeatures = stagger(0.5, { from: "first" });

const Component = () => {
  const {
    dict: { features },
  } = config;

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

  const featureContent = (index) => {
    const feature = features[index];

    if (index === 0) {
      return (
        <>
          <div className="w-full flex flex-col justify-start sm:h-full md:justify-between md:max-w-72">
            <h3 className="font-content text-2xl font-semibold ">
              {feature.title}
            </h3>
            <p className="font-content font-medium text-base ">
              {feature.content}
            </p>
          </div>
          <div className="flex mt-8 -mx-6 sm:absolute sm:h-[60%] sm:top-auto sm:bottom-0 sm:inset-x-0 md:inset-y-32 md:inset-x-0">
            <Image
              className="w-1/2 sm:absolute sm:left-0 md:w-[40%]"
              width={667}
              height={1000}
              src="/images/features/1-1.png"
              alt={feature.title}
            />
            <Image
              className="w-1/2 sm:absolute sm:right-0 md:w-[40%]"
              width={667}
              height={1000}
              src="/images/features/1-2.png"
              alt={feature.title}
            />
          </div>
        </>
      );
    }

    if (index === 1) {
      return (
        <>
          <div className="w-full flex flex-col justify-start sm:h-full">
            <h3 className="font-content text-2xl font-semibold">
              {feature.title}
            </h3>
            <p className="font-content font-medium text-base">
              {feature.content}
            </p>
          </div>
          <div className="my-auto sm:absolute sm:h-[50%] sm:top-auto sm:bottom-0 sm:inset-x-4 md:top-2/3 md:left-4 md:right-4">
            <Image
              className="w-full max-w-none"
              width={667}
              height={1000}
              src="/images/features/2.png"
              alt={feature.title}
            />
          </div>
        </>
      );
    }

    if (index === 2) {
      return (
        <>
          <div className="w-full flex flex-col justify-start sm:h-full md:justify-end">
            <h3 className="font-content text-2xl font-semibold">
              {feature.title}
            </h3>
            <p className="font-content font-medium text-base">
              {feature.content}
            </p>
          </div>
          <div className="my-auto sm:absolute sm:h-[50%] sm:top-auto sm:bottom-0 md:-top-4">
            <Image
              className="w-full max-w-none md:w-11/12 right-0"
              width={667}
              height={1000}
              src="/images/features/3.png"
              alt={feature.title}
            />
          </div>
        </>
      );
    }

    if (index === 3) {
      return (
        <>
          <div className="w-full flex flex-col justify-start sm:h-full md:justify-end md:max-w-72">
            <h3 className="font-content text-2xl font-semibold">
              {feature.title}
            </h3>
            <p className="font-content font-medium text-base">
              {feature.content}
            </p>
          </div>
          <div className="mt-8 sm:absolute sm:h-[60%] sm:top-auto sm:bottom-0 sm:inset-x-4 md:-top-6 md:left-1/2 md:-right-4">
            <Image
              className="w-full max-w-none"
              width={667}
              height={1000}
              src="/images/features/4.png"
              alt={feature.title}
            />
          </div>
        </>
      );
    }
  };

  return (
    <div
      className="w-full
      grid
      grid-cols-1 gap-y-8
      sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-4 sm:gap-y-4
      md:grid-cols-10 md:grid-rows-2 md:gap-x-6 md:gap-y-6
      lg:gap-x-4 lg:gap-y-4
      xl:gap-x-8 xl:gap-y-8"
    >
      {features &&
        features.map((feature, index) => (
          <Feature
            key={index}
            className={classnames({
              " bg-brand-green text-brand-green-dark top-8 row-span-1 col-span-1 md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-5":
                index === 0,
              "bg-brand-pink text-brand-pink-dark top-16 row-span-1 col-span-1 md:row-start-1 md:row-end-2 md:col-start-5 md:col-end-8":
                index === 1,
              "bg-brand-blue text-brand-blue-dark top-20 row-span-1 col-span-1 md:row-start-1 md:row-end-2 md:col-start-8 md:col-end-11":
                index === 2,
              "bg-brand-yellow text-brand-yellow-dark top-24 row-span-1 col-span-1 md:row-start-2 md:row-end-3 md:col-start-5 md:col-end-11":
                index === 3,
            })}
            feature={feature}
            animationConfig={getAnimationConfig(index)}
          >
            {featureContent(index)}
          </Feature>
        ))}
    </div>
  );
};

export default Component;