import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Services — Elec Reid',
  description:
    'Smart home, networking, AV, security, electrical, lighting. Full residential integration by Elec Reid, Melbourne.',
}

const platforms = [
  {
    name: 'Apple Home',
    tag: 'Our #1 Recommendation',
    tagColor: 'bg-[#0134E7] text-white',
    desc: 'Our #1 recommendation for most residential smart homes. No subscription fees, end-to-end encryption, powerful automations. Your iPhone, iPad, Apple Watch, or Siri — one beautiful control point for your entire house.',
    ideal: 'Apple ecosystem households, new builds, renovations',
  },
  {
    name: 'Home Assistant',
    tag: 'Open Source',
    tagColor: 'bg-[#F5F5F3] text-[#16253F]',
    desc: 'Open source. Local control. Limitless possibilities. Works with 2,000+ integrations. Zero cloud reliance. Zero vendor lock-in. For homes that want to go deep.',
    ideal: 'Tech-forward clients who want full control',
  },
  {
    name: 'Basalte Home',
    tag: 'Premium',
    tagColor: 'bg-[#F5F5F3] text-[#16253F]',
    desc: 'The premium choice. Belgian-engineered. When you want beautiful Basalte touchscreens integrated seamlessly — designed by the same hands that made your switches.',
    ideal: 'High-end renovations, design-led projects',
  },
  {
    name: 'Control4',
    tag: 'Established',
    tagColor: 'bg-[#F5F5F3] text-[#16253F]',
    desc: 'A mature platform, twenty years in the market. We install it for clients who specifically request it.',
    ideal: 'Clients upgrading existing Control4 systems',
  },
]

const services = [
  {
    num: '01',
    title: 'Smart Home Automation',
    body: 'Apple HomeKit, Home Assistant, Basalte, Control4. We help you choose the platform that fits how you actually live — then design, install, and program it to disappear into your home.',
    items: ['Platform selection & design', 'Full programming & scenes', 'Voice control integration', 'Ongoing support'],
  },
  {
    num: '02',
    title: 'Networking',
    body: 'Ubiquiti backbone, enterprise Wi-Fi, PoE. Infrastructure built to perform — invisibly. Rock-solid foundations that every smart device in your home depends on.',
    items: ['Ubiquiti UniFi architecture', 'Whole-home Wi-Fi coverage', 'PoE switching & structured cabling', 'VLAN segmentation & security'],
  },
  {
    num: '03',
    title: 'Lighting',
    body: 'Dimming, scenes, circadian scheduling. Light that responds to how you live. From the morning fade-up to the evening wind-down — designed with the interior in mind.',
    items: ['Lutron, Dynalite, KNX integration', 'Scene programming', 'Circadian rhythm automation', 'Keypad & touchscreen control'],
  },
  {
    num: '04',
    title: 'Motorised Blinds',
    body: 'Somfy, Lutron, motorised automation. Privacy, temperature control, and light management — all automated and integrated with your wider home system.',
    items: ['Somfy & Lutron systems', 'Smart home integration', 'Scene-based automation', 'App & voice control'],
  },
  {
    num: '05',
    title: 'Security',
    body: 'Alarm systems, CCTV, access control, intercom, keyless entry. A complete security layer that integrates with your smart home — not a bolted-on afterthought.',
    items: ['IP CCTV & recording', 'Alarm systems & monitoring', 'Video intercom & access control', 'Smart locks & keyless entry'],
  },
  {
    num: '06',
    title: 'AV & Home Cinema',
    body: 'Cinema rooms, hidden AV, multi-room audio, outdoor zones. Sound and vision done properly — cables hidden, sources centralised, control simplified.',
    items: ['Dedicated cinema rooms', 'Multi-room audio distribution', 'Hidden AV equipment racks', 'Outdoor speaker systems'],
  },
  {
    num: '07',
    title: 'Residential Electrical',
    body: 'Switchboard upgrades, new builds, renovations. Licensed, insured, and meticulous. The electrical backbone that everything else runs on.',
    items: ['Switchboard upgrades & MSBs', 'New construction & renovations', 'Ceiling fans & lighting circuits', 'Underground & garden lighting'],
  },
  {
    num: '08',
    title: 'EV & Solar',
    body: 'EV chargers, inverters, battery management. Future-ready infrastructure installed by people who understand how it integrates with your home.',
    items: ['EV charger installation', 'Solar inverter hookup', 'Battery storage systems', 'Load management & monitoring'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Nav />
      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-10 pt-36 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
            Services
          </p>
          <h1 className="font-grotesk font-bold text-white text-5xl lg:text-7xl leading-tight tracking-tight max-w-3xl">
            Every system.
            <br />
            One team.
          </h1>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-4">
              Smart Home Platforms
            </p>
            <h2 className="font-grotesk font-bold text-[#16253F] text-3xl lg:text-4xl leading-tight tracking-tight">
              We work with the best.
              <br />
              We recommend what fits.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#F5F5F3]">
            {platforms.map((p) => (
              <div key={p.name} className="bg-white p-10 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-grotesk font-bold text-[#16253F] text-xl">
                    {p.name}
                  </h3>
                  <span className={`font-grotesk text-xs tracking-widest uppercase px-3 py-1 rounded-sm ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
                <p className="font-heebo text-[#1A1A1A]/65 text-base leading-relaxed mb-6">
                  {p.desc}
                </p>
                <div className="text-[#1A1A1A]/40 font-heebo text-xs">
                  Ideal for: {p.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-[#F5F5F3] px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-4">
              Full scope
            </p>
            <h2 className="font-grotesk font-bold text-[#16253F] text-3xl lg:text-4xl leading-tight tracking-tight">
              What we install.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/50">
            {services.map((s) => (
              <div key={s.num} className="bg-[#F5F5F3] p-10 lg:p-12">
                <div className="font-grotesk text-[#0134E7] text-xs tracking-widest mb-4">
                  {s.num}
                </div>
                <h3 className="font-grotesk font-bold text-[#16253F] text-xl mb-4">
                  {s.title}
                </h3>
                <p className="font-heebo text-[#1A1A1A]/65 text-base leading-relaxed mb-6">
                  {s.body}
                </p>
                <ul className="flex flex-col gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-heebo text-[#1A1A1A]/60 text-sm">
                      <span className="w-1 h-1 rounded-full bg-[#0134E7] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
              Begin your project.
            </h2>
            <p className="font-heebo text-white/60 text-lg leading-relaxed">
              Tell us about your home and we&apos;ll design a system around it.
              Before plans are drawn, before cables are run, before a single
              fitting is chosen.
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
              href="tel:+61450342075"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-heebo text-sm px-10 py-4 rounded-sm transition-colors w-full lg:w-auto"
            >
              +61 450 342 075
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
