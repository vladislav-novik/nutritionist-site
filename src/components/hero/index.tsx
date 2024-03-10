import Link from '@/components/shared/Link'
import Section from '@/components/shared/section/Section'
import Image from "next/image";
import config from '@/app/app.config'
import Description from '../shared/section/Description'
import hero from 'public/images/hero/hero.png'
import heroDashboard from 'public/images/hero/hero-dashboard.png'

const component = () => {
  const { dict } = config

  return (
    <Section id="hero" className="overflow-hidden bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="py-6 sm:py-16">
            <h1 className="font-heading text-center text-3xl font-bold leading-tight text-brand md:text-left sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {dict.sections.hero.title}
            </h1>
            <Description className="text-brand-darker md:text-left">{dict.sections.hero.content}</Description>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link variant="primary" size="lg" to="#features">{dict.buttons.learnMore}</Link>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src={hero}
              className="absolute inset-0 h-full max-w-none object-contain"
              width={800}
              quality={100}
              alt=""
              priority
            />
            <Image
              src={heroDashboard}
              quality={100}
              alt=""
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default component;
