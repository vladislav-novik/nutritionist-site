import Post from "@/components/post/Post";
import { getPostBySlug, getPostsSlugs } from "@/sanity/lib/posts";
import { Metadata } from "next";
import { getAlternateLangs } from "@/utils/locales";

export async function generateMetadata({ params }: Props ): Promise<Metadata> {
  const { lang, slug } = params

  const post = await getPostBySlug(slug);

  const alternateLangs = getAlternateLangs(lang);
  const alternates = alternateLangs.reduce((acc, l) => ({ ...acc, [l]: `${process.env.BASE_URL}/${l}/articles/${slug}` }), {});

  return {
    title: post.title,
    description: post.excerpt,
    metadataBase: new URL(process.env.BASE_URL!),
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      tags: post.tags,
      locale: lang,
      alternateLocale: alternateLangs,
      url: `${process.env.BASE_URL}/${lang}/articles/${slug}`,
      images: [{
        url: post.imageUrl,
        width: 1280,
        height: 640
      }],
      authors: 'Marya Novik',
    },
    twitter: {
      card: 'summary_large_image',
      site: `${process.env.BASE_URL}/${lang}/articles/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: [{
        url: post.imageUrl,
        width: 1280,
        height: 640
      }],
      creator: 'Marya Novik'
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/${lang}/articles/${slug}`,
      languages: alternates
    },
  }
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

  return (
    <div className="sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <Post post={post}></Post>
          </div>
        </div>
      </div>
    </div>
  );
}