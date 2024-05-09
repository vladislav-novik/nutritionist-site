import Link from "@/components/shared/Link";

type Props = {
  title: string;
  content: string;
  index: number;
};

const component = ({ title, content, index }: Props) => (
  <div className="md:max-w-md">
    <div className="p-6 w-full flex flex-col justify-start">
      <h3 className="font-content mb-2 text-2xl font-semibold">{title}</h3>
      <p className="font-content font-medium text-base">{content}</p>
    </div>
  </div>
);

export default component;
