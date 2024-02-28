import Section from '@/components/shared/section/Section';
import ContactDetails from './contact-details'
import ContactImage from './contact-image'

type Props = {
  dict: any,
}

export default function ContactUs({ dict }: Props) {
  return (
    <Section id="contact-me" className="bg-[#154a2c] relative pt-20">
      <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-2 relative">
        {/* <SectionAnimation> */}
        <ContactDetails />
        <ContactImage className="mt-12 lg:mt-0" />
      </div>
    </Section>
  )
}