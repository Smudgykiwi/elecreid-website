import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Logitech Video Conferencing Melbourne | Rally Bar Installation | Elec Reid',
  description: 'Elec Reid installs Logitech video conferencing systems across Melbourne. Rally Bar, Rally Bar Mini, MeetUp certified Teams and Zoom Rooms installation for every room size.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne commercial AV and video conferencing specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Logitech video conferencing installation',
}

const products = [
  {
    name: 'MeetUp',
    size: 'Huddle · 1–6 people',
    desc: 'One device. Ultra-wide 120° lens. Beamforming audio. Plug into a laptop or run natively with Microsoft Teams or Zoom Rooms. The complete solution for a small space fits on any shelf or screen.',
  },
  {
    name: 'Rally Bar Huddle',
    size: 'Small · 1–8 people',
    desc: 'All-in-one for small rooms. AI-driven framing, intelligent audio, no separate components. Mounts directly to the display. No clutter. No cables on the table.',
  },
  {
    name: 'Rally Bar Mini',
    size: 'Small–Medium · 1–12 people',
    desc: 'Motorised PTZ camera. AI speaker tracking. Beamforming mics. Microsoft Teams and Zoom certified. The right solution when a small room needs to punch above its weight.',
  },
  {
    name: 'Rally Bar',
    size: 'Medium–Large · Up to 20 people',
    desc: '15x optical zoom. 132° field of view. 6 beamforming microphones. Add Rally Mic Pods to extend coverage across the room. The flagship all-in-one for serious meeting spaces.',
  },
  {
    name: 'Rally Bar + Tap IP',
    size: 'Large rooms',
    desc: 'Rally Bar paired with the Tap IP touch controller over PoE. One cable to the table. Certified for Teams and Zoom Rooms. The complete large room package.',
  },
]

export default function LogitechPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-16 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/eclat-galerie.webp" alt="Commercial AV meeting room" fill className="object-cover opacity-20" />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Commercial · Video Conferencing</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Logitech
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Every meeting room. Done properly.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              A meeting room that works is invisible.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              No fumbling with cables. No one saying &ldquo;can you hear me?&rdquo; The camera finds the speaker. The microphone cuts the noise. The system joins the call in one tap. That is what a properly installed Logitech room feels like.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Logitech makes the hardware that makes this happen. Elec Reid installs it properly from wall plates and ceiling mounts to Logitech Sync configuration and multi-room deployment. Microsoft Teams and Zoom Rooms certified for every product in the range.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              We size the system to the room. Not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white px-6 lg:px-16 py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">The range.</h2>
          <div className="divide-y divide-[#1A1A1A]/10">
            {products.map((p) => (
              <div key={p.name} className="grid lg:grid-cols-12 gap-6 py-10">
                <div className="lg:col-span-4">
                  <h3 className="font-austin text-[#1A1A1A] text-2xl lg:text-3xl mb-1">{p.name}</h3>
                  <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase">{p.size}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logitech Sync */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-6">Logitech Sync</h2>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              Cloud management for every deployed device. Monitor health, push firmware updates, and troubleshoot any meeting room from a single dashboard without being in the building. Essential for any multi-room commercial deployment. We configure Logitech Sync as part of every installation.
            </p>
          </div>
          <div className="overflow-hidden aspect-[4/3]">
            <Image src="/images/eclat-parlor.webp" alt="Commercial boardroom AV installation" width={900} height={675} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Elec Reid */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Right room, right system.', body: 'We specify the correct Logitech product for each room size not the same solution everywhere. MeetUp for huddle spaces. Rally Bar for boardrooms.' },
              { title: 'Certified installation.', body: 'Wall and ceiling mounting, structured cabling, PoE switching, and Teams/Zoom certification. Done properly from the start.' },
              { title: 'Multi-room deployment.', body: 'Logitech Sync configured across every device. One dashboard for your whole fleet. Add rooms without adding complexity.' },
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
            {[['Q-SYS by QSC', '/brands/qsc'], ['Samsung', '/brands/samsung'], ['Audio', '/brands/audio']].map(([name, href]) => (
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
          <h2 className="font-austin text-white text-4xl lg:text-5xl lg:text-6xl leading-tight">Fit out your meeting rooms.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Build Your System →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
