import Image from 'next/image'
import SocialLinks from '@/components/shared/SocialLinks'
import SubscribePointer from './subscribe-pointer'

export default function Header() {
  return (
    <header className="max-h-16 py-2 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center py-3 px-6 justify-between lg:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <a href="/" className="text-xl leading-relaxed text-primary-dark sm:-m-1.5">
            <span className="sr-only">MaryaNovikBrand</span>
            <Image className="inline-block" src={'/images/vegetables.png'} width={40} height={40} alt="logo"></Image>
            <span className="hidden sm:inline">MaryaNovikBrand</span>
          </a>
        </div>
        {/* <div className="flex md:hidden">
          <span className="sr-only">Open main menu</span>
          <div className="flex items-center justify-center text-green-600 w-10 h-10">
            <Hamburger rounded size={20} toggled={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)}  aria-hidden="true" />
          </div>
        </div> */}
        {/* hidden */}
        <div className="relative sm:flex sm:gap-x-12">
          {/* <NavLinks mobileMenu={false} /> */}
          <div className="flex justify-center space-x-6 sm:space-x-8 md:order-2">
            <SocialLinks size={24} />
          </div>
          <div className="hidden xl:block">
            <SubscribePointer />
          </div>
        </div>
      </nav>
      {/* <MobilePanel open={mobileMenuOpen} closeHandler={() => setMobileMenuOpen(false)} ></MobilePanel> */}
    </header>
  )
}