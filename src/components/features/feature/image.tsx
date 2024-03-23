import classnames from "classnames";
import Image from "next/image";

type Props = {
  index: number
  alt: string
};

const featureImage = (index: number, alt: string) => {
  if (index === 0) {
    return (
      <>
        <Image
          className="w-1/2 
            xl:absolute xl:left-0 xl:w-[40%]"
          width={667}
          height={1000}
          src="/images/features/1-1.png"
          alt={alt}
        />
        <Image
          className="w-1/2
            xl:absolute xl:right-0 xl:w-[40%]"
          width={667}
          height={1000}
          src="/images/features/1-2.png"
          alt={alt}
        />
      </>
    );
  }

  if (index === 1) {
    return (
      <Image
        className="w-full max-w-none"
        width={667}
        height={1000}
        src="/images/features/2.png"
        alt={alt}
      />
    );
  }

  if (index === 2) {
    return (
      <Image
        className="w-full max-w-none
            xl:absolute xl:-top-16 xl:-right-8"
        width={667}
        height={1000}
        src="/images/features/3.png"
        alt={alt}
      />
    );
  }

  if (index === 3) {
    return (
      <Image
        className="w-full max-w-none"
        width={667}
        height={1000}
        src="/images/features/4.png"
        alt={alt}
      />
    );
  }
};

const component = ({ index, alt }: Props) => (
  <div
    className={classnames(
      { "mt-8": [0, 3].includes(index) },
      { "my-auto": [1, 2].includes(index) },
      { "xl:absolute xl:top-auto": [0, 1, 3].includes(index) },
      { "xl:bottom-0": [0, 3].includes(index) },
      { "flex -mx-6 sm:mx-0 sm:my-0 xl:h-[60%] xl:inset-x-0": index === 0 },
      { "xl:bottom-8 xl:w-11/12": index === 1 },
      { "xl:relative xl:inset-0": index === 2 },
      { "sm:mt-0 xl:w-1/2 xl:right-4": index === 3 },
      "sm:w-1/2 md:w-full"
    )}
  >
    {featureImage(index, alt)}
  </div>
);

export default component;
