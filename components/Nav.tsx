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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-black/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/logo-text-color3.svg"
            alt="Elec Reid"
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'HOME', href: '/' },
            { label: 'SERVICES', href: '/services' },
            { label: 'PROJECTS', href: '/projects' },
            { label: 'ABOUT', href: '/about' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.15em] font-medium text-[#1A1A1A] hover:text-[#0134E7] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/build"
            className="text-[11px] tracking-[0.15em] font-medium bg-[#0134E7] hover:bg-[#012ab8] text-white px-5 py-2.5 transition-colors"
          >
            BUILD YOUR HOME
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#1A1A1A] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#1A1A1A] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#1A1A1A] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-8 flex flex-col gap-6">
          {[
            { label: 'HOME', href: '/' },
            { label: 'SERVICES', href: '/services' },
            { label: 'PROJECTS', href: '/projects' },
            { label: 'ABOUT', href: '/about' },
            { label: 'CONTACT', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.15em] font-medium text-[#1A1A1A]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/build"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] tracking-[0.15em] font-medium bg-[#0134E7] text-white px-5 py-3 text-center"
          >
            BUILD YOUR HOME
          </Link>
        </div>
      )}
    </header>
  )
}
