import Section from "@/components/shared/section/Section";
import ContactImage from "./contact-image";
import Form from "./form";
import SectionTitle from "@/components/shared/section/Title";
import SectionSubtitle from "@/components/shared/section/Subtitle";
import config from "@/app/app.config";
import Contacts from "./contacts";
import SocialLinks from "../shared/SocialLinks";

export default function ContactUs() {
  const { dict } = config;

  return (
    <Section id="contact-me" className="pt-12 sm:pt-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle>{dict.sections.contactMe.title}</SectionTitle>
          {/* <SectionSubHeader>{dict.sections.services.subtitle}</SectionSubHeader> */}
          <SectionSubtitle>{dict.sections.contactMe.content}</SectionSubtitle>
        </div>
        <div
          className="relative grid grid-cols-1 gap-y-6
        md:grid-cols-2 md:grid-rows-6 md:gap-x-4 md:gap-y-4
        lg:grid-cols-3 lg:grid-rows-9 lg:gap-x-4 lg:gap-y-4
        xl:gap-x-8 xl:gap-y-8"
        >
          <div
            className="bg-brand-pink p-8 rounded-3xl
          md:rounded-[2.5rem] md:col-span-1 md:row-start-1 md:row-end-3
          lg:col-span-1 lg:row-start-1 lg:row-end-8"
          >
            <Contacts />
          </div>
          <div
            className="bg-brand-blue p-8 rounded-3xl
            md:rounded-[2.5rem] md:col-span-1 md:row-start-1 md:row-end-2
            lg:col-span-1 lg:row-start-8 lg:row-end-10"
          >
            <div className="w-full flex justify-around">
              <SocialLinks size={32} color="blue"></SocialLinks>
            </div>
          </div>
          <div
            className="bg-brand-green p-8 rounded-3xl
          md:rounded-[2.5rem] md:col-span-1 md:row-start-3 md:row-end-7
          lg:col-span-1 lg:row-start-1 lg:row-end-10"
          >
            <Form />
          </div>
          <div
            className="bg-brand-yellow pb-0 p-8 rounded-3xl
          md:rounded-[2.5rem] md:col-span-1 md:row-start-2 md:row-end-7
          lg:col-span-1 lg:row-start-1 lg:row-end-10"
          >
            <div className="w-ful h-full flex items-end">
              <ContactImage />
            </div>
          </div>

          {/* <div className="px-8 max-w-md mx-auto text-center relative lg:max-w-lg lg:text-left">
          <ContactDetails />
        </div>
        <ContactImage className="mt-12 lg:mt-0" /> */}
        </div>
      </div>
    </Section>
  );
}
