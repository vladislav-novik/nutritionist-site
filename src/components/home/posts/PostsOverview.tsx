import { Post } from "@/types/post";
import { getPostsForHome } from "../../../../sanity/lib/posts";
import PostOverview from "./PostOverview";

const POSTS_AMOUNT = 3;

export default async function PostsOverview() {
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
    <div className="mt-16 max-w-2xl mx-auto grid gap-y-20 gap-x-8 grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0">
      {posts.map((post: Post) => (
        <PostOverview key={post.slug} post={post}></PostOverview>
      ))}
    </div>
  );
}