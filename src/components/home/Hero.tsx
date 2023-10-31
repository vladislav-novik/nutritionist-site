import SectionDescription from '@/components/Section/Description';
import SectionHeader from '@/components/Section/Header';
import Section from '@/components/Section/Section';
import SectionSubHeader from '@/components/Section/Subheader';
import PlaceholderedImage from '@/components/shared/PlaceholderedImage'
import SectionAnimation from '@/components/Animation/SectionAnimation'
import Image from 'next/image'
import Pear from '../Backgrounds/Broccoli';
import Broccoli from '../Backgrounds/Broccoli';

type Props = {
  dict: any,
}

export default function Hero({ dict }: Props) {
  return (
    <Section id="about" className="bg-gradient-to-br from-emerald-200 to-emerald-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-none gap-y-16 sm:gap-y-20 lg:max-w-2xl">
          <div className="lg:pr-8 lg:pt-4">
              <h1 className="text-lg font-semibold leading-7 text-emerald-700">{dict.sections.hero.title}</h1>
              <SectionSubHeader fontSizeClasses="text-2xl sm:text-3xl md:text-4xl">{dict.sections.hero.subtitle}</SectionSubHeader>
              <SectionDescription>{dict.sections.hero.description}</SectionDescription>
          </div>
          
        </div>
        <div className="float-right max-w-sm mx-auto px-2.5 top-0 right-0">

{/* @ts-expect-error Server Component */}
            <PlaceholderedImage
                src={'/images/main.webp'}
                width={800}
                height={800}
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                alt="Maryia Novik"
                priority={true}
              ></PlaceholderedImage>
            {/* <Image
              src={'/images/doctor.png'}
              sizes=''
              width={1200}
              height={800}
              quality={100}
              className="aspect-square rounded-2xl bg-tranparent object-cover z-10"
              alt="Maryia Novik"
              priority={true}
            /> */}

            {/* <div className='absolute inset-0'>
              <Broccoli className="h-36 w-36 text-emerald-300/50" traceStroke="#34d399" />

              </div> */}
          </div>
      </div>
    </Section>
  );
}