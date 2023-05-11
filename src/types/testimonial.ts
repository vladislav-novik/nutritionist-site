import { Image } from "sanity";

export type Testimonial = {
    _id: string;
    author: string;
    image: Image;
    reason: string;
    content: string;
    date: string;
};