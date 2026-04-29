'use client'

import { useState } from 'react'

type FormData = {
  projectType: string
  priorities: string[]
  suburb: string
  budget: string
  timeline: string
  notes: string
  firstName: string
  phone: string
  email: string
}

const initialData: FormData = {
  projectType: '',
  priorities: [],
  suburb: '',
  budget: '',
  timeline: '',
  notes: '',
  firstName: '',
  phone: '',
  email: '',
}

const projectTypes = [
  { id: 'new-build', label: 'New Build', desc: 'Under construction or pre-slab' },
  { id: 'renovation', label: 'Renovation', desc: 'Existing home being updated' },
  { id: 'upgrade', label: 'Upgrade', desc: 'Improving what\'s already there' },
  { id: 'commercial', label: 'Commercial', desc: 'Office, retail, or mixed-use' },
]

const priorityOptions = [
  { id: 'smart-home', label: 'Smart Home' },
  { id: 'networking', label: 'Networking & Wi-Fi' },
  { id: 'av', label: 'AV & Cinema' },
  { id: 'security', label: 'Security & CCTV' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'lighting', label: 'Lighting Design' },
  { id: 'blinds', label: 'Motorised Blinds' },
  { id: 'ev-solar', label: 'EV & Solar' },
]

const budgets = [
  'Under $20k',
  '$20k - $50k',
  '$50k - $100k',
  '$100k - $250k',
  '$250k+',
  'Not sure yet',
]

const timelines = [
  'ASAP (already started)',
  '1 - 3 months',
  '3 - 6 months',
  '6 - 12 months',
  '12+ months',
  'Just exploring',
]

export default function BuildForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 4

  const togglePriority = (id: string) => {
    setData((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(id)
        ? prev.priorities.filter((p) => p !== id)
        : [...prev.priorities, id],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#16253F] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 bg-[#0134E7] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            We&apos;ve got it.
          </h2>
          <p className="font-heebo text-white/60 text-lg leading-relaxed mb-8">
            Thanks {data.firstName}. We&apos;ll review your brief and be in
            touch within one business day. For anything urgent, call Joe
            directly on +61 450 342 075.
          </p>
          <a
            href="/"
            className="inline-flex items-center bg-white hover:bg-[#F5F5F3] text-[#16253F] font-grotesk font-semibold text-sm px-8 py-4 rounded-sm tracking-wide transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#16253F] flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 h-0.5 bg-white/10">
        <div
          className="h-full bg-[#0134E7] transition-all duration-500"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto w-full">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-10">
            <span className="font-grotesk text-[#0134E7] text-xs tracking-widest">
              {String(step).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
            </span>
          </div>

          {/* Step 1: Project type */}
          {step === 1 && (
            <div>
              <h1 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-3">
                What are we working with?
              </h1>
              <p className="font-heebo text-white/50 text-lg mb-12">
                Tell us about the project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setData((prev) => ({ ...prev, projectType: type.id }))
                      setTimeout(() => setStep(2), 250)
                    }}
                    className={`text-left p-8 rounded-sm border transition-all ${
                      data.projectType === type.id
                        ? 'border-[#0134E7] bg-[#0134E7]/10'
                        : 'border-white/10 hover:border-white/30 bg-white/5'
                    }`}
                  >
                    <div className="font-grotesk font-semibold text-white text-lg mb-1">
                      {type.label}
                    </div>
                    <div className="font-heebo text-white/45 text-sm">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Priorities */}
          {step === 2 && (
            <div>
              <h1 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-3">
                What matters most?
              </h1>
              <p className="font-heebo text-white/50 text-lg mb-12">
                Select everything you want us to cover.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {priorityOptions.map((opt) => {
                  const selected = data.priorities.includes(opt.id)
                  return (
                    <button
                      key={opt.id}
                      onClick={() => togglePriority(opt.id)}
                      className={`flex items-center gap-4 p-6 rounded-sm border text-left transition-all ${
                        selected
                          ? 'border-[#0134E7] bg-[#0134E7]/10'
                          : 'border-white/10 hover:border-white/30 bg-white/5'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          selected ? 'border-[#0134E7] bg-[#0134E7]' : 'border-white/30'
                        }`}
                      >
                        {selected && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="font-grotesk font-medium text-white text-base">
                        {opt.label}
                      </span>
                    </button>
                  )
                })}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="font-heebo text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={data.priorities.length === 0}
                  className="bg-[#0134E7] hover:bg-[#012ab8] disabled:opacity-30 disabled:cursor-not-allowed text-white font-grotesk font-semibold text-sm px-8 py-4 rounded-sm tracking-wide transition-colors"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div>
              <h1 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-3">
                Project details.
              </h1>
              <p className="font-heebo text-white/50 text-lg mb-12">
                Helps us understand scope and timing.
              </p>
              <div className="flex flex-col gap-6 mb-10">
                <div>
                  <label className="font-grotesk text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Suburb
                  </label>
                  <input
                    type="text"
                    value={data.suburb}
                    onChange={(e) => setData((prev) => ({ ...prev, suburb: e.target.value }))}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#0134E7] font-heebo text-white text-base px-4 py-4 rounded-sm outline-none transition-colors placeholder:text-white/20"
                    placeholder="e.g. Toorak"
                  />
                </div>

                <div>
                  <label className="font-grotesk text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Budget range
                  </label>
                  <select
                    value={data.budget}
                    onChange={(e) => setData((prev) => ({ ...prev, budget: e.target.value }))}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#0134E7] font-heebo text-white text-base px-4 py-4 rounded-sm outline-none transition-colors"
                  >
                    <option value="" className="bg-[#16253F]">Select budget</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-[#16253F]">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-grotesk text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Timeline
                  </label>
                  <select
                    value={data.timeline}
                    onChange={(e) => setData((prev) => ({ ...prev, timeline: e.target.value }))}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#0134E7] font-heebo text-white text-base px-4 py-4 rounded-sm outline-none transition-colors"
                  >
                    <option value="" className="bg-[#16253F]">Select timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t} className="bg-[#16253F]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-grotesk text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Anything else we should know? (optional)
                  </label>
                  <textarea
                    value={data.notes}
                    onChange={(e) => setData((prev) => ({ ...prev, notes: e.target.value }))}
                    rows={4}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#0134E7] font-heebo text-white text-base px-4 py-4 rounded-sm outline-none transition-colors resize-none placeholder:text-white/20"
                    placeholder="Architect, builder, existing systems, special requirements..."
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="font-heebo text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={!data.suburb || !data.budget || !data.timeline}
                  className="bg-[#0134E7] hover:bg-[#012ab8] disabled:opacity-30 disabled:cursor-not-allowed text-white font-grotesk font-semibold text-sm px-8 py-4 rounded-sm tracking-wide transition-colors"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <h1 className="font-grotesk font-bold text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-3">
                Last step.
              </h1>
              <p className="font-heebo text-white/50 text-lg mb-12">
                Where should we send the response?
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div>
                  <label className="font-grotesk text-white/40 text-xs tracking-widest uppercase block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={data.firstName}
                    onChange={(e) => setData((prev) => ({ ...prev, firstName: e.target.value }))}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#0134E7] font-heebo text-white text-base px-4 py-4 rounded-sm outline-none transition-colors placeholder:text-white/20"
                    placeholder="James"
                  />
                </div>

                <div>
                  <label className="font-grotesk text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={data.phone}
                    onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#0134E7] font-heebo text-white text-base px-4 py-4 rounded-sm outline-none transition-colors placeholder:text-white/20"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label className="font-grotesk text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#0134E7] font-heebo text-white text-base px-4 py-4 rounded-sm outline-none transition-colors placeholder:text-white/20"
                    placeholder="james@example.com"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white/5 border border-white/10 rounded-sm p-6 mb-8">
                <div className="font-grotesk text-white/30 text-xs tracking-widest uppercase mb-4">
                  Your brief
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-grotesk text-white/40 text-xs mb-1">Project</div>
                    <div className="font-heebo text-white text-sm capitalize">
                      {data.projectType.replace('-', ' ') || '-'}
                    </div>
                  </div>
                  <div>
                    <div className="font-grotesk text-white/40 text-xs mb-1">Suburb</div>
                    <div className="font-heebo text-white text-sm">{data.suburb || '-'}</div>
                  </div>
                  <div>
                    <div className="font-grotesk text-white/40 text-xs mb-1">Budget</div>
                    <div className="font-heebo text-white text-sm">{data.budget || '-'}</div>
                  </div>
                  <div>
                    <div className="font-grotesk text-white/40 text-xs mb-1">Timeline</div>
                    <div className="font-heebo text-white text-sm">{data.timeline || '-'}</div>
                  </div>
                </div>
                {data.priorities.length > 0 && (
                  <div className="mt-4">
                    <div className="font-grotesk text-white/40 text-xs mb-2">Priorities</div>
                    <div className="flex flex-wrap gap-2">
                      {data.priorities.map((p) => (
                        <span
                          key={p}
                          className="font-grotesk text-xs text-white/60 border border-white/15 px-3 py-1 rounded-sm capitalize"
                        >
                          {p.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="font-heebo text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="bg-[#0134E7] hover:bg-[#012ab8] text-white font-grotesk font-semibold text-sm px-10 py-4 rounded-sm tracking-wide transition-colors"
                >
                  Submit Brief →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
