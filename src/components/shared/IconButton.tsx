type Props = {
  children: React.ReactNode;
  onClick?: (event) => void;
  className?: string;
};

const component = ({ children, className, onClick }: Props) => (
  <button
    onClick={(e) => onClick && onClick(e)}
    className={`rounded-md border-1 font-bold transition-all
        active:scale-95
        focus-visible:outline-2 focus-visible:outline-primary-dark focus-visible:outline-dashed focus-visible:outline-offset-2
        hover:text-white hover:bg-secondary ${className}`}
  >
    {children}
  </button>
);

export default component;
