import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getAllPosts, formatDate } from './lib'

export const metadata: Metadata = {
  title: 'Journal | Elec Reid · Notes & Field Guides',
  description:
    'Notes and field guides from Elec Reid. KNX, Apple Home, Control4, Basalte, Sonos, Unifi, and how we build serious smart homes in Melbourne.',
  openGraph: {
    title: 'Journal | Elec Reid',
    description:
      'Notes and field guides from Elec Reid. How we build serious smart homes in Melbourne.',
    url: 'https://elecreid.com/blog',
    siteName: 'Elec Reid',
    type: 'website',
  },
}

export default function Blog() {
  const posts = getAllPosts()
  const [feature, ...rest] = posts

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://elecreid.com/blog#blog',
    name: 'Elec Reid Journal',
    url: 'https://elecreid.com/blog',
    description:
      'Notes and field guides from Elec Reid on smart home, electrical, and AV in Melbourne.',
    publisher: { '@id': 'https://elecreid.com/#organization' },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      '@id': `https://elecreid.com/blog/${p.slug}#post`,
      headline: p.title,
      url: `https://elecreid.com/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt || p.publishedAt,
      author: { '@type': 'Person', name: p.author },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Nav />
      <Breadcrumbs items={[
        { name: 'Home', url: 'https://elecreid.com' },
        { name: 'Journal', url: 'https://elecreid.com/blog' },
      ]} />

      {/* Header */}
      <section className="bg-[#F8F4F1] px-6 lg:px-16 pt-36 pb-16 lg:pb-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.25em] text-[#16253F]/40 uppercase mb-6">Journal</p>
          <h1 className="font-austin text-[#0134E7] text-6xl lg:text-8xl xl:text-[120px] leading-none">
            <em>Notes,</em> &amp; field guides.
          </h1>
          <p className="text-[#16253F]/60 text-lg lg:text-xl max-w-3xl mt-8 leading-relaxed">
            Opinions on the platforms we recommend. Field guides for architects, builders, and homeowners. Written by the team that designs and installs the work.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {feature && (
        <section className="bg-white px-6 lg:px-16 py-16 lg:py-20">
          <div className="max-w-screen-xl mx-auto">
            <Link href={`/blog/${feature.slug}`} className="group block grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="overflow-hidden">
                <Image
                  src={feature.hero}
                  alt={feature.heroAlt || feature.title}
                  width={1400}
                  height={1000}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#0134E7] uppercase mb-5">
                  {feature.type} · {formatDate(feature.publishedAt)}
                </p>
                <h2 className="font-austin text-[#16253F] text-3xl lg:text-5xl leading-tight mb-6 group-hover:text-[#0134E7] transition-colors">
                  {feature.title}
                </h2>
                <p className="text-[#16253F]/65 text-lg leading-relaxed mb-8 max-w-xl">
                  {feature.excerpt}
                </p>
                <span className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 group-hover:border-[#16253F] pb-1 transition-colors">
                  Read the {feature.type.toLowerCase()} →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other posts */}
      {rest.length > 0 && (
        <section className="bg-[#F8F4F1] px-6 lg:px-16 py-16 lg:py-24">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[10px] tracking-[0.3em] text-[#16253F]/40 uppercase mb-10">More from the journal</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {rest.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="overflow-hidden mb-6">
                    <Image
                      src={p.hero}
                      alt={p.heroAlt || p.title}
                      width={800}
                      height={600}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] text-[#0134E7] uppercase mb-3">
                    {p.type} · {formatDate(p.publishedAt)}
                  </p>
                  <h3 className="font-austin text-[#16253F] text-2xl lg:text-3xl leading-snug mb-4 group-hover:text-[#0134E7] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#16253F]/60 text-base leading-relaxed">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#16253F] px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-white/30 uppercase mb-6">Next steps</p>
            <h2 className="font-austin text-white text-3xl lg:text-4xl mb-3">Begin your project.</h2>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Tell us about your project. We come back to you with a clear plan. Not a generic price list. The best time to involve us is before the walls go up.
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
