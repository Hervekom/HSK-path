import React, { useEffect, useState } from 'react';
import { tr } from '../../locales/tr';
import { X } from '../icons';
import { supabase } from '../../lib/supabase';
import { loadProgress, recordScore } from '../../utils/pronProgress';
import { SpeakCard, type SpeakItem } from './SpeakCard';

/** Whether the learner is signed in (speech recognition needs an account). */
export function useCanTranscribe(): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    let alive = true;
    supabase?.auth.getSession().then(({ data }) => alive && setOk(Boolean(data.session)));
    return () => {
      alive = false;
    };
  }, []);
  return ok;
}

interface SpeakSheetProps {
  items: SpeakItem[];
  startIndex?: number;
  kind: 'word' | 'sentence';
  title: string;
  onClose: () => void;
  hideText?: boolean | 'pinyin';
  autoPlay?: boolean;
  /** Extra content above the card for the current item (context line of a dialogue…). */
  renderContext?: (index: number) => React.ReactNode;
}

/**
 * "Say it" practice over any list (phrases, flashcards, lesson examples, exam scripts):
 * the same recording, melody comparison and speech recognition as the Pronunciation page.
 */
export const SpeakSheet: React.FC<SpeakSheetProps> = ({ items, startIndex = 0, kind, title, onClose, hideText, autoPlay, renderContext }) => {
  const canTranscribe = useCanTranscribe();
  const [index, setIndex] = useState(Math.min(startIndex, Math.max(0, items.length - 1)));
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const item = items[index];
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-stone-950/60 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full sm:max-w-xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl shadow-xl animate-in slide-in-from-bottom-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 sm:px-5 py-3 bg-[#FAF8F5]/95 backdrop-blur border-b border-[#EFE8DD]">
          <p className="text-sm font-bold text-stone-900 truncate">{title}</p>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 shrink-0 rounded-xl bg-white border border-[#E8E2D8] grid place-items-center text-stone-600 hover:text-stone-900 cursor-pointer"
            aria-label={tr('Close')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-3 sm:p-5 space-y-3">
          {renderContext?.(index)}
          <SpeakCard
            item={{ ...item, best: progress.items[item.key]?.best }}
            kind={kind}
            canTranscribe={canTranscribe}
            position={items.length > 1 ? `${index + 1} / ${items.length}` : undefined}
            onPrev={index > 0 ? () => setIndex(index - 1) : undefined}
            onNext={index < items.length - 1 ? () => setIndex(index + 1) : undefined}
            onScored={(key, score) => setProgress(recordScore(key, score))}
            hideText={hideText}
            autoPlay={autoPlay}
          />
          {!canTranscribe && (
            <p className="text-xs text-stone-500 text-center">{tr('Sign in to have your words checked by speech recognition. The melody is checked anyway.')}</p>
          )}
        </div>
      </div>
    </div>
  );
};
