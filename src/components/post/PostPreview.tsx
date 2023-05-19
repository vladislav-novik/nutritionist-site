import Link from "next/link";
import { PostPreview } from "@/types/post";
import PlaceholderedImage from "@/components/shared/PlaceholderedImage";
import Tag from "./Tag";

type PropsType = {
  post: PostPreview;
};


export default function PostOverview({ post }: PropsType) {
  return (
    // <article key={post.slug} className="relative group">
    //   {/* <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div> */}
    //   <div className="w-full rounded-2xl ring-inset ring-1 ring-gray-900/10">
    //   {/* border border-gray-900/10 */}
    //     <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
    //       {/* @ts-expect-error Server Component */}
    //       <PlaceholderedImage
    //         src={post.mainImage}
    //         className="h-auto w-full rounded-2xl object-contain object-center aspect-[2/1] lg:aspect-[3/2] lg:object-cover bg-gray-100"
    //         width={600}
    //         height={300}
    //         alt={post.title}
    //       ></PlaceholderedImage>
    //     </Link>
    //   </div>

    //   <div className="md:col-span-3  relative flex flex-col items-start">
    //     <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
    //       <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
    //         <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
    //         <span className="relative z-10">{post.title}</span>
    //       </a>
    //     </h2>
    //     <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime="2022-09-05">
    //       <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
    //         <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
    //       </span>
    //       September 5, 2022
    //     </time>
    //     <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
    //     <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
    //       Read article
    //       <svg
    //         viewBox="0 0 16 16"
    //         fill="none"
    //         aria-hidden="true"
    //         className="ml-1 h-4 w-4 stroke-current"
    //       >
    //         <path
    //           d="M6.75 5.75 9.25 8l-2.5 2.25"
    //           strokeWidth="1.5"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         ></path>
    //       </svg>
    //     </div>
    //   </div>
    // </article>


    <article className="flex flex-col gap-8 lg:flex-row relative">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:flex-shrink-0 lg:w-64 lg:aspect-[1/1]">
        <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
          {/* @ts-expect-error Server Component */}
          <PlaceholderedImage
            src={post.mainImage}
            className="w-full h-full absolute inset-0 object-cover bg-gray-50 rounded-2xl"
            width={800}
            height={400}
            alt={post.title}
          ></PlaceholderedImage>
          <div className="ring-inset ring-1 ring-gray-900/10 rounded-2xl absolut inset-0"></div>
        </Link>
      </div>
      <div>
        <div className="group relative cursor-pointer">
          <Link className="absolute cursor-pointer -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" href={`articles/${post.slug}`}>
            {/* <span className="absolute cursor-pointer -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></span> */}
          </Link>

          <div className="text-sm flex gap-x-4 items-center relative mt-6">
            <time className="text-gray-500" dateTime="2021-09-05">September 5, 2021</time>
          </div>
          <div className="max-w-xl relative">
            <h3 className="text-gray-900 text-lg font-semibold leading-6 mt-3">
              <Link href={`articles/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 leading-6 text-sm mt-5">{post.excerpt}</p>
            <Link href={`articles/${post.slug}`} aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
              Read article
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="ml-1 h-4 w-4 stroke-current"
              >
                <path
                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}