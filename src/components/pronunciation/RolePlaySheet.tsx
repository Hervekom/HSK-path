import React, { useEffect, useMemo, useRef, useState } from 'react';
import { tr } from '../../locales/tr';
import { ArrowRight, RotateCcw, Volume2, X } from '../icons';
import { audioEngine } from '../../utils/audio';
import { loadProgress, recordScore } from '../../utils/pronProgress';
import { SpeakCard } from './SpeakCard';
import { useCanTranscribe } from './SpeakSheet';

export interface RoleLine {
  speaker: string;
  hanzi: string;
  pinyin: string;
  meaning?: string;
  /** Text the recording was made from (when it differs from what is shown). */
  audioText?: string;
}

interface RolePlaySheetProps {
  title: string;
  lines: RoleLine[];
  onClose: () => void;
}

/**
 * Role-play of a lesson dialogue: the learner picks a character; the other lines are played,
 * the learner says theirs (recorded and checked like on the Pronunciation page).
 */
export const RolePlaySheet: React.FC<RolePlaySheetProps> = ({ title, lines, onClose }) => {
  const canTranscribe = useCanTranscribe();
  const speakers = useMemo(() => Array.from(new Set(lines.map((l) => l.speaker))), [lines]);
  const [role, setRole] = useState<string | null>(speakers.length === 1 ? speakers[0] : null);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [progress, setProgress] = useState(loadProgress);
  const [playing, setPlaying] = useState<number | null>(null);
  const bottom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      audioEngine.stop();
    };
  }, [onClose]);

  const textOf = (l: RoleLine) => (l.audioText || l.hanzi).trim();
  const play = (i: number, then?: () => void) => {
    setPlaying(i);
    audioEngine.speak(textOf(lines[i]), 1, () => {
      setPlaying(null);
      then?.();
    });
  };

  // Partner lines play by themselves, one after the other, until it is the learner's turn.
  useEffect(() => {
    if (!role || step >= lines.length) return;
    bottom.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    if (lines[step].speaker !== role) {
      const t = window.setTimeout(() => play(step, () => setStep((s) => s + 1)), 400);
      return () => window.clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, step]);

  const restart = () => {
    audioEngine.stop();
    setScores({});
    setStep(0);
  };

  const mine = lines.map((l, i) => (l.speaker === role ? i : -1)).filter((i) => i >= 0);
  const done = role !== null && step >= lines.length;
  const avg = mine.filter((i) => scores[i] !== undefined);
  const average = avg.length ? Math.round(avg.reduce((s, i) => s + scores[i], 0) / avg.length) : null;

  return (
    <div className="fixed inset-0 z-[60] bg-stone-950/60 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full sm:max-w-xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 sm:px-5 py-3 bg-[#FAF8F5]/95 backdrop-blur border-b border-[#EFE8DD]">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#C52828]">{tr('Role-play')}</p>
            <p className="text-sm font-bold text-stone-900 truncate">{title}</p>
          </div>
          <button type="button" onClick={onClose} className="w-9 h-9 shrink-0 rounded-xl bg-white border border-[#E8E2D8] grid place-items-center text-stone-600 cursor-pointer" aria-label={tr('Close')}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3 sm:p-5 space-y-3">
          {!role ? (
            <div className="space-y-3">
              <p className="text-sm text-stone-700">{tr('Choose your character. The other lines are played for you; say yours when it is your turn.')}</p>
              <div className="grid grid-cols-2 gap-2">
                {speakers.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRole(s)}
                    className="p-3 rounded-2xl bg-white border border-[#E2D8CC] hover:border-stone-900 text-left cursor-pointer"
                  >
                    <span lang="zh-CN" className="block text-lg font-hanzi font-bold text-stone-900">{s}</span>
                    <span className="text-xs text-stone-500">
                      {lines.filter((l) => l.speaker === s).length} {tr('lines')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {lines.slice(0, Math.min(step, lines.length)).map((l, i) => {
                const me = l.speaker === role;
                return (
                  <div key={i} className={`flex ${me ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl border ${me ? 'bg-[#1C1917] border-[#1C1917] text-white' : 'bg-white border-[#E8E2D8] text-stone-900'}`}>
                      <div className="flex items-center gap-2 text-[11px] font-bold opacity-70">
                        <span lang="zh-CN">{l.speaker}</span>
                        {me && scores[i] !== undefined && <span>· {scores[i]}%</span>}
                        <button type="button" onClick={() => play(i)} className="ml-auto cursor-pointer" aria-label={tr('Listen')}>
                          <Volume2 className={`w-3.5 h-3.5 ${playing === i ? 'animate-pulse' : ''}`} />
                        </button>
                      </div>
                      <p lang="zh-CN" className="font-hanzi text-base leading-snug">{l.hanzi}</p>
                      <p className="text-[11px] opacity-70">{l.pinyin}</p>
                    </div>
                  </div>
                );
              })}

              {!done && lines[step].speaker !== role && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white border border-dashed border-[#E2D8CC] text-sm text-stone-500 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 animate-pulse" /> <span lang="zh-CN">{lines[step].speaker}</span>…
                  </div>
                </div>
              )}

              {!done && lines[step].speaker === role && (
                <div className="space-y-2">
                  <p className="text-xs font-bold text-[#C52828]">{tr('Your turn')}</p>
                  <SpeakCard
                    item={{
                      key: `s:${textOf(lines[step])}`,
                      hanzi: lines[step].hanzi,
                      pinyin: lines[step].pinyin,
                      meaning: lines[step].meaning,
                      audio: audioEngine.recordingFor(textOf(lines[step])),
                      best: progress.items[`s:${textOf(lines[step])}`]?.best,
                    }}
                    kind="sentence"
                    canTranscribe={canTranscribe}
                    onScored={(key, score) => {
                      setProgress(recordScore(key, score));
                      setScores((s) => ({ ...s, [step]: score }));
                    }}
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep((s) => s + 1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer"
                    >
                      {scores[step] === undefined ? tr('Skip') : tr('Continue')} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {done && (
                <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] text-center space-y-3">
                  <p className="text-base font-extrabold text-stone-950">{tr('Dialogue finished!')}</p>
                  {average !== null && (
                    <p className="text-sm text-stone-600">
                      {tr('Average for your lines')}: <strong className="text-stone-900">{average}%</strong>
                    </p>
                  )}
                  <div className="flex flex-wrap justify-center gap-2">
                    <button type="button" onClick={restart} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 cursor-pointer">
                      <RotateCcw className="w-4 h-4" /> {tr('Again')}
                    </button>
                    {speakers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          restart();
                          setRole(null);
                        }}
                        className="px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 cursor-pointer"
                      >
                        {tr('Change character')}
                      </button>
                    )}
                  </div>
                </div>
              )}
              <div ref={bottom} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
