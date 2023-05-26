import { Image } from 'sanity'

export type PostOverview = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    mainImage: Image;
    category: string;
    excerpt: string;
    tags: string[];
}

export type Post = PostOverview & {
    imageUrl: string;
    body: any;
}