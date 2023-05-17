import Link from "next/link";
import { PostPreview } from "@/types/post";
import PlaceholderedImage from "@/components/shared/PlaceholderedImage";
import Tag from "./Tag";

type PropsType = {
  post: PostPreview;
};


export default function PostOverview({ post }: PropsType) {
  return (
    <article key={post.slug} className="relative group">
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
      <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
        {/* @ts-expect-error Server Component */}
        <PlaceholderedImage
          src={post.mainImage}
          className="h-auto w-full rounded-2xl object-contain object-center aspect-[2/1] lg:aspect-[3/2] lg:object-cover z-10"
          width={600}
          height={300}
          alt={post.title}
        ></PlaceholderedImage>
      </Link>

      <div className="md:col-span-3  relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          
          <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{post.title}</span>
          </a>
        </h2>
        <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime="2022-09-05">
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          September 5, 2022
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
          Read article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </article>
  );
}