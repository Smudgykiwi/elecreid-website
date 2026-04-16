import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Joe Reid | Elec Reid Melbourne',
  description: 'Joe Reid founded Elec Reid after a career in live sound and electrical. A-grade electrician. Smart home specialist. Melbourne.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 pt-36 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-10">About</p>
          <h1 className="font-austin text-[#1A1A1A] text-[clamp(56px,9vw,120px)] leading-[0.88] tracking-tight max-w-4xl">
            Built on experience. Delivered with precision.
          </h1>
        </div>
      </section>

      {/* Joe's story */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Photo */}
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src="/images/joe-reid-1.jpg"
                  alt="Joe Reid — Founder, Elec Reid"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <p className="font-austin text-[#1A1A1A] text-xl">Joe Reid</p>
                <p className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/40 uppercase mt-1">Founder & Director · Elec Reid</p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-8">Joe Reid — Founder</p>

              <blockquote className="space-y-5 text-[#1A1A1A]/70 text-lg leading-relaxed">
                <p>
                  I grew up in New Zealand, playing drums from a young age in church and in bands. Music was never just a hobby. It was the way I understood spaces, how people experience them, and what makes them come alive.
                </p>
                <p>
                  That foundation led me into the live sound industry. Coming to Australia, I became part of concerts, touring shows, and large-scale events. That environment taught me how sound, lighting, visuals, and technology behave in real spaces — not in theory, but under pressure, with no room for failure. It is where I developed a deep appreciation for precision, planning, and systems that have to work every time.
                </p>
                <p>
                  The church connection has stayed with me. We have helped congregations across Melbourne create spaces where the technology serves the worship — where the audio and visuals are clear, reliable, and invisible to the experience. That work matters to us beyond the brief.
                </p>
                <p>
                  Over time, that work led me into designing audio systems, home cinemas, and smart technologies for friends, family, and clients. As those projects grew more complex, I became increasingly focused on the electrical infrastructure behind the technology. I wanted to understand not just how systems looked and sounded, but how they were powered, protected, and built to perform reliably long-term. That is what led me to train as an electrician.
                </p>
                <p>
                  After completing my apprenticeship and working across a range of high quality Melbourne projects, I started Elec Reid to bring together strong electrical fundamentals with a practical understanding of how people actually use spaces. That approach applies whether I am working in a home, a commercial facility, or an industrial environment where safety, compliance, scalability and reliability are critical.
                </p>
                <p>
                  My background means I naturally think about how systems interact, how installation decisions affect performance and maintenance, and how to solve complex problems without overcomplicating the solution. I focus on doing the basics properly — clean installs, clear layouts, and disciplined execution — because that is what allows more advanced systems to work exactly as intended.
                </p>
                <p>
                  Elec Reid is built on that mix of technical trade expertise and thoughtful problem solving. I take pride in being meticulous, maintaining a clean site, and delivering work that stands up in practice, long after handover.
                </p>
              </blockquote>

              <div className="mt-10 pt-10 border-t border-[#1A1A1A]/10">
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { stat: 'A-Grade', label: 'Electrical licence' },
                    { stat: '10+', label: 'Years in the industry' },
                    { stat: 'Melbourne', label: 'Based and operated' },
                  ].map((item) => (
                    <div key={item.stat}>
                      <p className="font-austin text-[#0134E7] text-3xl lg:text-4xl">{item.stat}</p>
                      <p className="text-[#1A1A1A]/40 text-sm mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-austin italic text-white text-3xl lg:text-5xl leading-tight max-w-4xl">
            &ldquo;Good taste, implied confidence, and a pure nerdy love for tech.&rdquo;
          </p>
          <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mt-6">How a client described our team</p>
        </div>
      </section>

      {/* Two pillars */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-16">What drives us</p>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="w-8 h-[3px] bg-[#0134E7] mb-8" />
              <h2 className="font-austin text-[#1A1A1A] text-4xl mb-6">01 · Reliability first.</h2>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-5">
                Live sound taught a simple lesson: you get one chance. The show starts whether the system is ready or not. That pressure shaped how we approach every installation.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                We will not cut corners for the sake of a budget. We will push back if a specification compromises reliability. The homeowner, business, or facility deserves the same certainty as the concert venue.
              </p>
            </div>
            <div>
              <div className="w-8 h-[3px] bg-[#0134E7] mb-8" />
              <h2 className="font-austin text-[#1A1A1A] text-4xl mb-6">02 · Design without compromise.</h2>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-5">
                The best technology is unseen. It adjusts the space according to what you are doing in it. It works behind you, not in front of you.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                When technology must be visible, it should be worth looking at. Hardware specified because it deserves to be on the wall. We are as particular about the joinery line a switch sits on as we are about the cable behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project images */}
      <section className="bg-white px-6 lg:px-16 py-16">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-8">Recent work</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/images/haven-dsc05570.jpg', label: 'Haven Court, Torquay' },
              { src: '/images/merival-sonos.jpg', label: 'Merival, Melbourne' },
              { src: '/images/stkilda-1.jpg', label: 'Fitzroy St, St Kilda' },
            ].map((item) => (
              <Link key={item.label} href="/projects" className="group block">
                <div className="aspect-square overflow-hidden">
                  <Image src={item.src} alt={item.label} width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[8px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase mt-3">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight mb-3">
              Let us build something worth experiencing.
            </h2>
            <p className="text-white/40 max-w-lg">Tell us about your project.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              Design &amp; Plan →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/50 hover:text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
