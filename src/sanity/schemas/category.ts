import {defineField, defineType} from 'sanity'
import { MdOutlineCategory } from 'react-icons/md'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdOutlineCategory,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
