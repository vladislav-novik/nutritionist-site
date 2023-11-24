// import { MdOutlineReviews } from "react-icons/md"; 

// export default defineType({
//     name: 'testimonial',
//     title: 'Testimonial',
//     type: 'document',
//     icon: MdOutlineReviews,
//     fields: [
//         defineField({
//             name: 'author',
//             title: 'Author',
//             type: 'string',
//         }),
//         defineField({
//             name: 'image',
//             title: 'Image',
//             type: 'image',
//             options: {
//                 hotspot: true,
//             },
//             fields: [
//                 {
//                     name: 'alt',
//                     type: 'string',
//                     title: 'Alternative Text',
//                 }
//             ]
//         }),
//         defineField({
//             name: 'reason',
//             title: 'Reason',
//             type: 'string',
//         }),
//         defineField({
//             name: 'content',
//             title: 'Content',
//             type: 'text',
//         }),
//         defineField({
//             name: 'date',
//             title: 'Date',
//             type: 'date',
//         }),
//         defineField({
//             name: 'showOnHomepage',
//             title: 'Show on Homepage',
//             type: 'boolean',
//         }),
//     ]
// });