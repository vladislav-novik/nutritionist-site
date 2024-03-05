import { PostOverview as PostOverviewType } from "@/types/post";
import PostOverview from "./Post";
import SectionTitle from "@/components/shared/section/Title";
import SectionSubtitle from "@/components/shared/section/Subtitle";
import Section from "@/components/shared/section/Section";
import config from "@/app/app.config";
import Link from '@/components/shared/Link'

type Props = {
  posts: PostOverviewType[]
}

export default function HomePosts({ posts }: Props) {
  const { dict } = config;

  const bg = {
    // 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
    background: 'linear-gradient(90deg, #5DC3FB -0.55%, #ffe536 99.34%)'
  };
  
  return (
    <Section id="articles" className="py-16 sm:py-24">
      {/* <SectionAnimation> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTitle>{dict.sections.blog.title}</SectionTitle>
            <SectionSubtitle>{dict.sections.blog.content}</SectionSubtitle>
          </div>

          <div className="relative max-w-md mx-auto mt-8 sm:mt-12 md:max-w-none">
            <div className="absolute inset-x-16 -inset-y-2">
              <div className="w-full h-full mx-auto opacity-30 blur-lg" style={bg}></div>
            </div>
            <div className="relative bg-white overflow-hidden grid grid-cols-1 rounded-2xl shadow-xl divide-y
              md:grid-cols-3 md:divide-x md:divide-y-0">
              {posts.map((post: PostOverviewType) => (
                <PostOverview key={post.slug} post={post}></PostOverview>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link to='/articles' size='md' variant='primary'>{dict.buttons.readMore}</Link>
          </div>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}

