// Shared project data for /projects (index) and /projects/[slug] (detail).
// Keep titles and slugs stable - they appear in URLs, sitemaps, and schema.

export type Project = {
  slug: string
  title: string
  location: string
  region: 'Melbourne' | 'Mornington Peninsula' | 'Surf Coast' | 'Inner West'
  // Short card description used on /projects listing.
  desc: string
  // Long-form narrative used on the detail page. Two to four paragraphs.
  story: string[]
  // Itemised scope used in the detail page sidebar / schema.
  scope: string[]
  tags: string[]
  hero: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'haven-court',
    title: 'Haven Court',
    location: 'Torquay, VIC',
    region: 'Surf Coast',
    desc: 'A coastal architectural build that needed to feel like a private resort. Full WiFi and 5G boosters, multi-room TV and audio, dedicated home cinema, AV for an in-house wellness centre, and the structured networking and free-to-air infrastructure underneath it all.',
    story: [
      'Haven Court is a coastal architectural build on the Surf Coast that needed to feel like a private resort. Cellular signal at the property was patchy. The brief was full coverage, no dropped calls, no buffering, and a home that ran the way the architecture suggested it would.',
      'We installed full WiFi and 5G boosters across the property. Every room covered, garden included. Multi-room TV and audio throughout the living spaces, plus a dedicated cinema room sized and treated for one reference experience.',
      'The wellness centre was its own AV target. Audio designed for the space, controls that the family can hand to a guest without a tutorial. Underneath all of it, structured cabling and free-to-air TV infrastructure tied together so every room speaks the same language.',
      'One system. The whole house, online. Documented and commissioned before we left.',
    ],
    scope: [
      'WiFi and 5G boosters across the property',
      'Multi-room TV and audio',
      'Dedicated home cinema install',
      'AV for in-house wellness centre',
      'Structured networking',
      'Free-to-air TV infrastructure',
    ],
    tags: ['WiFi & 5G', 'Home Cinema', 'Wellness AV', 'Multi-room Audio', 'Networking', 'FTA TV'],
    hero: '/images/haven-dsc05570.jpg',
    gallery: ['/images/haven-dsc05578.jpg', '/images/haven-dsc05653.jpg', '/images/haven-dsc05656.jpg', '/images/haven-dsc05643.jpg'],
  },
  {
    slug: 'mckimm-brighton',
    title: 'McKimm',
    location: 'Brighton, VIC',
    region: 'Melbourne',
    desc: 'A new build by McKimm that needed sound everywhere, inside and out. Three Sonos Arcs, twelve indoor speakers, twelve Bose garden bollards, full WiFi and structured networking, every TV and AV system in the house.',
    story: [
      'McKimm builds some of Melbourne\u2019s most considered architectural homes. This Brighton residence was no exception. The brief was sound everywhere, inside and out, with the control to keep it civilised.',
      'We installed full WiFi and structured networking, every TV and AV system in the house, three Sonos Arcs across the main living spaces, twelve indoor speakers, and twelve Bose garden bollards through the landscape.',
      'Enough sound to wake up Brighton, with the zoning and scenes to keep it quiet when it needs to be.',
    ],
    scope: [
      'Three Sonos Arcs in primary living zones',
      'Twelve indoor speakers across the home',
      'Twelve Bose garden bollards',
      'Full WiFi and structured networking',
      'Every TV and AV system in the residence',
    ],
    tags: ['Sonos', 'Bose', 'Garden Audio', 'Multi-room AV', 'Unifi Networking'],
    hero: '/images/mckimm-3.jpg',
    gallery: ['/images/mckimm-1.jpg', '/images/mckimm-4.jpg', '/images/mckimm-5.jpg'],
  },
  {
    slug: 'fitzroy-street-stkilda',
    title: 'Fitzroy Street',
    location: 'St Kilda, VIC',
    region: 'Melbourne',
    desc: 'A four-floor St Kilda residence run end to end on a full Control4 system. Lighting on every floor, heating and cooling, security, cameras, access control on gates and doors, and a custom rooftop lighting fitout.',
    story: [
      'A four-floor St Kilda residence built around a full Control4 system. Every layer of the home running on one platform.',
      'Lighting on every floor, programmed in scenes that match how the family actually lives. Heating and cooling tied in. Security and cameras integrated, not bolted on. Access control on gates and doors, all triggered from the same app.',
      'A custom rooftop lighting fitout finishes the build, and Unifi WiFi and networking carry the data load underneath. One platform. One app. Every system speaking the same language.',
    ],
    scope: [
      'Full Control4 platform across four floors',
      'Lighting control on every floor',
      'Heating and cooling integration',
      'Security and CCTV cameras',
      'Access control on gates and doors',
      'Custom rooftop lighting fitout',
      'Unifi WiFi and networking',
    ],
    tags: ['Control4', 'Access Control', 'Security', 'Cameras', 'Custom Rooftop Lighting', 'Unifi'],
    hero: '/images/stkilda-1.jpg',
    gallery: ['/images/stkilda-2.jpg', '/images/stkilda-3.jpg', '/images/stkilda-4.jpg'],
  },
  {
    slug: 'merival',
    title: 'Merival',
    location: 'Melbourne, VIC',
    region: 'Melbourne',
    desc: 'A contemporary Melbourne residence wired for whole-home audio and AV. Control4 automation, Sonos distributed across the home, Samsung displays throughout. One-touch command of every room.',
    story: [
      'A contemporary Melbourne residence with a clear brief. Music and AV in every room, controlled from one place, finished to the standard the architecture deserved.',
      'Control4 handles the automation. Sonos distributes audio across the home. Samsung displays throughout, paired with Control4 touch panels for room-by-room command.',
      'One interface. Every room, ready when the family walks in.',
    ],
    scope: [
      'Control4 automation platform',
      'Sonos distributed audio',
      'Samsung displays throughout',
      'Control4 touch panel control',
    ],
    tags: ['Control4', 'Sonos', 'Samsung', 'Multi-room AV'],
    hero: '/images/merival-sonos.jpg',
    gallery: ['/images/merival-samsung.jpg', '/images/merival-c4screen.jpg'],
  },
  {
    slug: 'flinders',
    title: 'Flinders',
    location: 'Flinders, VIC',
    region: 'Mornington Peninsula',
    desc: 'A three-floor Mornington Peninsula home running on full Control4. Lighting across every floor, heating and cooling, hydronic underfloor heating, security, cameras, access control, and a custom rooftop lighting fitout.',
    story: [
      'A three-floor coastal home on the Mornington Peninsula. The brief was a house that runs itself when the family arrives, and rests when they leave.',
      'Full Control4 platform across every floor. Lighting on every level, heating and cooling, hydronic underfloor heating, and security integrated into the same control surface. Cameras feed into the same app. Access control on gates and doors.',
      'A custom rooftop lighting fitout adds character without adding complexity. Unifi WiFi and networking carry the data underneath. One platform, one experience, three floors of coastal calm.',
    ],
    scope: [
      'Full Control4 platform across three floors',
      'Lighting control on every floor',
      'Heating, cooling, and hydronic underfloor heating',
      'Security and CCTV cameras',
      'Access control on gates and doors',
      'Custom rooftop lighting fitout',
      'Unifi WiFi and networking',
    ],
    tags: ['Control4', 'Underfloor Heating', 'Access Control', 'Security', 'Custom Rooftop Lighting', 'Unifi'],
    hero: '/images/stkilda-1.jpg',
    gallery: [],
  },
  {
    slug: 'malvern-east',
    title: 'Malvern East',
    location: 'Malvern East, VIC',
    region: 'Melbourne',
    desc: 'A premium Malvern East home built around Apple Home as the control layer. Core Smart Home wall switches, KNX relays and dimmers, DALI lighting, AirTouch 5 climate, Bromic heat strips, Big Ass Fans \u2014 every system pulled into Apple Home and Siri.',
    story: [
      'A premium Malvern East residence with Apple Home at the centre. The interface the family already knew. Every other system, pulled in underneath.',
      'Core Smart Home wall switches handle the surface. KNX relays and dimmers carry the lighting load on the bus. DALI fixtures wired in where the spec allowed. AirTouch 5 integration for climate. Bromic heat strips on the outdoor zones. Big Ass Fans for movement and feel.',
      'Sonos audio runs throughout. Unifi networking and intercom underneath. Access control on gates and doors. Every system in the house, pulled into Apple Home and Siri. One sentence, every system responds.',
    ],
    scope: [
      'Apple Home as primary control platform',
      'Core Smart Home wall switches',
      'KNX relays and dimmers',
      'DALI lighting fixtures (where compatible)',
      'AirTouch 5 climate integration',
      'Bromic outdoor heat strips',
      'Big Ass Fans integration',
      'Sonos distributed audio',
      'Unifi networking and intercom',
      'Access control on gates and doors',
    ],
    tags: ['Apple Home', 'KNX', 'DALI', 'Core Smart Home', 'Sonos', 'AirTouch 5', 'Bromic', 'Big Ass Fans', 'Unifi'],
    hero: '/images/haven-dsc05653.jpg',
    gallery: [],
  },
  {
    slug: 'west-footscray',
    title: 'West Footscray',
    location: 'West Footscray, VIC',
    region: 'Inner West',
    desc: 'A full electrical install paired with a complete smart home rollout. Apple Home at the centre, Control4 wall switches, Cbus relays and dimmers, Sonos audio, AirTouch 5, Unifi networking and intercom.',
    story: [
      'A West Footscray home with two briefs in one. Full electrical install on the new build, plus a complete smart home rollout that the family could actually use.',
      'Apple Home at the centre. Control4 wall switches on the front end, picked for the tactile quality the family wanted. Cbus relays and dimmers carry the lighting load underneath. Sonos audio throughout. AirTouch 5 integration for climate.',
      'Unifi networking and intercom finish the stack, with full Siri integration so every system responds to a sentence. One home, one app, one voice.',
    ],
    scope: [
      'Full electrical install',
      'Apple Home as primary control platform',
      'Control4 wall switches',
      'Cbus relays and dimmers',
      'Sonos distributed audio',
      'AirTouch 5 climate integration',
      'Unifi networking and intercom',
      'Full Siri integration',
    ],
    tags: ['Full Electrical', 'Apple Home', 'Control4', 'Cbus', 'Sonos', 'AirTouch 5', 'Unifi', 'Siri'],
    hero: '/images/merival-sonos.jpg',
    gallery: [],
  },
  {
    slug: 'malvern',
    title: 'Malvern',
    location: 'Malvern, VIC',
    region: 'Melbourne',
    desc: 'A full lighting upgrade across a Malvern home, plus TV installations and a dedicated home cinema fitout. Lighting becomes part of the architecture, not an afterthought.',
    story: [
      'A Malvern home that needed the lighting to do more work than the original install asked of it. The brief was depth and warmth without spotlighting.',
      'A full lighting upgrade throughout the home. Every fitting reconsidered, every scene programmed against how the rooms are actually used. TV installs in the right rooms, sized for the seating. A dedicated home cinema fitout for the family\u2019s evenings in.',
      'The kind of project where the lighting becomes part of the architecture, not an afterthought.',
    ],
    scope: [
      'Full home lighting upgrade',
      'TV installations',
      'Dedicated home cinema fitout',
    ],
    tags: ['Lighting Upgrade', 'Home Cinema', 'TV Install'],
    hero: '/images/malvern-cinema-1.jpg',
    gallery: ['/images/malvern-2.jpg'],
  },
  {
    slug: 'toorak',
    title: 'Toorak',
    location: 'Toorak, VIC',
    region: 'Melbourne',
    desc: 'A full electrical rewire of a Toorak residence, plus an end-to-end Control4 fitout. KNX lighting and blinds, Core Smart Home switches, security, cameras, access control. WiiM amps with Triad speakers.',
    story: [
      'A Toorak residence rewired from the ground up. Old fabric, new spine. The brief was a home that holds its standard for the next thirty years.',
      'Full electrical rewire across the property. End-to-end Control4 platform sitting on top. KNX handling the lighting and blind control on the bus, with Core Smart Home wall switches on the front. Heating and cooling integrated, security and cameras in the same control surface, access control on gates and doors.',
      'Audio runs on WiiM amps and Triad speakers. Hi-fi performance, distributed across the home, controlled from one platform. Unifi WiFi and networking carry the load underneath.',
      'One platform. One app. Every system speaking the same language.',
    ],
    scope: [
      'Full electrical rewire',
      'End-to-end Control4 platform',
      'KNX lighting control',
      'KNX blind control',
      'Core Smart Home wall switches',
      'Heating and cooling integration',
      'Security and CCTV cameras',
      'Access control on gates and doors',
      'WiiM amplifiers with Triad speakers',
      'Unifi WiFi and networking',
    ],
    tags: ['Full Rewire', 'Control4', 'KNX', 'Core Smart Home', 'WiiM', 'Triad', 'Access Control', 'Security', 'Cameras', 'Unifi'],
    hero: '/images/haven-dsc05653.jpg',
    gallery: [],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
