import { getServices } from '@/sanity/lib/services';
import Feature from './feature';

type Props = {
  dict: any,
}

export default async function Features({dict}: Props) {
  const services = await getServices();

  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {services.map((service) => (
          <Feature key={service._id} service={service}></Feature>
        ))}
      </dl>
    </div>
  )
}