import type { MetadataRoute } from 'next'

const baseUrl = 'https://elecreid.com'

const brandSlugs = [
  'apple-home',
  'basalte',
  'home-assistant',
  'control4',
  'knx',
  'cbus',
  'unifi',
  'sonos',
  'ekinex',
  'core-smart-home',
  'wiim',
  'cameras',
  'security',
  'tp-link',
  'audio',
  'quest',
  'db-audiotechnik',
  'l-acoustics',
  'logitech',
  'qsc',
  'samsung',
  'dynalite',
  'video-wall',
]

const locationSlugs = [
  'torquay',
  'brighton',
  'st-kilda',
  'malvern-east',
  'hawthorn',
  'camberwell',
  'toorak',
  'south-yarra',
  'kew',
  'armadale',
  'richmond',
  'prahran',
  'fitzroy',
  'carlton',
  'glen-waverley',
  'doncaster',
  'eltham',
  'balwyn',
  'canterbury',
  'mont-albert',
  'box-hill',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industrial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/build`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const brandPages: MetadataRoute.Sitemap = brandSlugs.map((slug) => ({
    url: `${baseUrl}/brands/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...brandPages, ...locationPages]
}
