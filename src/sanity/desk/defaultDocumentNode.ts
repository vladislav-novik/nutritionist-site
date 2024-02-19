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
            url: {
              preview: (doc: SanityDocument) => doc?.slug?.current ? `http://localhost:3454/articles/${doc.slug.current}` : new Error('Missing slug'),
              draftMode: 'http://localhost:3454/api/preview'
            },
            // url: (doc: SanityDocument) => {
            //   console.log('iframe doc', doc);
            //   return `http://localhost:3454/articles/${doc.slug.current}`;
            // },
            reload: {
              button: true, // default `undefined`
            },
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}