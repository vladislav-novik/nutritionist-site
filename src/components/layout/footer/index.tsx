import SocialLinks from "@/components/shared/SocialLinks";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-brand-dark" />
        <div className="py-6 mx-auto grid grid-cols-1 md:flex md:items-center md:justify-between">
          <div className="mt-4 w-full flex justify-center md:w-auto md:mt-0">
            <a
              href="#"
              className="flex items-center text-xl leading-relaxed text-brand-darkest"
            >
              <span className="sr-only">MaryaNovikBrand</span>
              <Image
                className="inline-block"
                src={"/images/vegetables.png"}
                width={40}
                height={40}
                alt="logo"
              ></Image>
              <span>MaryaNovikBrand</span>
            </a>
          </div>

          <div className="-order-1 flex justify-center space-x-6 sm:space-x-8 md:order-none">
            <SocialLinks withBorder />
          </div>
          <div className="order-1 mt-8 md:mt-0 md:order-none">
            <p className="text-brand-darker text-base font-semibold leading-5 text-center">
              © 2024 by Marya Novik
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
