import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Q-SYS Installation Melbourne | QSC Audio Video Control | Elec Reid',
  description: 'Elec Reid programs and installs Q-SYS by QSC in Melbourne. Integrated audio, video, and control for boardrooms, venues, universities, and commercial spaces.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne commercial AV and Q-SYS programming specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Q-SYS installation and programming',
}

export default function QSCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#16253F] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/haven-7.jpg" alt="Commercial AV rack infrastructure" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16253F]/80 to-[#16253F]/95" />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16 pt-36 pb-24">
          <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-6">Commercial · AV Control</p>
          <h1 className="font-austin text-white text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight mb-6">
            Q-SYS by QSC
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            One platform. Everything connected.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Not a mixer. Not a controller. An ecosystem.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Q-SYS is QSC&apos;s integrated audio, video, and control platform for commercial and enterprise environments. It handles signal routing, DSP processing, room control, and system management from a single software environment Q-SYS Designer.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              We program, install, and commission Q-SYS systems for commercial clients who need their AV to simply work. Boardrooms. Lecture theatres. Hospitality venues. Government facilities. Live event spaces.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              If the space has audio, video, and control requirements that need to talk to each other Q-SYS is the answer.
            </p>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white px-6 lg:px-16 py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">What Q-SYS does.</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              { title: 'Audio DSP', body: 'Processing for microphones, speakers, and audio distribution across every zone. Noise cancellation, echo reduction, gain management all configured in software, not hardware.' },
              { title: 'Video Routing', body: 'Matrix switching for displays, cameras, and video conferencing endpoints. Route any source to any screen. Scale to any number of rooms.' },
              { title: 'Room Control', body: 'Custom touch panel interfaces for any display or QSC touchscreen. One tap to join a call. One tap to present. One tap to leave. Designed for the people using the room, not the people who built it.' },
              { title: 'System Management', body: 'Reflect QSC\'s cloud monitoring platform provides real-time health monitoring for every device on the network. Know before anyone tells you.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-4">{item.title}</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">The hardware.</h2>
          <div className="divide-y divide-[#1A1A1A]/10">
            {[
              { name: 'Core Processors', desc: 'The brain of the system. Scales from a single meeting room to a campus-wide deployment. Every signal routes through here.' },
              { name: 'I/O Frames', desc: 'Flexible input/output infrastructure for any signal type analogue, digital, Dante, AES67. Connect anything.' },
              { name: 'TSC Touchscreens', desc: 'Custom-programmed room control panels. Any interface you can design in Q-SYS Designer appears here.' },
              { name: 'Network Amplifiers', desc: 'Q-SYS native amplification for distributed audio. Power your speakers directly from the Q-SYS network.' },
            ].map((item) => (
              <div key={item.name} className="grid lg:grid-cols-12 gap-6 py-8">
                <div className="lg:col-span-4">
                  <h3 className="font-austin text-[#1A1A1A] text-xl">{item.name}</h3>
                </div>
                <p className="lg:col-span-7 lg:col-start-6 text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-austin text-white text-4xl lg:text-5xl mb-6">Q-SYS Designer.</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Q-SYS Designer is the programming environment where the system logic lives. Drag-and-drop signal flow, Lua scripting for advanced automations, and direct integration with Zoom Rooms, Microsoft Teams, and Dante audio networking.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              We program Q-SYS systems from the ground up custom UCIs, scripted automations, and full Dante network design. The result is a system that behaves exactly as the space requires.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/merival-c4screen.jpg" alt="Q-SYS Designer touchscreen control panel" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-[#16253F]/30" />
          </div>
        </div>
      </section>

      {/* Why Elec Reid */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Certified programming.', body: 'We program Q-SYS systems, not just install them. Custom UCIs, scripted automations, Dante integration done properly.' },
              { title: 'Commercial scale.', body: 'From a single boardroom to a multi-building campus. Q-SYS scales and so do we.' },
              { title: 'Full ecosystem integration.', body: 'Q-SYS integrates with Logitech, D&B Audiotechnik, Samsung, and more. We connect it all.' },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Related brands</p>
          <div className="flex flex-wrap gap-3">
            {[['Logitech', '/brands/logitech'], ['Samsung', '/brands/samsung'], ['Audio', '/brands/audio']].map(([name, href]) => (
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
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Design your commercial AV system.</h2>
          <a href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
