import { getDictionary } from '@/app/[lang]/dictionaries';
import ContactForm from './form';

type Props = {
  lang: string,
}

export default async function ContactUs({ lang }: Props) {
  const dict = await getDictionary(lang)

  return (
    <section id="contact-me" className="bg-[#ffefff] px-6 py-24 sm:py-32 lg:px-8">
      <div className="ring-1 grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-2">
        <div className="pt-24 pb-20 px-6 relative sm:pt-32 lg:py-48 lg:px-8 lg:static">
          <div className="max-w-xl mx-auto lg:max-w-lg lg:mx-0">
            <h2 className="text-gray-900 -tracking-tight font-bold text-3xl">{dict.sections.contactMe.title}</h2>
            <p className="text-gray-600 leading-8 text-lg mt-5">
            {dict.sections.contactMe.description}
            </p>
            <dl className="text-gray-600 leading-7 text-base mt-10">
              <div className="flex gap-x-4 space-y-4">
                <dt className="flex-none">
                  <span className="sr-only"></span>
                </dt>
                <dd>
                  +1 (555) 123-4567
                </dd>
              </div>
              <div className="flex gap-x-4 space-y-4">
                <dt className="flex-none">
                  <span className="sr-only"></span>
                </dt>
                <dd>
                  example@example.com
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactForm></ContactForm>
      </div>
    </section>
  )
}