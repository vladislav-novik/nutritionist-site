import Link from "next/link";
import { PostOverview } from "@/types/post";
// import Tag from "./Tag";
import { urlForImage } from "@/sanity/lib/image";
import Image from 'next/image';

type PropsType = {
  post: PostOverview;
  withExcrpt: boolean;
};


const component = ({ post, withExcrpt }: PropsType) => {
  return (
    <article className="relative group">
      <Link 
        href={`/articles/${encodeURIComponent(post.slug)}`}
        className="relative block overflow-hidden aspect-video rounded-2xl"
      >
      <Image
          placeholder="blur" 
          blurDataURL={post.mainImage.lquip}
          src={urlForImage(post.mainImage.ref).width(480).height(270).url()}
          className="transition duration-200 object-cover absolute inset-0 w-full h-full group-hover:scale-125"
          width={480}
          height={270}
          alt={`Cover for article: ${post.title}`}
        />
      </Link>
      <h3 className="mt-6 text-brand-darker font-heading font-bold text-xl line-clamp-3">
        <Link href={`/articles/${encodeURIComponent(post.slug)}`}>{post.title}</Link>
      </h3>
      {withExcrpt && <p className="mt-3 text-brand-darker text-base font-normal line-clamp-3">{post.excerpt}</p>}
      <div className="mt-6">
        {post.tags && post.tags.map((tag, index) => (
          <span key={index} className="uppercase tracking-widest font-bold text-gray-400 text-xs">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default component;