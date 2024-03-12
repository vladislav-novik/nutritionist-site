import classnames from 'classnames'

type Props = {
  children: React.ReactNode;
  className?: string;
};

const component = ({ children, className }: Props) => {
  return (
    <h2 className={classnames(className, `font-heading text-3xl font-semibold leading-none text-brand-dark
      md:text-4xl`)}>
      {children}
    </h2>
  );
};

export default component;
