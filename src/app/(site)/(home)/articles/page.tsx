import { getPosts } from "@/sanity/lib/posts";
import PageWrapper from "@/components/shared/animation/PageAnimation";
import { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";
import config from '@/app/app.config';
import Posts from '@/components/blog/posts'

export async function generateMetadata(): Promise<Metadata> {
  let lang = "ru";
  return await generateMetadataForPage("articles", lang);
}

// type Props = {
//   params: {
//     lang: string,
//   }
// }

export default async function Page() {
  let lang = "ru";

  const { dict } = config;
  const posts = await getPosts();

  return (
    // <PageWrapper>
    <div className="py-12 sm:py-20">
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-3xl font-bold">{dict.sections.blog.title}</h2>
        <p className="mt-5 leading-6 font-normal text-base">{dict.sections.blog.content}</p>
      </div>
      <div className="mx-auto mt-12 lg:mt-20 xl:max-w-none">
        <Posts posts={posts} withExcrpt />
      </div>
    </div>
    // </PageWrapper>
  );
}
