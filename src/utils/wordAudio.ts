// Recorded HSK words (public/audio/words, scripts/generate-word-audio.py), loaded on demand.
// Words are keyed by their syllabus id (w<id>); tone-drill syllables by t-<base><tone>[-f].
import { HSK30_WORDS } from '../data/hsk30Words';
import { audioEngine } from './audio';

let loading: Promise<Record<string, string>> | null = null;

export function loadWordAudio(): Promise<Record<string, string>> {
  if (!loading) {
    loading = import('../data/wordAudio.json')
      .then((m) => m.default as Record<string, string>)
      .catch(() => {
        loading = null;
        return {};
      });
  }
  return loading;
}

const norm = (py: string) => py.normalize('NFC').toLowerCase().replace(/[\s’'·-]/g, '');

/** Syllabus id of a word (the reading matters for 还 hái / huán and other polyphones). */
export function wordId(hanzi: string, pinyin?: string): number | null {
  const rows = HSK30_WORDS.filter((r) => r[2] === hanzi);
  if (!rows.length) return null;
  if (pinyin) {
    const p = norm(pinyin);
    const exact = rows.find((r) => r[3].split('/').some((v) => norm(v) === p));
    if (exact) return exact[0];
  }
  return rows[0][0];
}

/** The word recordings become what the speaker buttons play everywhere (vocabulary, cards…). */
export async function registerWordRecordings(): Promise<void> {
  const files = await loadWordAudio();
  const byText: Record<string, string> = {};
  for (const [id, , hanzi] of HSK30_WORDS) {
    const f = files[`w${id}`];
    if (f && !byText[hanzi]) byText[hanzi] = f; // polyphones: the first (most common) reading
  }
  audioEngine.addRecordings(byText, false);
}
