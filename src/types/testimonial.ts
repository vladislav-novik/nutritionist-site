export type Testimonial = {
    _id: string;
    author: string;
    image: {
        // ref: Image,
        lquip: string,
        blurHash: string,
    }
    reason: string;
    content: string;
    date: string;
};