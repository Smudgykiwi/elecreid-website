import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    slug: 'mckimm-brighton',
    title: 'McKimm',
    location: 'Brighton, VIC',
    desc: 'Full residential smart home integration. Apple HomeKit, Unifi networking, Lutron lighting control, Sonos multi-room audio, and outdoor automation.',
    tags: ['Apple HomeKit', 'Unifi', 'Lutron', 'Sonos', 'Outdoor AV'],
    images: ['/images/mckimm-5.jpg', '/images/mckimm-3.jpg', '/images/mckimm-1.jpg', '/images/mckimm-2.jpg'],
    hero: '/images/mckimm-5.jpg',
  },
  {
    slug: 'haven-court-torquay',
    title: 'Haven Court',
    location: 'Torquay, VIC',
    desc: 'Architecturally integrated smart home in a stunning custom build. Climate control, automated louvres, whole-home AV, and structured networking throughout.',
    tags: ['Smart Home', 'Climate Control', 'AV', 'Networking', 'Lighting'],
    images: ['/images/haven-1.jpg', '/images/haven-6.jpg', '/images/haven-5.jpg', '/images/haven-7.jpg'],
    hero: '/images/haven-1.jpg',
  },
  {
    slug: 'malvern-cinema',
    title: 'Parslow Street',
    location: 'Malvern, VIC',
    desc: 'Dedicated home cinema installation with freestanding tower speakers, surround sound, and integrated AV control.',
    tags: ['Home Cinema', 'AV', 'Acoustic Treatment'],
    images: ['/images/malvern-cinema-1.jpg'],
    hero: '/images/malvern-cinema-1.jpg',
  },
]

export default function Projects() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F7F4F0] px-6 lg:px-10 pt-36 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-6">Our Work</p>
          <h1 className="font-austin text-[#0134E7] text-6xl lg:text-8xl xl:text-[120px] leading-none">
            Projects.
          </h1>
        </div>
      </section>

      {/* Project list */}
      <section className="bg-white px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto space-y-24">
          {projects.map((project, i) => (
            <div key={project.slug} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={project.hero}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full aspect-[4/3] object-cover"
                />
                {project.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {project.images.slice(1, 4).map((img, j) => (
                      <Image key={j} src={img} alt={`${project.title} ${j + 2}`} width={400} height={300} className="w-full aspect-square object-cover" />
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className={`lg:pt-6 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-4">{project.location}</p>
                <h2 className="font-austin text-4xl lg:text-5xl text-[#1A1A1A] mb-6">{project.title}</h2>
                <p className="text-[#1A1A1A]/60 leading-relaxed mb-8 text-lg">{project.desc}</p>
                <div className="flex gap-3 flex-wrap">
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
      <section className="bg-[#1A1A1A] px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="font-austin text-white text-4xl lg:text-5xl">Your project could be next.</h2>
          <Link
            href="/build"
            className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-10 py-4 transition-colors whitespace-nowrap"
          >
            BUILD YOUR HOME →
          </Link>
        </div>
      </section>
    </>
  )
}
