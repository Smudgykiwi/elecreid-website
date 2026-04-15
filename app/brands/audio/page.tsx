import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Audio Installation Melbourne | Multi-Room Audio to Commercial AV | Elec Reid',
  description: 'Audio installation Melbourne. Elec Reid installs multi-room audio, in-ceiling speakers, D&B Audiotechnik, AL Acoustics, and Sonos across residential and commercial projects. From invisible to immersive.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: "Melbourne's smart home electrical specialists",
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  areaServed: 'Melbourne',
  serviceType: 'Audio system design and installation',
}

export default function AudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end bg-[#1A1A1A] overflow-hidden">
        <Image
          src="/images/stkilda-1.jpg"
          alt="Rooftop audio installation in a Melbourne residence"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pb-16 w-full">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-4">
            Brands
          </p>
          <h1 className="font-austin text-7xl md:text-9xl text-white leading-none mb-4">
            Audio
          </h1>
          <p className="font-austin italic text-2xl md:text-3xl text-white/60">
            From invisible to immersive.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-[#F5F2EE] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-austin text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                Sound is not a feature. It is the atmosphere of a space.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                Whether it disappears into the ceiling or fills a concert hall, the right audio system changes how a room feels. Elec Reid installs audio systems across the full spectrum — from invisible in-ceiling speakers in residential homes to professional-grade installations for commercial venues and event spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Residential Audio ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1A1A1A]/5">
              <Image
                src="/images/stkilda-1.jpg"
                alt="Residential multi-room audio installation in a Melbourne home"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                Sonos. In-ceiling. Multi-room.
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                Residential Audio
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Sonos is the standard for whole-home audio. Arc, Beam, Sub, Era, and in-ceiling via Sonos Amp. Every room. One app. Integrates natively with Apple Home.
              </p>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Invisible speakers: in-ceiling and in-wall speakers that disappear into the plasterwork. Paint-over grilles or completely frameless. The audio is present. The speaker is not.
              </p>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Multi-room zones: music in the kitchen, podcast in the bathroom, silence in the bedroom — all controlled from your phone or your smart home platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commercial & Venue Audio ── */}
      <section className="py-20 md:py-28 bg-[#F5F2EE]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:[&>*:first-child]:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1A1A1A]/5">
              <Image
                src="/images/travancore-1.jpg"
                alt="Commercial AV and audio installation in a Melbourne venue"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                PA. DSP. Distributed audio.
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                Commercial & Venue Audio
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Professional-grade PA and distributed audio for restaurants, offices, retail, and event spaces. System design from source to speaker — amplification, DSP processing, cabling, commissioning.
              </p>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Works with QSC Q-SYS, Dante, and AES67 audio networking protocols. Whatever the signal path, we design it, install it, and make it work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── D&B Audiotechnik ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1A1A1A] flex items-center justify-center">
              <p className="text-white/20 text-xs tracking-widest uppercase">D&B Audiotechnik</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                T Series. V Series. Y Series.
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                D&B Audiotechnik
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                D&B make some of the finest professional loudspeakers on the planet. Used in concert venues, theatres, and premium hospitality environments worldwide.
              </p>
              <ul className="flex flex-col gap-3 mt-1">
                <li className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                  <span className="text-[#1A1A1A] font-medium">T Series:</span> Compact install speakers for discreet commercial and hospitality applications.
                </li>
                <li className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                  <span className="text-[#1A1A1A] font-medium">V Series:</span> High-performance touring and large venue systems.
                </li>
                <li className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                  <span className="text-[#1A1A1A] font-medium">Y Series:</span> The compact professional install range. Restaurant and retail-grade.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── AL Acoustics ── */}
      <section className="py-20 md:py-28 bg-[#F5F2EE]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:[&>*:first-child]:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1A1A1A] flex items-center justify-center">
              <p className="text-white/20 text-xs tracking-widest uppercase">AL Acoustics</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                Arc Series
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                AL Acoustics
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                AL Acoustics design high-performance architectural loudspeakers for premium residential and commercial spaces.
              </p>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                <span className="text-[#1A1A1A] font-medium">Arc Series:</span> The flagship architectural range. Designed to disappear into the space while delivering audiophile performance. For homes and commercial spaces where the listening experience matters as much as the visual one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Elec Reid ── */}
      <section className="bg-[#1A1A1A] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-austin text-4xl md:text-5xl text-white mb-14 leading-tight">
            Why Elec Reid<br />
            <em className="italic text-white/50">for audio</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { heading: 'From ceiling to venue.', body: 'We install audio systems at every scale — from a single in-ceiling speaker in a bedroom to professional PA systems for hospitality venues.' },
              { heading: 'Full design and installation.', body: 'System design from source to speaker. Amplification, DSP processing, cabling, commissioning. We do not supply and walk away.' },
              { heading: 'All brands available.', body: 'Sonos, D&B, AL Acoustics, QSC, and more. We specify the right brand for each project, not the one we happen to stock.' },
              { heading: 'Residential and commercial.', body: 'Invisible in-ceiling speakers for homes. Professional distributed audio for restaurants, offices, and event spaces.' },
              { heading: 'Integrated with smart home platforms.', body: 'Sonos integrates with Apple Home, Control4, and Home Assistant. Your audio is part of the system, not separate from it.' },
              { heading: 'Tested before handover.', body: 'Every zone, every grouping, every source — tested before we leave site. You walk in and it plays.' },
            ].map((point, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-8 h-px bg-[#0134E7]" />
                <h3 className="font-austin text-xl text-white leading-snug">{point.heading}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Brands ── */}
      <section className="bg-[#F5F2EE] py-16 md:py-20 border-t border-[#1A1A1A]/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-8">
            Related brands
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sonos', href: '/brands/sonos' },
              { label: 'QSC Q-SYS', href: '/brands/qsc' },
              { label: 'Apple Home', href: '/brands/apple-home' },
            ].map((rb) => (
              <Link
                key={rb.href}
                href={rb.href}
                className="text-[10px] tracking-[0.15em] uppercase border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 px-5 py-2.5 rounded-full transition-colors"
              >
                {rb.label}
              </Link>
            ))}
            <Link
              href="/brands"
              className="text-[10px] tracking-[0.15em] uppercase border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A]/40 hover:text-[#1A1A1A] px-5 py-2.5 rounded-full transition-colors"
            >
              All brands →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A1A1A] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-austin text-4xl md:text-6xl text-white mb-4 leading-tight">
            Design your<br />
            <em className="italic text-white/50">audio system</em>
          </h2>
          <p className="text-white/50 text-base mb-10 max-w-lg mx-auto">
            Tell us about your project. We will design the right audio system for your space.
          </p>
          <Link
            href="/build"
            className="inline-block text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-10 py-4 rounded-full transition-colors"
          >
            Build Your Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
