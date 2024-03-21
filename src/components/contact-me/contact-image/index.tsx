import Image from "next/image";
import Message from "./message";
import classnames from 'classnames'

type Props = {
  className?: string;
};

const component = ({ className }: Props) => {
  return (
    <div className={classnames("relative max-w lg:max-w-2xl lg:mx-0", className)}>
      <div className="relative">
        <Image
          className="mx-auto w-full"
          src="/images/contact/phone.png"
          width={400}
          height={600}
          alt="Contact me"
        />
        <div className="absolute inset-0 top-32">
          <Message 
            animation={{delay: 0}}
            messageAssetPath="/images/contact/message-1.png" />
          <Message
              animation={{delay: 1.5}}
              className="mt-8"
              messageAssetPath="/images/contact/message-2.png"
            />
        </div>
      </div>
    </div>
  );
};

export default component;
