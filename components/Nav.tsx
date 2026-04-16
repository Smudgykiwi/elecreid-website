'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const residentialCategories = [
  {
    label: 'Smart Home Systems',
    href: '/brands/apple-home',
    brands: [
      { label: 'Apple Home', href: '/brands/apple-home' },
      { label: 'Home Assistant', href: '/brands/home-assistant' },
      { label: 'Control4', href: '/brands/control4' },
      { label: 'C-Bus', href: '/brands/cbus' },
      { label: 'Basalte Home', href: '/brands/basalte' },
    ],
  },
  {
    label: 'Touchscreens & Keypads',
    href: '/brands/basalte',
    brands: [
      { label: 'Basalte (Ellie, Lisa, Sentido, Fibonacci, Adelante)', href: '/brands/basalte' },
      { label: 'Core Smart Home (Eclipse)', href: '/brands/core-smart-home' },
      { label: 'Ekinex (20Venti, Proxima)', href: '/brands/ekinex' },
      { label: 'Control4 (T5, Lux, DS3)', href: '/brands/control4' },
    ],
  },
  {
    label: 'Networking',
    href: '/brands/unifi',
    brands: [
      { label: 'Unifi', href: '/brands/unifi' },
      { label: 'TP-Link', href: '/brands/tp-link' },
    ],
  },
  {
    label: 'Audio',
    href: '/brands/sonos',
    brands: [
      { label: 'Sonos', href: '/brands/sonos' },
      { label: 'WiiM', href: '/brands/wiim' },
    ],
  },
  {
    label: 'Cameras',
    href: '/brands/cameras',
    brands: [
      { label: 'UniFi Protect', href: '/brands/cameras' },
      { label: 'TP-Link Vigi', href: '/brands/tp-link' },
    ],
  },
  {
    label: 'Security',
    href: '/brands/security',
    brands: [
      { label: 'Security Systems', href: '/brands/security' },
    ],
  },
]

const industrialLinks = [
  { label: 'Electrical Compliance', href: '/industrial' },
  { label: 'Switchboard Upgrades', href: '/industrial' },
  { label: 'Access Control', href: '/industrial' },
  { label: 'Security Systems', href: '/industrial' },
  { label: 'Structured Cabling', href: '/industrial' },
  { label: 'Maintenance Contracts', href: '/industrial' },
  { label: 'Commercial AV', href: '/commercial' },
]

const commercialCategories = [
  {
    label: 'Meeting Rooms',
    href: '/brands/logitech',
    brands: [
      { label: 'Logitech', href: '/brands/logitech' },
    ],
  },
  {
    label: 'Screens & Visuals',
    href: '/brands/samsung',
    brands: [
      { label: 'Samsung', href: '/brands/samsung' },
      { label: 'Video Walls', href: '/brands/video-wall' },
    ],
  },
  {
    label: 'Audio',
    href: '/brands/audio',
    brands: [
      { label: 'Quest', href: '/brands/quest' },
      { label: 'd&b audiotechnik', href: '/brands/db-audiotechnik' },
      { label: 'L-Acoustics', href: '/brands/l-acoustics' },
    ],
  },
  {
    label: 'Building Management',
    href: '/brands/qsc',
    brands: [
      { label: 'KNX', href: '/brands/knx' },
      { label: 'Philips Dynalite', href: '/brands/dynalite' },
      { label: 'Q-SYS', href: '/brands/qsc' },
    ],
  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#1A1A1A]/8' : 'bg-[#16253F]/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">

        <Link href="/" className="flex-shrink-0">
          <Image src={scrolled ? "/logos/logo-text-color3.svg" : "/logos/logo-text-color4.svg"} alt="Elec Reid" width={110} height={26} className="h-6 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link href="/services" className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]' : 'text-white/70 hover:text-white'}`}>
            Services
          </Link>

          {/* Solutions mega-dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <button className={`text-[10px] tracking-[0.2em] uppercase transition-colors flex items-center gap-1 ${scrolled ? 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]' : 'text-white/70 hover:text-white'}`}>
              Solutions
              <span className={`text-[8px] transition-transform duration-200 ${brandsOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {brandsOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#1A1A1A]/8 shadow-2xl w-[960px] p-8 z-50">
                <div className="grid grid-cols-3 gap-8">

                  {/* Residential Solutions */}
                  <div>
                    <p className="text-[8px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-5 pb-2 border-b border-[#1A1A1A]/8">
                      Residential Solutions
                    </p>
                    <div className="space-y-5">
                      {residentialCategories.map((cat) => (
                        <div key={cat.label}>
                          <Link href={cat.href} className="block text-[10px] tracking-[0.15em] text-[#1A1A1A] font-medium uppercase hover:text-[#0134E7] transition-colors mb-1.5">
                            {cat.label}
                          </Link>
                          <div className="pl-3 space-y-1 border-l border-[#1A1A1A]/10">
                            {cat.brands.map((b) => (
                              <Link key={b.href + b.label} href={b.href}
                                className="block text-[9px] tracking-[0.1em] text-[#1A1A1A]/45 hover:text-[#0134E7] transition-colors py-0.5">
                                {b.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commercial Solutions */}
                  <div>
                    <p className="text-[8px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-5 pb-2 border-b border-[#1A1A1A]/8">
                      Commercial Solutions
                    </p>
                    <div className="space-y-5">
                      {commercialCategories.map((cat) => (
                        <div key={cat.label}>
                          <Link href={cat.href} className="block text-[10px] tracking-[0.15em] text-[#1A1A1A] font-medium uppercase hover:text-[#0134E7] transition-colors mb-1.5">
                            {cat.label}
                          </Link>
                          <div className="pl-3 space-y-1 border-l border-[#1A1A1A]/10">
                            {cat.brands.map((b) => (
                              <Link key={b.href + b.label} href={b.href}
                                className="block text-[9px] tracking-[0.1em] text-[#1A1A1A]/45 hover:text-[#0134E7] transition-colors py-0.5">
                                {b.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industrial Solutions */}
                  <div>
                    <p className="text-[8px] tracking-[0.35em] text-[#0134E7] uppercase mb-5 pb-2 border-b border-[#0134E7]/30">
                      Industrial Solutions
                    </p>
                    <div className="space-y-1.5">
                      {industrialLinks.map((b) => (
                        <Link key={b.label} href={b.href}
                          className="block text-[9px] tracking-[0.1em] text-[#1A1A1A]/55 hover:text-[#0134E7] transition-colors py-0.5">
                          {b.label}
                        </Link>
                      ))}
                      <Link href="/industrial" className="block text-[9px] tracking-[0.15em] text-[#0134E7] uppercase hover:underline mt-3 pt-2 border-t border-[#0134E7]/20">
                        All Industrial Services →
                      </Link>
                    </div>
                  </div>

                </div>
                <div className="border-t border-[#1A1A1A]/8 mt-6 pt-4 flex justify-between items-center">
                  <Link href="/brands" className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase hover:underline">
                    All brands →
                  </Link>
                  <Link href="/build" className="text-[9px] tracking-[0.2em] text-white bg-[#0134E7] uppercase px-4 py-2 rounded-full hover:bg-[#012ab8] transition-colors">
                    Build Your Home →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/projects" className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]' : 'text-white/70 hover:text-white'}`}>
            Projects
          </Link>
          <Link href="/about" className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]' : 'text-white/70 hover:text-white'}`}>
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

          {/* Residential Solutions */}
          <button onClick={() => setMobileOpen(mobileOpen === 'residential' ? null : 'residential')}
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 text-left flex items-center justify-between">
            Residential Solutions <span className={`transition-transform ${mobileOpen === 'residential' ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {mobileOpen === 'residential' && (
            <div className="pl-4 space-y-4">
              {residentialCategories.map((cat) => (
                <div key={cat.label}>
                  <Link href={cat.href} onClick={() => setMenuOpen(false)}
                    className="block text-[9px] tracking-[0.2em] text-[#1A1A1A]/40 uppercase mb-1">
                    {cat.label}
                  </Link>
                  {cat.brands.map((b) => (
                    <Link key={b.href + b.label} href={b.href} onClick={() => setMenuOpen(false)}
                      className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-1 pl-2">
                      {b.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Commercial Solutions */}
          <button onClick={() => setMobileOpen(mobileOpen === 'commercial' ? null : 'commercial')}
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 text-left flex items-center justify-between">
            Commercial Solutions <span className={`transition-transform ${mobileOpen === 'commercial' ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {mobileOpen === 'commercial' && (
            <div className="pl-4 space-y-4">
              {commercialCategories.map((cat) => (
                <div key={cat.label}>
                  <Link href={cat.href} onClick={() => setMenuOpen(false)}
                    className="block text-[9px] tracking-[0.2em] text-[#1A1A1A]/40 uppercase mb-1">
                    {cat.label}
                  </Link>
                  {cat.brands.map((b) => (
                    <Link key={b.href + b.label} href={b.href} onClick={() => setMenuOpen(false)}
                      className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-1 pl-2">
                      {b.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Industrial mobile */}
          <button onClick={() => setMobileOpen(mobileOpen === 'industrial' ? null : 'industrial')}
            className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7] text-left flex items-center justify-between">
            Industrial Solutions <span className={`transition-transform ${mobileOpen === 'industrial' ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {mobileOpen === 'industrial' && (
            <div className="pl-4 space-y-2">
              {industrialLinks.map((b) => (
                <Link key={b.label} href={b.href} onClick={() => setMenuOpen(false)}
                  className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-1">
                  {b.label}
                </Link>
              ))}
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
