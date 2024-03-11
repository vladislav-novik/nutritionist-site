import SocialLinks from "@/components/shared/SocialLinks"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-brand-lighter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* <hr className="border-gray-200" /> */}
        <div className="py-12 mx-auto md:flex md:items-center md:justify-between">
          <div className="mt-8 md:mt-0">
            <p className="text-gray-400 text-sm leading-5 text-center">
              © 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
          <a href="#top" className="text-xl leading-relaxed text-primary-dark sm:-m-1.5">
            <span className="sr-only">MaryaNovikBrand</span>
            <Image className="inline-block" src={'/images/vegetables.png'} width={40} height={40} alt="logo"></Image>
            <span className="hidden sm:inline">MaryaNovikBrand</span>
          </a>
          <div className="flex justify-center space-x-6 sm:space-x-8 md:order-2">
            <SocialLinks withBorder />
          </div>
        </div>
      </div>
    </footer>
  );
}
