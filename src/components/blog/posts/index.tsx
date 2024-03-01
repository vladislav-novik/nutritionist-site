import { PostOverview } from "@/types/post";
import Link from "next/link";
import ReadArticleButton from "../shared/ReadArticleButton";
import Image from "next/image";
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  post: PostOverview;
  dict: any;
}

export default function Component({ post, dict }: Props) {
  return (
    <article key={post._id} className="duration-200 group bg-white transition-all shadow-sm border-[1px] border-zinc-100 rounded-xl overflow-hidden hover:-translate-y-1">
      <div className="relative flex flex-col sm:flex-row">
        <div className="flex overflow-hidden sm:min-w-40 md:min-w-48">
          <Image 
            placeholder="blur"
            blurDataURL={post.mainImage.lquip}
            src={urlForImage(post.mainImage.ref).width(600).height(700).url()}
            className="transition duration-200 object-cover w-full h-56 group-hover:scale-110 sm:w-56 sm:h-auto"
            width={600}
            height={700}
            alt={post.title} />
        </div>
        <div className="py-5 px-4 flex flex-col sm:p-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold line-clamp-2">{post.title}</h3>
            <p className="mt-4 text-sm font-normal leading-6 line-clamp-3">{post.excerpt}</p>
          </div>
          <div className="mt-auto pt-6 border-t-[1px] border-zinc-100">
          {post.tags.map((tag, index) => (
            <span key={index} className="uppercase tracking-widest font-bold text-gray-400 text-xs">
              {tag}
            </span>
          ))}
          </div>
        </div>
        <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
          <span className="absolute inset-0" aria-hidden></span>
        </Link>

        {/* <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute cursor-pointer -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{post.title}</span>
          </Link>
        </h2>
        <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 pl-3.5" dateTime="2022-09-05">
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          September 5, 2022
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600">{post.excerpt}</p>
        <ReadArticleButton>{dict.btn.readArticle}</ReadArticleButton> */}
      </div>
    </article>
  );
}