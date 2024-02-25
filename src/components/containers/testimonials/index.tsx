import Carousel from "@/components/containers/testimonials/Carousel";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import SectionTitle from "@/components/shared/section/Title";
import SectionSubHeader from "@/components/shared/section/Subheader";
import SectionDescription from "@/components/shared/section/Description";
import Section from "@/components/shared/section/Section";
import { Testimonial as TestimonialType } from "@/types/testimonial";
import Testimonial from './testimonial'

type Props = {
  dict: any;
  testimonials: TestimonialType[];
}

export const component = ({ dict, testimonials }: Props) => {
  
  return (
    <Section id="testimonials" className="bg-white">
      <div className="relative w-full h-full">
        {/* <SectionAnimation> */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full text-left lg:text-center">
              <SectionTitle>{dict.sections.testimonials.title}</SectionTitle>
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
        {/* </SectionAnimation> */}
        <ImQuotesLeft className="absolute max-w-[20%] text-emerald-200 opacity-40 top-10 left-10" size={200} />
        <ImQuotesRight className="absolute max-w-[20%] text-emerald-200 opacity-40 bottom-10 right-10" size={200} />
      </div>
    </Section>
  )
}

export default component