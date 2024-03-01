import Button from '@/components/shared/Button'
import classnames from 'classnames'
import Step1 from './assets/step-1'

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
    <div className="grid gap-y-6 items-center grid-cols-1 md:gap-x-16 md:grid-cols-2 md:gap-y-8">
      <div className={classnames("relative sm:pl-6 md:px-0", { "md:order-1": !isOdd })}>
        <div className={classnames("max-w-lg w-full mx-auto relative", {
          "md:mr-auto": isOdd,
          "md:ml-auto": !isOdd
        })}>
          <Step1 />
        </div>
      </div>
      <div className="text-center mx-auto max-w-xs md:text-left md:mx-0">
        <h3 className="text-3xl">
          0{index}.<br />
          {title}
        </h3>
        <p className="text-base my-6 md:my-8">
          {description}
        </p>
        <Button className="px-12 py-2" />
      </div>
    </div>
  );
}

export default component;