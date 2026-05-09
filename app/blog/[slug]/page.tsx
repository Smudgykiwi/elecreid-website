import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getAllPostSlugs, getAllPosts, getPost, formatDate } from '../lib'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Journal · Elec Reid' }
  return {
    title: `${post.title} | Elec Reid Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://elecreid.com/blog/${post.slug}`,
      siteName: 'Elec Reid',
      images: [{ url: `https://elecreid.com${post.hero}` }],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const others = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://elecreid.com/blog/${post.slug}#post`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://elecreid.com/blog/${post.slug}` },
    headline: post.title,
    description: post.excerpt,
    image: `https://elecreid.com${post.hero}`,
    author: {
      '@type': 'Person',
      name: post.author,
      worksFor: { '@id': 'https://elecreid.com/#organization' },
    },
    publisher: { '@id': 'https://elecreid.com/#organization' },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    keywords: post.tags.join(', '),
    articleSection: post.type,
    inLanguage: 'en-AU',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elecreid.com' },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: 'https://elecreid.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://elecreid.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#16253F] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.hero}
            alt={post.heroAlt || post.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16253F] via-[#16253F]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-md mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-16 lg:pb-24">
          <p className="text-[9px] tracking-[0.4em] text-white/45 uppercase mb-6">
            {post.type} · {formatDate(post.publishedAt)} · {post.readingMinutes} min read
          </p>
          <h1 className="font-austin text-white text-[clamp(40px,5.5vw,72px)] leading-[1.05] tracking-tight mb-8">
            {post.title}
          </h1>
          <p className="text-white/65 text-lg lg:text-xl leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
          <p className="text-white/40 text-sm tracking-wide mt-8">
            By {post.author}
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white px-6 lg:px-10 py-16 lg:py-24">
        <div
          className="max-w-prose mx-auto prose-elecreid"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {post.tags.length > 0 && (
          <div className="max-w-prose mx-auto mt-16 pt-8 border-t border-[#16253F]/10">
            <p className="text-[9px] tracking-[0.35em] text-[#16253F]/40 uppercase mb-4">Tags</p>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[10px] tracking-[0.15em] border border-[#16253F]/20 px-3 py-1.5 text-[#16253F]/55">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* More posts */}
      {others.length > 0 && (
        <section className="bg-[#F8F4F1] px-6 lg:px-16 py-20 lg:py-24">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[10px] tracking-[0.3em] text-[#16253F]/40 uppercase mb-10">Keep reading</p>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
              {others.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="overflow-hidden mb-6">
                    <Image
                      src={p.hero}
                      alt={p.heroAlt || p.title}
                      width={1000}
                      height={750}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] text-[#0134E7] uppercase mb-3">
                    {p.type} · {formatDate(p.publishedAt)}
                  </p>
                  <h3 className="font-austin text-[#16253F] text-2xl lg:text-3xl leading-snug mb-3 group-hover:text-[#0134E7] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#16253F]/60 text-base leading-relaxed">{p.excerpt}</p>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/blog" className="inline-flex items-center text-[10px] tracking-[0.22em] text-[#16253F] uppercase font-medium border-b border-[#16253F]/30 hover:border-[#16253F] pb-1 transition-colors">
                All journal entries →
              </Link>
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
