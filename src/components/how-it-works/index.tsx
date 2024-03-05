import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/section/Title";
import SectionSubtitle from "@/components/shared/section/Subtitle";
import Steps from "./steps";
import config from "@/app/app.config";

const component = () => {
  const { dict } = config;

  return (
    <Section id="steps" className="py-16 sm:py-24">
      {/* <SectionAnimation> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mx-auto max-w-2xl mb-12 text-center md:mb-10">
          <SectionTitle>{dict.sections.howItWorks.title}</SectionTitle>
          <SectionSubtitle>{dict.sections.howItWorks.content}</SectionSubtitle>
        </div>
        <Steps />
      </div>
      {/* </SectionAnimation> */}
    </Section>
  );
};

export default component;
