import Image from 'next/image'
import MobilePanel from './MobilePanel'
import { Squash as Hamburger } from 'hamburger-react'
import SocialLinks from '@/components/shared/SocialLinks'

type Props = {
  lang: string
}

export default function Header({ lang }: Props) {
  return (
    <header className="max-h-16 bg-[#fbf8e9] py-2">
      <nav className="mx-auto flex max-w-7xl items-center justify-center py-3 px-6 sm:justify-between lg:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <a href="/" className="-m-1.5 text-xl leading-relaxed text-[#345753]">
            <span className="sr-only">Your Company</span>
            <Image className="inline-block" src={'/images/vegetables.png'} width={36} height={36} alt="logo"></Image>
            MaryaNovikBrand
          </a>
        </div>
        {/* <div className="flex md:hidden">
          <span className="sr-only">Open main menu</span>
          <div className="flex items-center justify-center text-green-600 w-10 h-10">
            <Hamburger rounded size={20} toggled={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)}  aria-hidden="true" />
          </div>
        </div> */}
        <div className="hidden sm:flex sm:gap-x-12">
          {/* <NavLinks mobileMenu={false} /> */}
          <SocialLinks size={24} />
        </div>
      </nav>
      {/* <MobilePanel open={mobileMenuOpen} closeHandler={() => setMobileMenuOpen(false)} ></MobilePanel> */}
    </header>
  )
}