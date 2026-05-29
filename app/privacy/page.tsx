import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Elec Reid',
  description: 'How Elec Reid collects, uses, and protects your personal information.',
}

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1 text-[#0134E7]">-</span>
    <span>{children}</span>
  </li>
)

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2
      className="mb-4 text-2xl text-[#16253F] lg:text-3xl"
      style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
    >
      {title}
    </h2>
    {children}
  </div>
)

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <section className="bg-[#16253F] px-6 pb-20 pt-36 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 font-grotesk text-xs uppercase tracking-[0.25em] text-[#0134E7]">Legal</p>
          <h1
            className="mb-6 text-5xl leading-tight text-white lg:text-6xl"
            style={{ fontFamily: 'Austin, Georgia, serif', fontWeight: 400 }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-white/50">Last updated: 29 May 2026</p>
        </div>
      </section>

      <section className="bg-[#F8F4F1] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="max-w-none text-[#16253F]">
            <Section title="Who we are">
              <p className="leading-relaxed text-[#16253F]/80">
                Elec Reid Pty Ltd (ABN 82 675 975 649) is a Melbourne electrical and smart technology company. We design, install, and support electrical, audio visual, automation, networking, lighting, security, and related systems for residential, commercial, and industrial projects.
              </p>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                This policy explains how we handle the personal information you share with us when using our website, enquiry forms, chatbot, email, phone, or other project communication channels.
              </p>
            </Section>

            <Section title="What we collect">
              <p className="mb-4 leading-relaxed text-[#16253F]/80">
                Depending on how you contact us, we may collect:
              </p>
              <ul className="space-y-2 text-[#16253F]/80">
                <Bullet>Name, email address, phone number, and business or project contact details.</Bullet>
                <Bullet>Project address, site suburb, property details, timing, scope, budget range, and project preferences.</Bullet>
                <Bullet>Uploaded files such as floor plans, site photos, briefs, schedules, or related documents.</Bullet>
                <Bullet>Collaborator details you choose to share, such as architect, builder, interior designer, or project manager details.</Bullet>
                <Bullet>Website enquiry form submissions and saved draft details.</Bullet>
                <Bullet>Chatbot conversations, including the messages you send, the assistant replies, page URL, referrer, browser user agent, and a browser conversation ID.</Bullet>
                <Bullet>Technical information needed to run the website, such as cookies, local storage, session storage, device information, and basic server logs.</Bullet>
              </ul>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                We do not collect payment card details through this website.
              </p>
            </Section>

            <Section title="Why we collect it">
              <p className="leading-relaxed text-[#16253F]/80">
                We use your information to understand your enquiry, prepare a tailored proposal or plan, schedule site visits or calls, coordinate with nominated project collaborators, deliver work once engaged, and maintain business records.
              </p>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                We use chatbot conversations to answer website questions, route enquiries to the right next step, improve the website assistant, and help our team follow up properly where appropriate.
              </p>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                If you opt in to updates, we may occasionally send Elec Reid project notes, articles, or capability updates. You can opt out at any time by emailing joe@elecreid.com.
              </p>
            </Section>

            <Section title="Cookies and website tools">
              <p className="leading-relaxed text-[#16253F]/80">
                The website may use cookies, local storage, and session storage to remember that you accepted the privacy notice, keep the chatbot conversation ID, manage whether the assistant is open, save form progress, and keep the site working properly.
              </p>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                We may also use website tools and server logs to understand enquiries and improve the website. We do not sell your browsing data.
              </p>
            </Section>

            <Section title="Chatbot conversations">
              <p className="leading-relaxed text-[#16253F]/80">
                The website assistant is designed to help visitors understand Elec Reid services and choose the right next step. Conversations may be saved so our team can review enquiries, improve responses, and follow up where appropriate.
              </p>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                Please do not use the chatbot for urgent electrical safety issues. If something is unsafe, sparking, burning, exposed, wet, or otherwise urgent, call Joe directly on 0450 342 075 or contact emergency services where required.
              </p>
            </Section>

            <Section title="Who we share it with">
              <p className="mb-4 leading-relaxed text-[#16253F]/80">
                We only share information where it helps us respond to your enquiry, operate the website, or deliver the project. This may include:
              </p>
              <ul className="space-y-2 text-[#16253F]/80">
                <Bullet>Elec Reid team members and contractors involved in scheduling, planning, delivery, invoicing, or administration.</Bullet>
                <Bullet>Collaborators you nominate, such as architects, builders, designers, or project managers.</Bullet>
                <Bullet>Service providers we use for website hosting, email, Google Workspace, spreadsheets, file storage, chatbot processing, automation, and business systems.</Bullet>
                <Bullet>Professional advisers, insurers, regulators, or authorities where required by law or necessary to protect our rights.</Bullet>
              </ul>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                We do not sell your personal information. Some technology providers may process or store data in Australia or overseas, depending on their infrastructure.
              </p>
            </Section>

            <Section title="How long we keep it">
              <p className="leading-relaxed text-[#16253F]/80">
                We keep project, proposal, invoice, and accounting records for as long as required for business, tax, insurance, warranty, legal, and compliance purposes. Some records may need to be kept for seven years or longer.
              </p>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                Draft form data and chatbot records may be kept for a shorter period where they are no longer needed. You can ask us to delete information, subject to any legal or business record-keeping obligations.
              </p>
            </Section>

            <Section title="Your rights">
              <p className="mb-4 leading-relaxed text-[#16253F]/80">
                Under the Privacy Act 1988 (Cth) and the Australian Privacy Principles, you can ask us to:
              </p>
              <ul className="space-y-2 text-[#16253F]/80">
                <Bullet>Provide access to personal information we hold about you.</Bullet>
                <Bullet>Correct inaccurate or outdated information.</Bullet>
                <Bullet>Delete information where we no longer need it and where we are not legally required to keep it.</Bullet>
                <Bullet>Explain how we collected, used, or shared your information.</Bullet>
              </ul>
              <p className="mt-4 leading-relaxed text-[#16253F]/80">
                To make a privacy request, email{' '}
                <a href="mailto:joe@elecreid.com" className="text-[#0134E7] underline-offset-4 hover:underline">
                  joe@elecreid.com
                </a>
                .
              </p>
            </Section>

            <Section title="Privacy contact">
              <p className="leading-relaxed text-[#16253F]/80">Questions about this policy or how we handle your data:</p>
              <p className="mt-3 leading-relaxed text-[#16253F]/80">
                Joe Reid, Director
                <br />
                <a href="mailto:joe@elecreid.com" className="text-[#0134E7] underline-offset-4 hover:underline">
                  joe@elecreid.com
                </a>
                <br />
                0450 342 075
              </p>
            </Section>

            <Section title="Updates to this policy">
              <p className="leading-relaxed text-[#16253F]/80">
                If this policy changes, the date at the top of this page will be updated. We may not notify you of minor wording changes, but we will update this page if we materially change how we handle personal information.
              </p>
            </Section>
          </div>

          <div className="mt-10 border-t border-[#16253F]/10 pt-10 text-center">
            <p
              className="text-lg text-[#16253F]/40"
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
