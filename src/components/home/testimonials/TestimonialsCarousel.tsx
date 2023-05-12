import Testimonial from "./Testimonial";
import { Testimonial as TestimonialType } from "@/types/testimonial";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react/lib/esm/components";
import { useEffect, useMemo, useState } from "react";

type StateType = {
  leftControl: null | JSX.Element;
  rightControl: null | JSX.Element
}

type PropsType = {
  testimonials: TestimonialType[];
  width: number | null;
}

export default function TestimonialsCarousel({ testimonials, width }: PropsType) {
  const hideControl = useMemo(() => (<div style={{display: 'none'}}></div>), [])
    
  const [carouselProps, setCarouselProps] = useState<StateType>({leftControl: hideControl, rightControl: hideControl})

  useEffect(() => {
    const renderControls = !!(width && width > 640);
    const controls = renderControls ? { leftControl: null, rightControl: null } : { leftControl: hideControl, rightControl: hideControl }
    setCarouselProps(controls);
  }, [width, hideControl])

  // TODO: replace that fucking carousel with not working props to a normal one
  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      item: {
        wrapper: 'items-center'
      }
    },
  };

  return (
    // @ts-ignore
    <Carousel theme={{customTheme}} slide={true} slideInterval={4000} {...carouselProps} >
      {testimonials.map(testimonial => (
        <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>
      ))}
    </Carousel>
  );
}
