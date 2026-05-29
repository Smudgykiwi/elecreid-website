import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'UniFi Home Network Melbourne | Residential Wi-Fi Installer | Elec Reid',
  description:
    'UniFi home network Melbourne. Elec Reid designs and installs residential Wi-Fi, structured cabling, PoE switching, rack equipment and smart home network infrastructure.',
}

const faqs = [
  {
    question: 'Who installs UniFi home networks in Melbourne?',
    answer:
      'Elec Reid designs and installs UniFi home networks for Melbourne homeowners, architects and builders working on premium residential projects. We handle structured cabling, rack planning, PoE switching, access points, Wi-Fi coverage, VLANs, commissioning and handover.',
  },
  {
    question: 'When should a residential network installer join a new build or renovation?',
    answer:
      'The best time is before plaster, joinery and ceiling details are locked. Access point locations, data outlets, rack ventilation, CCTV, intercom, AV and smart home control all depend on the network plan being resolved early.',
  },
  {
    question: 'Is UniFi suitable for a large Melbourne home?',
    answer:
      'Yes. UniFi is a strong fit for large homes when it is designed properly. The result depends on cable paths, access point placement, PoE switching, router capacity, interference, construction materials and ongoing support settings.',
  },
  {
    question: 'Can UniFi support Apple Home, Control4, KNX, CCTV and intercom systems?',
    answer:
      'Yes. We use UniFi as the network foundation beneath Apple Home, Control4, Home Assistant, KNX, CCTV, intercom, access control, audio and streaming systems. The aim is reliable control, clean separation and a handover pack the owner can understand.',
  },
]

const scope = [
  'Whole-home Wi-Fi coverage planning',
  'UniFi gateway, switching and access point installation',
  'Structured cabling, patch panels and rack layouts',
  'PoE planning for cameras, intercoms and access points',
  'Network support for Apple Home, Control4, Home Assistant and KNX',
  'VLAN planning for smart home, guest, CCTV and work-from-home traffic',
  'Wi-Fi testing, labelling and documentation at handover',
  'Support-ready network records for the client, builder and architect',
]

export default function UniFiHomeNetworkMelbournePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'UniFi home network Melbourne',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Elec Reid',
      url: 'https://elecreid.com',
      telephone: '+61450342075',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Melbourne' },
      { '@type': 'AdministrativeArea', name: 'Mornington Peninsula' },
    ],
    serviceType: [
      'UniFi home network installation',
      'Residential Wi-Fi installation',
      'Structured cabling',
      'Smart home network design',
      'PoE network installation',
    ],
    url: 'https://elecreid.com/services/unifi-home-network-melbourne',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elecreid.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://elecreid.com/services' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'UniFi Home Network Melbourne',
        item: 'https://elecreid.com/services/unifi-home-network-melbourne',
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Nav />
      <Breadcrumbs items={[
        { name: 'Home', url: 'https://elecreid.com' },
        { name: 'Services', url: 'https://elecreid.com/services' },
        {
          name: 'UniFi Home Network Melbourne',
          url: 'https://elecreid.com/services/unifi-home-network-melbourne',
        },
      ]} />

      <main className="bg-[#F8F4F1] text-[#1A1A1A]">
        <section className="px-6 lg:px-16 pt-36 lg:pt-44 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-10">
              Melbourne · UniFi · Residential Wi-Fi
            </p>
            <h1 className="font-austin text-[#1A1A1A] leading-[0.9] tracking-tight mb-10 text-[clamp(56px,9vw,132px)]">
              Home networks,<br />
              <em>built properly.</em>
            </h1>
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 border-t border-[#1A1A1A]/10 pt-10">
              <p className="text-[#1A1A1A]/60 text-xl leading-relaxed max-w-2xl">
                For Melbourne homeowners, architects and builders who need Wi-Fi, cabling and smart home infrastructure resolved before the home is finished. Elec Reid designs UniFi networks that support automation, AV, security and everyday living.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors">
                  Start a plan →
                </Link>
                <Link href="/brands/unifi" className="inline-flex items-center justify-center border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/60 text-[#1A1A1A]/60 hover:text-[#1A1A1A] text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors">
                  Read about UniFi
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Who it is for</p>
              <h2 className="font-austin text-3xl lg:text-5xl leading-tight">Homes where the network disappears.</h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                This page is for owners building a large home, renovating a finished property, or adding smart home systems that need a stable network underneath them. It is also for architects and builders who need cabling and rack decisions made before the ceiling closes.
              </p>
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                The problem is not just poor Wi-Fi. It is late planning. Access points, cameras, intercoms, TVs, speakers, control processors and work-from-home spaces all compete for the same network if nobody owns the design.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-14">
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">The solution</p>
              <h2 className="font-austin text-4xl lg:text-6xl leading-tight max-w-3xl">
                One plan for cabling, Wi-Fi, PoE and support.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#16253F]/10">
              {scope.map((item) => (
                <div key={item} className="bg-[#F8F4F1] p-7 min-h-[140px] flex items-end">
                  <p className="text-[#1A1A1A]/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-6">Smart home foundation</p>
              <h2 className="font-austin text-white text-4xl lg:text-6xl leading-tight">
                The network carries the whole home.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                ['Coverage', 'Access points are placed for the building, not just the floor plan. Materials, ceiling heights, outdoor areas and interference all matter.'],
                ['Power', 'PoE switching keeps cameras, intercoms and access points cleanly powered from the rack. Fewer plug packs. Fewer weak points.'],
                ['Separation', 'Smart home, guest, CCTV and work traffic can be separated where the project calls for it. The owner gets reliability without having to think like an IT manager.'],
                ['Handover', 'The finished network includes labels, rack notes, device records, Wi-Fi details and support information. The system should be maintainable after we leave.'],
              ].map(([heading, body]) => (
                <div key={heading} className="border-t border-white/10 pt-6">
                  <h3 className="font-austin text-white text-2xl mb-4">{heading}</h3>
                  <p className="text-white/50 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Questions</p>
              <h2 className="font-austin text-4xl lg:text-6xl leading-tight">
                UniFi home networks in Melbourne.
              </h2>
            </div>
            <div className="divide-y divide-[#1A1A1A]/10">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-8 first:pt-0">
                  <h3 className="font-austin text-2xl mb-4">{faq.question}</h3>
                  <p className="text-[#1A1A1A]/60 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Next step</p>
            <h2 className="font-austin text-4xl lg:text-6xl leading-tight mb-8">
              Bring us in before the cable schedule is locked.
            </h2>
            <p className="text-[#1A1A1A]/60 leading-relaxed max-w-2xl mx-auto mb-10">
              Send the plans, the technology brief and the stage of the build. We will turn it into a practical network plan for the builder, architect and client.
            </p>
            <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors">
              Build your home →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
