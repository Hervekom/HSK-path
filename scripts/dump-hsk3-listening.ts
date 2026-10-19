// Prints the listening scripts of the original HSK 3 exams as JSON (input of generate-hsk3-audio.py).
// Usage: npx tsx scripts/dump-hsk3-listening.ts > /tmp/items.json
import { HSK3_EXAMS, loadHsk3Exam } from '../src/data/hsk3/index';

const items: Array<{ exam: string; n: number; type: string; transcript: string }> = [];
for (const meta of HSK3_EXAMS.filter((e) => e.source === 'original')) {
  const exam = await loadHsk3Exam(meta.id);
  for (const q of exam?.questions || []) {
    if (q.n <= 40 && q.transcript) items.push({ exam: meta.id, n: q.n, type: q.type, transcript: q.transcript });
  }
}
console.log(JSON.stringify(items, null, 1));
