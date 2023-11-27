import Post from "@/components/post/Post";
import { getPostBySlug, getPostsSlugs } from "@/sanity/lib/posts";
import { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";
import { urlForImage } from "@/sanity/lib/image";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params

  const post = await getPostBySlug(slug);

  return await generateMetadataForPage('article', lang, post);
}

export async function generateStaticParams() {
  const slugs = await getPostsSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

type Props = {
  params: {
    slug: string;
    lang: string;
  }
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const post = await getPostBySlug(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    "headline": post.title,
    "image": [urlForImage(post.mainImage.ref).width(720).height(360).fit("fill").url()],
    "datePublished": post.publishedAt,
    "author": [{
      "@type": "Person",
      "name": "Marya Novik",
      "url": "https://example.com/profile/janedoe123"
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl">
              <Post post={post}></Post>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
