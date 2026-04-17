import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'L-Acoustics Installation Melbourne | K2 Line Array | Elec Reid',
  description: 'Elec Reid installs L-Acoustics line array systems in Melbourne K2, KARA, KS28 subwoofer. Premium live sound and permanent installation for venues, events, and touring productions.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne L-Acoustics line array installation specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'L-Acoustics line array installation and live sound production',
}

export default function LAcousticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-6">Commercial · Live Sound</p>
          <h1 className="font-austin text-white text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight mb-6">
            L-Acoustics
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            The standard for premium live sound.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              On the rider of every major touring production.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              L-Acoustics is the world&apos;s leading professional loudspeaker manufacturer. Founded in France in 1984, they invented the modern line array concept and have defined the standard for concert and venue sound ever since. When a production specifies L-Acoustics, the expectation is simple: it should be the best audio experience in the room.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid installs L-Acoustics systems for venues, events, and permanent installations across Melbourne. We supply, install, rig, and commission using L-Acoustics&apos; Soundvision software for accurate system design before a single cabinet goes up.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              From a boutique music venue needing a permanent system to a touring production coming through Melbourne for one night we have the experience and the gear.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white px-6 lg:px-16 py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">The systems we install.</h2>

          <div className="space-y-20">

            {/* K2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[#16253F] aspect-[4/3] flex flex-col items-center justify-center p-10">
                <p className="font-austin text-white text-5xl lg:text-7xl mb-2">K2</p>
                <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Line Array System</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Large venues · Concerts · Touring</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">K2</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  The K2 is a 3-way active line array element delivering 147 dB SPL with coverage up to 20,000 people. Dual 12&rdquo; woofers, a 3&rdquo; midrange driver, and a ribbon tweeter in an enclosure that weighs 55 kg and is built to be flown nightly.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  Wide bandwidth: 35 Hz to 20 kHz. Scalable from small indoor venues to major outdoor festivals with the addition of cardioid KS28 subwoofers. The K2 is on the rider of touring productions that demand the best.
                </p>
              </div>
            </div>

            {/* KARA */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 bg-[#2a2a2a] aspect-[4/3] flex flex-col items-center justify-center p-10">
                <p className="font-austin text-white text-5xl lg:text-7xl mb-2">KARA</p>
                <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Compact Line Array</p>
              </div>
              <div className="lg:order-1">
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Mid-size venues · Permanent install · Corporate</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">KARA II</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  The KARA II is L-Acoustics&apos; compact workhorse a wide-format line source element that delivers the same L-Acoustics quality in a smaller, lighter package suited for mid-size venues, corporate events, and permanent installation.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  Covers audiences from 500 to 5,000 people. Available in fixed and variable curvature configurations. Pairs with SB18 subwoofers for an extended bass response. The choice for Melbourne music venues and theatre installations.
                </p>
              </div>
            </div>

            {/* KS28 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[#0134E7] aspect-[4/3] flex flex-col items-center justify-center p-10">
                <p className="font-austin text-white text-5xl lg:text-7xl mb-2">KS28</p>
                <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Reference Subwoofer</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#0134E7] uppercase mb-3">Subwoofer · Cardioid capable</p>
                <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-4">KS28</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-lg mb-4">
                  Dual 18&rdquo; reference subwoofer. 143 dB SPL. 25 Hz to 60 Hz bandwidth. 2,500 W AES power handling. The KS28 is cardioid-capable using L-Acoustics&apos; L-VENTS technology which means tight, directional low-frequency control without rearward energy blasting into the stage.
                </p>
                <p className="text-[#1A1A1A]/60 leading-relaxed">
                  The reason the front row feels the kick drum, not the back of the stage. Used in pairs and stacks for K2 and KARA systems. The sub that makes the difference between a good system and a great one.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Soundvision system design.', body: 'We design every L-Acoustics system in Soundvision before installation. Accurate SPL mapping, delay time optimisation, and coverage verification before a single cabinet is rigged.' },
              { title: 'Ten years in live production.', body: 'We have worked with L-Acoustics systems in live environments for a decade. We know how to rig, aim, and tune a K2 system to sound like it should.' },
              { title: 'Touring and permanent.', body: 'A one-night touring production or a permanent venue installation. We have the rigging experience, the amplification knowledge, and the commissioning process for both.' },
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
            {[['Audio', '/brands/audio'], ['Q-SYS by QSC', '/brands/qsc'], ['Samsung', '/brands/samsung']].map(([name, href]) => (
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
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Bring your event to life.</h2>
          <a href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
