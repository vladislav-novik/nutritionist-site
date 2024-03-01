import classnames from 'classnames'

type Props = {
  children: React.ReactNode;
  className?: string;
};

const component = ({ children, className }: Props) => {
  return (
    <p className={classnames(className, "mt-6 font-content text-center text-lg leading-8 text-gray-600 md:text-left")}>
      {children}
    </p>
  );
};

export default component;
