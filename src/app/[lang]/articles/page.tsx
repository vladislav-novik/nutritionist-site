import { getPosts } from "@/sanity/lib/posts"
import { PostPreview } from "@/types/post";
import PostsPreview from "@/components/post/PostPreview2"
import { getDictionary } from "../dictionaries";
import PageWrapper from "@/components/Animation/PageWrapper";

type Props = {
  params: {
    lang: string,
  }
}

export default async function Page({ params }: Props) {
  const dict = await getDictionary(params.lang);
  const posts = await getPosts()

  return (
    <PageWrapper>
      <div className="text-gray-800">
      <h2 className="text-2xl font-bold text-center">{dict.sections.articles.title}: {dict.sections.articles.subtitle}</h2>
      <p className="leading-8 text-lg mt-2 text-center">{dict.sections.articles.description}</p>

      <div className="max-w-6xl mx-auto mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post: PostPreview) => (
              <PostsPreview key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
