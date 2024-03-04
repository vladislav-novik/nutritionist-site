'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import Form from './form'
import useWindowWidth from '@/utils/hooks/useWindowWidth'
import classnames from 'classnames'
import IconButton from '../shared/IconButton'

type Props = {
  show: boolean;
  hideFormHandler: () => void;
}

const Component = ({ show, hideFormHandler }: Props) => {
  const width = useWindowWidth();
  const isMobile = width <= 640;

  const mobileFormVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100vw" },
  };

  const formVariants = {
    hidden: { opacity: 0, y: "100vh" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vh" },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={isMobile ? mobileFormVariants : formVariants}
          transition={{ type: "spring", stiffness: 50 }}
          className={classnames({
            'h-[120%]  rounded-t-lg': !isMobile,
            'h-full rounded-r-lg': isMobile, 
          }, "absolute top-0 -left-6 w-full bg-light py-4 px-6 shadow")}
        >
          <div className={classnames({ 'ml-6': isMobile })}>
            <div className="flex justify-end">
              <IconButton className="ml-auto py-1 px-2 text-primary-dark" onClick={(e) => {
                  e.preventDefault();
                  hideFormHandler();
              }}>
                <IoClose size={24} />
              </IconButton>
            </div>
            <Form />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Component;
