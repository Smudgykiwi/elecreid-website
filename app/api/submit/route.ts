import { NextRequest, NextResponse } from 'next/server'

// Force Node runtime so we get full fetch + Buffer
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// ─── Constants ───────────────────────────────────────────────────────────────

const ELEC_REID_SITES_DRIVE_ID = '0AMJKHxdRLRCOUk9PVA'
const JOB_SITES_FOLDER_ID = '1YS1qBi1m7-UOG9AqQz21A55wShdrfn4T'
const ONSITE_TEMPLATE_ID = '1D55oAGLSNsTUs0VXieug3W8c_ZBQaqea4RsroIb35Pw'
const FERGUS_PAT_FALLBACK = 'fergPAT_0e162ec9-ec9e-440e853a73e8-5dcb-49a151546f56-ad5e-42a7-8510-ba5ca90e7527637b9845'
const FERGUS_BASE = 'https://api.fergus.com'

// ─── Types ───────────────────────────────────────────────────────────────────

type FormPayload = {
  // Contact
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  // Address (Stage 07)
  address1?: string
  suburb?: string
  postcode?: string
  // V2 fields
  rooms?: Array<{ id?: string; name?: string; floor?: string }>
  layoutFloorPlan?: string
  projectType?: string  // 'full' | 'essentials' | 'unsure'
  platform?: string
  screens?: string | string[]
  switches?: string | string[]
  switchesNotes?: string
  scenesNotes?: string
  recommendedScenes?: boolean | string
  systems?: string | string[]
  motionSensorDetail?: string
  floorPlans?: string
  timeframe?: string
  involved?: string | string[]
  budget?: string
  otherNotes?: string
  elecReidPick?: { tier?: string }
  collaborators?: {
    architect?: { name?: string; email?: string }
    interiorDesigner?: { name?: string; email?: string }
    builder?: { name?: string; email?: string }
  }
  // Stage 06b deep-dive fields (JSON-stringified objects)
  tvDetails?: string
  audioDetails?: string
  cinemaDetails?: string
  networkDetails?: string
  alarmDetails?: string
  intercomDetails?: string
  cameraDetails?: string
  poolDetails?: string
  wellnessDetails?: string
  // Legacy v1 fields kept for backward compat
  projectLocation?: string
  projectTimeframe?: string
  automationSystem?: string
  interactiveScreens?: string
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
  additionalNotes?: string
  consultation?: string
  finalNotes?: string
}

type SitePortalArgs = {
  accessToken: string
  address1: string
  suburb: string
  clientEmail: string
}

type SitePortalResult = {
  mainFolderId: string
  clientPortalId: string
  mainFolderUrl: string
  clientPortalUrl: string
  folderName: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function joinIfArray(v: unknown): string {
  if (Array.isArray(v)) return v.filter(Boolean).join(', ')
  if (v === undefined || v === null) return ''
  if (typeof v === 'boolean') return v ? 'Yes' : 'No'
  if (typeof v === 'object') return JSON.stringify(v)
  return String(v)
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ─── Column order ─────────────────────────────────────────────────────────────

// Existing columns stay at their positions to avoid breaking live sheets.
// New address fields + processingStatus are appended at the end.
const V2_COLUMN_ORDER: (keyof FormPayload | 'timestamp' | 'processingStatus')[] = [
  'timestamp',
  'firstName', 'lastName', 'phone', 'email',
  'rooms', 'layoutFloorPlan',
  'projectType', 'elecReidPick', 'platform', 'screens', 'switches', 'switchesNotes',
  'scenesNotes', 'recommendedScenes', 'systems', 'motionSensorDetail',
  'floorPlans', 'timeframe', 'involved', 'collaborators', 'budget', 'otherNotes',
  'tvDetails', 'audioDetails', 'cinemaDetails', 'networkDetails', 'alarmDetails',
  'intercomDetails', 'cameraDetails', 'poolDetails', 'wellnessDetails',
  // New address fields (appended at end to preserve existing column positions)
  'address1', 'suburb', 'postcode',
  // Processing status (last column)
  'processingStatus',
]

// Index of processingStatus column (0-based) → spreadsheet column letter
const PROCESSING_STATUS_COL_INDEX = V2_COLUMN_ORDER.indexOf('processingStatus') // 35
function colIndexToLetter(idx: number): string {
  let result = ''
  let n = idx + 1
  while (n > 0) {
    const rem = (n - 1) % 26
    result = String.fromCharCode(65 + rem) + result
    n = Math.floor((n - 1) / 26)
  }
  return result
}
const PROCESSING_STATUS_COL = colIndexToLetter(PROCESSING_STATUS_COL_INDEX)

// ─── Google Auth ──────────────────────────────────────────────────────────────

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

// ─── Google Sheets ────────────────────────────────────────────────────────────

/**
 * Append a submission row. Returns the 1-based sheet row number for later updates.
 */
async function appendToSheet(accessToken: string, payload: FormPayload): Promise<number> {
  const sheetId = process.env.SUBMISSIONS_SHEET_ID!
  const row = V2_COLUMN_ORDER.map((k) => {
    if (k === 'timestamp') return new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
    if (k === 'processingStatus') return 'Processing...'
    return joinIfArray((payload as Record<string, unknown>)[k as string])
  })

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Submissions!A:AZ:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`
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

  const json = await res.json()
  // Parse row number from updatedRange like "Submissions!A45:AJ45"
  const updatedRange: string = json?.updates?.updatedRange || ''
  const match = updatedRange.match(/:([A-Z]+)(\d+)$/)
  return match ? parseInt(match[2], 10) : 0
}

/**
 * Update the processingStatus cell for a previously appended row.
 */
async function updateProcessingStatus(accessToken: string, rowNumber: number, statusText: string): Promise<void> {
  if (!rowNumber) return
  const sheetId = process.env.SUBMISSIONS_SHEET_ID!
  const range = `Submissions!${PROCESSING_STATUS_COL}${rowNumber}`
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?valueInputOption=RAW`
  await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [[statusText]] }),
  })
  // Non-critical — don't throw on failure
}

/**
 * Append a failure record to the "Submission Failures" tab.
 */
async function appendFailure(
  accessToken: string,
  submissionRef: string,
  step: string,
  error: string,
): Promise<void> {
  const sheetId = process.env.SUBMISSIONS_SHEET_ID!
  const row = [
    new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
    submissionRef,
    step,
    error,
  ]
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Submission%20Failures!A:D:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values: [row] }),
    })
  } catch (e) {
    console.error('[appendFailure] Could not log failure to sheet:', e)
  }
}

// ─── Google Drive ─────────────────────────────────────────────────────────────

/**
 * Search for a folder by name inside a parent folder (shared drive aware).
 */
async function searchDriveFolder(
  accessToken: string,
  folderName: string,
  parentId: string,
): Promise<string | null> {
  const q = encodeURIComponent(
    `name='${folderName.replace(/'/g, "\\'")}' and '${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`
  )
  const url = `https://www.googleapis.com/drive/v3/files?q=${q}&supportsAllDrives=true&includeItemsFromAllDrives=true&corpora=drive&driveId=${ELEC_REID_SITES_DRIVE_ID}&fields=files(id,name)`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!res.ok) return null
  const data = await res.json()
  return data.files?.[0]?.id || null
}

/**
 * Create a folder in Drive (shared drive aware).
 */
async function createDriveFolder(
  accessToken: string,
  name: string,
  parentId: string,
): Promise<string> {
  const res = await fetch('https://www.googleapis.com/drive/v3/files?supportsAllDrives=true', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [parentId],
    }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Drive folder create failed for "${name}": ${res.status} ${text}`)
  }
  const data = await res.json()
  return data.id as string
}

/**
 * Copy a Drive file into a destination folder.
 */
async function copyDriveFile(
  accessToken: string,
  sourceFileId: string,
  newName: string,
  destFolderId: string,
): Promise<string> {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files/${sourceFileId}/copy?supportsAllDrives=true`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName, parents: [destFolderId] }),
    },
  )
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Drive file copy failed: ${res.status} ${text}`)
  }
  const data = await res.json()
  return data.id as string
}

/**
 * Grant a user commenter access to a Drive item.
 */
async function grantDrivePermission(
  accessToken: string,
  fileId: string,
  emailAddress: string,
): Promise<void> {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files/${fileId}/permissions?supportsAllDrives=true&sendNotificationEmail=true`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'user',
        role: 'commenter',
        emailAddress,
      }),
    },
  )
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Drive permission grant failed: ${res.status} ${text}`)
  }
}

/**
 * Create the full site portal folder structure.
 * Idempotent: returns existing folder IDs if the main folder already exists.
 *
 * Structure:
 *   Job Sites/<address>, <suburb>/
 *     Onsite Fill Out - <address>, <suburb>  (copy of master template)
 *     Pricing/
 *     Config Files/
 *     Client Portal/
 *       Site Plans/
 *       Site Photos/
 *       Documentation/
 */
export async function createSitePortal(args: SitePortalArgs): Promise<SitePortalResult> {
  const { accessToken, address1, suburb, clientEmail } = args
  const folderName = `${address1}, ${suburb}`

  // Idempotency: check if folder already exists
  let mainFolderId = await searchDriveFolder(accessToken, folderName, JOB_SITES_FOLDER_ID)

  if (!mainFolderId) {
    // Create main folder
    mainFolderId = await createDriveFolder(accessToken, folderName, JOB_SITES_FOLDER_ID)

    // Create internal subfolders
    await Promise.all([
      createDriveFolder(accessToken, 'Pricing', mainFolderId),
      createDriveFolder(accessToken, 'Config Files', mainFolderId),
    ])

    // Copy the Onsite Fill Out template into the main folder
    await copyDriveFile(
      accessToken,
      ONSITE_TEMPLATE_ID,
      `Onsite Fill Out - ${folderName}`,
      mainFolderId,
    )
  }

  // Check if Client Portal subfolder exists
  let clientPortalId = await searchDriveFolder(accessToken, 'Client Portal', mainFolderId)
  if (!clientPortalId) {
    clientPortalId = await createDriveFolder(accessToken, 'Client Portal', mainFolderId)
    await Promise.all([
      createDriveFolder(accessToken, 'Site Plans', clientPortalId),
      createDriveFolder(accessToken, 'Site Photos', clientPortalId),
      createDriveFolder(accessToken, 'Documentation', clientPortalId),
    ])
  }

  // Grant client commenter access to Client Portal
  if (clientEmail) {
    await grantDrivePermission(accessToken, clientPortalId, clientEmail)
  }

  return {
    mainFolderId,
    clientPortalId,
    mainFolderUrl: `https://drive.google.com/drive/folders/${mainFolderId}`,
    clientPortalUrl: `https://drive.google.com/drive/folders/${clientPortalId}`,
    folderName,
  }
}

// ─── Emails ───────────────────────────────────────────────────────────────────

function buildClientEmailHtml(payload: FormPayload, clientPortalUrl: string): string {
  const firstName = payload.firstName || 'there'
  const portalUrl = escapeHtml(clientPortalUrl)

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Elec Reid project portal</title>
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
    <p style="font-family:Georgia,serif;font-size:26px;font-weight:400;line-height:1.2;margin:0 0 20px 0;color:#16253F;">
      Hi ${escapeHtml(firstName)},
    </p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px 0;color:#16253F;">
      Your plan submission is in. Joe will be in touch within three business days to schedule your discovery call.
    </p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 28px 0;color:#16253F;">
      In the meantime, your project portal is ready. Upload floor plans, mood boards, or anything you want us to see. We'll add proposal documents and project files as the work progresses.
    </p>
    <!-- CTA Button -->
    <div style="text-align:center;margin:32px 0;">
      <a href="${portalUrl}"
         style="display:inline-block;background:#0134E7;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.08em;padding:14px 32px;border-radius:3px;">
        Open your Project Portal
      </a>
    </div>
    <p style="font-size:13px;line-height:1.6;color:#8F8F8F;margin:0 0 32px 0;text-align:center;">
      If the button doesn't work, copy this link into your browser:<br>
      <a href="${portalUrl}" style="color:#0134E7;word-break:break-all;">${portalUrl}</a>
    </p>
    <!-- Divider -->
    <hr style="border:none;border-top:1px solid #E2E2E2;margin:32px 0;">
    <!-- Sign-off -->
    <p style="font-size:14px;line-height:1.6;margin:0 0 4px 0;color:#16253F;font-weight:600;">Joe Reid</p>
    <p style="font-size:13px;line-height:1.6;margin:0 0 4px 0;color:#8F8F8F;">Director</p>
    <p style="font-size:13px;line-height:1.6;margin:0 0 4px 0;color:#8F8F8F;">
      <a href="mailto:joe@elecreid.com" style="color:#0134E7;">joe@elecreid.com</a> &nbsp;·&nbsp; 0450 342 075
    </p>
    <!-- Footer tagline -->
    <p style="font-family:Georgia,serif;font-style:italic;font-size:12px;color:#8F8F8F;margin:24px 0 0 0;">
      Designed for you. Done right. Always.
    </p>
  </div>
</div>
</body>
</html>`
}

async function sendEmailToJoe(accessToken: string, payload: FormPayload): Promise<void> {
  const fromAddress = process.env.GMAIL_FROM || 'joe@elecreid.com'
  const toAddress = process.env.SUBMISSIONS_TO || 'enquiries@elecreid.com'
  const replyTo = payload.email || ''

  const { html, text } = formatEmailBody(payload)
  let subject: string
  if (payload.projectType === 'elec-reid-pick') {
    const tierLabels: Record<string, string> = {
      foundation: 'Foundation',
      considered: 'Considered',
      estate: 'Estate',
      architectural: 'Estate',
      recommend: 'Recommend',
    }
    const tierLabel = tierLabels[payload.elecReidPick?.tier || ''] || payload.elecReidPick?.tier || 'Unknown'
    subject = `Smart Home Enquiry - Elec Reid Pick (${tierLabel}) - ${payload.firstName || 'Anonymous'} ${payload.lastName || ''}`.trim()
  } else {
    subject = `Smart Home Enquiry - ${payload.firstName || 'Anonymous'} ${payload.lastName || ''}`.trim()
  }

  await sendRawEmail(accessToken, fromAddress, toAddress, replyTo, subject, html, text)
}

async function sendClientEmail(
  accessToken: string,
  payload: FormPayload,
  clientPortalUrl: string,
): Promise<void> {
  const fromAddress = process.env.GMAIL_FROM || 'joe@elecreid.com'
  const toAddress = payload.email!
  const firstName = payload.firstName || 'there'
  const subject = `Welcome to your Elec Reid plan, ${firstName}`
  const html = buildClientEmailHtml(payload, clientPortalUrl)
  const text = [
    `Hi ${firstName},`,
    '',
    'Your plan submission is in. Joe will be in touch within three business days to schedule your discovery call.',
    '',
    'Your project portal is ready:',
    clientPortalUrl,
    '',
    'Upload floor plans, mood boards, or anything you want us to see. We\'ll add proposal documents and project files as the work progresses.',
    '',
    'Joe Reid',
    'Director',
    'joe@elecreid.com | 0450 342 075',
    '',
    'Designed for you. Done right. Always.',
  ].join('\n')

  await sendRawEmail(accessToken, fromAddress, toAddress, '', subject, html, text)
}

async function sendRecoveryEmail(
  accessToken: string,
  clientName: string,
  step: string,
  error: string,
): Promise<void> {
  const fromAddress = process.env.GMAIL_FROM || 'joe@elecreid.com'
  const toAddress = fromAddress
  const subject = `${clientName} submission needs manual recovery: ${step}`
  const html = `<p><strong>Submission recovery needed</strong></p>
<p>Client: ${escapeHtml(clientName)}<br>
Step that failed: ${escapeHtml(step)}<br>
Error: ${escapeHtml(error)}</p>
<p>Please handle this manually in Google Drive or Fergus.</p>`
  const text = `Submission recovery needed\n\nClient: ${clientName}\nStep: ${step}\nError: ${error}\n\nPlease handle manually.`
  try {
    await sendRawEmail(accessToken, fromAddress, toAddress, '', subject, html, text)
  } catch (e) {
    console.error('[sendRecoveryEmail] Could not send recovery alert to Joe:', e)
  }
}

async function sendRawEmail(
  accessToken: string,
  from: string,
  to: string,
  replyTo: string,
  subject: string,
  html: string,
  text: string,
): Promise<void> {
  const boundary = `boundary_${Date.now()}_${Math.random().toString(36).slice(2)}`
  const mime = [
    `From: Elec Reid <${from}>`,
    `To: ${to}`,
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
  ].filter(line => line !== undefined && !(line === '' && replyTo === '')).join('\r\n')

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

// ─── Joe notification email body ──────────────────────────────────────────────

function formatEmailBody(payload: FormPayload): { html: string; text: string } {
  const fullName = [payload.firstName, payload.lastName].filter(Boolean).join(' ') || '(no name)'

  let roomsText = ''
  if (payload.rooms && payload.rooms.length > 0) {
    const floorMap: Record<string, string[]> = {}
    payload.rooms.forEach(r => {
      const floor = r.floor || 'Other'
      const name = r.name || '(unnamed)'
      if (!floorMap[floor]) floorMap[floor] = []
      floorMap[floor].push(name)
    })
    roomsText = Object.entries(floorMap)
      .map(([floor, rooms]) => `${floor}:\n${rooms.map(n => `  - ${n}`).join('\n')}`)
      .join('\n')
  }

  const address = [payload.address1, payload.suburb, payload.postcode].filter(Boolean).join(', ')

  const fields: Array<[string, string | undefined]> = [
    ['Name', fullName],
    ['Email', payload.email],
    ['Phone', payload.phone],
    ['Project Address', address || undefined],
    ['Layout', roomsText || undefined],
    ['Layout notes', payload.layoutFloorPlan],
    ['Project Type', payload.projectType],
    ['Elec Reid Pick Tier', payload.elecReidPick?.tier || ''],
    ['Platform', payload.platform || payload.automationSystem],
    ['Screens', joinIfArray(payload.screens) || payload.interactiveScreens],
    ['Switches', joinIfArray(payload.switches)],
    ['Switches notes', payload.switchesNotes],
    ['Scenes Notes', payload.scenesNotes],
    ['Recommended Scenes Requested', joinIfArray(payload.recommendedScenes)],
    ['Systems', joinIfArray(payload.systems)],
    ['Motion Sensor Detail', payload.motionSensorDetail],
    ['Timeframe', payload.timeframe || payload.projectTimeframe],
    ['Who Is Involved', joinIfArray(payload.involved)],
    ['Budget', payload.budget],
    ['Floor Plans', payload.floorPlans],
    ['Collaborators - Architect', payload.collaborators?.architect ? [payload.collaborators.architect.name, payload.collaborators.architect.email].filter(Boolean).join(' · ') : ''],
    ['Collaborators - Interior Designer', payload.collaborators?.interiorDesigner ? [payload.collaborators.interiorDesigner.name, payload.collaborators.interiorDesigner.email].filter(Boolean).join(' · ') : ''],
    ['Collaborators - Builder', payload.collaborators?.builder ? [payload.collaborators.builder.name, payload.collaborators.builder.email].filter(Boolean).join(' · ') : ''],
    ['Other Notes', payload.otherNotes || payload.additionalNotes],
    ['TV Details', payload.tvDetails],
    ['Audio Details', payload.audioDetails],
    ['Cinema Details', payload.cinemaDetails],
    ['Network Details', payload.networkDetails],
    ['Alarm Details', payload.alarmDetails],
    ['Intercom Details', payload.intercomDetails],
    ['Camera Details', payload.cameraDetails],
    ['Pool Details', payload.poolDetails],
    ['Wellness Details', payload.wellnessDetails],
  ]

  const rows = fields
    .filter(([, v]) => v && v.trim() !== '')
    .map(([k, v]) =>
      `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;color:#16253F;width:200px;vertical-align:top;">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#16253F;">${escapeHtml(v as string)}</td></tr>`
    )
    .join('')

  const html = `<!DOCTYPE html><html><body style="font-family:'Inter',-apple-system,Helvetica,Arial,sans-serif;background:#F8F4F1;margin:0;padding:24px;color:#16253F;">
<div style="max-width:640px;margin:0 auto;background:#fff;padding:32px;border-radius:6px;">
<p style="font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0134E7;margin:0 0 12px 0;">ELEC REID - NEW DESIGN ENQUIRY</p>
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

// ─── Fergus ───────────────────────────────────────────────────────────────────

function fergusHeaders(): Record<string, string> {
  const pat = process.env.FERGUS_PAT || FERGUS_PAT_FALLBACK
  return {
    Authorization: `Bearer ${pat}`,
    'Content-Type': 'application/json',
  }
}

async function createFergusCustomer(payload: FormPayload): Promise<string> {
  const body = {
    customerFullName: [payload.firstName, payload.lastName].filter(Boolean).join(' '),
    mainContact: {
      firstName: payload.firstName || '',
      lastName: payload.lastName || '',
      contactItems: [
        ...(payload.email ? [{ contactType: 'email', contactValue: payload.email }] : []),
        ...(payload.phone ? [{ contactType: 'phone', contactValue: payload.phone }] : []),
      ],
    },
  }

  const res = await fetch(`${FERGUS_BASE}/customers`, {
    method: 'POST',
    headers: fergusHeaders(),
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Fergus customer create failed: ${res.status} ${text}`)
  }

  const data = await res.json()
  const customerId = data?.data?.id || data?.id
  if (!customerId) throw new Error(`Fergus customer: no ID returned. Response: ${JSON.stringify(data)}`)
  return String(customerId)
}

async function createFergusSite(payload: FormPayload, customerId: string): Promise<string> {
  const body = {
    customerId,
    siteAddress: {
      address1: payload.address1 || '',
      addressSuburb: payload.suburb || '',
      addressRegion: 'VIC',
      postCode: payload.postcode || '',
    },
    defaultContact: {
      firstName: payload.firstName || '',
      lastName: payload.lastName || '',
      contactItems: [
        ...(payload.email ? [{ contactType: 'email', contactValue: payload.email }] : []),
      ],
    },
  }

  const res = await fetch(`${FERGUS_BASE}/sites`, {
    method: 'POST',
    headers: fergusHeaders(),
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Fergus site create failed: ${res.status} ${text}`)
  }

  const data = await res.json()
  const siteId = data?.data?.id || data?.id
  if (!siteId) throw new Error(`Fergus site: no ID returned. Response: ${JSON.stringify(data)}`)
  return String(siteId)
}

async function createFergusJob(payload: FormPayload, customerId: string, siteId: string): Promise<void> {
  const address = [payload.address1, payload.suburb].filter(Boolean).join(', ')
  const clientName = [payload.firstName, payload.lastName].filter(Boolean).join(' ')
  const title = address
    ? `Smart Home - ${address}`
    : `Smart Home - ${clientName}`

  const body = {
    customerId,
    siteId,
    title,
    description: `Smart home discovery: ${formatProjectType(payload.projectType || '')}`,
    longDescription: formatScope(payload),
    jobType: 'Quote',
    status: 'Pending',
  }

  const res = await fetch(`${FERGUS_BASE}/jobs`, {
    method: 'POST',
    headers: fergusHeaders(),
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Fergus job create failed: ${res.status} ${text}`)
  }
}

// ─── Scope formatter ──────────────────────────────────────────────────────────

function formatProjectType(raw: string): string {
  const map: Record<string, string> = {
    full: 'Full Smart Home',
    essentials: 'Essentials',
    'elec-reid-pick': 'Elec Reid Pick',
    unsure: 'Guidance Needed',
  }
  return map[raw] || raw || 'Unknown'
}

function formatScope(payload: FormPayload): string {
  const lines: string[] = []

  lines.push('Smart Home Discovery - submitted via online form')
  lines.push('')

  if (payload.projectType) {
    let typeLabel = formatProjectType(payload.projectType)
    if (payload.projectType === 'elec-reid-pick' && payload.elecReidPick?.tier) {
      typeLabel += ` (${payload.elecReidPick.tier})`
    }
    lines.push(`PROJECT TYPE: ${typeLabel}`)
    lines.push('')
  }

  if (payload.platform) {
    const platformMap: Record<string, string> = {
      'apple-home': 'Apple Home',
      'home-assistant': 'Home Assistant',
      control4: 'Control4',
      cbus: 'Cbus',
      knx: 'KNX',
      other: 'Other',
    }
    lines.push(`PLATFORM: ${platformMap[payload.platform] || payload.platform}`)
    lines.push('')
  }

  const screens = toArray(payload.screens)
  if (screens.length > 0) {
    lines.push('SCREENS:')
    screens.forEach(s => lines.push(`- ${s}`))
    lines.push('')
  }

  const switches = toArray(payload.switches)
  if (switches.length > 0) {
    lines.push('SWITCHES:')
    switches.forEach(s => lines.push(`- ${s}`))
    if (payload.switchesNotes) lines.push(`Notes: ${payload.switchesNotes}`)
    lines.push('')
  }

  if (payload.scenesNotes) {
    lines.push(`SCENES: ${payload.scenesNotes}`)
    lines.push('')
  }

  const systems = toArray(payload.systems)
  if (systems.length > 0) {
    lines.push('SYSTEMS REQUESTED:')
    systems.forEach(s => lines.push(`- ${s}`))
    lines.push('')
  }

  // Deep-dive details
  type DeepDiveEntry = { key: keyof FormPayload; label: string }
  const deepDiveFields: DeepDiveEntry[] = [
    { key: 'tvDetails', label: 'TV' },
    { key: 'audioDetails', label: 'AUDIO' },
    { key: 'cinemaDetails', label: 'CINEMA' },
    { key: 'networkDetails', label: 'NETWORK' },
    { key: 'alarmDetails', label: 'ALARM' },
    { key: 'intercomDetails', label: 'INTERCOM' },
    { key: 'cameraDetails', label: 'CAMERAS' },
    { key: 'poolDetails', label: 'POOL' },
    { key: 'wellnessDetails', label: 'WELLNESS' },
  ]

  const deepLines: string[] = []
  for (const { key, label } of deepDiveFields) {
    const raw = payload[key] as string | undefined
    if (!raw) continue
    try {
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
      const rendered = renderDeepDive(parsed as Record<string, unknown>)
      if (rendered) {
        deepLines.push(`${label}:`)
        deepLines.push(rendered)
        deepLines.push('')
      }
    } catch {
      // Unparseable — skip silently
    }
  }

  if (deepLines.length > 0) {
    lines.push('DEEP-DIVE DETAILS:')
    lines.push(...deepLines)
  }

  // Collaborators
  const collabLines: string[] = []
  const arch = payload.collaborators?.architect
  const id = payload.collaborators?.interiorDesigner
  const builder = payload.collaborators?.builder
  if (arch?.name || arch?.email) collabLines.push(`- Architect: ${arch.name || ''} (${arch.email || ''})`)
  if (id?.name || id?.email) collabLines.push(`- Interior designer: ${id.name || ''} (${id.email || ''})`)
  if (builder?.name || builder?.email) collabLines.push(`- Builder: ${builder.name || ''} (${builder.email || ''})`)
  if (collabLines.length > 0) {
    lines.push('COLLABORATORS:')
    lines.push(...collabLines)
    lines.push('')
  }

  if (payload.budget) lines.push(`BUDGET: ${payload.budget}`)
  if (payload.timeframe) lines.push(`TIMEFRAME: ${payload.timeframe}`)
  if (payload.budget || payload.timeframe) lines.push('')

  if (payload.otherNotes) {
    lines.push('Other notes:')
    lines.push(payload.otherNotes)
    lines.push('')
  }

  const address = [payload.address1, payload.suburb, payload.postcode].filter(Boolean).join(', ')
  if (address) {
    lines.push(`Project address: ${address}`)
    lines.push('')
  }

  if (payload.floorPlans) {
    lines.push('Floor plans:')
    lines.push(payload.floorPlans)
  }

  return lines.join('\n').trim()
}

function renderDeepDive(obj: Record<string, unknown>): string {
  if (!obj || typeof obj !== 'object') return ''
  const parts: string[] = []

  function addField(label: string, value: unknown) {
    if (value === undefined || value === null || value === '' || value === false) return
    if (Array.isArray(value)) {
      if (value.length === 0) return
      parts.push(`  ${label}: ${value.join(', ')}`)
    } else if (typeof value === 'object') {
      const nested = Object.entries(value as Record<string, unknown>)
        .filter(([, v]) => v !== '' && v !== null && v !== undefined && v !== false && !(Array.isArray(v) && v.length === 0))
        .map(([k, v]) => `${k}: ${Array.isArray(v) ? (v as unknown[]).join(', ') : v}`)
        .join('; ')
      if (nested) parts.push(`  ${label}: ${nested}`)
    } else {
      parts.push(`  ${label}: ${value}`)
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    addField(key, value)
  }

  return parts.join('\n')
}

function toArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.filter(Boolean) as string[]
  if (typeof v === 'string' && v) return [v]
  return []
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let payload: FormPayload
  try {
    payload = (await req.json()) as FormPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Minimal validation
  if (!payload.email && !payload.phone) {
    return NextResponse.json({ error: 'Email or phone required' }, { status: 400 })
  }

  const clientName = [payload.firstName, payload.lastName].filter(Boolean).join(' ') || 'Unknown Client'
  const submissionRef = `${clientName} @ ${new Date().toISOString().slice(0, 16)}`

  // ── TIER 1 — BULLETPROOF ─────────────────────────────────────────────────
  let accessToken: string
  try {
    accessToken = await getAccessToken()
  } catch (err) {
    console.error('[Tier 1] Token refresh failed:', err)
    return NextResponse.json({ error: 'Authentication error', message: String(err) }, { status: 500 })
  }

  let rowNumber = 0
  const tier1Errors: string[] = []

  try {
    rowNumber = await appendToSheet(accessToken, payload)
  } catch (err) {
    console.error('[Tier 1] Sheet append failed:', err)
    tier1Errors.push(`Sheet: ${err}`)
  }

  try {
    await sendEmailToJoe(accessToken, payload)
  } catch (err) {
    console.error('[Tier 1] Joe email failed:', err)
    tier1Errors.push(`Email: ${err}`)
  }

  // Both Tier 1 steps failed — return error to user
  if (tier1Errors.length === 2) {
    return NextResponse.json({ error: 'Submission failed', details: tier1Errors }, { status: 500 })
  }

  // At least one Tier 1 step succeeded — continue with best-effort tiers
  // Track status for all steps
  const statusParts: string[] = []
  if (tier1Errors.length === 0) {
    statusParts.push('T1:ok')
  } else {
    statusParts.push(`T1:partial(${tier1Errors.map(e => e.split(':')[0]).join(',')})`)
  }

  const hasAddress = !!(payload.address1 && payload.suburb)

  // ── TIER 2 — IMPORTANT BUT RECOVERABLE ───────────────────────────────────
  const tier2Status: Record<string, string> = {}

  if (hasAddress) {
    // Step: Create Drive folder structure
    let portalResult: SitePortalResult | null = null
    try {
      portalResult = await createSitePortal({
        accessToken,
        address1: payload.address1!,
        suburb: payload.suburb!,
        clientEmail: payload.email || '',
      })
      tier2Status.folder = 'ok'
      tier2Status.access = 'ok'
    } catch (err) {
      const msg = String(err)
      console.error('[Tier 2] Drive folder creation failed:', msg)
      tier2Status.folder = 'failed'
      await appendFailure(accessToken, submissionRef, 'drive-folder', msg)
      await sendRecoveryEmail(accessToken, clientName, 'Drive folder creation', msg)
    }

    if (portalResult) {
      // Step: Email client with portal link
      if (payload.email) {
        try {
          await sendClientEmail(accessToken, payload, portalResult.clientPortalUrl)
          tier2Status.clientEmail = 'ok'
        } catch (err) {
          const msg = String(err)
          console.error('[Tier 2] Client email failed:', msg)
          tier2Status.clientEmail = 'failed'
          await appendFailure(accessToken, submissionRef, 'client-email', msg)
          await sendRecoveryEmail(
            accessToken,
            clientName,
            'Client portal email',
            `${msg} - portal URL: ${portalResult.clientPortalUrl}`,
          )
        }
      }
    }
  } else {
    // No address — skip Drive and client email gracefully
    tier2Status.folder = 'skipped-no-address'
    tier2Status.clientEmail = 'skipped-no-address'
    console.log('[Tier 2] Skipped Drive/email: no project address provided')
  }

  statusParts.push(
    `T2:folder=${tier2Status.folder || 'skip'},email=${tier2Status.clientEmail || 'skip'}`
  )

  // ── TIER 3 — OPTIONAL (Fergus) ────────────────────────────────────────────
  const tier3Status: Record<string, string> = {}

  if (hasAddress) {
    let customerId: string | null = null

    // Step: Create Fergus customer
    try {
      customerId = await createFergusCustomer(payload)
      tier3Status.customer = 'ok'
    } catch (err) {
      const msg = String(err)
      console.error('[Tier 3] Fergus customer failed:', msg)
      tier3Status.customer = 'failed'
      await appendFailure(accessToken, submissionRef, 'fergus-customer', msg)
    }

    if (customerId) {
      let siteId: string | null = null

      // Step: Create Fergus site
      try {
        siteId = await createFergusSite(payload, customerId)
        tier3Status.site = 'ok'
      } catch (err) {
        const msg = String(err)
        console.error('[Tier 3] Fergus site failed:', msg)
        tier3Status.site = 'failed'
        await appendFailure(accessToken, submissionRef, 'fergus-site', msg)
      }

      if (siteId) {
        // Step: Create Fergus job
        try {
          await createFergusJob(payload, customerId, siteId)
          tier3Status.job = 'ok'
        } catch (err) {
          const msg = String(err)
          console.error('[Tier 3] Fergus job failed:', msg)
          tier3Status.job = 'failed'
          await appendFailure(accessToken, submissionRef, 'fergus-job', msg)
        }
      }
    }
  } else {
    tier3Status.customer = 'skipped-no-address'
    tier3Status.site = 'skipped-no-address'
    tier3Status.job = 'skipped-no-address'
  }

  statusParts.push(
    `T3:cust=${tier3Status.customer || 'skip'},site=${tier3Status.site || 'skip'},job=${tier3Status.job || 'skip'}`
  )

  // Update processing status in sheet
  const finalStatus = statusParts.join(' | ')
  await updateProcessingStatus(accessToken, rowNumber, finalStatus)

  return NextResponse.json({ ok: true })
}
