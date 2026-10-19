#!/usr/bin/env python3
"""
Record the listening items of the original HSK 3 exams (HP3-01 … HP3-05) as MP3 files.

Output: public/hsk3/<exam id>/01.mp3 … 40.mp3, one file per listening item, read once
(the exam page lets students play each item twice, as on exam day).

Voices: Kokoro 82M v1.0 (Apache 2.0) through sherpa-onnx, fully offline.
  男 → zm_yunxi · 女 → zf_xiaoxiao · 问 / ★ statements → zf_xiaoyi (narrator)
  Monologues without a speaker label alternate male / female by question number.
Each file is checked by transcribing it back with a Chinese speech recogniser
(Paraformer); items above 15 % character error are listed for a manual listen.

Setup (once):
  pip install sherpa-onnx soundfile numpy
  curl -LO https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_0.tar.bz2
  curl -LO https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-paraformer-zh-2024-03-09.tar.bz2
  (extract both next to this script, or pass --models DIR); ffmpeg must be installed.

Run:
  npx tsx scripts/dump-hsk3-listening.ts > /tmp/items.json
  python3 scripts/generate-hsk3-audio.py /tmp/items.json [--models DIR] [--only hp3-02]
"""
import argparse, json, os, re, subprocess, tempfile
import numpy as np
import sherpa_onnx
import soundfile as sf

FEMALE, MALE, NARRATOR = 47, 50, 48  # zf_xiaoxiao, zm_yunxi, zf_xiaoyi
SPEED = 0.9
CER_WARN = 0.15


def load_tts(models: str):
    d = os.path.join(models, 'kokoro-multi-lang-v1_0') + '/'
    cfg = sherpa_onnx.OfflineTtsConfig(
        model=sherpa_onnx.OfflineTtsModelConfig(
            kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(
                model=d + 'model.onnx', voices=d + 'voices.bin', tokens=d + 'tokens.txt',
                data_dir=d + 'espeak-ng-data', dict_dir=d + 'dict',
                lexicon=d + 'lexicon-us-en.txt,' + d + 'lexicon-zh.txt'),
            num_threads=os.cpu_count() or 2),
        rule_fsts=d + 'date-zh.fst,' + d + 'phone-zh.fst,' + d + 'number-zh.fst',
        max_num_sentences=1)
    return sherpa_onnx.OfflineTts(cfg)


def load_asr(models: str):
    d = os.path.join(models, 'sherpa-onnx-paraformer-zh-2024-03-09') + '/'
    return sherpa_onnx.OfflineRecognizer.from_paraformer(
        paraformer=d + 'model.int8.onnx', tokens=d + 'tokens.txt', num_threads=os.cpu_count() or 2)


def cjk(t: str) -> str:
    return re.sub(r'[^一-鿿]', '', t)


def cer(ref: str, hyp: str) -> float:
    r, h = cjk(ref), cjk(hyp)
    d = list(range(len(h) + 1))
    for i, a in enumerate(r, 1):
        p = d[:]
        d[0] = i
        for j, b in enumerate(h, 1):
            d[j] = min(p[j] + 1, d[j - 1] + 1, p[j - 1] + (a != b))
    return d[len(h)] / max(1, len(r))


def lines_to_speech(transcript: str, n: int):
    """[(text, voice, pause before)] for one item."""
    mono = MALE if n % 2 else FEMALE
    out = []
    for line in [l.strip() for l in transcript.split('\n') if l.strip()]:
        m = re.match(r'^(男|女|问)：(.*)$', line)
        if line.startswith('★'):
            out.append((line.lstrip('★').strip(), NARRATOR, 1.0))
        elif m:
            voice = {'男': MALE, '女': FEMALE, '问': NARRATOR}[m.group(1)]
            out.append((m.group(2), voice, 1.0 if m.group(1) == '问' else 0.45))
        else:
            out.append((line, mono, 0.45))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('items')
    ap.add_argument('--models', default=os.path.dirname(os.path.abspath(__file__)))
    ap.add_argument('--out', default=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'hsk3'))
    ap.add_argument('--only')
    args = ap.parse_args()

    tts, asr = load_tts(args.models), load_asr(args.models)
    items = [i for i in json.load(open(args.items)) if not args.only or i['exam'] == args.only]
    warnings = []
    for it in items:
        parts, sr, spoken = [], 24000, []
        for k, (text, voice, pause) in enumerate(lines_to_speech(it['transcript'], it['n'])):
            a = tts.generate(text, sid=voice, speed=SPEED)
            sr = a.sample_rate
            if k:
                parts.append(np.zeros(int(pause * sr), dtype=np.float32))
            parts.append(np.array(a.samples, dtype=np.float32))
            spoken.append(text)
        audio = np.concatenate([np.zeros(int(0.3 * sr), np.float32), *parts, np.zeros(int(0.5 * sr), np.float32)])
        audio = audio / (np.max(np.abs(audio)) or 1) * 0.89

        folder = os.path.join(args.out, it['exam'])
        os.makedirs(folder, exist_ok=True)
        with tempfile.NamedTemporaryFile(suffix='.wav') as wav:
            sf.write(wav.name, audio, sr)
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav.name, '-ac', '1', '-ar', '22050', '-b:a', '40k',
                            os.path.join(folder, f"{it['n']:02d}.mp3")], check=True)

        s = asr.create_stream()
        s.accept_waveform(sr, audio)
        asr.decode_stream(s)
        e = cer(''.join(spoken), s.result.text)
        print(f"{it['exam']} {it['n']:02d}  error {e:.0%}", flush=True)
        if e > CER_WARN:
            warnings.append((it['exam'], it['n'], e, ''.join(spoken), s.result.text))

    for w in warnings:
        print('CHECK BY EAR:', *w)


if __name__ == '__main__':
    main()
