import SectionDescription from '@/components/Section/Description';
import SectionHeader from '@/components/Section/Header';
import Section from '@/components/Section/Section';
import SectionSubHeader from '@/components/Section/Subheader';
import PlaceholderedImage from '@/components/shared/PlaceholderedImage'
import SectionAnimation from '@/components/Animation/SectionAnimation'
import Image from 'next/image'

type Props = {
  dict: any,
}

export default function About({ dict }: Props) {
  return (
    <Section id="about" className="bg-gradient-to-br from-green-100 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* <SectionAnimation> */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <SectionHeader>{dict.sections.about.title}</SectionHeader>
                <SectionSubHeader>{dict.sections.about.subtitle}</SectionSubHeader>
                <SectionDescription>{dict.sections.about.description}</SectionDescription>
              </div>
            </div>
          {/* </SectionAnimation> */}

          {/* <SectionAnimation> */}
            <div className="max-w-sm mx-auto px-2.5 lg:max-w-none">
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
                src={'/images/main.webp'}
                width={800}
                height={800}
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                alt="Maryia Novik"
                priority={true}
                /> */}
            </div>
          {/* </SectionAnimation> */}
        </div>
      </div>
    </Section>
  );
}