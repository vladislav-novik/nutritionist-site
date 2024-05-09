"use client";

import Feature from "./feature";
import MobileFeature from "./feature/mobile";

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

const Component = ({
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
