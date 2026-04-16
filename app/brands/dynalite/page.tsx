import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Philips Dynalite Installation Melbourne | Commercial Lighting Control | Elec Reid',
  description: 'Elec Reid installs Philips Dynalite lighting control systems for commercial buildings across Melbourne offices, hotels, retail, and multi-tenancy developments.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne Philips Dynalite commercial lighting control specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Philips Dynalite lighting control installation',
}

export default function DynalitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Commercial · Building Management</p>
          <h1 className="font-austin text-white text-[clamp(48px,8vw,120px)] leading-[0.88] tracking-tight mb-6">
            Philips Dynalite
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Commercial lighting control. Engineered for scale.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Lighting control built for commercial buildings.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Philips Dynalite now part of Signify, the world&apos;s largest lighting company is the enterprise-grade lighting control platform for commercial buildings. Hotels. Office towers. Retail centres. Universities. Government facilities. Any space where lighting control needs to operate at scale, integrate with a BMS, and keep running for decades.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Dynalite gives building operators full scene management, energy monitoring, occupancy-based control, and daylight harvesting all from a single platform that integrates with BACnet, DALI, and KNX. Elec Reid programs and installs Dynalite systems for commercial clients across Melbourne.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              It is not a consumer product. It is not a small-scale residential system. It is what commercial buildings use when lighting control needs to be right.
            </p>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">What Dynalite does.</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              { title: 'Scene management', body: 'Preset lighting scenes for every space and every time of day. Board room in presentation mode. Restaurant at full service. Hotel lobby at night. One command changes everything.' },
              { title: 'Energy monitoring', body: 'Real-time energy consumption data per zone, per floor, per building. Occupancy-based dimming reduces energy use automatically when spaces are empty. Measurable savings.' },
              { title: 'Daylight harvesting', body: 'Photosensors adjust artificial lighting levels based on available natural light. Consistent illuminance maintained automatically. Lower energy bills every day.' },
              { title: 'BMS integration', body: 'Full integration with BACnet, DALI, and KNX. Dynalite talks to your building management system. Lighting responds to HVAC, access control, and occupancy data from across the building.' },
              { title: 'Emergency lighting', body: 'AS/NZS 2293-compliant emergency lighting testing and monitoring. Automated testing schedules. Faults reported immediately. Compliance managed without manual testing.' },
              { title: 'EnvisionProject commissioning', body: 'Dynalite\'s System Builder software enables fast, repeatable commissioning across large sites. Configure once. Replicate across floors, wings, and buildings.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">Where we install it.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Office towers & commercial buildings.', body: 'Floor-by-floor zone control, occupancy sensing, energy reporting, and BMS integration. Meets NCC Section J compliance requirements.' },
              { title: 'Hotels & hospitality.', body: 'Guest room control, lobby scenes, function room presets, and back-of-house management. All on one platform, all managed centrally.' },
              { title: 'Retail & mixed-use.', body: 'Brand-consistent lighting scenes across multiple tenancies. After-hours schedules. Automatic adjustment for opening hours. Centralised management for multiple sites.' },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-12">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Certified Dynalite programmers.', body: 'Dynalite programming requires EnvisionProject expertise and commercial scale experience. We have both.' },
              { title: 'BMS integration specialists.', body: 'We integrate Dynalite with BACnet, DALI, KNX, and third-party building management systems. The lighting system talks to the building.' },
              { title: 'From specification to handover.', body: 'System design, supply, installation, programming, commissioning, and documentation. One accountable team.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-8">
                <h3 className="font-austin text-white text-xl mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Related brands</p>
          <div className="flex flex-wrap gap-3">
            {[['KNX', '/brands/knx'], ['Q-SYS by QSC', '/brands/qsc'], ['Unifi', '/brands/unifi']].map(([name, href]) => (
              <Link key={href} href={href} className="border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-colors">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Specify your commercial lighting control.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
