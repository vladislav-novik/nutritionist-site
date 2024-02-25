import SectionDescription from '@/components/shared/section/Description';
import SectionTitle from '@/components/shared/section/Title';
import Section from '@/components/shared/section/Section';
import SectionSubHeader from '@/components/shared/section/Subheader';
import SectionAnimation from '@/components/shared/animation/SectionAnimation'
import Image from 'next/image'

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

            <Image
              src={'/images/doctor.png'}
              width={800}
              height={800}
              quality={100}
              className="aspect-square rounded-2xl bg-tranparent object-cover z-10"
              alt="Maryia Novik"
              priority={true}
            />
          </div>
      </div>
    </Section>
  );
}