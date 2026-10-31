// Voice pitch (melody) analysis for the Pronunciation page. Pure functions, no browser APIs:
// runs in the browser on the learner's recording and on the model recording, and in Node for tests.
//
// - Pitch is tracked with YIN (de Cheveigné & Kawahara 2002) every 10 ms on a 16 kHz signal.
// - Values are kept in semitones, centred on the speaker's own median: a deep and a high voice
//   saying the same tone give the same curve.
// - Two curves are compared with dynamic time warping, so speaking faster or slower is not a fault,
//   and with a small range of scale factors, so a slightly narrower melody is not a fault either.

export const ANALYSIS_RATE = 16000;
const HOP = 160; // 10 ms
const WIN = 640; // 40 ms
const F0_MIN = 65;
const F0_MAX = 500;

export interface PitchContour {
  /** Semitones relative to the speaker's median, one value per 10 ms (null = unvoiced), trimmed to the speech. */
  st: (number | null)[];
  /** Median pitch in Hz (the speaker's own reference). */
  medianHz: number;
  /** Number of voiced frames (×10 ms). */
  voiced: number;
}

/** Linear resampling (with a light averaging when going down) to the analysis rate. */
export function toAnalysisRate(samples: Float32Array, sampleRate: number): Float32Array {
  if (sampleRate === ANALYSIS_RATE) return samples;
  const ratio = sampleRate / ANALYSIS_RATE;
  const out = new Float32Array(Math.floor(samples.length / ratio));
  const span = Math.max(1, Math.floor(ratio));
  for (let i = 0; i < out.length; i++) {
    const pos = i * ratio;
    const j = Math.floor(pos);
    if (span > 1) {
      let s = 0;
      for (let k = 0; k < span && j + k < samples.length; k++) s += samples[j + k];
      out[i] = s / span;
    } else {
      const f = pos - j;
      out[i] = samples[j] * (1 - f) + (samples[j + 1] ?? samples[j]) * f;
    }
  }
  return out;
}

function rms(x: Float32Array, start: number, len: number): number {
  let s = 0;
  const end = Math.min(x.length, start + len);
  for (let i = start; i < end; i++) s += x[i] * x[i];
  return Math.sqrt(s / Math.max(1, end - start));
}

/** Raw pitch track: Hz per 10 ms frame (0 = unvoiced or silent). Input at ANALYSIS_RATE. */
export function trackPitch(x: Float32Array): number[] {
  const tauMin = Math.floor(ANALYSIS_RATE / F0_MAX);
  const tauMax = Math.ceil(ANALYSIS_RATE / F0_MIN);
  const n = WIN - tauMax; // integration window
  const frames = Math.max(0, Math.floor((x.length - WIN) / HOP) + 1);
  const energy: number[] = [];
  for (let f = 0; f < frames; f++) energy.push(rms(x, f * HOP, WIN));
  const sorted = [...energy].sort((a, b) => a - b);
  const peak = sorted[Math.floor(sorted.length * 0.98)] || 0;
  const floor = sorted[Math.floor(sorted.length * 0.1)] || 0;
  const gate = Math.max(0.004, floor * 2.5, peak * 0.08);

  const d = new Float32Array(tauMax + 2);
  const out: number[] = [];
  for (let f = 0; f < frames; f++) {
    if (energy[f] < gate) {
      out.push(0);
      continue;
    }
    const o = f * HOP;
    d[0] = 1;
    let running = 0;
    let best = -1;
    for (let tau = 1; tau <= tauMax + 1; tau++) {
      let s = 0;
      for (let j = 0; j < n; j++) {
        const v = x[o + j] - x[o + j + tau];
        s += v * v;
      }
      running += s;
      d[tau] = running > 0 ? (s * tau) / running : 1; // cumulative mean normalised difference
    }
    for (let tau = tauMin; tau <= tauMax; tau++) {
      if (d[tau] < 0.15) {
        while (tau + 1 <= tauMax && d[tau + 1] < d[tau]) tau++;
        best = tau;
        break;
      }
    }
    if (best < 0) {
      let m = tauMin;
      for (let tau = tauMin; tau <= tauMax; tau++) if (d[tau] < d[m]) m = tau;
      if (d[m] < 0.35) best = m;
    }
    if (best < 0) {
      out.push(0);
      continue;
    }
    // Parabolic interpolation around the minimum.
    const a = d[best - 1] ?? d[best];
    const b = d[best];
    const c = d[best + 1] ?? d[best];
    const den = a - 2 * b + c;
    const shift = den !== 0 ? Math.max(-1, Math.min(1, (a - c) / (2 * den))) : 0;
    out.push(ANALYSIS_RATE / (best + shift));
  }
  return out;
}

const median = (v: number[]) => {
  if (!v.length) return 0;
  const s = [...v].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

/** Bridges gaps of at most maxGap frames between two voiced frames (linear). */
function fillGaps(v: (number | null)[], maxGap: number) {
  for (let i = 0; i < v.length; i++) {
    if (v[i] !== null) continue;
    let j = i;
    while (j < v.length && v[j] === null) j++;
    const before = v[i - 1];
    const after = v[j];
    if (before != null && after != null && j - i <= maxGap) {
      for (let k = i; k < j; k++) v[k] = before + ((after - before) * (k - i + 1)) / (j - i + 1);
    }
    i = j;
  }
}

/** Cleaned pitch per 10 ms frame, in absolute semitones (re 55 Hz), null where unvoiced. */
export function semitoneTrack(samples: Float32Array, sampleRate: number): (number | null)[] {
  const hz = trackPitch(toAnalysisRate(samples, sampleRate));
  let st: (number | null)[] = hz.map((f) => (f > 0 ? 12 * Math.log2(f / 55) : null));

  const voicedVals = st.filter((v): v is number => v !== null);
  const med = median(voicedVals);
  // Octave jumps (a classic pitch-tracking error): fold back towards the median, drop the rest.
  st = st.map((v) => {
    if (v === null) return null;
    let w = v;
    if (w - med > 8) w -= 12;
    else if (med - w > 8) w += 12;
    return Math.abs(w - med) > 10 ? null : w;
  });

  // Single dropped frames are tracking misses, not silence.
  fillGaps(st, 3);

  // Voiced runs shorter than 40 ms are noise.
  const runs: [number, number][] = [];
  for (let i = 0; i < st.length; ) {
    if (st[i] === null) {
      i++;
      continue;
    }
    let j = i;
    while (j < st.length && st[j] !== null) j++;
    runs.push([i, j]);
    i = j;
  }
  for (const [i, j] of runs) if (j - i < 4) for (let k = i; k < j; k++) st[k] = null;

  // Median filter (5 frames) inside voiced runs, then a jump guard between neighbours.
  const smooth = st.map((v, i) => {
    if (v === null) return null;
    const win: number[] = [];
    for (let k = i - 2; k <= i + 2; k++) if (st[k] != null) win.push(st[k] as number);
    return median(win);
  });

  // Fill unvoiced gaps shorter than 60 ms inside speech (a consonant).
  fillGaps(smooth, 6);
  return smooth;
}

/** Clean pitch contour (octave errors fixed, smoothed, short blips removed, trimmed). */
export function pitchContour(samples: Float32Array, sampleRate: number): PitchContour {
  return contourOf(semitoneTrack(samples, sampleRate));
}

function contourOf(smooth: (number | null)[], centre?: number): PitchContour {
  const first = smooth.findIndex((v) => v !== null);
  let last = smooth.length - 1;
  while (last >= 0 && smooth[last] === null) last--;
  const trimmed = first < 0 ? [] : smooth.slice(first, last + 1);
  const vals = trimmed.filter((v): v is number => v !== null);
  const m = centre ?? median(vals);
  return {
    st: trimmed.map((v) => (v === null ? null : v - m)),
    medianHz: vals.length ? 55 * 2 ** (m / 12) : 0,
    voiced: vals.length,
  };
}

/** Enough voiced speech to analyse (≥ 80 ms). */
export const hasVoice = (c: PitchContour) => c.voiced >= 8;

function resample(v: number[], n: number): number[] {
  if (!v.length) return new Array(n).fill(0);
  if (v.length === 1) return new Array(n).fill(v[0]);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const pos = (i * (v.length - 1)) / (n - 1);
    const j = Math.floor(pos);
    const f = pos - j;
    out.push(v[j] * (1 - f) + (v[j + 1] ?? v[j]) * f);
  }
  return out;
}

/** Mean absolute difference (semitones) along the best time alignment, Sakoe–Chiba band. */
function dtw(a: number[], b: number[], bandRatio: number): number {
  const n = a.length;
  const m = b.length;
  const band = Math.max(2, Math.floor(Math.max(n, m) * bandRatio));
  const INF = 1e9;
  const cost = Array.from({ length: n + 1 }, () => new Float64Array(m + 1).fill(INF));
  const steps = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  cost[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    const centre = Math.round((i * m) / n);
    for (let j = Math.max(1, centre - band); j <= Math.min(m, centre + band); j++) {
      const c = Math.abs(a[i - 1] - b[j - 1]);
      let best = cost[i - 1][j - 1];
      let s = steps[i - 1][j - 1];
      if (cost[i - 1][j] < best) {
        best = cost[i - 1][j];
        s = steps[i - 1][j];
      }
      if (cost[i][j - 1] < best) {
        best = cost[i][j - 1];
        s = steps[i][j - 1];
      }
      cost[i][j] = best + c;
      steps[i][j] = s + 1;
    }
  }
  return cost[n][m] / Math.max(1, steps[n][m]);
}

const voicedValues = (c: PitchContour) => c.st.filter((v): v is number => v !== null);
// Learners (and many natives) use a narrower or wider pitch range than the model: the shape is
// what matters, so the learner's curve may be stretched or squeezed, at a small cost.
const SCALES = [0.5, 0.65, 0.8, 1, 1.25, 1.6, 2, 2.5, 3];
const POINTS = 50;

/** Melody distance in semitones (0 = same shape). */
export function melodyDistance(model: PitchContour, user: PitchContour, bandRatio = 0.25): number {
  const a = resample(voicedValues(model), POINTS);
  const b0 = resample(voicedValues(user), POINTS);
  let best = Infinity;
  for (const k of SCALES) best = Math.min(best, dtw(a, b0.map((v) => v * k), bandRatio) + Math.abs(Math.log2(k)) * 0.4);
  return best;
}

/** 0–100 melody similarity score. */
export function melodyScore(model: PitchContour, user: PitchContour): number {
  if (!hasVoice(user) || !hasVoice(model)) return 0;
  const d = melodyDistance(model, user);
  // ≈ 0.3 st: same melody; ≈ 0.8: same tones, another voice; ≥ 1.5: a tone is off.
  return Math.max(0, Math.min(100, Math.round(100 - (d - 0.3) * 30)));
}

/** Points to draw: x 0–1 over the speech, y semitones (null = gap). */
export function curvePoints(c: PitchContour): { x: number; y: number | null }[] {
  const n = c.st.length;
  return c.st.map((y, i) => ({ x: n > 1 ? i / (n - 1) : 0.5, y }));
}

// ---------------------------------------------------------------------------------------------
// The four tones said in a row (mā má mǎ mà): one recording gives the learner's own pitch range,
// so a low 3rd tone and a high 4th tone can be told apart even when both just fall.

/** Loudness per 10 ms frame (same frames as the pitch track). */
function frameEnergy(x: Float32Array): number[] {
  const frames = Math.max(0, Math.floor((x.length - WIN) / HOP) + 1);
  const e: number[] = [];
  for (let f = 0; f < frames; f++) e.push(rms(x, f * HOP, WIN));
  return e;
}

/**
 * Splits a recording into `count` syllables (frame ranges), using the pauses between them,
 * or the deepest dips in loudness when the learner ran them together. Null when it cannot.
 */
export function splitSyllables(samples: Float32Array, sampleRate: number, count: number): [number, number][] | null {
  const e = frameEnergy(toAnalysisRate(samples, sampleRate));
  if (!e.length) return null;
  // Smooth over 30 ms.
  const sm = e.map((_, i) => (e[i - 1] ?? e[i]) * 0.25 + e[i] * 0.5 + (e[i + 1] ?? e[i]) * 0.25);
  const sorted = [...sm].sort((a, b) => a - b);
  const floor = sorted[Math.floor(sorted.length * 0.1)];
  const peak = sorted[Math.floor(sorted.length * 0.98)];
  const thr = Math.max(floor * 3, peak * 0.12, 0.003);
  let segs: [number, number][] = [];
  for (let i = 0; i < sm.length; ) {
    if (sm[i] <= thr) {
      i++;
      continue;
    }
    let j = i;
    while (j < sm.length && sm[j] > thr) j++;
    segs.push([i, j]);
    i = j;
  }
  // Too short to be a syllable (clicks, breath).
  segs = segs.filter(([a, b]) => b - a >= 6);
  // Join pieces split by a consonant (gap under 60 ms).
  const joined: [number, number][] = [];
  for (const s of segs) {
    const last = joined[joined.length - 1];
    if (last && s[0] - last[1] < 6) last[1] = s[1];
    else joined.push([s[0], s[1]]);
  }
  segs = joined;
  // Too many: merge across the smallest gaps.
  while (segs.length > count) {
    let k = 0;
    for (let i = 1; i < segs.length - 1; i++) if (segs[i + 1][0] - segs[i][1] < segs[k + 1][0] - segs[k][1]) k = i;
    segs.splice(k, 2, [segs[k][0], segs[k + 1][1]]);
  }
  // Too few: cut the longest piece at its deepest dip (at least 6 dB below its surroundings).
  while (segs.length < count) {
    let best: { seg: number; at: number; depth: number } | null = null;
    segs.forEach(([a, b], si) => {
      for (let i = a + 8; i < b - 8; i++) {
        const left = Math.max(...sm.slice(a, i));
        const right = Math.max(...sm.slice(i, b));
        const depth = Math.min(left, right) / Math.max(sm[i], 1e-6);
        if (depth >= 2 && (!best || depth > best.depth)) best = { seg: si, at: i, depth };
      }
    });
    if (!best) return null;
    const { seg, at } = best as { seg: number; at: number; depth: number };
    const [a, b] = segs[seg];
    segs.splice(seg, 1, [a, at], [at, b]);
  }
  return segs;
}

export interface ToneVerdict {
  /** Tone the learner meant (position in the sequence). */
  intended: 1 | 2 | 3 | 4;
  /** Tone whose reference the learner's melody matches best. */
  heard: 1 | 2 | 3 | 4;
  /** Learner's melody and the reference, in semitones around their own speaker's centre. */
  user: PitchContour;
  ref: PitchContour;
}

/** Each part of a track, centred on the median of the whole (keeps the levels between syllables). */
export function jointContours(track: (number | null)[], segs: [number, number][]): PitchContour[] {
  const all: number[] = [];
  for (const [a, b] of segs) for (let i = a; i < b; i++) if (track[i] != null) all.push(track[i] as number);
  const centre = median(all);
  return segs.map(([a, b]) => contourOf(track.slice(a, b), centre));
}

/** Learner said the four tones in order; refs = the four reference recordings of the syllable. */
export function judgeFourTones(
  user: { samples: Float32Array; sampleRate: number },
  refs: { samples: Float32Array; sampleRate: number }[],
): ToneVerdict[] | null {
  const segs = splitSyllables(user.samples, user.sampleRate, 4);
  if (!segs) return null;
  const mine = jointContours(semitoneTrack(user.samples, user.sampleRate), segs);
  if (mine.some((c) => c.voiced < 5)) return null;
  // References: each file is one syllable; centre them together the same way.
  const refTracks = refs.map((r) => semitoneTrack(r.samples, r.sampleRate));
  const refAll = refTracks.flatMap((t) => t.filter((v): v is number => v !== null));
  const refCentre = median(refAll);
  const refContours = refTracks.map((t) => contourOf(t, refCentre));
  const range = jointRange(mine);
  return mine.map((c, i) => {
    const heard = classifyTone(toneFeatures(c, range));
    return { intended: (i + 1) as 1 | 2 | 3 | 4, heard, user: c, ref: refContours[i] };
  });
}

/** Shape features of one syllable, in units of half the speaker's range (about −1 … +1). */
export function toneFeatures(c: PitchContour, range: number) {
  const v = voicedValues(c).map((x) => x / (Math.max(range, 2) / 2));
  const n = v.length;
  const part = (a: number, b: number) => {
    const s = v.slice(Math.floor(n * a), Math.max(Math.floor(n * a) + 1, Math.ceil(n * b)));
    return s.reduce((x, y) => x + y, 0) / s.length;
  };
  let min = 0;
  for (let i = 1; i < n; i++) if (v[i] < v[min]) min = i;
  return { start: part(0, 0.2), mid: part(0.35, 0.65), end: part(0.8, 1), mean: part(0, 1), minAt: n > 1 ? min / (n - 1) : 0.5 };
}

export function jointRange(cs: PitchContour[]): number {
  const all = cs.flatMap(voicedValues).sort((a, b) => a - b);
  return all.length ? all[Math.floor(all.length * 0.9)] - all[Math.floor(all.length * 0.1)] : 0;
}

// Typical shapes of each tone in a learner's own range (start, end, average level; −1 = bottom of
// their voice, +1 = top). Several per tone: the 3rd tone may dip and rise or just stay low, a 1st
// tone may sit rather than soar, a 2nd may start from mid or from low.
const TONE_PROTOTYPES: [1 | 2 | 3 | 4, number, number, number][] = [
  [1, 0.8, 0.8, 0.8],
  [1, 0.4, 0.4, 0.4],
  [2, -0.2, 0.8, 0.2],
  [2, -1.1, 0.4, -0.5],
  [3, -0.7, -0.2, -0.85],
  [3, -0.6, 0.3, -0.9],
  [3, -0.9, -1.4, -1.2],
  [4, 0.9, -0.9, 0.0],
  [4, 0.5, -0.5, 0.15],
];

export function classifyTone(f: { start: number; end: number; mean: number }): 1 | 2 | 3 | 4 {
  let best: 1 | 2 | 3 | 4 = 1;
  let bestD = Infinity;
  for (const [tone, s, e, m] of TONE_PROTOTYPES) {
    const d = (f.start - s) ** 2 + (f.end - e) ** 2 + 1.5 * (f.mean - m) ** 2;
    if (d < bestD) {
      bestD = d;
      best = tone;
    }
  }
  return best;
}
