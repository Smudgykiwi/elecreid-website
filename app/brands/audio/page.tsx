import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Audio Installation Melbourne | Elec Reid',
  description: 'Elec Reid installs commercial audio systems for event spaces, restaurants, bars, venues, and corporate environments across Melbourne. Quest, d&b audiotechnik, L-Acoustics.',
}

export default function AudioPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-6">Commercial · Audio</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Audio
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Sound that serves the space.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Ten years in the industry. Now we build the spaces.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Before Elec Reid, this was the work. Concerts. Touring productions. Major events. A decade running professional audio at scale sourcing gear, designing systems, making shows happen. That background is not decorative. It is the reason our commercial audio installations are built to a different standard.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Today, the work is creating the spaces that run those events. Event rooms. Bars and venues. Restaurants. Office spaces. Function facilities. We design and install permanent audio systems that perform night after night not just for one show.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              Whether the brief is background music for a restaurant or a full sound system for a venue that hosts live acts three nights a week, we have done it at scale and we know exactly what is required.
            </p>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image src="/images/travancore-1.jpg" alt="Professional audio installation in a Melbourne venue" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image src="/images/stkilda-1.jpg" alt="Commercial audio system in a Melbourne event space" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Three brand tiles */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-4">What we install.</h2>
          <p className="text-[#1A1A1A]/50 text-lg mb-16 max-w-2xl">Three brands. Three different applications. One team that knows how to use all of them.</p>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                brand: 'Quest',
                role: 'Background music',
                desc: 'Restaurants, cafes, bars, retail, offices. Design-conscious loudspeakers built for hospitality environments where sound needs to be consistent, invisible, and right.',
                href: '/brands/quest',
                bg: '#F5F2EE',
              },
              {
                brand: 'd&b audiotechnik',
                role: 'Professional install & venues',
                desc: 'T Series for permanent commercial install. V Series and Y Series for event spaces, music venues, and function rooms. German-engineered. Concert-proven.',
                href: '/brands/db-audiotechnik',
                bg: '#1A1A1A',
                light: true,
              },
              {
                brand: 'L-Acoustics',
                role: 'Premium line array',
                desc: 'K2, KARA, KS28. The standard for premium live sound and high-performance venue installations. For spaces that will be judged on their audio.',
                href: '/brands/l-acoustics',
                bg: '#0134E7',
                light: true,
              },
            ].map((item) => (
              <Link
                key={item.brand}
                href={item.href}
                className="group block p-8 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: item.bg }}
              >
                <p className={`text-[9px] tracking-[0.3em] uppercase mb-4 ${item.light ? 'text-white/40' : 'text-[#1A1A1A]/30'}`}>
                  {item.role}
                </p>
                <h3 className={`font-austin text-3xl mb-4 ${item.light ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {item.brand}
                </h3>
                <p className={`leading-relaxed mb-6 ${item.light ? 'text-white/60' : 'text-[#1A1A1A]/55'}`}>
                  {item.desc}
                </p>
                <span className={`text-[9px] tracking-[0.2em] uppercase ${item.light ? 'text-white/40 group-hover:text-white' : 'text-[#1A1A1A]/30 group-hover:text-[#0134E7]'} transition-colors`}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">The spaces we work in.</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              { title: 'Event rooms & function facilities.', body: 'A permanent system that handles background music, presentations, speeches, and live performers in the same room, without a compromise.' },
              { title: 'Bars, venues & nightclubs.', body: 'Professional audio that runs every night of the week. Not a hire system brought in for the occasion. A permanent installation that performs like one.' },
              { title: 'Restaurants & hospitality.', body: 'Background music that sets the atmosphere and disappears. Consistent across the room. Adjustable by zone. Scheduled to the service period.' },
              { title: 'Corporate & office spaces.', body: 'Board rooms, town halls, training rooms, lobbies. Audio that supports how the space is used whether that is a presentation, a hybrid meeting, or ambient music.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight mb-3">Design your audio space.</h2>
            <p className="text-white/40 max-w-lg">Tell us what you&apos;re building. We&apos;ll tell you what it needs.</p>
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
