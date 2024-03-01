import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/section/Title";
import SectionDescription from "@/components/shared/section/Description";
import Steps from "./steps";
import config from "@/app/app.config";

const component = () => {
  const { dict } = config;

  return (
    <Section id="steps" className="py-16 sm:py-24">
      {/* <SectionAnimation> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mx-auto max-w-2xl mb-16 text-center">
          <SectionTitle>{dict.sections.howItWorks.title}</SectionTitle>
          <SectionDescription>{dict.sections.howItWorks.content}</SectionDescription>
        </div>
        <Steps />
      </div>
      {/* </SectionAnimation> */}
    </Section>
  );
};

export default component;
