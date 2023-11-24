import Image from 'next/image';

type Props = {
    src: string,
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

    return (<Image
        {...props}
        
        placeholder="blur"
        src={src}
        alt={alt ?? 'alternate text'}
      />);
}

export default CustomImage;