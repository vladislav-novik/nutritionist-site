import Image from "next/image";
import { Image as SanityImage } from "sanity"
import { urlForImage } from "@/sanity/lib/image";
import { getPlaiceholder } from "plaiceholder";

type Props = { 
  src: SanityImage | string; 
  width?: number; 
  height?: number; 
  className?: string; 
  alt?: string;
  priority?: boolean;
}

export default async function BlurredImage(
  { src, width, height, className, alt, priority }: Props 
) {
  let url = "";

  if (typeof src === "string") {
    url = src;
  } else {
    let builder = urlForImage(src);

    if (builder && width) {
      builder = builder.width(width);
    }

    if (builder && height) {
      builder = builder.height(height);
    }

    url = builder?.url() ?? "";
  }

  const { base64, img } = await getPlaiceholder(url);

  return (
    <Image
        src={img.src}
        blurDataURL={base64}
        className={className}
        width={width}
        height={height}
        alt={alt ?? ""}
        priority={priority}
        placeholder="blur" />
  );
}