import classnames from 'classnames'

type Props = {
  to: string;
  children: React.ReactNode;
  type: 'primary' | 'secondary' | 'accent';
  size: 'sm' | 'md' | 'lg';
};

const component = ({ to, children, type, size }: Props) => {
  return (
    <a href={to} className={classnames("rounded-full border-1 hover:text-white hover:bg-secondary", {
      'bg-white text-primary-dark border-btn-border': type === 'primary',
      'bg-primary-dark text-tetriary border-primary-dark': type === 'secondary',
      'bg-tetriary text-primary-dark border-tetriary': type === 'accent',
      'px-8 py-4 text-md': size === 'sm',
      'px-12 py-6 text-xl': size === 'lg',
    })}>
      {children}
    </a>
  );
};

export default component;
