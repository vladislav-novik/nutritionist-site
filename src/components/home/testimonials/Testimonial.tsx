import DefaultPlaceholderedImage from "@/components/shared/DefaultPlaceholderedImage";
import { Testimonial } from "@/types/testimonial";

type PropsType = {
  testimonial: Testimonial;
};

export default function Testimonial({ testimonial }: PropsType) {
  return (
    <figure
      className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10 
                w-3/4 md:w-5/6 mx-auto">
      <div className="col-span-2 lg:col-start-1 lg:row-start-2">
        <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>“{testimonial.content}”</p>
        </blockquote>
      </div>
      <div className="col-end-1 w-16 lg:row-span-4 lg:w-52">
        <DefaultPlaceholderedImage
          src={testimonial.image}
          alt="alt"
          className="mx-auto h-auto rounded-xl"
          width={200}
          height={200}
        />
      </div>
      <figcaption className="text-base lg:col-start-1 lg:row-start-3">
        <div className="font-semibold text-gray-900">{testimonial.author}</div>
        <div className="text-gray-600">{testimonial.reason}</div>
      </figcaption>
    </figure>
  );
}