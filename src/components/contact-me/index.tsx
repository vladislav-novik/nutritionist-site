'use client'

import ContactDetails from './contact-details'
import ContactImage from './contact-image'
import { useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'


export default function ContactUs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, axis: 'y', offset: ["start end", "end start"] });

  const backgroundColorTransition = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['#ffffff', '#006a42', '#006a42', '#ffffff']);

  useEffect(() => {
    backgroundColorTransition.on('change', (value) => {
      document.body.style.backgroundColor = value;
    });

    return () => {
      backgroundColorTransition.destroy();
      document.body.style.backgroundColor = '';
    };
  }, [backgroundColorTransition, scrollYProgress]);

  return (
    <section id="contact-me" className="pt-12 sm:pt-24 min-h-[300vh]" ref={ref}>
      <div className="sticky top-0 h-screen py-16">
        <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-2 relative">
          <div className="px-8 max-w-md mx-auto text-center relative lg:max-w-lg lg:text-left">
            <ContactDetails />
          </div>
          <ContactImage className="mt-12 lg:mt-0" />
        </div>
      </div>
    </section>
  )
}