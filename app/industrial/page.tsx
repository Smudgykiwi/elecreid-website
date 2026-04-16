import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Industrial & Commercial Electrical Melbourne | Elec Reid',
  description: 'Elec Reid Industrial — electrical compliance, switchboard upgrades, access control, security systems, and maintenance for commercial and industrial facilities across Melbourne.',
}

export default function IndustrialPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 pt-36 pb-20 min-h-[60vh] flex flex-col justify-end relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/wiring-clean.jpg" alt="Industrial electrical installation" fill className="object-cover opacity-15" />
        </div>
        <div className="max-w-screen-xl mx-auto w-full relative z-10">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Elec Reid · Industrial</p>
          <h1 className="font-austin text-white text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight mb-6 max-w-5xl">
            Built for facilities that cannot afford downtime.
          </h1>
          <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
            Electrical compliance. Switchboard upgrades. Access control. Security. Maintenance. For commercial and industrial facilities across Melbourne.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl leading-tight">
              Reliability is not optional.
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Industrial and commercial electrical work is not residential work at scale. The stakes are different. The compliance requirements are different. The cost of failure is different.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid brings the same standard we apply to every project — properly specified, correctly installed, fully documented — to commercial and industrial environments. A-grade electricians. Compliant workmanship. Systems that run.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              We are taking on commercial facilities work across Melbourne. If your building needs electrical upgrades, compliance work, or access and security integration, we want to hear about it.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">What we do.</h2>
          <div className="divide-y divide-[#1A1A1A]/10">
            {[
              { num: '01', title: 'Electrical compliance & safety upgrades', desc: 'AS/NZS 3000 compliant installations. Safety audits. Switchboard upgrades. RCD protection. Emergency lighting to AS/NZS 2293.' },
              { num: '02', title: 'Switchboard design & installation', desc: 'New switchboard construction and upgrades for commercial and industrial facilities. NCC compliant. Metered and sub-metered configurations.' },
              { num: '03', title: 'Access control', desc: 'Inner Range Inception and Integriti systems for commercial facilities. Card readers, biometric entry, door controllers, and remote management.' },
              { num: '04', title: 'Security systems', desc: 'Alarm systems, CCTV, and integrated security for commercial buildings. Monitored response. Integration with building management systems.' },
              { num: '05', title: 'Structured cabling & data', desc: 'Cat6A and fibre infrastructure for commercial buildings. Rack design, patch panel installation, and network backbone.' },
              { num: '06', title: 'Maintenance contracts', desc: 'Ongoing electrical maintenance for commercial facilities. Scheduled inspection, testing, and rapid fault response.' },
            ].map((item) => (
              <div key={item.num} className="grid grid-cols-[44px_1fr] gap-6 py-8">
                <span className="font-austin text-[#1A1A1A]/20 text-xl">{item.num}</span>
                <div>
                  <h3 className="font-austin text-[#1A1A1A] text-xl lg:text-2xl mb-2">{item.title}</h3>
                  <p className="text-[#1A1A1A]/55 leading-relaxed">{item.desc}</p>
                </div>
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
              { title: 'A-grade licensed.', body: 'Every electrician on our team is A-grade licensed. The standard applies to every project regardless of size.' },
              { title: 'Fully documented.', body: 'Every installation is documented — as-built drawings, test results, compliance certificates. The paperwork is part of the job.' },
              { title: 'One accountable team.', body: 'Electrical, data, access, and security. We bring it all under one contract. One point of contact. One responsible party.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-8">
                <h3 className="font-austin text-white text-xl mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl leading-tight mb-3">Tell us about your facility.</h2>
            <p className="text-[#1A1A1A]/50 max-w-lg">We are taking on commercial and industrial electrical work across Melbourne. Let us know what you need.</p>
          </div>
          <a href="tel:+61450342075" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Call +61 450 342 075
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
