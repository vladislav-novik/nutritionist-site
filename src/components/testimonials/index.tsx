import Carousel from "@/components/testimonials/Carousel";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import SectionTitle from "@/components/shared/section/Title";
import SectionSubHeader from "@/components/shared/section/Subheader";
import SectionDescription from "@/components/shared/section/Description";
import Section from "@/components/shared/section/Section";
import { Testimonial as TestimonialType } from "@/types/testimonial";
import Testimonial from './testimonial'
import config from "@/app/app.config";

type Props = {
  testimonials: TestimonialType[];
}

export const component = ({ testimonials }: Props) => {
  const { dict } = config

  return (
    <Section id="testimonials" className="bg-accent">
      <div className="relative w-full h-full">
        {/* <SectionAnimation> */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full text-left lg:text-center">
              <SectionTitle>{dict.sections.testimonials.title}</SectionTitle>
              <SectionDescription>{dict.sections.testimonials.content}</SectionDescription>
            </div>
            <div className="mx-auto max-w-7xl h-[28rem] lg:px-8 relative z-10">
              {/* <Carousel>
                {testimonials.map(testimonial => (
                  <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>
                ))}
              </Carousel> */}
            </div>
          </div>
        {/* </SectionAnimation> */}
        <ImQuotesLeft className="absolute max-w-[20%] text-emerald-200 opacity-40 top-10 left-10" size={200} />
        <ImQuotesRight className="absolute max-w-[20%] text-emerald-200 opacity-40 bottom-10 right-10" size={200} />
      </div>
    </Section>
  )
}

export default component