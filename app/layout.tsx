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
      email: 'enquiries@elecreid.com',
      areaServed: { '@type': 'State', name: 'Victoria' },
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
      image: 'https://elecreid.com/logos/logo-text-color4.svg',
      url: 'https://elecreid.com',
      telephone: '+61450342075',
      email: 'enquiries@elecreid.com',
      priceRange: '$$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -37.8136,
        longitude: 144.9631,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Registered Electrical Contractor',
        identifier: 'REC 35750',
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
        'Mornington Peninsula',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '9',
        reviewCount: '9',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Su Mei Koh' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            "Joe and his team came highly recommended, and I'm so grateful for their hard work. The smart home system works flawlessly and the finish is impeccable.",
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Robbie Smarrelli' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Joe and his team provided excellent service with expert workmanship. They were reliable, professional, and the attention to detail was outstanding.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Andy Fisher' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            "Joe's an absolute legend. Not just a top electrician but a great bloke too. A genius when it comes to smart home tech. Couldn't recommend highly enough.",
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://elecreid.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What areas of Melbourne do you service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work across Melbourne and surrounds. Most of our recent projects sit in Toorak, South Yarra, Brighton, Malvern, Malvern East, Glen Iris, Glen Waverley, Canterbury, Williamstown, Albert Park, Port Melbourne, Yarraville, St Kilda, the Mornington Peninsula, and Torquay.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you do residential, commercial, and industrial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. One company, three divisions. Most clients come to us for residential smart homes. We also fit out commercial venues with audio visual and networking, and run industrial electrical for warehouses and facilities. The same A grade licence covers all three.',
          },
        },
        {
          '@type': 'Question',
          name: 'What smart home platforms do you specialise in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Apple HomeKit, Control4, Basalte, Ekinex, Philips Dynalite, KNX, and Home Assistant. We are one of the only Melbourne teams built around Apple Home as the core layer, with commercial-grade platforms underneath when needed. Networking is Unifi, security and intercom included.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I start a project with Elec Reid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the Build Your Home form on the website or call +61 450 342 075. Every project starts with a conversation about how you live and what you want the house to do, then we scope the work, recommend systems, and quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you do small jobs or just full smart home installs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We focus on full home design and integration projects, but look after existing clients for smaller jobs too. One-off socket repairs on homes we have not worked on before are usually not the right fit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you licensed and insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Registered Electrical Contractor REC 35750, public liability insured, full compliance certification on every job, and a Certificate of Electrical Safety issued on completion.',
          },
        },
      ],
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
