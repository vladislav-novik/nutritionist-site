import { getPosts } from "@/sanity/lib/posts"
import { PostPreview } from "@/types/post";
import PostsPreview from "@/components/post/PostPreview2"

export default async function Page() {
  const posts = await getPosts()

  return (
    <main className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto bg-white">
        <div className="text-gray-800 py-24">

          <h2 className="text-3xl font-bold text-center">Latest articles</h2>

          <div className="max-w-6xl mx-auto mt-16 sm:mt-20">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex max-w-3xl flex-col space-y-16">
                {posts.map((post: PostPreview) => (
                  <PostsPreview key={post._id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
