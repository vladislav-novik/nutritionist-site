import { Testimonial } from "@/types/testimonial";
import client from "./client";
import { testimonialsForHome } from "./queries";

export async function getTestimonials(): Promise<Testimonial[]> {
    const testimonials = await client.fetch<Testimonial[]>(testimonialsForHome);
    return testimonials;
}
