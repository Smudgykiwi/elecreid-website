import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getAllPosts, formatDate } from './blog/lib'

export const metadata: Metadata = {
  title: 'Elec Reid | Melbourne Electricians · Electrical & Smart Technology',
  description: 'Elec Reid is a Melbourne electrical contractor for residential, commercial and industrial projects. Electrical, smart technology, AV, security, automation and maintenance.',
}

const serviceItems = [
  {
    number: '01',
    title: 'Electrical',
    href: '/residential',
    text: 'Melbourne electrical work for homes, businesses, and industrial sites. Switchboards, lighting, power, data, maintenance, and clean delivery from first call to handover.',
  },
  {
    number: '02',
    title: 'Audio visual systems',
    href: '/services',
    text: 'Audio visual systems for homes, offices, boardrooms, venues, and commercial spaces. Screens, speakers, conferencing, distributed audio, and control that is simple to use.',
  },
  {
    number: '03',
    title: 'Automation',
    href: '/brands/apple-home',
    text: 'Smart technology for residential and commercial buildings. Lighting control, access, security, climate, blinds, monitoring, scenes, and platform integration.',
  },
  {
    number: '04',
    title: 'Home theatres',
    href: '/services',
    text: 'Private cinemas, media rooms, staff areas, training rooms, and presentation spaces with proper wiring, calibrated equipment, clean control, and a finish that fits the site.',
  },
  {
    number: '05',
    title: 'Security systems',
    href: '/brands/security',
    text: 'Alarms, cameras, access control, intercoms, and monitoring for residential, commercial, and industrial properties. Installed neatly, documented properly, and ready to use.',
  },
]

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  name: 'Elec Reid',
  url: 'https://www.elecreid.com',
  telephone: '+61450342075',
  areaServed: ['Melbourne', 'Toorak', 'South Yarra', 'Brighton', 'Malvern', 'Mornington Peninsula'],
  description: 'Elec Reid is a Melbourne electrical contractor for residential, commercial, and industrial projects, with specialist capability across smart technology, AV, automation, networking, and security systems.',
  knowsAbout: ['Melbourne electricians', 'commercial electrical', 'industrial electrical', 'smart technology', 'smart home installation', 'Apple Home', 'KNX', 'Control4', 'home theatre installation', 'UniFi networking', 'security systems'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Elec Reid specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elec Reid specialises in residential, commercial, and industrial electrical work across Melbourne, with additional capability in smart technology, automation, AV systems, networking, and security systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which smart home platforms does Elec Reid install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elec Reid works with Apple Home, Control4, KNX, Basalte, Philips Dynalite, Home Assistant, UniFi networking, and Inception security systems.',
      },
    },
  ],
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO: full-screen image with broader electrical positioning */}
      <section className="relative min-h-screen bg-[#16253F] flex items-end overflow-hidden">
        <Image
          src="/images/elec-reid-wix-hero-luxury.jpg"
          alt="Elec Reid Melbourne electrical and smart technology project"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16253F]/88 via-[#16253F]/52 to-[#16253F]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16253F]/78 via-transparent to-[#16253F]/36" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 w-full pt-32 pb-16 lg:pb-24">
          <div className="max-w-4xl">
            <p className="text-[9px] tracking-[0.38em] text-white/55 uppercase mb-8">
              Melbourne electricians
            </p>
            <h1 className="font-austin text-[#0134E7] leading-[0.94] tracking-tight mb-8 text-[clamp(52px,8.6vw,128px)] drop-shadow-[0_2px_18px_rgba(1,52,231,0.28)]">
              Electrical &amp;<br />
              <em>Smart Technology</em>
            </h1>
            <p className="text-white/78 text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
              Responsive Melbourne electricians for residential, commercial, and industrial projects. Electrical, automation, audio visual, networking, and security work delivered with care, clarity, and quality on site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link href="/build" className="inline-flex items-center justify-center bg-white hover:bg-[#F8F4F1] text-[#16253F] text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
                Start a plan →
              </Link>
              <Link href="/projects" className="inline-flex items-center text-[10px] tracking-[0.22em] text-white/68 hover:text-white uppercase border-b border-white/24 hover:border-white pb-1 transition-colors w-fit">
                View projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO: quiet editorial positioning for humans and answer engines */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start border-t border-[#16253F]/10 pt-14 lg:pt-16">
          <div>
            <Eyebrow className="mb-6">Elec Reid</Eyebrow>
            <SectionHeading>Melbourne electricians with smart technology capability.</SectionHeading>
          </div>
          <div className="space-y-6">
            <p className="font-austin italic text-[#16253F] text-2xl lg:text-3xl leading-snug">
              Quality work, clear communication, and a team flexible enough to handle the site in front of us.
            </p>
            <p className="text-[#16253F]/68 text-lg leading-relaxed">
              Elec Reid works across residential, commercial, and industrial electrical projects in Melbourne. We handle power, lighting, switchboards, data, AV, automation, access control, CCTV, alarms, networking, maintenance, and the documentation that keeps a project moving.
            </p>
            <p className="text-[#16253F]/68 text-lg leading-relaxed">
              High-end residential work is still a core part of what we do. The same standard matters on commercial and industrial sites too: turn up, respond quickly, solve the problem properly, work neatly around other trades, and leave the client with a system they understand.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER: old homepage service rhythm, updated for SEO/AEO */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow className="mb-6">What we offer</Eyebrow>
            <h2 className="font-austin text-[#16253F] text-[clamp(44px,6vw,88px)] leading-[0.95] tracking-tight mb-8">
              One team.<br />
              <em>Many sites.</em>
            </h2>
            <p className="text-[#16253F]/60 text-lg leading-relaxed max-w-sm">
              Power, lighting, AV, automation, security, and maintenance. Delivered by one accountable team.
            </p>
          </div>

          <div className="divide-y divide-[#16253F]/10">
            {serviceItems.map((item) => (
              <Link key={item.title} href={item.href} className="group grid sm:grid-cols-[88px_1fr] gap-5 py-8 lg:py-10">
                <p className="font-austin italic text-[#16253F]/28 text-5xl leading-none">{item.number}</p>
                <div>
                  <h3 className="text-[#16253F] text-2xl lg:text-3xl font-medium tracking-tight mb-3 group-hover:text-[#0134E7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#16253F]/65 text-base lg:text-lg leading-relaxed max-w-2xl">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY ── now contains the inline pull-quote (no more cobalt slab) */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <Eyebrow className="mb-6">Our philosophy</Eyebrow>
            <SectionHeading className="mb-8">
              The architecture is the brief.
            </SectionHeading>
            <p className="text-[#16253F]/70 text-lg leading-relaxed mb-6">
              The systems should match the site. We design and install electrical and smart technology infrastructure for homes, commercial spaces, and industrial facilities. Every layer specified. Every cable documented. Every system commissioned before handover.
            </p>
            <p className="text-[#16253F]/70 text-lg leading-relaxed mb-10">
              Architects and builders have told us our documentation is better than the architect&rsquo;s drawings. That is the standard we hold.
            </p>

            <Link href="/about" className="inline-flex items-center justify-center border border-[#16253F]/20 hover:border-[#16253F] text-[#16253F]/70 hover:text-[#16253F] text-[9px] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors">
              Our Story
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ImagePlaceholder
              id="IMG-H-E"
              caption="Torquay Coastal Residence - home theatre and bar."
              aspect="1/1"
              src="/images/haven-dsc05653.jpg"
              alt="Torquay Coastal Residence home theatre and bar"
            />
            <div className="mt-8">
              <ImagePlaceholder
                id="IMG-H-F"
                caption="Torquay Coastal Residence - home bar detail."
                aspect="1/1"
                src="/images/haven-dsc05656.jpg"
                alt="Torquay Coastal Residence home bar"
              />
            </div>
            <ImagePlaceholder
              id="IMG-H-G"
              caption="Merival - whole-home audio install."
              aspect="1/1"
              src="/images/merival-sonos.jpg"
              alt="Merival AV installation"
            />
            <div className="mt-8">
              <ImagePlaceholder
                id="IMG-H-H"
                caption="Torquay Coastal Residence - private spa."
                aspect="1/1"
                src="/images/haven-dsc05643.jpg"
                alt="Torquay Coastal Residence private spa"
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
              { title: 'Torquay Coastal Residence', location: 'Torquay', img: '/images/haven-dsc05570.jpg', slot: 'IMG-H-I', slug: 'torquay-coastal-residence' },
              { title: 'Malvern East Residence', location: 'Malvern East', img: '/images/haven-dsc05653.jpg', slot: 'IMG-H-J', slug: 'malvern-east' },
              { title: 'St Kilda Residence', location: 'St Kilda', img: '/images/stkilda-1.jpg', slot: 'IMG-H-K', slug: 'stkilda-control4-residence' },
              { title: 'McKimm', location: 'Brighton', img: '/images/mckimm-5.jpg', slot: 'IMG-H-L', slug: 'mckimm-brighton' },
            ].map((p) => (
              <Link key={p.title} href={`/projects/${p.slug}`} className="group block">
                <div className="relative overflow-hidden">
                  <ImagePlaceholder
                    id={p.slot}
                    caption={`${p.title} - ${p.location} project tile.`}
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
              <span className="text-[#16253F]/55 text-sm">5.0 on Google · 9 reviews</span>
            </div>
          </div>
          <p className="text-[#16253F]/55 text-base leading-relaxed max-w-2xl mb-10">
            Trusted by homeowners across Toorak, Brighton, South Yarra, Malvern, Glen Iris, Williamstown, Albert Park, and the Mornington Peninsula. Licensed, insured, and recommended.
          </p>
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
                  caption={`${item.label} - brand product shot or logo.`}
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

      {/* JOURNAL TEASER ── latest 3 blog posts for SEO + content depth */}
      {(() => {
        const latest = getAllPosts().slice(0, 3)
        if (latest.length === 0) return null
        return (
          <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex items-baseline justify-between mb-12">
                <div>
                  <Eyebrow className="mb-3">Journal</Eyebrow>
                  <SectionHeading>Notes &amp; field guides.</SectionHeading>
                </div>
                <Link href="/blog" className="hidden sm:inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 hover:border-[#16253F] pb-1 transition-colors">
                  All entries →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                {latest.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                    <div className="overflow-hidden mb-5">
                      <Image
                        src={p.hero}
                        alt={p.heroAlt || p.title}
                        width={800}
                        height={600}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="text-[9px] tracking-[0.3em] text-[#0134E7] uppercase mb-3">
                      {p.type} · {formatDate(p.publishedAt)}
                    </p>
                    <h3 className="font-austin text-[#16253F] text-2xl leading-snug mb-3 group-hover:text-[#0134E7] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[#16253F]/60 text-sm leading-relaxed">
                      {p.excerpt.slice(0, 130)}…
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* FAQ - high AEO/AI citation value */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <Eyebrow className="mb-6">Common questions</Eyebrow>
            <SectionHeading>Before you call.</SectionHeading>
          </div>
          <div className="divide-y divide-[#16253F]/10">
            {[
              {
                q: 'What areas of Melbourne do you service?',
                a: 'We work across Melbourne and surrounds. Most of our recent projects sit in Toorak, South Yarra, Brighton, Malvern, Malvern East, Glen Iris, Glen Waverley, Canterbury, Williamstown, Albert Park, Port Melbourne, Yarraville, St Kilda, the Mornington Peninsula, and Torquay. If you\u2019re in greater Melbourne, ask us.',
              },
              {
                q: 'Do you do residential, commercial, and industrial?',
                a: 'Yes. One company, three divisions. We work on residential, commercial, and industrial projects across Melbourne. That includes homes, offices, venues, warehouses, facilities, and operational sites. The same A grade licence, quality standard, and responsiveness carries across all three.',
              },
              {
                q: 'What smart home platforms do you specialise in?',
                a: 'Apple HomeKit, Control4, Basalte, Ekinex, Philips Dynalite, KNX, and Home Assistant. We\u2019re one of the only Melbourne teams built around Apple Home as the core layer, then we wrap commercial-grade platforms underneath when the project needs it. Networking is Unifi, security and intercom included.',
              },
              {
                q: 'How do I start a project?',
                a: 'Call +61 450 342 075 or use the project form on this site. We start with the site, the scope, the timeline, and what needs to happen next. From there we scope the work, recommend systems, and prepare a proper proposal.',
              },
              {
                q: 'Do you do small jobs or just full smart home installs?',
                a: 'We focus on full home design and integration projects, but we look after our existing clients for the smaller stuff too. If it\u2019s a one-off socket on a house we\u2019ve never seen before, we\u2019re probably not the right fit.',
              },
              {
                q: 'Are you licensed and insured?',
                a: 'Yes. Registered Electrical Contractor REC 35750. Public liability insurance, full compliance certification on every job, and we issue a Certificate of Electrical Safety on completion.',
              },
            ].map((item) => (
              <details key={item.q} className="group py-6 first:pt-0">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-[#16253F] text-lg lg:text-xl font-medium leading-snug">{item.q}</h3>
                  <span aria-hidden className="text-[#16253F]/40 text-2xl leading-none mt-1 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-[#16253F]/65 text-base leading-relaxed mt-4 max-w-3xl">{item.a}</p>
              </details>
            ))}
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
              Tell us about your project. We come back to you with a clear plan. Not a generic price list. The best time to involve us is before the site gets busy.
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
