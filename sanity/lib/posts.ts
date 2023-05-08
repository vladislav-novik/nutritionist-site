import { Post } from "@/types/post";
import client from "./client"

export async function getPostsForHome(amount: number) {
    const posts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc) [0...${amount}] {
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
        }`
    )

    return posts as Array<Post>;
}

export async function getPostsPerPage(page: number, amount: number) {
    const posts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc) [${page * amount}...${(page + 1) * amount}] {
            _id,
            title,
            "slug": slug.current,
            publishedAt,
            mainImage,
            "category": category->title,
            "tags": tags[]->title,
            excerpt,
        }`
    )

    return posts as Array<Post>;
}
