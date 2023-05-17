import { getDictionary } from '@/app/[lang]/dictionaries';
import PlaceholderedImage from '@/components/shared/PlaceholderedImage'

type Props = {
  lang: string,
}

export default async function Main({ lang }: Props) {
  const dict = await getDictionary(lang);

  return (
    // bg-green-200
    <section id="main" className="overflow-hidden py-24 sm:py-32 bg-gradient-to-tr from-green-100 to-white">
      {/* bg-[#efffff] */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">{dict.sections.main.title}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dict.sections.main.subtitle}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {dict.sections.main.description}
              </p>

            </div>
          </div>
          
          <div>
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
      </div>
    </section>
  );
}