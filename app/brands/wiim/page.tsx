import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WiiM Audio Streaming Melbourne | AirPlay Amplifiers | Elec Reid',
  description: 'Elec Reid installs WiiM streaming amplifiers and streamers in Melbourne. AirPlay 2 native, Spotify Connect, Tidal, multiroom audio integrated with Apple Home. No subscription.',
  keywords: 'WiiM Melbourne, WiiM Amp Melbourne, AirPlay amplifier Melbourne, multi-room audio Melbourne, smart home audio Melbourne',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne WiiM audio streaming and multi-room audio specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'WiiM audio installation and integration',
}

const products = [
  {
    name: 'WiiM Pro',
    subtitle: 'The network streamer.',
    body: 'AirPlay 2, Spotify Connect, Tidal, Amazon Music. Connect to any existing amplifier via optical, coaxial, or RCA. Upgrades any hi-fi system with full smart home integration. The bridge between a good amp and a smart home.',
  },
  {
    name: 'WiiM Amp',
    subtitle: '50W×2 streaming amplifier.',
    body: 'Drives passive speakers directly. AirPlay 2, multiroom, Alexa built-in. The entry point for a WiiM-based multi-room audio system. One box replaces your amp and streamer.',
  },
  {
    name: 'WiiM Amp Pro',
    subtitle: '120W streaming amplifier.',
    body: 'ESS ES9038Q2M DAC. TI TPA3255 amplifier. 120dB SNR. THD+N of −105dB. Audiophile performance in a streaming amplifier. The right choice when speaker quality demands a better amp.',
  },
  {
    name: 'WiiM Amp Ultra',
    subtitle: 'The flagship.',
    body: '100W per channel. ESS ES9039Q2M SABRE DAC. Dual TI TPA3255 Class-D amplifiers. Built-in RoomFit EQ for automatic room correction. HDMI ARC input. Touchscreen. Post-Filter Feedback technology. When the brief demands the absolute best from a streaming amplifier this is the specification.',
  },
]

const reasons = [
  { title: 'AirPlay 2 native', body: 'Integrates with Apple Home without a bridge. No extra hardware, no workarounds.' },
  { title: 'RoomFit EQ', body: 'Automatically tunes to the space. Calibrates for your room acoustics without manual configuration.' },
  { title: 'Flexible by design', body: 'Works with in-ceiling speakers, bookshelf speakers, or existing hi-fi. Adapts to the brief.' },
  { title: 'No subscription', body: 'Buy it once, use it forever. No ongoing fees. No cloud dependency.' },
  { title: 'Sonos compatible', body: 'Pairs with Sonos systems for mixed installations. Best of both platforms in a single home.' },
]

export default function WiiMPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#16253F] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stkilda-1.jpg"
            alt="WiiM audio installation Melbourne"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 to-[#1A1A1A]/90" />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16 pt-36 pb-24">
          <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-6">Residential · Audio</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            WiiM
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Hi-res audio. No compromises. No subscription.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Audiophile performance. Smart home integration.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              WiiM makes streaming amplifiers and streamers that sit at the intersection of audiophile performance and smart home integration. AirPlay 2 native. Spotify Connect. Tidal. Multiroom. Every WiiM product integrates with Apple Home and plays nicely with Sonos ecosystems.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mt-6">
              The reason we specify WiiM is flexibility tunable, adaptable, and genuinely high-quality at a price point that makes the right system accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-16">The range.</h2>
          <div className="grid lg:grid-cols-2 gap-px bg-white/5">
            {products.map((product) => (
              <div key={product.name} className="bg-[#16253F] p-10 lg:p-14 border border-white/5">
                <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-3">{product.subtitle}</p>
                <h3 className="font-austin text-white text-3xl lg:text-4xl mb-6">{product.name}</h3>
                <p className="text-white/50 leading-relaxed">{product.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elec Reid uses WiiM */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">Why we specify WiiM.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{reason.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related brands */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Related brands</p>
          <div className="flex flex-wrap gap-3">
            {[
              ['Sonos', '/brands/sonos'],
              ['Apple Home', '/brands/apple-home'],
              ['Unifi', '/brands/unifi'],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">
            Design your audio system.
          </h2>
          <Link
            href="/build"
            className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap"
          >
            Design your audio system →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
