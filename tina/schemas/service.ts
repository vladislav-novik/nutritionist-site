import { Collection } from "tinacms";

export const service: Collection<false> = {
  label: "Services",
  name: "service",
  path: "content/services",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      required: true,
      isBody: true,
      ui: {
        component:'textarea'
      }
    },
    {
      type: "image",
      label: "Image",
      name: "image",
      required: true,
    },
  ],
};