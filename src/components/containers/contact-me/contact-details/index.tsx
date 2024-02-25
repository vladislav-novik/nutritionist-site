// import Form from './form'
"use client";

import Button from "@/components/shared/buttons/Button";
import { useState } from 'react'
import { IoLogoWhatsapp, IoMailOutline, IoClose } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import Form from '../form'
import Contact from './contact'

const ContactComponent = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="px-8 max-w-md mx-auto relative">
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p className="mb-4">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <dl className="text-base leading-6 my-10 space-y-4">
          <Contact Icon={IoLogoWhatsapp} description="WhatsApp account" >123-456-7890</Contact>
          <Contact Icon={PiTelegramLogo} description="Telegram account" >123-456-7890</Contact>
          <Contact Icon={IoMailOutline} description="Email">
            <a className="underline" href="mailto:testmail@example.com">
              testmail@example.com
            </a>
          </Contact>
        </dl>
        <p className="mb-10">
          You can fill in the form to click on the button and I contact you!
        </p>
        <Button className="px-12 py-2" onClick={() => setShowForm(true)}>Request a Call Back</Button>
      </div>
      <Form show={showForm} hideFormHandler={() => setShowForm(false)} />
    </div>
  );
};

export default ContactComponent;
