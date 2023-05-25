import { PostPreview } from "@/types/post";
import { getPostsForHome } from "@/sanity/lib/posts";
import PostOverview from "../../post/PostPreview";
import { getDictionary } from "@/app/[lang]/dictionaries";
import SectionHeader from "@/components/Section/Header";
import SectionSubHeader from "@/components/Section/Subheader";
import SectionDescription from "@/components/Section/Description";
import Link from "next/link";
import Section from "@/components/Section/Section";
import SectionAnimation from "@/components/Animation/SectionAnimation";

const POSTS_AMOUNT = 3;

type Props = {
  lang: string,
}

export default async function HomePosts({ lang }: Props) {
  const posts = await getPostsForHome(POSTS_AMOUNT);
  const dict = await getDictionary(lang)

  return (
    <Section id="articles" className="bg-zinc-100">
      {/* <SectionAnimation> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-emerald-50 rounded- max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <SectionHeader>{dict.sections.articles.title}</SectionHeader>
            <SectionSubHeader>{dict.sections.articles.subtitle}</SectionSubHeader>
            <SectionDescription>{dict.sections.articles.description}</SectionDescription>
          </div>

          <div className="max-w-4xl mx-auto mt-20 space-y-20">
            {posts.map((post: PostPreview) => (
              <PostOverview key={post.slug} post={post} dict={dict}></PostOverview>
            ))}
          </div>

          <div className="mt-20 w-full text-center text-emerald-500">
            <Link href={'/articles'}>{dict.btn.readMore}</Link>
          </div>
          </div>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}

