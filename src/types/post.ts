// import { Image } from 'sanity'

export type PostOverview = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    mainImage: {
        // ref: Image,
        lquip: string,
        blurHash: string,
    }
    category: string;
    excerpt: string;
    tags: string[];
}

export type Post = PostOverview & {
    body: any;
}