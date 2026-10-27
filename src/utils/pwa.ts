/**
 * Installable app (PWA): service worker registration and the browser's install prompt.
 * The service worker lives in public/sw.js.
 */
import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

export function isStandalone(): boolean {
  return (
    window.matchMedia?.('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

export function isIos(): boolean {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1);
}

export function registerPwa() {
  if (typeof window === 'undefined') return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    notify();
  });
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    notify();
  });

  // Production only, and not inside an iframe (AI Studio preview).
  if (!import.meta.env.PROD || !('serviceWorker' in navigator) || window.self !== window.top) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

/** State of the install option for the current browser. */
export function useInstallPrompt() {
  const [, force] = useState(0);
  useEffect(() => {
    const l = () => force((n) => n + 1);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const installed = isStandalone();
  return {
    installed,
    /** The browser can show its own install dialog (Chrome, Edge, Samsung Internet…). */
    canPrompt: !installed && deferredPrompt !== null,
    /** iPhone / iPad Safari: manual "Add to Home Screen" only. */
    ios: !installed && isIos(),
    async install(): Promise<boolean> {
      if (!deferredPrompt) return false;
      const p = deferredPrompt;
      deferredPrompt = null;
      await p.prompt();
      const { outcome } = await p.userChoice;
      notify();
      return outcome === 'accepted';
    },
  };
}
