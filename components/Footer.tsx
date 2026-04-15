import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#16253F] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-grotesk font-bold text-white tracking-widest text-sm uppercase mb-4">
              ELEC REID
            </div>
            <p className="text-white/60 font-heebo text-sm leading-relaxed max-w-xs">
              Melbourne&apos;s only residential electrical company built around Apple HomeKit. Design, install, program, handover — one team, one outcome.
            </p>
            <div className="mt-8 flex flex-col gap-2">
              <a
                href="tel:0450342075"
                className="text-white/80 hover:text-white font-heebo text-sm transition-colors"
              >
                0450 342 075
              </a>
              <a
                href="mailto:enquiries@elecreid.com"
                className="text-white/80 hover:text-white font-heebo text-sm transition-colors"
              >
                enquiries@elecreid.com
              </a>
              <span className="text-white/60 font-heebo text-sm">
                Melbourne, Victoria, Australia
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-grotesk font-semibold text-xs tracking-widest uppercase text-white/40 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Smart Home',
                'Networking',
                'AV & Cinema',
                'Security',
                'Residential Electrical',
                'Lighting Design',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white font-heebo text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-grotesk font-semibold text-xs tracking-widest uppercase text-white/40 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Projects', href: '/projects' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Build Your Home', href: '/build' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white font-heebo text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/30 font-heebo text-xs">
            © 2026 Elec Reid Pty Ltd. All rights reserved.
          </p>
          <p className="text-white/30 font-heebo text-xs">
            Lic. No. EC-XXXXX · Melbourne, VIC
          </p>
        </div>
      </div>
    </footer>
  )
}
