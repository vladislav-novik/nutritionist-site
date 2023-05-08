import { Post } from "@/types/post";
import { postsForHome, postsPerPage } from "./queries"
import client from "./client"

export async function getPostsForHome(amount: number): Promise<Post[]> {
    const posts = await client.fetch<Post[]>(postsForHome, {
        amount
    })

    return posts;
}

export async function getPostsPerPage(page: number, amount: number): Promise<Post[]> {
    const posts = await client.fetch<Post[]>(postsPerPage, {
        start: (page - 1) * amount,
        end: page * amount
    })

    return posts;
}
