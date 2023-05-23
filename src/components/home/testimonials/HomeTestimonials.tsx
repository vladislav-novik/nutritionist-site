import Carousel from "@/components/Carousel";
import { getTestimonials } from "@/sanity/lib/testimonials"
import Testimonial from "./Testimonial";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { getDictionary } from "@/app/[lang]/dictionaries";
import SectionHeader from "@/components/Section/Header";
import SectionSubHeader from "@/components/Section/Subheader";
import SectionDescription from "@/components/Section/Description";
import Section from "@/components/Section/Section";
import SectionAnimation from "@/components/Animation/SectionAnimation";

type Props = {
  lang: string,
}

export default async function HomeTestimonials({ lang }: Props) {
  const testimonials = await getTestimonials();
  const dict = await getDictionary(lang)

  return (
    <Section id="testimonials" className="bg-white">
      <div className="relative w-full h-full">
        <SectionAnimation>
          <div className="mx-auto max-w-7xl py-20 lg:py-24 px-6 lg:px-8">
            <div className="w-full text-left lg:text-center">
              <SectionHeader>{dict.sections.testimonials.title}</SectionHeader>
              <SectionSubHeader>{dict.sections.testimonials.subtitle}</SectionSubHeader>
              <SectionDescription>{dict.sections.testimonials.description}</SectionDescription>
            </div>
            <div className="mx-auto max-w-7xl h-[28rem] lg:px-8 relative z-10">
              <Carousel>
                {testimonials.map(testimonial => (
                  <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>
                ))}
              </Carousel>
            </div>
          </div>
        </SectionAnimation>
        <ImQuotesLeft className="absolute max-w-[20%] text-green-200 opacity-40 top-10 left-10" size={200} />
        <ImQuotesRight className="absolute max-w-[20%] text-green-200 opacity-40 bottom-10 right-10" size={200} />
      </div>
    </Section>
  )
}