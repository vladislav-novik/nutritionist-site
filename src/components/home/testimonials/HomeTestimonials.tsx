import Carousel from "@/components/Carousel";
import { getTestimonials } from "../../../../sanity/lib/testimonials"
import Testimonial from "./Testimonial";

export default async function HomeTestimonials() {
  const testimonials = await getTestimonials();

  return (
    <div className="mx-auto max-w-7xl lg:px-8 h-full relative z-10">
      <Carousel>
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>
        ))}
      </Carousel>
    </div>
  )
}