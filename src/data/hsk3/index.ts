import type { H3Exam, H3ExamMeta } from './types';

export * from './types';

export const HSK3_EXAMS: H3ExamMeta[] = [
  { id: 'h31001', code: 'H31001', title: 'HSK 3 · H31001', source: 'official', isPro: false },
  { id: 'h31002', code: 'H31002', title: 'HSK 3 · H31002', source: 'official', isPro: false },
  { id: 'h31003', code: 'H31003', title: 'HSK 3 · H31003', source: 'official', isPro: false },
  { id: 'h31004', code: 'H31004', title: 'HSK 3 · H31004', source: 'official', isPro: false },
  { id: 'h31005', code: 'H31005', title: 'HSK 3 · H31005', source: 'official', isPro: false },
  { id: 'hp3-01', code: 'HP3-01', title: 'HSK 3 · HSK Path 01', source: 'original', isPro: true },
  { id: 'hp3-02', code: 'HP3-02', title: 'HSK 3 · HSK Path 02', source: 'original', isPro: true },
  { id: 'hp3-03', code: 'HP3-03', title: 'HSK 3 · HSK Path 03', source: 'original', isPro: true },
  { id: 'hp3-04', code: 'HP3-04', title: 'HSK 3 · HSK Path 04', source: 'original', isPro: true },
  { id: 'hp3-05', code: 'HP3-05', title: 'HSK 3 · HSK Path 05', source: 'original', isPro: true },
];

/** Exam content is loaded on demand so it does not weigh on the first page load. */
export async function loadHsk3Exam(id: string): Promise<H3Exam | null> {
  const meta = HSK3_EXAMS.find((e) => e.id === id);
  if (!meta) return null;
  if (meta.source === 'official') {
    const mod = await import('./official.json');
    const list = (mod.default || mod) as unknown as H3Exam[];
    return list.find((e) => e.id === id) || null;
  }
  const [a, b] = await Promise.all([import('./originals'), import('./originals2')]);
  const all: H3Exam[] = [...a.ORIGINAL_EXAMS, b.HP3_03, b.HP3_04, b.HP3_05];
  const exam = all.find((e) => e.id === id);
  // Recorded in advance, same format as the official papers:
  //  - public/hsk3/<CODE>.mp3: the whole listening section (scripts/build-hsk3-section-audio.py)
  //  - public/hsk3/<id>/01.mp3 … 40.mp3: each item, replayed on the review screen (scripts/generate-hsk3-audio.py)
  return exam ? { ...exam, audioUrl: `/hsk3/${exam.code}.mp3`, itemAudioBase: `/hsk3/${exam.id}/` } : null;
}
