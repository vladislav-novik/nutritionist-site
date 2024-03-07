import Features from './features';
import SectionTitle from '@/components/shared/section/Title';
import SectionSubtitle from '@/components/shared/section/Subtitle';
import Section from '@/components/shared/section/Section';
import config from '@/app/app.config'


const component = () => {
  const { dict } = config

  return (
    <Section id="features" className="bg-white py-16 sm:py-24">
      {/* <SectionAnimation> */}
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTitle>{dict.sections.features.title}</SectionTitle>
            {/* <SectionSubHeader>{dict.sections.services.subtitle}</SectionSubHeader> */}
            <SectionSubtitle>{dict.sections.features.content}</SectionSubtitle>
          </div>
          <Features></Features>
        </div>
      {/* </SectionAnimation> */}
    </Section>
  )
}

export default component