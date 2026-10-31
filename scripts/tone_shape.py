"""
Gives a recorded word the textbook tone melody of its syllables (WORLD vocoder, pyworld).

The offline voice says isolated words with a sentence melody that can blur or even swap tones
(a single syllable comes out rising-then-falling whatever its tone). Here the voice, consonants
and timing are kept, and only the pitch is redrawn from the tones of the word:
- Chao contours: 1st 55, 2nd 35, 3rd 214 at the end of a word / 21 before another tone, 4th 51;
- 3rd + 3rd → 2nd + 3rd (tone sandhi; 不/一 changes are already written in the syllabus pinyin);
- neutral tones pitched after the previous tone (half-low after 1st, mid after 2nd, half-high
  after 3rd, low after 4th);
- a slight downward drift across the word, as in natural speech.

Syllables are found from the voiced stretches of the recording; when their number does not
match the word, the recording is left as it is (resing_word returns None).
"""
import numpy as np
import pyworld as pw

FP = 5.0  # ms per WORLD frame
ST_PER_LEVEL = 2.4


def _runs(mask):
    runs, i = [], 0
    while i < len(mask):
        if mask[i]:
            j = i
            while j < len(mask) and mask[j]:
                j += 1
            runs.append([i, j])
            i = j
        else:
            i += 1
    return runs


def nuclei(f0, energy, n):
    """Frame ranges of the n syllable vowels, or None."""
    strong = energy > energy.max() - np.log(40)
    runs = [r for r in _runs((f0 > 0) & strong) if r[1] - r[0] >= 6]
    if not runs:
        return None
    # A consonant inside a word can break the voicing for a moment: join gaps under 25 ms.
    joined = [runs[0]]
    for r in runs[1:]:
        if r[0] - joined[-1][1] < 5:
            joined[-1][1] = r[1]
        else:
            joined.append(r)
    runs = joined
    while len(runs) > n:  # merge across the smallest gap
        k = min(range(len(runs) - 1), key=lambda i: runs[i + 1][0] - runs[i][1])
        runs[k:k + 2] = [[runs[k][0], runs[k + 1][1]]]
    while len(runs) < n:  # split the run with the deepest dip in loudness (m, n, l, y, w…)
        best = None
        for ri, (a, b) in enumerate(runs):
            for i in range(a + 12, b - 12):
                depth = min(energy[a:i].max(), energy[i:b].max()) - energy[i]
                if depth > np.log(1.6) and (best is None or depth > best[0]):
                    best = (depth, ri, i)
        if best is None:
            return None
        _, ri, i = best
        a, b = runs[ri]
        runs[ri:ri + 1] = [[a, i], [i, b]]
    return runs


def tone_targets(tones):
    """Chao level breakpoints (time 0–1, levels) for each syllable, after sandhi."""
    t = list(tones)
    for i in range(len(t) - 1):
        if t[i] == 3 and t[i + 1] == 3:
            t[i] = 2
    out = []
    for i, tone in enumerate(t):
        final = i == len(t) - 1
        if tone == 1:
            pts = ([0, 1], [5, 4.9])
        elif tone == 2:
            pts = ([0, 0.25, 1], [3, 2.8, 5]) if final else ([0, 1], [3, 4.8])
        elif tone == 3:
            pts = ([0, 0.35, 0.68, 1], [2.3, 1, 1.1, 3.7]) if final else ([0, 0.6, 1], [2, 1.1, 1])
        elif tone == 4:
            pts = ([0, 0.12, 1], [5, 5, 1.2]) if final else ([0, 1], [5, 2])
        else:  # neutral
            prev = t[i - 1] if i else 0
            level = {1: 2.2, 2: 2.8, 3: 3.8, 4: 1.4}.get(prev, 3)
            pts = ([0, 1], [level, level - 0.3])
        drift = -0.25 * i
        out.append((pts[0], [l + drift for l in pts[1]]))
    return out


def resing_word(x, sr, tones):
    """x: float32 mono; tones: one per syllable (0 = neutral). Returns float32 or None."""
    x = x.astype(np.float64)
    f0, t = pw.harvest(x, sr, frame_period=FP, f0_floor=70, f0_ceil=600)
    sp = pw.cheaptrick(x, f0, t, sr)
    ap = pw.d4c(x, f0, t, sr)
    energy = np.log(np.sum(sp, axis=1) + 1e-12)
    segs = nuclei(f0, energy, len(tones))
    if segs is None:
        return None
    med = float(np.median(f0[f0 > 0]))
    new = np.where(f0 > 0, np.nan, 0.0)
    for (a, b), (xs, levels) in zip(segs, tone_targets(tones)):
        n = b - a
        y = np.interp(np.linspace(0, 1, n), xs, levels)
        k = max(1, n // 10)
        y = np.convolve(np.pad(y, k, mode='edge'), np.ones(2 * k + 1) / (2 * k + 1), mode='valid')
        new[a:b] = med * 2 ** ((y - 3) * ST_PER_LEVEL / 12)
    # Voiced frames between vowels (m, n, l…): glide from one vowel's pitch to the next.
    idx = np.arange(len(new))
    known = ~np.isnan(new) & (new > 0)
    gaps = np.isnan(new)
    if known.any():
        new[gaps] = np.interp(idx[gaps], idx[known], new[known])
    y = pw.synthesize(new, sp, ap, sr, FP)
    return y.astype(np.float32)
