import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TP-Link Network & Camera Installation Melbourne | Elec Reid',
  description: 'Elec Reid installs TP-Link networking and TP-Link Vigi camera systems across Melbourne. Enterprise-grade Wi-Fi, managed switches, and local CCTV for residential and commercial projects.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: 'Melbourne TP-Link network and camera installation specialists',
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  areaServed: 'Melbourne',
  serviceType: 'TP-Link network and Vigi camera installation',
}

export default function TPLinkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#0134E7] uppercase mb-6">Networking · Cameras</p>
          <h1 className="font-austin text-white text-[clamp(64px,10vw,140px)] leading-[0.88] tracking-tight mb-6">
            TP-Link
          </h1>
          <p className="font-austin italic text-white/50 text-3xl lg:text-4xl">
            Reliable infrastructure. Every budget.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-24 lg:py-36">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight">
              When performance and value both matter.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              TP-Link is our second network infrastructure choice — specified when the brief calls for a reliable, well-supported system at a more accessible price point. The Omada business networking range and Vigi camera system deliver genuine enterprise features without the enterprise price tag.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              We install TP-Link Omada for Wi-Fi and switching, and TP-Link Vigi for local CCTV recording. Both systems are cloud-managed or locally managed — no ongoing subscription required.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
              Our primary network recommendation is UniFi. But TP-Link is a legitimate, capable alternative for projects where the UniFi price point is not the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Omada Networking */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">Wi-Fi & Networking</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-16">TP-Link Omada</h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Omada Access Points',
                sub: 'Wi-Fi 6 · Ceiling mount · PoE',
                body: 'EAP670, EAP660 HD, and the full Omada Wi-Fi 6 range deliver fast, reliable wireless coverage across residential and commercial spaces. PoE-powered, ceiling-mounted, centrally managed. The same principle as UniFi — proper infrastructure, not consumer routers.',
              },
              {
                title: 'Omada Routers & Switches',
                sub: 'Managed · PoE · VLAN',
                body: 'TP-Link Omada managed switches with PoE ports power access points, cameras, and intercoms across the network. VLAN segmentation, guest networks, and traffic monitoring. Full management from the Omada Controller — cloud or self-hosted.',
              },
              {
                title: 'Omada Controller',
                sub: 'Cloud or local management',
                body: 'Omada Software Controller manages the entire network from one dashboard. Self-hosted on a local device or cloud-managed via TP-Link\'s cloud portal. Remote access, firmware updates, real-time monitoring, and network statistics — all without a subscription.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#1A1A1A]/10 pt-8">
                <h3 className="font-austin text-[#1A1A1A] text-2xl mb-1">{item.title}</h3>
                <p className="text-[9px] tracking-[0.2em] text-[#0134E7] uppercase mb-4">{item.sub}</p>
                <p className="text-[#1A1A1A]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vigi Cameras */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-4">Security Cameras</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl mb-6">TP-Link Vigi</h2>
          <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-16 max-w-3xl">
            The TP-Link Vigi range delivers local CCTV recording without cloud subscriptions. PoE-powered IP cameras across dome, turret, bullet, and PTZ form factors — managed via the Vigi NVR or the VIGI Security Manager software. All footage stored locally. No monthly fees.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                title: 'Dome & Turret Cameras',
                body: 'The Vigi C4x0 series covers 4MP and 8MP options in dome and turret housings. Colour night vision, wide dynamic range, IP67 weatherproofing. The standard for residential and commercial perimeter coverage at an accessible price.',
              },
              {
                title: 'PTZ Cameras',
                body: 'Vigi PTZ cameras deliver pan-tilt-zoom coverage for large outdoor areas, car parks, and driveways. Optical zoom, auto-tracking, and preset tour positions. One camera covering what would otherwise require three or four fixed units.',
              },
              {
                title: 'Vigi NVR',
                body: 'The TP-Link Vigi NVR stores all footage locally on hard drives you own. No cloud. No subscription. Supports up to 16 channels. Remote viewing via the VIGI app. AI smart detection for motion zones, line crossing, and intrusion detection.',
              },
              {
                title: 'VIGI Security Manager',
                body: 'TP-Link\'s camera management software runs on a local PC or server. Manage all cameras, review footage, configure alerts, and export clips — from one interface, on your network.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#1A1A1A]/10 pt-8">
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
              { title: 'Right tool for the brief.', body: 'UniFi is our first choice. TP-Link is our second. We specify based on what the project needs — not what\'s on the truck.' },
              { title: 'No cloud subscriptions.', body: 'Omada and Vigi both run locally. Your network and your cameras are yours — not dependent on a vendor\'s cloud service staying live.' },
              { title: 'Full installation.', body: 'Cable routing, PoE switching design, controller setup, camera placement, and NVR commissioning. Done properly from day one.' },
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
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Related</p>
          <div className="flex flex-wrap gap-3">
            {[['Unifi', '/brands/unifi'], ['Cameras', '/brands/cameras'], ['Security', '/brands/security']].map(([name, href]) => (
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
          <h2 className="font-austin text-white text-4xl lg:text-5xl leading-tight">Design your network and camera system.</h2>
          <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
            Start the Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
