import Section from '@/components/shared/section/Section';
import ContactDetails from './contact-details'
import ContactImage from './contact-image'


export default function ContactUs() {
  return (
    <Section id="contact-me" className="bg-primary relative pt-20">
      <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-2 relative">
        {/* <SectionAnimation> */}
        <div className="px-8 max-w-md mx-auto text-center relative lg:text-left">
          <ContactDetails />
        </div>
        <ContactImage className="mt-12 lg:mt-0" />
      </div>
    </Section>
  )
}