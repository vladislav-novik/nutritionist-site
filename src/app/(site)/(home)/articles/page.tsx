import { getPosts } from "@/sanity/lib/posts";
import PageWrapper from "@/components/shared/animation/PageAnimation";
import { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";
import config from "@/app/app.config";
import Posts from "@/components/blog/posts";
import SectionTitle from "@/components/layout/section/Title";
import SectionDescription from "@/components/layout/section/Description";

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
    <>
      <div className="text-center max-w-lg mx-auto">
        <SectionTitle>{dict.sections.blog.title}</SectionTitle>
        <SectionDescription>{dict.sections.blog.content}</SectionDescription>
      </div>
      <div className="mx-auto mt-16 lg:mt-24 xl:max-w-none">
        <Posts posts={posts} maxCols={2} withExcrpt />
      </div>
    </>
    // </PageWrapper>
  );
}
