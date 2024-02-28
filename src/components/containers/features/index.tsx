import Features from './features';
import SectionTitle from '@/components/shared/section/Title';
import SectionDescription from '@/components/shared/section/Description';
import Section from '@/components/shared/section/Section';

type Props = {
  dict: any,
}

const component = ({ dict }: Props) => {
  return (
    <Section id="services" className="bg-white py-16 sm:py-24">
      {/* <SectionAnimation> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTitle>{dict.sections.services.title}</SectionTitle>
            {/* <SectionSubHeader>{dict.sections.services.subtitle}</SectionSubHeader> */}
            <SectionDescription>{dict.sections.services.description}</SectionDescription>
          </div>
          <Features dict={dict}></Features>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}

export default component