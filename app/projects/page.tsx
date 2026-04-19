import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const projects = [
  {
    title: 'Haven Court',
    location: 'Torquay, VIC',
    desc: 'Architecturally integrated smart home in a striking custom build. Whole-home climate control, automated louvre screens, structured networking, multi-room AV, and comprehensive lighting design.',
    tags: ['Smart Home', 'Climate Control', 'Automated Louvres', 'AV', 'Networking'],
    hero: '/images/haven-1.jpg',
    gallery: ['/images/haven-6.jpg', '/images/haven-dsc05589.jpg', '/images/haven-7.jpg'],
  },
  {
    title: 'McKimm',
    location: 'Brighton, VIC',
    desc: 'Full residential smart home integration across a luxury new build. Apple HomeKit automation, Unifi networking, Lutron lighting control, Sonos multi-room audio, outdoor AV, and pool automation.',
    tags: ['Apple HomeKit', 'Unifi', 'Lutron', 'Sonos', 'Pool Automation'],
    hero: '/images/mckimm-3.jpg',
    gallery: ['/images/mckimm-1.jpg', '/images/mckimm-4.jpg'],
  },
  {
    title: 'Fitzroy Street Rooftop',
    location: 'St Kilda, VIC',
    desc: 'Rooftop entertainment space with integrated lighting automation, outdoor audio, and smart control. Festoon lighting scenes, multi-zone speakers, and seamless indoor-outdoor integration.',
    tags: ['Outdoor AV', 'Lighting Automation', 'Smart Control', 'Speakers'],
    hero: '/images/stkilda-1.jpg',
    gallery: ['/images/stkilda-2.jpg', '/images/stkilda-3.jpg', '/images/stkilda-4.jpg'],
  },
  {
    title: 'Merival',
    location: 'Melbourne, VIC',
    desc: 'Multi-room AV integration across a contemporary Melbourne residence. Control4 automation, Sonos distributed audio, and Samsung display throughout. One touch command of every room.',
    tags: ['Multi-room AV', 'Control4', 'Sonos', 'Samsung'],
    hero: '/images/merival-sonos.jpg',
    gallery: ['/images/merival-samsung.jpg', '/images/merival-c4screen.jpg'],
  },
  {
    title: 'Fitzroy Street Rooftop',
    location: 'St Kilda, VIC',
    desc: 'Outdoor rooftop entertainment automation for a premium St Kilda venue. Weatherproof audio, automated lighting scenes, and seamless integration with the indoor system.',
    tags: ['Outdoor Entertainment', 'Automation', 'Lighting Scenes'],
    hero: '/images/stkilda-2.jpg',
    gallery: ['/images/stkilda-1.jpg'],
  },
  {
    title: 'Malvern East',
    location: 'Malvern East, VIC',
    desc: 'Purpose-built home cinema installation in a Malvern East residence. Acoustic treatment, 4K projection, Dolby Atmos surround sound, and automated lighting and blinds controlled from a single panel.',
    tags: ['Home Cinema', 'Dolby Atmos', 'Projection', 'Acoustic Treatment'],
    hero: '/images/malvern-cinema-1.jpg',
    gallery: ['/images/malvern-2.jpg'],
  },
]

export default function Projects() {
  return (
    <>
      <Nav />
      {/* Header */}
      <section className="bg-[#F7F4F0] px-6 lg:px-10 pt-36 pb-12">
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
