import { NextRequest, NextResponse } from 'next/server';
import { elecReidAssistantPrompt, fallbackAssistantReply } from '@/lib/chatbotPrompt';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const CHAT_LOG_TAB = 'Chatbot Conversations';
const CHAT_LOG_HEADERS = [
  'timestamp',
  'conversationId',
  'mode',
  'pageUrl',
  'latestUserMessage',
  'assistantReply',
  'messagesJson',
  'userAgent',
  'referrer',
];

const cleanMessages = (messages: unknown): ChatMessage[] => {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter((message): message is ChatMessage => {
      if (!message || typeof message !== 'object') return false;
      const candidate = message as Partial<ChatMessage>;
      return (
        (candidate.role === 'user' || candidate.role === 'assistant') &&
        typeof candidate.content === 'string' &&
        candidate.content.trim().length > 0
      );
    })
    .slice(-16)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 1400),
    }));
};

const cleanText = (value: unknown, maxLength = 500) => {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
};

async function getGoogleAccessToken(): Promise<string | null> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }).toString(),
  });

  if (!res.ok) throw new Error(`Google token failed: ${res.status}`);
  const data = await res.json();
  return data.access_token || null;
}

async function ensureChatLogTab(accessToken: string, sheetId: string): Promise<void> {
  const metaRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties.title`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  if (!metaRes.ok) throw new Error(`Sheet metadata fetch failed: ${metaRes.status}`);

  const meta = await metaRes.json();
  const tabs: string[] = (meta.sheets || []).map((sheet: { properties: { title: string } }) => sheet.properties.title);
  if (tabs.includes(CHAT_LOG_TAB)) return;

  const addRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}:batchUpdate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          addSheet: {
            properties: { title: CHAT_LOG_TAB },
          },
        },
      ],
    }),
  });

  if (!addRes.ok) throw new Error(`Sheet tab create failed: ${addRes.status}`);

  await appendChatLogRows(accessToken, sheetId, [CHAT_LOG_HEADERS]);
}

async function appendChatLogRows(accessToken: string, sheetId: string, rows: unknown[][]): Promise<void> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
    CHAT_LOG_TAB,
  )}!A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: rows }),
  });

  if (!res.ok) throw new Error(`Sheet append failed: ${res.status} ${await res.text()}`);
}

async function logChatInteraction(input: {
  conversationId: string;
  mode: string;
  pageUrl: string;
  latestUserMessage: string;
  reply: string;
  messages: ChatMessage[];
  userAgent: string;
  referrer: string;
}): Promise<void> {
  const sheetId = process.env.CHATBOT_LOG_SHEET_ID || process.env.SUBMISSIONS_SHEET_ID;
  if (!sheetId) return;

  const accessToken = await getGoogleAccessToken();
  if (!accessToken) return;

  await ensureChatLogTab(accessToken, sheetId);
  await appendChatLogRows(accessToken, sheetId, [
    [
      new Date().toISOString(),
      input.conversationId,
      input.mode,
      input.pageUrl,
      input.latestUserMessage,
      input.reply,
      JSON.stringify(input.messages),
      input.userAgent,
      input.referrer,
    ],
  ]);
}

async function getAiReply(messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.ELEC_REID_CHAT_MODEL || 'gpt-4o-mini',
      temperature: 0.25,
      max_tokens: 260,
      messages: [{ role: 'system', content: elecReidAssistantPrompt }, ...messages],
    }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data?.choices?.[0]?.message?.content?.trim() || null;
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const messages = cleanMessages(body?.messages);
  const latestUserMessage = [...messages].reverse().find((message) => message.role === 'user')?.content ?? '';
  const conversationId = cleanText(body?.conversationId, 120) || `chat-${Date.now()}`;
  const pageUrl = cleanText(body?.pageUrl, 700);
  const userAgent = request.headers.get('user-agent') || '';
  const referrer = request.headers.get('referer') || '';

  if (!latestUserMessage) {
    return NextResponse.json({ reply: 'Tell me about the project, and we can map the right direction.', mode: 'fallback' });
  }

  let reply = fallbackAssistantReply(messages);
  let mode = 'fallback';

  try {
    const aiReply = await getAiReply(messages);
    if (aiReply) {
      reply = aiReply;
      mode = 'ai';
    }
  } catch (err) {
    console.error('[chatbot] AI reply failed:', err);
  }

  const messagesWithReply: ChatMessage[] = [...messages, { role: 'assistant', content: reply }];

  try {
    await logChatInteraction({
      conversationId,
      mode,
      pageUrl,
      latestUserMessage,
      reply,
      messages: messagesWithReply,
      userAgent,
      referrer,
    });
  } catch (err) {
    console.error('[chatbot] Conversation logging failed:', err);
  }

  return NextResponse.json({ reply, mode, conversationId });
}
