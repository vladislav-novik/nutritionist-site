import { urlForImage } from '@/sanity/lib/image';
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image';

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }: any) => <h1>{children}</h1>,
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
    normal: ({ children }: any) => <p>{children}</p>,
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul>{children}</ul>,
    number: ({ children }: any) => <ol>{children}</ol>,

    // // Ex. 2: rendering custom lists
    // checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },
  types: {
    image: ({ value }: any) => {
      return (
        <figure>
          {/* @ts-expect-error Server Component */  }
          <Image src={urlForImage(value).width(1000).height(667)} width={1000} height={667} alt='alt'></Image >
          {value.alt && <figcaption>{value.alt}</figcaption>}
        </figure>
      );
    }
  },

  marks: {
    em: ({ children }: any) => <em>{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target}>
          {children}
        </a>
      )
    },
  },
}

export default function PostBody({ content }: any) {
  return (
    <>
      <PortableText
        value={content}
        components={myPortableTextComponents}
      />
    </>
  );
}