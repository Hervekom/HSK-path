// Lists the Chinese texts read aloud in the short mock exams and practice exercises
// (audioText fields), as input for generate-clips.py.
// Usage: npx tsx scripts/dump-clip-texts.ts > /tmp/clips.json
import { MOCK_TESTS_CATALOG } from '../src/data/mockTests';
import * as exercises from '../src/data/exercises';

const texts = new Set<string>();
const visit = (v: unknown) => {
  if (Array.isArray(v)) v.forEach(visit);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (k === 'audioText' && typeof x === 'string' && x.trim()) texts.add(x.trim());
      else visit(x);
    }
  }
};
visit(MOCK_TESTS_CATALOG);
visit(Object.values(exercises));
console.log(JSON.stringify([...texts], null, 1));
