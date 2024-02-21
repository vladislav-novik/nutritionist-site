import Features from './features';
import SectionHeader from '@/components/shared/section/Header';
import SectionSubHeader from '@/components/shared/section/Subheader';
import SectionDescription from '@/components/shared/section/Description';
import Section from '@/components/shared/section/Section';

type Props = {
  dict: any,
}

const component = ({ dict }: Props) => {
  return (
    <Section id="services" className="bg-zinc-100">
      {/* <SectionAnimation> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <SectionHeader>{dict.sections.services.title}</SectionHeader>
            <SectionSubHeader>{dict.sections.services.subtitle}</SectionSubHeader>
            <SectionDescription>{dict.sections.services.description}</SectionDescription>
          </div>
          <Features dict={dict}></Features>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}

export default component