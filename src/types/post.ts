export type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    mainImage: {
        asset: {
            url: string;
        };
        alt: string;
    };
    category: string;
    excerpt: string;
}