import { getDictionary } from '@/utils/dictionaries';
import { Post } from '@/types/post'
import { Metadata } from 'next/types'
import { getAlternateLangs } from './locales';
import { urlForImage } from '@/sanity/lib/image';

const MAX_GENERAL_TITLE_LENGTH = 65;
const MAX_GENERAL_DESCRIPTION_LENGTH = 320;

const MAX_TWITTER_TITLE_LENGTH = 70;
const MAX_TWITTER_DESCRIPTION_LENGTH = 200;

export async function generateMetadataForPage(page: 'home' | 'articles' | 'article', lang: string, data?: Post | any): Promise<Partial<Metadata>> {
  const dict = await getDictionary(lang)

  const titleAndDescription = page === 'article' ? {
    title: (data as Post).title,
    description: (data as Post).excerpt,
  } : {
    title: dict.SEO[page].title,
    description: dict.SEO[page].description,
  }

  const { openGraph, twitter } = createOGAndTwitterMetadata(lang, page, data)

  return {
    title: titleAndDescription.title.slice(0, MAX_GENERAL_TITLE_LENGTH),
    description: titleAndDescription.description.slice(0, MAX_GENERAL_DESCRIPTION_LENGTH),
    metadataBase: new URL(process.env.BASE_URL!),
    alternates: createAlternatesMetadata(lang, page, data),
    keywords: [],

    openGraph: {
      title: titleAndDescription.title.slice(0, MAX_GENERAL_TITLE_LENGTH),
      description: titleAndDescription.description.slice(0, MAX_GENERAL_DESCRIPTION_LENGTH),
      ...openGraph
    },
    twitter: {
      title: titleAndDescription.title.slice(0, MAX_TWITTER_TITLE_LENGTH),
      description: titleAndDescription.description.slice(0, MAX_TWITTER_DESCRIPTION_LENGTH),
      ...twitter
    }
  }
}

function createAlternatesMetadata(lang: string, page: 'home' | 'articles' | 'article', data?: Post | any) {
  const alternateLangs = getAlternateLangs(lang);
  const alternates = alternateLangs.reduce(
    (acc, l) => ({ ...acc, [l]: getPageUrl(l, page, data) }), {}
  );

  return {
    canonical: getPageUrl(lang, page, data),
    languages: alternates
  }
}

function createOGAndTwitterMetadata(lang: string, page: 'home' | 'articles' | 'article', data?: Post | any) {
  const imageUrl = page === 'article' ?
    urlForImage(data.mainImage)?.width(720).height(360).url() : '/images/main.webp';

  return {
    openGraph: {
      type: page === 'article' ? 'article' : 'website',
      locale: lang,
      alternateLocale: getAlternateLangs(lang),
      url: getPageUrl(lang, page, data),
      images: [{
        url: imageUrl,
        width: 720,
        height: 360
      }],
    },

    twitter: {
      card: 'summary_large_image',
      site: getPageUrl(lang, page, data),
      images: [{
        url: imageUrl,
        width: 720,
        height: 360
      }]
    },
  };
}

function getPageUrl(lang: string, page: 'home' | 'articles' | 'article', data?: Post | any): string {
  let path = `${process.env.BASE_URL}/${lang}`;

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