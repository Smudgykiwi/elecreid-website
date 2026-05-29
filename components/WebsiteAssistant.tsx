'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const starterPrompts = [
  'What does a smart home actually cost?',
  "I'm building or renovating. Where do I start?",
  "What's the difference between Apple Home, KNX and Control4?",
  'Can you upgrade my existing home?',
];

const openingMessage =
  'Welcome to Elec Reid. We design and install premium smart homes across Melbourne, with Apple Home at the core and everything underneath built to disappear into the architecture.\n\nTell me about your project, or ask anything. New build, renovation, or bringing an older home up to date, we can map the right direction.';

export default function WebsiteAssistant() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: openingMessage }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const conversationIdRef = useRef<string>(`chat-${Date.now()}-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    const existingId = window.localStorage.getItem('elec-reid-assistant-conversation-id');
    if (existingId) {
      conversationIdRef.current = existingId;
    } else {
      window.localStorage.setItem('elec-reid-assistant-conversation-id', conversationIdRef.current);
    }
  }, []);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setIsVisible(true), 2200);
    const openTimer = window.setTimeout(() => {
      const dismissed = window.sessionStorage.getItem('elec-reid-assistant-dismissed');
      if (!dismissed) {
        setIsOpen(true);
        setHasAutoOpened(true);
      }
    }, 3000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(openTimer);
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading, isOpen]);

  const closeAssistant = () => {
    setIsOpen(false);
    if (hasAutoOpened) {
      window.sessionStorage.setItem('elec-reid-assistant-dismissed', 'true');
    }
  };

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isLoading) return;

    const nextMessages: Message[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages,
          conversationId: conversationIdRef.current,
          pageUrl: window.location.href,
        }),
      });
      const data = await response.json();
      setMessages([...nextMessages, { role: 'assistant', content: data.reply || 'Tell me a little more about the project, and we can map the right direction.' }]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: 'Tell me a little more about the project, and we can map the right direction.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="Elec Reid website assistant"
          className="flex max-h-[calc(100vh-7rem)] w-[calc(100vw-2.5rem)] max-w-[390px] flex-col overflow-hidden rounded-[28px] border border-white/25 bg-[#16253F] text-[#F8F4F1] shadow-2xl shadow-[#16253F]/30"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4F1] p-2">
                <img src="/logos/logo-icon-color1.svg" alt="Elec Reid" className="h-full w-full" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#F8F4F1]/55">Elec Reid</p>
                <p className="font-austin text-xl leading-none">Website assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeAssistant}
              className="rounded-full border border-white/15 px-3 py-1 text-sm text-[#F8F4F1]/75 transition hover:border-white/35 hover:text-white"
              aria-label="Close assistant"
            >
              Close
            </button>
          </div>

          <div ref={scrollRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-[#F8F4F1] px-4 py-4 text-[#16253F]">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[86%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-[#0134E7] text-white'
                      : 'border border-[#16253F]/10 bg-white text-[#16253F] shadow-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="grid gap-2 pt-1">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-2xl border border-[#16253F]/12 bg-[#16253F]/[0.03] px-4 py-3 text-left text-sm leading-snug text-[#16253F] transition hover:border-[#0134E7]/40 hover:bg-[#0134E7]/5"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-[#16253F]/10 bg-white px-4 py-3 text-sm text-[#16253F]/70 shadow-sm">
                  Mapping the right direction...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={submitMessage} className="flex gap-2 border-t border-white/10 bg-[#16253F] p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about your project"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#F8F4F1]/45"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-full bg-[#F8F4F1] px-5 py-3 text-sm text-[#16253F] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              Send
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#16253F] p-3 shadow-2xl shadow-[#16253F]/30 ring-1 ring-white/30 transition hover:-translate-y-0.5 hover:bg-[#0134E7]"
        aria-label={isOpen ? 'Close Elec Reid assistant' : 'Open Elec Reid assistant'}
      >
        <span className="absolute inset-0 rounded-full bg-[#0134E7]/20 blur-lg transition group-hover:bg-[#0134E7]/35" />
        <img src="/logos/logo-icon-color1.svg" alt="" className="relative h-full w-full brightness-0 invert" />
      </button>
    </div>
  );
}
