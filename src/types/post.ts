import { Image } from 'sanity'

export type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    mainImage: Image;
    category: string;
    excerpt: string;
    tags: string[];
}