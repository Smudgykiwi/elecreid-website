import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Elec Reid',
  description: 'How Elec Reid collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#16253F] px-6 lg:px-10 pt-36 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-grotesk text-[#0134E7] text-xs tracking-[0.25em] uppercase mb-6">
            Legal
          </p>
          <h1
            className="text-white text-5xl lg:text-6xl leading-tight mb-6"
            style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">Last updated: 3 May 2026</p>
        </div>
      </section>

      {/* Draft notice */}
      <div className="bg-red-50 border-l-4 border-red-500 px-6 lg:px-10 py-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-700 font-semibold text-sm">
            DRAFT - pending Joe Reid review before publishing. Do not rely on this document until the DRAFT marker is removed.
          </p>
        </div>
      </div>

      {/* Body */}
      <section className="bg-[#F8F4F1] px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-[#16253F]">

            {/* Who we are */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                Who we are
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                Elec Reid Pty Ltd (ABN 82 675 975 649) is a Melbourne-based residential electrical and smart home company. We design, install, and program integrated home systems - from electrical fit-outs to Apple HomeKit, networking, AV, and security.
              </p>
              <p className="text-[#16253F]/80 leading-relaxed mt-4">
                This policy explains how we handle the personal information you share with us when using our website or enquiry forms.
              </p>
            </div>

            {/* What we collect */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                What we collect
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed mb-4">
                When you complete our design brief form, we collect:
              </p>
              <ul className="space-y-2 text-[#16253F]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Name, email address, and phone number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Project address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Project preferences - room layouts, systems of interest, budget range, timeframe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Uploaded files (floor plans, site photos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Collaborator details you choose to share (architect, builder, interior designer)</span>
                </li>
              </ul>
              <p className="text-[#16253F]/80 leading-relaxed mt-4">
                We don&apos;t collect payment information through this site. We don&apos;t run analytics or tracking pixels. We don&apos;t use any third-party advertising tools.
              </p>
            </div>

            {/* Why we collect it */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                Why we collect it
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                We use your information to prepare a tailored proposal for your project, to schedule and conduct your discovery call, and to deliver the work once we&apos;re engaged. That&apos;s it.
              </p>
              <p className="text-[#16253F]/80 leading-relaxed mt-4">
                If you opt in to marketing updates on the form, we may occasionally send you notes on Elec Reid projects, articles, or new capabilities. You can withdraw that consent at any time by emailing joe@elecreid.com.
              </p>
            </div>

            {/* Who we share it with */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                Who we share it with
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                Your information is only shared with people directly involved in delivering your project:
              </p>
              <ul className="space-y-2 mt-4 text-[#16253F]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Collaborators you nominated on the form (architect, builder, designer), solely to coordinate project delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Our installation team, for the purposes of scheduling and completing the work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Our accounting team, for invoicing and payment records</span>
                </li>
              </ul>
              <p className="text-[#16253F]/80 leading-relaxed mt-4">
                We never sell your data. We never share it with marketing partners. We never send it outside Australia.
              </p>
            </div>

            {/* How long we keep it */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                How long we keep it
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                We keep your project records for the duration of the work plus seven years. That retention period is required by the ATO for accounting and tax records.
              </p>
              <p className="text-[#16253F]/80 leading-relaxed mt-4">
                If you submitted a form but no project proceeded, your enquiry details are retained for up to seven years for legitimate business record-keeping, unless you request deletion earlier. Form drafts auto-expire after 30 days.
              </p>
            </div>

            {/* Your rights */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                Your rights
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                Under the Privacy Act 1988 (Cth) and the Australian Privacy Principles, you have the right to:
              </p>
              <ul className="space-y-2 mt-4 text-[#16253F]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Request a copy of the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Ask us to correct inaccurate information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0134E7] mt-1">-</span>
                  <span>Request deletion of your information (subject to our legal retention obligations)</span>
                </li>
              </ul>
              <p className="text-[#16253F]/80 leading-relaxed mt-4">
                To exercise any of these rights, email{' '}
                <a href="mailto:joe@elecreid.com" className="text-[#0134E7] hover:underline">
                  joe@elecreid.com
                </a>
                {' '}or use the link below.
              </p>
              <div className="mt-6">
                <a
                  href="/delete-my-data"
                  className="inline-block bg-[#0134E7] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#012ab8] transition-colors"
                >
                  Request data deletion
                </a>
              </div>
            </div>

            {/* Privacy contact */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                Privacy contact
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                Questions about this policy or how we handle your data:
              </p>
              <p className="text-[#16253F]/80 leading-relaxed mt-3">
                Joe Reid, Director<br />
                <a href="mailto:joe@elecreid.com" className="text-[#0134E7] hover:underline">
                  joe@elecreid.com
                </a>
                <br />
                0450 342 075
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                Cookies
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                We don&apos;t use tracking cookies. There are no analytics, no ad pixels, no third-party scripts that follow you around the web.
              </p>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-4 text-[#16253F]"
                style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
              >
                Updates to this policy
              </h2>
              <p className="text-[#16253F]/80 leading-relaxed">
                If this policy changes, the date at the top of this page will be updated. We won&apos;t notify you of minor wording changes, but we will notify you of any material changes to how we use your data.
              </p>
            </div>

          </div>

          {/* Footer tagline */}
          <div className="border-t border-[#16253F]/10 pt-10 mt-10 text-center">
            <p
              className="text-[#16253F]/40 text-lg"
              style={{ fontFamily: 'Austin, Georgia, serif', fontStyle: 'italic' }}
            >
              Designed for you. Done right. Always.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
