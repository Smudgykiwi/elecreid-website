import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 pt-32 pb-0">
        <div className="max-w-screen-xl mx-auto">

          {/* Overline */}
          <p className="text-[10px] tracking-[0.3em] text-[#0134E7] uppercase mb-8">
            Melbourne · Residential · Smart Home
          </p>

          {/* Headline — maximum scale */}
          <h1 className="font-austin font-bold text-[#1A1A1A] text-[72px] sm:text-[96px] lg:text-[128px] xl:text-[160px] leading-[0.88] tracking-tight mb-12">
            Control,<br />
            <em>Considered.</em>
          </h1>

          {/* Sub + CTA row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-[#1A1A1A]/10">
            <p className="text-[#1A1A1A]/50 text-xl max-w-lg leading-relaxed">
              Melbourne&apos;s only electrical company built around Apple HomeKit.
              Design, install, program, handover — one team, one outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[10px] tracking-[0.2em] uppercase px-8 py-4 transition-colors">
                Build Your Home →
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A] text-[10px] tracking-[0.2em] uppercase px-8 py-4 transition-colors">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 pt-6">
          <Image
            src="/images/mckimm-5.jpg"
            alt="McKimm Brighton — Elec Reid smart home installation"
            width={2000}
            height={1200}
            className="w-full h-[55vh] lg:h-[75vh] object-cover object-center"
            priority
          />
          <p className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase mt-3">
            McKimm Residence · Brighton, VIC
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-8">Our Philosophy</p>
              <h2 className="font-austin text-[#1A1A1A] text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight">
                A smart home is not a product.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
              <p className="text-[#1A1A1A]/60 text-xl leading-relaxed mb-6">
                It is a relationship between architecture, automation and the people who live there. Elec Reid specifies, installs and commissions residential systems where every decision is deliberate: from the switch that meets your hand each morning to the control platform that ties it all together.
              </p>
              <p className="text-[#1A1A1A]/60 text-xl leading-relaxed">
                We partner with the best hardware in the world — Basalte, Core Smart Home, Zetr, Control4, Ekinex. This guide walks you through the options so you can make informed decisions before a single cable is pulled.
              </p>
            </div>
          </div>

          {/* Philosophy image */}
          <div className="grid lg:grid-cols-2 gap-4 mt-16">
            <Image src="/images/haven-1.jpg" alt="Haven Court Torquay" width={1200} height={800}
              className="w-full aspect-[4/3] object-cover" />
            <Image src="/images/haven-6.jpg" alt="Haven Court exterior" width={1200} height={800}
              className="w-full aspect-[4/3] object-cover" />
          </div>
          <p className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase mt-3">
            Haven Court · Torquay, VIC
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────── */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-austin italic text-white text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-5xl">
            &ldquo;Good taste, implied confidence,<br className="hidden lg:block" /> and a pure nerdy love for tech.&rdquo;
          </p>
          <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mt-8">— How a friend described our team</p>
        </div>
      </section>

      {/* ── WHAT SETS US APART ───────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-20">What sets us apart</p>
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                num: '01',
                title: 'A passion for design.',
                body: 'The best technology is unseen. It adapts and reacts to how you move through a space. We care about the joinery line the switch sits on. The finish of the plate against the wall. The way light spills from a keypad in the evening.',
              },
              {
                num: '02',
                title: 'Built to last.',
                body: 'We\'re relentless about building reliable systems that are built to last. Wired properly the first time, documented, and backed by the team who installed them. Ten years from now the architect will have moved on. We\'ll still be here.',
              },
              {
                num: '03',
                title: 'One accountable team.',
                body: 'Electrical, networking, automation, AV — all designed together, installed together, programmed together. No passing the buck between trades. One team. Everything works.',
              },
            ].map((item) => (
              <div key={item.num} className="border-t-2 border-[#1A1A1A]/10 pt-10">
                <p className="font-austin text-[#1A1A1A]/15 text-6xl mb-8">{item.num}</p>
                <h3 className="font-austin text-[#1A1A1A] text-2xl lg:text-3xl mb-5">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed text-lg">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F4F0] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-end justify-between mb-4">
            <p className="text-[10px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase">What We Offer</p>
            <Link href="/services" className="text-[10px] tracking-[0.2em] text-[#0134E7] uppercase hover:underline hidden sm:block">
              All Services →
            </Link>
          </div>
          <h2 className="font-austin text-[#0134E7] text-[80px] lg:text-[120px] xl:text-[160px] leading-none mb-16">
            Services
          </h2>

          <div className="divide-y divide-[#1A1A1A]/10">
            {[
              { num: '01', title: 'Smart Home Automation', desc: 'Apple HomeKit as standard. Design, commission and handover of complete residential automation systems.' },
              { num: '02', title: 'Residential Electrical', desc: 'A-grade licensed electricians for all residential work. The infrastructure that makes everything else possible.' },
              { num: '03', title: 'Networking', desc: 'Ubiquiti/Unifi infrastructure built for performance. Enterprise Wi-Fi, structured cabling, PoE.' },
              { num: '04', title: 'Audio Visual & Home Cinema', desc: 'Multi-room audio, home cinema, outdoor zones. Sonos, premium speakers, hidden AV.' },
              { num: '05', title: 'Security Systems', desc: 'CCTV, intercom, access control and alarm systems that integrate with your smart home.' },
              { num: '06', title: 'Lighting Design', desc: 'Dimming, scenes, circadian scheduling and keypads. Light that responds to how you live.' },
            ].map((service) => (
              <div key={service.num} className="grid grid-cols-[56px_1fr_32px] gap-6 items-start py-7 group">
                <span className="font-austin text-[#1A1A1A]/20 text-xl pt-1">{service.num}</span>
                <div>
                  <h3 className="font-austin text-[#1A1A1A] text-2xl lg:text-3xl mb-1">{service.title}</h3>
                  <p className="text-[#1A1A1A]/50 leading-relaxed">{service.desc}</p>
                </div>
                <Link href="/services" className="text-[#1A1A1A]/20 group-hover:text-[#0134E7] transition-colors text-xl pt-1">→</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SWITCH SHOWCASE ──────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-16">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-10">Switches & Keypads</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/basalte-fibonacci.jpg', label: 'Basalte Fibonacci' },
              { src: '/images/main-3.png', label: 'Keypad Finishes' },
              { src: '/images/ekinex-proxima.jpg', label: 'Ekinex Proxima' },
              { src: '/images/ekinex-20venti.jpg', label: 'Ekinex 20Venti' },
            ].map((item) => (
              <div key={item.label}>
                <div className="aspect-square overflow-hidden bg-[#F7F4F0]">
                  <Image src={item.src} alt={item.label} width={600} height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/35 uppercase mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ──────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-4">Recent Work</p>
              <h2 className="font-austin text-[#1A1A1A] text-5xl lg:text-6xl">Melbourne projects.</h2>
            </div>
            <Link href="/projects" className="hidden sm:block text-[10px] tracking-[0.2em] text-[#0134E7] uppercase hover:underline">
              All Projects →
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {[
              { title: 'Haven Court, Torquay', desc: 'Architecture & automation', tags: ['Smart Home', 'Lighting', 'AV'], img: '/images/haven-6.jpg' },
              { title: 'McKimm, Brighton', desc: 'Full smart home integration', tags: ['Apple HomeKit', 'Unifi', 'Lutron'], img: '/images/mckimm-3.jpg' },
            ].map((project) => (
              <Link key={project.desc} href="/projects" className="group block">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image src={project.img} alt={project.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-austin text-white text-2xl mb-1">{project.title}</p>
                    <p className="text-white/60 text-sm">{project.desc}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] tracking-[0.15em] border border-[#1A1A1A]/15 px-3 py-1 text-[#1A1A1A]/40 uppercase">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PARTNERSHIP ──────────────────────────────────────── */}
      <section className="bg-[#F7F4F0] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-8">The Partnership</p>
              <h2 className="font-austin text-[#1A1A1A] text-5xl lg:text-6xl leading-tight">
                Two things make a smart home work.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-16 space-y-10">
              <div className="border-t border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-3">01 · Choosing the right system</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed text-lg">The platform you pick has to fit how you actually live. Not how a showroom says you should. Pick the wrong one and you&apos;ll fight it for ten years. Pick the right one and you&apos;ll forget it&apos;s there.</p>
              </div>
              <div className="border-t border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-3">02 · Partnering with the right integrator</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed text-lg">Hardware is a commodity. The installer is not. The right integrator brings the vision to life. And keeps it alive long after the handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-24">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-[#1A1A1A]/30 uppercase mb-16">What clients say</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Su Mei Koh', suburb: 'Toorak', text: 'Joe and his team came highly recommended, and I\'m so grateful for their hard work. The smart home system works flawlessly and the finish is impeccable.' },
              { name: 'Robbie Smarrelli', suburb: 'South Yarra', text: 'Joe and his team provided excellent service with expert workmanship. They were reliable, professional, and the attention to detail was outstanding.' },
              { name: 'Andy Fisher', suburb: 'Brighton', text: 'Joe\'s an absolute legend — not just a top electrician but a great bloke too. He\'s a genius when it comes to smart home tech. Couldn\'t recommend highly enough.' },
            ].map((review) => (
              <div key={review.name} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#0134E7] text-sm">★</span>
                  ))}
                </div>
                <p className="font-austin italic text-[#1A1A1A] text-xl leading-relaxed mb-8">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="text-[#1A1A1A] text-sm font-medium">{review.name}</p>
                  <p className="text-[#1A1A1A]/35 text-[10px] tracking-wider uppercase mt-1">{review.suburb} · Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEGIN YOUR PROJECT ───────────────────────────────────── */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.3em] text-white/25 uppercase mb-8">Next Steps</p>
              <h2 className="font-austin text-white text-5xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-tight">
                Begin your<br />project.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-white/55 text-xl leading-relaxed mb-10">
                The best smart homes start with a conversation. Before plans are drawn, before cables are run, before a single fitting is chosen.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/build"
                  className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[10px] tracking-[0.2em] uppercase px-10 py-5 transition-colors text-center">
                  Build Your Home →
                </Link>
                <a href="tel:+61450342075"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase px-10 py-5 transition-colors text-center">
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
