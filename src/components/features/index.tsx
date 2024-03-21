import Features from "./features";
import SectionTitle from "@/components/shared/section/Title";
import SectionSubtitle from "@/components/shared/section/Subtitle";
import Section from "@/components/shared/section/Section";
import config from "@/app/app.config";
import Link from "../shared/Link";

const component = () => {
  const { dict } = config;

  return (
    <Section id="features" className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle>{dict.sections.features.title}</SectionTitle>
          <SectionSubtitle>{dict.sections.features.content}</SectionSubtitle>
        </div>
        <Features />
        <div className="mt-16 md:mt-20 flex justify-center">
          <Link to="#contact-me" size="md" variant="primary">
            {dict.buttons.wantToStart}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default component;
