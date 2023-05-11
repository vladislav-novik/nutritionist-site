import Image from "next/image";
import { getPostsForHome } from "../../../../sanity/lib/posts";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";

const POSTS_AMOUNT = 3;

export default async function Posts() {
  const posts = await getPostsForHome(POSTS_AMOUNT);
  console.log(posts);

  return (
    <div className="lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl leading-8 font-bold md:text-4xl -tracking-tight">From the blog</h2>
          <p className="leading-8 text-lg mt-2">Learn how to grow your business with our expert advice.</p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto grid gap-y-20 gap-x-8 grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {posts.map((post) => (
            <article key={post.slug} className="flex justify-between items-start flex-col">
              <div className="relative w-full group-hover:opacity-75">
                <Image
                  src={urlForImage(post.mainImage)?.url() ?? ''}
                  alt="alt"
                  className="h-auto w-full object-cover object-center sm:aspect-[2/1] lg:aspect-[3/2] rounded-2xl"
                  placeholder="blur"
                />
              </div>
              <div className="max-w-xl">
                <div className="text-xs flex gap-x-4 items-center mt-8">
                  <time className="text-gray-500 capitalize" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('ru-Ru', { month: 'narrow', day: 'numeric', year: 'numeric' })}
                  </time>
                  {post.tags.map((tag) => (
                    <a key={tag} className="text-gray-600 bg-gray-50 font-medium py-[0.375rem] px-3 relative z-10 rounded-full">{tag}</a>
                  ))}
                </div>
                <div className="relative">
                  <h3 className="text-gray-900 leading-6 font-semibold text-lg mt-3 line-clamp-2">
                    <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                      <span className="absolute inset-0"></span>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 leading-6 text-sm mt-5 line-clamp-3">{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

