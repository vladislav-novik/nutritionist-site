import classnames from 'classnames'
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const component = ({ children, className }: Props) => {
  return (
    <p
      className={classnames(
        className,
        "mt-6 font-content text-center text-lg leading-8 text-primary"
      )}
    >
      {children}
    </p>
  );
}

export default component;
