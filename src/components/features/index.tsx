import Features from "./features";
import SectionTitle from "@/components/shared/section/Title";
import SectionSubtitle from "@/components/shared/section/Subtitle";
import Section from "@/components/shared/section/Section";
import config from "@/app/app.config";
import Link from "../shared/Link";

const component = () => {
  const { dict } = config;

  return (
    <Section id="features" className="bg-brand-lightest py-12 sm:py-24">
      {/* <SectionAnimation> */}
      <div className="mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle>{dict.sections.features.title}</SectionTitle>
          {/* <SectionSubHeader>{dict.sections.services.subtitle}</SectionSubHeader> */}
          <SectionSubtitle>{dict.sections.features.content}</SectionSubtitle>
        </div>
        <div className="mx-auto px-4 flex justify-center sm:px-6 lg:px-8">
          <Features />
        </div>
        <div className="mt-16 md:mt-20 flex justify-center">
          <Link to="#contact-me" size="md" variant="primary">
            {dict.buttons.wantToStart}
          </Link>
        </div>
      </div>
      {/* </SectionAnimation> */}
    </Section>
  );
};

export default component;
