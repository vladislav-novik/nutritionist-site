import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="py-12 px-6 max-w-7xl mx-auto md:flex md:items-center md:justify-between lg:px-8">
        <SocialLinks withBorder />
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-gray-400 text-sm leading-5 text-center">© 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
