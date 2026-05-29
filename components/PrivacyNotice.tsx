'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'elec-reid-privacy-notice-accepted';

export default function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      const timer = window.setTimeout(() => setIsVisible(true), 900);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const acceptNotice = () => {
    window.localStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Privacy notice"
      className="fixed bottom-5 left-5 right-5 z-[70] max-w-md rounded-[24px] border border-[#16253F]/10 bg-[#F8F4F1] p-5 text-[#16253F] shadow-2xl shadow-[#16253F]/20 sm:right-auto sm:bottom-6 sm:left-6"
    >
      <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#0134E7]">Privacy</p>
      <p className="text-sm leading-relaxed text-[#16253F]/80">
        We use cookies and website tools to understand enquiries, save chat conversations, and improve the site. By continuing, you agree to our{' '}
        <a href="/privacy" className="font-semibold text-[#0134E7] underline-offset-4 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={acceptNotice}
          className="rounded-full bg-[#16253F] px-5 py-2.5 text-sm text-[#F8F4F1] transition hover:bg-[#0134E7]"
        >
          Accept
        </button>
        <a href="/privacy" className="text-sm font-medium text-[#16253F]/65 underline-offset-4 hover:text-[#0134E7] hover:underline">
          Read policy
        </a>
      </div>
    </aside>
  );
}
