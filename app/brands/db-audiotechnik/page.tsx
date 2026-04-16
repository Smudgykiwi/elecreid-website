import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'd&b audiotechnik Installation Melbourne | Professional Speakers | Elec Reid',
  description: 'Elec Reid installs d&b audiotechnik professional speaker systems across Melbourne T Series for permanent install, V Series and Y Series for venues and event spaces.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne d&b audiotechnik installation specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'd&b audiotechnik professional speaker installation',
}

export default function DbAudiotechnikPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Commercial · Professional Audio</p>
          <h1 className="font-austin text-white text-[clamp(48px,8vw,120px)] leading-[0.88] tracking-tight mb-6">
            d&amp;b audiotechnik
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            German engineering. Concert precision.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              The loudspeaker that performs under any condition.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              d&amp;b audiotechnik has been engineering professional loudspeakers in Backnang, Germany since 1981. Their systems are used in concert venues, performing arts centres, broadcast facilities, and premium hospitality environments worldwide. When a space demands audiophile performance at commercial scale, d&amp;b is the answer.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              We install d&amp;b systems for event rooms, venues, bars, restaurants, and corporate environments across Melbourne. The brief changes. The standard does not.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              Ten years in live production means we know d&amp;b systems from the inside. We have rigged, tuned, and run them on major shows. That experience directly benefits every permanent installation we commission.
            </p>
          </div>
        </div>
      </section>

      {/* Series */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">The series.</h2>
          <div className="space-y-20">

            {/* T Series */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[#16253F] aspect-[4/3] flex flex-col items-center justify-center p-10">
                <p className="font-austin text-white text-6xl lg:text-8xl mb-2">T</p>
                <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Series</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Permanent Install · Hospitality · Corporate</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">T Series</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  Compact installation loudspeakers for permanent commercial and hospitality applications. The T Series is d&amp;b&apos;s answer to spaces that need professional quality in a discreet, architecturally integrated package.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  Premium restaurants. Hotel lobbies. Corporate event rooms. Private dining suites. Spaces where the audio should be felt before it is noticed. The T Series delivers d&amp;b quality in a form factor that fits.
                </p>
              </div>
            </div>

            {/* V Series */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 bg-[#0134E7] aspect-[4/3] flex flex-col items-center justify-center p-10">
                <p className="font-austin text-white text-6xl lg:text-8xl mb-2">V</p>
                <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Series</p>
              </div>
              <div className="lg:order-1">
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Live · Medium venues · Event spaces</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">V Series</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  A versatile line array system that scales from intimate private functions to large venue events. The innovative d&amp;b rigging system reduces setup time significantly critical when a space is running multiple events across a week.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  From a 200-person private dining event to a 2,000-person music venue the V Series handles both. The same cabinet. The same rigging. Scaled to the brief.
                </p>
              </div>
            </div>

            {/* Y Series */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[#2a2a2a] aspect-[4/3] flex flex-col items-center justify-center p-10">
                <p className="font-austin text-white text-6xl lg:text-8xl mb-2">Y</p>
                <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Series</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Live · Large venues · Performing arts</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">Y Series</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  ArrayProcessed speaker technology that delivers audiophile precision at concert scale. The Y Series has been specified in performing arts centres, live music venues, and major touring productions globally.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  When the brief demands the absolute best a venue that will be judged on its audio quality, a performing arts facility, a music venue with a discerning audience the Y Series is the specification.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Where we install */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">Where we install d&amp;b.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Event rooms & function spaces.', body: 'A permanent d&b system that handles background music, a presentation, and a live band all in the same room. Properly tuned for each use case.' },
              { title: 'Bars, clubs & music venues.', body: 'Permanent installation that sounds like a touring rig every night of the week. Rigged properly. Tuned to the room. Managed from a single interface.' },
              { title: 'Corporate & hospitality.', body: 'Premium lobbies and corporate event rooms where the audio quality needs to match the fit-out. T Series for discreet, consistent, professional performance.' },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elec Reid */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'We know d&b from the inside.', body: 'Ten years running d&b systems on major shows before we started installing them permanently. That experience shows in how we rig, tune, and commission every system.' },
              { title: 'R1 remote control and ArrayProcessing.', body: 'd&b systems are only as good as their configuration. We use R1 software for system design, delay optimisation, and ArrayProcessing setup the same workflow as a touring production.' },
              { title: 'From specification to commissioning.', body: 'System design, supply, installation, rigging, amplification setup, and acoustic commissioning. We own the whole process.' },
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
            {[['Quest', '/brands/quest'], ['L-Acoustics', '/brands/l-acoustics'], ['Q-SYS by QSC', '/brands/qsc'], ['Audio', '/brands/audio']].map(([name, href]) => (
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
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Design your audio space.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
