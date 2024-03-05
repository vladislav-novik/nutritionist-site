import classnames from 'classnames'
import Link from '@/components/shared/Link'
import Step1 from './assets/step-1'
import Step2 from './assets/step-2'
import Step3 from './assets/step-3'
import config from '@/app/app.config'

type Props = {
  index: number,
  title: string,
  description: string
};

const component = ({ index, title, description }: Props) => {
  const { dict } = config
  const isOdd = (index + 1) % 2 === 1

  return (
    <div className="grid gap-y-8 items-center grid-cols-1 md:gap-x-16 md:grid-cols-2 md:gap-y-8">
      <div className={classnames("relative sm:pl-6 md:px-0", { "md:order-1": !isOdd })}>
        <div className={classnames("max-w-lg w-full mx-auto relative", {
          // "md:mr-auto": isOdd,
          // "md:ml-auto": !isOdd
        })}>
          {index === 0 && <Step1 />}
          {index === 1 && <Step2 />}
          {index === 2 && <Step3 />}
        </div>
      </div>
      <div className="flex justify-center">
      <div className="text-center mx-auto max-w-xs md:text-left md:mx-0">
        <h3 className="font-bold text-primary leading-none text-2xl">
          0{index + 1}. {dict.sections.howItWorks.steps[index].title}
        </h3>
        <p className="text-base text-primary my-6 md:my-8">
          {dict.sections.howItWorks.steps[index].description}
        </p>
        <Link to="#contact-me" size='sm' variant='primary'>{dict.buttons.wantToStart}</Link>
      </div>
      </div>
    </div>
  );
}

export default component;