// Texts recorded by scripts/generate-speak-audio.py: everyday phrases + speaking test.
import { PHRASES } from '../src/data/phrases';
import { SPEAKING_TEST_TEXTS } from '../src/data/speakingTest';
const texts = Array.from(new Set([...PHRASES.map((p) => p[3]), ...SPEAKING_TEST_TEXTS]));
process.stdout.write(JSON.stringify(texts, null, 1));
