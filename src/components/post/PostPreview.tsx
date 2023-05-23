import Link from "next/link";
import { PostPreview } from "@/types/post";
import PlaceholderedImage from "@/components/shared/PlaceholderedImage";
// import Tag from "./Tag";
import ReadArticleButton from "./ReadArticleButton";

type PropsType = {
  post: PostPreview;
  dict: any;
};


export default function PostOverview({ post, dict }: PropsType) {
  return (
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
              <Link href={`articles/${encodeURIComponent(post.slug)}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 leading-6 text-sm mt-5">{post.excerpt}</p>
            <Link href={`articles/${encodeURIComponent(post.slug)}`} aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
              <ReadArticleButton>{dict.btn.readArticle}</ReadArticleButton>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}