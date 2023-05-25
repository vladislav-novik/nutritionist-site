import { groq } from "next-sanity";

const postPreviewProjection = `
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "category": category->title,
    "tags": tags[]->title,
    excerpt
`;

const testimonialProjection = `
    _id,
    author,
    image,
    reason,
    content,
    date
`;

export const postsForHome = groq`*[_type == "post"] | order(publishedAt desc) [0...$amount] {
   ${postPreviewProjection}
}`;

export const posts = groq`*[_type == "post"] | order(publishedAt desc) {
    ${postPreviewProjection}
  
}`;

// export const postsPerPage = groq`{
//     "posts": *[_type == "post"] | order(publishedAt desc) [$start...$end] {
//         ${postPreviewProjection}
//       },
//     "totalItems": count(*[_type == "post"])
// }`;

export const postsSlugs = groq`*[_type == "post"  && defined(slug.current)][].slug.current`;

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
    ${testimonialProjection}
}`;

export const testimonialsPerPage = groq`{
    "testimonials": *[_type == "testimonial"] | order(publishedAt desc) [$start...$end] {
        ${testimonialProjection}
      },
    "totalItems": count(*[_type == "testimonial"])
}`;

export const services = groq`
    *[_type == "service"] {
    _id,
    name,
    description,
    image,
}`;
