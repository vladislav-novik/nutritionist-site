import { Post, PostOverview } from "@/types/post";
import { postBySlug, postsForHome, postsPerPage } from "./queries"
import client from "./client"

export async function getPostsForHome(amount: number): Promise<PostOverview[]> {
    const posts = await client.fetch<PostOverview[]>(postsForHome, {
        amount
    })

    return posts;
}

export async function getPostsPerPage(page: number, amount: number): Promise<PostOverview[]> {
    const posts = await client.fetch<PostOverview[]>(postsPerPage, {
        start: (page - 1) * amount,
        end: page * amount
    })

    return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const post = await client.fetch<Post>(postBySlug, {
        slug
    })

    return post;
}