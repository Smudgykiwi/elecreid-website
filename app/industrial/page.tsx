import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Industrial Electrical Melbourne | Factories & Facilities | Elec Reid',
  description: 'Elec Reid delivers industrial electrical for factories, warehouses, and manufacturing facilities across Melbourne. Switchboard upgrades, compliance, high voltage, and maintenance.',
}

export default function IndustrialPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#0134E7] px-6 lg:px-16 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/industrial-warehouse.jpg" alt="Industrial electrical Melbourne" fill className="object-cover opacity-40" />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <p className="text-[9px] tracking-[0.35em] text-white/60 uppercase mb-6">Elec Reid · Industrial &amp; Commercial</p>
          <h1 className="font-austin text-white text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight mb-6 max-w-5xl">
            Built for facilities that cannot afford downtime.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Industrial and commercial electrical work. Compliance, switchboards, access control, security, and maintenance across Melbourne.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: 'A-Grade', label: 'Licensed electricians' },
            { stat: '100%', label: 'Compliant workmanship' },
            { stat: 'Melbourne', label: 'Based and operated' },
            { stat: '24hr', label: 'Emergency response' },
          ].map((item) => (
            <div key={item.stat} className="border-l-2 border-[#0134E7] pl-4">
              <p className="font-austin text-[#0134E7] text-3xl lg:text-4xl">{item.stat}</p>
              <p className="text-white/40 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-6">The standard</p>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl leading-tight mb-8">
              Reliability is not optional.
            </h2>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Industrial and commercial electrical work operates at a different standard. The compliance requirements are stricter. The cost of failure is higher. The documentation matters.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid brings the same standard we apply to every project — properly specified, correctly installed, fully documented — to commercial and industrial environments. A-grade electricians. Compliant workmanship. Systems built to run.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              We are actively growing our industrial client base across Melbourne. Factories, warehouses, manufacturing facilities, and large-scale sites. If your facility needs electrical work done properly, talk to us.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/switchboard.jpg"
              alt="Commercial switchboard installation Melbourne"
              width={900}
              height={675}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#0134E7] px-6 py-3">
              <p className="text-white text-[9px] tracking-[0.2em] uppercase">Dale Street — Commercial Switchboard Upgrade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-4">What we offer</p>
          <h2 className="font-austin text-white text-5xl lg:text-7xl leading-none mb-16">Services.</h2>
          <div className="divide-y divide-white/20">
            {[
              { num: '01', title: 'Electrical Compliance & Safety Audits', desc: 'AS/NZS 3000 compliant installations. Safety audits for factories, warehouses, and large facilities. RCD protection. Emergency lighting to AS/NZS 2293. NCC Section J compliance.' },
              { num: '02', title: 'Industrial Switchboard Design & Installation', desc: 'High-capacity switchboard construction and upgrades for factories, manufacturing facilities, and multi-tenancy industrial buildings. Metered, sub-metered, and fully documented.' },
              { num: '03', title: 'High Voltage & Three-Phase', desc: 'Three-phase power distribution, motor control circuits, and high-capacity electrical infrastructure for industrial plant and equipment.' },
              { num: '04', title: 'Access Control & Security', desc: 'Inner Range Integriti systems for large facilities. Turnstiles, card readers, biometric entry, CCTV, and perimeter security. Monitored response.' },
              { num: '05', title: 'Structured Cabling & Data Infrastructure', desc: 'Cat6A and fibre backbone for industrial facilities. Server room builds, rack design, patch panel installation. Tested and certified.' },
              { num: '06', title: 'Preventative Maintenance Contracts', desc: 'Scheduled inspection, testing, and rapid fault response for industrial facilities. Compliance reporting. Fixed pricing. One point of contact.' },
            ].map((service) => (
              <div key={service.num} className="grid grid-cols-[44px_1fr] gap-6 py-7">
                <span className="font-austin text-white/30 text-xl">{service.num}</span>
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                  <h3 className="font-austin text-white text-xl lg:text-2xl sm:w-72 flex-shrink-0 mb-2 sm:mb-0">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial buildings imagery */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image src="/images/commercial-1.jpg" alt="Commercial building Melbourne" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden aspect-[3/4] mt-8">
              <Image src="/images/commercial-3.jpg" alt="Commercial electrical Melbourne" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image src="/images/commercial-5.jpg" alt="Industrial electrical Melbourne" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-4">Why Elec Reid</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">One accountable team.</h2>
          <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#0134E7]/20">
            {[
              { title: 'A-grade licensed.', body: 'Every electrician on our team carries an A-grade licence. The standard applies to every project regardless of size or complexity.' },
              { title: 'Fully documented.', body: 'Every installation comes with as-built drawings, test results, and compliance certificates. The paperwork is part of the job, not an afterthought.' },
              { title: 'Electrical, data, and technology.', body: 'Switchboards, cabling, access control, security, and commercial AV — under one contract. One point of contact. One responsible party.' },
            ].map((item, i) => (
              <div key={item.title} className={`py-10 ${i > 0 ? 'lg:pl-12' : ''} ${i < 2 ? 'lg:pr-12' : ''}`}>
                <div className="w-8 h-[3px] bg-[#0134E7] mb-6" />
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-4">{item.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="font-austin text-white text-4xl lg:text-6xl leading-tight mb-3">Tell us about your facility.</h2>
            <p className="text-white/60 max-w-lg text-lg">We work on factories, warehouses, manufacturing facilities, and large-scale industrial sites across Melbourne. Let us know what your facility needs.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:+61450342075"
              className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-[#0134E7] text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap font-medium">
              Call +61 450 342 075
            </a>
            <Link href="/build"
              className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
