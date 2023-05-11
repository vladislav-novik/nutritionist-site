import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { getServices } from '../../../../sanity/lib/services';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';

export default async function Services() {
  const services = await getServices();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
          pulvinar et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {services.map((service) => (
            <div key={service.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Image 
                    src={urlForImage(service.image)?.width(100).height(100).url() ?? ''}
                    alt="alt"
                    placeholder="blur"></Image>
                </div>
                {service.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}