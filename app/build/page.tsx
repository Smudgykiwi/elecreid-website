'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Replace with your Formspree form ID
const FORMSPREE_ID = 'maqlejve'

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  location: string
  timeframe: string
  automationSystem: string
  switches: string[]
  audioSystem: string
  network: string
  lighting: string
  blinds: string
  climate: string
  theatre: string
  alarm: string
  alarmNotes: string
  cameras: string
  camerasNotes: string
  access: string
  poolSpa: string
  evCharger: string
  weatherStation: string
  videoDistribution: string
  solar: string
  floorPlans: string
  additionalNotes: string
  consultation: string
  finalNotes: string
}

const initialFormData: FormData = {
  firstName: '', lastName: '', phone: '', email: '',
  location: '', timeframe: '', automationSystem: '',
  switches: [], audioSystem: '', network: '', lighting: '',
  blinds: '', climate: '', theatre: '', alarm: '', alarmNotes: '',
  cameras: '', camerasNotes: '', access: '', poolSpa: '',
  evCharger: '', weatherStation: '', videoDistribution: '',
  solar: '', floorPlans: '', additionalNotes: '',
  consultation: '', finalNotes: ''
}

// Background images mapped to steps
const stepBgs: Record<number, string> = {
  0: '/images/mckimm-5.jpg',
  5: '/images/mckimm-3.jpg',
  6: '/images/haven-1.jpg',
  7: '/images/haven-6.jpg',
  8: '/images/control4-x4.jpg',
  19: '/images/stkilda-1.jpg',
  20: '/images/haven-5.jpg',
  21: '/images/mckimm-5.jpg',
  22: '/images/mckimm-1.jpg',
  27: '/images/haven-7.jpg',
  30: '/images/mckimm-1.jpg',
  38: '/images/haven-6.jpg',
}

export default function BuildPage() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const totalSteps = 39

  const progress = ((step + 1) / totalSteps) * 100
  const bg = stepBgs[step]

  const update = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleSwitch = (val: string) => {
    setFormData(prev => ({
      ...prev,
      switches: prev.switches.includes(val)
        ? prev.switches.filter(s => s !== val)
        : [...prev.switches, val]
    }))
  }

  const next = useCallback(() => {
    if (step === 1) {
      if (!formData.firstName || !formData.email) {
        setError('First name and email are required.')
        return
      }
    }
    setError('')
    if (step < totalSteps - 1) setStep(s => s + 1)
  }, [step, formData, totalSteps])

  const prev = () => { if (step > 0) setStep(s => s - 1) }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        if (e.target instanceof HTMLTextAreaElement) return
        e.preventDefault()
        if (step === 38 && (e.metaKey || e.ctrlKey)) { handleSubmit(); return }
        next()
      }
      if (e.key === 'ArrowUp') { e.preventDefault(); prev() }
      if (e.key === 'ArrowDown') { e.preventDefault(); next() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [step, next])

  const handleSubmit = async () => {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        timeframe: formData.timeframe,
        automation_system: formData.automationSystem,
        switches: formData.switches.join(', '),
        audio_system: formData.audioSystem,
        network: formData.network,
        lighting: formData.lighting,
        blinds: formData.blinds,
        climate: formData.climate,
        theatre: formData.theatre,
        alarm: formData.alarm,
        alarm_notes: formData.alarmNotes,
        cameras: formData.cameras,
        cameras_notes: formData.camerasNotes,
        access: formData.access,
        pool_spa: formData.poolSpa,
        ev_charger: formData.evCharger,
        weather_station: formData.weatherStation,
        video_distribution: formData.videoDistribution,
        solar: formData.solar,
        floor_plans: formData.floorPlans,
        additional_notes: formData.additionalNotes,
        consultation: formData.consultation,
        final_notes: formData.finalNotes,
        _replyto: formData.email,
      })
    })
    if (res.ok) setSubmitted(true)
    else setError('Something went wrong. Please try again.')
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-[#16253F] flex flex-col items-center justify-center text-center px-8 z-50">
        <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-6">All done</p>
        <h1 className="font-austin text-white text-5xl lg:text-7xl mb-8">Thank you.</h1>
        <p className="text-white/70 text-lg max-w-lg leading-relaxed mb-4">
          We&apos;ve got everything we need. Our team will review your answers and come back to you with a tailored quote and clear next steps.
        </p>
        <p className="text-white/50 mb-10">Joe Reid, Director · Elec Reid</p>
        <Link href="/" className="text-[11px] tracking-[0.15em] border border-white/30 hover:border-white text-white px-8 py-3 transition-colors">
          BACK TO HOME
        </Link>
      </div>
    )
  }

  const isDark = [0, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 27, 29, 30, 38].includes(step)
  const textColor = isDark ? 'text-white' : 'text-[#1A1A1A]'
  const bgColor = isDark ? 'bg-[#16253F]' : 'bg-white'
  const inputBorder = isDark ? 'border-white/40 text-white placeholder:text-white/50 focus:border-white' : 'border-[#1A1A1A]/30 text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#0134E7]'
  const btnOutline = isDark ? 'border-white/40 text-white hover:border-white' : 'border-[#1A1A1A]/30 text-[#1A1A1A] hover:border-[#0134E7] hover:text-[#0134E7]'

  const YesNo = ({ field }: { field: keyof FormData }) => (
    <div className="flex gap-4 mt-8">
      {['yes', 'no'].map(v => (
        <button
          key={v}
          onClick={() => { update(field, v); setTimeout(next, 300) }}
          className={`px-10 py-3 border text-[11px] tracking-[0.15em] uppercase transition-colors ${
            formData[field] === v
              ? 'bg-[#0134E7] border-[#0134E7] text-white'
              : btnOutline
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  )

  const stepContent = () => {
    switch (step) {
      case 0: return (
        <div className="text-center max-w-2xl">
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-6">Elec Reid</p>
          <h1 className="font-austin text-white text-5xl lg:text-7xl mb-6">Design your smart home.</h1>
          <p className="text-white/60 text-lg leading-relaxed mb-4">A few questions to help us understand your project. Takes about 5 minutes.</p>
          <p className="text-white/40 text-sm mb-10">Best experienced on a computer, but your phone works too.</p>
          <button onClick={next} className="bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
            GET STARTED →
          </button>
        </div>
      )

      case 1: return (
        <div className="max-w-md w-full">
          <h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-10`}>First up, your details.</h1>
          {[
            { id: 'firstName', placeholder: 'First name *', field: 'firstName' as keyof FormData },
            { id: 'lastName', placeholder: 'Last name', field: 'lastName' as keyof FormData },
            { id: 'phone', placeholder: 'Phone number', field: 'phone' as keyof FormData },
            { id: 'email', placeholder: 'Email *', field: 'email' as keyof FormData },
          ].map(f => (
            <input key={f.id} type="text" placeholder={f.placeholder} value={formData[f.field] as string}
              onChange={e => update(f.field, e.target.value)}
              className={`block w-full bg-transparent border-b py-3 mb-6 text-lg outline-none transition-colors ${inputBorder}`}
            />
          ))}
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <p className="text-[#1A1A1A]/30 text-xs tracking-wider">press Enter ↵</p>
        </div>
      )

      case 2: return (
        <div className="max-w-md w-full">
          <h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Where is the project?</h1>
          <p className={`${textColor}/60 mb-8 leading-relaxed`}>We service Melbourne and surrounds. Outside that area? Email enquiries@elecreid.com and we&apos;ll refer you to someone good.</p>
          <input type="text" placeholder="Suburb or address" value={formData.location}
            onChange={e => update('location', e.target.value)}
            className={`block w-full bg-transparent border-b py-3 text-lg outline-none transition-colors ${inputBorder}`}
            autoFocus
          />
          <p className={`${textColor}/30 text-xs tracking-wider mt-4`}>press Enter ↵</p>
        </div>
      )

      case 3: return (
        <div className="max-w-md w-full">
          <h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>When is the project?</h1>
          <input type="text" placeholder="e.g. Mid 2026, planning now, ASAP" value={formData.timeframe}
            onChange={e => update('timeframe', e.target.value)}
            className={`block w-full bg-transparent border-b py-3 text-lg outline-none transition-colors ${inputBorder}`}
            autoFocus
          />
          <p className={`${textColor}/30 text-xs tracking-wider mt-4`}>press Enter ↵</p>
        </div>
      )

      case 4: return (
        <div className="text-center max-w-xl">
          <h1 className="font-austin text-white text-5xl lg:text-6xl mb-6">Great.</h1>
          <p className="text-white/60 text-lg mb-10">Now the fun part. Let&apos;s build your system.</p>
          <button onClick={next} className="bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
            CONTINUE →
          </button>
        </div>
      )

      case 5: return (
        <div className="max-w-2xl text-center">
          <p className="text-white/60 text-lg leading-relaxed mb-6">Your home is full of systems — lighting, blinds, climate, security, audio, access control — and when they don&apos;t talk to each other, nothing works the way it should.</p>
          <p className="text-white/60 text-lg leading-relaxed mb-10">We design and install smart homes that actually work. One app. One system. Everything integrated, reliable, and built to last.</p>
          <button onClick={next} className="border border-white/40 hover:border-white text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
            CONTINUE →
          </button>
        </div>
      )

      case 6: return (
        <div className="max-w-xl text-center">
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-4">Apple Home</p>
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-6">Apple Home</h2>
          <p className="text-white/60 leading-relaxed mb-8">Our #1 recommendation for most homes. If you&apos;re in the Apple ecosystem — iPhones, iPads, Apple Watch, HomePods — this is the natural fit. Beautiful, reliable, no subscription fees.</p>
          <button onClick={next} className="border border-white/40 hover:border-white text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
            CONTINUE →
          </button>
        </div>
      )

      case 7: return (
        <div className="max-w-xl text-center">
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-4">Home Assistant</p>
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-6">Home Assistant</h2>
          <p className="text-white/60 leading-relaxed mb-8">Open source. Local control. 2,000+ integrations. For clients who want total flexibility and zero vendor lock-in. Runs locally — no cloud, no subscription, no limits.</p>
          <button onClick={next} className="border border-white/40 hover:border-white text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
            CONTINUE →
          </button>
        </div>
      )

      case 8: return (
        <div className="max-w-xl text-center">
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-4">Control4</p>
          <h2 className="font-austin text-white text-4xl lg:text-5xl mb-6">Control4</h2>
          <p className="text-white/60 leading-relaxed mb-8">Professional-grade automation for larger homes. Dealer-installed, dedicated touchscreens and keypads, built for scale. We install it for clients who specifically request it.</p>
          <button onClick={next} className="border border-white/40 hover:border-white text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
            CONTINUE →
          </button>
        </div>
      )

      case 9: return (
        <div className="max-w-2xl w-full">
          <h1 className="font-austin text-white text-4xl lg:text-5xl mb-4">Which control system?</h1>
          <p className="text-white/50 mb-8">Not sure? No stress — we&apos;ll walk you through it.</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: 'apple-home', label: 'Apple Home', img: '/images/haven-5.jpg' },
              { val: 'home-assistant', label: 'Home Assistant', img: '/images/haven-7.jpg' },
              { val: 'control4', label: 'Control4', img: '/images/control4-x4.jpg' },
              { val: 'not-sure', label: 'Not sure yet', img: null },
            ].map(opt => (
              <button key={opt.val} onClick={() => { update('automationSystem', opt.val); setTimeout(next, 300) }}
                className={`relative aspect-[4/3] overflow-hidden border-2 transition-all ${formData.automationSystem === opt.val ? 'border-[#0134E7]' : 'border-white/20 hover:border-white/50'}`}>
                {opt.img ? <Image src={opt.img} alt={opt.label} fill className="object-cover" /> : <div className="absolute inset-0 bg-[#1a2a3a]" />}
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-3 left-0 right-0 text-center text-white text-sm tracking-wider">{opt.label}</span>
                {formData.automationSystem === opt.val && <div className="absolute top-2 right-2 w-5 h-5 bg-[#0134E7] flex items-center justify-center text-white text-xs">✓</div>}
              </button>
            ))}
          </div>
          <p className="text-white/30 text-xs tracking-wider mt-6">press Enter ↵</p>
        </div>
      )

      // Switch showcases 10-16
      case 10: case 11: case 12: case 13: case 14: case 15: case 16: {
        const switches = [
          { label: 'Basalte Sentido', body: 'Capacitive touch, completely flush. No moving parts. Brushed brass, black, nickel, and more.' },
          { label: 'Basalte Fibonacci', body: 'Push-button with premium finishes and LED feedback. Clean, modern, tactile.' },
          { label: 'Basalte Chopin', body: 'Refined push-button minimalism. Fits standard wall boxes, works with most systems.' },
          { label: 'Core Eclipse', body: 'Australian-designed, ultra-flush. Almost invisible against the wall. Multiple configurations.' },
          { label: 'Control4 Lux', body: 'Purpose-built for Control4. Custom-engraved scene labels. Sleek premium dimmer face.' },
          { label: 'Zetr', body: 'Completely trimless — no plate, no frame. Designed to disappear into the architecture.' },
          { label: 'Ekinex', body: 'Italian precision. Vast range of finishes — metals, colours, textures. Every detail crafted.' },
        ]
        const s = switches[step - 10]
        return (
          <div className="max-w-xl text-center">
            <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-4">Switches & Keypads</p>
            <h2 className="font-austin text-white text-4xl lg:text-5xl mb-6">{s.label}</h2>
            <p className="text-white/60 leading-relaxed mb-10">{s.body}</p>
            <button onClick={next} className="border border-white/40 hover:border-white text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
              CONTINUE →
            </button>
          </div>
        )
      }

      case 17: return (
        <div className="max-w-2xl w-full">
          <h1 className="font-austin text-white text-4xl lg:text-5xl mb-4">Which switches catch your eye?</h1>
          <p className="text-white/50 mb-8">Select as many as you like.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { val: 'basalte-sentido', label: 'Basalte Sentido', img: '/images/basalte-fibonacci.jpg' },
              { val: 'basalte-fibonacci', label: 'Basalte Fibonacci', img: '/images/basalte-fibonacci.jpg' },
              { val: 'core-eclipse', label: 'Core Eclipse', img: null },
              { val: 'control4-lux', label: 'Control4 Lux', img: '/images/control4-lux.jpg' },
              { val: 'zetr', label: 'Zetr', img: null },
              { val: 'ekinex', label: 'Ekinex', img: '/images/ekinex-proxima.jpg' },
              { val: 'ekinex-20venti', label: 'Ekinex 20Venti', img: '/images/ekinex-20venti.jpg' },
              { val: 'not-sure', label: 'Not sure yet', img: null },
            ].map(opt => (
              <button key={opt.val} onClick={() => toggleSwitch(opt.val)}
                className={`relative aspect-square overflow-hidden border-2 transition-all ${formData.switches.includes(opt.val) ? 'border-[#0134E7]' : 'border-white/20 hover:border-white/50'}`}>
                {opt.img ? <Image src={opt.img} alt={opt.label} fill className="object-cover" /> : <div className="absolute inset-0 bg-[#1a2a3a]" />}
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] tracking-wider px-1">{opt.label}</span>
                {formData.switches.includes(opt.val) && <div className="absolute top-2 right-2 w-5 h-5 bg-[#0134E7] flex items-center justify-center text-white text-xs">✓</div>}
              </button>
            ))}
          </div>
          <p className="text-white/30 text-xs tracking-wider mt-6">press Enter ↵</p>
        </div>
      )

      case 18: return (
        <div className="text-center max-w-xl">
          <h1 className="font-austin text-white text-5xl lg:text-6xl mb-6">Nice.</h1>
          <p className="text-white/60 text-lg mb-10">Now let&apos;s run through what you want integrated. Just yes or no — we&apos;ll handle the rest.</p>
          <button onClick={next} className="bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-10 py-4 rounded-full transition-colors">
            CONTINUE →
          </button>
        </div>
      )

      case 19: return (
        <div className="max-w-xl text-center">
          <h1 className="font-austin text-white text-4xl lg:text-5xl mb-4">Multi-Room Audio</h1>
          <p className="text-white/60 leading-relaxed mb-8">Music in every room, controlled from one place. No fiddling, no dropouts.</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {['Sonos', 'WiiM', 'Not sure', 'No audio'].map(opt => {
              const val = opt.toLowerCase().replace(' ', '-')
              return (
                <button key={val} onClick={() => { update('audioSystem', val); setTimeout(next, 300) }}
                  className={`py-4 border text-sm tracking-wider transition-colors ${formData.audioSystem === val ? 'bg-[#0134E7] border-[#0134E7] text-white' : 'border-white/30 text-white hover:border-white'}`}>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      )

      // Yes/No questions 20-34
      case 20: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Network & Wi-Fi</h1><p className={`${textColor}/60 leading-relaxed mb-2`}>Every smart home starts with solid Wi-Fi. Enterprise-grade — no dead zones, no dropouts.</p><YesNo field="network" /></div>)
      case 21: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Smart Lighting Control</h1><p className={`${textColor}/60 leading-relaxed`}>Scenes, schedules, and dimming from your phone or switches. Lights that respond to your routine.</p><YesNo field="lighting" /></div>)
      case 22: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Motorised Blinds & Curtains</h1><p className={`${textColor}/60 leading-relaxed`}>Open with your morning alarm. Close when the sun hits. Integrated with lighting.</p><YesNo field="blinds" /></div>)
      case 23: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Climate Control</h1><p className={`${textColor}/60 leading-relaxed`}>Heating, cooling, and fans that adjust room by room — automatically.</p><YesNo field="climate" /></div>)
      case 24: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Home Theatre / Media Room</h1><p className={`${textColor}/60 leading-relaxed`}>One tap and the lights dim, the screen drops, and the sound kicks in.</p><YesNo field="theatre" /></div>)
      case 25: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Security Alarm</h1><p className={`${textColor}/60 leading-relaxed`}>Proper protection that doesn&apos;t get in the way. Smart alerts to your phone.</p><YesNo field="alarm" /></div>)
      case 26: return (
        <div className="max-w-md w-full">
          <h1 className={`font-austin text-4xl ${textColor} mb-4`}>Any notes on security?</h1>
          <textarea value={formData.alarmNotes} onChange={e => update('alarmNotes', e.target.value)} placeholder="Optional details..."
            className={`block w-full bg-transparent border-b py-3 text-lg outline-none resize-none h-32 transition-colors ${inputBorder}`} />
          <p className={`${textColor}/30 text-xs tracking-wider mt-4`}>press Enter ↵</p>
        </div>
      )
      case 27: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Security Cameras</h1><p className={`${textColor}/60 leading-relaxed`}>UniFi cameras — local recording, no subscriptions. See what&apos;s happening from anywhere.</p><YesNo field="cameras" /></div>)
      case 28: return (
        <div className="max-w-md w-full">
          <h1 className={`font-austin text-4xl ${textColor} mb-4`}>Any notes on cameras?</h1>
          <textarea value={formData.camerasNotes} onChange={e => update('camerasNotes', e.target.value)} placeholder="Optional details..."
            className={`block w-full bg-transparent border-b py-3 text-lg outline-none resize-none h-32 transition-colors ${inputBorder}`} />
          <p className={`${textColor}/30 text-xs tracking-wider mt-4`}>press Enter ↵</p>
        </div>
      )
      case 29: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Access Control</h1><p className={`${textColor}/60 leading-relaxed`}>Video intercom, smart locks, garage and gate control. See who&apos;s at the door from anywhere.</p><YesNo field="access" /></div>)
      case 30: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Pool, Spa & Irrigation</h1><p className={`${textColor}/60 leading-relaxed`}>Automated schedules for pool heating, filtration, spa jets, and garden watering.</p><YesNo field="poolSpa" /></div>)
      case 31: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>EV Charger</h1><p className={`${textColor}/60 leading-relaxed`}>Smart charger integrated with your energy system. Schedule for off-peak rates automatically.</p><YesNo field="evCharger" /></div>)
      case 32: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Weather Station</h1><p className={`${textColor}/60 leading-relaxed`}>Live weather data feeding your home — blinds close when it&apos;s hot, lights adjust when overcast.</p><YesNo field="weatherStation" /></div>)
      case 33: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Video Distribution</h1><p className={`${textColor}/60 leading-relaxed`}>One source, every screen. Matrix switching so you can watch anything, anywhere.</p><YesNo field="videoDistribution" /></div>)
      case 34: return (<div className="max-w-xl"><h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Solar</h1><p className={`${textColor}/60 leading-relaxed`}>Panels, batteries, and smart monitoring. See what you&apos;re generating and automate to keep bills low.</p><YesNo field="solar" /></div>)

      case 35: return (
        <div className="max-w-md w-full">
          <h1 className={`font-austin text-4xl ${textColor} mb-4`}>Floor plans?</h1>
          <p className={`${textColor}/60 mb-6`}>They&apos;re a huge help. Flick them to enquiries@elecreid.com or note it here.</p>
          <input type="text" value={formData.floorPlans} onChange={e => update('floorPlans', e.target.value)} placeholder="e.g. Will email separately"
            className={`block w-full bg-transparent border-b py-3 text-lg outline-none transition-colors ${inputBorder}`} autoFocus />
          <p className={`${textColor}/30 text-xs tracking-wider mt-4`}>press Enter ↵</p>
        </div>
      )

      case 36: return (
        <div className="max-w-md w-full">
          <h1 className={`font-austin text-4xl ${textColor} mb-4`}>Anything else?</h1>
          <p className={`${textColor}/60 mb-6`}>Room counts, must-haves, budget range — whatever&apos;s on your mind.</p>
          <textarea value={formData.additionalNotes} onChange={e => update('additionalNotes', e.target.value)} placeholder="Your thoughts..."
            className={`block w-full bg-transparent border-b py-3 text-lg outline-none resize-none h-32 transition-colors ${inputBorder}`} />
          <p className={`${textColor}/30 text-xs tracking-wider mt-4`}>press Enter ↵</p>
        </div>
      )

      case 37: return (
        <div className="max-w-xl">
          <h1 className={`font-austin text-4xl lg:text-5xl ${textColor} mb-4`}>Free consultation?</h1>
          <p className={`${textColor}/60 leading-relaxed`}>A call or site visit to talk through your project. No pressure, no sales pitch.</p>
          <YesNo field="consultation" />
        </div>
      )

      case 38: return (
        <div className="max-w-xl text-center">
          <h1 className="font-austin text-white text-5xl lg:text-7xl mb-6">That&apos;s everything.</h1>
          <p className="text-white/60 text-lg mb-4">Hit submit and we&apos;ll get back to you with a tailored proposal.</p>
          <input type="text" value={formData.finalNotes} onChange={e => update('finalNotes', e.target.value)} placeholder="Any final questions? (optional)"
            className="block w-full max-w-sm mx-auto bg-transparent border-b border-white/30 text-white placeholder:text-white/40 py-3 text-lg outline-none mb-10 focus:border-white transition-colors" />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button onClick={handleSubmit} className="bg-[#0134E7] hover:bg-[#012ab8] text-white text-[11px] tracking-[0.15em] px-12 py-4 rounded-full transition-colors">
            SUBMIT →
          </button>
          <p className="text-white/30 text-xs tracking-wider mt-4">Cmd ⌘ + Enter ↵</p>
        </div>
      )

      default: return null
    }
  }

  return (
    <div className={`fixed inset-0 ${bgColor} overflow-hidden`}>
      {/* Background image */}
      {bg && (
        <div className="absolute inset-0">
          <Image src={bg} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#16253F]/70" />
        </div>
      )}

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/10 z-50">
        <div className="h-full bg-[#0134E7] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <span className={`font-austin text-sm tracking-[0.2em] ${isDark || bg ? 'text-white/60 hover:text-white' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'} transition-colors`}>
            ELEC REID
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-10 pt-16 pb-20 overflow-y-auto">
        {stepContent()}
      </div>

      {/* Step counter */}
      <div className={`fixed bottom-5 left-6 z-50 text-xs tracking-wider ${isDark || bg ? 'text-white/30' : 'text-[#1A1A1A]/30'}`}>
        {step + 1} / {totalSteps}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-4 right-6 z-50 flex gap-3">
        <button onClick={prev} disabled={step === 0}
          className="w-9 h-9 rounded-full bg-[#0134E7] hover:bg-[#012ab8] disabled:opacity-30 text-white flex items-center justify-center transition-colors text-lg">
          ↑
        </button>
        <button onClick={next} disabled={step === totalSteps - 1}
          className="w-9 h-9 rounded-full bg-[#0134E7] hover:bg-[#012ab8] disabled:opacity-30 text-white flex items-center justify-center transition-colors text-lg">
          ↓
        </button>
      </div>
    </div>
  )
}
