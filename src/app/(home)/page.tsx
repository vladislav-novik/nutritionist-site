// import { Inter } from 'next/font/google'
import { Main } from '@/components/home/main'
import HomePosts from '@/components/home/posts/HomePosts'
import HomeTestimonials from '@/components/home/testimonials/HomeTestimonials'
import HomeServices from '@/components/home/services/HomeServices'
import ContactUs from '@/components/home/contact-us'


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
          <HomeServices></HomeServices>
        </section>

        <section id="testimonials" className="mx-auto overflow-hidden bg-gradient-to-r from-emerald-400 to-teal-200 px-6 py-8 sm:py-12 lg:px-8 h-[36rem]">
          {/* @ts-expect-error Server Component */}
          <HomeTestimonials></HomeTestimonials>
        </section>

        <section id="posts" className="bg-gray-100">
          <HomePosts></HomePosts>
        </section>

        <section id="contact-us" className="isolate relative bg-white px-6 py-24 sm:py-32 lg:px-8">
          <ContactUs></ContactUs>
        </section>

      </main>
    </>
  )
}