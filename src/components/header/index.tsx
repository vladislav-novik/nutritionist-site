"use client"

import { useState } from 'react'

import Image from 'next/image'
import LanguageSelector from '../LanguageSelector'
import MobilePanel from './MobilePanel'
import NavLinks from './NavLinks'
import { Squash as Hamburger } from 'hamburger-react'

type Props = {
  lang: string
}

export default function Header({ lang }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white max-h-16 my-auto sticky top-0 z-20 shadow-md shadow-slate-900/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6 lg:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <a href="/" className="-m-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={'/images/vegetables.png'} width={36} height={36} alt="logo"></Image>
          </a>
        </div>
        <div className="flex md:hidden">
          {/* <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          ></button> */}
          <span className="sr-only">Open main menu</span>
          <div className="flex items-center justify-center text-green-600 w-10 h-10">
            <Hamburger rounded size={20} toggled={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)}  aria-hidden="true" />
          </div>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <NavLinks mobileMenu={false} />
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <LanguageSelector lang={lang} />
        </div>
      </nav>
      <MobilePanel open={mobileMenuOpen} closeHandler={() => setMobileMenuOpen(false)} ></MobilePanel>
    </header>
  )
}