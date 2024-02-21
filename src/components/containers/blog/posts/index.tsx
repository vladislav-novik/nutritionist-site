import { PostOverview } from "@/types/post";
import Link from "next/link";
import ReadArticleButton from "../shared/ReadArticleButton";

type Props = {
  post: PostOverview;
  dict: any;
}

export default function Component({ post, dict }: Props) {
  return (
    <article key={post._id} className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
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
        <ReadArticleButton>{dict.btn.readArticle}</ReadArticleButton>
      </div>
      <time className="mt-1 hidden md:flex relative z-10 order-first mb-3 items-center text-sm text-zinc-400" dateTime="2022-09-05">September 5, 2022</time>
    </article>
  );
}