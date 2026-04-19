import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Industrial Electrical Melbourne | Compliance, Maintenance & Upgrades | Elec Reid',
  description: 'Elec Reid delivers industrial electrical services across Melbourne. Compliance, test and tag, switchboard upgrades, lighting, and maintenance for manufacturing, logistics, and industrial facilities.',
}

export default function IndustrialPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#16253F] px-6 lg:px-16 pt-36 pb-28 overflow-hidden min-h-[70vh] flex flex-col justify-end">
        <div className="absolute inset-0">
          <Image src="/images/industrial-warehouse.jpg" alt="Industrial electrical Melbourne" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16253F] via-[#16253F]/50 to-transparent" />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10 w-full">
          <p className="text-[9px] tracking-[0.35em] text-white/40 uppercase mb-6">Elec Reid · Industrial</p>
          <h1 className="font-austin text-white text-[clamp(56px,9vw,130px)] leading-[0.88] tracking-tight mb-6 max-w-5xl">
            Built for facilities that cannot afford downtime.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Industrial electrical for manufacturing, logistics, and processing facilities across Melbourne. Compliance, maintenance, upgrades, and testing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: 'A-Grade', label: 'Licensed electricians' },
            { stat: '100%', label: 'Compliant workmanship' },
            { stat: 'AS/NZS', label: 'Standards compliant' },
            { stat: 'Melbourne', label: 'Based and operated' },
          ].map((item) => (
            <div key={item.stat} className="border-l-2 border-white/30 pl-4">
              <p className="font-austin text-white text-3xl lg:text-4xl">{item.stat}</p>
              <p className="text-white/50 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">The standard</p>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl leading-tight mb-8">
              Reliability is not optional.
            </h2>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Industrial electrical work operates at a different standard. The plant cannot stop. The compliance requirements are stricter. The documentation is audited. The cost of a failure is measured in production hours, not inconvenience.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid delivers industrial electrical work for manufacturing facilities, logistics operations, and processing plants across Melbourne. A-grade licensed. AS/NZS 3000 compliant. Documented to standard.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              We bring the same pressure we learned in live sound production to industrial work: everything must be right the first time, because there is no second chance when the plant is running.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/switchboard.jpg"
              alt="Industrial switchboard installation Melbourne"
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

      {/* Clients */}
      <section className="bg-white px-6 lg:px-16 py-16">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-10">Industrial clients we work with</p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-[#1A1A1A]/10 p-8">
              <h3 className="font-austin text-[#1A1A1A] text-2xl mb-3">Sulzer</h3>
              <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-4">Pump Manufacturing · Melbourne Facility</p>
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                Ongoing electrical services at Sulzer's Melbourne manufacturing facility. Work completed includes facility lighting upgrades, electrical compliance works, test and tag programs, and switchboard upgrades. Sulzer manufactures pumping solutions and rotating equipment for industrial applications worldwide.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Lighting Upgrade', 'Electrical Compliance', 'Test & Tag', 'Switchboard Upgrades'].map(t => (
                  <span key={t} className="text-[9px] tracking-[0.15em] border border-[#1A1A1A]/15 px-3 py-1.5 text-[#1A1A1A]/40 uppercase">{t}</span>
                ))}
              </div>
            </div>
            <div className="border border-[#1A1A1A]/10 p-8">
              <h3 className="font-austin text-[#1A1A1A] text-2xl mb-3">Denzo Australia</h3>
              <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-4">Corrosion Protection · Infrastructure Materials</p>
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                Electrical services for Denzo Australia, specialists in corrosion protection and wharf protection materials. Industrial environments with specific compliance and safety requirements. Current project in final stages.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Industrial Electrical', 'Compliance Works'].map(t => (
                  <span key={t} className="text-[9px] tracking-[0.15em] border border-[#1A1A1A]/15 px-3 py-1.5 text-[#1A1A1A]/40 uppercase">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 border border-[#16253F]/15 p-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[3px] bg-[#0134E7] flex-shrink-0" />
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                We are currently working with Ark Industrial on new construction projects. Industrial facility enquiries welcome — we are actively building our industrial client base across Melbourne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core service — Maintenance */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-white/50 uppercase mb-6">Recurring revenue for you. Compliance for us.</p>
            <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight mb-8">
              Service & maintenance programs.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Every industrial and commercial facility has mandatory testing obligations under Australian standards. RCD testing. Emergency lighting testing. Test and tag. Thermal imaging of switchboards. Most facilities are not up to date.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              We build annual maintenance programs tailored to your facility — scheduled visits, documented results, compliance certificates, and a clear record for your safety management system.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              It keeps you compliant. It keeps your people safe. And it means we are on site regularly — so when something needs upgrading, you call the people who already know the building.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { test: 'RCD Testing', standard: 'AS/NZS 3760', freq: 'Annual' },
              { test: 'Test & Tag', standard: 'AS/NZS 3760', freq: 'Annual or as required' },
              { test: 'Emergency Lighting', standard: 'AS/NZS 2293', freq: '6-monthly + annual' },
              { test: 'Thermal Imaging', standard: 'AS/NZS 3000', freq: 'Annual' },
              { test: 'Switchboard Inspection', standard: 'AS/NZS 3000', freq: 'Annual' },
              { test: 'Safety Switch Testing', standard: 'AS/NZS 3760', freq: 'Quarterly' },
            ].map((item) => (
              <div key={item.test} className="bg-white/10 px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{item.test}</p>
                  <p className="text-white/40 text-xs tracking-wider mt-0.5">{item.standard}</p>
                </div>
                <span className="text-[9px] tracking-[0.15em] text-white/50 uppercase">{item.freq}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">What we do</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">Industrial services.</h2>
          <div className="divide-y divide-[#1A1A1A]/10">
            {[
              { num: '01', title: 'Electrical Compliance & Safety Audits', desc: 'AS/NZS 3000 compliant installations and audits for manufacturing, warehousing, and processing facilities. Safety assessments, hazard identification, and rectification works.' },
              { num: '02', title: 'Test & Tag Programs', desc: 'Scheduled test and tag programs to AS/NZS 3760. All portable appliances tested, tagged, and documented. Full reporting for your safety management system.' },
              { num: '03', title: 'RCD & Emergency Lighting Testing', desc: 'Mandatory RCD testing and emergency lighting compliance to AS/NZS 2293. Scheduled testing, fault rectification, and compliance certificates.' },
              { num: '04', title: 'Switchboard Design & Upgrades', desc: 'High-capacity switchboard construction and upgrades for industrial facilities. Metered and sub-metered configurations. All work documented and certified.' },
              { num: '05', title: 'Industrial Lighting Upgrades', desc: 'LED lighting upgrades for warehouses, factory floors, and external areas. Energy efficiency improvements, improved lux levels, and reduced maintenance cost.' },
              { num: '06', title: 'Access Control & Security', desc: 'Inner Range Integriti systems for large facilities. Card readers, biometric entry, CCTV, and perimeter security. Monitored response.' },
              { num: '07', title: 'Structured Cabling & Data', desc: 'Cat6A and fibre backbone for industrial facilities. Server room builds, rack design, and network infrastructure. Tested and certified.' },
              { num: '08', title: 'Preventative Maintenance Contracts', desc: 'Scheduled maintenance programs covering all electrical assets. Fixed pricing. Documented maintenance history. One point of contact.' },
            ].map((service) => (
              <div key={service.num} className="grid grid-cols-[44px_1fr] gap-6 py-7">
                <span className="font-austin text-[#1A1A1A]/20 text-xl">{service.num}</span>
                <div>
                  <h3 className="font-austin text-[#1A1A1A] text-xl lg:text-2xl mb-2">{service.title}</h3>
                  <p className="text-[#1A1A1A]/55 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial imagery */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {['/images/commercial-1.jpg', '/images/commercial-3.jpg', '/images/commercial-5.jpg'].map((src, i) => (
              <div key={i} className="relative overflow-hidden aspect-[3/4]">
                <Image src={src} alt="Industrial facility Melbourne" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#16253F]/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">Why Elec Reid</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-12">One accountable team.</h2>
          <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]/10">
            {[
              { title: 'A-grade licensed.', body: 'Every electrician carries an A-grade licence. The standard applies to every project regardless of size or sector.' },
              { title: 'Documented to standard.', body: 'As-built drawings, test results, and compliance certificates on every job. The paperwork is part of the work.' },
              { title: 'You deal with one person.', body: 'Joe Reid manages every industrial job. Not a junior, not a subcontractor. The same person from first call to handover.' },
            ].map((item, i) => (
              <div key={item.title} className={`py-10 ${i > 0 ? 'lg:pl-12' : ''} ${i < 2 ? 'lg:pr-12' : ''}`}>
                <div className="w-6 h-[3px] bg-[#0134E7] mb-6" />
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
            <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight mb-3">
              Tell us about your facility.
            </h2>
            <p className="text-white/60 max-w-lg text-lg">
              Whether you need a compliance audit, a maintenance program, or a full electrical upgrade — we want to hear about it.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a href="tel:+61450342075"
              className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-[#0134E7] text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap font-medium">
              Call +61 450 342 075
            </a>
            <a href="/build"
              className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              Start a Conversation →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
