import Features from "./features";
import SectionTitle from "@/components/layout/section/Title";
import SectionDescription from "@/components/layout/section/Description";
import config from "@/app/app.config";
import Link from "../shared/Link";
import Section from "../layout/section/Section";
import SectionContent from "../layout/section/Content";

const component = () => {
  const { dict, dict: { features } } = config;

  return (
    <Section id="features" className="py-12 sm:py-24">
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle animated>{dict.sections.features.title}</SectionTitle>
          <SectionDescription>
            {dict.sections.features.content}
          </SectionDescription>
        </div>
        <SectionContent animated delay={1}>
          <div
            className="w-full flex flex-col gap-y-16
              md:flex-row md:gap-x-4"
          >
            <Features features={features} />
          </div>

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
