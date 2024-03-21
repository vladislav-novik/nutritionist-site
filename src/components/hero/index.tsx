import Section from "@/components/shared/section/Section";
import Image from "next/image";
import config from "@/app/app.config";
import Description from "../shared/section/Description";
import hero from "public/images/hero/hero.png";

const component = () => {
  const { dict } = config;

  return (
    <Section id="hero" className="relative overflow-hidden bg-white">
      <div
        className="xl:max-w-7xl mx-auto px-2
        sm:px-4 md:px-6 lg:px-8"
      >
        <div
          className="w-full 
          grid
          grid-cols-1 gap-y-2
          sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-4 sm:gap-y-4 
          md:grid-cols-12 md:grid-rows-9 md:gap-x-6 md:gap-y-6
          lg:gap-x-8 lg:gap-y-8
        "
        >
          <div
            className="bg-brand-blue rounded-3xl p-8
            order-0
            sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2
            md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-6 md:rounded-[2.5rem]
            lg:row-start-1 lg:row-end-5 lg:col-start-1 lg:col-end-6"
          >
            <h1
              className="font-heading text-center text-3xl font-bold leading-[1.1] text-brand 
                sm:text-4xl 
                lg:text-left lg:text-4xl
                xl:text-5xl"
            >
              {dict.sections.hero.title}
            </h1>
          </div>
          <div
            className="bg-brand-yellow rounded-3xl p-8
            order-2
            sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3
            md:row-start-5 md:row-end-10 md:col-start-1 md:col-end-6 md:rounded-[2.5rem]
            lg:row-start-5 lg:row-end-10 lg:col-start-1 lg:col-end-6"
          >
            <Description
              className="text-brand-darker lg:text-left"
            >
              {dict.sections.hero.content}
            </Description>
          </div>
          <div
            className="bg-brand-green rounded-3xl flex
            order-1
            sm:row-start-2 sm:row-end-4 sm:col-start-1 sm:col-end-3
            md:row-start-1 md:row-end-10 md:col-start-6 md:col-end-13 md:rounded-[2.5rem]
            lg:row-start-1 lg:row-end-10 lg:col-start-6 lg:col-end-13"
          >
            <Image
              src={hero}
              placeholder="blur"
              //sm:h-full object-contain lg:w-[520px] lg:h-auto xl:w-[650px] 2xl:w-[750px]
              className="max-w-none self-end w-full"
              // width={900}
              sizes="(min-width: 1024px) 60vw, (min-width: 1280px) 80vw, (min-width: 1536px) 100vw, 60vw"
              quality={100}
              alt="Hero image"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default component;
