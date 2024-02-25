type Props = {
  children: React.ReactNode;
};

const component = ({ children }: Props) => {
  return (
    <h2 className="text-4xl font-semibold leading-7 text-[#154a2c]">
      {children}
    </h2>
  );
};

export default component;
