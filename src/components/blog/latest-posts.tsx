import { PostOverview as PostOverviewType } from "@/types/post";
import SectionTitle from "@/components/layout/section/Title";
import SectionSubtitle from "@/components/layout/section/Subtitle";
import Section from "@/components/layout/section/Section";
import SectionContent from "@/components/layout/section/Content"
import config from "@/app/app.config";
import Link from "@/components/shared/Link";
import Posts from "./posts";

type Props = {
  posts: PostOverviewType[];
};

const component = ({ posts }: Props) => {
  const { dict } = config;

  return (
    <Section id="articles" className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle animated>{dict.sections.blog.title}</SectionTitle>
          <SectionSubtitle animated delay={0.5}>
            {dict.sections.blog.content}
          </SectionSubtitle>
        </div>

        <SectionContent animated delay={1}>
          <div className="mt-16 md:mt-20">
            <Posts posts={posts} />
          </div>

          <div className="mt-16 md:mt-20 flex justify-center">
            <Link to="/articles" size="md" variant="primary">
              {dict.buttons.readMore}
            </Link>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
};

export default component;
