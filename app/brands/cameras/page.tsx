import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Security Camera Installation Melbourne | UniFi Cameras | Elec Reid',
  description: 'Elec Reid installs UniFi Protect security cameras in Melbourne. Local recording, no subscription, AI-powered detection. Your footage stays in your home.',
  keywords: 'security camera installation Melbourne, UniFi cameras Melbourne, CCTV Melbourne, home security cameras Melbourne, IP camera installation Melbourne',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne security camera and CCTV installation specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'Security camera installation and UniFi Protect integration',
}

const products = [
  {
    name: 'G5 Pro / G6 Pro Series',
    label: 'Outdoor perimeter',
    body: 'High-resolution outdoor cameras. 4K, wide dynamic range, colour night vision, IP67 weatherproofing. The standard for residential perimeter coverage.',
  },
  {
    name: 'G6 Cameras',
    label: 'Latest generation',
    body: 'The latest generation. 8MP resolution, improved low-light performance, AI smart detection for person, vehicle, animal, and package. PoE-powered, ceiling or wall mount.',
  },
  {
    name: 'UniFi PTZ',
    label: 'Pan-tilt-zoom',
    body: 'Pan-tilt-zoom camera for large outdoor areas. Motorised zoom, AI tracking, full 360° coverage from a single camera. The choice for large blocks, driveways, and open spaces.',
  },
  {
    name: 'Licence Plate Recognition',
    label: 'LPR',
    body: "UniFi's dedicated licence plate camera. Captures and logs plate numbers automatically. Integrates with UniFi Access for gate automation. Every vehicle in and out, logged.",
  },
  {
    name: 'NVR with AI',
    label: 'Local storage',
    body: "The UniFi Network Video Recorder stores all footage locally. No cloud. No subscription. AI segmentation built into the NVR identifies and tags events across all cameras. Search by person, vehicle, zone, or time.",
  },
]

const reasons = [
  { title: 'Local recording', body: 'No cloud. No subscription. Your footage lives in your home, accessible only to you.' },
  { title: 'Unified with network', body: 'Cameras run on the same UniFi infrastructure as Wi-Fi and access control. One dashboard, one system.' },
  { title: 'AI detection', body: 'Real alerts, not constant motion notifications. Person, vehicle, animal, package each tagged and searchable.' },
  { title: 'Professional installation', body: 'Correct placement, clean cable routing, PoE switching design. Every camera covers what it should.' },
]

export default function CamerasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/haven-dsc05741.jpg"
            alt="UniFi camera system rack installation Melbourne"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 to-[#1A1A1A]/95" />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16 pt-36 pb-24">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Residential · Security</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            Cameras
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            See everything. Store nothing in the cloud.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Your footage. Your storage. Your control.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Security cameras are only as good as the system behind them. Most cameras send footage to a cloud server you don&apos;t control, run on a subscription you pay forever, and deliver footage you can&apos;t actually access when you need it.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              Elec Reid installs UniFi Protect local recording, no subscription, AI-powered detection, and full integration with your smart home network. Your footage stays in your home.
            </p>
            <div className="border-l-2 border-[#0134E7] pl-6 mt-8">
              <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-2">Primary Platform</p>
              <p className="font-austin text-[#1A1A1A] text-2xl">UniFi Protect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-16">The hardware.</h2>
          <div className="space-y-px">
            {products.map((product) => (
              <div key={product.name} className="bg-[#1A1A1A] border border-white/5 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16">
                <div className="lg:w-64 flex-shrink-0">
                  <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-2">{product.label}</p>
                  <h3 className="font-austin text-white text-2xl lg:text-3xl">{product.name}</h3>
                </div>
                <p className="text-white/50 leading-relaxed lg:pt-8">{product.body}</p>
              </div>
            ))}
          </div>

          {/* TP-Link secondary mention */}
          <div className="mt-12 border border-white/10 p-8 lg:p-10">
            <p className="text-[9px] tracking-[0.2em] text-white/30 uppercase mb-3">Budget alternative</p>
            <h3 className="font-austin text-white text-2xl mb-4">TP-Link Vigi</h3>
            <p className="text-white/40 leading-relaxed max-w-2xl">
              For projects where budget is the primary driver. Similar product categories dome, turret, PTZ with local recording via TP-Link NVR. Reliable, well-supported, no cloud subscription required.
            </p>
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
              ['Unifi', '/brands/unifi'],
              ['Security', '/brands/security'],
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
            Design your camera system.
          </h2>
          <Link
            href="/build"
            className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap"
          >
            Design your camera system →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
