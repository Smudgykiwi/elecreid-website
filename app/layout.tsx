import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elec Reid | Smart Home & Electrical · Melbourne',
  description: 'Melbourne\'s only residential electrical company built around Apple HomeKit. Design, install, program, handover one team, one outcome.',
  keywords: 'smart home Melbourne, Apple HomeKit installer Melbourne, residential electrician Melbourne, home automation Melbourne, Unifi networking Melbourne',
  openGraph: {
    title: 'Elec Reid | Smart Home & Electrical · Melbourne',
    description: 'Control, considered. Design, install, program, handover one team, one outcome.',
    url: 'https://elecreid.com',
    siteName: 'Elec Reid',
    locale: 'en_AU',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://elecreid.com/#organization',
      name: 'Elec Reid',
      url: 'https://elecreid.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://elecreid.com/logos/logo-text-color4.svg',
        width: 222,
        height: 59,
      },
      description:
        'Melbourne electricians specialising in residential smart homes, commercial AV and technology, and industrial electrical. One company. Three divisions.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      telephone: '+61450342075',
      areaServed: { '@type': 'City', name: 'Melbourne' },
      sameAs: [
        'https://www.instagram.com/elecreid',
        'https://www.facebook.com/elecreid',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://elecreid.com/#website',
      name: 'Elec Reid',
      url: 'https://elecreid.com',
      publisher: { '@id': 'https://elecreid.com/#organization' },
    },
    {
      '@type': 'ElectricalContractor',
      '@id': 'https://elecreid.com/#business',
      name: 'Elec Reid',
      url: 'https://elecreid.com',
      telephone: '+61450342075',
      priceRange: '$$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      areaServed: [
        'Melbourne',
        'Toorak',
        'South Yarra',
        'Brighton',
        'St Kilda',
        'Torquay',
        'Malvern East',
        'Glen Waverley',
        'Malvern',
        'Glen Iris',
        'Canterbury',
        'Williamstown',
        'Yarraville',
        'Port Melbourne',
        'Albert Park',
        'Flinders',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        ratingCount: '9',
        reviewCount: '9',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
