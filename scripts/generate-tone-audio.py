#!/usr/bin/env python3
"""
Record the tone-drill syllables (妈 麻 马 骂 …) with textbook tone melodies.

The offline voice reads isolated syllables with a sentence melody (every tone comes out
rising-then-falling), so it cannot serve as a tone model on its own. Each syllable is therefore
read once by the voice, then re-sung four times with the WORLD vocoder (pyworld): same voice and
same consonant, but the pitch follows the standard tone contours (Chao numbers 55, 35, 214, 51)
and tone lengths (3rd longest, 4th shortest).

Output: public/audio/words/t-<base><tone>.mp3 (male, zm_yunxia) and t-<base><tone>-f.mp3
(female, zf_xiaoxiao); keys added to src/data/wordAudio.json.

Run: python3 scripts/generate-tone-audio.py [--models DIR]     (pip install pyworld)
Check: npx tsx scripts/check-tones.ts
"""
import argparse, json, os, re
import numpy as np
import pyworld as pw
import hsk_tts as T

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')
OUT = os.path.join(ROOT, 'public', 'audio', 'words')
MAP = os.path.join(ROOT, 'src', 'data', 'wordAudio.json')
VOICES = {'': 51, '-f': 47}  # zm_yunxia, zf_xiaoxiao
FP = 5.0  # WORLD frame period (ms)

# Chao tone levels over the syllable's voiced part (time 0–1, level 1–5), and its length (s).
CONTOURS = {
    1: ([0, 1], [4.9, 4.7], 0.42),
    2: ([0, 0.25, 1], [3.0, 2.7, 5.0], 0.44),
    3: ([0, 0.35, 0.68, 1], [2.3, 1.0, 1.1, 3.7], 0.56),
    4: ([0, 0.12, 1], [5.0, 5.0, 1.2], 0.32),
}
ST_PER_LEVEL = 2.4  # five levels ≈ an octave of range, centred on the voice's own median


def syllables():
    src = open(os.path.join(ROOT, 'src', 'data', 'toneDrills.ts'), encoding='utf-8').read()
    for m in re.finditer(r"base: '(\w+)', tones: \[\['(.)'", src):
        yield m.group(1), m.group(2)


def smooth_contour(tone: int, n: int) -> np.ndarray:
    xs, levels, _ = CONTOURS[tone]
    t = np.linspace(0, 1, n)
    y = np.interp(t, xs, levels)
    k = max(1, n // 12)  # soften the corners
    y = np.convolve(np.pad(y, k, mode='edge'), np.ones(2 * k + 1) / (2 * k + 1), mode='valid')
    return (y - 3) * ST_PER_LEVEL


def resing(x: np.ndarray, tone: int) -> np.ndarray:
    x = x.astype(np.float64)
    f0, t = pw.harvest(x, T.SR, frame_period=FP, f0_floor=70, f0_ceil=600)
    sp = pw.cheaptrick(x, f0, t, T.SR)
    ap = pw.d4c(x, f0, t, T.SR)
    voiced = f0 > 0
    # Longest voiced run = the vowel (and nasal coda) of the syllable.
    runs, i = [], 0
    while i < len(f0):
        if voiced[i]:
            j = i
            while j < len(f0) and voiced[j]:
                j += 1
            runs.append((i, j))
            i = j
        else:
            i += 1
    a, b = max(runs, key=lambda r: r[1] - r[0])
    # Keep the strong part of the vowel: a weak edge (fricative mistaken for voice, fading end)
    # would carry part of the melody where nobody hears it.
    energy = np.log(np.sum(sp, axis=1) + 1e-12)
    strong = energy[a:b] > energy[a:b].max() - np.log(30)
    idx = np.where(strong)[0]
    a, b = a + idx[0], a + idx[-1] + 1
    med = float(np.median(f0[a:b]))
    n = int(CONTOURS[tone][2] * 1000 / FP)
    src = np.linspace(a, b - 1, n)
    def stretch(m):
        lo = np.floor(src).astype(int)
        hi = np.minimum(lo + 1, b - 1)
        w = (src - lo)[:, None]
        return m[lo] * (1 - w) + m[hi] * w
    sp_v = np.exp(stretch(np.log(sp + 1e-12)))
    ap_v = stretch(ap)
    f0_v = med * 2 ** (smooth_contour(tone, n) / 12)
    # Keep the consonant before the vowel; drop the tail after it.
    tail = min(len(f0), b + 6)
    f0_new = np.concatenate([np.where(f0[:a] > 0, f0_v[0], 0), f0_v, np.full(tail - b, f0_v[-1])])
    sp_new = np.concatenate([sp[:a], sp_v, sp[b:tail]])
    ap_new = np.concatenate([ap[:a], ap_v, ap[b:tail]])
    y = pw.synthesize(f0_new, np.ascontiguousarray(sp_new), np.ascontiguousarray(ap_new), T.SR, FP)
    return T.level(y.astype(np.float32))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--models', default=os.environ.get('HSK_TTS_MODELS', '/home/claude/models'))
    a = ap.parse_args()
    tts = T.load_tts(a.models)
    audio = json.load(open(MAP, encoding='utf-8')) if os.path.exists(MAP) else {}
    for base, char in syllables():
        for suffix, voice in VOICES.items():
            x = T.speak(tts, char, voice, 0.85)
            for tone in (1, 2, 3, 4):
                y = np.concatenate([T.silence(0.08), resing(x, tone), T.silence(0.12)])
                key = f't-{base}{tone}{suffix}'
                T.encode(y, os.path.join(OUT, key + '.mp3'))
                audio[key] = f'/audio/words/{key}.mp3'
        print(base, flush=True)
    with open(MAP, 'w', encoding='utf-8') as f:
        json.dump(dict(sorted(audio.items())), f, ensure_ascii=False, indent=0)


if __name__ == '__main__':
    main()
