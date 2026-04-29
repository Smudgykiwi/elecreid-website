import { NextRequest, NextResponse } from 'next/server'

// Force Node runtime (default API route handler) so we get full fetch + Buffer
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type FormPayload = {
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  projectLocation?: string
  projectTimeframe?: string
  automationSystem?: string
  interactiveScreens?: string
  switches?: string
  audioRooms?: string
  network?: string
  lighting?: string
  blinds?: string
  climate?: string
  theatre?: string
  alarm?: string
  alarmNotes?: string
  cameras?: string
  camerasNotes?: string
  access?: string
  poolSpa?: string
  evCharger?: string
  weatherStation?: string
  videoDistribution?: string
  solar?: string
  floorPlans?: string
  additionalNotes?: string
  consultation?: string
  finalNotes?: string
}

const COLUMN_ORDER: (keyof FormPayload | 'timestamp')[] = [
  'timestamp',
  'firstName', 'lastName', 'phone', 'email', 'projectLocation', 'projectTimeframe',
  'automationSystem', 'interactiveScreens', 'switches', 'audioRooms',
  'network', 'lighting', 'blinds', 'climate', 'theatre',
  'alarm', 'alarmNotes', 'cameras', 'camerasNotes', 'access',
  'poolSpa', 'evCharger', 'weatherStation', 'videoDistribution', 'solar',
  'floorPlans', 'additionalNotes', 'consultation', 'finalNotes'
]

async function getAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_CLIENT_ID!
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET!
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN!

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }).toString(),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Token refresh failed: ${res.status} ${text}`)
  }

  const data = await res.json()
  if (!data.access_token) {
    throw new Error(`No access_token returned: ${JSON.stringify(data)}`)
  }
  return data.access_token as string
}

async function appendToSheet(accessToken: string, payload: FormPayload) {
  const sheetId = process.env.SUBMISSIONS_SHEET_ID!
  const row = COLUMN_ORDER.map((k) => {
    if (k === 'timestamp') return new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
    return (payload as Record<string, string | undefined>)[k as string] || ''
  })

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Submissions!A:AD:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [row] }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Sheet append failed: ${res.status} ${text}`)
  }
}

function formatEmailBody(payload: FormPayload): { html: string; text: string } {
  const fullName = [payload.firstName, payload.lastName].filter(Boolean).join(' ') || '(no name)'
  const fields: Array<[string, string | undefined]> = [
    ['Name', fullName],
    ['Email', payload.email],
    ['Phone', payload.phone],
    ['Location', payload.projectLocation],
    ['Timeframe', payload.projectTimeframe],
    ['Control System', payload.automationSystem],
    ['Screens', payload.interactiveScreens],
    ['Switches', payload.switches],
    ['Audio Rooms', payload.audioRooms],
    ['Network', payload.network],
    ['Lighting', payload.lighting],
    ['Blinds', payload.blinds],
    ['Climate', payload.climate],
    ['Home Theatre', payload.theatre],
    ['Alarm', payload.alarm],
    ['Alarm Notes', payload.alarmNotes],
    ['Cameras', payload.cameras],
    ['Camera Notes', payload.camerasNotes],
    ['Access Control', payload.access],
    ['Pool / Spa / Irrigation', payload.poolSpa],
    ['EV Charger', payload.evCharger],
    ['Weather Station', payload.weatherStation],
    ['Video Distribution', payload.videoDistribution],
    ['Solar', payload.solar],
    ['Floor Plans', payload.floorPlans],
    ['Additional Notes', payload.additionalNotes],
    ['Consultation Requested', payload.consultation],
    ['Final Notes', payload.finalNotes],
  ]

  const rows = fields
    .filter(([, v]) => v && v.trim() !== '')
    .map(([k, v]) =>
      `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;color:#16253F;width:200px;vertical-align:top;">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#16253F;">${escapeHtml(v as string)}</td></tr>`
    )
    .join('')

  const html = `<!DOCTYPE html><html><body style="font-family:'Inter',-apple-system,Helvetica,Arial,sans-serif;background:#F8F4F1;margin:0;padding:24px;color:#16253F;">
<div style="max-width:640px;margin:0 auto;background:#fff;padding:32px;border-radius:6px;">
<p style="font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0134E7;margin:0 0 12px 0;">ELEC REID · NEW DESIGN ENQUIRY</p>
<h1 style="font-family:Georgia,serif;font-size:28px;margin:0 0 8px 0;color:#16253F;">${escapeHtml(fullName)}</h1>
<p style="margin:0 0 24px 0;color:#7d8a9f;font-size:14px;">${escapeHtml(payload.email || '')} · ${escapeHtml(payload.phone || 'no phone')}</p>
<table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
<p style="margin-top:32px;font-size:12px;color:#7d8a9f;">Submitted via elecreid.com/build · ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })} AEST</p>
</div></body></html>`

  const textRows = fields
    .filter(([, v]) => v && v.trim() !== '')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  const text = `New Smart Home Design Enquiry\n\n${fullName}\n${payload.email || ''} · ${payload.phone || ''}\n\n${textRows}\n\nSubmitted via elecreid.com/build\n`

  return { html, text }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function sendEmail(accessToken: string, payload: FormPayload) {
  const fromAddress = process.env.GMAIL_FROM || 'joe@elecreid.com'
  const toAddress = process.env.SUBMISSIONS_TO || 'enquiries@elecreid.com'
  const replyTo = payload.email || ''

  const { html, text } = formatEmailBody(payload)
  const subject = `Smart Home Enquiry · ${payload.firstName || 'Anonymous'} ${payload.lastName || ''}`.trim()

  // Build a multipart MIME message
  const boundary = `boundary_${Date.now()}_${Math.random().toString(36).slice(2)}`
  const mime = [
    `From: Elec Reid Website <${fromAddress}>`,
    `To: ${toAddress}`,
    replyTo ? `Reply-To: ${replyTo}` : '',
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: 7bit`,
    '',
    text,
    '',
    `--${boundary}`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: 7bit`,
    '',
    html,
    '',
    `--${boundary}--`,
  ].filter(Boolean).join('\r\n')

  // Base64url encode for Gmail send
  const raw = Buffer.from(mime).toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw }),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Gmail send failed: ${res.status} ${errText}`)
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as FormPayload

    // Minimal validation: must have email or phone
    if (!payload.email && !payload.phone) {
      return NextResponse.json({ error: 'Email or phone required' }, { status: 400 })
    }

    const accessToken = await getAccessToken()

    // Run sheet append + email in parallel; if one fails, we still want the other
    const results = await Promise.allSettled([
      appendToSheet(accessToken, payload),
      sendEmail(accessToken, payload),
    ])

    const sheetResult = results[0]
    const emailResult = results[1]

    const errors: string[] = []
    if (sheetResult.status === 'rejected') errors.push(`Sheet: ${sheetResult.reason}`)
    if (emailResult.status === 'rejected') errors.push(`Email: ${emailResult.reason}`)

    if (errors.length === 2) {
      // Both failed - return error
      console.error('Submission completely failed:', errors)
      return NextResponse.json({ error: 'Submission failed', details: errors }, { status: 500 })
    }

    if (errors.length === 1) {
      // One succeeded, log the other - still return success to user
      console.error('Submission partially failed:', errors)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Submission handler error:', err)
    return NextResponse.json({ error: 'Internal error', message: String(err) }, { status: 500 })
  }
}
