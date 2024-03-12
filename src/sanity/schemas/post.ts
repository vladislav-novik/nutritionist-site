import {defineField, defineType} from 'sanity'
import { RiArticleLine } from 'react-icons/ri'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: RiArticleLine,
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the post',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug for the post',
      options: {
        source: 'title',
        maxLength: 70,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'The main image of the post',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Separate keywords with a comma. Example: "food, health, nutrition"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short description of the post',
      validation: Rule => Rule.required().min(100).max(360)
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      validation: Rule => Rule.required(),
      description: 'Add tags that describe the post',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      excerpt: 'excerpt',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
