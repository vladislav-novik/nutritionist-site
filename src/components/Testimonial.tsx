import { Testimonial } from "@/types/testimonial";
import { FaUserCircle } from "react-icons/fa";
import Image from 'next/image'
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  testimonial: Testimonial;
};

export default function Testimonial({ testimonial }: Props) {
  return (
    <figure
      className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10 
                w-3/4 md:w-5/6 mx-auto">
      <div className="col-span-2 lg:col-start-1 lg:row-start-2">
        <blockquote className="text-xl font-semibold leading-8 text-gray-600 sm:text-2xl sm:leading-9">
          <p>{testimonial.content}</p>
        </blockquote>
      </div>
      <div className="col-end-1 w-16 lg:row-span-4 lg:w-52">
      { testimonial.image && testimonial.image.ref ? (
        <Image
          placeholder="blur"
          blurDataURL={testimonial.image.lquip}
          src={urlForImage(testimonial.image.ref).url()}
          alt="alt"
          className="mx-auto h-auto rounded-xl"
          width={200}
          height={200}
        />) : (
          <div className="mx-auto h-auto rounded-xl">
            <FaUserCircle className="mx-auto w-full h-auto text-green-300 opacity-80" />
          </div>
        )}
        
      </div>
      <figcaption className="text-base lg:col-start-1 lg:row-start-3">
        <div className="font-semibold text-gray-700">{testimonial.author}</div>
        <div className="text-gray-600">{testimonial.reason}</div>
      </figcaption>
    </figure>
  );
}