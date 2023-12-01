"use client"

// import { useLiveQuery } from "@sanity/preview-kit";
import Post from "@/components/post/Post";
import { postBySlug } from "@/sanity/lib/queries";
import { Post as PostType } from "@/types/post";
import { useLiveQuery } from "next-sanity/preview";

export default function PreviewPost({ post, slug }: { post: PostType, slug: string }) {
  console.log('useLiveQuery', useLiveQuery(post, postBySlug, { slug }));
  const [data] = useLiveQuery(post, postBySlug, { slug });

  return (
    <Post post={data} />
  );
}
