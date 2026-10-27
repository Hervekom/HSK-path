// Checks that every word count shown on the site matches the official HSK 3.0 list.
// Run: npx tsx scripts/check-word-counts.ts   (exits with an error if anything is off)
import { HSK30_WORDS } from '../src/data/hsk30Words';
import { VOCABULARY_DATA } from '../src/data/vocabulary';
import { HSK_LEVELS, FUTURE_HSK_LEVELS } from '../src/data/hskLevels';
import { HSK_LESSONS_DATA } from '../src/data/lessons';
import { NEW_WORDS, TOTAL_WORDS, lessonWordCounts, type CoreLevel } from '../src/data/hskWordCounts';

const errors: string[] = [];
const expect = (label: string, got: number, want: number) => {
  if (got !== want) errors.push(`${label}: ${got} (expected ${want})`);
};

// Official HSK 3.0 syllabus (November 2025): 300 / 500 / 1,000 words in total.
expect('HSK 1 new words', NEW_WORDS.hsk1, 300);
expect('HSK 2 new words', NEW_WORDS.hsk2, 200);
expect('HSK 3 new words', NEW_WORDS.hsk3, 500);
expect('HSK 2 total', TOTAL_WORDS.hsk2, 500);
expect('HSK 3 total', TOTAL_WORDS.hsk3, 1000);
expect('official list size', HSK30_WORDS.length, 1000);
expect('distinct syllabus ids', new Set(HSK30_WORDS.map((w) => w[0])).size, 1000);
expect('vocabulary page words', VOCABULARY_DATA.length, 1000);
for (const l of ['hsk1', 'hsk2', 'hsk3'] as CoreLevel[]) {
  expect(`vocabulary page ${l}`, VOCABULARY_DATA.filter((w) => w.level === l).length, NEW_WORDS[l]);
}
for (const lvl of HSK_LEVELS) {
  expect(`${lvl.name} card total`, lvl.wordCount, TOTAL_WORDS[lvl.id]);
  expect(`${lvl.name} card new words`, lvl.newWordCount, NEW_WORDS[lvl.id]);
}
expect('HSK 4 total', FUTURE_HSK_LEVELS[0].words, 2000);
expect('HSK 5 total', FUTURE_HSK_LEVELS[1].words, 3600);
expect('HSK 6 total', FUTURE_HSK_LEVELS[2].words, 5400);
for (const lesson of HSK_LESSONS_DATA) {
  const c = lessonWordCounts(lesson.vocabulary, lesson.level as CoreLevel);
  expect(`${lesson.id} announced words`, lesson.wordCount, c.syllabus);
}

if (errors.length) {
  console.error('Word counts do not match:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('All word counts match the official HSK 3.0 list: HSK 1 = 300, HSK 2 = +200 (500), HSK 3 = +500 (1,000).');
