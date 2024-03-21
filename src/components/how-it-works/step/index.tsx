import classnames from "classnames";
import Link from "@/components/shared/Link";
// import Step1 from "./assets/step-1";
// import Step2 from "./assets/step-2";
// import Step3 from "./assets/step-3";
import Image from 'next/image'
import config from "@/app/app.config";

type Props = {
  index: number;
};

const colors = ['brand-yellow', 'brand-pink', 'brand-blue']

const component = ({ index }: Props) => {
  const { dict } = config;
  const isOdd = (index + 1) % 2 === 1;
  const { title, description } = dict.sections.howItWorks.steps[index]

  return (
    <div className="grid gap-y-8 items-center grid-cols-1 md:gap-x-16 md:grid-cols-2 md:gap-y-8">
      <div
        className={classnames("relative sm:pl-6 md:px-0", {
          "md:order-1": !isOdd,
        })}
      >
        <div
          className={classnames(`bg-${colors[index]}`, "pt-8 px-8 rounded-xl max-w-lg w-full mx-auto lg:rounded-[2.5rem]")}
        >
          {/* {index === 0 && <Step1 />}
          {index === 1 && <Step2 />}
          {index === 2 && <Step3 />} */}
          <Image
            src={`/images/how-it-works/${index + 1}.png`}
            alt={title}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center mx-auto max-w-xs md:text-left md:mx-0">
          <h3 className="font-bold text-brand leading-none text-2xl">
            0{index + 1}. {title}
          </h3>
          <p className="text-base text-brand-darker my-6 md:my-8 lg:text-lg">
            {description}
          </p>
          <Link to="#contacts" size="sm" variant="primary">
            {dict.buttons.wantToStart}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default component;
