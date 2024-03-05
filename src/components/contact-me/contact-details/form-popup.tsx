"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Form from "../form";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import classnames from "classnames";
import IconButton from "../../shared/IconButton";
import { useMemo, useRef, useState } from "react";
import useDetectClickOutside from "@/utils/hooks/useDetectClickOutside";

type Props = {
  show: boolean;
  hideFormHandler: () => void;
};

const Component = ({ show, hideFormHandler }: Props) => {
  const ref = useRef(null);
  useDetectClickOutside(ref, hideFormHandler);

  const width = useWindowWidth();
  const isMobile = width <= 640;

  const mobileFormVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0 },
    exit: { x: "-100vw" },
  };

  const formVariants = {
    hidden: { y: "100vh" },
    visible: { y: 0 },
    exit: { y: "100vh" },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={isMobile ? mobileFormVariants : formVariants}
          transition={{ type: "spring", stiffness: 50, bounce: 0.1 }}
          className={classnames(
            {
              "h-[120%]  rounded-t-lg": !isMobile,
              "h-full rounded-r-lg": isMobile,
            },
            "absolute top-0 -left-6 w-full bg-light py-4 px-6 shadow"
          )}
        >
          <div className={classnames({ "ml-6": isMobile })}>
            <div className="flex justify-end">
              <IconButton
                className="ml-auto py-1 px-2 text-primary-dark"
                onClick={(e) => {
                  e.preventDefault();
                  hideFormHandler();
                }}
              >
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
