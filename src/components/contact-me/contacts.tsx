import classnames from "classnames";
import Contact from "./contact-details/contact";
import { IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import config from "@/app/app.config";

const { dict } = config;

const component = () => (
  
    <div className="flex justify-center">
      <dl className="text-brand-pink-dark text-xl leading-6 space-y-4">
        <Contact Icon={IoLogoWhatsapp} iconClass="text-3xl" description="WhatsApp account">
          {dict.contactInfo.whatsApp}
        </Contact>
        <Contact Icon={PiTelegramLogo} iconClass="text-3xl" description="Telegram account">
          <a className="underline" href={dict.contactInfo.telegram}>
            {dict.contactInfo.telegram}
          </a>
        </Contact>
        <Contact Icon={IoMailOutline} iconClass="text-3xl" description="Email">
          <a className="underline" href={`mailto:${dict.contactInfo.email}`}>
            {dict.contactInfo.email}
          </a>
        </Contact>
      </dl>
    </div>
);

export default component;
