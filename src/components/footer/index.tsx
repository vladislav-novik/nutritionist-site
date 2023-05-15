import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white mx-auto overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
      <nav className="columns-2 -mb-6 space-x-12 sm:flex sm:justify-center" aria-label="Footer">
        <div className="pb-6">
          <Link href={'/#main'} className="text-gray-600 leading-6 text-sm">Home</Link>
        </div>
        <div className="pb-6">
          <Link href={'#about'} className="text-gray-600 leading-6 text-sm">Services</Link>
        </div>
        <div className="pb-6">
          <Link href={'#about'} className="text-gray-600 leading-6 text-sm">Testimonials</Link>
        </div>
        <div className="pb-6">
          <Link href={'#about'} className="text-gray-600 leading-6 text-sm">Blog</Link>
        </div>
        <div className="pb-6">
          <Link href={'#about'} className="text-gray-600 leading-6 text-sm">Contact</Link>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-10 sm:space-x-10">
        <Link href="https://twitter.com/JeffreySunny1" className="text-gray-400">
          Twitter
        </Link>
        <Link href="https://linkedin.com/in/jeffsalive" className="text-gray-400">
          LinkedIn
        </Link>
        <Link href="https://jeffreynwankwo.com" className="text-gray-400">
          Website
        </Link>
      </div>
      <p className="text-gray-500 leading-5 text-xs text-center mt-10">© 2020 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};