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
          "bg-gradient-to-br from-brand-green-light to-brand-green-dark text-brand-green-text top-12 sm:top-20":
            index === 0,
        },
        {
          "bg-gradient-to-br from-brand-pink-light to-brand-pink-dark text-brand-pink-text top-16 sm:top-24":
            index === 1,
        },
        {
          "bg-gradient-to-br from-brand-blue-light to-brand-blue-dark text-brand-blue-text top-20 sm:top-28":
            index === 2,
        },
        {
          "bg-gradient-to-br from-brand-yellow-light to-brand-yellow-dark text-brand-yellow-text top-24 sm:top-32":
            index === 3,
        },
        `group flex flex-col items-start
        sticky rounded-3xl min-h-[140vw] p-6 pt-10
        sm:flex-row sm:min-w-80 sm:min-h-72
        md:relative md:top-0 md:flex-col
        lg:rounded-[2.5rem] lg:py-8 lg:px-8 lg:min-h-80`
      )}
    >
      <Description index={index} title={title} content={content} />
      {/* <FeatureImage index={index} alt={title} /> */}
    </div>
    // </motion.div>
  );
};

export default component;
