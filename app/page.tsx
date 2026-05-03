import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Elec Reid | Smart Home, Commercial & Industrial Electrical · Melbourne',
  description: 'Elec Reid. Residential smart home, commercial AV, and industrial electrical across Melbourne. Apple HomeKit specialists.',
}

// Editorial section eyebrow - matches the /build form treatment
function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[9px] tracking-[0.35em] text-[#16253F]/40 uppercase font-medium ${className}`}>
      {children}
    </p>
  )
}

// Editorial section heading - Circular medium small-caps, NOT Austin display.
// Austin display is reserved for the H1 hero only.
function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-[#16253F] text-[28px] lg:text-[32px] leading-tight font-medium tracking-tight ${className}`}>
      {children}
    </h2>
  )
}

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO ── single Austin display moment ── single cobalt CTA (Build) */}
      <section className="relative min-h-screen bg-[#16253F] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/haven-dsc05570.jpg"
            alt="Elec Reid, Melbourne smart home and electrical"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16253F] via-[#16253F]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pb-20 lg:pb-28 w-full">
          <p className="text-[9px] tracking-[0.4em] text-white/40 uppercase mb-8">
            Melbourne · Australia
          </p>
          <h1 className="font-austin text-white leading-[0.88] tracking-tight mb-8
            text-[clamp(64px,10vw,152px)]">
            Electrical &amp;<br />
            <em>Smart Technology.</em>
          </h1>
          <p className="text-white/60 text-xl max-w-xl leading-relaxed mb-10">
            Residential smart homes. Commercial AV and technology. Industrial electrical. One company. Melbourne.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {/* Primary cobalt CTA - this is the page's single cobalt moment */}
            <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
              Build Your Home →
            </Link>
            {/* Secondary ghost - cream border, no cobalt */}
            <Link href="/projects" className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
              See Our Work →
            </Link>
          </div>
          <a href="tel:+61450342075" className="text-white/50 hover:text-white text-sm transition-colors">
            Call us: +61 450 342 075
          </a>
        </div>
      </section>

      {/* WHAT WE DO ── photo on top, text below on cream, quiet "Explore" link */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <Eyebrow className="mb-6">What we do</Eyebrow>
          <SectionHeading className="max-w-3xl mb-16">
            One company. Three divisions.
          </SectionHeading>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">

            {/* Residential */}
            <Link href="/residential" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <ImagePlaceholder
                  id="IMG-H-B"
                  caption="Residential — premium home interior, switch detail, dusk warm light."
                  aspect="4/5"
                  src="/images/haven-dsc05653.jpg"
                  alt="Residential smart home Melbourne"
                />
              </div>
              <p className="text-[9px] tracking-[0.3em] text-[#16253F]/40 uppercase mb-3">01</p>
              <h3 className="text-[#16253F] text-2xl font-medium mb-3">Residential</h3>
              <p className="text-[#16253F]/65 text-base leading-relaxed mb-5">
                Smart homes. Apple HomeKit. AV. Networking. Security. Everything that makes the house feel like one system.
              </p>
              <span className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 group-hover:border-[#16253F] pb-1 transition-colors">
                Explore Residential →
              </span>
            </Link>

            {/* Commercial */}
            <Link href="/commercial" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <ImagePlaceholder
                  id="IMG-H-C"
                  caption="Commercial — office or hospitality interior, AV in context."
                  aspect="4/5"
                  src="/images/eclat-bureau.webp"
                  alt="Commercial AV Melbourne"
                />
              </div>
              <p className="text-[9px] tracking-[0.3em] text-[#16253F]/40 uppercase mb-3">02</p>
              <h3 className="text-[#16253F] text-2xl font-medium mb-3">Commercial</h3>
              <p className="text-[#16253F]/65 text-base leading-relaxed mb-5">
                Hospitality. Offices. Retail. Event spaces. Technology that earns its keep.
              </p>
              <span className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 group-hover:border-[#16253F] pb-1 transition-colors">
                Explore Commercial →
              </span>
            </Link>

            {/* Industrial */}
            <Link href="/industrial" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <ImagePlaceholder
                  id="IMG-H-D"
                  caption="Industrial — switchboard or warehouse install, on-the-tools."
                  aspect="4/5"
                  src="/images/industrial-warehouse.jpg"
                  alt="Industrial electrical Melbourne"
                />
              </div>
              <p className="text-[9px] tracking-[0.3em] text-[#16253F]/40 uppercase mb-3">03</p>
              <h3 className="text-[#16253F] text-2xl font-medium mb-3">Industrial</h3>
              <p className="text-[#16253F]/65 text-base leading-relaxed mb-5">
                Factories. Facilities. Warehouses. Switchboards, compliance, access control, and maintenance.
              </p>
              <span className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 group-hover:border-[#16253F] pb-1 transition-colors">
                Explore Industrial →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY ── now contains the inline pull-quote (no more cobalt slab) */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <Eyebrow className="mb-6">Our philosophy</Eyebrow>
            <SectionHeading className="mb-8">
              A smart home is not a product.
            </SectionHeading>
            <p className="text-[#16253F]/70 text-lg leading-relaxed mb-6">
              It is a relationship between architecture, automation and the people who live there. Elec Reid specifies, installs and commissions systems where every decision is deliberate.
            </p>
            <p className="text-[#16253F]/70 text-lg leading-relaxed mb-10">
              From the switch that meets your hand each morning to the control platform that ties it all together. One team. Everything works.
            </p>

            {/* Quiet inline pull-quote — replaces the full-bleed cobalt slab */}
            <figure className="border-l-2 border-[#16253F]/15 pl-6 mb-10">
              <blockquote className="font-austin italic text-[#16253F] text-[28px] lg:text-[36px] leading-snug">
                &ldquo;Good taste, implied confidence, and a pure nerdy love for tech.&rdquo;
              </blockquote>
              <figcaption className="text-[9px] tracking-[0.3em] text-[#16253F]/40 uppercase mt-4">
                How a client described our team
              </figcaption>
            </figure>

            <Link href="/about" className="inline-flex items-center justify-center border border-[#16253F]/20 hover:border-[#16253F] text-[#16253F]/70 hover:text-[#16253F] text-[9px] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors">
              Our Story
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ImagePlaceholder
              id="IMG-H-E"
              caption="Haven Court — home theatre and bar."
              aspect="1/1"
              src="/images/haven-dsc05653.jpg"
              alt="Haven Court home theatre and bar"
            />
            <div className="mt-8">
              <ImagePlaceholder
                id="IMG-H-F"
                caption="Haven Court — home bar detail."
                aspect="1/1"
                src="/images/haven-dsc05656.jpg"
                alt="Haven Court home bar"
              />
            </div>
            <ImagePlaceholder
              id="IMG-H-G"
              caption="Merival — whole-home audio install."
              aspect="1/1"
              src="/images/merival-sonos.jpg"
              alt="Merival AV installation"
            />
            <div className="mt-8">
              <ImagePlaceholder
                id="IMG-H-H"
                caption="Haven Court — private spa."
                aspect="1/1"
                src="/images/haven-dsc05643.jpg"
                alt="Haven Court private spa"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <Eyebrow className="mb-3">Recent work</Eyebrow>
              <SectionHeading>Melbourne projects.</SectionHeading>
            </div>
            <Link href="/projects" className="hidden sm:inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 hover:border-[#16253F] pb-1 transition-colors">
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: 'Haven Court', location: 'Torquay', img: '/images/haven-dsc05570.jpg', slot: 'IMG-H-I' },
              { title: 'McKimm', location: 'Brighton', img: '/images/mckimm-5.jpg', slot: 'IMG-H-J' },
              { title: 'Fitzroy St', location: 'St Kilda', img: '/images/stkilda-1.jpg', slot: 'IMG-H-K' },
              { title: 'Merival', location: 'Melbourne', img: '/images/merival-sonos.jpg', slot: 'IMG-H-L' },
            ].map((p) => (
              <Link key={p.title} href="/projects" className="group block">
                <div className="relative overflow-hidden">
                  <ImagePlaceholder
                    id={p.slot}
                    caption={`${p.title} — ${p.location} project tile.`}
                    aspect="1/1"
                    src={p.img}
                    alt={p.title}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16253F]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-austin italic text-white text-lg leading-tight">{p.title}</p>
                    <p className="text-white/60 text-[8px] tracking-[0.25em] uppercase mt-1">{p.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <Eyebrow className="mb-3">Google reviews</Eyebrow>
              <SectionHeading>What clients say.</SectionHeading>
            </div>
            <div className="hidden sm:flex items-center gap-2" aria-label="5 out of 5 stars on Google">
              <div className="flex gap-0.5" aria-hidden>
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#16253F]/70">★</span>)}
              </div>
              <span className="text-[#16253F]/55 text-sm">5.0 on Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Su Mei Koh', suburb: 'Toorak', text: 'Joe and his team came highly recommended, and I\'m so grateful for their hard work. The smart home system works flawlessly and the finish is impeccable.' },
              { name: 'Robbie Smarrelli', suburb: 'South Yarra', text: 'Joe and his team provided excellent service with expert workmanship. They were reliable, professional, and the attention to detail was outstanding.' },
              { name: 'Andy Fisher', suburb: 'Brighton', text: 'Joe\'s an absolute legend. Not just a top electrician but a great bloke too. A genius when it comes to smart home tech. Couldn\'t recommend highly enough.' },
            ].map((review) => (
              <div key={review.name} className="border-t-2 border-[#16253F]/10 pt-8">
                <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => <span key={i} aria-hidden className="text-[#16253F]/60 text-sm">★</span>)}
                </div>
                <p className="font-austin italic text-[#16253F] text-xl leading-snug mb-6">&ldquo;{review.text}&rdquo;</p>
                <p className="text-[#16253F] text-sm font-medium">{review.name}</p>
                <p className="text-[9px] tracking-[0.2em] text-[#16253F]/40 uppercase mt-1">{review.suburb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS WE INSTALL ── now uses ImagePlaceholder slots so empty boxes never ship blank */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-16">
        <div className="max-w-screen-xl mx-auto">
          <Eyebrow className="mb-10">Brands we install</Eyebrow>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/basalte-fibonacci.jpg', label: 'Basalte', slot: 'IMG-H-M' },
              { src: '/images/ekinex-proxima.jpg', label: 'Ekinex', slot: 'IMG-H-N' },
              { src: '/images/control4-lux.jpg', label: 'Control4', slot: 'IMG-H-O' },
              { src: '/images/apple-home.png', label: 'Apple Home', slot: 'IMG-H-P' },
            ].map((item) => (
              <Link key={item.label} href="/brands" className="group block">
                <ImagePlaceholder
                  id={item.slot}
                  caption={`${item.label} — brand product shot or logo.`}
                  aspect="1/1"
                  src={item.src}
                  alt={item.label}
                />
                <p className="text-[9px] tracking-[0.22em] text-[#16253F]/40 uppercase mt-3">{item.label}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/brands" className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 hover:border-[#16253F] pb-1 transition-colors">
              View all brands →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-6">Next steps</p>
            <SectionHeading className="text-white mb-3">
              Begin your project.
            </SectionHeading>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              The best smart homes start with a conversation. Before plans are drawn, before cables are run.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              Build Your Home →
            </Link>
            <a href="tel:+61450342075" className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/60 hover:text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              +61 450 342 075
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
