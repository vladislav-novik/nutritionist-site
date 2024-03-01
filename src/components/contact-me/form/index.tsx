// import { submitRequest } from "@/app/(site)/(home)/action";

'use client'

import Button from "@/components/shared/Button";
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import Input from './input'
import Textarea from './textarea'

type Props = {
  show: boolean;
  hideFormHandler: () => void;
}

const Component = ({ show, hideFormHandler }: Props) => {
  const formVariants = {
    hidden: { opacity: 0, y: "100vh" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vh" },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.form
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={formVariants}
          transition={{ type: "spring", stiffness: 50 }}
          className="absolute top-0 left-0 w-full h-[120%] bg-[#fbf8e9] p-4 rounded-t shadow"
        >
          <div className="flex justify-end">
            <Button className="ml-auto py-1 px-2" onClick={(e) => {
                e.preventDefault();
                hideFormHandler();
            }}>
              <IoClose size={24} />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Input name="first-name" label="Your name" placeholder="John" focus />
            <Input name="how-to-reach" label="How to reach you" placeholder="WhatsApp: +123456789" />
            <Textarea name="message" label="Short description" placeholder="I want to feel better!" />
          </div>
          <Button type="submit" className="mt-10 px-12 py-2"></Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default Component;
