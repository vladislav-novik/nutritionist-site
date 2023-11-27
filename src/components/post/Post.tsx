import { urlForImage } from "@/sanity/lib/image";
import { Post } from "../../types/post"
import ShareButtons from "../ShareButtons";
import PostBody from "./PostBody";
import Image from 'next/image'

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{post.title}</h1>
        <time dateTime={post.publishedAt} className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          <span className="ml-3">September 5, 2022</span>
        </time>
      </header>
      <div className="mt-8 prose lg:prose-lg dark:prose-invert">
        <Image placeholder="blur" blurDataURL={post.mainImage.lquip} src={urlForImage(post.mainImage.ref).width(1310).height(872).url()} width={1310} height={872} alt="alt" />
        {/* <PostBody content={post.body}></PostBody> */}
      </div>
      <div className="mt-8 w-full flex justify-end">
        <ShareButtons />
      </div>
    </article>
  );
}