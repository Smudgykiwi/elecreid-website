import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Elec Reid Melbourne Smart Home Electricians',
  description: 'Joe Reid founded Elec Reid after a decade in professional live sound and AV. The same standards that make a show work reliability, precision, design now applied to the homes and spaces we live in.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 pt-36 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-10">About</p>
          <h1 className="font-austin text-[#1A1A1A] text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight max-w-5xl">
            Built on the belief that technology should disappear.
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-white px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">The Story</p>
            <div className="aspect-[3/4] bg-[#E8E4DF] overflow-hidden">
              <Image
                src="/images/haven-1.jpg"
                alt="Joe Reid Elec Reid founder"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-4">
            <p className="font-austin text-[#1A1A1A] text-3xl lg:text-4xl leading-tight mb-8">
              Joe Reid grew up in church, playing drums from a young age. Music was never a hobby it was the thing.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              That foundation music as community, as worship, as something that brings people together shaped everything that followed. Touring bands across New Zealand. A career in the live industry. And a genuine care for the spaces where people gather and experience something together.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Churches remain close to our work. We have helped congregations across Melbourne create spaces where the technology serves the worship where the audio and visuals are clear, reliable, and completely invisible to the experience. That work matters to us in a way that goes beyond the brief.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Moving to Australia, that love for music led naturally into the live industry. Concerts. Touring productions. Major events. For years, the work was building temporary experiences that had to be perfect because you only had one chance. Three hours. One show. Thousands of people. Everything had to work.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              When Covid brought the live industry to a halt, Joe made a decision. He qualified as an A-grade electrician and turned his attention to a different kind of installation not temporary, but permanent. Not a single night, but a lifetime. The same craft, applied to the spaces people actually live in.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              Elec Reid was founded on a simple idea: that the experiences people have at live shows the quality of the sound, the precision of the lighting, the way a space makes you feel could be brought home. Not as a novelty, but as a standard.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-austin italic text-white text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-5xl">
            &ldquo;I love being part of experiences for people. Creating spaces where they get to experience the joys of music, of movies, of spending time with each other and creating memories through it.&rdquo;
          </p>
          <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mt-8">— Joe Reid, Founder</p>
        </div>
      </section>

      {/* Two pillars */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-16">What drives us</p>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            <div>
              <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-8 leading-tight">
                01 · Reliability first.
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                In live sound, you cannot have a system fail. A three-hour window. One show. Thousands of people. There is no fallback, no second chance, no &ldquo;we&apos;ll fix it tomorrow.&rdquo; That pressure shapes how you think about every cable, every connection, every piece of equipment you choose to put in the rack.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                We bring that standard to residential and commercial installations. We will not cut corners for the sake of a budget. We will push back if a specification compromises reliability. The homeowner deserves the same certainty as the concert venue their system works, every day, without exception.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                That is not a marketing promise. It is the way we were trained.
              </p>
            </div>

            <div>
              <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-8 leading-tight">
                02 · Design without compromise.
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                The best technology is unseen. It does not announce itself. It adjusts the space according to what you are doing in it the time of day, where you are, what is happening outside. It works behind you, not in front of you.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                When technology must be visible a keypad, a touchscreen, a switch it should be worth looking at. Basalte. Ekinex. Core Smart Home. Hardware specified because it deserves to be on the wall, not because it was available.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                We are as particular about the joinery line a switch sits on as we are about the cable behind it. Both matter. Both reflect the standard of the work.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The evolution */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden">
            <Image
              src="/images/haven-6.jpg"
              alt="Elec Reid installation Haven Court Torquay"
              width={900}
              height={675}
              className="w-full aspect-[4/3] object-cover"
            />
            <p className="text-[8px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase mt-3">Haven Court · Torquay, VIC</p>
          </div>
          <div>
            <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Today</p>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-6 leading-tight">
              From shows to spaces.
            </h2>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid has grown from a one-man operation to a team of A-grade electricians and systems specialists all working to the same standard. Residential smart homes, commercial AV, event spaces, and venue installations across Melbourne.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              We have become deeply passionate about design in a way the live industry never required. The temporary show does not care what the speaker looks like. The permanent installation does. That shift has made us better.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              The goal has always been the same: build the space well enough that the technology disappears and what remains is the experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats / credentials */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { stat: '10+', label: 'Years in the industry' },
              { stat: 'A-Grade', label: 'Licensed electricians' },
              { stat: 'Melbourne', label: 'Based & operated' },
              { stat: '100%', label: 'Accountable to the outcome' },
            ].map((item) => (
              <div key={item.stat} className="border-t border-white/10 pt-8">
                <p className="font-austin text-[#0134E7] text-4xl lg:text-5xl mb-2">{item.stat}</p>
                <p className="text-white/40 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl leading-tight mb-3">
              Let&apos;s build something worth experiencing.
            </h2>
            <p className="text-[#1A1A1A]/50 max-w-lg">Tell us about your project. We&apos;ll design the right system for your space.</p>
          </div>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Build Your Home →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
