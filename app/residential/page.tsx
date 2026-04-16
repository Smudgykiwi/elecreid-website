import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Nav />
    <div className="bg-[#F5F2EE]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 pt-36 lg:pt-44 pb-12">
        <div className="max-w-screen-xl mx-auto">

          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-10">
            Melbourne · Residential · Smart Home
          </p>

          <h1 className="font-austin font-bold text-[#1A1A1A] leading-[0.88] tracking-tight mb-12
            text-[clamp(64px,10vw,152px)]">
            Control,<br /><em>Considered.</em>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pt-8 border-t border-[#1A1A1A]/10">
            <p className="text-[#1A1A1A]/50 text-lg leading-relaxed max-w-md">
              Melbourne&apos;s only electrical company built around Apple HomeKit.
              One team. Design, install, program, handover.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/build"
                className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
                Build Your Home →
              </Link>
              <Link href="/projects"
                className="inline-flex items-center justify-center border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/60 text-[#1A1A1A]/60 hover:text-[#1A1A1A] text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
                See Our Work
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 pb-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="overflow-hidden">
            <Image
              src="/images/haven-dsc05570.jpg"
              alt="McKimm Brighton Elec Reid"
              width={2000}
              height={1200}
              className="w-full object-cover object-center"
              style={{ height: 'clamp(280px, 55vw, 760px)' }}
              priority
            />
          </div>
          <p className="text-[8px] tracking-[0.25em] text-[#1A1A1A]/30 uppercase mt-3 pb-0">
            McKimm Residence · Brighton, VIC
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-10">Our Philosophy</p>
              <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-[1.0] tracking-tight">
                A smart home is not&nbsp;a&nbsp;product.
              </h2>
            </div>
            <div className="lg:pt-24">
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
                It is a relationship between architecture, automation and the people who live there. Elec Reid specifies, installs and commissions residential systems where every decision is deliberate from the switch that meets your hand each morning to the control platform that ties it all together.
              </p>
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                We partner with the best hardware in the world Basalte, Core Smart Home, Zetr, Control4, Ekinex and pair them with platforms we trust.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-16">
            <div className="overflow-hidden">
              <Image src="/images/haven-dsc05599.jpg" alt="Haven Court spiral staircase" width={900} height={675}
                className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="overflow-hidden">
              <Image src="/images/haven-dsc05656.jpg" alt="Haven Court home bar with LED lighting" width={900} height={675}
                className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="overflow-hidden">
              <Image src="/images/haven-dsc05771.jpg" alt="Haven Court exterior with smart doorbell" width={900} height={675}
                className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" />
            </div>
          </div>
          <p className="text-[8px] tracking-[0.25em] text-[#1A1A1A]/30 uppercase mt-3">Haven Court · Torquay, VIC</p>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────── */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-austin italic text-white leading-[1.1] tracking-tight
            text-[clamp(28px,4vw,56px)] max-w-4xl">
            &ldquo;Good taste, implied confidence,<br className="hidden lg:block" /> and a pure nerdy love for tech.&rdquo;
          </p>
          <p className="text-white/35 text-[9px] tracking-[0.3em] uppercase mt-8">
            How a friend described our team
          </p>
        </div>
      </section>

      {/* ── WHAT SETS US APART ───────────────────────────────────── */}
      <section className="px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-16">What sets us apart</p>
          <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]/10">
            {[
              {
                num: '01',
                title: 'A passion for design.',
                body: 'The best technology is unseen. It adapts to how you move through a space. We care about the joinery line the switch sits on. The finish of the plate against the wall. The way light spills from a keypad at night.',
              },
              {
                num: '02',
                title: 'Built to last.',
                body: 'Relentless about systems that are wired properly the first time, documented, and backed by the team who installed them. Ten years from now the architect will have moved on. We\'ll still be here. Same number.',
              },
              {
                num: '03',
                title: 'One accountable team.',
                body: 'Electrical, networking, automation, AV designed together, installed together, programmed together. No passing the buck. No three contractors blaming each other. One team. Everything works.',
              },
            ].map((item, i) => (
              <div key={item.num} className={`py-10 ${i > 0 ? 'lg:pl-12' : ''} ${i < 2 ? 'lg:pr-12' : ''}`}>
                <p className="font-austin text-[#1A1A1A]/15 text-5xl mb-6">{item.num}</p>
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-4">{item.title}</h3>
                <p className="text-[#1A1A1A]/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE ─────────────────────────────────────── */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <Image src="/images/haven-dsc05653.jpg" alt="Haven Court home theatre and bar" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16253F]/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-6 lg:left-16">
          <p className="text-[8px] tracking-[0.25em] text-white/50 uppercase">Haven Court · Torquay, VIC</p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-2">
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase">What We Offer</p>
            <Link href="/brands" className="text-[9px] tracking-[0.2em] text-white/30 hover:text-white uppercase transition-colors hidden sm:block">
              All →
            </Link>
          </div>
          <h2 className="font-austin text-[#0134E7] leading-none mb-16
            text-[clamp(64px,10vw,144px)]">
            Services
          </h2>

          <div className="divide-y divide-white/10">
            {[
              { num: '01', title: 'Smart Home Automation', desc: 'Apple HomeKit as standard. Design, commission and handover of complete residential automation systems.' },
              { num: '02', title: 'Residential Electrical', desc: 'A-grade licensed electricians. The infrastructure that makes everything else possible.' },
              { num: '03', title: 'Networking', desc: 'Ubiquiti/Unifi built for performance. Enterprise Wi-Fi, structured cabling, PoE.' },
              { num: '04', title: 'Audio Visual & Home Cinema', desc: 'Multi-room audio, home cinema, outdoor zones. Sonos, premium speakers, hidden AV.' },
              { num: '05', title: 'Security Systems', desc: 'CCTV, intercom, access control and alarm systems all integrated.' },
              { num: '06', title: 'Lighting Design', desc: 'Dimming, scenes, circadian scheduling. Light that responds to how you live.' },
            ].map((service) => (
              <div key={service.num} className="grid grid-cols-[44px_1fr_28px] gap-6 items-center py-6 group">
                <span className="font-austin text-white/20 text-lg">{service.num}</span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-austin text-white text-xl lg:text-2xl">{service.title}</h3>
                  <p className="text-white/35 text-sm max-w-sm">{service.desc}</p>
                </div>
                <Link href="/brands" className="text-white/20 group-hover:text-[#0134E7] transition-colors">→</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ──────────────────────────────────────── */}
      <section className="px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-3">Recent Work</p>
              <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl">Melbourne projects.</h2>
            </div>
            <Link href="/projects" className="hidden sm:block text-[9px] tracking-[0.2em] text-[#1A1A1A]/30 hover:text-[#0134E7] uppercase transition-colors">
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Haven Court', location: 'Torquay, VIC', img: '/images/haven-dsc05653.jpg' },
              { title: 'McKimm', location: 'Brighton, VIC', img: '/images/mckimm-5.jpg' },
              { title: 'Haven Court', location: 'Torquay, VIC', img: '/images/haven-dsc05648.jpg' },
              { title: 'Merival', location: 'Melbourne', img: '/images/merival-sonos.jpg' },
            ].map((project) => (
              <Link key={project.title} href="/projects" className="group block">
                <div className="relative overflow-hidden">
                  <Image src={project.img} alt={project.title} width={900} height={675}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-austin text-white text-2xl">{project.title}</p>
                    <p className="text-white/50 text-[9px] tracking-[0.2em] uppercase mt-1">{project.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SWITCH SHOWCASE ──────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-10">Switches & Keypads</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/basalte-fibonacci.jpg', label: 'Basalte Fibonacci' },
              { src: '/images/main-3.png', label: 'Keypad Finishes' },
              { src: '/images/ekinex-proxima.jpg', label: 'Ekinex Proxima' },
              { src: '/images/ekinex-20venti.jpg', label: 'Ekinex 20Venti' },
            ].map((item) => (
              <div key={item.label}>
                <div className="aspect-square overflow-hidden bg-[#F5F2EE]">
                  <Image src={item.src} alt={item.label} width={600} height={600}
                    className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
                </div>
                <p className="text-[8px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-16">What clients say</p>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { name: 'Su Mei Koh', suburb: 'Toorak', text: 'Joe and his team came highly recommended, and I\'m so grateful. The smart home system works flawlessly and the finish is impeccable.' },
              { name: 'Robbie Smarrelli', suburb: 'South Yarra', text: 'Excellent service with expert workmanship. Reliable, professional, and the attention to detail was outstanding.' },
              { name: 'Andy Fisher', suburb: 'Brighton', text: 'Joe\'s an absolute legend not just a top electrician but a great bloke too. A genius when it comes to smart home tech.' },
            ].map((review) => (
              <div key={review.name} className="border-t border-[#1A1A1A]/10 pt-8">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#0134E7] text-xs">★</span>)}
                </div>
                <p className="font-austin italic text-[#1A1A1A] text-xl leading-snug mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-[#1A1A1A] text-sm">{review.name}</p>
                <p className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase mt-1">{review.suburb} · Google</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEGIN YOUR PROJECT ───────────────────────────────────── */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-white/25 uppercase mb-10">Next Steps</p>
            <h2 className="font-austin text-white leading-[0.92] tracking-tight
              text-[clamp(48px,7vw,96px)]">
              Begin your<br />project.
            </h2>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              The best smart homes start with a conversation. Before plans are drawn, before cables are run, before a single fitting is chosen.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/build"
                className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors">
                Build Your Home →
              </Link>
              <a href="tel:+61450342075"
                className="inline-flex items-center justify-center border border-white/15 hover:border-white/40 text-white/40 hover:text-white/80 text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors">
                +61 450 342 075
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  )
}
