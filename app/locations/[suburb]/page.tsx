import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface Project {
  name: string
  description: string
  hero: string
  images: string[]
  tags: string[]
}

interface SuburbData {
  name: string
  character: string[]
  project?: Project
  seoTitle: string
  seoDescription: string
}

const suburbs: Record<string, SuburbData> = {
  torquay: {
    name: 'Torquay',
    seoTitle: 'Smart Home Electrician Torquay | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Torquay. Apple HomeKit, Unifi networking, KNX lighting. Completed projects on the Surf Coast.',
    character: [
      'Torquay is changing. What was a surf town is now a destination for considered residential architecture. New builds on the Surf Coast are being designed with precision, and the technology inside them is following suit.',
      'Elec Reid has completed full smart home installations in Torquay for clients who understand that the brief does not end with the architect. The network, the lighting, the audio, the automation — all of it matters. All of it needs to work.'
    ],
    project: {
      name: 'Haven Court',
      description: 'Full smart home integration across a striking architectural new build. KNX lighting, Unifi networking, multi-room audio, climate control, and automated louvres.',
      hero: '/images/haven-1.jpg',
      images: ['/images/haven-6.jpg', '/images/haven-dsc05589.jpg'],
      tags: ['KNX', 'Unifi', 'Multi-room Audio', 'Climate Control', 'Automated Louvres']
    }
  },
  brighton: {
    name: 'Brighton',
    seoTitle: 'Smart Home Electrician Brighton | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Brighton. Apple HomeKit, Unifi, Sonos. Completed projects in Melbourne\'s premier bayside suburb.',
    character: [
      'Brighton is one of Melbourne\'s most established and demanding markets. The homes are substantial. The expectations are high. Clients in Brighton are not looking for the cheapest option — they are looking for the right one.',
      'Elec Reid has completed work in Brighton that covers the full scope: Apple HomeKit automation, enterprise networking, Sonos multi-room audio, pool automation, and outdoor AV. Systems designed to work properly and look like they belong.'
    ],
    project: {
      name: 'McKimm Residence',
      description: 'Complete residential smart home installation. Apple HomeKit automation, Unifi networking, Lutron lighting control, Sonos multi-room audio, pool automation, and outdoor AV.',
      hero: '/images/mckimm-5.jpg',
      images: ['/images/mckimm-3.jpg', '/images/mckimm-1.jpg'],
      tags: ['Apple HomeKit', 'Unifi', 'Lutron', 'Sonos', 'Pool Automation']
    }
  },
  'st-kilda': {
    name: 'St Kilda',
    seoTitle: 'Smart Home Electrician St Kilda | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in St Kilda. Rooftop AV, lighting automation, Unifi networking. Completed projects in inner Melbourne.',
    character: [
      'St Kilda is dense, creative, and demanding. Apartments, heritage conversions, rooftop terraces. The spaces are compact and the technology needs to work hard without showing.',
      'We have completed outdoor entertainment installations in St Kilda that integrate lighting automation, multi-zone audio, and smart control for spaces that host people regularly. Technology built for use, not just demonstration.'
    ],
    project: {
      name: 'Fitzroy Street Rooftop',
      description: 'Outdoor entertainment space with integrated lighting automation, multi-zone audio, and smart control for a rooftop terrace with city views.',
      hero: '/images/stkilda-1.jpg',
      images: ['/images/stkilda-2.jpg'],
      tags: ['Lighting Automation', 'Multi-zone Audio', 'Outdoor AV', 'Smart Control']
    }
  },
  'malvern-east': {
    name: 'Malvern East',
    seoTitle: 'Smart Home Electrician Malvern East | Home Cinema Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home and AV systems in Malvern East. Home cinema, Apple HomeKit, Unifi. Completed projects in Melbourne\'s inner east.',
    character: [
      'Malvern East is a suburb of large blocks and generous homes. Significant renovation activity. Homeowners who are investing in long-term upgrades and want systems built to last.',
      'We have completed cinema and AV installations in Malvern East for clients who want proper performance — calibrated audio, integrated control, and a system that does not require a manual to operate.'
    ],
    project: {
      name: 'Manning Road Residence',
      description: 'Residential home cinema installation with integrated AV and smart home control.',
      hero: '/images/malvern-cinema-1.jpg',
      images: ['/images/malvern-2.jpg'],
      tags: ['Home Cinema', 'AV Integration', 'Smart Control']
    }
  },
  hawthorn: {
    name: 'Hawthorn',
    seoTitle: 'Smart Home Electrician Hawthorn | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Hawthorn. Apple HomeKit, Unifi networking, AV. Servicing Melbourne\'s inner east.',
    character: [
      'Hawthorn carries one of Melbourne\'s finest architectural stocks. Victorian and Edwardian homes alongside carefully executed contemporary builds. The suburb rewards integration that respects what is already there.',
      'We work in Hawthorn on projects that range from whole-home smart home installations in period properties to AV and networking upgrades in newly built homes. The brief is always the same: do it properly.'
    ]
  },
  camberwell: {
    name: 'Camberwell',
    seoTitle: 'Smart Home Electrician Camberwell | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Camberwell. Apple HomeKit, Unifi, Sonos. Servicing Melbourne\'s most sought-after family suburb.',
    character: [
      'Camberwell is one of Melbourne\'s most sought-after family suburbs. Large blocks, period homes, substantial renovations. Homeowners here are making long-term decisions.',
      'We install systems in Camberwell that are built to last. Not the platform with the most features right now — the platform that will still be working properly in ten years. Apple HomeKit, Unifi infrastructure, and hardware specified for permanence.'
    ]
  },
  toorak: {
    name: 'Toorak',
    seoTitle: 'Smart Home Electrician Toorak | Basalte & Control4 Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Toorak. Basalte, Control4, Ekinex, Apple HomeKit. Melbourne\'s most prestigious suburb.',
    character: [
      'Toorak is Melbourne\'s most prestigious suburb. Architectural ambition matched by budget. Clients who specify Basalte, Ekinex, and Control4 as standard. Where the brochure becomes the brief.',
      'We work in Toorak on projects where every surface is a decision and every system is expected to perform at the highest level. The switches need to look right on the wall. The automation needs to work without being managed. The network needs to handle everything without hesitation.'
    ]
  },
  'south-yarra': {
    name: 'South Yarra',
    seoTitle: 'Smart Home Electrician South Yarra | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in South Yarra. Apple HomeKit, Unifi, Sonos. Sophisticated inner-city smart home installation.',
    character: [
      'South Yarra is sophisticated inner-city living. Apartments, terraces, and contemporary builds. Smart home technology integrated from the ground up or retrofitted with precision.',
      'We install systems in South Yarra that work in compact, well-designed spaces. Apple HomeKit for platforms that disappear. Unifi for networking that handles dense device environments. Sonos for audio that sounds right in every room.'
    ]
  },
  kew: {
    name: 'Kew',
    seoTitle: 'Smart Home Electrician Kew | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Kew. Apple HomeKit, Unifi, Home Assistant. Servicing Melbourne\'s leafy inner east.',
    character: [
      'Kew is a leafy eastern suburb with substantial period homes and long-term owner-occupiers undertaking whole-home renovations. Technology specified to last.',
      'We work in Kew on projects that treat smart home technology as infrastructure — not a feature to add and remove, but a system to design properly from the start. Wired correctly. Documented. Backed by the team who installed it.'
    ]
  },
  armadale: {
    name: 'Armadale',
    seoTitle: 'Smart Home Electrician Armadale | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Armadale. Apple HomeKit, Basalte, Unifi. Heritage homes in Melbourne\'s inner east.',
    character: [
      'Armadale is a boutique inner-east suburb with heritage streetscapes and carefully renovated interiors. Attention to detail in every surface and system.',
      'We install systems in Armadale for homeowners who are as particular about their switches as they are about their joinery. Basalte and Ekinex for the hardware that meets your hand. Apple HomeKit and Unifi for the infrastructure behind the walls.'
    ]
  },
  richmond: {
    name: 'Richmond',
    seoTitle: 'Smart Home Electrician Richmond | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Richmond. Apple HomeKit, Unifi, Sonos. Inner-city smart home installation Melbourne.',
    character: [
      'Richmond is an inner-city suburb in significant transition. Terrace homes, warehouse conversions, and new apartment developments sit alongside each other. Smart home technology at every scale.',
      'We work in Richmond on installations that range from single-room AV upgrades to whole-home smart home builds. Apple HomeKit for the platform. Unifi for the network. Sonos for the audio. Systems that work regardless of the architecture they sit inside.'
    ]
  },
  prahran: {
    name: 'Prahran',
    seoTitle: 'Smart Home Electrician Prahran | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Prahran. Apple HomeKit, Unifi. Inner-city apartment and terrace smart home installation.',
    character: [
      'Prahran is dense inner-city Melbourne. Apartments, terraces, and converted commercial buildings. Technology that makes compact spaces feel larger and more considered.',
      'We install systems in Prahran that respect the constraints of inner-city living. Wireless where cable is not possible. Ceiling-mounted where wall space is at a premium. Apple HomeKit for the platform that requires the least infrastructure and delivers the most reliability.'
    ]
  },
  fitzroy: {
    name: 'Fitzroy',
    seoTitle: 'Smart Home Electrician Fitzroy | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Fitzroy. Apple HomeKit, Unifi, Sonos. Creative inner-north Melbourne smart home installation.',
    character: [
      'Fitzroy is a creative inner-north suburb. Heritage terrace homes alongside architect-designed new builds. Clients who care about design as much as functionality.',
      'We work in Fitzroy on projects where the technology needs to fit the aesthetic as much as the brief. The right switches. The right platform. Audio that sounds right in a terrace with high ceilings and polished concrete floors.'
    ]
  },
  carlton: {
    name: 'Carlton',
    seoTitle: 'Smart Home Electrician Carlton | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Carlton. Apple HomeKit, Unifi. Victorian terrace smart home retrofits in inner Melbourne.',
    character: [
      'Carlton carries significant Victorian-era housing stock alongside newer university and professional accommodation. Smart home retrofits that respect the architecture.',
      'We install systems in Carlton that work in period properties without compromising what makes them worth living in. Apple HomeKit for reliability. Unifi for enterprise-grade Wi-Fi in buildings that were not designed for it. Done properly.'
    ]
  },
  'glen-waverley': {
    name: 'Glen Waverley',
    seoTitle: 'Smart Home Electrician Glen Waverley | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Glen Waverley. Apple HomeKit, Unifi, Sonos. Eastern Melbourne smart home installation.',
    character: [
      'Glen Waverley is an established outer-eastern suburb with a strong family demographic. New builds and substantial renovations. Smart home technology is becoming the standard expectation.',
      'We work in Glen Waverley on projects from new builds wired for full automation to existing homes being upgraded room by room. Apple HomeKit, Unifi infrastructure, and Sonos audio. Systems that the whole family can use without instruction.'
    ]
  },
  doncaster: {
    name: 'Doncaster',
    seoTitle: 'Smart Home Electrician Doncaster | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Doncaster. Apple HomeKit, Unifi networking. Eastern Melbourne family home smart home installation.',
    character: [
      'Doncaster is an eastern suburb with large blocks and family homes. A significant renovation market. Apple HomeKit and Unifi are the standard specification for the homes we work on here.',
      'We install systems in Doncaster for families who want a smart home that actually works — not a collection of apps that each do one thing. One platform. One network. Properly installed and documented at handover.'
    ]
  },
  eltham: {
    name: 'Eltham',
    seoTitle: 'Smart Home Electrician Eltham | Home Assistant Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Eltham. Home Assistant, Apple HomeKit, Unifi. Architect-designed homes in Melbourne\'s outer north.',
    character: [
      'Eltham is semi-rural outer-north Melbourne. Architect-designed homes on large blocks. Clients who want Home Assistant and off-grid integration alongside premium hardware.',
      'We work in Eltham on installations that take full advantage of the platform\'s depth. Energy monitoring integrated with solar. Irrigation tied to weather data. Home Assistant running locally on dedicated hardware, documented and handed over properly.'
    ]
  },
  balwyn: {
    name: 'Balwyn',
    seoTitle: 'Smart Home Electrician Balwyn | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Balwyn. Apple HomeKit, Unifi, Basalte. Prestigious eastern Melbourne smart home installation.',
    character: [
      'Balwyn is a prestigious eastern suburb with large family homes and established gardens. Long-term owners investing in whole-home smart technology upgrades.',
      'We install systems in Balwyn for homeowners who are making a long-term decision. Basalte for the hardware that will still look right in twenty years. Apple HomeKit for the platform that does not require a subscription to keep working. Unifi for the network that handles everything.'
    ]
  },
  canterbury: {
    name: 'Canterbury',
    seoTitle: 'Smart Home Electrician Canterbury | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Canterbury. Apple HomeKit, Basalte, Unifi. Leafy eastern Melbourne prestige smart home installation.',
    character: [
      'Canterbury is a quiet, leafy eastern suburb with period homes on generous blocks. Technology specified for permanence — not the cheapest option, the right one.',
      'We work in Canterbury on installations where the brief is built around longevity. Hardware that still looks correct in a decade. Platforms that do not get discontinued. Systems that run without intervention. Canterbury homeowners are not experimenting — they are deciding.'
    ]
  },
  'mont-albert': {
    name: 'Mont Albert',
    seoTitle: 'Smart Home Electrician Mont Albert | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Mont Albert. Apple HomeKit, Unifi. Federation and Edwardian home smart home integration.',
    character: [
      'Mont Albert is a heritage suburb east of Melbourne. Federation and Edwardian homes on quiet streets. Careful technology integration that respects the architecture.',
      'We install systems in Mont Albert that work with the character of the home rather than against it. Wireless where the walls should not be touched. Recessed switches where the joinery allows. Apple HomeKit for a platform that requires no visible infrastructure to function.'
    ]
  },
  'box-hill': {
    name: 'Box Hill',
    seoTitle: 'Smart Home Electrician Box Hill | Apple HomeKit Installation | Elec Reid Melbourne',
    seoDescription: 'Elec Reid installs smart home systems in Box Hill. Apple HomeKit, Unifi. Diverse inner-eastern Melbourne smart home installation.',
    character: [
      'Box Hill is a diverse inner-eastern suburb. Significant new apartment development alongside established housing. Smart home technology across the full spectrum of home types and budgets.',
      'We work in Box Hill on installations that range from apartment AV upgrades to full smart home builds in established family homes. The platform changes. The standard does not.'
    ]
  }
}

const services = [
  { title: 'Smart Home Automation', desc: 'Apple HomeKit, Home Assistant, Control4, Basalte Home' },
  { title: 'Residential Electrical', desc: 'A-grade licensed electricians' },
  { title: 'Networking', desc: 'Unifi enterprise Wi-Fi, managed switching, PoE' },
  { title: 'Audio Visual', desc: 'Sonos, multi-room audio, home cinema' },
  { title: 'Security Cameras', desc: 'UniFi Protect, local recording, no subscription' },
  { title: 'Security Systems', desc: 'Inner Range Inception, alarm monitoring' },
  { title: 'Lighting Design', desc: 'Scenes, dimming, circadian scheduling' },
  { title: 'Motorised Blinds', desc: 'Somfy, Lutron, integrated automation' },
  { title: 'Access Control', desc: 'Intercoms, smart locks, gate automation' },
]

export async function generateStaticParams() {
  return Object.keys(suburbs).map((suburb) => ({ suburb }))
}

export async function generateMetadata({ params }: { params: Promise<{ suburb: string }> }): Promise<Metadata> {
  const { suburb } = await params
  const data = suburbs[suburb]
  if (!data) return {}
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

export default async function SuburbPage({ params }: { params: Promise<{ suburb: string }> }) {
  const { suburb } = await params
  const data = suburbs[suburb]
  if (!data) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elec Reid',
    description: `Smart home and electrical installation in ${data.name}, Melbourne`,
    url: 'https://elecreid.com',
    telephone: '+61450342075',
    email: 'enquiries@elecreid.com',
    address: { '@type': 'PostalAddress', addressLocality: data.name, addressRegion: 'VIC', addressCountry: 'AU' },
    areaServed: data.name,
    serviceType: 'Smart home installation and residential electrical',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-16 pt-36 pb-20 relative overflow-hidden">
        {data.project && (
          <div className="absolute inset-0">
            <Image src={data.project.hero} alt={data.name} fill className="object-cover opacity-20" priority />
          </div>
        )}
        <div className="max-w-screen-xl mx-auto relative z-10">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Smart Home &amp; Electrical</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            {data.name}
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed">
            Elec Reid installs smart home systems, AV, and electrical in {data.name} and across Melbourne.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl leading-tight">
              Elec Reid in {data.name}.
            </h2>
          </div>
          <div className="lg:pt-4 space-y-5">
            {data.character.map((para, i) => (
              <p key={i} className="text-[#1A1A1A]/60 text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Project showcase */}
      {data.project && (
        <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">Completed in {data.name}</p>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">{data.project.name}</h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div className="overflow-hidden mb-4">
                  <Image src={data.project.hero} alt={data.project.name} width={900} height={675}
                    className="w-full aspect-[4/3] object-cover" />
                </div>
                {data.project.images.length > 0 && (
                  <div className={`grid gap-3 ${data.project.images.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {data.project.images.map((img, i) => (
                      <Image key={i} src={img} alt={`${data.project!.name} ${i + 2}`} width={450} height={338}
                        className="w-full aspect-[4/3] object-cover" />
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:pt-4">
                <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-8">{data.project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {data.project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] tracking-[0.15em] border border-[#1A1A1A]/15 px-4 py-2 text-[#1A1A1A]/40 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">Services in {data.name}</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">What we offer.</h2>
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/10">
            {services.map((service, i) => (
              <div key={service.title} className={`py-8 ${i % 3 !== 0 ? 'md:pl-10' : ''} ${i % 3 !== 2 ? 'md:pr-10' : ''}`}>
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-2">{service.title}</h3>
                <p className="text-[#1A1A1A]/50 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight mb-3">
              Planning a project in {data.name}?
            </h2>
            <p className="text-white/40 max-w-lg">Tell us about your home. We will design the right system for it.</p>
          </div>
          <a href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
