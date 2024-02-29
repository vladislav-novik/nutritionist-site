import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/section/Title";
import SectionDescription from "@/components/shared/section/Description";
import Steps from "./steps";

const component = () => {
  return (
    <Section id="steps" className="bg-[#fbf8e9] py-16 sm:py-24">
      {/* <SectionAnimation> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mx-auto max-w-2xl mb-16 text-center">
          <SectionTitle>How it Works</SectionTitle>
          <SectionDescription>
            We believe there&apos;s power in finding balance. Sunnyside helps
            you ease into mindful drinking at your own place
          </SectionDescription>
        </div>
        <Steps />
      </div>
      {/* </SectionAnimation> */}
    </Section>
  );
};

export default component;
