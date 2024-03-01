import classnames from 'classnames'

type size = 'sm' | 'md' | 'lg';
type variant = 'primary' | 'secondary' | 'accent';
type Props = {
  to: string;
  children: React.ReactNode;
  type: variant;
  size: size;
};

const component = ({ to, children, type, size }: Props) => {
  return (
    <a href={to} className={classnames(`rounded-full border-1 font-bold transition-all
      focus:scale-95
      hover:text-white hover:bg-secondary`, {
        'bg-primary-dark text-tetriary border-primary-dark': type === 'primary',
      'bg-white text-primary-dark border-btn-border': type === 'secondary',
      'bg-tetriary text-primary-dark border-tetriary': type === 'accent',
      'px-8 py-4 text-md': size === 'sm',
      'px-10 py-5 text-lg': size === 'md',
      'px-12 py-6 text-xl': size === 'lg',
    })}>
      {children}
    </a>
  );
};

export default component;
