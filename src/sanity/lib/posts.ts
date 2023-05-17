import { Post, PostPreview } from "@/types/post";
import { postBySlug, postsForHome, posts } from "./queries"
import client from "./client"

export async function getPostsForHome(amount: number): Promise<PostPreview[]> {
    const posts = await client.fetch<PostPreview[]>(postsForHome, {
        amount
    })

    return posts;
}

export async function getPosts(): Promise<PostPreview[]> {
    const result = await client.fetch<PostPreview[]>(posts)

    return result;
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const post = await client.fetch<Post>(postBySlug, {
        slug
    })

    return post;
}