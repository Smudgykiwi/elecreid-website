'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#1A1A1A]/8' : 'bg-transparent'
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
          {['Services', 'Projects', 'About'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/build"
            className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-6 py-2.5 transition-colors"
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
          <Link
            href="/build"
            onClick={() => setMenuOpen(false)}
            className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] text-white px-5 py-3 text-center mt-2"
          >
            Build Your Home
          </Link>
        </div>
      )}
    </header>
  )
}
