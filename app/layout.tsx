import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elec Reid | Smart Home & Electrical · Melbourne',
  description: 'Melbourne\'s only residential electrical company built around Apple HomeKit. Design, install, program, handover — one team, one outcome.',
  keywords: 'smart home Melbourne, Apple HomeKit installer Melbourne, residential electrician Melbourne, home automation Melbourne, Unifi networking Melbourne',
  openGraph: {
    title: 'Elec Reid | Smart Home & Electrical · Melbourne',
    description: 'Control, considered. Design, install, program, handover — one team, one outcome.',
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
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
