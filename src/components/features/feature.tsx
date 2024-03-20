import classnames from 'classnames'

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
      {children}
    </div>
  );
};

export default component;
