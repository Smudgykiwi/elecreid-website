import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Security System Installation Melbourne | Inner Range Inception & Integriti | Elec Reid',
  description: 'Elec Reid installs Inner Range Inception and Integriti security systems in Melbourne. Australian-designed, locally supported, integrated with Apple Home and UniFi cameras.',
  keywords: 'security system installation Melbourne, Inner Range Inception Melbourne, Inner Range Integriti Melbourne, alarm system Melbourne, access control Melbourne',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne security system installation specialists Inner Range Inception and Integriti',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Security system installation, Inner Range Inception and Integriti programming',
}

const products = [
  {
    name: 'Inception',
    label: 'Residential & small commercial',
    body: 'The residential and small commercial security controller. Web-browser based commissioning no proprietary software required. Connects via IP or 4G (SkyTunnel) for cloud-based remote management and alarm monitoring. Supports intruder detection, access control, and door control from a single panel. Designed to be set up correctly without specialist Inner Range experience which means faster commissioning and lower ongoing cost. Our standard specification for residential projects.',
    tag: 'Our standard residential spec',
  },
  {
    name: 'Integriti',
    label: 'Enterprise',
    body: 'The enterprise-grade platform. Up to 500+ readers, full BMS integration, ANPR (automatic number plate recognition), multi-site management from a single interface. EN50131 intruder detection certified. Integrates with video management systems, building automation, and third-party platforms via the IR Connect app. For commercial buildings, large residential estates, and any project where the security brief demands enterprise performance.',
    tag: 'Commercial & large estates',
  },
]

const sharedFeatures = [
  'Remote management via IR Connect mobile app',
  'Integration with UniFi cameras and access control',
  'Alarm monitoring via SkyTunnel (4G/IP multipath)',
  'Zone expansion via wired and wireless detectors',
  'Access control integration (keypads, card readers, biometric)',
]

const reasons = [
  { title: 'Australian-designed', body: 'Inner Range is designed and manufactured in Melbourne. Locally supported. Parts available. Engineers who know the product.' },
  { title: 'We program both platforms', body: 'Inception and Integriti. Correct configuration, not just a working panel a system that does what you actually need it to do.' },
  { title: 'Smart home integration', body: 'Arm via Apple Home. Receive alerts on your phone. Your security system talks to your wider home system not in isolation.' },
  { title: 'Documented at handover', body: 'Full system documentation at handover. Zone maps, user codes, monitoring details, and programming guides. You own the system you have everything you need.' },
]

export default function SecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 pt-36 pb-24">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Residential & Commercial · Security</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Security
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Proper protection. Properly installed.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              A system is only as good as its installation.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Most home alarms are superficially installed sensors in obvious places, panels that are easy to bypass, monitoring that generates false alarms and gets ignored.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-8">
              Elec Reid installs Inner Range security systems. Australian-designed, engineered for reliability, and programmed by installers who understand the technology.
            </p>
            <div className="border-l-2 border-[#0134E7] pl-6">
              <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-1">Brand</p>
              <p className="font-austin text-[#1A1A1A] text-2xl">Inner Range</p>
              <p className="text-[#1A1A1A]/40 text-sm mt-1">Australian manufacturer · Melbourne-based</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-16">The platforms.</h2>
          <div className="grid lg:grid-cols-2 gap-px bg-white/5">
            {products.map((product) => (
              <div key={product.name} className="bg-[#1A1A1A] border border-white/5 p-10 lg:p-14 flex flex-col gap-6">
                <div>
                  <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-3">{product.label}</p>
                  <h3 className="font-austin text-white text-3xl lg:text-4xl mb-2">{product.name}</h3>
                  <span className="inline-block text-[9px] tracking-[0.15em] uppercase bg-white/5 text-white/40 px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <p className="text-white/50 leading-relaxed">{product.body}</p>
              </div>
            ))}
          </div>

          {/* Shared features */}
          <div className="mt-12 border border-white/10 p-8 lg:p-10">
            <h3 className="font-austin text-white text-2xl mb-8">Features both platforms share.</h3>
            <ul className="grid lg:grid-cols-2 gap-4">
              {sharedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#0134E7] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/50 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Elec Reid */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">Why Elec Reid.</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-xl mb-3">{reason.title}</h3>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related brands */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Related brands</p>
          <div className="flex flex-wrap gap-3">
            {[
              ['Cameras', '/brands/cameras'],
              ['Unifi', '/brands/unifi'],
              ['Apple Home', '/brands/apple-home'],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">
            Secure your home or business.
          </h2>
          <Link
            href="/build"
            className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap"
          >
            Secure your home or business →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
