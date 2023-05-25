import ContactForm from './form';
import Section from '@/components/Section/Section';
import SectionAnimation from '@/components/Animation/SectionAnimation';
import Background from './Background';
import Image from 'next/image'

type Props = {
  dict: any,
}

export default function ContactUs({ dict }: Props) {
  return (
    <Section id="contact-me" className="bg-white relative">
      <div className="absolute inset-0 w-full h-full">
        {/* <Background /> */}
        {/* <Image src={'/images/radiant-gradient.svg'} fill={true} className="object-cover object-left-top" alt='' /> */}
      </div>
      <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-2 relative">
        <div className="px-6 relative lg:px-8">
          <div className="max-w-xl mx-auto lg:max-w-lg lg:mx-0">
            {/* <SectionAnimation> */}
              <h2 className="text-gray-900 -tracking-tight font-bold text-3xl">{dict.sections.contactMe.title}</h2>
              <p className="text-gray-600 leading-8 text-lg mt-5">
                {dict.sections.contactMe.description}
              </p>
              <dl className="text-gray-600 leading-7 text-base mt-10">
                <div className="flex gap-x-4 space-y-4">
                  <dt className="flex-none">
                    <span className="sr-only"></span>
                  </dt>
                  <dd>
                    +1 (555) 123-4567
                  </dd>
                </div>
                <div className="flex gap-x-4 space-y-4">
                  <dt className="flex-none">
                    <span className="sr-only"></span>
                  </dt>
                  <dd>
                    example@example.com
                  </dd>
                </div>
              </dl>
            {/* </SectionAnimation> */}
          </div>
        </div>
        {/* <SectionAnimation> */}
        {/* @ts-expect-error Server Component */}
          <ContactForm></ContactForm>
        {/* </SectionAnimation> */}
      </div>
    </Section>
  )
}