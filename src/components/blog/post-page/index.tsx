import { Post } from "@/types/post"
import PostBody from "./PostBody";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <article className="max-w-none prose-base lg:col-span-8 lg:prose-lg dark:prose-invert">
      <PostBody content={post.body}></PostBody>
    </article>
  );
}