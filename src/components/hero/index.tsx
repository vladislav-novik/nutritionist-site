import Link from "@/components/shared/Link";
import Section from "@/components/layout/section/Section";
import Image from "next/image";
import config from "@/app/app.config";
import Description from "../layout/section/Description";
import hero from "public/images/hero/hero.png";
import SocialLinks from '../shared/SocialLinks'

const component = () => {
  const { dict } = config;

  return (
    <Section id="hero" className="pb-12 sm:pb-16">
      <div
        className="relative mx-auto px-6
        sm:px-4 md:px-6 lg:px-8 xl:max-w-7xl"
      >
        <div className="mt-12 w-full md:mt-16">
          <div className="flex justify-center">
            <h1 className="text-brand text-[5rem] leading-[0.8] flex flex-col w-full
              sm:inline-block sm:text-6xl
              md:inline md:text-8xl md:leading-none md:w-fit md:-mr-12
              lg:text-9xl lg:leading-none lg:-mr-16
              xl:text-[10rem] xl:leading-[1.1]">
              <span className="font-heading inline-block sm:inline">
                Пита
                <span className="relative inline-flex justify-center  
                xl:leading-[0.8] 
                before:content-[''] before:absolute before:bg-hero-pattern 
                before:bg-[length:1rem_1rem]
                before:w-4 before:h-4 
                md:before:bg-[length:2.5rem_2.5rem]
                md:before:w-10 md:before:h-10">и</span>
                ся
              </span>
              <span className="font-cursive text-accent text-right z-10
                sm:relative sm:text-left sm:z-unset sm:top-2 sm:left-44
                md:top-16 md:right-12 md:left-auto
                lg:top-20 lg:right-16
                xl:top-24">
                Здорово
              </span>
              <br className="hidden sm:block" />
              <span className="font-content font-bold uppercase
                tracking-[0.8rem]
                sm:tracking-[0.5rem]
                md:tracking-[1rem]
                lg:tracking-[1.2rem]
                xl:tracking-[1.6rem]">
                Живи
              </span>
            </h1>
          </div>
          <Description className="mt-16 max-w-2xl mx-auto md:mt-20">
            {dict.sections.hero.content}
          </Description>
          <div className="mt-8 flex justify-center">
            <Link variant="primary" size="md" to="#features">
              {dict.buttons.learnMore}
            </Link>
          </div>
        </div>
        
      </div>
    </Section>
  );
};

export default component;
