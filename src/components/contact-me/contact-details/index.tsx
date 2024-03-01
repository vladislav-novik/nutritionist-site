"use client";

import SectionTitle from "@/components/shared/section/Title";
import Button from "@/components/shared/Button";
import { useState } from "react";
import { IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import Form from "../form";
import Contact from "./contact";
import config from "@/app/app.config";
import SectionDescription from "@/components/shared/section/Description";
import Link from '@/components/shared/Link'

const ContactComponent = () => {
  const { dict } = config;
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <SectionTitle className="text-white text-2xl font-bold mb-2">
        {dict.sections.contactMe.title}
      </SectionTitle>
      <SectionDescription className="mb-4 text-white">
        {dict.sections.contactMe.content}
      </SectionDescription>
      <dl className="text-white text-base leading-6 my-10 space-y-4">
        <Contact Icon={IoLogoWhatsapp} description="WhatsApp account">
          123-456-7890
        </Contact>
        <Contact Icon={PiTelegramLogo} description="Telegram account">
          123-456-7890
        </Contact>
        <Contact Icon={IoMailOutline} description="Email">
          <a className="underline" href="mailto:testmail@example.com">
            testmail@example.com
          </a>
        </Contact>
      </dl>
      <p className="mb-10 text-white">
        You can fill in the form to click on the button and I contact you!
      </p>
      <Link to="" size='sm' type='accent'>Заполнить форму!</Link>
      {/* <Button className="px-12 py-2" onClick={() => setShowForm(true)}>
        Request a Call Back
      </Button>
      <Form show={showForm} hideFormHandler={() => setShowForm(false)} /> */}
    </>
  );
};

export default ContactComponent;
