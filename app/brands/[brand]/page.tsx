import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface FeatureBlock {
  heading: string
  subheading?: string
  body: string
  image: string
  imageAlt: string
}

interface WhyPoint {
  heading: string
  body: string
}

interface RelatedBrand {
  label: string
  href: string
}

interface BrandData {
  title: string
  metaDescription: string
  h1: string
  tagline: string
  heroImage: string
  heroImageAlt: string
  introHeading: string
  introParagraphs: string[]
  features: FeatureBlock[]
  whyPoints: WhyPoint[]
  relatedBrands: RelatedBrand[]
  schemaServiceType: string
}

const brandData: Record<string, BrandData> = {
  'apple-home': {
    title: 'Apple Home Installation Melbourne | Apple HomeKit Specialists | Elec Reid',
    metaDescription: "Melbourne's leading Apple HomeKit installer. Elec Reid designs and installs Apple Home systems for Melbourne residences. No subscription, full encryption, total control.",
    h1: 'Apple Home',
    tagline: 'Your home, speaking your language.',
    heroImage: '/images/apple-home.png',
    heroImageAlt: 'Apple HomeKit — iPhone, iPad, Apple Watch and Mac running Apple Home',
    introHeading: 'The platform built for people who already live in the Apple ecosystem.',
    introParagraphs: [
      "Apple Home is Elec Reid's number one recommendation for residential smart homes. It's the platform most Melbourne homeowners already understand because they already live in it.",
      "iPhone, iPad, Apple Watch, HomePods, Siri. When everything speaks the same language, nothing needs explaining. No login screen for a new app. No onboarding process. Just your home, responding to you.",
      "We design Apple Home systems from the ground up. Every light. Every blind. Every lock. Every scene. Engineered before the first cable is pulled.",
    ],
    features: [
      {
        heading: 'The platform you already know',
        subheading: 'No new habits. No new interfaces.',
        body: "Apple Home integrates with over 1,000 certified accessories. Every major lighting brand. Every major blind manufacturer. Every smart lock that matters. If it carries the Works with Apple Home badge, we can wire it, mount it, configure it, and hand it to you ready to use. Your home works the way your phone does. That's not an accident it's a design decision.",
        image: '/images/haven-dsc05643.jpg',
        imageAlt: 'Smart home spa with integrated lighting control',
      },
      {
        heading: 'Privacy without compromise',
        subheading: 'End-to-end encryption. No subscription.',
        body: "End-to-end encryption. No subscription fees. No cloud server holding your data. Apple Home keeps your home's activity on your devices not on a server farm in another country. Your automations run locally. Your locks open instantly. Your lights respond immediately. When the internet goes down, your home still works.",
        image: '/images/flinders-1.jpg',
        imageAlt: 'Luxury bathroom with Apple HomeKit smart lighting integration',
      },
    ],
    whyPoints: [
      {
        heading: "We live in the Apple ecosystem. So do you.",
        body: "We've installed Apple Home in over 40 Melbourne residences. We know every limitation, every workaround, every Matter certification requirement.",
      },
      {
        heading: "Our systems work without us.",
        body: "Walk us out the door and your home keeps running. Full documentation at handover every device, every automation, every scene, written up for you.",
      },
      {
        heading: "One call if anything goes wrong.",
        body: "We don't pass you to Apple support. We own the outcome. If a device drops off the network three months later, we fix it.",
      },
    ],
    relatedBrands: [
      { label: 'Basalte', href: '/brands/basalte' },
      { label: 'Sonos', href: '/brands/sonos' },
      { label: 'Unifi', href: '/brands/unifi' },
    ],
    schemaServiceType: 'Apple HomeKit installation and integration',
  },

  'basalte': {
    title: 'Basalte Smart Switches Melbourne | Authorised Basalte Dealer | Elec Reid',
    metaDescription: "Authorised Basalte dealer in Melbourne. Elec Reid installs Basalte Sentido, Fibonacci, Ellie, Matisse and the complete range in Melbourne's finest residences. Belgian precision, locally installed.",
    h1: 'Basalte',
    tagline: 'Belgian precision. For walls that deserve it.',
    heroImage: '/images/basalte-fibonacci.jpg',
    heroImageAlt: 'Basalte Fibonacci push-button switch in brushed brass',
    introHeading: 'The finest switches in the world.',
    introParagraphs: [
      "Basalte makes the finest switches and touchscreens in the world. The Sentido, the Fibonacci, the Chopin. The Ellie, the Lisa, the Lena. Each one is a considered object designed in Belgium, specified by architects, installed in homes where every surface is a decision.",
      "Elec Reid is an authorised Basalte dealer. We specify, supply and install the complete range.",
    ],
    features: [
      {
        heading: 'Switches & Keypads',
        subheading: 'Sentido. Fibonacci. Chopin.',
        body: "The Sentido covers the entire surface with capacitive touch no buttons, no moving parts. Single press, long press, multitouch dimming. Available in 2 and 4-button configurations across aluminium, classic, and fer forgé collections. Twelve finishes including brushed brass. The Fibonacci draws from the golden ratio backlit laser-engraved labels that illuminate as you approach, with custom text and icons on every button, across 2 and 4-button plates. Also twelve finishes. The Chopin is the entry point to Basalte: a refined push-button switch that fits standard wall boxes, works with most smart home systems, clean and minimal.",
        image: '/images/basalte-fibonacci.jpg',
        imageAlt: 'Basalte Fibonacci switches in a Melbourne architectural home',
      },
      {
        heading: 'Touchscreens',
        subheading: 'Ellie. Lisa. Lena. Matisse.',
        body: "The Ellie is a 7-inch capacitive touchscreen that sits flush on the wall. Brushed brass, matte black, or white. Controls lighting, blinds, climate, audio, and security from one surface. The Lisa brings the same flush-mount precision in a 4.3-inch compact format. The Lena is the slim panel a 10-inch widescreen touchscreen for full home control. The Matisse is Basalte's newest: a 10.1-inch display with enhanced processing and updated UI.",
        image: '/images/basalte-ellie.jpg',
        imageAlt: 'Basalte Ellie touchscreen controller in a Melbourne home',
      },
      {
        heading: 'Audio',
        subheading: 'Asano multiroom amplifier.',
        body: "The Asano is Basalte's premium multiroom amplifier. Available in M4 and P4 configurations four zones of audio, all controlled from the same Basalte keypads as your lighting. Streams from Spotify, Tidal, and AirPlay. Crystal-clear audio. No visible equipment. No separate app. Just music, everywhere.",
        image: '/images/haven-dsc05653.jpg',
        imageAlt: 'Home theatre and audio lounge in a Melbourne residence',
      },
      {
        heading: 'Basalte Home Platform',
        subheading: 'KNX native. One app.',
        body: "Basalte Home is the native Basalte automation platform. KNX-based. Controls lighting, climate, blinds, and audio from one app. When you choose Basalte hardware with Basalte Home software, every interaction from the keypad to the app is designed by the same team, for the same purpose.",
        image: '/images/basalte-ellie.jpg',
        imageAlt: 'Basalte Ellie touchscreen controlling a Melbourne smart home',
      },
    ],
    whyPoints: [
      {
        heading: "KNX native & IP native.",
        body: "Basalte hardware works on both the KNX bus and IP network natively no bridge, no workaround, no middleware.",
      },
      {
        heading: "Twelve+ finishes.",
        body: "Brushed brass, matte black, white, aluminium, and more. Specified with your designer, not after the walls are closed.",
      },
      {
        heading: "Authorised dealer.",
        body: "We order direct. We hold stock. We know every SKU in the catalogue and have programmed Basalte systems across Melbourne projects of every scale.",
      },
      {
        heading: "Full system design.",
        body: "We don't just supply switches. We design the complete system lighting scenes, automation logic, integration with blinds, climate, audio, and security.",
      },
      {
        heading: "Belgian-engineered.",
        body: "Designed in Ghent. Built for permanence. Basalte is not a consumer product with a two-year lifecycle it is hardware specified for decades.",
      },
      {
        heading: "Programmed and tested before we leave.",
        body: "Scenes, automations, integrations all verified on site. You walk in and it works. No manual. No phone number. Just your home.",
      },
    ],
    relatedBrands: [
      { label: 'KNX', href: '/brands/knx' },
      { label: 'Apple Home', href: '/brands/apple-home' },
      { label: 'Ekinex', href: '/brands/ekinex' },
    ],
    schemaServiceType: 'Basalte switch and touchscreen installation',
  },

  'home-assistant': {
    title: 'Home Assistant Installation Melbourne | Local Smart Home Automation | Elec Reid',
    metaDescription: "Home Assistant installation Melbourne. Elec Reid deploys local smart home automation open source, zero cloud, zero subscription. The most powerful platform on the planet, properly installed.",
    h1: 'Home Assistant',
    tagline: 'Open. Local. Limitless.',
    heroImage: '/images/haven-7.jpg',
    heroImageAlt: 'Home Assistant server rack in a Melbourne smart home installation',
    introHeading: 'The only platform with zero vendor lock-in and zero cloud dependency.',
    introParagraphs: [
      "Home Assistant is for the technical user who wants total control. Not control within the boundaries someone else drew actual control. Custom user interfaces built from scratch. Automations that react to energy usage, presence, weather, time of day, and occupancy all simultaneously.",
      "The only platform with zero vendor lock-in and zero cloud dependency. Run it on your own hardware. Own your data. Forever.",
      "Every device. Every protocol. Every automation you can imagine. If a smart home device exists, Home Assistant can probably control it. We deploy it on dedicated hardware spec'd correctly, rack-mounted, backed up, and configured before we hand you the keys.",
    ],
    features: [
      {
        heading: 'Local first. Always.',
        subheading: 'No cloud dependency. No outage risk.',
        body: "Home Assistant runs on hardware in your home. When your internet goes down, your home keeps working. When a vendor discontinues their cloud API which happens more than you'd think your system is not affected. Automations that fire based on energy usage, solar production, presence, weather forecast, time of day, and occupancy sensors all running locally, all simultaneously, without a single cloud call.",
        image: '/images/haven-7.jpg',
        imageAlt: 'Network rack with Home Assistant hardware in a Melbourne residence',
      },
      {
        heading: 'Custom interfaces. Total control.',
        subheading: '2,000+ integrations. Built from scratch.',
        body: "Z-Wave, Zigbee, Matter, Thread, Modbus, KNX, DALI Home Assistant speaks every protocol. But the real power is the custom interface. We build dashboards from scratch specific to your home, your habits, your family. Not a generic template. A purpose-built control panel designed for how you actually live. Then we document every entity, every automation, every integration so you understand what you own.",
        image: '/images/wiring-clean.jpg',
        imageAlt: 'Structured cabling and smart home wiring in a Melbourne home',
      },
    ],
    whyPoints: [
      {
        heading: "We spec the hardware correctly.",
        body: "Home Assistant on underpowered hardware is a disaster waiting to happen. We size the compute, storage, and UPS correctly for your system from day one.",
      },
      {
        heading: "We document every automation.",
        body: "A Home Assistant installation is only as good as its documentation. We write it up every entity, every automation, every integration so you understand what you own.",
      },
      {
        heading: "We train you to use it.",
        body: "Home Assistant has a learning curve. We flatten it. One hour of training at handover covers adding devices, building automations, and reading dashboards.",
      },
    ],
    relatedBrands: [
      { label: 'Unifi', href: '/brands/unifi' },
      { label: 'KNX', href: '/brands/knx' },
      { label: 'Apple Home', href: '/brands/apple-home' },
    ],
    schemaServiceType: 'Home Assistant installation and configuration',
  },

  'control4': {
    title: 'Control4 Installation Melbourne | Authorised Control4 Dealer | Elec Reid',
    metaDescription: "Authorised Control4 dealer in Melbourne. Elec Reid installs and programs Control4 smart home systems T5 touchscreens, DS3 intercoms, Lux keypads. Twenty years of proven reliability.",
    h1: 'Control4',
    tagline: 'Twenty years of certainty.',
    heroImage: '/images/merival-c4screen.jpg',
    heroImageAlt: 'Control4 smart home system in a Melbourne residence',
    introHeading: 'A proven platform with more track record than most of its competitors have age.',
    introParagraphs: [
      "Control4 has been in homes longer than most of its competitors have existed. A mature, dealer-installed platform with dedicated touchscreens, keypads, and a large ecosystem of certified devices.",
      "For clients who want a system with track record. Who want to know that the platform they are buying into will be supported in ten years. Who want dedicated hardware a touchscreen that does one thing brilliantly.",
      "Control4 is not for everyone. It requires a certified dealer. It requires annual software subscription. It requires professional programming. But when it is right, it is very right.",
    ],
    features: [
      {
        heading: 'Control4 Controllers',
        subheading: 'Core 1. Core 5. CA-10. Right-sized for every project.',
        body: "The CA-10 is Control4's flagship processor, paired with the Core 5 controller for large estate-style homes with complex multi-zone requirements. The Core 5 handles whole-of-home automation at scale. The Core 1 is a precision controller designed specifically for home cinema and media room control. All dealer-configured, warranty-backed, and remotely accessible by us for support. These are not consumer smart home hubs. They are engineered automation engines built to run reliably for a decade.",
        image: '/images/control4-x4.jpg',
        imageAlt: 'Control4 controller and touchscreen in a Melbourne smart home',
      },
      {
        heading: 'T5 touchscreens & Lux keypads',
        subheading: 'Purpose-built hardware.',
        body: "The T5 In-Wall Touchscreen shows every room, every source, every scene from a wall-mounted glass panel. The DS3 Door Station Intercom delivers full HD video at your front door with two-way audio and remote unlock. Control4 Lux Keypads blend into the wall with backlit buttons for the scenes you use most. Purpose-built hardware, not a tablet running an app. Control4 hardware is designed to be mounted in a wall and used for a decade without looking dated.",
        image: '/images/control4-lux.jpg',
        imageAlt: 'Control4 Lux keypad in a Melbourne residence',
      },
    ],
    whyPoints: [
      {
        heading: "We are certified Control4 dealers.",
        body: "Control4 requires dealer certification for a reason. Untrained installation is a Control4 installation that does not work properly. We are trained, certified, and experienced.",
      },
      {
        heading: "Programming is our skill, not an afterthought.",
        body: "Most of what makes a Control4 system good or bad is programming. We program before handover, refine after walkthrough, and document every driver and every scene.",
      },
      {
        heading: "Remote support included.",
        body: "We can access your Control4 system remotely for most fixes. Firmware updates, driver updates, scene adjustments handled without a site visit.",
      },
    ],
    relatedBrands: [
      { label: 'Basalte', href: '/brands/basalte' },
      { label: 'Sonos', href: '/brands/sonos' },
      { label: 'Unifi', href: '/brands/unifi' },
    ],
    schemaServiceType: 'Control4 smart home installation and programming',
  },

  'knx': {
    title: 'KNX Smart Home Melbourne | KNX Lighting & Automation | Elec Reid',
    metaDescription: "KNX installation Melbourne. Elec Reid programs KNX lighting, blinds, and HVAC automation for Melbourne prestige residences. Manufacturer-independent, decentralised, built to endure.",
    h1: 'KNX',
    tagline: 'Not a brand. A language.',
    heroImage: '/images/ekinex-proxima.jpg',
    heroImageAlt: 'Ekinex KNX keypad in a prestige Melbourne residence',
    introHeading: 'The open standard for building automation.',
    introParagraphs: [
      "KNX is not a brand. It is a language. The open standard for building automation not owned by any single manufacturer, not controlled by any single company. Created by the KNX Association, headquartered in Brussels.",
      "500+ manufacturers worldwide produce KNX-certified products. When a device carries the KNX logo, it speaks the same language as every other KNX device on the planet regardless of who made it, when it was made, or where it was installed.",
      "Decentralised by design. No single controller. No single point of failure. Intelligence lives in each device on the bus. If one fails, the rest keep working. This is the reason architects specify KNX in buildings they expect to stand for fifty years.",
    ],
    features: [
      {
        heading: 'Why KNX endures',
        subheading: 'Reliability. Longevity. Manufacturer choice.',
        body: "Used in residential, commercial, and industrial projects worldwide. KNX is the infrastructure choice for buildings with a thirty-year horizon because the protocol has already proven it can last that long. Elec Reid uses KNX for its reliability, its longevity, its manufacturer choice, and its proven performance in prestige architecture. When you build in KNX, you are not betting on a startup's cloud server. You are using a protocol that has been proven in buildings on five continents.",
        image: '/images/ekinex-proxima.jpg',
        imageAlt: 'Ekinex Proxima KNX keypad in a Melbourne architectural home',
      },
      {
        heading: 'KNX-compatible brands we install',
        subheading: 'Ekinex. Basalte. ABB. Schneider. Siemens.',
        body: "The KNX-compatible brands Elec Reid installs span the finest interfaces in the world. Ekinex for Italian-designed precision keypads. Basalte for Belgian-engineered touchscreens and switches. ABB, Schneider, and Siemens for robust infrastructure products used in commercial and industrial applications. KNX's manufacturer independence means we specify the right hardware for each project not whatever one vendor happens to make.",
        image: '/images/ekinex-20venti.jpg',
        imageAlt: 'Ekinex 20Venti KNX keypad in a Melbourne prestige home',
      },
    ],
    whyPoints: [
      {
        heading: "Certified KNX programming partners.",
        body: "KNX programming requires ETS software and formal certification. We are certified. We have programmed KNX systems in Melbourne homes from single-room retrofits to whole-of-home new builds.",
      },
      {
        heading: "We specify hardware that fits the architecture.",
        body: "KNX is manufacturer-independent which means you can put any interface on the wall. We help you choose the right one. Ekinex, Basalte, ABB, Schneider specified to match your interior.",
      },
      {
        heading: "Your system runs without us.",
        body: "KNX is decentralised. When we leave site, your home works. No central controller to fail. No cloud to go down. No dependency on anyone including us.",
      },
    ],
    relatedBrands: [
      { label: 'Basalte', href: '/brands/basalte' },
      { label: 'Ekinex', href: '/brands/ekinex' },
      { label: 'Home Assistant', href: '/brands/home-assistant' },
    ],
    schemaServiceType: 'KNX lighting and automation programming',
  },

  'cbus': {
    title: 'C-Bus Lighting Control Melbourne | Clipsal C-Bus Installation | Elec Reid',
    metaDescription: "C-Bus lighting control installation Melbourne. Elec Reid installs and programs Clipsal C-Bus systems for Melbourne homes and commercial builds. Thirty years of proven reliability.",
    h1: 'C-Bus',
    tagline: "Australia's most trusted lighting platform.",
    heroImage: '/images/haven-1.jpg',
    heroImageAlt: 'Architectural interior of a Melbourne home with C-Bus lighting control',
    introHeading: "Thirty years of reliability. Still the right answer for many projects.",
    introParagraphs: [
      "Clipsal C-Bus has been the lighting control standard in Australian residential and commercial buildings for over thirty years. Robust, reliable, and deeply understood by electricians across the country.",
      "When a project requires proven technology with a local support network national supplier, available parts, electricians trained on it C-Bus delivers. The failure modes are known. The solutions are documented. The parts are in stock.",
      "We install and program C-Bus across Melbourne from residential renovations adding scene control, to commercial fitouts requiring full DALI dimming integration.",
    ],
    features: [
      {
        heading: '5500 series the standard',
        subheading: 'DIN rail modules. Scene control. Scheduling.',
        body: "The C-Bus 5500 series DIN rail modules are the backbone of every installation. Lighting outputs, input units, logic controllers all mounted in a switchboard and connected via the C-Bus two-wire protocol. Scenes recalled from a keypad. Schedules triggered by time of day. Automations triggered by occupancy. It is not complicated. It works.",
        image: '/images/haven-1.jpg',
        imageAlt: 'Architectural Melbourne home with C-Bus controlled lighting scenes',
      },
      {
        heading: 'Saturn Zen keypads and DALI',
        subheading: 'The interface your client actually uses.',
        body: "Saturn Zen and eDLT keypads give users a physical, wall-mounted interface that does not require a phone. Press a button. Scene changes. Press another. Lights dim to 10%. DALI integration extends C-Bus control to every low-voltage driver in the building colour temperature, dimming level, individual zone control from a single keypad.",
        image: '/images/wiring-clean.jpg',
        imageAlt: 'C-Bus wiring and DIN rail installation in a Melbourne switchboard',
      },
    ],
    whyPoints: [
      {
        heading: "We have programmed C-Bus systems across Melbourne for years.",
        body: "From single-room scene control to whole-of-home multi-zone DALI systems. We understand the platform's capabilities and its limits.",
      },
      {
        heading: "We integrate C-Bus with modern platforms.",
        body: "C-Bus does not have to stand alone. We integrate it with Apple Home, Home Assistant, and third-party platforms via Wiser for KNX bridges and IP gateways.",
      },
      {
        heading: "Local parts. Local support.",
        body: "Clipsal is available from electrical wholesalers across Melbourne. If a module fails in five years, the replacement is available next day. That matters.",
      },
    ],
    relatedBrands: [
      { label: 'KNX', href: '/brands/knx' },
      { label: 'Home Assistant', href: '/brands/home-assistant' },
      { label: 'Basalte', href: '/brands/basalte' },
    ],
    schemaServiceType: 'Clipsal C-Bus lighting control installation',
  },

  'unifi': {
    title: 'Unifi Network Installation Melbourne | Ubiquiti Networking Melbourne | Elec Reid',
    metaDescription: "Unifi network installation Melbourne. Elec Reid installs enterprise-grade Ubiquiti Unifi networking, cameras, and access control in Melbourne homes and commercial projects. Zero dead zones.",
    h1: 'Unifi',
    tagline: 'The network every smart home runs on.',
    heroImage: '/images/haven-7.jpg',
    heroImageAlt: 'Unifi network rack installation in a Melbourne smart home',
    introHeading: 'Every smart home runs on its network.',
    introParagraphs: [
      "Every screen, every speaker, every camera, every sensor. If the network fails, everything fails. Unifi by Ubiquiti is what we install in every serious residential and commercial project.",
      "Enterprise-grade performance. Consumer-friendly management. A single dashboard for the entire infrastructure.",
      "We design the network before we pull a single cable. Coverage map. VLAN structure. PoE budget. Switch placement. It is infrastructure design, not cable pulling.",
    ],
    features: [
      {
        heading: 'UniFi Network',
        subheading: 'Dream Machine Pro. Switches. Access Points.',
        body: "The UniFi Dream Machine Pro is the core: router, firewall, and network controller in one, handling hundreds of devices without breaking a sweat. UniFi Switches provide managed PoE switching that powers everything from access points to IP cameras to intercoms all over ethernet, no separate power supplies. UniFi Access Points (U6 Pro, U6 LR, U6 Mesh) bring Wi-Fi 6 and multi-gigabit performance. Ceiling-mounted, PoE-powered, centrally managed. Zero dead zones. Designed to blanket a large home or commercial space with reliable, fast wireless.",
        image: '/images/haven-7.jpg',
        imageAlt: 'Unifi network rack and access points in a Melbourne smart home',
      },
      {
        heading: 'UniFi Protect',
        subheading: 'AI cameras. Local recording. No subscription.',
        body: "AI-powered cameras from 2MP to 8MP with smart detection person, vehicle, animal. All recording locally to a Network Video Recorder in your rack. No cloud subscription. No footage leaving your home. Your data stays yours. The UniFi Doorbell Camera adds video intercom with two-way audio, remote unlock, and integration with smart home platforms.",
        image: '/images/haven-7.jpg',
        imageAlt: 'UniFi Protect cameras installed in a Melbourne home',
      },
      {
        heading: 'UniFi Access',
        subheading: 'Doorbells. Intercoms. Access control.',
        body: "The UniFi doorbell and intercom range covers every residential scenario. The Doorbell Lite is the entry-level PoE doorbell. The G4 Pro Doorbell adds a wide-angle lens and two-way audio. The G6 Entry and G6 Pro Entry are the next generation the G6 Pro combines a 12MP sensor, AI engine, FaceID, NFC, and a customisable touchscreen, bridging Protect and Access in one device. Smart door locks with NFC and PIN entry complete the access system. Everything managed from the same UniFi dashboard as your network and cameras.",
        image: '/images/haven-7.jpg',
        imageAlt: 'UniFi Access control and intercom in a Melbourne property',
      },
      {
        heading: 'Residential & Commercial',
        subheading: 'From one home to a multi-floor building.',
        body: "Every Elec Reid home gets Unifi. Clean coverage, zero monthly fees, one app to manage it all. For commercial: Unifi scales from a single meeting room to a multi-floor building. VLAN segmentation, guest networks, traffic monitoring, multiple sites under one dashboard. We design, install, and configure then hand you the login.",
        image: '/images/haven-7.jpg',
        imageAlt: 'Unifi commercial network installation in a Melbourne building',
      },
    ],
    whyPoints: [
      {
        heading: "We design before we pull cable.",
        body: "Coverage maps, VLAN architecture, PoE budgets all done before a single cable is pulled. We do not run cable and hope for the best.",
      },
      {
        heading: "Unifi is what we use. Not just what we sell.",
        body: "Every Elec Reid project runs on Unifi. We know the platform's capabilities and its failure modes because we live with it.",
      },
      {
        heading: "One dashboard. Everything managed.",
        body: "Network, cameras, access control, intercom all in UniFi's dashboard. We set it up. We document it. We hand you the login.",
      },
    ],
    relatedBrands: [
      { label: 'Apple Home', href: '/brands/apple-home' },
      { label: 'Home Assistant', href: '/brands/home-assistant' },
      { label: 'Sonos', href: '/brands/sonos' },
    ],
    schemaServiceType: 'Unifi network installation and configuration',
  },

  'sonos': {
    title: 'Sonos Installation Melbourne | Multi-Room Audio Melbourne | Elec Reid',
    metaDescription: "Sonos installation Melbourne. Elec Reid installs multi-room Sonos audio systems in-ceiling speakers, Arc Ultra, Era 300. Wired properly from the ceiling down.",
    h1: 'Sonos',
    tagline: 'Music, everywhere. Without trying.',
    heroImage: '/images/merival-sonos.jpg',
    heroImageAlt: 'Sonos integrated entertainment system in a Melbourne residence',
    introHeading: "The audio platform that disappears into your home.",
    introParagraphs: [
      "Sonos is the audio platform that disappears into your home. Every room. One app. Your streaming services, your music, your podcast wherever you are.",
      "We install Sonos as part of a complete smart home system, wiring it properly from the ceiling down. Not Bluetooth. Not portable speakers placed on shelves. Structured cabling to ceiling speakers driven by a Sonos Amp so it sounds as good as it should.",
      "Sonos integrates with Apple Home, Control4, and Home Assistant. Volume follows room. Music pauses when you leave. Audio is part of the system, not separate from it.",
    ],
    features: [
      {
        heading: 'In-ceiling. Done right.',
        subheading: 'Wired from the rack. Not portable.',
        body: "In-ceiling speakers wired to a Sonos Amp in your rack. Passive drivers the kind that need power and signal from an amplifier so you are not compromising on driver quality. We specify speaker placement before the ceiling is closed. Correct depth, correct positioning for listening zone coverage. You should not know the speakers are there. You should only hear them.",
        image: '/images/stkilda-1.jpg',
        imageAlt: 'In-ceiling audio installation in a Melbourne home with Sonos',
      },
      {
        heading: 'Arc Ultra. Era 300.',
        subheading: 'The living room, done properly.',
        body: "The Sonos Arc Ultra is the best soundbar we have heard. Dolby Atmos, spatial audio, designed to disappear under your screen. The Era 300 is the best wireless speaker for a room spatial audio in a single unit. Both integrate with Apple Home. Both work as part of your multi-room Sonos system. Both sound significantly better than their price suggests.",
        image: '/images/brighton-av-1.jpg',
        imageAlt: 'Sonos Arc Ultra AV setup in a Melbourne living room',
      },
    ],
    whyPoints: [
      {
        heading: "We wire it properly.",
        body: "Sonos is a wireless product. But the best Sonos installations are wired at the rack and wireless at the device. We run the cable so you do not have to manage speaker placement around power points.",
      },
      {
        heading: "Audio is part of the system.",
        body: "We integrate Sonos with your smart home. Volume adjusts with scenes. Music pauses when you leave the room. The alarm turns on a playlist. Audio is a first-class citizen, not an afterthought.",
      },
      {
        heading: "We configure and test before handover.",
        body: "Every zone, every grouping, every streaming service configured and tested. Playlists loaded. Apple Home integration working. You walk in and it plays.",
      },
    ],
    relatedBrands: [
      { label: 'Apple Home', href: '/brands/apple-home' },
      { label: 'Control4', href: '/brands/control4' },
      { label: 'Unifi', href: '/brands/unifi' },
    ],
    schemaServiceType: 'Sonos multi-room audio installation',
  },
}

export async function generateStaticParams() {
  return Object.keys(brandData).map((brand) => ({ brand }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>
}): Promise<Metadata> {
  const { brand } = await params
  const data = brandData[brand]
  if (!data) return {}
  return {
    title: data.title,
    description: data.metaDescription,
  }
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>
}) {
  const { brand } = await params
  const data = brandData[brand]
  if (!data) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elec Reid',
    description: "Melbourne's smart home electrical specialists",
    url: 'https://elecreid.com',
    telephone: '+61450342075',
    email: 'enquiries@elecreid.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
    areaServed: 'Melbourne',
    serviceType: data.schemaServiceType,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end bg-[#16253F] overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.heroImageAlt}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pb-16 w-full">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-4">
            Brands
          </p>
          <h1 className="font-austin text-7xl md:text-9xl text-white leading-none mb-4">
            {data.h1}
          </h1>
          <p className="font-austin italic text-2xl md:text-3xl text-white/60">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-[#F5F2EE] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-austin text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                {data.introHeading}
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {data.introParagraphs.map((para, i) => (
                <p key={i} className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Sections (alternating) ── */}
      {data.features.map((feature, i) => (
        <section
          key={i}
          className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F2EE]'}`}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
            <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
              i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
            }`}>
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#16253F]/5">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-5">
                {feature.subheading && (
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                    {feature.subheading}
                  </p>
                )}
                <h2 className="font-austin text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
                  {feature.heading}
                </h2>
                <p className="text-[#1A1A1A]/60 text-base leading-relaxed">
                  {feature.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Why Elec Reid ── */}
      <section className="bg-[#16253F] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-austin text-4xl md:text-5xl text-white mb-14 leading-tight">
            Why Elec Reid<br />
            <em className="italic text-white/50">for {data.h1}</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {data.whyPoints.map((point, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-8 h-px bg-[#0134E7]" />
                <h3 className="font-austin text-xl text-white leading-snug">
                  {point.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Brands ── */}
      <section className="bg-[#F5F2EE] py-16 md:py-20 border-t border-[#1A1A1A]/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-8">
            Related brands
          </p>
          <div className="flex flex-wrap gap-3">
            {data.relatedBrands.map((rb) => (
              <Link
                key={rb.href}
                href={rb.href}
                className="text-[10px] tracking-[0.15em] uppercase border border-[#1A1A1A]/20 hover:border-[#0134E7] hover:text-[#0134E7] text-[#1A1A1A]/60 px-5 py-2.5 rounded-full transition-colors"
              >
                {rb.label}
              </Link>
            ))}
            <Link
              href="/brands"
              className="text-[10px] tracking-[0.15em] uppercase border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A]/40 hover:text-[#1A1A1A] px-5 py-2.5 rounded-full transition-colors"
            >
              All brands →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#16253F] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-austin text-4xl md:text-6xl text-white mb-4 leading-tight">
            Ready to add {data.h1}<br />
            <em className="italic text-white/50">to your home?</em>
          </h2>
          <p className="text-white/50 text-base mb-10 max-w-lg mx-auto">
            Tell us about your project. We will design the right system for your home and budget.
          </p>
          <Link
            href="/build"
            className="inline-block text-[10px] tracking-[0.2em] uppercase bg-[#0134E7] hover:bg-[#012ab8] text-white px-10 py-4 rounded-full transition-colors"
          >
            Build Your Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
