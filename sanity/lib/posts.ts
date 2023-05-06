import { Post } from "@/types/post";
import client from "./client"

export async function getPostsForHome(amount: number) {
    const posts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc) [0...${amount}] {
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
    console.log('posts', posts);
    return posts as Array<Post>;
}

export async function getPostsRange(start: number, end: number) {
    const posts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc) [${start}...${end}]`,
        { caches }
    )

    return posts
}
