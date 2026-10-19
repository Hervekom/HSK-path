// Prints the listening scripts of the original HSK 3 exams as JSON (input of generate-hsk3-audio.py).
// Usage: npx tsx scripts/dump-hsk3-listening.ts > /tmp/items.json
import { HSK3_EXAMS, loadHsk3Exam } from '../src/data/hsk3/index';

const items: Array<{ exam: string; code?: string; n: number; type: string; transcript: string }> = [];
for (const meta of HSK3_EXAMS.filter((e) => e.source === 'original')) {
  const exam = await loadHsk3Exam(meta.id);
  // n = 0: example dialogue of part 1 (read before question 1, as on the official recording)
  const example = exam?.groups.find((g) => g.id === 'g1')?.example?.text;
  if (example) items.push({ exam: meta.id, code: meta.code, n: 0, type: 'example', transcript: example });
  for (const q of exam?.questions || []) {
    if (q.n <= 40 && q.transcript) items.push({ exam: meta.id, code: meta.code, n: q.n, type: q.type, transcript: q.transcript });
  }
}
console.log(JSON.stringify(items, null, 1));
