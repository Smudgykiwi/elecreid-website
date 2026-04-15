import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Samsung Commercial Displays Melbourne | Digital Signage & Video Walls | Elec Reid',
  description: 'Elec Reid supplies and installs Samsung commercial displays, digital signage, and video walls across Melbourne. QM Series, The Wall Micro LED, and Samsung VXT management.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne commercial display and digital signage specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Samsung commercial display installation',
}

export default function SamsungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Commercial · Displays</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Samsung
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Every screen is a statement.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              The display defines the room.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Samsung makes the displays that define a space. From a single boardroom screen to a full video wall that covers an entire facade, Samsung&apos;s commercial display range delivers the brightness, resolution, and reliability that consumer televisions cannot.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid supplies and installs Samsung commercial displays across Melbourne — specification, mounting, cabling, and calibration. We also configure Samsung VXT for remote content management and device monitoring.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              One screen or fifty. A lobby feature or a video wall. We design the system around the brief.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white px-6 lg:px-16 py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">The range.</h2>
          <div className="space-y-16">

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#E8E4DF] aspect-[16/9] flex items-center justify-center">
                <p className="font-austin text-[#1A1A1A]/20 text-xl">QM Series</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Meeting rooms · Lobbies · Retail</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">QM Series</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  The standard for meeting rooms, lobbies, and retail environments. 4K UHD, commercial-grade panel, 16/7 operation certified. Available from 43&rdquo; to 98&rdquo;. Built-in media player, remote management via Samsung VXT.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  Not a consumer television. Not a trade display. A commercial panel engineered to run all day, every day, for years.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 bg-[#E8E4DF] aspect-[16/9] flex items-center justify-center">
                <p className="font-austin text-[#1A1A1A]/20 text-xl">QH Series</p>
              </div>
              <div className="lg:order-1">
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Outdoor · Semi-outdoor</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">QH Series — High Brightness</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg">
                  Designed for outdoor and semi-outdoor environments. 2,500 nits brightness for direct sunlight readability. IP56 rated. For signage that operates in conditions a standard display cannot.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#1A1A1A] aspect-[16/9] flex items-center justify-center">
                <p className="font-austin text-white/20 text-xl">The Wall</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Lobbies · Venues · Premium environments</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">The Wall — Micro LED</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  Samsung&apos;s Micro LED modular video wall system. Any size. Any aspect ratio. 8K capable. Zero bezels. The architectural display choice for immersive lobby installations and premium commercial environments.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  When a single screen is not enough. When the space demands impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VXT */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-6">Samsung VXT</h2>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Samsung&apos;s cloud platform for managing all deployed commercial displays. Push content, monitor device health, and schedule playlists across every screen from one dashboard — regardless of how many sites you operate.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              We configure VXT as part of every Samsung commercial installation. Content management, device monitoring, and remote troubleshooting — from day one.
            </p>
          </div>
          <div className="bg-[#E8E4DF] aspect-[4/3] flex items-center justify-center">
            <p className="font-austin text-[#1A1A1A]/20 text-2xl">Samsung VXT</p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Commercial specialists.', body: 'We specify Samsung\'s commercial range — not consumer televisions. The right product for the environment it operates in.' },
              { title: 'Full installation.', body: 'Structural mounting, structured cabling, and calibration. Every display installed to last.' },
              { title: 'Multi-site deployment.', body: 'Samsung VXT configured across every screen. Content and device management from one place.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-8">
                <h3 className="font-austin text-white text-xl mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Related brands</p>
          <div className="flex flex-wrap gap-3">
            {[['Q-SYS by QSC', '/brands/qsc'], ['Logitech', '/brands/logitech'], ['Video Walls', '/brands/video-wall']].map(([name, href]) => (
              <Link key={href} href={href} className="border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-colors">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Specify your display solution.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
