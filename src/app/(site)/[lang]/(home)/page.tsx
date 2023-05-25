// import { Inter } from 'next/font/google'
// import Main from '@/components/home/Main'
import About from '@/components/home/About'
import HomePosts from '@/components/home/Articles'
import Testimonials from '@/components/home/Testimonials'
import Services from '@/components/home/Services/Services'
import ContactUs from '@/components/home/ContactMe'
// import PageAnimation from '@/components/Animation/PageAnimation'
import { getDictionary } from '../dictionaries'
import { getTestimonials } from '@/sanity/lib/testimonials'
import { getPostsForHome } from '@/sanity/lib/posts'
type Props = {
  params: {
    lang: string,
  }
}

export default async function Page({ params }: Props) {
  const { lang } = params

  const dict = await getDictionary(lang)

  const testimonials = await getTestimonials();

  const POSTS_AMOUNT = 3;
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
    // <PageAnimation>
      <main>
        <About dict={dict}></About>

        {/* <Main lang={params.lang}></Main> */}

        <HomePosts dict={dict} posts={posts}></HomePosts>
        <ContactUs dict={dict}></ContactUs>
        <Services dict={dict}></Services>
        <Testimonials dict={dict} testimonials={testimonials}></Testimonials>
      </main>
    // </PageAnimation>
  )
}