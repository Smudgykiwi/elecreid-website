import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#16253F] flex flex-col justify-center px-6 lg:px-10 pt-20">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full py-24 lg:py-36">
          {/* Overline */}
          <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-8">
            Melbourne · Residential · Smart Home
          </p>

          {/* H1 */}
          <h1 className="font-grotesk font-bold text-white text-5xl sm:text-6xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight max-w-5xl mb-10">
            Control,
            <br />
            <span className="text-white/30">Considered.</span>
          </h1>

          {/* Sub */}
          <p className="font-heebo text-white/60 text-lg lg:text-xl max-w-xl leading-relaxed mb-12">
            Melbourne&apos;s only electrical company built around Apple HomeKit.
            Design, install, program, handover — one team, one outcome.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/build"
              className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white font-grotesk font-medium text-sm px-8 py-4 rounded-sm tracking-wide transition-colors"
            >
              Build Your Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border border-white/25 hover:border-white/60 text-white font-grotesk font-medium text-sm px-8 py-4 rounded-sm tracking-wide transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
              Philosophy
            </p>
            <h2 className="font-grotesk font-bold text-[#16253F] text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-8">
              A smart home is not a product.
            </h2>
            {/* Decorative line */}
            <div className="w-16 h-0.5 bg-[#0134E7] mb-8" />
          </div>
          <div>
            <p className="font-heebo text-[#1A1A1A]/70 text-lg leading-relaxed mb-6">
              A smart home is not a product. It is a relationship between
              architecture, automation and the people who live there.
            </p>
            <p className="font-heebo text-[#1A1A1A]/70 text-lg leading-relaxed">
              Elec Reid specifies, installs and commissions residential systems
              where every decision is deliberate: from the switch that meets your
              hand each morning to the control platform that ties it all together.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART ───────────────────────────────────── */}
      <section className="bg-[#F5F5F3] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-4">
              What sets us apart
            </p>
            <h2 className="font-grotesk font-bold text-[#16253F] text-4xl lg:text-5xl leading-tight tracking-tight">
              The details nobody else
              <br />
              is looking at.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {/* Card 1 */}
            <div className="bg-white p-10 lg:p-12">
              <div className="w-10 h-10 bg-[#0134E7] rounded-sm mb-8 flex items-center justify-center">
                <span className="text-white text-xs font-grotesk font-bold">01</span>
              </div>
              <h3 className="font-grotesk font-bold text-[#16253F] text-sm tracking-[0.15em] uppercase mb-6">
                A Passion for Design
              </h3>
              <p className="font-heebo text-[#1A1A1A]/65 text-base leading-relaxed">
                The best technology is unseen. It adapts and reacts to how you
                move through a space. Without you touching a thing. And when it
                is seen, it falls in line with the interior design of the home.
                We care about the joinery line the switch sits on. The finish of
                the plate against the wall. The way light spills from a keypad
                in the evening. The details nobody else is looking at.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#16253F] p-10 lg:p-12">
              <div className="w-10 h-10 bg-[#0134E7] rounded-sm mb-8 flex items-center justify-center">
                <span className="text-white text-xs font-grotesk font-bold">02</span>
              </div>
              <h3 className="font-grotesk font-bold text-white text-sm tracking-[0.15em] uppercase mb-6">
                Built to Last
              </h3>
              <p className="font-heebo text-white/60 text-base leading-relaxed">
                We are passionate about what we do. Our team live and breathe
                it. We enjoy creating spaces for generations to enjoy, and
                we&apos;re relentless about building reliable systems that are
                built to last. Wired properly the first time, documented, and
                backed by the team who installed them. Ten years from now the
                architect will have moved on. The interior designer will have
                moved on. We&apos;ll still be here.
              </p>
            </div>

            {/* Card 3 — pull quote */}
            <div className="bg-[#0134E7] p-10 lg:p-12 flex flex-col justify-between">
              <div className="text-white/30 font-grotesk text-6xl leading-none mb-6">&ldquo;</div>
              <blockquote className="font-grotesk font-semibold text-white text-2xl lg:text-3xl leading-tight tracking-tight">
                Good taste, implied confidence, and a pure nerdy love for tech.
              </blockquote>
              <div className="mt-8 w-10 h-0.5 bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="bg-[#16253F] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-4">
                What we do
              </p>
              <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight">
                Full integration.
                <br />
                Every system.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-heebo text-sm transition-colors self-start lg:self-auto"
            >
              View all services <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              {
                num: '01',
                title: 'Smart Home',
                desc: 'Apple HomeKit, Home Assistant, Basalte, Control4. The right platform for how you actually live.',
              },
              {
                num: '02',
                title: 'Residential Electrical',
                desc: 'Switchboard upgrades, new builds, renovations. Licensed, insured, meticulous.',
              },
              {
                num: '03',
                title: 'Networking',
                desc: 'Ubiquiti backbone, enterprise Wi-Fi, PoE. Infrastructure built to perform — invisibly.',
              },
              {
                num: '04',
                title: 'AV & Cinema',
                desc: 'Cinema rooms, hidden AV, multi-room audio, outdoor zones. Sound and vision done properly.',
              },
              {
                num: '05',
                title: 'Security',
                desc: 'Alarm systems, CCTV, access control, intercom, keyless entry.',
              },
              {
                num: '06',
                title: 'Lighting & Blinds',
                desc: 'Dimming, scenes, circadian scheduling. Somfy, Lutron motorised blinds. Light that responds to how you live.',
              },
            ].map((service) => (
              <div
                key={service.num}
                className="bg-[#16253F] p-8 lg:p-10 group hover:bg-[#1e3357] transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-grotesk text-[#0134E7] text-xs tracking-widest">
                    {service.num}
                  </span>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">
                    →
                  </span>
                </div>
                <h3 className="font-grotesk font-semibold text-white text-lg mb-3">
                  {service.title}
                </h3>
                <p className="font-heebo text-white/50 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECT ─────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-12">
            Recent Work
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {/* Image placeholder */}
            <div className="bg-[#16253F] aspect-[4/3] lg:aspect-auto lg:min-h-[500px] flex items-end p-10">
              <div className="text-white/10 font-grotesk text-xs tracking-widest uppercase">
                Photography
              </div>
            </div>

            {/* Info */}
            <div className="bg-[#16253F] p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="font-grotesk text-white/30 text-xs tracking-widest uppercase mb-4">
                  Toorak, Melbourne
                </div>
                <h3 className="font-grotesk font-bold text-white text-3xl lg:text-4xl leading-tight tracking-tight mb-6">
                  Toorak Residence
                </h3>
                <p className="font-heebo text-white/60 text-base leading-relaxed mb-10">
                  Full smart home integration across a newly constructed
                  residence. Apple HomeKit as the primary control layer, Unifi
                  networking throughout, Lutron lighting, and a dedicated cinema
                  room with multi-room audio.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Platform', value: 'Apple HomeKit' },
                    { label: 'Networking', value: 'Unifi' },
                    { label: 'Lighting', value: 'Lutron' },
                    { label: 'Rooms', value: '4 Zones' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-grotesk text-white/30 text-xs tracking-widest uppercase mb-1">
                        {stat.label}
                      </div>
                      <div className="font-grotesk font-semibold text-white text-sm">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 text-white/60 hover:text-white font-heebo text-sm transition-colors"
                >
                  View all projects <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO THINGS ───────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 lg:mb-20">
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
              The Partnership
            </p>
            <h2 className="font-grotesk font-bold text-[#16253F] text-4xl lg:text-5xl leading-tight tracking-tight">
              Two things make a smart home work.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div className="bg-[#F5F5F3] p-10 lg:p-14">
              <div className="w-10 h-0.5 bg-[#0134E7] mb-8" />
              <h3 className="font-grotesk font-bold text-[#16253F] text-sm tracking-[0.15em] uppercase mb-6">
                Choosing the Right System
              </h3>
              <p className="font-heebo text-[#1A1A1A]/65 text-base leading-relaxed">
                The platform you pick has to fit how you actually live. Not how
                a showroom says you should. Pick the wrong one and you&apos;ll
                fight it for ten years. Pick the right one and you&apos;ll
                forget it&apos;s there.
              </p>
            </div>
            <div className="bg-[#16253F] p-10 lg:p-14">
              <div className="w-10 h-0.5 bg-[#0134E7] mb-8" />
              <h3 className="font-grotesk font-bold text-white text-sm tracking-[0.15em] uppercase mb-6">
                Partnering with the Right Integrator
              </h3>
              <p className="font-heebo text-white/60 text-base leading-relaxed">
                Hardware is a commodity. The installer is not. The right
                integrator brings the vision to life. And keeps it alive long
                after the handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="bg-[#F5F5F3] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-12">
            What clients say
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'We had three different companies touch our home before Elec Reid. Within a week of them finishing, everything just worked. We didn\'t even have to think about it.',
                name: 'M. & S. Thornton',
                suburb: 'Brighton',
              },
              {
                quote:
                  'Joe was the only person who actually listened to how we wanted to live in the house — not just what gear to install. The result is something we\'re genuinely proud of.',
                name: 'A. Fairweather',
                suburb: 'Toorak',
              },
              {
                quote:
                  'The attention to detail is extraordinary. The keypads sit flush with the joinery. The lighting scenes are perfect. Nothing looks like an afterthought.',
                name: 'D. & L. Marchetti',
                suburb: 'South Yarra',
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#0134E7] text-sm">★</span>
                  ))}
                </div>
                <blockquote className="font-heebo text-[#1A1A1A]/75 text-base leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-grotesk font-semibold text-[#16253F] text-sm">
                    {t.name}
                  </div>
                  <div className="font-heebo text-[#1A1A1A]/40 text-xs mt-1">
                    {t.suburb}, Melbourne
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#16253F] px-6 lg:px-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-6">
              Begin your project.
            </h2>
            <p className="font-heebo text-white/60 text-lg leading-relaxed">
              The best smart homes start with a conversation. Before plans are
              drawn, before cables are run, before a single fitting is chosen.
              Tell us about your home and we&apos;ll design a system around it.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:items-end">
            <Link
              href="/build"
              className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white font-grotesk font-semibold text-sm px-10 py-5 rounded-sm tracking-wide transition-colors w-full lg:w-auto text-center"
            >
              Build Your Home →
            </Link>
            <a
              href="tel:+61450342075"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-heebo text-sm px-10 py-4 rounded-sm transition-colors w-full lg:w-auto text-center"
            >
              Or call Joe directly: +61 450 342 075
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
