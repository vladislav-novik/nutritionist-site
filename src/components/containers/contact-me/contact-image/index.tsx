"use client";

import Image from "next/image";
import Message from "./message";

const component = () => {
  return (
    <div className="px-6 relative max-w-3xl lg:max-w-2xl lg:mx-0 lg:px-8">
      <div className="relative">
        <Image
          className="mx-auto"
          src="/images/contact/phone.png"
          width={400}
          height={600}
          alt=""
        />
        <div className="absolute inset-0 top-32">
          <Message animation={{delay: 0}} messageAssetPath="/images/contact/message-1.png" />
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
