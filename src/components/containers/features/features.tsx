import { getServices } from '@/sanity/lib/services';
import Feature from './feature';

type Props = {
  dict: any,
}

export default async function Features({dict}: Props) {
  // const services = await getServices();
  const services = [{
    _id: '1',
    name: 'Service 1',
    description: 'Service 1 description',
    image: null,
  }, {
    _id: '2',
    name: 'Service 2',
    description: 'Service 2 description',
    image: null,
  }, {
    _id: '3',
    name: 'Service 3',
    description: 'Service 3 description',
    image: null,
  }, {
    _id: '4',
    name: 'Service 4',
    description: 'Service 4 description',
    image: null,
  }, {
    _id: '5',
    name: 'Service 5',
    description: 'Service 5 description',
    image: null,
  }, {
    _id: '6',
    name: 'Service 6',
    description: 'Service 6 description',
    image: null,
  }];

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-24">
        {services.map((service) => (
          <Feature key={service._id} service={service}></Feature>
        ))}
      </div>
    </div>
  )
}