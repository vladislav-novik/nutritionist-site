// import { Inter } from 'next/font/google'
import Main from '@/components/home/Main'
import About from '@/components/home/About'
import HomePosts from '@/components/home/Articles/HomePosts'
import HomeTestimonials from '@/components/home/Testimonials/HomeTestimonials'
import HomeServices from '@/components/home/Services'
import ContactUs from '@/components/home/ContactMe'
import PageWrapper from '@/components/Animation/PageWrapper'
import SectionWrapper from '@/components/Animation/SectionWrapper'

type Props = {
  params: {
    lang: string,
  }
}

export default async function Home({ params }: Props) {
  return (
    <PageWrapper>
      <main>
        {/* @ts-expect-error Server Component */}
        <About lang={params.lang}></About>

        {/* <Main lang={params.lang}></Main> */}

        <SectionWrapper>
          {/* @ts-expect-error Server Component */}
          <HomeServices lang={params.lang}></HomeServices>
        </SectionWrapper>

        <SectionWrapper>
          {/* @ts-expect-error Server Component */}
          <HomeTestimonials lang={params.lang}></HomeTestimonials>
        </SectionWrapper>

        <SectionWrapper>
          {/* @ts-expect-error Server Component */}
          <HomePosts lang={params.lang}></HomePosts>
        </SectionWrapper>

        <SectionWrapper>
          {/* @ts-expect-error Server Component */}
          <ContactUs lang={params.lang}></ContactUs>
        </SectionWrapper>

      </main>
    </PageWrapper>
  )
}