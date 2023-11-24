// import { RiArticleLine } from 'react-icons/ri'

// export default defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   icon: RiArticleLine,
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 70,
//       },
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'mainImage',
//       title: 'Main image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         {
//           name: 'alt',
//           type: 'string',
//           title: 'Alternative Text',
//         }
//       ],
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'excerpt',
//       title: 'Excerpt',
//       type: 'text',
//       validation: Rule => Rule.required().min(70).max(320)
//     }),
//     defineField({
//       name: 'category',
//       title: 'Category',
//       type: 'reference',
//       to: [{type: 'category'}],
//     }),
//     defineField({
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'tag'}}],
//     }),
//     defineField({
//       name: 'originUrl',
//       title: 'Origin URL',
//       type: 'url',
//       hidden: ({document}) => document?.category === 'Internal',
//     }),
//     defineField({
//       name: 'publishedAt',
//       title: 'Published at',
//       type: 'datetime',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'blockContent',
//       validation: Rule => Rule.required(),
//     }),
//   ],

//   preview: {
//     select: {
//       title: 'title',
//       media: 'mainImage',
//       excerpt: 'excerpt',
//     },
//     prepare(selection) {
//       return {...selection}
//     },
//   },
// })
