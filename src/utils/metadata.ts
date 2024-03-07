import { Post } from '@/types/post'
import { Metadata } from 'next/types'
import { getAlternateLangs } from './locales';
import { urlForImage } from '@/sanity/lib/image';
import config from '@/app/app.config';

const MAX_GENERAL_TITLE_LENGTH = 65;
const MAX_GENERAL_DESCRIPTION_LENGTH = 320;

const MAX_TWITTER_TITLE_LENGTH = 70;
const MAX_TWITTER_DESCRIPTION_LENGTH = 200;

export async function generateMetadataForPage(page: 'home' | 'articles' | 'article', lang?: string, data?: Post | any): Promise<Partial<Metadata>> {
  const { dict } = config;

  const pageMetadata = page === 'article' ? {
    title: (data as Post).title,
    description: (data as Post).excerpt,
    keywords: (data as Post).keywords,
  } : {
    title: dict.SEO[page].title,
    description: dict.SEO[page].description,
    keywords: dict.SEO[page].keywords,
  }

  const { openGraph, twitter } = createOGAndTwitterMetadata(page, lang, data)

  return {
    title: pageMetadata.title.slice(0, MAX_GENERAL_TITLE_LENGTH),
    description: pageMetadata.description.slice(0, MAX_GENERAL_DESCRIPTION_LENGTH),
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
    alternates: createAlternatesMetadata(lang, page, data),
    keywords: pageMetadata.keywords,

    openGraph: {
      title: pageMetadata.title.slice(0, MAX_GENERAL_TITLE_LENGTH),
      description: pageMetadata.description.slice(0, MAX_GENERAL_DESCRIPTION_LENGTH),
      ...openGraph
    },
    twitter: {
      title: pageMetadata.title.slice(0, MAX_TWITTER_TITLE_LENGTH),
      description: pageMetadata.description.slice(0, MAX_TWITTER_DESCRIPTION_LENGTH),
      ...twitter
    }
  }
}

function createAlternatesMetadata(lang: string, page: 'home' | 'articles' | 'article', data?: Post | any) {
  const alternateLangs = getAlternateLangs(lang);
  const alternates = alternateLangs.reduce(
    (acc, l) => ({ ...acc, [l]: getPageUrl(page, l, data) }), {}
  );

  return {
    canonical: getPageUrl(page, lang, data),
    languages: alternates
  }
}

function createOGAndTwitterMetadata(page: 'home' | 'articles' | 'article', lang: string = 'ru', data?: Post | any) {
  const imageUrl = page === 'article' ?
    urlForImage(data.mainImage.ref)?.width(720).height(360).url() : '/images/main.webp';

  return {
    openGraph: {
      type: page === 'article' ? 'article' : 'website',
      locale: lang,
      alternateLocale: getAlternateLangs(lang),
      url: getPageUrl(page, lang, data),
      images: [{
        url: imageUrl,
        width: 720,
        height: 360
      }],
    },

    twitter: {
      card: 'summary_large_image',
      site: getPageUrl(page, lang, data),
      images: [{
        url: imageUrl,
        width: 720,
        height: 360
      }]
    },
  };
}

function getPageUrl(page: 'home' | 'articles' | 'article', lang: string = 'ru', data?: Post | any): string {
  let path = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  switch (page) {
    case 'articles': path += getSearchParamsPerPage(page, []); break;
    case 'article': path += getSearchParamsPerPage(page, [data.slug]); break;
    case 'home':
    default: break;
  }

  return path;
}

function getSearchParamsPerPage(page: 'home' | 'articles' | 'article', params: string[]) {
  switch (page) {
    case 'articles': return '/articles'
    case 'article': return `/article/${params.map((p, i, ar) => {
      if (i === ar.length - 1)
        return p
      return p + '/'
    })}`
    case 'home':
    default:
      return ''
  }
}