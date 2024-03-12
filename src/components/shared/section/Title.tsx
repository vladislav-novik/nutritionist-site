import classnames from 'classnames'

type Props = {
  children: React.ReactNode;
  className?: string;
};

const component = ({ children, className }: Props) => {
  return (
    <h2 className={classnames(className, "font-heading text-4xl font-semibold leading-none text-brand-dark")}>
      {children}
    </h2>
  );
};

export default component;
