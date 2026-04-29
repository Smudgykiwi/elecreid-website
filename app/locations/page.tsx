import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Smart Home Electrician Melbourne | Elec Reid Service Areas',
  description: 'Elec Reid installs smart home systems, AV, and electrical across Melbourne. See completed projects and service areas by suburb.',
}

const withProjects = [
  { slug: 'torquay', name: 'Torquay', desc: 'Haven Court: full smart home, KNX, Unifi' },
  { slug: 'brighton', name: 'Brighton', desc: 'McKimm Residence: Apple HomeKit, Sonos, pool automation' },
  { slug: 'st-kilda', name: 'St Kilda', desc: 'Fitzroy Street: rooftop AV and lighting automation' },
  { slug: 'malvern-east', name: 'Malvern East', desc: 'Manning Road: home cinema and AV integration' },
]

const serviceAreas = [
  { slug: 'toorak', name: 'Toorak', desc: 'Prestige smart home installation' },
  { slug: 'south-yarra', name: 'South Yarra', desc: 'Inner-city smart home and AV' },
  { slug: 'hawthorn', name: 'Hawthorn', desc: 'Victorian and contemporary builds' },
  { slug: 'camberwell', name: 'Camberwell', desc: 'Family homes and renovations' },
  { slug: 'kew', name: 'Kew', desc: 'Period homes, long-term upgrades' },
  { slug: 'armadale', name: 'Armadale', desc: 'Heritage homes, premium hardware' },
  { slug: 'richmond', name: 'Richmond', desc: 'Inner-city terrace and warehouse' },
  { slug: 'prahran', name: 'Prahran', desc: 'Apartments and compact spaces' },
  { slug: 'fitzroy', name: 'Fitzroy', desc: 'Creative inner-north builds' },
  { slug: 'carlton', name: 'Carlton', desc: 'Victorian terrace retrofits' },
  { slug: 'glen-waverley', name: 'Glen Waverley', desc: 'Eastern family homes' },
  { slug: 'doncaster', name: 'Doncaster', desc: 'Large blocks, family installs' },
  { slug: 'eltham', name: 'Eltham', desc: 'Architect homes, Home Assistant' },
  { slug: 'balwyn', name: 'Balwyn', desc: 'Prestige eastern suburb' },
  { slug: 'canterbury', name: 'Canterbury', desc: 'Period homes, permanent systems' },
  { slug: 'mont-albert', name: 'Mont Albert', desc: 'Federation and Edwardian homes' },
  { slug: 'box-hill', name: 'Box Hill', desc: 'Diverse inner-eastern suburb' },
]

export default function LocationsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 pt-36 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Where we work</p>
          <h1 className="font-austin text-[#1A1A1A] text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Melbourne.
          </h1>
          <p className="text-[#1A1A1A]/50 text-xl max-w-2xl leading-relaxed">
            Elec Reid installs smart home systems, AV, and electrical across Melbourne and surrounds. Each suburb below links to a dedicated page showing completed work and the services available in that area.
          </p>
        </div>
      </section>

      {/* Completed projects */}
      <section className="bg-white px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-10">Completed Projects</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {withProjects.map((suburb) => (
              <Link key={suburb.slug} href={`/locations/${suburb.slug}`}
                className="group border border-[#1A1A1A]/10 hover:border-[#0134E7] p-8 transition-colors block">
                <h2 className="font-austin text-[#1A1A1A] text-2xl mb-2 group-hover:text-[#0134E7] transition-colors">{suburb.name}</h2>
                <p className="text-[#1A1A1A]/45 text-sm leading-relaxed mb-4">{suburb.desc}</p>
                <span className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/25 group-hover:text-[#0134E7] uppercase transition-colors">View project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-10">Service Areas</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.map((suburb) => (
              <Link key={suburb.slug} href={`/locations/${suburb.slug}`}
                className="group border border-[#1A1A1A]/10 hover:border-[#0134E7] p-6 transition-colors block">
                <h2 className="font-austin text-[#1A1A1A] text-xl mb-1 group-hover:text-[#0134E7] transition-colors">{suburb.name}</h2>
                <p className="text-[#1A1A1A]/40 text-xs leading-relaxed">{suburb.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Not listed? Get in touch.</h2>
          <a href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
