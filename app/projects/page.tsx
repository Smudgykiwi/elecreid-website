import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { projects } from './data'

export const metadata = {
  title: 'Projects | Elec Reid · Smart Home & Electrical Case Studies Melbourne',
  description:
    'A selection of Elec Reid projects across Melbourne and the Mornington Peninsula. Apple Home, Control4, KNX, Sonos, Unifi. Smart home and electrical case studies.',
}

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
          <p className="text-[#16253F]/60 text-lg lg:text-xl max-w-3xl mt-8 leading-relaxed">
            A selection of Elec Reid projects across Melbourne and the Mornington Peninsula. Apple Home, Control4, KNX, Sonos, Unifi, and more. Each one designed, installed, programmed, and documented under one roof.
          </p>
        </div>
      </section>

      {/* Project list */}
      <section className="bg-white px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto divide-y divide-[#1A1A1A]/10">
          {projects.map((project, i) => (
            <div key={project.slug} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start py-16 first:pt-0`}>
              {/* Image block */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="overflow-hidden mb-2">
                    <Image
                      src={project.hero}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Link>
                {project.gallery.length > 0 && (
                  <div className={`grid gap-2 ${project.gallery.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {project.gallery.slice(0, 3).map((img, j) => (
                      <Image key={j} src={img} alt={`${project.title} ${j + 2}`} width={400} height={300} className="w-full aspect-square object-cover" />
                    ))}
                  </div>
                )}
              </div>

              {/* Text block */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} lg:pt-4`}>
                <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/40 uppercase mb-4">{project.location}</p>
                <h2 className="font-austin text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                  <Link href={`/projects/${project.slug}`} className="hover:text-[#0134E7] transition-colors">
                    {project.title}
                  </Link>
                </h2>
                <p className="text-[#1A1A1A]/60 leading-relaxed mb-8 text-lg">{project.desc}</p>
                <div className="flex gap-2 flex-wrap mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-[0.15em] border border-[#1A1A1A]/20 px-3 py-1.5 text-[#1A1A1A]/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 hover:border-[#16253F] pb-1 transition-colors"
                >
                  Read the case study →
                </Link>
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
