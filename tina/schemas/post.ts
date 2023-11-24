import { Collection } from "tinacms";

export const post: Collection<false> = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "mainImage",
      label: "Main Image",
      required: true,
    },
    {
      name: "excerpt",
      label: "Excerpt",
      type: "string",
      required: true,
      ui: {
        component: 'textarea'
      }
    },
    {
      name: "publishedAt",
      label: "Published at",
      type: "datetime",
      required: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "string",
      list: true,
      options: [
        {
          value: "recipe",
          label: "recipe",
        },
        {
          value: "health",
          label: "Health",
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      required: true,
    },
  ],
  ui: {
    // This is an DEMO router. You can remove this to fit your site
    router: ({ document }) => `/demo/blog/${document._sys.filename}`,
  },
};
