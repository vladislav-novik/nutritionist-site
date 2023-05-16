// import { Inter } from 'next/font/google'
import { Main } from '@/components/home/main'
import HomePosts from '@/components/home/posts/HomePosts'
import HomeTestimonials from '@/components/home/testimonials/HomeTestimonials'
import HomeServices from '@/components/home/services/HomeServices'
import ContactUs from '@/components/home/contact-us'


// const inter = Inter({ subsets: ['latin'] })

type Props = {
  params: {
    lang: string,
  }
}

export default async function Home({ params }: Props) {
  return (
    <main>
      <Main></Main>

      <Main></Main>

      <HomeServices></HomeServices>
      
      {/* @ts-expect-error Server Component */}
      <HomeTestimonials></HomeTestimonials>
      
      {/* @ts-expect-error Server Component */}
      <HomePosts></HomePosts>
      
      <ContactUs></ContactUs>
    </main>
  )
}