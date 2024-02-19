import { Post, PostOverview } from "@/types/post";
import { postBySlug, postsForHome, posts, postsSlugs } from "./queries"
import { sanityFetch } from "./sanity.fetch";

export async function getPostsForHome(amount: number): Promise<PostOverview[]> {
    const posts = await sanityFetch<PostOverview[]>({
        query: postsForHome,
        params: { amount }
    });

    return posts;
}

export async function getPosts(): Promise<PostOverview[]> {
    const result = await sanityFetch<PostOverview[]>({
        query: posts,
    });

    return result;
}

export async function getPostsSlugs(): Promise<string[]> {
    // do not need for preview, uses only for SSG
    const result = await sanityFetch<string[]>({
        query: postsSlugs,
    }, false);

    return result;
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const post = await sanityFetch<Post>({
        query: postBySlug,
        params: { slug }
    });

    return post;
}