import Carousel from "@/components/Carousel";
import { getTestimonials } from "@/sanity/lib/testimonials"
import Testimonial from "./Testimonial";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export default async function HomeTestimonials() {
  const testimonials = await getTestimonials();

  return (
    <section id="testimonials" className="mx-auto bg-white overflow-hidden px-6 py-8 sm:py-12 lg:px-8 h-[36rem] relative">
      {/* #f0bcd2 */}
      <div className="mx-auto max-w-7xl lg:px-8 h-full relative z-10">
        <Carousel>
          {testimonials.map(testimonial => (
            <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>
          ))}
        </Carousel>
      </div>
      <ImQuotesLeft className="absolute text-green-200 opacity-40 top-10 left-10" size={200}></ImQuotesLeft>
      <ImQuotesRight className="absolute text-green-200 opacity-40 bottom-10 right-10" size={200}></ImQuotesRight>
    </section>
  )
}