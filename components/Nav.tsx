'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navBase = isHome
    ? scrolled
      ? 'bg-[#16253F] shadow-lg'
      : 'bg-transparent'
    : 'bg-[#16253F]'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBase}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-grotesk font-bold text-white tracking-widest text-sm lg:text-base uppercase"
            >
              ELEC REID
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <NavLink href="/services" label="Services" />
              <NavLink href="/projects" label="Projects" />
              <NavLink href="/about" label="About" />
              <Link
                href="/build"
                className="bg-[#0134E7] hover:bg-[#012ab8] text-white font-grotesk font-medium text-sm px-5 py-2.5 rounded-sm tracking-wide transition-colors"
              >
                Build Your Home
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#16253F] flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8">
          <MobileNavLink href="/services" label="Services" />
          <MobileNavLink href="/projects" label="Projects" />
          <MobileNavLink href="/about" label="About" />
          <MobileNavLink href="/contact" label="Contact" />
          <div className="pt-4">
            <Link
              href="/build"
              className="inline-block bg-[#0134E7] text-white font-grotesk font-medium text-lg px-8 py-4 rounded-sm"
            >
              Build Your Home →
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-8 text-white/40 font-heebo text-sm">
          0450 342 075 · enquiries@elecreid.com
        </div>
      </div>
    </>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`font-heebo text-sm tracking-wide transition-colors ${
        active ? 'text-white' : 'text-white/70 hover:text-white'
      }`}
    >
      {label}
    </Link>
  )
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`font-grotesk font-semibold text-3xl tracking-tight transition-colors ${
        active ? 'text-white' : 'text-white/50 hover:text-white'
      }`}
    >
      {label}
    </Link>
  )
}
