import { getPostsForHome } from "../../../../sanity/lib/posts";

const POSTS_AMOUNT = 4;

export default async function Posts() {
    const posts = await getPostsForHome(POSTS_AMOUNT);

    return (
        <section className="mx-auto w-full h-[60vh]">
            Posts section
            <div>
            {posts.map(post => (
                <div key={post.slug}>
                    <h1>{post.title}</h1>
                    <h2>{post.excerpt}</h2>
                </div>
            ))}
            </div>
        </section>
    );
}

