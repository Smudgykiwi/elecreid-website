import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Home Theatre Installation Melbourne | Residential AV Installer | Elec Reid',
  description:
    'Home theatre installation Melbourne. Elec Reid designs and installs residential AV, cinema rooms, multi-room audio, UniFi networking, Apple Home and Control4 integration.',
}

const faqs = [
  {
    question: 'Who installs home theatre systems in Melbourne for architectural homes?',
    answer:
      'Elec Reid designs and installs home theatre systems for Melbourne homeowners, architects and builders working on premium residential projects. We handle electrical, structured cabling, networking, AV equipment, control, commissioning and handover as one accountable team.',
  },
  {
    question: 'When should a home theatre installer join the project?',
    answer:
      'The best time is before the lighting plan, joinery and ceiling details are finalised. Speaker locations, projector throw, rack position, ventilation, acoustic treatment, cable paths and control wiring all affect the finished room.',
  },
  {
    question: 'Can a home theatre integrate with Apple Home, Control4 or Home Assistant?',
    answer:
      'Yes. We can integrate cinema scenes with Apple Home, Control4, Home Assistant, KNX lighting, UniFi networking and security where the project calls for it. The aim is simple control, reliable switching and one clear handover pack.',
  },
  {
    question: 'Do you install multi-room audio as well as cinema rooms?',
    answer:
      'Yes. We install dedicated cinema rooms, media rooms, in-ceiling speakers, outdoor audio zones and rack-based AV systems. We specify platforms such as Sonos, WiiM, Control4 and premium speaker systems around the room, the budget and the way the family listens.',
  },
]

const scope = [
  'Dedicated cinema and media room design',
  'Speaker layout, cabling and rack planning',
  'Projector, screen, TV and display installation',
  'Surround sound, Dolby Atmos and subwoofer integration',
  'Multi-room and outdoor audio zones',
  'Apple Home, Control4, Home Assistant and KNX scene integration',
  'UniFi network design for streaming, control and support',
  'Handover documentation for the client, builder and architect',
]

export default function HomeTheatreInstallationMelbournePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home theatre installation Melbourne',
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
      'Home theatre installation',
      'Residential AV installation',
      'Home cinema design',
      'Multi-room audio installation',
      'Smart home integration',
    ],
    url: 'https://elecreid.com/services/home-theatre-installation-melbourne',
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
        name: 'Home Theatre Installation Melbourne',
        item: 'https://elecreid.com/services/home-theatre-installation-melbourne',
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
          name: 'Home Theatre Installation Melbourne',
          url: 'https://elecreid.com/services/home-theatre-installation-melbourne',
        },
      ]} />

      <main className="bg-[#F8F4F1] text-[#1A1A1A]">
        <section className="px-6 lg:px-16 pt-36 lg:pt-44 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-10">
              Melbourne · Home Theatre · Residential AV
            </p>
            <h1 className="font-austin text-[#1A1A1A] leading-[0.9] tracking-tight mb-10 text-[clamp(56px,9vw,132px)]">
              Home theatre,<br />
              <em>properly built.</em>
            </h1>
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 border-t border-[#1A1A1A]/10 pt-10">
              <p className="text-[#1A1A1A]/60 text-xl leading-relaxed max-w-2xl">
                For Melbourne homeowners, architects and builders who want cinema, audio and control designed before the plaster closes. Elec Reid brings electrical, AV, networking and smart home control into one clear plan.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors">
                  Start a plan →
                </Link>
                <Link href="/blog/knx-residential-melbourne-field-guide" className="inline-flex items-center justify-center border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/60 text-[#1A1A1A]/60 hover:text-[#1A1A1A] text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors">
                  Read the KNX guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Who it is for</p>
              <h2 className="font-austin text-3xl lg:text-5xl leading-tight">Homes where the room matters.</h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                This page is for homeowners building a dedicated cinema, a media room, a living room with hidden AV, or whole-home audio that needs to feel effortless. It is also for architects and builders who need the technical plan early enough to protect the finish.
              </p>
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                The problem is rarely the equipment list. It is coordination. Speakers, screens, lighting, acoustic treatment, network, ventilation, rack space and control all collide if they are planned late. We solve that before site pressure turns into compromise.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-14">
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">The solution</p>
              <h2 className="font-austin text-4xl lg:text-6xl leading-tight max-w-3xl">
                One plan for sound, picture, network and control.
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
              <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-6">Platform integration</p>
              <h2 className="font-austin text-white text-4xl lg:text-6xl leading-tight">
                Cinema that behaves like part of the home.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                ['Control', 'Scenes can set lighting, blinds, projector, screen, audio and source selection from one command. Apple Home, Control4 or Home Assistant can sit at the front, depending on the project.'],
                ['Network', 'Streaming, control and support depend on a stable network. We design UniFi switching, Wi-Fi, VLANs and PoE before the room is commissioned.'],
                ['Lighting', 'Cinema lighting needs dimming, scene recall and safe path lighting. KNX, Philips Dynalite, C-Bus or Lutron can all be integrated when the system is planned properly.'],
                ['Handover', 'The finished system includes rack labels, cable schedules, scene notes, network details and client training. The room should be enjoyable, not mysterious.'],
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
                Home theatre installation in Melbourne.
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
              Bring us in before the room is locked.
            </h2>
            <p className="text-[#1A1A1A]/60 leading-relaxed max-w-2xl mx-auto mb-10">
              Send the plans, the room brief and the stage of the build. We will turn it into a practical AV and control plan for the builder, architect and client.
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
