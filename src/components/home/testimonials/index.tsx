'use client'

import Image from "next/image"
import { getTestimonials } from "../../../../sanity/lib/testimonials"
import { Carousel } from "flowbite-react/lib/esm/components";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section id="testimonials" className="mx-auto relative isolate overflow-hidden bg-pink-200 px-6 py-8 sm:py-12 lg:px-8">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-[-9rem] lg:right-full lg:origin-center xl:mr-[-26rem]"></div> */}
      <div className="mx-auto">
        <Carousel slide={false}>
          {testimonials.map(testimonial => (
            <>
              <figure key={testimonial._id} 
                className="w-5/6 my-10 mx-auto grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                  <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>“{testimonial.content}”</p>
                  </blockquote>
                </div>
                <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                  <Image className="mx-auto h-auto rounded-xl" src={testimonial.image.url} alt={testimonial.image.alt} />
                </div>
                <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.reason}</div>
                </figcaption>
              </figure>
            </>
          ))}
        </Carousel>
      </div>
    </section>
  )
}