'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const residentialBrands = [
  { label: 'Apple Home', href: '/brands/apple-home' },
  { label: 'Basalte', href: '/brands/basalte' },
  { label: 'Home Assistant', href: '/brands/home-assistant' },
  { label: 'Control4', href: '/brands/control4' },
  { label: 'KNX', href: '/brands/knx' },
  { label: 'Ekinex', href: '/brands/ekinex' },
  { label: 'C-Bus', href: '/brands/cbus' },
  { label: 'Core Smart Home', href: '/brands/core-smart-home' },
  { label: 'Unifi', href: '/brands/unifi' },
  { label: 'Sonos', href: '/brands/sonos' },
  { label: 'Audio', href: '/brands/audio' },
]

const commercialBrands = [
  { label: 'Logitech', href: '/brands/logitech' },
  { label: 'Q-SYS by QSC', href: '/brands/qsc' },
  { label: 'Samsung', href: '/brands/samsung' },
  { label: 'Audio & Live Sound', href: '/brands/audio' },
  { label: 'L-Acoustics', href: '/brands/l-acoustics' },
  { label: 'Video Walls', href: '/brands/video-wall' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false)

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
          <Image src="/logos/logo-text-color3.svg" alt="Elec Reid" width={110} height={26} className="h-6 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link href="/services" className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">
            Services
          </Link>

          {/* Brands dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <button className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors flex items-center gap-1">
              Brands
              <span className={`text-[8px] transition-transform duration-200 ${brandsOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {brandsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#1A1A1A]/8 shadow-xl min-w-[520px] p-6 z-50">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[8px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-4">Residential</p>
                    <div className="space-y-2">
                      {residentialBrands.map((b) => (
                        <Link key={b.href} href={b.href}
                          className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/70 hover:text-[#0134E7] transition-colors py-0.5">
                          {b.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[8px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-4">Commercial</p>
                    <div className="space-y-2">
                      {commercialBrands.map((b) => (
                        <Link key={b.href} href={b.href}
                          className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/70 hover:text-[#0134E7] transition-colors py-0.5">
                          {b.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#1A1A1A]/8 mt-6 pt-4">
                  <Link href="/brands" className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase hover:underline">
                    All brands →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/projects" className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">
            About
          </Link>
          <Link href="/build" className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-6 py-2.5 rounded-full transition-colors">
            Build Your Home
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-5 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#1A1A1A]/10 px-6 pt-6 pb-8 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {['Services', 'Projects', 'About'].map((label) => (
            <Link key={label} href={`/${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60">
              {label}
            </Link>
          ))}

          {/* Mobile Brands */}
          <button
            onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 text-left flex items-center justify-between"
          >
            Brands <span className={`transition-transform ${mobileBrandsOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>

          {mobileBrandsOpen && (
            <div className="pl-4 space-y-4">
              <div>
                <p className="text-[8px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-2">Residential</p>
                {residentialBrands.map((b) => (
                  <Link key={b.href} href={b.href} onClick={() => setMenuOpen(false)}
                    className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-1">
                    {b.label}
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-[8px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-2">Commercial</p>
                {commercialBrands.map((b) => (
                  <Link key={b.href} href={b.href} onClick={() => setMenuOpen(false)}
                    className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-1">
                    {b.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link href="/build" onClick={() => setMenuOpen(false)}
            className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] text-white px-5 py-3 rounded-full text-center mt-2">
            Build Your Home
          </Link>
        </div>
      )}
    </header>
  )
}
