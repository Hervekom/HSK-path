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
  const mod = await import('./originals');
  return mod.ORIGINAL_EXAMS.find((e) => e.id === id) || null;
}
