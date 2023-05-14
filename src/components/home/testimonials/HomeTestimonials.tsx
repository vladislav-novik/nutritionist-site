"use client"

import { getTestimonials } from "../../../../sanity/lib/testimonials"
import useWindowDimensions from "@/hooks/useWindowDimensions";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default async function HomeTestimonials() {
  const { width } = useWindowDimensions();
  const testimonials = await getTestimonials();

  return (
    <div className="mx-auto max-w-7xl lg:px-8 h-full relative z-10">
      <TestimonialsCarousel width={width} testimonials={testimonials}></TestimonialsCarousel>
    </div>
  )
}