export type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    mainImage: {
        url: string;
        alt: string;
    };
    category: string;
    excerpt: string;
}