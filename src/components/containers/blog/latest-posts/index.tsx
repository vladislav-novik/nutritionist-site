import { PostOverview as PostOverviewType } from "@/types/post";
import PostOverview from "./Post";
import SectionHeader from "@/components/shared/section/Header";
import SectionSubHeader from "@/components/shared/section/Subheader";
import SectionDescription from "@/components/shared/section/Description";
import Link from "next/link";
import Section from "@/components/shared/section/Section";
import SectionAnimation from "@/components/shared/animation/SectionAnimation";

type Props = {
  dict: any;
  posts: PostOverviewType[]
}

export default function HomePosts({ dict, posts }: Props) {
  return (
    <Section id="articles" className="bg-zinc-50">
      {/* <SectionAnimation> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionHeader>{dict.sections.articles.title}</SectionHeader>
            <SectionSubHeader>{dict.sections.articles.subtitle}</SectionSubHeader>
            <SectionDescription>{dict.sections.articles.description}</SectionDescription>
          </div>

          <div className="max-w-4xl mx-auto mt-20 space-y-20">
            {posts.map((post: PostOverviewType) => (
              <PostOverview key={post.slug} post={post} dict={dict}></PostOverview>
            ))}
          </div>

          <div className="mt-20 w-full text-center text-emerald-500">
            <Link href={'/articles'}>{dict.btn.readMore}</Link>
          </div>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}

