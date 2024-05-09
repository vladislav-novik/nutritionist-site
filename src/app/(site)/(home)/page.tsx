// import { Inter } from 'next/font/google'
// import Main from '@/components/home/Main'
import HomePosts from '@/components/blog/latest-posts'
import Testimonials from '@/components/testimonials'
import Features from '@/components/features'
import ContactUs from '@/components/contact-me'
import HowItWors from '@/components/how-it-works'
// import PageAnimation from '@/components/Animation/PageAnimation'
import { getTestimonials } from '@/sanity/lib/testimonials'
import { getPostsForHome } from '@/sanity/lib/posts'
import Hero from '@/components/hero'
import About from '@/components/about'

export default async function Page() {
  // const testimonials = await getTestimonials();

  const POSTS_AMOUNT = 3;
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
    // <PageAnimation>
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWors />
        <ContactUs />
        <HomePosts posts={posts} />
        {/* <Testimonials testimonials={testimonials} /> */}
      </main>
    // </PageAnimation>
  )
}