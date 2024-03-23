import classnames from "classnames";
import { motion } from "framer-motion";
import Description from "./description";
import FeatureImage from "./image";

type Props = {
  feature: {
    title: string;
    content: string;
    image: string;
  }
  index: number;
  animationConfig: any;
};

const component = ({ animationConfig, index, feature }: Props) => {
  const { title, content } = feature

  return (
    // <motion.div
    <div
      // {...animationConfig}
      className={classnames(
        {
          "bg-brand-green text-brand-green-dark top-12 sm:top-20 row-span-1 col-span-1 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-5":
            index === 0,
        },
        {
          "bg-brand-pink text-brand-pink-dark top-16 sm:top-24 row-span-1 col-span-1 md:flex-col-reverse lg:row-start-1 lg:row-end-2 lg:col-start-5 lg:col-end-8":
            index === 1,
        },
        {
          "bg-brand-blue text-brand-blue-dark top-20 sm:top-28 row-span-1 col-span-1 md:flex-col-reverse lg:row-start-1 lg:row-end-2 lg:col-start-8 lg:col-end-11":
            index === 2,
        },
        {
          "bg-brand-yellow text-brand-yellow-dark top-24 sm:top-32 row-span-1 col-span-1 lg:row-start-2 lg:row-end-3 lg:col-start-5 lg:col-end-11":
            index === 3,
        },
        `flex flex-col items-start
        sticky rounded-3xl min-h-[140vw] p-6 pt-10
        sm:flex-row sm:min-h-72
        md:relative md:top-0 md:flex-col md:min-h-min
        lg:rounded-[2.5rem] lg:py-8 lg:px-8 lg:min-h-80`
      )}
    >
      <Description index={index} title={title} content={content} />
      <FeatureImage index={index} alt={title} />
    </div>
    // </motion.div>
  );
};

export default component;
