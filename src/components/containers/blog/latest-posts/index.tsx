import { PostOverview as PostOverviewType } from "@/types/post";
import PostOverview from "./Post";
import SectionTitle from "@/components/shared/section/Title";
import SectionSubHeader from "@/components/shared/section/Subheader";
import SectionDescription from "@/components/shared/section/Description";
import Link from "next/link";
import Section from "@/components/shared/section/Section";
import MorePostsButton from './more-posts-button'

type Props = {
  dict: any;
  posts: PostOverviewType[]
}

export default function HomePosts({ dict, posts }: Props) {
  const bg = {
    // 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
    background: 'linear-gradient(90deg, #5DC3FB -0.55%, #ffe536 99.34%)'
  };
  
  return (
    <Section id="articles" className="bg-[#fbf8e9] py-16 sm:py-24">
      {/* <SectionAnimation> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTitle>{dict.sections.articles.title}</SectionTitle>
            <SectionDescription>{dict.sections.articles.description}</SectionDescription>
          </div>

          <div className="relative max-w-md mx-auto mt-8 sm:mt-12 md:max-w-none">
            <div className="absolute inset-x-16 -inset-y-2">
              <div className="w-full h-full mx-auto opacity-30 blur-lg" style={bg}></div>
            </div>
            <div className="relative bg-white overflow-hidden grid grid-cols-1 rounded-2xl shadow-xl divide-y
              md:grid-cols-3 md:divide-x md:divide-y-0">
              {posts.map((post: PostOverviewType) => (
                <PostOverview key={post.slug} post={post} dict={dict}></PostOverview>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <MorePostsButton />
          </div>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}

