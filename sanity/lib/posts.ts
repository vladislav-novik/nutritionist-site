import { Post, PostPreview } from "@/types/post";
import { postBySlug, postsForHome, postsPerPage } from "./queries"
import client from "./client"

export async function getPostsForHome(amount: number): Promise<PostPreview[]> {
    const posts = await client.fetch<PostPreview[]>(postsForHome, {
        amount
    })

    return posts;
}

export async function getPostsPerPage(page: number, amount: number): Promise<{totalItems: number, posts: PostPreview[]}> {
    const result = await client.fetch<{totalItems: number, posts: PostPreview[]}>(postsPerPage, {
        start: (page - 1) * amount,
        end: page * amount
    })

    return result;
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const post = await client.fetch<Post>(postBySlug, {
        slug
    })

    return post;
}