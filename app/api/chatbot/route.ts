import { NextRequest, NextResponse } from 'next/server';
import { elecReidAssistantPrompt, fallbackAssistantReply } from '@/lib/chatbotPrompt';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

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
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, 1200),
    }));
};

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const messages = cleanMessages(body?.messages);
  const latestUserMessage = [...messages].reverse().find((message) => message.role === 'user')?.content ?? '';

  if (!latestUserMessage) {
    return NextResponse.json({ reply: 'Tell me about the project, and we can map the right direction.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ reply: fallbackAssistantReply(latestUserMessage), mode: 'fallback' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.ELEC_REID_CHAT_MODEL || 'gpt-4o-mini',
        temperature: 0.35,
        max_tokens: 260,
        messages: [
          { role: 'system', content: elecReidAssistantPrompt },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ reply: fallbackAssistantReply(latestUserMessage), mode: 'fallback' });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      reply: reply || fallbackAssistantReply(latestUserMessage),
      mode: reply ? 'ai' : 'fallback',
    });
  } catch {
    return NextResponse.json({ reply: fallbackAssistantReply(latestUserMessage), mode: 'fallback' });
  }
}
