import { getServices } from '@/sanity/lib/services';
import Service from './ServiceOverview';

type Props = {
  dict: any,
}

export default async function ServicesOverview({dict}: Props) {
  const services = await getServices();

  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </dl>
    </div>
  )
}