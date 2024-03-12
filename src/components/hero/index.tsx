import Link from "@/components/shared/Link";
import Section from "@/components/shared/section/Section";
import Image from "next/image";
import config from "@/app/app.config";
import Description from "../shared/section/Description";
import hero from "public/images/hero/hero.png";

const component = () => {
  const { dict } = config;

  return (
    <Section id="hero" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl px-4 mx-auto pt-6 md:pt-10 lg:pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:items-center xl:gap-x-16">
          <div className="pb-6 md:pb-10 lg:pb-16">
            <h1 className="font-heading text-center text-3xl font-bold leading-tight text-brand sm:text-4xl lg:text-left lg:text-4xl lg:leading-none xl:text-5xl xl:leading-[1.1]">
              {dict.sections.hero.title}
            </h1>
            <Description className="text-brand-darker lg:text-left">
              {dict.sections.hero.content}
            </Description>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link variant="primary" size="lg" to="#features">
                {dict.buttons.learnMore}
              </Link>
            </div>
          </div>
          <div className="w-full h-full flex justify-center lg:items-end">
            <Image
              src={hero}
              className="max-w-none w-full h-full object-contain lg:w-[520px] lg:h-auto xl:w-[650px] 2xl:w-[750px]"
              width={900}
              quality={100}
              alt=""
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default component;
