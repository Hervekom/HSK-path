import React, { useEffect, useRef, useState } from 'react';
import { convert } from 'pinyin-pro';
import { tr } from '../../locales/tr';
import { ArrowLeft, ArrowRight, Info, Play, RotateCcw, Volume2 } from '../icons';
import { audioEngine } from '../../utils/audio';
import { decodeUrl, playSamples, type Recording } from '../../utils/recorder';
import { hasVoice, melodyScore, pitchContour, type PitchContour } from '../../utils/pitch';
import { overallScore, scoreLabel, scoreTranscript, type TranscriptScore } from '../../utils/pronScore';
import { transcribe, type TranscribeError } from '../../utils/pronounceApi';
import { splitPinyin, TONE_COLORS } from '../../utils/pinyinTones';
import { PitchChart } from './PitchChart';
import { RecordButton } from './RecordButton';
import { useRecorder } from './useRecorder';
import { MicNotice } from './MicNotice';

export interface SpeakItem {
  /** Progress key (w<id> for a word, s:<text> for a sentence). */
  key: string;
  hanzi: string;
  pinyin: string;
  meaning?: string;
  /** Model recording(s); without one the browser voice reads it and there is no melody to compare. */
  audio?: string | string[];
  best?: number;
}

interface SpeakCardProps {
  item: SpeakItem;
  kind: 'word' | 'sentence';
  /** Speech recognition available (signed in). */
  canTranscribe: boolean;
  position?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onScored: (key: string, score: number) => void;
}

interface Result {
  overall: number;
  melody: number | null;
  transcript: TranscriptScore | null;
  heard: string | null;
  note: TranscribeError | 'no_model' | null;
  user: PitchContour;
  model: PitchContour | null;
}

const STATUS_STYLE: Record<string, string> = {
  ok: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  tone: 'bg-amber-50 border-amber-200 text-amber-800',
  sound: 'bg-rose-50 border-rose-200 text-rose-800',
  missing: 'bg-stone-50 border-stone-200 text-stone-400',
};

const LABELS = {
  excellent: 'Excellent!',
  good: 'Good',
  close: 'Almost there',
  again: 'Try again',
} as const;

const NOTE_TEXT: Record<string, string> = {
  offline: 'Offline: only the melody was checked.',
  auth_required: 'Sign in to have your words checked by speech recognition. The melody is checked anyway.',
  quota_user: 'Daily speech checks used up: only the melody is checked until tomorrow (or add your own free Groq key in Laoshi’s settings).',
  quota_global: 'Speech checks are busy for today: only the melody was checked.',
  provider_busy: 'Speech recognition is busy: only the melody was checked. Try again in a minute.',
  own_key_rejected: 'Your Groq key was refused: check it in Laoshi’s settings. Only the melody was checked.',
  own_key_rate_limited: 'Your Groq key has reached its limit for now: only the melody was checked.',
  not_configured: 'Speech recognition is not available: only the melody was checked.',
  too_long: 'Too long to check: keep it under 15 seconds.',
  failed: 'Speech recognition failed: only the melody was checked.',
  no_model: 'No recorded model for this one: the melody cannot be compared.',
};

const firstFile = (a?: string | string[]) => (Array.isArray(a) ? (a.length === 1 ? a[0] : undefined) : a);

function PinyinLine({ hanzi, pinyin, big }: { hanzi: string; pinyin: string; big?: boolean }) {
  const sylls = splitPinyin(hanzi, pinyin);
  const cls = big ? 'text-lg sm:text-xl' : 'text-sm';
  if (!sylls) return <p className={`${cls} text-stone-600 font-medium`}>{pinyin}</p>;
  // Keep the spaces of the written pinyin (dǎ diànhuà) after the syllables they follow.
  const spaces = new Set<number>();
  const written = pinyin.split('/')[0].normalize('NFC');
  let pos = 0;
  sylls.forEach((s, i) => {
    let left = s.text.length;
    while (pos < written.length && left > 0) {
      if (!/[\s’'·-]/.test(written[pos])) left--;
      pos++;
    }
    if (written[pos] === ' ') spaces.add(i);
  });
  return (
    <p className={`${cls} font-semibold tracking-wide`}>
      {sylls.map((s, i) => (
        <span key={i} style={{ color: TONE_COLORS[s.tone] }}>
          {s.text}
          {spaces.has(i) ? ' ' : ''}
        </span>
      ))}
    </p>
  );
}

export const SpeakCard: React.FC<SpeakCardProps> = ({ item, kind, canTranscribe, position, onPrev, onNext, onScored }) => {
  const mic = useRecorder();
  const [slow, setSlow] = useState(false);
  const [playing, setPlaying] = useState<'model' | 'me' | 'both' | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const lastRec = useRef<Recording | null>(null);
  const stopMine = useRef<(() => void) | null>(null);
  const runId = useRef(0);

  // New item: clear the previous attempt.
  useEffect(() => {
    runId.current++;
    setResult(null);
    setBusy(false);
    lastRec.current = null;
    mic.setError(null);
    stopAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.key]);

  useEffect(() => () => stopAll(), []);

  function stopAll() {
    audioEngine.stop();
    stopMine.current?.();
    stopMine.current = null;
    setPlaying(null);
  }

  function playModel(then?: () => void) {
    stopAll();
    setPlaying(then ? 'both' : 'model');
    const done = () => (then ? then() : setPlaying(null));
    if (item.audio) audioEngine.playFiles(item.audio, slow ? 0.75 : 1, done);
    else audioEngine.speak(item.hanzi, slow ? 0.75 : 1, done, done);
  }

  function playMine(keepState = false) {
    const rec = lastRec.current;
    if (!rec) return;
    if (!keepState) stopAll();
    setPlaying(keepState ? 'both' : 'me');
    stopMine.current = playSamples(rec.samples, rec.sampleRate, () => {
      stopMine.current = null;
      setPlaying(null);
    });
  }

  async function record() {
    stopAll();
    const id = ++runId.current;
    const rec = await mic.start(kind === 'word' ? { maxSec: 5, silenceSec: 0.9, waitSec: 6 } : { maxSec: 14, silenceSec: 1.4, waitSec: 7 });
    if (!rec || id !== runId.current) return;
    lastRec.current = rec;
    setBusy(true);
    const user = pitchContour(rec.samples, rec.sampleRate);
    const file = firstFile(item.audio);

    const modelP: Promise<PitchContour | null> = file
      ? decodeUrl(file)
          .then((d) => pitchContour(d.samples, d.sampleRate))
          .catch(() => null)
      : Promise.resolve(null);
    const heardP: Promise<{ text: string } | { error: TranscribeError } | null> = canTranscribe
      ? transcribe(rec).catch((e) => ({ error: (typeof e === 'string' ? e : 'failed') as TranscribeError }))
      : Promise.resolve(null);

    const [model, heard] = await Promise.all([modelP, heardP]);
    if (id !== runId.current) return;
    const melody = model && hasVoice(model) && hasVoice(user) ? melodyScore(model, user) : null;
    const transcript = heard && 'text' in heard ? scoreTranscript(item.hanzi, heard.text) : null;
    const note: Result['note'] = heard && 'error' in heard ? heard.error : !canTranscribe ? 'auth_required' : !model ? 'no_model' : null;
    const overall = overallScore(transcript ? transcript.accuracy : null, melody);
    setResult({ overall, melody, transcript, heard: heard && 'text' in heard ? heard.text : null, note, user, model });
    setBusy(false);
    if (transcript || melody !== null) onScored(item.key, overall);
  }

  const label = result ? scoreLabel(result.overall) : null;
  const ring = result ? (result.overall >= 85 ? '#15803D' : result.overall >= 70 ? '#65A30D' : result.overall >= 50 ? '#C2700A' : '#C52828') : '#E7E5E4';

  return (
    <div className="bg-white border border-[#E8E2D8] rounded-2xl shadow-2xs overflow-hidden">
      {/* Text to say */}
      <div className="px-4 sm:px-6 pt-5 pb-4 text-center space-y-1.5 border-b border-stone-100">
        <div className="flex items-center justify-between text-[11px] font-semibold text-stone-400 min-h-[18px]">
          <span>{position}</span>
          {typeof item.best === 'number' && item.best > 0 && (
            <span>
              {tr('Best')}: {item.best}%
            </span>
          )}
        </div>
        <p
          lang="zh-CN"
          className={`font-hanzi font-bold text-stone-950 break-words ${kind === 'word' ? 'text-5xl sm:text-6xl' : 'text-2xl sm:text-3xl leading-snug'}`}
        >
          {item.hanzi}
        </p>
        <PinyinLine hanzi={item.hanzi} pinyin={item.pinyin} big={kind === 'word'} />
        {item.meaning && <p className="text-sm text-stone-500">{item.meaning}</p>}
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => (playing === 'model' ? stopAll() : playModel())}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-sm font-semibold cursor-pointer transition-colors ${
              playing === 'model' ? 'bg-rose-50 border-[#C52828] text-[#C52828]' : 'bg-white border-[#E2D9CC] text-stone-700 hover:bg-[#FAF8F5]'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${playing === 'model' ? 'animate-pulse' : ''}`} />
            {tr('Listen')}
          </button>
          <button
            type="button"
            onClick={() => setSlow((s) => !s)}
            aria-pressed={slow}
            className={`px-2.5 py-2 rounded-xl border text-xs font-bold cursor-pointer ${
              slow ? 'bg-stone-900 border-stone-900 text-white' : 'bg-white border-[#E2D9CC] text-stone-600 hover:bg-[#FAF8F5]'
            }`}
            title={tr('Slower model')}
          >
            {slow ? '0.75×' : '1×'}
          </button>
        </div>
      </div>

      {/* Record */}
      <div className="px-4 sm:px-6 py-5 flex flex-col items-center gap-3">
        <RecordButton
          state={mic.state}
          level={mic.level}
          busy={busy}
          disabled={mic.error === 'unsupported' || mic.error === 'insecure'}
          onStart={record}
          onStop={mic.stop}
          idleLabel={result ? tr('Tap to try again') : undefined}
        />
        <MicNotice error={mic.error} />
      </div>

      {/* Result */}
      {result && (
        <div className="px-4 sm:px-6 pb-5 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DD]">
            <div
              className="shrink-0 w-16 h-16 rounded-full grid place-items-center"
              style={{ background: `conic-gradient(${ring} ${result.overall * 3.6}deg, #E7E5E4 0deg)` }}
              aria-hidden="true"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] grid place-items-center text-base font-extrabold text-stone-900">{result.overall}</div>
            </div>
            <div className="min-w-0">
              <p className="text-base font-extrabold text-stone-950">{tr(LABELS[label!])}</p>
              <p className="text-xs text-stone-500 leading-relaxed">
                {result.transcript && (
                  <>
                    {tr('Understood')}: <strong className="text-stone-700">{result.transcript.accuracy}%</strong>
                    {result.melody !== null && ' · '}
                  </>
                )}
                {result.melody !== null && (
                  <>
                    {tr('Melody')}: <strong className="text-stone-700">{result.melody}%</strong>
                  </>
                )}
              </p>
              {result.heard !== null && (
                <p className="text-xs text-stone-500 mt-0.5 break-words">
                  {tr('Heard')}: <span lang="zh-CN" className="font-hanzi text-stone-800">{result.heard || '—'}</span>
                </p>
              )}
            </div>
          </div>

          {result.transcript && (
            <div>
              <div className="flex flex-wrap justify-center gap-1.5" aria-label={tr('Each syllable')}>
                {result.transcript.syllables.map((s, i) => (
                  <div
                    key={i}
                    className={`min-w-[2.75rem] px-1.5 py-1 rounded-lg border text-center ${STATUS_STYLE[s.status]}`}
                    title={s.heard && s.status !== 'ok' ? `${tr('Heard')}: ${convert(s.heard)}` : undefined}
                  >
                    <div lang="zh-CN" className="font-hanzi text-lg font-bold leading-tight">
                      {s.char}
                    </div>
                    <div className="text-[10px] font-semibold leading-tight">{convert(s.expected)}</div>
                    {s.heard && s.status !== 'ok' && <div className="text-[10px] leading-tight opacity-80">→ {convert(s.heard)}</div>}
                  </div>
                ))}
              </div>
              <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2 text-[10px] font-semibold text-stone-500">
                <span className="text-emerald-700">● {tr('right')}</span>
                <span className="text-amber-700">● {tr('tone heard differently')}</span>
                <span className="text-rose-700">● {tr('other sound heard')}</span>
                <span className="text-stone-400">● {tr('not heard')}</span>
              </p>
            </div>
          )}

          {result.model && hasVoice(result.user) && (
            <div className="rounded-2xl border border-stone-100 p-3">
              <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500 mb-1">
                <span>{tr('Your melody')}</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-4 border-t-2 border-dashed border-stone-400" /> {tr('model')}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-4 border-t-[3px] border-[#C52828]" /> {tr('you')}
                  </span>
                </span>
              </div>
              <PitchChart
                ariaLabel={tr('Pitch of the model and of your voice')}
                series={[
                  { contour: result.model, color: '#A8A29E', dashed: true },
                  { contour: result.user, color: '#C52828' },
                ]}
              />
            </div>
          )}

          {result.note && (
            <p className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed">
              <Info className="w-4 h-4 shrink-0 mt-px" />
              {tr(NOTE_TEXT[result.note])}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => (playing === 'me' ? stopAll() : playMine())}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 hover:bg-[#FAF8F5] cursor-pointer"
            >
              <Play className="w-4 h-4" /> {tr('My voice')}
            </button>
            <button
              type="button"
              onClick={() => (playing === 'both' ? stopAll() : playModel(() => playMine(true)))}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 hover:bg-[#FAF8F5] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> {tr('Model, then me')}
            </button>
          </div>
        </div>
      )}

      {(onPrev || onNext) && (
        <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3 border-t border-stone-100 bg-[#FCFBF9]">
          <button
            type="button"
            onClick={onPrev}
            disabled={!onPrev}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-stone-600 hover:bg-white disabled:opacity-30 cursor-pointer disabled:cursor-default"
          >
            <ArrowLeft className="w-4 h-4" /> {tr('Previous')}
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!onNext}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold bg-[#C52828] text-white hover:bg-[#A82020] disabled:opacity-30 cursor-pointer disabled:cursor-default"
          >
            {tr('Next')} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
