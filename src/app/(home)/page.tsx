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
        <section id="main" className="overflow-hidden bg-white py-24 sm:py-32">
          <Main></Main>
        </section>

        <section id="about" className="overflow-hidden bg-gradient-to-r from-emerald-400 to-teal-200 py-24 sm:py-32">
          <Main></Main>
        </section>

        <section id="services" className="py-24 sm:py-32">
          {/* @ts-expect-error Server Component */}
          <Services></Services>
        </section>

        <section id="testimonials" className="mx-auto overflow-hidden bg-gradient-to-r from-emerald-400 to-teal-200 px-6 py-8 sm:py-12 lg:px-8 h-[36rem]">
          {/* @ts-expect-error Server Component */}
          <Testimonials></Testimonials>
        </section>

        <section id="posts" className="bg-gray-100">
          {/* @ts-expect-error Server Component */}
          <Posts></Posts>
        </section>

        <section id="contact-us" className="isolate relative bg-white px-6 py-24 sm:py-32 lg:px-8">
          <ContactUs></ContactUs>
        </section>

      </main>
    </>
  )
}