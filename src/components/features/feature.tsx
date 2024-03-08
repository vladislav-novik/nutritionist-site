import { Service } from "@/types/service";
import classnames from 'classnames'
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  isLast: boolean;
  feature: Service;
  animationConfig: any;
};

export const component = ({ feature, animationConfig, isLast = false }: Props) => {
  return (
    <motion.div
      {...animationConfig}
      // className={classnames("mx-auto", {"lg:col-span-2 xl:col-span-1": isLast})}
      className="bg-brand-lightest text-center rounded-[4rem] py-6 px-8 sm:max-w-96"
    >
      {/* <div className="bg-light text-center rounded-[4rem] py-6 px-8 sm:max-w-96"> */}
        <h3 className="font-content text-lg font-semibold text-brand-dark">
          Fast & Easy to Load
        </h3>
        <div className="relative w-full h-44 sm:h-52 lg:h-32 xl:h-48 flex items-center justify-center my-4">
          <Image
            src={feature.image as string}
            alt="Feature Image"
            // width={200}
            // height={200}
            fill
          />
        </div>
        <p className="font-content font-medium text-base text-brand-darker">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      {/* </div> */}
    </motion.div>
  );
};

export default component;
