import PlaceholderedImage from '@/components/shared/PlaceholderedImage'

export const Main = () => {
  return (
    <section id="main" className="overflow-hidden bg-green-200  py-24 sm:py-32">
      {/* bg-[#efffff] */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>

            </div>
          </div>
          {/* @ts-expect-error Server Component */}
          <PlaceholderedImage
            src={'/images/patient-consulting-with-a-medical-professional.png'}
            width={1280}
            height={720}
            className="w-full h-auto sm:w-[42rem] md:-ml-4 lg:-ml-0"
            alt="Maryia Novik"
          ></PlaceholderedImage>
        </div>
      </div>
    </section>
  );
}