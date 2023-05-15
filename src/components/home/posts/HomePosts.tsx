import { PostPreview } from "@/types/post";
import { getPostsForHome } from "../../../../sanity/lib/posts";
import PostOverview from "../../post/PostPreview";

const POSTS_AMOUNT = 3;

export default async function HomePosts() {
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
    <section id="posts" className=" bg-[#efffff]">
      {/* #ffefff */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl leading-8 font-bold md:text-4xl -tracking-tight">From the blog</h2>
          <p className="leading-8 text-lg mt-2">Learn how to grow your business with our expert advice.</p>
        </div>

        <div className="mt-20 max-w-2xl mx-auto grid gap-y-10 sm:gap-y-14 md:gap-y-16 gap-x-8 grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {posts.map((post: PostPreview, index: number, arr: PostPreview[]) => (
            <>
              <PostOverview key={post.slug} post={post}></PostOverview>
              {index !== arr.length - 1 && (
                <hr
                  className="lg:hidden my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

