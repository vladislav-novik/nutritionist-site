import { Image } from 'sanity'

export type PostPreview = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    mainImage: Image;
    category: string;
    excerpt: string;
    tags: string[];
}

export type Post = PostPreview & {
    body: any;
}