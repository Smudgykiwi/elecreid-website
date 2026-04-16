import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Elec Reid | Electrical & Smart Technology · Melbourne',
  description: 'Elec Reid. Residential smart home, commercial AV, and industrial electrical across Melbourne.',
}

export default function Gateway() {
  return (
    <div className="min-h-screen bg-[#16253F] flex flex-col">

      {/* Logo */}
      <div className="px-8 lg:px-16 pt-10 lg:pt-12">
        <Image
          src="/logos/logo-text-color4.svg"
          alt="Elec Reid"
          width={130}
          height={30}
          className="h-7 w-auto"
          priority
        />
      </div>

      {/* Hero text */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24">
        <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-8">Melbourne, Australia</p>
        <h1 className="font-austin text-white text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight mb-6 max-w-4xl">
          Electrical &amp; smart technology.
        </h1>
        <p className="text-white/40 text-lg max-w-lg leading-relaxed">
          Three divisions. One company. Where do you want to go?
        </p>
      </div>

      {/* Three divisions */}
      <div className="grid lg:grid-cols-3 border-t border-white/10">

        {/* Residential */}
        <Link href="/residential" className="group relative overflow-hidden border-r border-white/10 last:border-r-0">
          <div className="absolute inset-0">
            <Image
              src="/images/mckimm-5.jpg"
              alt="Elec Reid Residential"
              fill
              className="object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-700"
            />
          </div>
          <div className="relative z-10 px-10 py-14 lg:py-20">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-4">01</p>
            <h2 className="font-austin text-white text-4xl lg:text-5xl mb-4 leading-tight">
              Residential
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xs">
              Smart homes. Apple HomeKit. AV. Networking. Security. Everything that makes a home work the way it should.
            </p>
            <span className="text-[9px] tracking-[0.25em] text-white/30 group-hover:text-[#0134E7] uppercase transition-colors">
              Enter →
            </span>
          </div>
        </Link>

        {/* Commercial */}
        <Link href="/commercial" className="group relative overflow-hidden border-r border-white/10 last:border-r-0">
          <div className="absolute inset-0">
            <Image
              src="/images/eclat-bureau.webp"
              alt="Elec Reid Commercial"
              fill
              className="object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-700"
            />
          </div>
          <div className="relative z-10 px-10 py-14 lg:py-20">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-4">02</p>
            <h2 className="font-austin text-white text-4xl lg:text-5xl mb-4 leading-tight">
              Commercial
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xs">
              Hospitality. Offices. Event spaces. Meeting rooms. Audio systems. Displays. Technology that serves your business.
            </p>
            <span className="text-[9px] tracking-[0.25em] text-white/30 group-hover:text-[#0134E7] uppercase transition-colors">
              Enter →
            </span>
          </div>
        </Link>

        {/* Industrial */}
        <Link href="/industrial" className="group relative overflow-hidden border-r border-white/10 last:border-r-0">
          <div className="absolute inset-0">
            <Image
              src="/images/haven-dsc05741.jpg"
              alt="Elec Reid Industrial"
              fill
              className="object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-700"
            />
          </div>
          <div className="relative z-10 px-10 py-14 lg:py-20">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-4">03</p>
            <h2 className="font-austin text-white text-4xl lg:text-5xl mb-4 leading-tight">
              Industrial
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xs">
              Electrical compliance. Switchboard upgrades. Access control. Security. Maintenance. Built for facilities that cannot afford downtime.
            </p>
            <span className="text-[9px] tracking-[0.25em] text-white/30 group-hover:text-[#0134E7] uppercase transition-colors">
              Enter →
            </span>
          </div>
        </Link>

      </div>

      {/* Footer strip */}
      <div className="px-8 lg:px-16 py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="text-white/20 text-[9px] tracking-wider">© 2026 Elec Reid Pty Ltd · Melbourne, VIC</p>
        <div className="flex gap-6">
          <a href="tel:+61450342075" className="text-white/20 hover:text-white/60 text-[9px] tracking-wider transition-colors">+61 450 342 075</a>
          <a href="mailto:enquiries@elecreid.com" className="text-white/20 hover:text-white/60 text-[9px] tracking-wider transition-colors">enquiries@elecreid.com</a>
        </div>
      </div>

    </div>
  )
}
