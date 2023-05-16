import Post from "@/components/post/Post";
import { getPostBySlug } from "@/sanity/lib/posts";

type ParamsType = {
    slug: string;
}

export default async function Page({ params }: { params: ParamsType }) {
    const post = await getPostBySlug(params.slug);

    return (
        <Post post={post}></Post>
    );
}