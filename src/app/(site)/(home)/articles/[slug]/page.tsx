import Post from "@/components/post/Post";
import { getPostBySlug, getPostsSlugs } from "@/sanity/lib/posts";
import { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/Preview/PreviewProvider";
import PreviewPost from "@/components/Preview/PreviewPost";

type Props = {
  params: {
    slug: string;
    lang: string;
  }
}

export async function generateStaticParams() {
  const slugs = await getPostsSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const post = await getPostBySlug(slug);
  const isDraftMode = draftMode().isEnabled;

  const token = process.env.SANITY_API_READ_TOKEN;

  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Article',
  //   "headline": post.title,
  //   "image": [urlForImage(post.mainImage.ref).width(720).height(360).fit("fill").url()],
  //   "datePublished": post.publishedAt,
  //   "author": [{
  //     "@type": "Person",
  //     "name": "Marya Novik",
  //     "url": "https://example.com/profile/janedoe123"
  //   }]
  // };

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}

      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl">
              {
                isDraftMode && !!token ?
                (<PreviewProvider token={token}>
                  <PreviewPost post={post} slug={slug} />
                </PreviewProvider>) :
                <Post post={post}></Post>
              }
              {/* <Post post={post}></Post> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params

  const post = await getPostBySlug(slug);

  return await generateMetadataForPage('article', lang, post);
}
