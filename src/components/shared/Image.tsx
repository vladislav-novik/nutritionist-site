import { Image as SanityImage } from "sanity";
import Image from 'next/image';
import { urlForImage } from "@/sanity/lib/image";

type Props = {
    src: string | SanityImage,
    blurDataURL?: string,
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    fill?: boolean;
    alt?: string;
}

const CustomImage = (props: Props) => {
    let { src, alt} = props

    if (typeof src !== "string") {
        src = urlForImage(src).url()
    }

    return (<Image
        {...props}
        
        placeholder="blur"
        src={src}
        alt={alt ?? 'alternate text'}
      />);
}

export default CustomImage;