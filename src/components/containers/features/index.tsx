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
          <div className="mx-auto max-w-2xl mb-16 lg:text-center">
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