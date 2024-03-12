"use client";

import SectionTitle from "@/components/shared/section/Title";
import Button from "@/components/shared/Button";
import { useState } from "react";
import { IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import Contact from "./contact";
import config from "@/app/app.config";
import SectionDescription from "@/components/shared/section/Description";
import FormPopup from "./form-popup";

const ContactComponent = () => {
  const { dict } = config;
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <SectionTitle className="text-white text-2xl font-bold mb-2">
        {dict.sections.contactMe.title}
      </SectionTitle>
      <SectionDescription className="mt-6 text-white lg:text-left">
        {dict.sections.contactMe.content}
      </SectionDescription>
      <div className="flex justify-center my-10 lg:justify-start">
        <dl className="text-white text-base leading-6 space-y-4">
          <Contact Icon={IoLogoWhatsapp} description="WhatsApp account">
            {dict.contactInfo.whatsApp}
          </Contact>
          <Contact Icon={PiTelegramLogo} description="Telegram account">
            {dict.contactInfo.telegram}
          </Contact>
          <Contact Icon={IoMailOutline} description="Email">
            <a className="underline" href={`mailto:${dict.contactInfo.email}`}>
              {dict.contactInfo.email}
            </a>
          </Contact>
        </dl>
      </div>
      <p className="mb-10 text-white">
        You can fill in the form to click on the button and I contact you!
      </p>
      {/* <Link to="" size="sm" variant="accent">Заполнить форму!</Link> */}
      <Button variant="accent" size="sm" onClick={() => setShowForm(true)}>
        {dict.buttons.fillInForm}
      </Button>
      <FormPopup show={showForm} hideFormHandler={() => setShowForm(false)} />
    </>
  );
};

export default ContactComponent;
