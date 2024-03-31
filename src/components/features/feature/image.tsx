import classnames from "classnames";
import Image from "next/image";

type Props = {
  index: number;
  alt: string;
};

const featureImage = (index: number, alt: string) => {
  if (index === 0) {
    return (
      <>
        <Image
          className="w-1/2 
            xl:absolute xl:left-0 xl:w-1/2
            transition-transform duration-300 origin-[left_50%]
            group-hover:scale-75"
          width={667}
          height={1000}
          src="/images/features/1-1.png"
          alt={alt}
        />
        <Image
          className="w-1/2
            xl:absolute xl:right-0 xl:w-1/2
            transition-transform duration-300 origin-[right_50%]
            group-hover:scale-125"
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

      
      // xl:absolute xl:-top-16 xl:-right-8
      <Image
        className="h-full w-auto
        duration-300 origin-bottom
        group-hover:scale-110"
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
            xl:absolute xl:-top-16 xl:-right-8
            duration-300 origin-center
            group-hover:scale-110 group-hover:rotate-6"
        width={667}
        height={1000}
        src="/images/features/3.png"
        alt={alt}
      />
    );
  }

  if (index === 3) {
    return (
      <div className="hidden sm:block relative w-full h-full">
        <div
          className="bg-white h-44 w-auto absolute z-40 -top-4 left-[calc(50%-5rem)] pb-0 p-2 rounded-xl shadow scale-105
          transition-transform origin-top duration-300
          group-hover:scale-125"
        >
          <Image
            className="h-full w-auto"
            width={667}
            height={1000}
            src="/images/features/4-1.png"
            alt={alt}
          />
        </div>

        <div
          className="bg-white opacity-55 h-44 w-auto absolute z-30 top-[calc(50%-6rem)] -left-4 pb-0 p-2 rounded-xl
          transition-transform origin-center duration-300
          group-hover:scale-90"
        >
          <Image
            className="h-full w-auto"
            width={667}
            height={1000}
            src="/images/features/4-2.png"
            alt={alt}
          />
        </div>

        <div
          className="bg-white opacity-55 h-44 w-auto absolute z-10 top-[calc(50%-6rem)] left-52 pb-0 p-2 rounded-xl
          transition-transform origin-center duration-300
          group-hover:scale-90"
        >
          <Image
            className="h-full w-auto max-w-none"
            width={667}
            height={1000}
            src="/images/features/4-3.png"
            alt={alt}
          />
        </div>

        <div
          className="bg-white opacity-55 h-44 w-auto absolute z-20 top-36 left-[calc(50%-5rem)] pb-0 p-2 rounded-xl
        transition-transform origin-center duration-300
        group-hover:scale-90"
        >
          <Image
            className="h-full w-auto"
            width={667}
            height={1000}
            src="/images/features/4-4.png"
            alt={alt}
          />
        </div>
      </div>
    );
  }
};

const component = ({ index, alt }: Props) => (
  <div
    className={classnames(
      { "mt-8": [0, 3].includes(index) },
      { "my-auto": [1, 2].includes(index) },
      { "xl:absolute xl:top-auto": [0, 1, 3].includes(index) },
      { "xl:bottom-0": [0, 1, 3].includes(index) },
      { "flex -mx-6 sm:mx-0 sm:my-0 xl:h-2/3 xl:inset-x-0": index === 0 },
      { "xl:inset-x-0 xl:h-1/2 xl:flex xl:justify-center": index === 1 },
      { "xl:relative xl:inset-0": index === 2 },
      { "sm:mt-0 md:h-full xl:w-1/2 xl:right-4": index === 3 },
      "sm:w-1/2 md:w-full"
    )}
  >
    {featureImage(index, alt)}
  </div>
);

export default component;
