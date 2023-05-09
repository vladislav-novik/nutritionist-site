// import { Inter } from 'next/font/google'
import { Main } from '@/components/home/main'
import Posts from '@/components/home/posts'
import Testimonials from '@/components/home/testimonials'
import ContactUs from '@/components/home/contact-us'
import Services from '@/components/home/services'

// const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <>
      <main className="scroll-smooth">
        <Main></Main>
        <Services></Services>
        {/* @ts-expect-error Server Component */}
        <Testimonials></Testimonials>
        {/* @ts-expect-error Server Component */}
        <Posts></Posts>
        <ContactUs></ContactUs>
      </main>
    </>
  )
}
