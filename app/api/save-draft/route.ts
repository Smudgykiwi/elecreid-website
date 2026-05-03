import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// ─── Constants ───────────────────────────────────────────────────────────────

const SHEET_ID = process.env.SUBMISSIONS_SHEET_ID!
const DRAFTS_TAB = 'Drafts'
const DRAFT_EXPIRY_DAYS = 30

// Columns: Timestamp | Draft ID | Email | Current Page | State JSON | Resume Link | Expires At
const DRAFTS_HEADERS = ['Timestamp', 'Draft ID', 'Email', 'Current Page', 'State JSON', 'Resume Link', 'Expires At']

// ─── Google Auth ──────────────────────────────────────────────────────────────

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: 'refresh_token',
    }).toString(),
  })
  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`)
  const data = await res.json()
  if (!data.access_token) throw new Error('No access_token returned')
  return data.access_token as string
}

// ─── Sheets helpers ───────────────────────────────────────────────────────────

/**
 * Ensure the Drafts tab exists. If not, create it with headers.
 */
async function ensureDraftsTab(accessToken: string): Promise<void> {
  // Get current sheet metadata to check tabs
  const metaRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?fields=sheets.properties.title`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )
  if (!metaRes.ok) throw new Error(`Sheet metadata fetch failed: ${metaRes.status}`)
  const meta = await metaRes.json()
  const tabs: string[] = (meta.sheets || []).map((s: { properties: { title: string } }) => s.properties.title)

  if (!tabs.includes(DRAFTS_TAB)) {
    // Create the tab
    const addRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requests: [{ addSheet: { properties: { title: DRAFTS_TAB } } }],
        }),
      }
    )
    if (!addRes.ok) throw new Error(`Failed to create Drafts tab: ${addRes.status}`)

    // Write headers
    await appendRows(accessToken, DRAFTS_TAB, [DRAFTS_HEADERS])
  }
}

async function appendRows(accessToken: string, tab: string, rows: unknown[][]): Promise<void> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(tab)}!A:Z:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: rows }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Sheet append failed: ${res.status} ${text}`)
  }
}

/**
 * Read all rows from the Drafts tab.
 */
async function getDraftsRows(accessToken: string): Promise<string[][]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(DRAFTS_TAB)}!A:G`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!res.ok) return []
  const data = await res.json()
  return (data.values || []) as string[][]
}

// ─── ID generation ────────────────────────────────────────────────────────────

function generateDraftId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let id = ''
  const array = new Uint8Array(12)
  crypto.getRandomValues(array)
  for (const byte of array) {
    id += chars[byte % chars.length]
  }
  return id
}

// ─── Email ────────────────────────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildResumeEmailHtml(resumeLink: string): string {
  const safeLink = escapeHtml(resumeLink)
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Elec Reid plan, saved.</title>
</head>
<body style="margin:0;padding:0;background:#F8F4F1;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#16253F;">
<div style="max-width:600px;margin:40px auto;padding:0 20px;">
  <!-- Header -->
  <div style="background:#16253F;padding:28px 32px;border-radius:4px 4px 0 0;">
    <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0134E7;">ELEC REID</p>
    <p style="margin:6px 0 0 0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.5);">Smart Home Design</p>
  </div>
  <!-- Body -->
  <div style="background:#ffffff;padding:40px 32px;border-radius:0 0 4px 4px;border:1px solid #E2E2E2;border-top:none;">
    <p style="font-family:Georgia,serif;font-style:italic;font-size:30px;font-weight:400;line-height:1.2;margin:0 0 20px 0;color:#16253F;">
      Pick up where you left off.
    </p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px 0;color:#16253F;">
      Your progress is saved. Tap the button below to come back any time in the next 30 days.
    </p>
    <!-- CTA Button -->
    <div style="text-align:center;margin:32px 0;">
      <a href="${safeLink}"
         style="display:inline-block;background:#0134E7;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.08em;padding:16px 36px;border-radius:3px;">
        Resume your plan
      </a>
    </div>
    <p style="font-size:13px;line-height:1.6;color:#8F8F8F;margin:0 0 32px 0;text-align:center;">
      If the button doesn't work, copy this link into your browser:<br>
      <a href="${safeLink}" style="color:#0134E7;word-break:break-all;">${safeLink}</a>
    </p>
    <!-- Divider -->
    <hr style="border:none;border-top:1px solid #E2E2E2;margin:32px 0;">
    <!-- Sign-off -->
    <p style="font-size:14px;line-height:1.6;margin:0 0 4px 0;color:#16253F;font-weight:600;">Joe Reid</p>
    <p style="font-size:13px;line-height:1.6;margin:0;color:#8F8F8F;">
      <a href="mailto:joe@elecreid.com" style="color:#0134E7;">joe@elecreid.com</a>
    </p>
    <p style="font-family:Georgia,serif;font-style:italic;font-size:12px;color:#8F8F8F;margin:24px 0 0 0;">
      Designed for you. Done right. Always.
    </p>
  </div>
</div>
</body>
</html>`
}

async function sendResumeEmail(accessToken: string, to: string, resumeLink: string): Promise<void> {
  const from = process.env.GMAIL_FROM || 'joe@elecreid.com'
  const subject = 'Your Elec Reid plan, saved.'
  const html = buildResumeEmailHtml(resumeLink)
  const text = [
    'Your Elec Reid plan is saved.',
    '',
    'Tap the link below to continue where you left off:',
    resumeLink,
    '',
    'This link is valid for 30 days.',
    '',
    'Joe Reid',
    'joe@elecreid.com',
    '',
    'Designed for you. Done right. Always.',
  ].join('\n')

  const boundary = `boundary_${Date.now()}_${Math.random().toString(36).slice(2)}`
  const mime = [
    `From: Elec Reid <${from}>`,
    `To: ${to}`,
    `Reply-To: ${from}`,
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
  ].join('\r\n')

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

// ─── POST handler — save draft ────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: { email: string; currentPage: string; state: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { email, currentPage, state } = body
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }
  if (!currentPage || !state) {
    return NextResponse.json({ error: 'currentPage and state required' }, { status: 400 })
  }

  let accessToken: string
  try {
    accessToken = await getAccessToken()
  } catch (err) {
    return NextResponse.json({ error: 'Auth failed', detail: String(err) }, { status: 500 })
  }

  // Ensure Drafts tab exists
  try {
    await ensureDraftsTab(accessToken)
  } catch (err) {
    console.error('[save-draft] ensureDraftsTab failed:', err)
    return NextResponse.json({ error: 'Sheet setup failed', detail: String(err) }, { status: 500 })
  }

  const draftId = generateDraftId()
  const now = new Date()
  const expiresAt = new Date(now.getTime() + DRAFT_EXPIRY_DAYS * 24 * 60 * 60 * 1000)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://elecreid-website.vercel.app'
  const resumeLink = `${baseUrl}/build?resume=${draftId}`

  const row = [
    now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
    draftId,
    email,
    String(currentPage),
    JSON.stringify(state),
    resumeLink,
    expiresAt.toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
  ]

  try {
    await appendRows(accessToken, DRAFTS_TAB, [row])
  } catch (err) {
    console.error('[save-draft] Sheet append failed:', err)
    return NextResponse.json({ error: 'Failed to save draft', detail: String(err) }, { status: 500 })
  }

  // Send email (non-critical — we return success even if email fails)
  let emailOk = true
  try {
    await sendResumeEmail(accessToken, email, resumeLink)
  } catch (err) {
    console.error('[save-draft] Email failed:', err)
    emailOk = false
  }

  return NextResponse.json({ ok: true, draftId, resumeLink, emailSent: emailOk })
}

// ─── GET handler — retrieve draft ────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 })
  }

  let accessToken: string
  try {
    accessToken = await getAccessToken()
  } catch (err) {
    return NextResponse.json({ error: 'Auth failed', detail: String(err) }, { status: 500 })
  }

  let rows: string[][]
  try {
    rows = await getDraftsRows(accessToken)
  } catch (err) {
    return NextResponse.json({ error: 'Sheet read failed', detail: String(err) }, { status: 500 })
  }

  // Find matching row (skip header row)
  // Columns: [0]=Timestamp [1]=Draft ID [2]=Email [3]=Current Page [4]=State JSON [5]=Resume Link [6]=Expires At
  const dataRows = rows.slice(1) // skip header
  const match = dataRows.find(row => row[1] === id)

  if (!match) {
    return NextResponse.json({ error: 'Draft not found' }, { status: 404 })
  }

  const expiresAtStr = match[6] || ''
  if (expiresAtStr) {
    const expiresAt = new Date(expiresAtStr.replace(' UTC', 'Z'))
    if (isNaN(expiresAt.getTime()) === false && expiresAt < new Date()) {
      return NextResponse.json({ error: 'Draft expired' }, { status: 410 })
    }
  }

  let state: unknown
  try {
    state = JSON.parse(match[4] || '{}')
  } catch {
    return NextResponse.json({ error: 'Draft data corrupted' }, { status: 500 })
  }

  return NextResponse.json({
    ok: true,
    draftId: id,
    currentPage: match[3],
    state,
  })
}
