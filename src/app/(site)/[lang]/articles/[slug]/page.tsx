import Post from "@/components/post/Post";
import { getPostBySlug, getPostsSlugs } from "@/sanity/lib/posts";

export async function generateStaticParams() {
  const slugs = await getPostsSlugs();
 
  return slugs.map((slug) => ({
    slug,
  }));
}

type ParamsType = {
  slug: string;
}

export default async function Page({ params }: { params: ParamsType }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <Post post={post}></Post>
          </div>
        </div>
      </div>
    </div>
  );
}