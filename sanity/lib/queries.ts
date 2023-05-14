import { groq } from "next-sanity";

export const postsForHome = groq`*[_type == "post"] | order(publishedAt desc) [0...$amount] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "category": category->title,
    "tags": tags[]->title,
    excerpt,
}`;

export const postsPerPage = groq`
    *[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "category": category->title,
    "tags": tags[]->title,
    excerpt,
}`;

export const postBySlug = groq`
    *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "category": category->title,
    "tags": tags[]->title,
    excerpt,
    body,
}`;

export const testimonialsForHome = groq`
    *[_type == "testimonial" && showOnHomepage == true] {
    _id,
    author,
    image,
    reason,
    content,
    date,
}`;

export const services = groq`
    *[_type == "service"] {
    _id,
    name,
    description,
    image,
}`;


