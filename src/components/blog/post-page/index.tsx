import { Post } from "@/types/post"
import PostBody from "./PostBody";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <article className="max-w-none 
    prose-lg 
    prose-headings:text-brand-darker
    prose-p:text-brand-darkest
    prose-li:text-brand-darkest
    prose-blockquote:text-brand-darker prose-blockquote:italic
    prose-figcaption:text-brand-dark
    lg:col-span-8   
    lg:prose-xl">
      <PostBody content={post.body}></PostBody>
    </article>
  );
}