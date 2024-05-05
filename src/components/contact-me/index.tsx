import Section from '@/components/layout/section/Section';
import ContactDetails from './contact-details'
import ContactImage from './contact-image'
import config from "@/app/app.config";


export default function ContactUs() {
  const { dict } = config;

  return (
    <Section id="contacts" className="overflow-hidden mx-2 my-12 sm:my-24" animated>
      <div className="bg-brand-dark rounded-3xl grid grid-cols-1 max-w-7xl mx-auto pt-12
        sm:pt-24
        lg:grid-cols-2 lg:rounded-[2.5rem]">
        <div className="px-8 max-w-md mx-auto text-center relative lg:max-w-lg lg:text-left">
          <ContactDetails />
        </div>
        <ContactImage className="mt-12 lg:mt-0" />
      </div>
    </Section>
  );
}
