import Link from "next/link";
import { PostOverview } from "@/types/post";
// import Tag from "./Tag";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import classnames from 'classnames'

type PropsType = {
  post: PostOverview
  withExcrpt: boolean
  colorClass: string
};

const tagColor = ['brand-pink', 'brand-blue', 'brand-green', 'brand-yellow']

const component = ({ post, withExcrpt, colorClass }: PropsType) => {
  return (
    <article className="relative group">
      <div className="relative">
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
        <div className="absolute bottom-0 p-2 space-x-2">
          {post.tags &&
            post.tags.map((tag, index) => (
              <span
                key={index}
                className={classnames("rounded-md py-1 px-2 uppercase tracking-widest font-bold text-xs",
                `bg-${tagColor[index % 4]}`, `text-${tagColor[index % 4]}-dark`)
                }
              >
                {tag}
              </span>
            ))}
        </div>
        <div className={classnames(`bg-${colorClass}`, "absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl")}></div>
      </div>
      <h3 className={classnames("mt-6 text-brand-darker font-heading font-bold text-xl line-clamp-3")}>
        <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
          {post.title}
        </Link>
      </h3>
      {withExcrpt && (
        <p className="mt-3 text-brand-darker text-base font-normal line-clamp-3">
          {post.excerpt}
        </p>
      )}
    </article>
  );
};

export default component;
