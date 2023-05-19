import { Post } from "../../types/post"
import PlaceholderedImage from "../shared/PlaceholderedImage";
import PostBody from "./PostBody";

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
        {/* @ts-expect-error Server Component */}
        <PlaceholderedImage src={post.mainImage} width={1310} height={872} />
        <PostBody content={post.body}></PostBody>
      </div>
    </article>
  );
}