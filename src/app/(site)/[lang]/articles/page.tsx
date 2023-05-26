import { getPosts } from "@/sanity/lib/posts"
import { PostOverview } from "@/types/post";
import PostsPreview from "@/components/post/PostPreview2"
import { getDictionary } from "../dictionaries";
import PageWrapper from "@/components/Animation/PageAnimation";
import { Metadata } from "next";
import { getAlternateLangs } from "@/utils/locales";

export async function generateMetadata({ params }: Props, ): Promise<Metadata> {
  const { lang } = params
  const dict = await getDictionary(lang)

  const alternateLangs = getAlternateLangs(lang);
  const alternates = alternateLangs.reduce((acc, l) => ({ ...acc, [l]: `${process.env.BASE_URL}/${l}/articles` }), {});

  return {
    title: dict.SEO.articles.title,
    description: dict.SEO.articles.description,
    metadataBase: new URL(process.env.BASE_URL!),
    openGraph: {
      type: 'website',
      title: dict.SEO.articles.title,
      description: dict.SEO.articles.description,
      locale: lang,
      alternateLocale: alternateLangs,
      url: `${process.env.BASE_URL}/${lang}/articles`,
      images: [{
        url: '/images/main.webp',
        width: 1280,
        height: 640
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: `${process.env.BASE_URL}/${lang}/articles`,
      title: dict.SEO.articles.title,
      description: dict.SEO.articles.description,
      images: [{
        url: '/images/main.webp',
        width: 1280,
        height: 640
      }]
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/${lang}/articles`,
      languages: alternates
    },
  }
}

type Props = {
  params: {
    lang: string,
  }
}

export default async function Page({ params }: Props) {
  const dict = await getDictionary(params.lang);
  const posts = await getPosts()

  return (
    <PageWrapper>
      <div className="text-gray-800">
      <h2 className="text-2xl font-bold text-center">{dict.sections.articles.title}: {dict.sections.articles.subtitle}</h2>
      <p className="leading-8 text-lg mt-2 text-center">{dict.sections.articles.description}</p>

      <div className="max-w-6xl mx-auto mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post: PostOverview) => (
              <PostsPreview key={post._id} post={post} dict={dict} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
