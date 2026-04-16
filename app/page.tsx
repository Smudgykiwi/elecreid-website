import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Elec Reid | Smart Home, Commercial & Industrial Electrical · Melbourne',
  description: 'Elec Reid. Residential smart home, commercial AV, and industrial electrical across Melbourne. Apple HomeKit specialists.',
}

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen bg-[#16253F] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/haven-dsc05570.jpg"
            alt="Elec Reid — Melbourne smart home and electrical"
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
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/residential" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
              Explore Our Work →
            </Link>
            <Link href="/build" className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white text-[9px] tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors whitespace-nowrap">
              Build Your Home
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">What we do</p>
          <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-6xl leading-tight max-w-4xl mb-16">
            One company. Three divisions.
          </h2>
          <div className="grid lg:grid-cols-3 gap-4">

            {/* Residential */}
            <Link href="/residential" className="group relative overflow-hidden block">
              <div className="aspect-[3/4] overflow-hidden">
                <Image src="/images/haven-dsc05653.jpg" alt="Residential smart home Melbourne" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16253F]/80 via-[#16253F]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-3">01</p>
                <h3 className="font-austin text-white text-3xl mb-3">Residential</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">Smart homes. Apple HomeKit. AV. Networking. Security. Everything that makes a home work the way it should.</p>
                <span className="inline-flex items-center justify-center bg-white text-[#16253F] text-[9px] tracking-[0.2em] uppercase px-6 py-3 rounded-full font-medium group-hover:bg-[#0134E7] group-hover:text-white transition-colors">
                  Explore Residential
                </span>
              </div>
            </Link>

            {/* Commercial */}
            <Link href="/commercial" className="group relative overflow-hidden block">
              <div className="aspect-[3/4] overflow-hidden">
                <Image src="/images/eclat-bureau.webp" alt="Commercial AV Melbourne" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16253F]/80 via-[#16253F]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-3">02</p>
                <h3 className="font-austin text-white text-3xl mb-3">Commercial</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">Hospitality. Offices. Retail. Event spaces. Technology that serves your business and your clients.</p>
                <span className="inline-flex items-center justify-center bg-white text-[#16253F] text-[9px] tracking-[0.2em] uppercase px-6 py-3 rounded-full font-medium group-hover:bg-[#0134E7] group-hover:text-white transition-colors">
                  Explore Commercial
                </span>
              </div>
            </Link>

            {/* Industrial */}
            <Link href="/industrial" className="group relative overflow-hidden block">
              <div className="aspect-[3/4] overflow-hidden">
                <Image src="/images/industrial-warehouse.jpg" alt="Industrial electrical Melbourne" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16253F]/80 via-[#16253F]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-3">03</p>
                <h3 className="font-austin text-white text-3xl mb-3">Industrial</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">Factories. Facilities. Warehouses. Switchboards, compliance, access control, and maintenance.</p>
                <span className="inline-flex items-center justify-center bg-white text-[#16253F] text-[9px] tracking-[0.2em] uppercase px-6 py-3 rounded-full font-medium group-hover:bg-[#0134E7] group-hover:text-white transition-colors">
                  Explore Industrial
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-6">Our Philosophy</p>
            <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8">
              A smart home is not a product.
            </h2>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-6">
              It is a relationship between architecture, automation and the people who live there. Elec Reid specifies, installs and commissions systems where every decision is deliberate.
            </p>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-10">
              From the switch that meets your hand each morning to the control platform that ties it all together. One team. Everything works.
            </p>
            <Link href="/about" className="inline-flex items-center justify-center border border-[#1A1A1A]/20 hover:border-[#16253F] text-[#1A1A1A]/60 hover:text-[#16253F] text-[9px] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors">
              Our Story
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden aspect-square">
              <Image src="/images/haven-dsc05599.jpg" alt="Haven Court spiral staircase" width={600} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden aspect-square mt-8">
              <Image src="/images/haven-dsc05656.jpg" alt="Haven Court home bar" width={600} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden aspect-square">
              <Image src="/images/merival-sonos.jpg" alt="Merival AV installation" width={600} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden aspect-square mt-8">
              <Image src="/images/haven-dsc05771.jpg" alt="Haven Court exterior" width={600} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-[#0134E7] px-6 lg:px-16 py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-austin italic text-white text-3xl lg:text-5xl leading-tight max-w-4xl">
            &ldquo;Good taste, implied confidence, and a pure nerdy love for tech.&rdquo;
          </p>
          <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mt-6">How a client described our team</p>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-3">Recent Work</p>
              <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl">Melbourne projects.</h2>
            </div>
            <Link href="/projects" className="hidden sm:block text-[9px] tracking-[0.2em] text-[#0134E7] uppercase hover:underline">
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: 'Haven Court', location: 'Torquay', img: '/images/haven-dsc05570.jpg' },
              { title: 'McKimm', location: 'Brighton', img: '/images/mckimm-5.jpg' },
              { title: 'Fitzroy St', location: 'St Kilda', img: '/images/stkilda-1.jpg' },
              { title: 'Merival', location: 'Melbourne', img: '/images/merival-sonos.jpg' },
            ].map((p) => (
              <Link key={p.title} href="/projects" className="group block">
                <div className="relative overflow-hidden aspect-square">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16253F]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-austin text-white text-lg leading-tight">{p.title}</p>
                    <p className="text-white/50 text-[8px] tracking-[0.2em] uppercase">{p.location}</p>
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
              <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-3">Google Reviews</p>
              <h2 className="font-austin text-[#1A1A1A] text-4xl lg:text-5xl">What clients say.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#0134E7]">★</span>)}
              </div>
              <span className="text-[#1A1A1A]/50 text-sm">5.0 on Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Su Mei Koh', suburb: 'Toorak', text: 'Joe and his team came highly recommended, and I\'m so grateful for their hard work. The smart home system works flawlessly and the finish is impeccable.' },
              { name: 'Robbie Smarrelli', suburb: 'South Yarra', text: 'Joe and his team provided excellent service with expert workmanship. They were reliable, professional, and the attention to detail was outstanding.' },
              { name: 'Andy Fisher', suburb: 'Brighton', text: 'Joe\'s an absolute legend. Not just a top electrician but a great bloke too. A genius when it comes to smart home tech. Couldn\'t recommend highly enough.' },
            ].map((review) => (
              <div key={review.name} className="border-t-2 border-[#16253F]/10 pt-8">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#0134E7] text-sm">★</span>)}
                </div>
                <p className="font-austin italic text-[#1A1A1A] text-xl leading-snug mb-6">&ldquo;{review.text}&rdquo;</p>
                <p className="text-[#1A1A1A] text-sm font-medium">{review.name}</p>
                <p className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase mt-1">{review.suburb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS WE USE */}
      <section className="bg-[#F5F2EE] px-6 lg:px-16 py-16">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#1A1A1A]/30 uppercase mb-10">Brands we install</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/basalte-fibonacci.jpg', label: 'Basalte' },
              { src: '/images/ekinex-proxima.jpg', label: 'Ekinex' },
              { src: '/images/control4-lux.jpg', label: 'Control4' },
              { src: '/images/apple-home.png', label: 'Apple Home' },
            ].map((item) => (
              <Link key={item.label} href="/brands" className="group block">
                <div className="aspect-square overflow-hidden bg-white">
                  <Image src={item.src} alt={item.label} width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[9px] tracking-[0.2em] text-[#1A1A1A]/35 uppercase mt-3">{item.label}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/brands" className="inline-flex items-center text-[9px] tracking-[0.2em] text-[#0134E7] uppercase hover:underline">
              View all brands →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-6">Next Steps</p>
            <h2 className="font-austin text-white text-4xl lg:text-6xl leading-tight mb-3">
              Begin your project.
            </h2>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              The best smart homes start with a conversation. Before plans are drawn, before cables are run.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link href="/build" className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              Build Your Home →
            </Link>
            <a href="tel:+61450342075" className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/50 hover:text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap">
              +61 450 342 075
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
