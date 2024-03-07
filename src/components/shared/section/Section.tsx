type Props = {
  children: React.ReactNode;
  className: string;
  id: string;
};

const component = ({ children, id, className }: Props) => (
  <section id={id} className={`${className} overflow-hidden`}>
    {children}
  </section>
);

export default component