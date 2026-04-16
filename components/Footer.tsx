import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#16253F] px-6 lg:px-10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          <div>
            <Image
              src="/logos/logo-text-color4.svg"
              alt="Elec Reid"
              width={120}
              height={28}
              className="h-7 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed">
              Melbourne&apos;s smart home electricians.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-6">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Projects', href: '/projects' },
                { label: 'About', href: '/about' },
                { label: 'Build Your Home', href: '/build' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-6">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+61450342075" className="text-white/50 hover:text-white text-sm transition-colors">
                +61 450 342 075
              </a>
              <a href="mailto:joe@elecreid.com" className="text-white/50 hover:text-white text-sm transition-colors">
                joe@elecreid.com
              </a>
              <p className="text-white/30 text-sm">Melbourne, VIC</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8">
          <p className="text-white/25 text-xs tracking-wider">
            © 2026 Elec Reid Pty Ltd · All rights reserved
          </p>
          <p className="text-white/25 text-xs tracking-wider">
            ABN · Melbourne, Australia
          </p>
        </div>
      </div>
    </footer>
  )
}
