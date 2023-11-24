import { Collection } from "tinacms";

export const testimonial: Collection<false> = {
  label: "Testimonials",
  name: "testimonial",
  path: "content/testimonials",
  fields: [
    {
      type: "datetime",
      label: "Date",
      name: "date",
      ui: {
        dateFormat: "YY-MM-DD",
        parse: (value: any) => value && value.format("YY-MM-DD"),
      },
    },
    {
      type: "string",
      label: "Author",
      name: "author",
      required: true,
      isTitle: true,
    },
    {
      type: "string",
      label: "Quote",
      name: "quote",
      required: true,
      isBody: true,
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      label: "Show on Homepage",
      name: "showOnHomepage",
    },
  ],
};