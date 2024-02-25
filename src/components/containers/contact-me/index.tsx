import Section from '@/components/shared/section/Section';
import Image from 'next/image';
import ContactDetails from './contact-details'

type Props = {
  dict: any,
}

export default function ContactUs({ dict }: Props) {
  return (
    <Section id="contact-me" className="bg-[#154a2c] relative pt-20">
      <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-2 relative">
        {/* <SectionAnimation> */}
        <ContactDetails />
        {/* </SectionAnimation> */}
        <div className="px-6 relative max-w-3xl lg:max-w-2xl lg:mx-0 lg:px-8">
          <Image className="mx-auto" src="/images/phone-mockup.svg" width={500} height={700} alt="" />
        </div>
      </div>
    </Section>
  )
}