import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Audio Installation Melbourne | Live Sound & AV | Elec Reid',
  description: 'Elec Reid installs commercial audio systems across Melbourne — background music for restaurants, bars and cafes, through to full live concert and event production. d&b audiotechnik, Quest, QSC.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne commercial audio and live sound specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Commercial audio installation and live sound production',
}

export default function AudioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Commercial · Audio</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Audio
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            From background music to 20,000 people.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Sound is the atmosphere of a space.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Whether it disappears into the ceiling of a restaurant or fills a concert hall, the right audio system changes how a space feels. Elec Reid installs commercial audio across the full spectrum — from background music for hospitality environments through to full-scale live event production.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              This is not a sideline. Joe Reid has spent ten years in professional live sound — concerts, touring shows, festivals, and major events. That background informs every commercial audio system we design and install. We know what a well-designed audio system sounds like under load, and we build to that standard.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              System design from source to speaker. Amplification, DSP processing, cabling, and commissioning. Tuned for the space. Documented for the operator.
            </p>
          </div>
        </div>
      </section>

      {/* Live show background */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden aspect-[4/3] bg-[#2a2a2a]">
              <Image
                src="/images/travancore-1.jpg"
                alt="Professional audio installation by Elec Reid"
                fill
                className="object-cover opacity-70"
              />
            </div>
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Live Sound</p>
              <h2 className="font-austin text-white text-4xl lg:text-5xl mb-6">
                Ten years in the industry.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Concerts. Touring shows. Festivals. Corporate events. Live television. Before Elec Reid, this was the work. That experience does not leave you — it becomes the standard you build to in every installation.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                We can bring your event to life. A one-off corporate function. A recurring venue night. A touring production moving through Melbourne. We have the experience and the supplier relationships to make it happen properly.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                If your brief involves audio at scale, talk to us before you talk to anyone else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Music — Quest */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">Background Music</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">Quest Commercial</h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                Quest Commercial makes speakers and electronics for design-conscious AV integrators who want great looks, great sound, and honest value. We specify Quest for background music environments — restaurants, cafes, bars, retail, and hospitality spaces — where the audio needs to be invisible, consistent, and right.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                Not the loudest option. The right option. Quest speakers are installed in the ceiling, in the wall, on the terrace — wherever the brief puts them — and they do their job without drawing attention to themselves.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                Paired with QSC amplification and Q-SYS DSP processing, a Quest installation gives you per-zone volume control, scheduled music, paging, and full integration with building management systems.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Restaurants & cafes', body: 'Ceiling-mounted or surface-mount speakers with consistent coverage across dining zones. Volume adjusts by time of day automatically.' },
                { title: 'Bars & venues', body: 'Multi-zone control for front bar, back bar, beer garden, and private areas. Each zone independent. Each zone schedulable.' },
                { title: 'Retail environments', body: 'Background music that reinforces brand identity. Consistent level across the entire floor without hot spots or dead zones.' },
                { title: 'Corporate & office', body: 'Speech intelligibility for meeting rooms. Background music for lobbies and common areas. Privacy masking for confidential spaces.' },
              ].map((item) => (
                <div key={item.title} className="border-t border-[#1A1A1A]/10 pt-5">
                  <h3 className="font-austin text-[#1A1A1A] text-xl mb-2">{item.title}</h3>
                  <p className="text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* d&b audiotechnik */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">Professional &amp; Live Sound</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-6">d&amp;b audiotechnik</h2>
          <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-16 max-w-3xl">
            German-engineered professional loudspeakers used in concert venues, theatres, broadcast facilities, and premium hospitality environments worldwide. The rider of serious touring productions. The specification of venues that take sound seriously. We supply and install d&amp;b systems across Melbourne commercial projects.
          </p>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                series: 'T Series',
                use: 'Install · Hospitality · Corporate',
                body: 'Compact installation speakers for permanent commercial and hospitality applications. Discreet form factor, consistent coverage, built to run continuously. The choice for premium restaurants, hotel lobbies, and corporate environments that want d&b quality in a fixed installation.',
              },
              {
                series: 'V Series',
                use: 'Live · Medium venues · Events',
                body: 'A versatile line array system that scales from intimate private functions to large venue concerts. The innovative rigging system reduces setup time significantly. From a 200-person private dining event to a 2,000-person music venue — the V Series handles both.',
              },
              {
                series: 'Y Series',
                use: 'Live · Large venues · Touring',
                body: 'ArrayProcessed speaker technology that delivers audiophile precision at concert scale. The Y Series has been installed and specified in performing arts centres, live music venues, and touring productions globally. When the show demands it, the Y Series delivers.',
              },
            ].map((item) => (
              <div key={item.series} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-1">{item.series}</h3>
                <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-4">{item.use}</p>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L-Acoustics teaser */}
      <section className="bg-white px-6 lg:px-16 py-16">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-t border-[#1A1A1A]/10 pt-12">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-3">Premium Line Array</p>
            <h3 className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl mb-3">L-Acoustics</h3>
            <p className="text-[#1A1A1A]/60 max-w-xl leading-relaxed">
              K2 line array. KARA. KS28 subwoofer. The standard for premium live sound worldwide — from touring festivals to architectural installations. We install L-Acoustics systems for events and venues that demand the best.
            </p>
          </div>
          <Link href="/brands/l-acoustics" className="inline-flex items-center justify-center border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
            View L-Acoustics →
          </Link>
        </div>
      </section>

      {/* Why Elec Reid */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Ten years in live sound.', body: 'We did this before we installed it. Concerts, touring shows, corporate events — the experience is real and it shows in the quality of every system we build.' },
              { title: 'From background to concert scale.', body: 'A four-zone restaurant and a 2,000-seat venue are different problems. We design both properly. No template, no guesswork.' },
              { title: 'Full system design and commissioning.', body: 'Source to speaker. Amplification, DSP, cabling, mounting, and acoustic commissioning. We do not leave until it sounds right.' },
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
            {[['Q-SYS by QSC', '/brands/qsc'], ['L-Acoustics', '/brands/l-acoustics'], ['Logitech', '/brands/logitech'], ['Samsung', '/brands/samsung']].map(([name, href]) => (
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
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Design your audio system.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
