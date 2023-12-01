import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { SanityDocument } from 'next-sanity'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            URL: (doc: SanityDocument) => {
                console.log('defaultDocumentNode doc', doc)
                return doc?.slug?.current 
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/preview?slug=${doc.slug.current}`
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/api/preview`
            },
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}