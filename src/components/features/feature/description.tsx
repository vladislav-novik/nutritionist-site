import classnames from 'classnames'

type Props = {
  title: string;
  content: string;
  index: number;
};

const component = ({ title, content, index }: Props) => (
  <div
    className={classnames(
      {"md:h-auto md:justify-between": index === 0},
      {"md:justify-end": [1, 2].includes(index) },
      {"xl:justify-start": index === 1},
      {"xl:max-w-72 xl:justify-end": index === 3},
      `w-full flex flex-col justify-start
      sm:w-1/2 sm:h-full
      md:w-full`
    )}
  >
    <h3 className="font-content text-2xl font-semibold">{title}</h3>
    <p className="font-content font-medium text-base">{content}</p>
  </div>
);

export default component;
