import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ekinex Smart Switches Melbourne | Italian Design KNX Switches | Elec Reid',
  description: 'Ekinex switches Melbourne. Elec Reid specifies, supplies and installs the Ekinex 20Venti and Proxima ranges. Italian-designed, KNX-native, 13+ finishes. For prestige residential and commercial projects.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elec Reid',
  description: "Melbourne's smart home electrical specialists",
  url: 'https://elecreid.com',
  telephone: '+61450342075',
  email: 'enquiries@elecreid.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  areaServed: 'Melbourne',
  serviceType: 'Ekinex KNX switch installation and specification',
}

export default function EkinexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end bg-[#16253F] overflow-hidden">
        <Image
          src="/images/ekinex-proxima.jpg"
          alt="Ekinex Proxima keypad in a prestige Melbourne residence"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pb-16 w-full">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-4">
            Brands
          </p>
          <h1 className="font-austin text-7xl md:text-9xl text-white leading-none mb-4">
            Ekinex
          </h1>
          <p className="font-austin italic text-2xl md:text-3xl text-white/60">
            Italian precision. Every finish, every surface.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-[#F5F2EE] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-austin text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                The switches architects specify when they refuse to compromise.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                Ekinex makes the switches that architects specify when they refuse to compromise. Italian-designed, KNX-native, and available in a palette of finishes that no other manufacturer matches.
              </p>
              <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                Brushed metals, painted surfaces, special textures. Two collections dominate our specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 20Venti ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#16253F]/5">
              <Image
                src="/images/ekinex-20venti.jpg"
                alt="Ekinex 20Venti switch range in a Melbourne prestige home"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                Flagship switch range
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                20Venti
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                The 20Venti is Ekinex's flagship switch range. Touch switches, rockers, thermostats and room controllers across a vast palette of finishes brushed aluminium, painted RAL colours, bronze, brass, satin stainless. Modular. KNX native. Used in prestige residential and commercial projects across Europe and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proxima ── */}
      <section className="py-20 md:py-28 bg-[#F5F2EE]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:[&>*:first-child]:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#16253F]/5">
              <Image
                src="/images/ekinex-proxima.jpg"
                alt="Ekinex Proxima keypad in brushed brass"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                Flagship keypad
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                Proxima
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                The flagship Ekinex keypad. Proxima takes the 20Venti design language and refines it further. Sharper bevels, deeper-brushed finishes, a machined edge profile that catches light in a way no other keypad manages. Available in thirteen finishes including antique brass, satin bronze, rose gold, and matte stainless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Elec Reid ── */}
      <section className="bg-[#16253F] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-austin text-4xl md:text-5xl text-white mb-14 leading-tight">
            Why Elec Reid<br />
            <em className="italic text-white/50">for Ekinex</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { heading: 'Native KNX.', body: 'Ekinex hardware runs on the KNX bus natively no bridge, no middleware. Specified alongside any KNX-compatible platform.' },
              { heading: 'Works with Basalte Home.', body: 'Ekinex and Basalte are complementary. We specify them together when a project calls for Italian hardware with Belgian software.' },
              { heading: 'Italian-engineered.', body: 'Designed and manufactured in Italy to a standard that makes it the first choice for architects on prestige projects across Europe.' },
              { heading: '13+ finishes.', body: 'A palette no other manufacturer matches. From brushed aluminium to antique brass specified to match the interior, not work around it.' },
              { heading: 'Residential and commercial.', body: 'We install Ekinex in Melbourne homes and commercial projects. The 20Venti scales from a single room to a whole building.' },
              { heading: 'Full system design.', body: 'We do not just supply switches. We design the complete system every button, every function, every scene before a single cable is pulled.' },
            ].map((point, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-8 h-px bg-[#0134E7]" />
                <h3 className="font-austin text-xl text-white leading-snug">{point.heading}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Brands ── */}
      <section className="bg-[#F5F2EE] py-16 md:py-20 border-t border-[#1A1A1A]/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-8">
            Related brands
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'KNX', href: '/brands/knx' },
              { label: 'Basalte', href: '/brands/basalte' },
              { label: 'Control4', href: '/brands/control4' },
            ].map((rb) => (
              <Link
                key={rb.href}
                href={rb.href}
                className="text-[10px] tracking-[0.15em] uppercase border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 px-5 py-2.5 rounded-full transition-colors"
              >
                {rb.label}
              </Link>
            ))}
            <Link
              href="/brands"
              className="text-[10px] tracking-[0.15em] uppercase border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A]/40 hover:text-[#1A1A1A] px-5 py-2.5 rounded-full transition-colors"
            >
              All brands →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#16253F] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-austin text-4xl md:text-6xl text-white mb-4 leading-tight">
            Build your system<br />
            <em className="italic text-white/50">with Ekinex</em>
          </h2>
          <p className="text-white/50 text-base mb-10 max-w-lg mx-auto">
            Tell us about your project. We will specify the right Ekinex hardware for your architecture.
          </p>
          <Link
            href="/build"
            className="inline-block text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-10 py-4 rounded-full transition-colors"
          >
            Build Your Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
