// Checks the tone-drill recordings and the tone analysis together: each syllable's four tones,
// said in a row by one voice, must all be recognised (the other voice gives the references).
// Run: npx tsx scripts/check-tones.ts   (needs ffmpeg)
import { execFileSync } from 'node:child_process';
import { TONE_SYLLABLES, toneKey } from '../src/data/toneDrills';
import { judgeFourTones, ANALYSIS_RATE } from '../src/utils/pitch';

const pcm = (key: string) => {
  const raw = execFileSync('ffmpeg', ['-loglevel', 'error', '-i', `public/audio/words/${key}.mp3`, '-ac', '1', '-ar', String(ANALYSIS_RATE), '-f', 'f32le', '-']);
  return new Float32Array(raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength));
};

let ok = 0;
let total = 0;
for (const s of TONE_SYLLABLES) {
  for (const [said, refVoice] of [['', '-f'], ['-f', '']]) {
    for (const pause of [0.3, 0.08]) {
      const parts = [1, 2, 3, 4].map((t) => pcm(toneKey(s.base, t) + said));
      const gap = Math.round(pause * ANALYSIS_RATE);
      const x = new Float32Array(parts.reduce((n, p) => n + p.length + gap, 0));
      let o = 0;
      for (const p of parts) {
        x.set(p, o);
        o += p.length + gap;
      }
      const refs = [1, 2, 3, 4].map((t) => ({ samples: pcm(toneKey(s.base, t) + refVoice), sampleRate: ANALYSIS_RATE }));
      const v = judgeFourTones({ samples: x, sampleRate: ANALYSIS_RATE }, refs);
      total += 4;
      if (!v) {
        console.log(`✗ ${s.base}${said} (pause ${pause}s): not split into 4 syllables`);
        continue;
      }
      for (const r of v) {
        if (r.heard === r.intended) ok++;
        else console.log(`✗ ${s.base}${r.intended}${said} heard as tone ${r.heard}`);
      }
    }
  }
}
console.log(`tones recognised: ${ok}/${total}`);
if (ok < total) process.exitCode = 1;
