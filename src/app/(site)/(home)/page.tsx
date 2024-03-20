import HomePosts from '@/components/blog/latest-posts'
// import Features from '@/components/features'
import ContactUs from '@/components/contact-me'
// import HowItWors from '@/components/how-it-works'
import { getPostsForHome } from '@/sanity/lib/posts'
// import Hero from '@/components/hero'

export default async function Page() {
  // const testimonials = await getTestimonials();

  const POSTS_AMOUNT = 3;
  const posts = await getPostsForHome(POSTS_AMOUNT);

  return (
      <main>
        {/* <Hero />
        <Features />
        <HowItWors /> */}
        <ContactUs />
        <HomePosts posts={posts} />
      </main>
  )
}