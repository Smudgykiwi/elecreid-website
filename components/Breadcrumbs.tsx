/**
 * Breadcrumbs - injects BreadcrumbList JSON-LD for SEO.
 * Visible UI is optional; pass `visible={false}` to keep schema-only.
 *
 * Usage:
 *   <Breadcrumbs items={[
 *     { name: 'Home', url: 'https://elecreid.com' },
 *     { name: 'Residential', url: 'https://elecreid.com/residential' },
 *   ]} />
 */
import Link from 'next/link'

type Crumb = { name: string; url: string }

export default function Breadcrumbs({
  items,
  visible = false,
}: {
  items: Crumb[]
  visible?: boolean
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {visible && (
        <nav
          aria-label="Breadcrumb"
          className="max-w-screen-xl mx-auto px-6 lg:px-16 pt-6 text-[10px] tracking-[0.22em] uppercase text-[#16253F]/50"
        >
          {items.map((c, i) => (
            <span key={c.url}>
              {i > 0 && <span className="mx-2">/</span>}
              {i === items.length - 1 ? (
                <span className="text-[#16253F]/70">{c.name}</span>
              ) : (
                <Link href={c.url.replace('https://elecreid.com', '') || '/'} className="hover:text-[#16253F] transition-colors">
                  {c.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
      )}
    </>
  )
}
