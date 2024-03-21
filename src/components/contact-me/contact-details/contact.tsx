import { IconType } from "react-icons";

type Props = {
  description?: string;
  children?: React.ReactNode;
  Icon: IconType;
  iconClass?: string
};

const Component = ({ Icon, children, description, iconClass = "text-lg" }: Props) => {
  return (
    <div className="flex justify-start gap-x-4 lg:justify-start">
      <dt className="flex items-center">
        <span className="sr-only">{ description }</span>
        <Icon className={iconClass}  />
      </dt>
      <dd>{ children }</dd>
    </div>
  );
}

export default Component;