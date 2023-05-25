import { Service } from "@/types/service";
import { AiFillHeart } from "react-icons/ai";

type Props = {
  service: Service;
};

export default function ServiceOverview({ service }: Props) {
  return (
    <div key={service.name} className="relative pl-[5rem]">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex w-16 h-16 items-center justify-center rounded-full bg-green-200">
          {/* <PlaceholderedImage
            src={service.image}
            alt="alt"
            width={100}
            height={100}
          ></PlaceholderedImage> */}
          <AiFillHeart className="text-green-500 w-9 h-9" />
        </div>
        {service.name}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-500">{service.description}</dd>
    </div>
  );
}