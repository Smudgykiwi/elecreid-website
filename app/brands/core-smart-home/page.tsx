import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Core Smart Home Keypads Melbourne | Eclipse Switches | Elec Reid',
  description: 'Core Smart Home Eclipse switches Melbourne. Elec Reid installs the Eclipse switch and thermostat range Australian-designed, integrated sensors, 13 finishes. For contemporary residential projects.',
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
  serviceType: 'Core Smart Home Eclipse switch installation',
}

export default function CoreSmartHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end bg-[#16253F] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/haven-dsc05648.jpg" alt="Core Smart Home Eclipse keypad in luxury Melbourne home" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16253F] via-[#16253F]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pb-16 w-full">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-4">
            Brands
          </p>
          <h1 className="font-austin text-7xl md:text-9xl text-white leading-none mb-4">
            Core Smart Home
          </h1>
          <p className="font-austin italic text-2xl md:text-3xl text-white/60">
            Australian-designed. Built for Australian homes.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-[#F8F4F1] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-austin text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                Australia&apos;s own answer to the premium keypad category.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                Core Smart Home is Australia&apos;s own answer to the premium keypad category. Designed and engineered in Australia, the Eclipse range delivers flush-mount precision, integrated sensors, and a family of finishes built for contemporary residential design.
              </p>
              <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                We specify Core Smart Home when a project calls for Australian-designed hardware with premium performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eclipse Switch ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src="/images/haven-dsc05611.jpg" alt="Core Smart Home Eclipse switch on wall" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                1, 2 and 4-fold configurations
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                Eclipse Switch
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Ships in 1, 2, and 4-fold configurations. Flush-mount, ultra-minimal profile. Integrated ambient light sensor, temperature sensor, and presence detection. Thirteen finishes including brushed gold, satin bronze, and matte white.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eclipse Thermostat ── */}
      <section className="py-20 md:py-28 bg-[#F8F4F1]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:[&>*:first-child]:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src="/images/haven-dsc05648.jpg" alt="Core Smart Home Eclipse thermostat" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                Complete room control
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                Eclipse Thermostat
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Adds super-knob control to the Eclipse platform. Custom backlit buttons, air quality measurement, and precise temperature management. The complete room control solution one surface for lighting, climate, and environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Finishes ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src="/images/haven-dsc05648b.jpg" alt="Core Smart Home Eclipse 13 finishes" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0134E7]">
                Bronze through brass
              </p>
              <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                Thirteen finishes
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                Thirteen finishes across brushed and silky-matte surfaces bronze through brass. Each switch is precisely machined and finished to sit flush against the wall with zero gap. Specified to match the interior, not work around it.
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
            <em className="italic text-white/50">for Core Smart Home</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { heading: 'Australian-designed.', body: 'Built for the Australian market by Australians. Standards, wall boxes, and electrical conditions all designed for from the ground up.' },
              { heading: 'Integrated sensors.', body: 'Ambient light, temperature, and presence detection built into the switch. No separate sensor hardware required.' },
              { heading: '13 finishes.', body: 'A palette that rivals European competitors. Brushed gold, satin bronze, matte white specified to match your interior.' },
              { heading: 'Works with Apple Home, Home Assistant, and KNX.', body: 'Platform-agnostic hardware. Specify Core Smart Home regardless of which automation platform you choose.' },
              { heading: 'Residential specialists.', body: 'We specify Core Smart Home in contemporary Melbourne homes where Australian design sensibility matters.' },
              { heading: 'Full system design.', body: 'We specify every button, every function, every scene before a single cable is pulled.' },
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
      <section className="bg-[#F8F4F1] py-16 md:py-20 border-t border-[#1A1A1A]/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-8">
            Related brands
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Ekinex', href: '/brands/ekinex' },
              { label: 'Basalte', href: '/brands/basalte' },
              { label: 'Apple Home', href: '/brands/apple-home' },
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
            Add Core Smart Home<br />
            <em className="italic text-white/50">to your project</em>
          </h2>
          <p className="text-white/50 text-base mb-10 max-w-lg mx-auto">
            Tell us about your project. We will specify the right Eclipse hardware for your home.
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
