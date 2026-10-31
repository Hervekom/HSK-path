import React from 'react';
import { tr } from '../../locales/tr';
import { Microphone, Stop } from '../icons';
import type { RecorderState } from './useRecorder';

interface RecordButtonProps {
  state: RecorderState;
  level: number;
  busy?: boolean;
  disabled?: boolean;
  onStart: () => void;
  onStop: () => void;
  idleLabel?: string;
}

/** Big round microphone button: tap to speak, tap again (or just stop talking) to finish. */
export const RecordButton: React.FC<RecordButtonProps> = ({ state, level, busy, disabled, onStart, onStop, idleLabel }) => {
  const recording = state === 'recording';
  const waiting = state === 'starting' || busy;
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={recording ? onStop : onStart}
        disabled={disabled || (waiting && !recording)}
        aria-label={recording ? tr('Stop recording') : tr('Record my voice')}
        className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all cursor-pointer select-none
          focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300/60 disabled:opacity-50 disabled:cursor-not-allowed
          ${recording ? 'bg-[#C52828] text-white shadow-lg' : 'bg-[#1C1917] text-white hover:bg-[#2a2522] shadow-md active:scale-95'}`}
      >
        {recording && (
          <span
            className="absolute inset-0 rounded-full bg-[#C52828]/25 transition-transform duration-75"
            style={{ transform: `scale(${1.08 + level * 0.5})` }}
            aria-hidden="true"
          />
        )}
        {waiting && !recording ? (
          <span className="w-7 h-7 rounded-full border-[3px] border-white/30 border-t-white animate-spin" aria-hidden="true" />
        ) : recording ? (
          <Stop className="relative w-8 h-8 fill-white" />
        ) : (
          <Microphone className="relative w-9 h-9" />
        )}
      </button>
      <span className={`text-xs font-semibold ${recording ? 'text-[#C52828]' : 'text-stone-500'}`} aria-live="polite">
        {recording ? tr('Listening… stop when you are done') : busy ? tr('Analysing…') : idleLabel || tr('Tap and speak')}
      </span>
    </div>
  );
};
