import ServicesOverview from './ServicesOverview';

export default function HomeServices() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f0bcd2] ">
      {/* #bcf0da */}
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
        {/* @ts-expect-error Server Component */}
        <ServicesOverview></ServicesOverview>
      </div>
    </section>
  )
}