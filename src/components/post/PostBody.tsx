import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import PlaceholderedImage from '@/components/shared/PlaceholderedImage'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }: any) => <h1>{children}</h1>,
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
    normal: ({ children }: any) => <p>{children}</p>,

    // // Ex. 2: rendering custom styles
    // customHeading: ({ children }: any) => (
    //   <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    // ),
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
        // @ts-expect-error Server Component
        <PlaceholderedImage src={value} width={1310} height={872}></PlaceholderedImage >
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