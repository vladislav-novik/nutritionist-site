import Section from "@/components/layout/section/Section";
import SectionTitle from "@/components/layout/section/Title";
import SectionDescription from "@/components/layout/section/Description";
import Steps from "./steps";
import SectionContent from "@/components/layout/section/Content";
import config from "@/app/app.config";

const component = () => {
  const { dict } = config;

  return (
    <Section id="steps" className="py-12 sm:py-24" animated>
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle animated>{dict.sections.howItWorks.title}</SectionTitle>
          <SectionDescription>{dict.sections.howItWorks.content}</SectionDescription>
        </div>
        <SectionContent animated delay={1}>
          <Steps />
        </SectionContent>
      </div>
    </Section>
  );
};

export default component;
