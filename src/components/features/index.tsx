import Features from "./features";
import SectionTitle from "@/components/layout/section/Title";
import SectionSubtitle from "@/components/layout/section/Subtitle";
import config from "@/app/app.config";
import Link from "../shared/Link";
import Section from '../layout/section/Section'
import SectionContent from '../layout/section/Content'

const component = () => {
  const { dict } = config;

  return (
    <Section id="features" className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle animated>{dict.sections.features.title}</SectionTitle>
          <SectionSubtitle animated delay={0.5}>{dict.sections.features.content}</SectionSubtitle>
        </div>
        <SectionContent animated delay={1}>
          <Features />
          <div className="mt-16 md:mt-20 flex justify-center">
            <Link to="#contacts" size="md" variant="primary">
              {dict.buttons.wantToStart}
            </Link>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
};

export default component;
