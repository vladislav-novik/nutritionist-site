// import { Inter } from 'next/font/google'
import { Main } from '@/components/home/main'
import HomePosts from '@/components/home/posts/HomePosts'
import HomeTestimonials from '@/components/home/testimonials/HomeTestimonials'
import HomeServices from '@/components/home/services/HomeServices'
import ContactUs from '@/components/home/contact-us'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'


// const inter = Inter({ subsets: ['latin'] })


export default async function Home() {
  return (
    <>
      <main className="scroll-smooth">
        <section id="main" className="overflow-hidden bg-green-200  py-24 sm:py-32">
          {/* bg-[#efffff] */}
          <Main></Main>
        </section>

        <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
          {/* #ffffff */}
          <Main></Main>
        </section>

        <section id="services" className="py-24 sm:py-32 bg-[#f0bcd2] ">
          {/* #bcf0da */}
          <HomeServices></HomeServices>
        </section>

        <section id="testimonials" className="mx-auto bg-white overflow-hidden px-6 py-8 sm:py-12 lg:px-8 h-[36rem] relative">
          {/* #f0bcd2 */}
          {/* @ts-expect-error Server Component */}
          <HomeTestimonials></HomeTestimonials>
          <ImQuotesLeft className="absolute text-green-200 opacity-40 top-10 left-10" size={200}></ImQuotesLeft>
          <ImQuotesRight className="absolute text-green-200 opacity-40 bottom-10 right-10" size={200}></ImQuotesRight>
        </section>

        <section id="posts" className=" bg-[#efffff]">
          {/* #ffefff */}
          <HomePosts></HomePosts>
        </section>

        <section id="contact-us" className="bg-[#ffefff] px-6 py-24 sm:py-32 lg:px-8">
          <ContactUs></ContactUs>
        </section>

      </main>
    </>
  )
}