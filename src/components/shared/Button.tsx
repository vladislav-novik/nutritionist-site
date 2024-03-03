"use client";

import classnames from 'classnames'

type size = 'sm' | 'md' | 'lg';
type variant = 'primary' | 'secondary' | 'accent';
type Props = {
  children: React.ReactNode;
  variant: variant;
  size: size;
  type?: "button" | "submit";
  onClick?: (event) => void;
};

const component = ({ type = 'button', children, variant, size, onClick }: Props) => {
  return (
    <button 
      type={type} 
      onClick={(e) => onClick && onClick(e)}
      className={classnames(`rounded-full border-1 font-bold transition-all
      focus:scale-95
      hover:text-white hover:bg-secondary`, {
        'bg-primary-dark text-tetriary border-primary-dark': variant === 'primary',
      'bg-white text-primary-dark border-btn-border': variant === 'secondary',
      'bg-tetriary text-primary-dark border-tetriary': variant === 'accent',
      'px-8 py-4 text-md': size === 'sm',
      'px-10 py-5 text-lg': size === 'md',
      'px-12 py-6 text-xl': size === 'lg',
    })}>
      {children}
    </button>
  );
};

export default component;
