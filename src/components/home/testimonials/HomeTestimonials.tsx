import Carousel from "@/components/Carousel";
import { getTestimonials } from "@/sanity/lib/testimonials"
import Testimonial from "./Testimonial";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  lang: string,
}

export default async function HomeTestimonials({ lang }: Props) {
  const testimonials = await getTestimonials();
  const dict = await getDictionary(lang)

  return (
    <section id="testimonials" className="mx-auto bg-white overflow-hidden h-fit px-6 py-8 sm:py-12 lg:px-8 relative">
      {/* #f0bcd2 */}
      <div className="w-full text-center lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">{dict.sections.testimonials.title}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {dict.sections.testimonials.subtitle}
        </p>
        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
          {dict.sections.testimonials.description}
        </p> */}
      </div>
      <div className="mx-auto max-w-7xl h-[28rem] lg:px-8 relative z-10">
        <Carousel>
          {testimonials.map(testimonial => (
            <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>
          ))}
        </Carousel>
      </div>
      <ImQuotesLeft className="absolute max-w-[20%] text-green-200 opacity-40 top-10 left-10" size={200}></ImQuotesLeft>
      <ImQuotesRight className="absolute max-w-[20%] text-green-200 opacity-40 bottom-10 right-10" size={200}></ImQuotesRight>
    </section>
  )
}