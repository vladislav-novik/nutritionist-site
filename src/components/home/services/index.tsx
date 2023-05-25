import ServicesOverview from './ServicesOverview';
import SectionHeader from '@/components/Section/Header';
import SectionSubHeader from '@/components/Section/Subheader';
import SectionDescription from '@/components/Section/Description';
import Section from '@/components/Section/Section';
import SectionAnimation from '@/components/Animation/SectionAnimation';

type Props = {
  dict: any,
}

export default function HomeServices({ dict }: Props) {
  return (
    <Section id="services" className="bg-zinc-100">
      {/* <SectionAnimation> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <SectionHeader>{dict.sections.services.title}</SectionHeader>
            <SectionSubHeader>{dict.sections.services.subtitle}</SectionSubHeader>
            <SectionDescription>{dict.sections.services.description}</SectionDescription>
          </div>
          {/* @ts-expect-error Server Component */}
          <ServicesOverview dict={dict}></ServicesOverview>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}