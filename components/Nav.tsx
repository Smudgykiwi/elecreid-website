'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const brandLinks = [
  { label: 'Apple Home', href: '/brands/apple-home' },
  { label: 'Basalte', href: '/brands/basalte' },
  { label: 'Home Assistant', href: '/brands/home-assistant' },
  { label: 'Control4', href: '/brands/control4' },
  { label: 'KNX', href: '/brands/knx' },
  { label: 'C-Bus', href: '/brands/cbus' },
  { label: 'Unifi', href: '/brands/unifi' },
  { label: 'Sonos', href: '/brands/sonos' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#1A1A1A]/[0.08]' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">

        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/logo-text-color3.svg"
            alt="Elec Reid"
            width={110}
            height={26}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/services"
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
          >
            Services
          </Link>

          {/* Brands dropdown */}
          <div className="relative group">
            <button className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5 cursor-pointer">
              Brands
              <svg
                className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 10 6"
                aria-hidden="true"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* Dropdown panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-[#F5F2EE] border border-[#1A1A1A]/10 rounded-xl p-5 grid grid-cols-2 gap-x-10 gap-y-3 min-w-[260px] shadow-2xl shadow-black/10">
                {brandLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[10px] tracking-[0.15em] uppercase text-[#1A1A1A]/60 hover:text-[#0134E7] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/projects"
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
          >
            About
          </Link>
          <Link
            href="/build"
            className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-6 py-2.5 rounded-full transition-colors"
          >
            Build Your Home
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#1A1A1A]/10 px-6 pt-6 pb-8 flex flex-col gap-5">
          {['Services', 'Projects', 'About', 'Contact'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60"
            >
              {label}
            </Link>
          ))}

          {/* Mobile Brands toggle */}
          <button
            onClick={() => setBrandsOpen(!brandsOpen)}
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 text-left flex items-center justify-between"
          >
            Brands
            <svg
              className={`w-2.5 h-2.5 transition-transform duration-200 ${brandsOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 10 6"
              aria-hidden="true"
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {brandsOpen && (
            <div className="pl-4 flex flex-col gap-3 -mt-2">
              {brandLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/40 hover:text-[#0134E7] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/build"
            onClick={() => setMenuOpen(false)}
            className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] text-white px-5 py-3 rounded-full text-center mt-2"
          >
            Build Your Home
          </Link>
        </div>
      )}
    </header>
  )
}
