import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Quest Commercial Audio Melbourne | Background Music Installation | Elec Reid',
  description: 'Elec Reid installs Quest Commercial audio systems for restaurants, cafes, bars, offices and retail across Melbourne. Background music done properly — consistent coverage, great sound, invisible.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne commercial audio and background music specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Quest Commercial audio installation',
}

export default function QuestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Commercial · Background Music</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Quest
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Background music. Done properly.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              The audio your guests notice when it&apos;s wrong.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Background music in a hospitality environment is invisible when it works. Consistent level across the room. No dead spots. No hot spots. Nobody leaning across the table to be heard. The right volume for the time of day, adjusted automatically.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Quest Commercial makes loudspeakers and electronics specifically designed for this purpose — built for AV integrators who care about performance and aesthetics equally. Design-conscious. Performance-driven. The kind of gear that looks right on the ceiling and sounds right in the room.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              We pair Quest speakers with QSC amplification and Q-SYS DSP processing. The result is a system that gives operators per-zone control, scheduled volume levels, paging, and full integration with building management — all managed from one interface.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">Where we install it.</h2>
          <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]/10">
            {[
              {
                title: 'Restaurants & cafes',
                body: 'Ceiling-mounted or surface-mount speakers with consistent coverage across dining zones. Volume transitions automatically from quiet daytime service to evening ambience — without anyone touching a dial.',
              },
              {
                title: 'Bars & licensed venues',
                body: 'Multi-zone control for front bar, back bar, beer garden, and private areas. Each zone independent, each schedulable. The DJ booth stays separate from the background system. All managed from one screen.',
              },
              {
                title: 'Retail environments',
                body: 'Background music that reinforces brand identity without overpowering conversation. Consistent level across the entire floor. No dead zones. No feedback. No system that sounds like it was installed as an afterthought.',
              },
              {
                title: 'Corporate & office spaces',
                body: 'Background music for lobbies and common areas. Speech intelligibility for meeting rooms. Privacy masking for confidential spaces. The same Quest platform, deployed for a different brief.',
              },
              {
                title: 'Event rooms & function spaces',
                body: 'A permanent background music system that also handles a presentation or a private dinner with speeches. Line-level input for microphones. Output levels that scale with the occasion. One system, multiple uses.',
              },
              {
                title: 'Hotels & hospitality',
                body: 'Consistent audio identity across lobbies, restaurants, bars, pool areas, and function rooms — all managed centrally. Guest-facing and back-of-house on the same system, with different permissions for each.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`py-10 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The system */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">The full system.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                brand: 'Quest',
                role: 'Loudspeakers',
                body: 'Ceiling, surface-mount, and pendant options across the Quest Commercial range. Design-conscious form factors that integrate with the architecture rather than fighting it.',
              },
              {
                brand: 'QSC Amplification',
                role: 'Power & Processing',
                body: 'QSC network amplifiers with Intrinsic Correction voicings for each Quest speaker model. The amplifier knows the speaker. The result is optimised performance with no separate tuning required.',
              },
              {
                brand: 'Q-SYS',
                role: 'Control & DSP',
                body: 'Zone control, scheduling, paging, and live adjustment — all from the Q-SYS platform. Operators control their system from a wall panel or a tablet. We manage it remotely.',
              },
            ].map((item) => (
              <div key={item.brand} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-2">{item.role}</p>
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-4">{item.brand}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elec Reid */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'We design before we install.', body: 'Speaker placement, coverage modelling, and zone mapping — done on paper before anything goes in the ceiling. No guesswork. No revisits.' },
              { title: 'The operator stays in control.', body: 'We configure Q-SYS so your staff can adjust volume, switch inputs, or page a zone without calling us. Simple interface. Full control.' },
              { title: 'We commission to standard.', body: 'Every installation is tuned in the space after installation. Not set-and-forget. Set, verify, adjust, and sign off. That\'s how it stays sounding right.' },
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
            {[['Q-SYS by QSC', '/brands/qsc'], ['d&b audiotechnik', '/brands/db-audiotechnik'], ['L-Acoustics', '/brands/l-acoustics'], ['Audio', '/brands/audio']].map(([name, href]) => (
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
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Design your audio environment.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
