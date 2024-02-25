// import { Inter } from 'next/font/google'
// import Main from '@/components/home/Main'
import Hero from '@/components/containers/hero'
import HomePosts from '@/components/containers/blog/latest-posts'
import Testimonials from '@/components/containers/testimonials'
import Services from '@/components/containers/features'
import About from '@/components/containers/about-me'
import ContactUs from '@/components/containers/contact-me'
import HowItWors from '@/components/containers/how-it-works'
// import PageAnimation from '@/components/Animation/PageAnimation'
import { getDictionary } from '../../../utils/dictionaries'
import { getTestimonials } from '@/sanity/lib/testimonials'
import { getPostsForHome } from '@/sanity/lib/posts'

 
// export function generateStaticParams() {
//   return langs.map(l => ({ lang: l }));
// }

// type Props = {
//   params: {
//     lang: string,
//   },
//   searchParams: any;
// }

export default async function Page() {
  let lang = 'ru'

  const dict = await getDictionary(lang)

  const testimonials = await getTestimonials();

  const POSTS_AMOUNT = 3;
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
    // <PageAnimation>
      <main>
        {/* <Hero dict={dict} /> */}
        <About />
        <Services dict={dict} />
        <HowItWors />
        {/* <Testimonials dict={dict} testimonials={testimonials} /> */}
        <ContactUs dict={dict} />
        <HomePosts dict={dict} posts={posts} />
      </main>
    // </PageAnimation>
  )
}