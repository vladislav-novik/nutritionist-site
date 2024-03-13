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
          <div className="sm:pb-6 md:pb-10 lg:pb-16">
            <h1 className="font-heading text-center text-3xl font-bold leading-[1.1] text-brand 
              sm:text-4xl 
              lg:text-left lg:text-4xl
              xl:text-5xl">
              {dict.sections.hero.title}
            </h1>
            <Description className="hidden mt-6 text-brand-darker
              sm:block
              lg:text-left lg:mt-8">
              {dict.sections.hero.content}
            </Description>
            <div className="hidden mt-6
              sm:flex sm:justify-center
              lg:mt-8 lg:justify-start">
              <Link variant="primary" size="lg" to="#features">
                {dict.buttons.learnMore}
              </Link>
            </div>
          </div>
          <div className="mb-12 mt-6 w-full 
            sm:mt-0 sm:mb-0 sm:h-full 
            lg:flex lg:items-end">
            <Image
              src={hero}
              //sm:h-full object-contain lg:w-[520px] lg:h-auto xl:w-[650px] 2xl:w-[750px]
              className="max-w-none w-full"
              // width={900}
              sizes="(min-width: 1024px) 60vw, (min-width: 1280px) 80vw, (min-width: 1536px) 100vw, 50vw"
              quality={100}
              alt="Hero image"
              priority
            />
            <div className="sm:hidden">
              <Description className="mt-6 text-brand-darker 
                lg:text-left lg:mt-8">
                {dict.sections.hero.content}
              </Description>
              <div className="mt-6 flex justify-center
                lg:mt-8 lg:justify-start">
                <Link variant="primary" size="lg" to="#features">
                  {dict.buttons.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default component;
