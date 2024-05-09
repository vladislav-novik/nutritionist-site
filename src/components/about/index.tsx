import config from "@/app/app.config";
import Section from "../layout/section/Section";
import SectionTitle from "../layout/section/Title";
import SectionSubtitle from "../layout/section/Subtitle";
import SectionContent from "../layout/section/Content";
import Image from "next/image";

const component = () => {
  const { dict } = config;

  return (
    <Section id="about" className="py-12 sm:py-24" animated>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-12 xl:gap-x-20">
          <div className="w-full">
            <Image
              className="aspect-[3/4] rounded-xl w-full object-cover"
              alt="test"
              src={"/images/hero/hero.png"}
              width={700}
              height={700}
            />
          </div>
          <div className="mx-auto">
            <SectionSubtitle>
              {dict.sections.howItWorks.title}
            </SectionSubtitle>
            <SectionTitle animated>
              {dict.sections.howItWorks.title}
            </SectionTitle>
            <SectionContent animated delay={1}>
              {dict.sections.howItWorks.content}
            </SectionContent>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default component;
