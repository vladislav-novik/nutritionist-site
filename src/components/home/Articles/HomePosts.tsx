import { PostPreview } from "@/types/post";
import { getPostsForHome } from "@/sanity/lib/posts";
import PostOverview from "../../post/PostPreview";
import { getDictionary } from "@/app/[lang]/dictionaries";
import SectionHeader from "@/components/Section/Header";
import SectionSubHeader from "@/components/Section/Subheader";
import SectionDescription from "@/components/Section/Description";

const POSTS_AMOUNT = 3;
type Props = {
  lang: string,
}

export default async function HomePosts({ lang }: Props) {
  const posts = await getPostsForHome(POSTS_AMOUNT);
  const dict = await getDictionary(lang)

  return (
    <section id="posts" className="bg-white">
      {/* #ffefff */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <SectionHeader>{dict.sections.articles.title}</SectionHeader>
          <SectionSubHeader>{dict.sections.articles.subtitle}</SectionSubHeader>
          <SectionDescription>{dict.sections.articles.description}</SectionDescription>
          {/* <h2 className="text-2xl leading-8 font-bold md:text-4xl -tracking-tight">{dict.sections.articles.title}:{dict.sections.articles.subtitle}</h2>
          <p className="leading-8 text-lg mt-2">{dict.sections.articles.description}</p> */}
        </div>

        <div className="max-w-4xl mx-auto mt-20 space-y-20">
          {posts.map((post: PostPreview) => (
            <PostOverview key={post.slug} post={post}></PostOverview>
          ))}
        </div>
      </div>
    </section>
  )
}

