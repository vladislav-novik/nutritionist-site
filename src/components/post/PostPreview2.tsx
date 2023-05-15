import { PostPreview } from "@/types/post";
import PlaceholderedImage from "../shared/PlaceholderedImage";
import Tag from "./Tag";

type Props = {
  post: PostPreview;
}

export default function Component({ post }: Props) {
  return (
    <article className="flex flex-wrap mb-6">
      <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mb-6">
          {/* @ts-expect-error Server Component */}
          <PlaceholderedImage src={post.mainImage} width={600} height={300} className="w-full" />
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
        <h5 className="text-lg font-bold mb-3">{post.title}</h5>
        <div className="text-xs gap-x-4 mb-3">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <p className="text-gray-500 mb-6">
          <small>Published <time className="text-gray-500 underline" dateTime={post.publishedAt}>
            <u>{new Date(post.publishedAt).toLocaleDateString('en-En', { month: 'narrow', day: 'numeric', year: 'numeric' })}</u>
          </time>
          </small>
        </p>
        <p className="text-gray-500">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}