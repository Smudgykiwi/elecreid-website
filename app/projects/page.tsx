import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects — Elec Reid',
  description:
    'Melbourne smart home, electrical and AV projects by Elec Reid. Residential integration done properly.',
}

const projects = [
  {
    title: 'Toorak Residence',
    suburb: 'Toorak',
    type: 'New Build',
    systems: ['Apple HomeKit', 'Unifi', 'Lutron', 'Multi-room Audio'],
    desc: 'Full smart home integration across a newly constructed residence. Apple HomeKit as the primary control layer with Lutron lighting, Unifi networking, and a dedicated cinema room.',
    size: 'large',
  },
  {
    title: 'Brighton Renovation',
    suburb: 'Brighton',
    type: 'Renovation',
    systems: ['Apple HomeKit', 'CCTV', 'Unifi'],
    desc: 'Whole-home renovation. Structured cabling, enterprise Wi-Fi, Apple HomeKit integration, and a complete CCTV upgrade.',
    size: 'small',
  },
  {
    title: 'South Yarra Apartment',
    suburb: 'South Yarra',
    type: 'Apartment',
    systems: ['Home Assistant', 'Lutron', 'AV'],
    desc: 'High-end apartment fitout. Home Assistant with local control, Lutron lighting scenes, and a hidden AV rack with multi-room audio.',
    size: 'small',
  },
  {
    title: 'Hawthorn Family Home',
    suburb: 'Hawthorn',
    type: 'Renovation',
    systems: ['Apple HomeKit', 'Somfy Blinds', 'Security'],
    desc: 'Smart home retrofit into a heritage-listed home. Motorised Somfy blinds, Apple HomeKit automations, alarm and intercom integration — all without disturbing the character of the building.',
    size: 'large',
  },
  {
    title: 'Bayside Cinema Room',
    suburb: 'Sandringham',
    type: 'AV Install',
    systems: ['Cinema', 'Multi-room Audio', 'Unifi'],
    desc: 'Dedicated home cinema with 4K projection, acoustic treatment, and a multi-room audio system extending to the alfresco and pool area.',
    size: 'small',
  },
  {
    title: 'Kew Switchboard Upgrade',
    suburb: 'Kew',
    type: 'Electrical',
    systems: ['MSB Upgrade', 'EV Charger', 'Solar'],
    desc: 'Full main switchboard replacement, EV charger installation, and solar inverter integration. Future-proofed for battery storage.',
    size: 'small',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-10 pt-36 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
            Our Work
          </p>
          <h1 className="font-grotesk font-bold text-white text-5xl lg:text-7xl leading-tight tracking-tight max-w-3xl">
            Homes that work
            <br />
            beautifully.
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#1A1A1A] px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px">
          {projects.map((p, i) => {
            const isLarge = p.size === 'large'
            const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5'

            return (
              <div
                key={i}
                className={`${colSpan} bg-[#16253F] flex flex-col`}
              >
                {/* Image placeholder */}
                <div className="bg-[#1e3357] aspect-video flex items-end p-6">
                  <div className="font-grotesk text-white/10 text-xs tracking-widest uppercase">
                    Photography · {p.suburb}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-grotesk text-[#0134E7] text-xs tracking-widest uppercase">
                      {p.type}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="font-grotesk text-white/30 text-xs tracking-widest uppercase">
                      {p.suburb}
                    </span>
                  </div>

                  <h3 className="font-grotesk font-bold text-white text-xl lg:text-2xl mb-3">
                    {p.title}
                  </h3>

                  <p className="font-heebo text-white/55 text-sm leading-relaxed mb-6 flex-1">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.systems.map((s) => (
                      <span
                        key={s}
                        className="font-grotesk text-xs text-white/50 border border-white/10 px-3 py-1 rounded-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Your home next.
          </h2>
          <p className="font-heebo text-white/60 text-lg leading-relaxed max-w-lg mx-auto mb-10">
            Tell us about your project and we&apos;ll design a system around how
            you actually live.
          </p>
          <Link
            href="/build"
            className="inline-flex items-center bg-[#0134E7] hover:bg-[#012ab8] text-white font-grotesk font-semibold text-sm px-10 py-5 rounded-sm tracking-wide transition-colors"
          >
            Begin Your Project →
          </Link>
        </div>
      </section>
    </>
  )
}
