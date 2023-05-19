import Post from "@/components/post/Post";
import { getPostBySlug } from "@/sanity/lib/posts";
import { HiArrowLeft } from "react-icons/hi";

type ParamsType = {
  slug: string;
}

export default async function Page({ params }: { params: ParamsType }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="xl:relative">
              <div className="mx-auto max-w-2xl">
                <button type="button" aria-label="Go back to articles"
                  className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0">
                  <HiArrowLeft className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-700" />
                </button>
                <Post post={post}></Post>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}