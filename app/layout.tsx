import type { Metadata } from 'next'
import { Space_Grotesk, Heebo } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elec Reid — Melbourne Smart Home & Electrical',
  description:
    "Melbourne's only residential electrical company built around Apple HomeKit. Design, install, program, handover — one team, one outcome.",
  keywords: [
    'smart home Melbourne',
    'Apple HomeKit installer Melbourne',
    'residential electrician Melbourne',
    'home automation Melbourne',
    'Unifi networking Melbourne',
    'Elec Reid',
  ],
  openGraph: {
    title: 'Elec Reid — Melbourne Smart Home & Electrical',
    description: 'One team. Everything works.',
    url: 'https://elecreid.com',
    siteName: 'Elec Reid',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${heebo.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
