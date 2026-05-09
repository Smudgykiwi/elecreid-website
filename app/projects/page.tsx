import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

const projects = [
  {
    title: 'Haven Court',
    location: 'Torquay, VIC',
    desc: 'A coastal architectural build that needed to feel like a private resort. We designed and installed full WiFi and 5G boosters across the property, multi-room TV and audio, a dedicated home cinema, the AV for an in-house wellness centre, and the structured networking and free-to-air infrastructure underneath it all. One system. The whole house, online.',
    tags: ['WiFi & 5G', 'Home Cinema', 'Wellness AV', 'Multi-room Audio', 'Networking', 'FTA TV'],
    hero: '/images/haven-dsc05570.jpg',
    gallery: ['/images/haven-dsc05578.jpg', '/images/haven-dsc05653.jpg', '/images/haven-dsc05656.jpg'],
  },
  {
    title: 'McKimm',
    location: 'Brighton, VIC',
    desc: 'A new build by McKimm that needed sound everywhere, inside and out. We installed full WiFi and structured networking, every TV and AV system in the house, three Sonos Arcs across the main living spaces, twelve indoor speakers, and twelve Bose garden bollards. Enough sound to wake up Brighton, with the control to keep it civilised.',
    tags: ['Sonos', 'Bose', 'Garden Audio', 'Multi-room AV', 'Unifi Networking'],
    hero: '/images/mckimm-3.jpg',
    gallery: ['/images/mckimm-1.jpg', '/images/mckimm-4.jpg'],
  },
  {
    title: 'Fitzroy Street',
    location: 'St Kilda, VIC',
    desc: 'A four-floor St Kilda residence run end-to-end on a full Control4 system. Lighting on every floor, heating and cooling, security, cameras, access control on gates and doors, and a custom rooftop lighting fitout. Unifi WiFi and networking throughout. One platform, one app, every system speaking the same language.',
    tags: ['Control4', 'Access Control', 'Security', 'Cameras', 'Custom Rooftop Lighting', 'Unifi'],
    hero: '/images/stkilda-1.jpg',
    gallery: ['/images/stkilda-2.jpg', '/images/stkilda-3.jpg', '/images/stkilda-4.jpg'],
  },
  {
    title: 'Merival',
    location: 'Melbourne, VIC',
    desc: 'A contemporary Melbourne residence wired for whole-home audio and AV. Control4 automation, Sonos distributed across the home, and Samsung displays throughout. One-touch command of every room from a single interface.',
    tags: ['Control4', 'Sonos', 'Samsung', 'Multi-room AV'],
    hero: '/images/merival-sonos.jpg',
    gallery: ['/images/merival-samsung.jpg', '/images/merival-c4screen.jpg'],
  },
  {
    title: 'Flinders',
    location: 'Flinders, VIC',
    desc: 'A three-floor Mornington Peninsula home running on full Control4. Lighting across every floor, heating and cooling, hydronic underfloor heating, security, cameras, access control on gates and doors, and a custom rooftop lighting fitout. Unifi WiFi and networking throughout. Built for a coastal home that runs itself.',
    tags: ['Control4', 'Underfloor Heating', 'Access Control', 'Security', 'Custom Rooftop Lighting', 'Unifi'],
    hero: '/images/stkilda-1.jpg',
    gallery: [],
  },
  {
    title: 'Malvern East',
    location: 'Malvern East, VIC',
    desc: 'A premium Malvern East home built around Apple Home as the control layer. Core Smart Home wall switches, KNX relays and dimmers, DALI-compatible lighting fixtures, AirTouch 5 climate integration, Bromic heat strips, and Big Ass Fans \u2014 every system pulled into Apple Home and Siri. Sonos audio throughout, Unifi networking and intercom, and access control on gates and doors. Everything, in one app.',
    tags: ['Apple Home', 'KNX', 'DALI', 'Core Smart Home', 'Sonos', 'AirTouch 5', 'Bromic', 'Big Ass Fans', 'Unifi'],
    hero: '/images/haven-dsc05653.jpg',
    gallery: [],
  },
  {
    title: 'West Footscray',
    location: 'West Footscray, VIC',
    desc: 'A full electrical install paired with a complete smart home rollout. Apple Home at the centre, Control4 wall switches on the front end, Cbus relays and dimmers handling the lighting load, Sonos audio, AirTouch 5 climate integration, and Unifi networking and intercom underneath. Full Siri integration so every system in the house responds to a sentence.',
    tags: ['Full Electrical', 'Apple Home', 'Control4', 'Cbus', 'Sonos', 'AirTouch 5', 'Unifi', 'Siri'],
    hero: '/images/merival-sonos.jpg',
    gallery: [],
  },
  {
    title: 'Toorak',
    location: 'Toorak, VIC',
    desc: 'A full electrical rewire of a Toorak residence, plus an end-to-end Control4 fitout. KNX lighting and blind control, Core Smart Home wall switches, heating and cooling, security, cameras, and access control on gates and doors. Unifi WiFi and networking throughout. Audio runs on WiiM amps with Triad speakers \u2014 hi-fi performance, distributed across the home, controlled from one platform.',
    tags: ['Full Rewire', 'Control4', 'KNX', 'Core Smart Home', 'WiiM', 'Triad', 'Access Control', 'Security', 'Cameras', 'Unifi'],
    hero: '/images/haven-dsc05653.jpg',
    gallery: [],
  },
  {
    title: 'Malvern',
    location: 'Malvern, VIC',
    desc: 'A full lighting upgrade across a Malvern home, plus TV installations and a dedicated home cinema fitout. The kind of project where the lighting becomes part of the architecture, not an afterthought.',
    tags: ['Lighting Upgrade', 'Home Cinema', 'TV Install'],
    hero: '/images/malvern-cinema-1.jpg',
    gallery: ['/images/malvern-2.jpg'],
  },
]

export default function Projects() {
  return (
    <>
      <Nav />
      <Breadcrumbs items={[
        { name: 'Home', url: 'https://elecreid.com' },
        { name: 'Projects', url: 'https://elecreid.com/projects' },
      ]} />
      {/* Header */}
      <section className="bg-[#F8F4F1] px-6 lg:px-10 pt-36 pb-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-6">Our Work</p>
          <h1 className="font-austin text-[#0134E7] text-6xl lg:text-8xl xl:text-[120px] leading-none">
            Projects.
          </h1>
        </div>
      </section>

      {/* Project list */}
      <section className="bg-white px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto divide-y divide-[#1A1A1A]/10">
          {projects.map((project, i) => (
            <div key={project.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start py-16 first:pt-0`}>
              {/* Image block */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="overflow-hidden mb-2">
                  <Image
                    src={project.hero}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {project.gallery.length > 0 && (
                  <div className={`grid gap-2 ${project.gallery.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {project.gallery.map((img, j) => (
                      <Image key={j} src={img} alt={`${project.title} ${j + 2}`} width={400} height={300} className="w-full aspect-square object-cover" />
                    ))}
                  </div>
                )}
              </div>

              {/* Text block */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} lg:pt-4`}>
                <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-4">{project.location}</p>
                <h2 className="font-austin text-4xl lg:text-5xl text-[#1A1A1A] mb-6">{project.title}</h2>
                <p className="text-[#1A1A1A]/60 leading-relaxed mb-8 text-lg">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-[0.15em] border border-[#1A1A1A]/20 px-3 py-1.5 text-[#1A1A1A]/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl">Your project could be next.</h2>
          <Link
            href="/build"
            className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors whitespace-nowrap"
          >
            BUILD YOUR HOME →
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
