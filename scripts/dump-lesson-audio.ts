// Prints the lesson story texts to record (scenes line by line, readings), for generate-lesson-audio.py.
// Run: npx tsx scripts/dump-lesson-audio.ts > /tmp/lesson-audio.json
import { LESSON_SCENES } from '../src/data/lessonScenes';

const lessons = Object.entries(LESSON_SCENES).map(([id, v]) => ({
  id,
  scenes: (v.scenes ?? []).map((s) => s.lines.map((l) => ({ speaker: l.speaker, text: (l.audioText || l.hanzi).trim() }))),
  story: (v.story ?? []).map((p) => p.hanzi.trim()),
}));
process.stdout.write(JSON.stringify(lessons, null, 1));
