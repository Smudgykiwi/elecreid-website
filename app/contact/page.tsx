import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — Elec Reid',
  description: 'Get in touch with Elec Reid. Melbourne residential electrical and smart home integration.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-10 pt-36 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
            Contact
          </p>
          <h1 className="font-grotesk font-bold text-white text-5xl lg:text-7xl leading-tight tracking-tight max-w-2xl">
            Let&apos;s talk about your home.
          </h1>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Details */}
          <div>
            <p className="font-heebo text-[#1A1A1A]/60 text-lg leading-relaxed mb-12">
              The best smart homes start with a conversation. Tell us what
              you&apos;re working with and we&apos;ll take it from there.
            </p>

            <div className="flex flex-col gap-10">
              <div>
                <div className="font-grotesk text-[#1A1A1A]/30 text-xs tracking-widest uppercase mb-2">
                  Phone
                </div>
                <a
                  href="tel:+61450342075"
                  className="font-grotesk font-semibold text-[#16253F] text-2xl hover:text-[#0134E7] transition-colors"
                >
                  +61 450 342 075
                </a>
              </div>

              <div>
                <div className="font-grotesk text-[#1A1A1A]/30 text-xs tracking-widest uppercase mb-2">
                  Email
                </div>
                <a
                  href="mailto:joe@elecreid.com"
                  className="font-grotesk font-semibold text-[#16253F] text-2xl hover:text-[#0134E7] transition-colors"
                >
                  joe@elecreid.com
                </a>
              </div>

              <div>
                <div className="font-grotesk text-[#1A1A1A]/30 text-xs tracking-widest uppercase mb-2">
                  Location
                </div>
                <p className="font-grotesk font-semibold text-[#16253F] text-xl">
                  Melbourne, Victoria
                </p>
                <p className="font-heebo text-[#1A1A1A]/50 text-sm mt-1">
                  Servicing Melbourne and surrounding suburbs
                </p>
              </div>

              <div>
                <div className="font-grotesk text-[#1A1A1A]/30 text-xs tracking-widest uppercase mb-2">
                  Response time
                </div>
                <p className="font-heebo text-[#1A1A1A]/70 text-base">
                  We respond to all enquiries within one business day.
                  <br />
                  For urgent matters, call directly.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F5F5F3] p-10 lg:p-12">
            <h2 className="font-grotesk font-bold text-[#16253F] text-2xl mb-8">
              Send us a message
            </h2>
            <form className="flex flex-col gap-6" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-grotesk text-[#1A1A1A]/50 text-xs tracking-widest uppercase block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full bg-white border border-white font-heebo text-[#1A1A1A] text-base px-4 py-3 rounded-sm focus:outline-none focus:border-[#0134E7] placeholder:text-[#1A1A1A]/25"
                    placeholder="James"
                  />
                </div>
                <div>
                  <label className="font-grotesk text-[#1A1A1A]/50 text-xs tracking-widest uppercase block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full bg-white border border-white font-heebo text-[#1A1A1A] text-base px-4 py-3 rounded-sm focus:outline-none focus:border-[#0134E7] placeholder:text-[#1A1A1A]/25"
                    placeholder="Reid"
                  />
                </div>
              </div>

              <div>
                <label className="font-grotesk text-[#1A1A1A]/50 text-xs tracking-widest uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-white border border-white font-heebo text-[#1A1A1A] text-base px-4 py-3 rounded-sm focus:outline-none focus:border-[#0134E7] placeholder:text-[#1A1A1A]/25"
                  placeholder="james@example.com"
                />
              </div>

              <div>
                <label className="font-grotesk text-[#1A1A1A]/50 text-xs tracking-widest uppercase block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-white border border-white font-heebo text-[#1A1A1A] text-base px-4 py-3 rounded-sm focus:outline-none focus:border-[#0134E7] placeholder:text-[#1A1A1A]/25"
                  placeholder="0400 000 000"
                />
              </div>

              <div>
                <label className="font-grotesk text-[#1A1A1A]/50 text-xs tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-white border border-white font-heebo text-[#1A1A1A] text-base px-4 py-3 rounded-sm focus:outline-none focus:border-[#0134E7] placeholder:text-[#1A1A1A]/25 resize-none"
                  placeholder="Tell us about your home and project..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#0134E7] hover:bg-[#012ab8] text-white font-grotesk font-semibold text-sm px-8 py-4 rounded-sm tracking-wide transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Or build */}
      <section className="bg-[#16253F] px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-grotesk font-semibold text-white text-xl mb-2">
              Prefer a structured brief?
            </p>
            <p className="font-heebo text-white/50 text-base">
              Use our Build Your Home form to walk us through your project step by step.
            </p>
          </div>
          <Link
            href="/build"
            className="inline-flex items-center bg-white hover:bg-[#F5F5F3] text-[#16253F] font-grotesk font-semibold text-sm px-8 py-4 rounded-sm tracking-wide transition-colors flex-shrink-0"
          >
            Build Your Home →
          </Link>
        </div>
      </section>
    </>
  )
}
