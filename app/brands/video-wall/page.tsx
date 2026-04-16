import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Video Wall Installation Melbourne | Commercial AV | Elec Reid',
  description: 'Elec Reid designs and installs video wall systems for commercial clients across Melbourne. Lobbies, control rooms, boardrooms, and venue installations.',
}

export default function VideoWallPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#16253F] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/commercial-3.jpg" alt="Commercial video wall installation Melbourne" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16253F]/70 to-[#16253F]/95" />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16 pt-36 pb-24">
          <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-6">Commercial · Display</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Video Walls
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Scale without limits.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              A video wall is not a large television.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              It is an architectural decision. When the brief calls for impact a lobby that stops people, a control room that communicates, a venue that commands attention a video wall delivers what a single panel cannot.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid designs, supplies, and installs video wall systems for commercial clients across Melbourne. Any size. Any aspect ratio. Any content. We handle the brief from specification through to commissioning.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              Specific brand information coming soon. In the meantime, speak to our team about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">Where we install them.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Corporate lobbies.', body: 'Brand statements. Welcome displays. Live data feeds. A lobby video wall sets the tone before a single word is spoken.' },
              { title: 'Control rooms.', body: 'Multi-source monitoring. Security feeds. Operations dashboards. When situational awareness matters, the display infrastructure needs to match.' },
              { title: 'Hospitality & venues.', body: 'Bars, restaurants, event spaces, and live venues. Immersive visual environments that change with the occasion.' },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature image */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image src="/images/commercial-9.jpg" alt="Video wall commercial installation" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#16253F]/20" />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Related brands</p>
          <div className="flex flex-wrap gap-3">
            {[['Samsung', '/brands/samsung'], ['Q-SYS by QSC', '/brands/qsc'], ['Logitech', '/brands/logitech']].map(([name, href]) => (
              <Link key={href} href={href} className="border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-colors">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Speak to our team about your project.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
