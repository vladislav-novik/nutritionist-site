import { Image } from "sanity";

export type Service = {
    _id: string;
    name: string;
    description: string;
    image: Image;
};
