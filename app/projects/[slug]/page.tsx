import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { projects, getProjectBySlug } from '../data'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    return { title: 'Project · Elec Reid' }
  }
  return {
    title: `${project.title} · ${project.location} | Elec Reid Case Study`,
    description: project.desc,
    openGraph: {
      title: `${project.title} · ${project.location} | Elec Reid`,
      description: project.desc,
      url: `https://elecreid.com/projects/${project.slug}`,
      siteName: 'Elec Reid',
      images: [{ url: `https://elecreid.com${project.hero}` }],
      type: 'article',
    },
  }
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  // Other projects to suggest at the bottom of the page.
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  // Per-project schema: CreativeWork + BreadcrumbList.
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://elecreid.com/projects/${project.slug}#project`,
    name: project.title,
    description: project.desc,
    url: `https://elecreid.com/projects/${project.slug}`,
    image: `https://elecreid.com${project.hero}`,
    locationCreated: {
      '@type': 'Place',
      name: project.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.location.split(',')[0],
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
    },
    creator: { '@id': 'https://elecreid.com/#business' },
    keywords: project.tags.join(', '),
    about: project.scope.join(', '),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elecreid.com' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://elecreid.com/projects' },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://elecreid.com/projects/${project.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#16253F] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.hero}
            alt={`${project.title} - ${project.location}`}
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16253F] via-[#16253F]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pt-36 lg:pt-44 pb-20 lg:pb-28">
          <p className="text-[9px] tracking-[0.4em] text-white/40 uppercase mb-6">
            {project.region} · Case Study
          </p>
          <h1 className="font-austin text-white text-[clamp(56px,9vw,128px)] leading-[0.9] tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-white/55 text-lg lg:text-xl max-w-2xl leading-relaxed">
            {project.location}
          </p>
        </div>
      </section>

      {/* Story + Scope */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
          {/* Story */}
          <div>
            <p className="text-[9px] tracking-[0.35em] text-[#16253F]/40 uppercase mb-6">The project</p>
            <h2 className="font-austin italic text-[#16253F] text-3xl lg:text-4xl leading-snug mb-10 max-w-2xl">
              {project.title} · {project.location}
            </h2>
            <div className="space-y-6 text-[#16253F]/75 text-lg leading-relaxed max-w-2xl">
              {project.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Scope sidebar */}
          <aside className="lg:pt-2">
            <p className="text-[9px] tracking-[0.35em] text-[#16253F]/40 uppercase mb-6">Scope of works</p>
            <ul className="space-y-3 mb-10">
              {project.scope.map((item) => (
                <li key={item} className="text-[#16253F]/75 text-base leading-snug border-b border-[#16253F]/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[9px] tracking-[0.35em] text-[#16253F]/40 uppercase mb-4">Systems & brands</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] border border-[#16253F]/20 px-3 py-1.5 text-[#16253F]/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="bg-white px-6 lg:px-16 py-20 lg:py-28">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[9px] tracking-[0.35em] text-[#16253F]/40 uppercase mb-10">Gallery</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.gallery.map((img, i) => (
                <div key={i} className="overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} - image ${i + 2}`}
                    width={1200}
                    height={1200}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other projects */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-[0.35em] text-[#16253F]/40 uppercase mb-6">More work</p>
          <h2 className="font-austin text-[#16253F] text-3xl lg:text-4xl mb-12">
            Other projects.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {others.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                <div className="overflow-hidden mb-5">
                  <Image
                    src={p.hero}
                    alt={p.title}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-[9px] tracking-[0.3em] text-[#16253F]/40 uppercase mb-2">{p.location}</p>
                <h3 className="font-austin text-[#16253F] text-2xl lg:text-3xl mb-3">{p.title}</h3>
                <p className="text-[#16253F]/60 text-sm leading-relaxed">{p.desc.slice(0, 140)}…</p>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 hover:border-[#16253F] pb-1 transition-colors"
            >
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-6">Next steps</p>
            <h2 className="font-austin text-white text-3xl lg:text-4xl mb-3">
              Begin your project.
            </h2>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Tell us about your project. We come back to you with a clear plan. Not a generic price list. The best time to involve us is before the walls go up.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link
              href="/build"
              className="inline-flex items-center justify-center bg-[#0134E7] hover:bg-[#012ab8] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap"
            >
              Build Your Home →
            </Link>
            <a
              href="tel:+61450342075"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/60 hover:text-white text-[9px] tracking-[0.25em] uppercase px-10 py-5 rounded-full transition-colors whitespace-nowrap"
            >
              +61 450 342 075
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
