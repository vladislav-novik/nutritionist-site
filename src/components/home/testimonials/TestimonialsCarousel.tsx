"use client"

import Testimonial from "./Testimonial";
import { Testimonial as TestimonialType } from "@/types/testimonial";
import { Carousel, DeepPartial, FlowbiteCarouselTheme } from "flowbite-react/lib/esm/components";
import Control from "@/components/Carousel/Control"

type StateType = {
  leftControl: null | JSX.Element;
  rightControl: null | JSX.Element
}

type PropsType = {
  testimonials: TestimonialType[];
  width: number | null;
}

export default function TestimonialsCarousel({ testimonials, width }: PropsType) {
  // const hideControl = useMemo(() => (<div style={{display: 'none'}}></div>), [])

  // const [carouselProps, setCarouselProps] = useState<StateType>({leftControl: hideControl, rightControl: hideControl})

  // useEffect(() => {
  //   const renderControls = !!(width && width > 640);
  //   const controls = renderControls ? { leftControl: null, rightControl: null } : { leftControl: hideControl, rightControl: hideControl }
  //   setCarouselProps(controls);
  // }, [width, hideControl])

  const control = (direction: 'left' | 'right') => {
    return (
      <Control direction={direction}></Control>
    );
  }

  // TODO: replace that fucking carousel with not working props to a normal one
  const customTheme: DeepPartial<FlowbiteCarouselTheme> = {
    item: {
      wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center flex items-center'
    },
    indicators: {
      base: "h-3 w-3 rounded-full bg-green-300/50 hover:bg-green-300 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      active: {
        on: "bg-green-300"
      }
    }
  };

  return (
    <Carousel theme={customTheme} slide={true} slideInterval={4000} leftControl={control('left')} rightControl={control('right')}>
      {testimonials.map(testimonial => (
        <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>
      ))}
    </Carousel>
  );
}
