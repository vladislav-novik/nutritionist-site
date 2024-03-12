import classnames from 'classnames'

type Props = {
  children: React.ReactNode;
  className?: string;
};

const component = ({ children, className }: Props) => {
  return (
    <p className={classnames(className, `mt-6 font-content text-brand-darker text-center text-lg leading-8  
      lg:text-base lg:leading-6
      xl:text-lg xl:leading-8`)}>
      {children}
    </p>
  );
};

export default component;
