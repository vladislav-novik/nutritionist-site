import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import tag from './schemas/tag'
import testimonial from './schemas/testimonial'
import customerRequest from './schemas/customerRequest'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, blockContent, tag, testimonial, customerRequest],
}
