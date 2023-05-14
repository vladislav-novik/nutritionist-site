import { PostOverview as PostOverviewType } from "@/types/post";
import { getPostsForHome } from "../../../../sanity/lib/posts";
import PostOverview from "./PostOverview";

const POSTS_AMOUNT = 3;

export default async function PostsOverview() {
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
    <div className="mt-20 max-w-2xl mx-auto grid gap-y-10 sm:gap-y-14 md:gap-y-16 gap-x-8 grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0">
      {posts.map((post: PostOverviewType, index: number, arr: PostOverviewType[]) => (
        <>
          <PostOverview key={post.slug} post={post}></PostOverview>
          {index !== arr.length - 1 && (
            <hr
            className="lg:hidden my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          )}
        </>
      ))}
    </div>
  );
}