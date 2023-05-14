import Link from "next/link";
import { PostOverview } from "@/types/post";
import PlaceholderedImage from "@/components/shared/PlaceholderedImage";

type PropsType = {
  post: PostOverview;
};


export default function PostOverview({ post }: PropsType) {
  return (
    <article key={post.slug} className="flex justify-between items-start flex-col group">
      <div className="relative w-full group-hover:opacity-75">
        <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
          {/* @ts-expect-error Server Component */}
          <PlaceholderedImage
            src={post.mainImage}
            className="h-auto w-full object-cover object-center sm:aspect-[2/1] lg:aspect-[3/2] rounded-2xl"
            width={300}
            height={300}
            alt={post.title}
          ></PlaceholderedImage>
        </Link>
      </div>
      <div className="max-w-xl">
        <div className="text-xs flex gap-x-4 items-center mt-8">
          <time className="text-gray-500 capitalize" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('ru-Ru', { month: 'narrow', day: 'numeric', year: 'numeric' })}
          </time>
          {post.tags.map((tag) => (
            <a key={tag} className="text-gray-600 bg-gray-50 font-medium py-[0.375rem] px-3 relative z-10 rounded-full">{tag}</a>
          ))}
        </div>
        <div className="relative group-hover:opacity-75">
          <h3 className="text-gray-900 leading-6 font-semibold text-lg mt-3 line-clamp-2">
            <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
              <span className="absolute inset-0"></span>
              {post.title}
            </Link>
          </h3>
          <p className="text-gray-600 leading-6 text-sm mt-5 line-clamp-3">{post.excerpt}</p>
        </div>
      </div>
    </article>
  );
}