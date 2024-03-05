import Link from '@/components/shared/Link'
import Section from '@/components/shared/section/Section'
import Image from "next/image";
import config from '@/app/app.config'
import Description from '../shared/section/Description'

const component = () => {
  const { dict } = config

  return (
    <Section id="hero" className="pt-6 overflow-hidden bg-white sm:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-center text-3xl font-bold leading-tight text-primary-dark md:text-left sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {dict.sections.hero.title}
            </h1>
            <Description>{dict.sections.hero.content}</Description>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link variant="primary" size="lg" to="#features" >How it works</Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 -mb-40 left-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="551" height="545" viewBox="0 0 551 545" fill="none">
                <path d="M551 224.656C551 373.677 434.779 545 285.54 545C136.3 545 15.3176 424.195 15.3176 275.174C15.3176 126.154 -52.379 0 96.8605 0C246.1 0 551 75.636 551 224.656Z" fill="#fbad9c"/>
              </svg>
            </div>
            <Image
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              alt=""
              width={450}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default component;
