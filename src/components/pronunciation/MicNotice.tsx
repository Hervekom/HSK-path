import React from 'react';
import { tr } from '../../locales/tr';
import { Info } from '../icons';
import type { MicError } from '../../utils/recorder';

const TEXT: Record<MicError | 'silent', string> = {
  unsupported: 'This browser cannot record your voice. Use a recent Chrome, Safari, Edge or Firefox.',
  insecure: 'The microphone only works on a secure (https) page.',
  denied: 'Microphone access is blocked. Allow it for this site in your browser settings (the icon left of the address), then try again.',
  no_device: 'No microphone found. Plug in or turn on a microphone, then try again.',
  busy: 'The microphone is used by another app. Close it and try again.',
  failed: 'The microphone could not start. Try again.',
  silent: 'I didn’t hear anything. Speak a little louder or closer to the microphone.',
};

/** One-line explanation of a microphone problem, or nothing. */
export const MicNotice: React.FC<{ error: MicError | 'silent' | null }> = ({ error }) =>
  error ? (
    <p role="status" className="flex items-start gap-2 max-w-md text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 leading-relaxed">
      <Info className="w-4 h-4 shrink-0 mt-px" />
      {tr(TEXT[error])}
    </p>
  ) : null;
