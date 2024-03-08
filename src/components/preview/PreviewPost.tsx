"use client"

import { postBySlug } from "@/sanity/lib/queries";
import { Post as PostType } from "@/types/post";
import { useLiveQuery } from "next-sanity/preview";
import Post from '../blog/post-page'

export default function PreviewPost({ post, slug }: { post: PostType, slug: string }) {
  const [data] = useLiveQuery(post, postBySlug, { slug });

  return (
    <Post post={data} />
  );
}
