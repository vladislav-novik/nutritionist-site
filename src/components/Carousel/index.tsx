"use client"

import { Carousel, DeepPartial, FlowbiteCarouselTheme } from "flowbite-react/lib/esm/components";
import Control from "@/components/Carousel/Control"

type Props = {
    children: JSX.Element | JSX.Element[];
}

export default function Component({children}: Props) {
  const control = (direction: 'left' | 'right') => {
    return (
      <Control direction={direction}></Control>
    );
  }
  const customTheme: DeepPartial<FlowbiteCarouselTheme> = {
    item: {
      wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center flex items-center"
    },
    root: {
      leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none invisible sm:visible",
      rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none invisible sm:visible",
    },
    indicators: {
      active: {
        off: "h-3 w-3 rounded-full bg-green-300/50 hover:bg-green-300 dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "h-3 w-3 rounded-full bg-green-300 hover:bg-green-300 dark:bg-gray-800 dark:hover:bg-gray-800",
      },
    }
  };

  return (
    <Carousel 
        theme={customTheme}
        slide={false}
        // slide={true} 
        // slideInterval={4000} 
        leftControl={control('left')}
        rightControl={control('right')}>
      {children}
    </Carousel>
  );
}
