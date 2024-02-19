// import { Inter } from 'next/font/google'
// import Main from '@/components/home/Main'
import Hero from '@/components/home/Hero'
import HomePosts from '@/components/home/Articles'
import Testimonials from '@/components/home/Testimonials'
import Services from '@/components/home/Services'
import ContactUs from '@/components/home/ContactMe'
// import PageAnimation from '@/components/Animation/PageAnimation'
import { getDictionary } from '../../../utils/dictionaries'
import { getTestimonials } from '@/sanity/lib/testimonials'
import { getPostsForHome } from '@/sanity/lib/posts'
import { PostOverview } from '@/types/post'


// export function generateStaticParams() {
//   return langs.map(l => ({ lang: l }));
// }

type Props = {
  params: {
    lang: string,
  },
  searchParams: any;
}

export default async function Page({ params }: Props) {
  let { lang } = params
  if (!lang) {
    lang = 'ru'
  }

  const dict = await getDictionary(lang)

  const testimonials = await getTestimonials();

  const POSTS_AMOUNT = 3;
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
    // <PageAnimation>
      <main>
        <Hero dict={dict}></Hero>

        {/* <Main lang={params.lang}></Main> */}

        <Services dict={dict}></Services>
        <Testimonials dict={dict} testimonials={testimonials}></Testimonials>
        <ContactUs dict={dict}></ContactUs>
        <HomePosts dict={dict} posts={posts}></HomePosts>
      </main>
    // </PageAnimation>
  )
}