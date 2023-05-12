import { Service } from "@/types/service";
import PlaceholderedImage from "@/components/shared/PlaceholderedImage";

type PropsType = {
  service: Service;
};

export default function ServiceOverview({ service }: PropsType) {
  return (
    <div key={service.name} className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          {/* @ts-expect-error Server Component */}
          <PlaceholderedImage
            src={service.image}
            alt="alt"
            width={100}
            height={100}
          ></PlaceholderedImage>
        </div>
        {service.name}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
    </div>
  );
}