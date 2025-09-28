'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false) 

  const navLinks = [
    { name: 'Platform', href: '/' },
    { name: 'Solutions', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'Resources', href: '/', submenu: [{ name: 'Blog', href: '/blog' }] },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="absolute top-5 left-5 right-5 z-[999]">
      <div className=" w-full sm:w-[95%] mx-auto flex justify-between items-center px-4 sm:px-8 py-4 bg-white rounded-full relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/assets/images/Main_Logo.png" 
            alt="Logo" 
            width={220} 
            height={40} 
            priority 
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden [@media(min-width:1200px)]:flex space-x-8 items-center relative">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#004487] hover:text-[#009588] font-[var(--font-varela-round)] transition-colors text-[24px]">
                  {link.name} <FiChevronDown />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md text-center text-[24px]">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 text-[#004487] hover:bg-[#f0f0f0] transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#004487] hover:text-[#009588] font-[var(--font-varela-round)] transition-colors text-[22px]"
              >
                {link.name}
              </Link>
            )
          )}
          {/* Login Button */}
          <Link
            href="/login"
            className="px-4 py-1 bg-[#004487] text-white text-[18px] rounded-full hover:bg-[#007766] transition-colors"
          >
            Log In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="[@media(max-width:1199px)]:block hidden text-[#004487] focus:outline-none"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="[@media(max-width:1199px)]:block hidden bg-white/95 w-full absolute top-full left-0 shadow-lg z-40 rounded-2xl">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) =>
              link.submenu ? (
                <li key={link.name} className="w-full">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex justify-center items-center w-full px-6 py-2 text-[#004487] text-[22px] hover:text-[#009588] transition-colors"
                  >
                    {link.name} <FiChevronDown />
                  </button>
                  {mobileResourcesOpen && (
                    <ul className="flex flex-col w-full bg-white p-0">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            href={sublink.href}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-[#004487] text-[22px] hover:text-[#009588] transition-colors text-center"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[#004487] text-[22px] hover:text-[#009588] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
            {/* Login Button */}
            <li>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-6 py-2 bg-[#004487] text-white text-[22px] rounded-full hover:bg-[#007766] transition-colors"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
