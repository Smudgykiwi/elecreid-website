import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'About — Elec Reid',
  description:
    'Elec Reid is a Melbourne residential electrical and smart home company built on craft, reliability, and genuine care.',
}

const values = [
  {
    num: '01',
    title: 'Deliberate by design',
    body: 'Every recommendation we make is earned. We specify what fits. We explain why. We don\'t install what we don\'t stand behind.',
  },
  {
    num: '02',
    title: 'One team, full accountability',
    body: 'Design, install, program, handover — all under one roof. When something needs fixing, you call one number. Not three.',
  },
  {
    num: '03',
    title: 'Built to last',
    body: 'Wired properly the first time. Documented. Backed by the team who installed it. Ten years from now, we\'ll still be here.',
  },
  {
    num: '04',
    title: 'Honest pricing',
    body: 'We design the system before we quote it. No surprises at handover. No scope creep. A plan you can hold us to.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-10 pt-36 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
              About
            </p>
            <h1 className="font-grotesk font-bold text-white text-5xl lg:text-7xl leading-tight tracking-tight">
              Not just electricians.
              <br />
              Not just integrators.
            </h1>
          </div>
          <div>
            <p className="font-heebo text-white/60 text-lg leading-relaxed">
              Elec Reid is a Melbourne residential electrical and smart home
              company. We were founded on a single belief: that homes should
              work exactly as their owners imagined, without the friction that
              comes from multiple contractors, incompatible systems, and no one
              taking responsibility for the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
              Philosophy
            </p>
            <h2 className="font-grotesk font-bold text-[#16253F] text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
              Control,
              <br />
              Considered.
            </h2>
            <div className="w-10 h-0.5 bg-[#0134E7]" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-heebo text-[#1A1A1A]/70 text-lg leading-relaxed">
              A smart home is not a product. It is a relationship between
              architecture, automation and the people who live there.
            </p>
            <p className="font-heebo text-[#1A1A1A]/70 text-base leading-relaxed">
              We specif, install and commission residential systems where every
              decision is deliberate: from the switch that meets your hand each
              morning to the control platform that ties it all together.
            </p>
            <p className="font-heebo text-[#1A1A1A]/70 text-base leading-relaxed">
              We are Melbourne&apos;s only electrical company built around Apple
              HomeKit as the core smart home platform — and the only team in the
              city that handles electrical, networking, AV, lighting, security,
              and smart home under one roof, with one accountable team.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#0134E7] px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/20 font-grotesk text-8xl leading-none mb-6">&ldquo;</div>
          <blockquote className="font-grotesk font-semibold text-white text-3xl lg:text-5xl xl:text-6xl leading-tight tracking-tight max-w-4xl">
            Good taste, implied confidence, and a pure nerdy love for tech.
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F5F3] px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-4">
              How we work
            </p>
            <h2 className="font-grotesk font-bold text-[#16253F] text-3xl lg:text-4xl leading-tight tracking-tight">
              Our principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white">
            {values.map((v) => (
              <div key={v.num} className="bg-[#F5F5F3] p-10 lg:p-12">
                <div className="font-grotesk text-[#0134E7] text-xs tracking-widest mb-4">
                  {v.num}
                </div>
                <h3 className="font-grotesk font-bold text-[#16253F] text-xl mb-4">
                  {v.title}
                </h3>
                <p className="font-heebo text-[#1A1A1A]/65 text-base leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#16253F] px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
              The team
            </p>
            <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              The people behind it.
            </h2>
            <p className="font-heebo text-white/60 text-lg leading-relaxed mb-8">
              Our team are licensed electricians who care about craft. A players
              who understand that the technology is only as good as the
              installation behind it.
            </p>
            <p className="font-heebo text-white/60 text-base leading-relaxed">
              Every job is led by a senior technician who takes full ownership
              from first site visit to final handover. You meet the team before
              a single cable is pulled.
            </p>
          </div>
          <div className="bg-[#1e3357] aspect-square flex items-end p-8">
            <div className="font-grotesk text-white/10 text-xs tracking-widest uppercase">
              Team Photography
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-grotesk font-bold text-[#16253F] text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
              Begin your project.
            </h2>
            <p className="font-heebo text-[#1A1A1A]/60 text-lg leading-relaxed">
              The best smart homes start with a conversation. Before plans are
              drawn, before cables are run, before a single fitting is chosen.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              href="/build"
              className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white font-grotesk font-semibold text-sm px-10 py-5 rounded-sm tracking-wide transition-colors w-full lg:w-auto"
            >
              Build Your Home →
            </Link>
            <a
              href="mailto:joe@elecreid.com"
              className="inline-flex items-center justify-center border border-[#16253F]/20 hover:border-[#16253F]/50 text-[#1A1A1A]/60 hover:text-[#1A1A1A] font-heebo text-sm px-10 py-4 rounded-sm transition-colors w-full lg:w-auto"
            >
              joe@elecreid.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
