import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-[#F7F4F0] flex flex-col justify-center px-6 lg:px-10 pt-24">
        <div className="max-w-7xl mx-auto w-full py-24 lg:py-36">
          <p className="text-[10px] tracking-[0.25em] text-[#0134E7] uppercase mb-10">
            Melbourne · Residential · Smart Home
          </p>

          <h1 className="font-austin text-[#1A1A1A] text-6xl sm:text-7xl lg:text-[96px] xl:text-[120px] leading-[0.92] tracking-tight max-w-5xl mb-8">
            Control,<br />
            <span className="italic">Considered.</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mt-12">
            <p className="text-[#1A1A1A]/60 text-lg max-w-md leading-relaxed">
              Melbourne&apos;s only electrical company built around Apple HomeKit.
              Design, install, program, handover — one team, one outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/build"
                className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-8 py-4 transition-colors"
              >
                BUILD YOUR HOME →
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-[#1A1A1A]/25 hover:border-[#1A1A1A] text-[#1A1A1A] text-[11px] tracking-[0.15em] px-8 py-4 transition-colors"
              >
                SEE OUR WORK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-8">Our Philosophy</p>
              <h2 className="font-austin text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#1A1A1A]">
                A smart home is not a product.
              </h2>
            </div>
            <div className="lg:pt-16">
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-6">
                It is a relationship between architecture, automation and the people who live there. Elec Reid specifies, installs and commissions residential systems where every decision is deliberate: from the switch that meets your hand each morning to the control platform that ties it all together.
              </p>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed">
                We partner with the best hardware in the world — Basalte, Core Smart Home, Zetr, Control4, Ekinex — and pair them with platforms we trust. This guide walks you through the options so you can make informed decisions before a single cable is pulled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────── */}
      <section className="bg-[#0134E7] px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="font-austin italic text-white text-3xl lg:text-4xl xl:text-5xl leading-relaxed max-w-4xl">
            &ldquo;Good taste, implied confidence, and a pure nerdy love for tech.&rdquo;
          </p>
          <p className="text-white/50 text-[11px] tracking-[0.2em] uppercase mt-6">— How a friend described our team</p>
        </div>
      </section>

      {/* ── WHAT SETS US APART ───────────────────────────────────── */}
      <section className="bg-[#F7F4F0] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-16">What sets us apart</p>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {[
              {
                num: '01',
                title: 'A passion for design.',
                body: 'The best technology is unseen. It adapts and reacts to how you move through a space. We care about the joinery line the switch sits on. The finish of the plate against the wall. The way light spills from a keypad in the evening. The details nobody else is looking at.',
              },
              {
                num: '02',
                title: 'Built to last.',
                body: 'We enjoy creating spaces for generations to enjoy, and we\'re relentless about building reliable systems that are built to last. Wired properly the first time, documented, and backed by the team who installed them. Ten years from now we\'ll still be here. Still the same phone number.',
              },
              {
                num: '03',
                title: 'One accountable team.',
                body: 'Electrical, networking, automation, AV — all designed together, installed together, programmed together. No passing the buck between trades. No three contractors blaming each other. One team. Everything works.',
              },
            ].map((item) => (
              <div key={item.num} className="border-t border-[#1A1A1A]/15 pt-8">
                <p className="font-austin text-[#1A1A1A]/20 text-5xl mb-6">{item.num}</p>
                <h3 className="font-austin text-2xl text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ──────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-4">Recent Work</p>
              <h2 className="font-austin text-4xl lg:text-5xl text-[#1A1A1A]">Melbourne projects.</h2>
            </div>
            <Link href="/projects" className="hidden sm:block text-[11px] tracking-[0.15em] text-[#0134E7] hover:underline">
              ALL PROJECTS →
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              { title: 'Toorak Residence', desc: 'Full smart home integration', tags: ['Apple HomeKit', 'Unifi', 'Lutron', 'Sonos'] },
              { title: 'South Yarra Apartment', desc: 'Automation & lighting design', tags: ['Home Assistant', 'KNX', 'Basalte'] },
            ].map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-[#E8E4DF] mb-6 overflow-hidden flex items-end p-8">
                  <div>
                    <p className="font-austin text-2xl text-[#1A1A1A] mb-1">{project.title}</p>
                    <p className="text-[#1A1A1A]/50 text-sm">{project.desc}</p>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-[0.15em] border border-[#1A1A1A]/20 px-3 py-1 text-[#1A1A1A]/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F4F0] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-6">What We Offer</p>
            <h2 className="font-austin text-[#0134E7] text-6xl lg:text-8xl xl:text-9xl leading-none mb-16">Services</h2>
          </div>

          <div className="space-y-0">
            {[
              { num: '01', title: 'Smart Home Automation', desc: 'Apple HomeKit as standard. Design, commission and handover of complete residential automation systems.' },
              { num: '02', title: 'Residential Electrical', desc: 'A-grade licensed electricians for all residential work. The infrastructure that makes everything else possible.' },
              { num: '03', title: 'Networking', desc: 'Ubiquiti/Unifi infrastructure built for performance. Enterprise Wi-Fi, structured cabling, PoE.' },
              { num: '04', title: 'Audio Visual & Home Cinema', desc: 'Multi-room audio, home cinema, outdoor zones. Sonos, premium speakers, hidden AV.' },
              { num: '05', title: 'Security Systems', desc: 'CCTV, intercom, access control and alarm systems that integrate with your smart home.' },
              { num: '06', title: 'Lighting Design', desc: 'Dimming, scenes, circadian scheduling and keypads. Light that responds to how you live.' },
            ].map((service) => (
              <div key={service.num} className="grid grid-cols-[48px_1fr_auto] gap-6 items-start py-8 border-t border-[#1A1A1A]/10 group">
                <span className="font-austin text-[#1A1A1A]/20 text-2xl">{service.num}</span>
                <div>
                  <h3 className="font-austin text-[#0134E7] text-2xl mb-2">{service.title}</h3>
                  <p className="text-[#1A1A1A]/55 leading-relaxed max-w-xl">{service.desc}</p>
                </div>
                <Link href="/services" className="text-[#1A1A1A]/30 hover:text-[#0134E7] transition-colors text-xl mt-1">→</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO (TWO THINGS) ───────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-8">The Partnership</p>
              <h2 className="font-austin text-4xl lg:text-5xl text-[#1A1A1A] leading-tight">
                Two things make a smart home work.
              </h2>
            </div>
            <div className="space-y-10 lg:pt-16">
              <div className="border-t border-[#1A1A1A]/15 pt-8">
                <h3 className="font-austin text-xl text-[#1A1A1A] mb-3">01 · Choosing the right system</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed">The platform you pick has to fit how you actually live. Not how a showroom says you should. Pick the wrong one and you&apos;ll fight it for ten years. Pick the right one and you&apos;ll forget it&apos;s there.</p>
              </div>
              <div className="border-t border-[#1A1A1A]/15 pt-8">
                <h3 className="font-austin text-xl text-[#1A1A1A] mb-3">02 · Partnering with the right integrator</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed">Hardware is a commodity. The installer is not. The right integrator brings the vision to life. And keeps it alive long after the handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────── */}
      <section className="bg-[#F7F4F0] px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-16">What clients say</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Su Mei Koh', suburb: 'Toorak', stars: 5, text: 'Joe and his team came highly recommended, and I\'m so grateful for their hard work. The smart home system works flawlessly and the finish is impeccable.' },
              { name: 'Robbie Smarrelli', suburb: 'South Yarra', stars: 5, text: 'Joe and his team provided excellent service with expert workmanship. They were reliable, professional, and the attention to detail was outstanding.' },
              { name: 'Andy Fisher', suburb: 'Brighton', stars: 5, text: 'Joe\'s an absolute legend — not just a top electrician but a great bloke too. He\'s a genius when it comes to smart home tech. Couldn\'t recommend highly enough.' },
            ].map((review) => (
              <div key={review.name} className="bg-white p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-[#0134E7] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#1A1A1A]/70 leading-relaxed mb-6 italic font-austin">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-medium text-[#1A1A1A] text-sm">{review.name}</p>
                  <p className="text-[#1A1A1A]/40 text-xs tracking-wider">{review.suburb} · Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEGIN YOUR PROJECT ───────────────────────────────────── */}
      <section className="bg-[#1A1A1A] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-white/30 uppercase mb-8">Next Steps</p>
              <h2 className="font-austin text-white text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Begin your project.
              </h2>
            </div>
            <div>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                The best smart homes start with a conversation. Before plans are drawn, before cables are run, before a single fitting is chosen. Tell us about your home and we&apos;ll design a system around it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/build"
                  className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-8 py-4 transition-colors"
                >
                  BUILD YOUR HOME →
                </Link>
                <a
                  href="tel:+61450342075"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-white/60 text-white text-[11px] tracking-[0.15em] px-8 py-4 transition-colors"
                >
                  +61 450 342 075
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
