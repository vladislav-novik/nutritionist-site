import { IconType } from "react-icons";

type Props = {
  description?: string;
  children?: React.ReactNode;
  Icon: IconType;
};

const Component = ({ Icon, children, description }: Props) => {
  return (
    <div className="flex gap-x-4 ">
      <dt className="flex items-center">
        <span className="sr-only">{ description }</span>
        <Icon size={20} />
      </dt>
      <dd>{ children }</dd>
    </div>
  );
}

export default Component;