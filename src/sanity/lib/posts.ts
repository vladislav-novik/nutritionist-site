import { Post, PostOverview } from "@/types/post";
import { postBySlug, postsForHome, posts, postsSlugs } from "./queries"
import client from "./client"

export async function getPostsForHome(amount: number): Promise<PostOverview[]> {
    const posts = await client.fetch<PostOverview[]>(postsForHome, {
        amount
    })

    return posts;
}

export async function getPosts(): Promise<PostOverview[]> {
    const result = await client.fetch<PostOverview[]>(posts)

    return result;
}

export async function getPostsSlugs(): Promise<string[]> {
    return await client.fetch<string[]>(postsSlugs);
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const post = await client.fetch<Post>(postBySlug, {
        slug
    })

    return post;
}