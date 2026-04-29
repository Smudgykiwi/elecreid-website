import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial | Elec Reid Melbourne',
  description: 'Elec Reid Commercial: hospitality, offices, event spaces, meeting rooms, audio systems and AV technology across Melbourne.',
}

export default function CommercialPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-16 pt-36 pb-20 min-h-[60vh] flex flex-col justify-end relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/eclat-bureau.webp" alt="Commercial AV space Melbourne" fill className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16253F] via-[#16253F]/60 to-transparent" />
        </div>
        <div className="max-w-screen-xl mx-auto w-full relative z-10">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Elec Reid · Commercial</p>
          <h1 className="font-austin text-white text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight mb-6 max-w-5xl">
            Technology that serves your business.
          </h1>
          <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
            Hospitality. Offices. Retail. Event spaces. The full commercial AV and technology offering from Elec Reid.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl leading-tight mb-8">
                Built for the people who use it every day.
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                Commercial technology is not residential technology with a bigger budget. It operates harder. It needs to work without being managed. It has to perform for staff and clients who have no interest in how it works, only that it does.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                Elec Reid designs and installs commercial technology systems for Melbourne businesses. Meeting rooms that actually work. Sound systems that set the atmosphere. Screens that command attention. Networks that never fail.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden aspect-square">
                <Image src="/images/eclat-galerie.webp" alt="Commercial AV installation Melbourne" width={600} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden aspect-square">
                <Image src="/images/eclat-parlor.webp" alt="Commercial meeting room AV Melbourne" width={600} height={600} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">What we offer.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Meeting rooms', desc: 'Logitech video conferencing systems for every room size. From a huddle space to a 20-person boardroom. Zoom and Teams certified.', href: '/brands/logitech' },
              { title: 'Screens & displays', desc: 'Samsung commercial displays, digital signage, and video walls. Specified, installed, and content-managed.', href: '/brands/samsung' },
              { title: 'Audio systems', desc: 'Background music for hospitality through to full venue PA. Quest, d&b audiotechnik, and L-Acoustics.', href: '/brands/audio' },
              { title: 'AV control', desc: 'Q-SYS by QSC for integrated audio, video, and room control. One system. Every zone.', href: '/brands/qsc' },
              { title: 'Networking', desc: 'Unifi and TP-Link enterprise networking for commercial spaces. Reliable. Managed. Zero dead zones.', href: '/brands/unifi' },
              { title: 'Building management', desc: 'KNX, Philips Dynalite, and Q-SYS for lighting control, energy management, and BMS integration.', href: '/brands/dynalite' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group border-t-2 border-[#1A1A1A]/10 pt-8 block hover:border-[#0134E7] transition-colors">
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-3 group-hover:text-[#0134E7] transition-colors">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/30 group-hover:text-[#0134E7] uppercase transition-colors">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight mb-3">Ready to talk about your space?</h2>
            <p className="text-white/40 max-w-lg">Tell us about your project. We will design the right system for your environment.</p>
          </div>
          <a href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
