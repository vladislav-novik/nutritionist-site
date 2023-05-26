// import { Inter } from 'next/font/google'
// import Main from '@/components/home/Main'
import About from '@/components/home/About'
import HomePosts from '@/components/home/Articles'
import Testimonials from '@/components/home/Testimonials'
import Services from '@/components/home/Services'
import ContactUs from '@/components/home/ContactMe'
// import PageAnimation from '@/components/Animation/PageAnimation'
import { getDictionary } from '../dictionaries'
import { getTestimonials } from '@/sanity/lib/testimonials'
import { getPostsForHome } from '@/sanity/lib/posts'
import { Metadata } from 'next/types'
import { getAlternateLangs } from '@/utils/locales'

export async function generateMetadata({ params }: Props, ): Promise<Metadata> {
  const { lang } = params
  const dict = await getDictionary(lang)

  const alternateLangs = getAlternateLangs(lang);
  const alternates = alternateLangs.reduce((acc, l) => ({ ...acc, [l]: `${process.env.BASE_URL}/${l}/` }), {});

  return {
    title: dict.SEO.home.title,
    description: dict.SEO.home.description,
    metadataBase: new URL(process.env.BASE_URL!),
    openGraph: {
      type: 'website',
      title: dict.SEO.home.title,
      locale: lang,
      alternateLocale: alternateLangs,
      url: `${process.env.BASE_URL}/${lang}/`,
      images: [{
        url: '/images/main.webp',
        width: 1280,
        height: 640
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: `${process.env.BASE_URL}/${lang}/`,
      title: dict.SEO.home.title,
      description: dict.SEO.home.description,
      images: [{
        url: '/images/main.webp',
        width: 1280,
        height: 640
      }]
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/${lang}/`,
      languages: alternates
    },
    keywords: [],
    // verification
  }
}


type Props = {
  params: {
    lang: string,
  },
  searchParams: any;
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

        <Services dict={dict}></Services>
        <Testimonials dict={dict} testimonials={testimonials}></Testimonials>
        <HomePosts dict={dict} posts={posts}></HomePosts>
        <ContactUs dict={dict}></ContactUs>
      </main>
    // </PageAnimation>
  )
}