import Image from 'next/image'
import SocialLinks from '@/components/shared/SocialLinks'
import SubscribePointer from './subscribe-pointer'
import NavLinks from './NavLinks'

export default function Header() {
  return (
    <header className="py-2 md:py-4">
      <nav className="mx-auto flex max-w-7xl items-center py-3 px-6 justify-between lg:px-8" aria-label="Global">
        {/* <div className="hidden md:block md:space-x-4 lg:space-x-6">
          <NavLinks mobileMenu={false} />
        </div> */}
        <div className="w-full flex justify-center">
          <div className="relative flex items-center">
            <Image className="inline-block w-10 h-auto sm:w-16" src={'/images/logo.png'} width={66} height={66} alt="logo"></Image>
            <div className="ml-2 flex flex-col items-center">
              <span className="sr-only">Marya Novik</span>
              <span className="text-lg leading-none font-content uppercase text-brand sm:text-2xl">Marya Novik</span>
              <span className="text-base font-cursive text-accent sm:text-xl">Nutritionist</span>
            </div>
            <a className="absolute inset-0" href="" />
          </div>
        </div>
        {/* <div className="flex md:hidden">
          <span className="sr-only">Open main menu</span>
          <div className="flex items-center justify-center text-green-600 w-10 h-10">
            <Hamburger rounded size={20} toggled={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)}  aria-hidden="true" />
          </div>
        </div> */}
        {/* hidden */}
        {/* <div className="relative sm:flex sm:gap-x-12">
          <div className="flex justify-center space-x-6 sm:space-x-8 md:order-2">
            <SocialLinks size={24} />
          </div>
        </div> */}
      </nav>
      {/* <MobilePanel open={mobileMenuOpen} closeHandler={() => setMobileMenuOpen(false)} ></MobilePanel> */}
    </header>
  )
}