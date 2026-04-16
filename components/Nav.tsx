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
      { label: 'Basalte', href: '/brands/basalte' },
      { label: 'Core Smart Home', href: '/brands/core-smart-home' },
      { label: 'Ekinex', href: '/brands/ekinex' },
      { label: 'Control4', href: '/brands/control4' },
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

const commercialCategories = [
  {
    label: 'Meeting Rooms',
    href: '/brands/logitech',
    brands: [{ label: 'Logitech', href: '/brands/logitech' }],
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

const industrialLinks = [
  { label: 'Electrical Compliance', href: '/industrial' },
  { label: 'Switchboard Upgrades', href: '/industrial' },
  { label: 'Access Control', href: '/industrial' },
  { label: 'Security Systems', href: '/industrial' },
  { label: 'Structured Cabling', href: '/industrial' },
  { label: 'Maintenance Contracts', href: '/industrial' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = `text-[10px] tracking-[0.2em] uppercase transition-colors ${
    scrolled ? 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]' : 'text-white/70 hover:text-white'
  }`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#1A1A1A]/8' : 'bg-[#16253F]/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={scrolled ? '/logos/logo-text-color3.svg' : '/logos/logo-text-color4.svg'}
            alt="Elec Reid"
            width={110}
            height={26}
            className="h-6 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">

          {/* Home */}
          <Link href="/" className={linkClass}>Home</Link>

          {/* Solutions dropdown */}
          <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
            <button className={`${linkClass} flex items-center gap-1`}>
              Solutions
              <span className={`text-[8px] transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#1A1A1A]/8 shadow-2xl w-[960px] p-8 z-50">
                <div className="grid grid-cols-3 gap-8">

                  {/* Residential */}
                  <div>
                    <p className="text-[8px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-5 pb-2 border-b border-[#1A1A1A]/8">
                      Residential
                    </p>
                    <div className="space-y-4">
                      {residentialCategories.map((cat) => (
                        <div key={cat.label}>
                          <Link href={cat.href} className="block text-[10px] tracking-[0.15em] text-[#1A1A1A] font-medium uppercase hover:text-[#0134E7] transition-colors mb-1.5">
                            {cat.label}
                          </Link>
                          <div className="pl-3 space-y-1 border-l border-[#1A1A1A]/10">
                            {cat.brands.map((b) => (
                              <Link key={b.href + b.label} href={b.href} className="block text-[9px] tracking-[0.1em] text-[#1A1A1A]/45 hover:text-[#0134E7] transition-colors py-0.5">
                                {b.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commercial */}
                  <div>
                    <p className="text-[8px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-5 pb-2 border-b border-[#1A1A1A]/8">
                      Commercial
                    </p>
                    <div className="space-y-4">
                      {commercialCategories.map((cat) => (
                        <div key={cat.label}>
                          <Link href={cat.href} className="block text-[10px] tracking-[0.15em] text-[#1A1A1A] font-medium uppercase hover:text-[#0134E7] transition-colors mb-1.5">
                            {cat.label}
                          </Link>
                          <div className="pl-3 space-y-1 border-l border-[#1A1A1A]/10">
                            {cat.brands.map((b) => (
                              <Link key={b.href + b.label} href={b.href} className="block text-[9px] tracking-[0.1em] text-[#1A1A1A]/45 hover:text-[#0134E7] transition-colors py-0.5">
                                {b.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industrial */}
                  <div>
                    <p className="text-[8px] tracking-[0.35em] text-[#0134E7] uppercase mb-5 pb-2 border-b border-[#0134E7]/30">
                      Industrial
                    </p>
                    <div className="space-y-1.5">
                      {industrialLinks.map((b) => (
                        <Link key={b.label} href={b.href} className="block text-[9px] tracking-[0.1em] text-[#1A1A1A]/55 hover:text-[#0134E7] transition-colors py-0.5">
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
                    Design & Plan →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className={linkClass}>About Us</Link>
          <Link href="/projects" className={linkClass}>Our Projects</Link>

          {/* Brands dropdown */}
          <div className="relative" onMouseEnter={() => setBrandsOpen(true)} onMouseLeave={() => setBrandsOpen(false)}>
            <button className={`${linkClass} flex items-center gap-1`}>
              Brands
              <span className={`text-[8px] transition-transform duration-200 ${brandsOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {brandsOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#1A1A1A]/8 shadow-xl w-56 py-4 z-50">
                {[
                  { label: 'All Brands', href: '/brands' },
                  { label: 'Apple Home', href: '/brands/apple-home' },
                  { label: 'Basalte', href: '/brands/basalte' },
                  { label: 'Unifi', href: '/brands/unifi' },
                  { label: 'Sonos', href: '/brands/sonos' },
                  { label: 'Control4', href: '/brands/control4' },
                  { label: 'KNX', href: '/brands/knx' },
                ].map((b) => (
                  <Link key={b.href} href={b.href} className="block px-6 py-2 text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 hover:text-[#0134E7] hover:bg-[#F5F2EE] transition-colors">
                    {b.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className={linkClass}>Contact</Link>

          <Link href="/build" className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Design &amp; Plan
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#1A1A1A]/10 px-6 pt-6 pb-8 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60">
              {item.label}
            </Link>
          ))}

          <button onClick={() => setMobileOpen(mobileOpen === 'solutions' ? null : 'solutions')}
            className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60 text-left flex items-center justify-between">
            Solutions <span className={`transition-transform ${mobileOpen === 'solutions' ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {mobileOpen === 'solutions' && (
            <div className="pl-4 space-y-4">
              <p className="text-[8px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase">Residential</p>
              {residentialCategories.map((cat) => (
                <Link key={cat.label} href={cat.href} onClick={() => setMenuOpen(false)} className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-0.5">{cat.label}</Link>
              ))}
              <p className="text-[8px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mt-2">Commercial</p>
              {commercialCategories.map((cat) => (
                <Link key={cat.label} href={cat.href} onClick={() => setMenuOpen(false)} className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-0.5">{cat.label}</Link>
              ))}
              <p className="text-[8px] tracking-[0.3em] text-[#0134E7] uppercase mt-2">Industrial</p>
              <Link href="/industrial" onClick={() => setMenuOpen(false)} className="block text-[10px] tracking-[0.1em] text-[#1A1A1A]/60 py-0.5">Industrial Services</Link>
            </div>
          )}

          <Link href="/brands" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/60">Brands</Link>

          <Link href="/build" onClick={() => setMenuOpen(false)}
            className="text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] text-white px-5 py-3 rounded-full text-center mt-2">
            Design &amp; Plan
          </Link>
        </div>
      )}
    </header>
  )
}
