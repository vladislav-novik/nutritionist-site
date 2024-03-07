import Link from "next/link";
import { PostOverview } from "@/types/post";
// import Tag from "./Tag";
import ReadArticleButton from "../shared/ReadArticleButton";
import { urlForImage } from "@/sanity/lib/image";
import Image from 'next/image';

type PropsType = {
  post: PostOverview;
};


const component = ({ post }: PropsType) => {
  return (
    <article className="relative group px-5 py-6 sm:p-8">
      <div className="relative overflow-hidden aspect-[16/8] rounded-2xl">
        <Image
          placeholder="blur" blurDataURL={post.mainImage.lquip}
          src={urlForImage(post.mainImage.ref).width(800).height(400).url()}
          className="transition duration-300 object-cover w-full h-full absolute inset-0 group-hover:scale-125"
          width={800}
          height={400}
          alt={post.title}
        ></Image>
      </div>
      <h3 className="mt-7 text-primary font-heading font-bold text-xl line-clamp-2">{post.title}</h3>
      <p className="mt-3 text-primary text-base font-normal line-clamp-3">{post.excerpt}</p>
      <div className="mt-8">
        {post.tags.map((tag, index) => (
          <span key={index} className="uppercase tracking-widest font-bold text-gray-400 text-xs">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
        <span className="absolute inset-0" aria-hidden></span>
      </Link>

      {/* <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:flex-shrink-0 lg:w-64 lg:aspect-[1/1]">
        <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
          <Image
            placeholder="blur" blurDataURL={post.mainImage.lquip}
            src={urlForImage(post.mainImage.ref).width(800).height(400).url()}
            className="w-full h-full absolute inset-0 object-cover bg-gray-50 rounded-2xl"
            width={800}
            height={400}
            alt={post.title}
          ></Image>
          <div className="ring-inset ring-1 ring-gray-900/10 rounded-2xl absolut inset-0"></div>
        </Link>
      </div>
      <div>
        <div className="group relative cursor-pointer">
          <Link className="absolute cursor-pointer -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" href={`articles/${post.slug}`}>
          </Link>

          <div className="text-sm flex gap-x-4 items-center relative mt-6">
            <time className="text-gray-500" dateTime="2021-09-05">September 5, 2021</time>
          </div>
          <div className="max-w-xl relative">
            <h3 className="text-gray-900 text-lg font-semibold leading-6 mt-3">
              <Link href={`articles/${encodeURIComponent(post.slug)}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 leading-6 text-sm mt-5">{post.excerpt}</p>
            <Link href={`articles/${encodeURIComponent(post.slug)}`} aria-hidden="true"
              className="relative z-10 mt-4 flex items-center text-sm font-medium text-emerald-500">
              <ReadArticleButton>{dict.btn.readArticle}</ReadArticleButton>
            </Link>
          </div>
        </div>
      </div> */}
    </article>
  );
}

export default component;