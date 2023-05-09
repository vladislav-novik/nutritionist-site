export type Testimonial = {
    _id: string;
    author: string;
    image: {
        alt: string;
        url: string;
    };
    reason: string;
    content: string;
    date: string;
};