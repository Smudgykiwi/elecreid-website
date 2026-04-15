import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Smart Home Brands Melbourne | Apple Home, Basalte, Unifi & More | Elec Reid',
  description: 'Elec Reid installs and integrates the world\'s best smart home brands in Melbourne. Apple Home, Basalte, Home Assistant, Control4, KNX, C-Bus, Unifi, Sonos.',
}

const brands = [
  {
    name: 'Apple Home',
    href: '/brands/apple-home',
    tag: '#1 Recommendation',
    tagColor: 'bg-[#0134E7] text-white',
    description: 'The platform most Melbourne homeowners already understand. iPhone, iPad, Siri — one language for your entire home.',
  },
  {
    name: 'Basalte',
    href: '/brands/basalte',
    tag: 'Premium Switches',
    tagColor: 'bg-[#1A1A1A] text-white',
    description: 'Belgian-designed switches and touchscreens. The finest hardware in the world, specified by architects, installed by us.',
  },
  {
    name: 'Home Assistant',
    href: '/brands/home-assistant',
    tag: 'Open Source',
    tagColor: 'bg-[#1A1A1A]/10 text-[#1A1A1A]',
    description: 'The most powerful smart home platform on the planet. Local, open, and unlimited. No cloud. No subscription. No limits.',
  },
  {
    name: 'Control4',
    href: '/brands/control4',
    tag: 'Enterprise',
    tagColor: 'bg-[#1A1A1A]/10 text-[#1A1A1A]',
    description: 'Twenty years of dealer-installed certainty. For clients who want a proven system with dedicated touchscreens and full support.',
  },
  {
    name: 'KNX',
    href: '/brands/knx',
    tag: 'Protocol Standard',
    tagColor: 'bg-[#1A1A1A]/10 text-[#1A1A1A]',
    description: 'The European standard for building automation. Manufacturer-independent, decentralised, built to last decades.',
  },
  {
    name: 'C-Bus',
    href: '/brands/cbus',
    tag: 'Australian Standard',
    tagColor: 'bg-[#1A1A1A]/10 text-[#1A1A1A]',
    description: "Australia's most trusted lighting platform. Thirty years of reliability in residential and commercial buildings.",
  },
  {
    name: 'Unifi',
    href: '/brands/unifi',
    tag: 'Networking',
    tagColor: 'bg-[#1A1A1A]/10 text-[#1A1A1A]',
    description: 'Enterprise-grade networking for every serious smart home. Access points, switches, cameras, intercom — one dashboard.',
  },
  {
    name: 'Sonos',
    href: '/brands/sonos',
    tag: 'Audio',
    tagColor: 'bg-[#1A1A1A]/10 text-[#1A1A1A]',
    description: 'Music in every room. Installed properly — wired from the ceiling down, so it sounds as good as it should.',
  },
]

export default function BrandsPage() {
  return (
    <>
      <Nav />

      <main className="pt-28 pb-24 bg-[#F5F2EE] min-h-screen">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">

          {/* Header */}
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#1A1A1A]/40 mb-4">
              Our Brands
            </p>
            <h1 className="font-austin text-5xl md:text-7xl text-[#1A1A1A] leading-none mb-6">
              The platforms<br />
              <em className="italic">we trust</em>
            </h1>
            <p className="text-[#1A1A1A]/60 text-lg max-w-2xl leading-relaxed">
              We don&apos;t install everything. We install what works. Eight platforms, each selected because it is the best at what it does — and because we can stand behind it.
            </p>
          </div>

          {/* Brand grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/10">
            {brands.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="group bg-[#F5F2EE] hover:bg-white transition-colors duration-300 p-8 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-austin text-3xl text-[#1A1A1A]">{brand.name}</h2>
                  <span className={`text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full flex-shrink-0 ${brand.tagColor}`}>
                    {brand.tag}
                  </span>
                </div>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed flex-grow">
                  {brand.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#0134E7] group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-[#1A1A1A]/50 text-sm mb-6">
              Not sure which platform is right for your home?
            </p>
            <Link
              href="/build"
              className="inline-block text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-8 py-4 rounded-full transition-colors"
            >
              Build Your Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
