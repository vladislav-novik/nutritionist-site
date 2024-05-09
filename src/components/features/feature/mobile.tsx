import classnames from 'classnames'
import Description from './description'
import FeatureImage from './image'

type Props = {
  feature: {
    title: string;
    content: string;
    image: string;
  };
  index: number;
  className?: string;
};

const component = ({ index, className, feature }: Props) => (
  <div
    className={classnames(
      {
        "bg-green text-brand-green-text top-12 sm:top-20": index === 0,
      },
      {
        "bg-pink text-brand-pink-text top-16 sm:top-24": index === 1,
      },
      {
        "bg-blue text-brand-blue-text top-20 sm:top-28": index === 2,
      },
      {
        "bg-yellow text-brand-yellow-text top-24 sm:top-32": index === 3,
      },
      `group flex flex-col items-start
          sticky rounded-3xl min-h-[140vw]
          sm:flex-row sm:min-w-80 sm:min-h-72
          md:rounded-3xl md:max-w-7xl md:w-full md:flex md:gap-x-8 md:absolute md:top-0`,
      className
    )}
  >
    <Description
      index={index}
      title={feature.title}
      content={feature.content}
    />
    <FeatureImage index={index} alt={feature.title} />
  </div>
);

export default component;