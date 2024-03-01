import SocialLinks from "@/components/shared/SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-gray-200" />
        <div className="py-12 mx-auto md:flex md:items-center md:justify-between">
          <div className="mt-8 md:mt-0">
            <p className="text-gray-400 text-sm leading-5 text-center">
              © 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
          <SocialLinks withBorder />
        </div>
      </div>
    </footer>
  );
}
