import SectionDescription from '@/components/Section/Description';
import SectionHeader from '@/components/Section/Header';
import SectionSubHeader from '@/components/Section/Subheader';
import PlaceholderedImage from '@/components/shared/PlaceholderedImage'

type Props = {
  dict: any,
}

export default function Main({ dict }: Props) {
  return (
    // bg-green-200
    <section id="main" className="overflow-hidden py-24 sm:py-32 bg-gradient-to-tr from-green-100 to-white">
      {/* bg-[#efffff] */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <SectionHeader>{dict.sections.about.title}</SectionHeader>
              <SectionSubHeader>{dict.sections.about.subtitle}</SectionSubHeader>
              <SectionDescription>{dict.sections.about.description}</SectionDescription>
            </div>
          </div>
          
          <div>
            {/* @ts-expect-error Server Component */}
            <PlaceholderedImage
              src={'/images/patient-consulting-with-a-medical-professional.png'}
              width={1280}
              height={720}
              className="w-full h-auto sm:w-[42rem] md:-ml-4 lg:-ml-0"
              alt="Maryia Novik"
            ></PlaceholderedImage>
          </div>
          
        </div>
      </div>
    </section>
  );
}