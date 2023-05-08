import { groq } from "next-sanity";

export const postsForHome = groq`*[_type == "post"] | order(publishedAt desc) [0...$amount] {}] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImage": {
        "alt": mainImage.alt,
        "url": mainImage.asset->url  
    },
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

