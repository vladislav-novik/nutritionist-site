import { Service } from "@/types/service";
import classnames from 'classnames'
import { motion } from "framer-motion";
import Image from "next/image";

// type Props = {
//   feature: Service;
//   animationConfig: any;
// };

type Props = {
  feature: {
    title: string,
    content: string,
    image: string,
  };
  animationConfig: any;
  className: string;
  children: React.ReactNode
};

export const component = ({ animationConfig, className, children }: Props) => {
  return (
    // <motion.div
    <div
      {...animationConfig}
      className={classnames(className, "flex flex-col items-start",
      "sticky rounded-3xl min-h-[140vw] p-6 pt-10",
      "sm:min-h-min",
      "md:relative md:top-0 md:rounded-[2.5rem] md:py-8 md:px-8 md:min-h-80")}
    >
      {/* <div className="bg-light text-center rounded-[4rem] py-6 px-8 sm:max-w-96"> */}
        {children}
      {/* </div> */}
    </div>
    // </motion.div>
  );
};

export default component;
