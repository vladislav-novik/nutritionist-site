import Button from '@/components/shared/buttons/Button'
import classnames from 'classnames'
import Image from "next/image";

type Props = {
  index: number,
  title: string,
  description: string,
  children: JSX.Element
};

const component = (props: Props) => {
  const { index, title, description, children } = props;

  const isOdd = index % 2 === 1;

  return (
    <div className="grid gap-y-8 items-center grid-cols-1 md:gap-x-16 md:grid-cols-2">
      <div className={classnames("relative pr-6 pl-20 sm:pl-6 md:px-0", { "order-1": !isOdd })}>
        <div className={classnames("max-w-xs w-full mb-10 mt-4 relative order-1", {
          "mr-auto": isOdd,
          "ml-auto": !isOdd
        })}>
          <Image className="ml-auto"
            src={`/images/how-it-works/step-${index}.png`}
            width={846} height={548}
            alt={`step ${index}`}
          />
          <div className={classnames("absolute -top-8", {
            "-right-16": isOdd,
            "-left-16": !isOdd
          })}>
            <div className="bg-white rounded-md drop-shadow-xl">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xs">
        <h3 className="text-3xl">
          0{index}.<br />
          {title}
        </h3>
        <p className="text-base my-8">
          {description}
        </p>
        <Button className="px-12 py-2" />
      </div>
    </div>
  );
}

export default component;