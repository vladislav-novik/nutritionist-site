import { PostOverview as PostOverviewType } from "@/types/post";
import SectionTitle from "@/components/shared/section/Title";
import SectionSubtitle from "@/components/shared/section/Subtitle";
import Section from "@/components/shared/section/Section";
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
      {/* <SectionAnimation> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle>{dict.sections.blog.title}</SectionTitle>
          <SectionSubtitle>{dict.sections.blog.content}</SectionSubtitle>
        </div>

        <div className="mt-16 md:mt-20">
          <Posts posts={posts} />
        </div>

        <div className="mt-16 md:mt-20 flex justify-center">
          <Link to="/articles" size="md" variant="primary">
            {dict.buttons.readMore}
          </Link>
        </div>
      </div>
      {/* </SectionAnimation> */}
    </Section>
  );
};

export default component;
