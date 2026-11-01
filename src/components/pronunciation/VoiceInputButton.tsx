import React, { useState } from 'react';
import { tr } from '../../locales/tr';
import { Microphone, Stop } from '../icons';
import { useRecorder } from './useRecorder';
import { transcribe, type TranscribeError } from '../../utils/pronounceApi';

const ERR: Record<string, string> = {
  quota_user: 'Daily speech checks used up: write your message instead (or add your own free Groq key in the settings).',
  quota_global: 'Speech recognition is busy for today: write your message instead.',
  provider_busy: 'Speech recognition is busy: try again in a minute.',
  offline: 'Offline: write your message instead.',
  auth_required: 'Sign in to speak to Laoshi.',
  too_long: 'Too long: keep it under 15 seconds.',
  silent: 'Nothing was heard: speak closer to the microphone.',
  denied: 'Microphone access was refused: allow it in your browser settings.',
};

/** Speak instead of typing: the recording is transcribed and put in the message box. */
export const VoiceInputButton: React.FC<{ onText: (text: string) => void; disabled?: boolean }> = ({ onText, disabled }) => {
  const mic = useRecorder();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recording = mic.state === 'recording';

  const start = async () => {
    setError(null);
    const rec = await mic.start({ maxSec: 14, silenceSec: 1.8, waitSec: 7 });
    if (!rec) {
      if (mic.error) setError(mic.error);
      return;
    }
    setBusy(true);
    try {
      const r = await transcribe(rec);
      if (r.text.trim()) onText(r.text.trim());
      else setError('silent');
    } catch (e) {
      setError((typeof e === 'string' ? e : 'failed') as TranscribeError);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={recording ? mic.stop : start}
        disabled={disabled || busy || mic.state === 'starting'}
        aria-label={recording ? tr('Stop recording') : tr('Speak instead of typing')}
        title={recording ? tr('Stop recording') : tr('Speak instead of typing')}
        className={`h-11 w-11 rounded-xl grid place-items-center border transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
          recording ? 'bg-[#C52828] border-[#C52828] text-white animate-pulse' : 'bg-white border-[#E6DFD3] text-stone-700 hover:text-[#C52828] hover:border-[#C52828]'
        }`}
      >
        {busy ? (
          <span className="w-4 h-4 rounded-full border-2 border-stone-300 border-t-[#C52828] animate-spin" />
        ) : recording ? (
          <Stop className="w-4 h-4" weight="fill" />
        ) : (
          <Microphone className="w-5 h-5" />
        )}
      </button>
      {(error || mic.error) && !recording && !busy && (
        <p role="status" className="absolute bottom-full right-0 mb-2 w-64 p-2 rounded-xl bg-stone-900 text-white text-xs shadow-lg z-10" onClick={() => setError(null)}>
          {tr(ERR[error || mic.error || ''] || 'Speech recognition failed: try again.')}
        </p>
      )}
    </div>
  );
};
