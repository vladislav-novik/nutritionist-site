// import { Inter } from 'next/font/google'
import Main from '@/components/home/Main'
import About from '@/components/home/About'
import HomePosts from '@/components/home/Articles/HomePosts'
import HomeTestimonials from '@/components/home/Testimonials/HomeTestimonials'
import HomeServices from '@/components/home/Services'
import ContactUs from '@/components/home/ContactMe'
import ContactForm from '@/components/home/ContactMe/form'
// import { handleSubmit } from './action'


// const inter = Inter({ subsets: ['latin'] })

type Props = {
  params: {
    lang: string,
  }
}

export default async function Home({ params }: Props) {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <Main lang={params.lang}></Main>

      {/* @ts-expect-error Server Component */}
      <About lang={params.lang}></About>

      {/* @ts-expect-error Server Component */}
      <HomeServices lang={params.lang}></HomeServices>

      {/* @ts-expect-error Server Component */}
      <HomeTestimonials lang={params.lang}></HomeTestimonials>

      {/* @ts-expect-error Server Component */}
      <HomePosts lang={params.lang}></HomePosts>

      {/* @ts-expect-error Server Component */}
      <ContactUs lang={params.lang}></ContactUs>
      
    </main>
  )
}