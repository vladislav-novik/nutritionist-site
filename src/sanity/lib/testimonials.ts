import { Testimonial } from "@/types/testimonial";
import { client } from "./client";
import { testimonialsForHome, testimonialsPerPage } from "./queries";

export async function getTestimonials(): Promise<Testimonial[]> {
    const testimonials = await client.fetch<Testimonial[]>(testimonialsForHome);
    return testimonials;
}

export async function getTestimonialsPerPage(page: number, amount: number): Promise<{totalItems: number, testimonials: Testimonial[]}> {
    const result = await client.fetch<{totalItems: number, testimonials: Testimonial[]}>(testimonialsPerPage, {
        start: (page - 1) * amount,
        end: page * amount
    })

    return result;
}
