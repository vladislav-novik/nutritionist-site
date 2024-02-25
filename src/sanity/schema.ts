import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import post from './schemas/post'
import tag from './schemas/tag'
import testimonial from './schemas/testimonial'
import customerRequest from './schemas/customerRequest'
import service from './schemas/service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, tag, testimonial, customerRequest, service],
}
