import classnames from 'classnames'

type Props = {
  children: React.ReactNode;
  className?: string;
};

const component = ({ children, className }: Props) => {
  return (
    <p className={classnames(className, `font-content text-brand-darker text-center text-base leading-6
      sm:text-lg 
      lg:text-xl
      xl:leading-8`)}>
      {children}
    </p>
  );
};

export default component;
