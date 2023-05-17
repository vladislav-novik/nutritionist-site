import { getDictionary } from '@/app/[lang]/dictionaries';
import ServicesOverview from './ServicesOverview';

type Props = {
  lang: string,
}

export default async function HomeServices({ lang }: Props) {
  const dict = await getDictionary(lang)

  return (
    // bg-[#f0bcd2]
    <section id="services" className="py-24 sm:py-32  bg-[#efffff]">
      {/* #bcf0da */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{dict.sections.services.title}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {dict.sections.services.subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {dict.sections.services.description}
          </p>
        </div>
        {/* @ts-expect-error Server Component */}
        <ServicesOverview lang={lang}></ServicesOverview>
      </div>
    </section>
  )
}