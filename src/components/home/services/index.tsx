import { getDictionary } from '@/app/[lang]/dictionaries';
import ServicesOverview from './ServicesOverview';
import SectionHeader from '@/components/Section/Header';
import SectionSubHeader from '@/components/Section/Subheader';
import SectionDescription from '@/components/Section/Description';

type Props = {
  lang: string,
}

export default async function HomeServices({ lang }: Props) {
  const dict = await getDictionary(lang)

  return (
    // bg-[#f0bcd2]
    <section id="services" className="py-24 sm:py-32 bg-white">
      {/* #bcf0da */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionHeader>{dict.sections.services.title}</SectionHeader>
          <SectionSubHeader>{dict.sections.services.subtitle}</SectionSubHeader>
          <SectionDescription>{dict.sections.services.description}</SectionDescription>
        </div>
        {/* @ts-expect-error Server Component */}
        <ServicesOverview lang={lang}></ServicesOverview>
      </div>
    </section>
  )
}