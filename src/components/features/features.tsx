"use client";

import SectionTitle from "@/components/layout/section/Title";
import SectionSubtitle from "@/components/layout/section/Subtitle";
import useViewportType from "@/utils/hooks/useViewportWidth";
import Feature from "./feature";
import MobileFeature from "./feature/mobile";
import { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import config from "@/app/app.config";

type Props = {
  features: {
    title: string;
    content: string;
    image: string;
  }[];
  isMobile?: boolean;
  page?: number;
  direction?: number;
};

const NotMobileComponent = () => {
  const {
    dict,
    dict: { features },
  } = config;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    axis: "y",
    offset: ["start end", "end start"],
  });

  const pageProgress = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.45, 0.6],
    [0, 1, 2, 3]
  );
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    pageProgress.on("change", (value) => {
      const newPage = Math.floor(value);

      if (newPage === page) return;

      const direction = newPage > page ? 1 : -1;
      setPage([newPage, direction]);
    });

    return () => pageProgress.destroy();
  });

  return (
    <div ref={ref} className="md:min-h-[400vh]">
      <div className="md:sticky md:top-14 md:h-screen md:overflow-hidden md:px-8">
        <div className="max-w-7xl mx-auto mb-16">
          <SectionSubtitle animated>
            {dict.sections.features.title}
          </SectionSubtitle>
          <SectionTitle animated>{dict.sections.features.title}</SectionTitle>
        </div>
        <div className="relative flex justify-center">
          <Features page={page} direction={direction} features={features} />
        </div>
      </div>
    </div>
  );
};

const MobileComponent = () => {
  const {
    dict,
    dict: { features },
  } = config;
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <SectionSubtitle animated>
          {dict.sections.features.title}
        </SectionSubtitle>
        <SectionTitle animated>{dict.sections.features.title}</SectionTitle>
      </div>
      <div className="w-full flex flex-col gap-y-16">
        <Features features={features} isMobile />
      </div>
    </div>
  );
};

const Component = () => {
  const viewportType = useViewportType();
  const isMobileViewport = useMemo(
    () => viewportType === "Mobile",
    [viewportType]
  );

  return isMobileViewport ? <MobileComponent /> : <NotMobileComponent />;
};

const Features = ({
  features,
  isMobile = false,
  page = 0,
  direction = 0,
}: Props) =>
  features &&
  features.map((feature, index) =>
    isMobile ? (
      <MobileFeature key={index} index={index} feature={feature} />
    ) : (
      <Feature
        key={index}
        isVisible={page === index}
        feature={feature}
        index={index}
        direction={direction}
      />
    )
  );

export default Component;
