#!/usr/bin/env python3
"""
Record the everyday phrases and the speaking-test texts with offline voices (same voices, levels
and speech-recognition check as hsk_tts.py), so the "Say it" practice can compare the learner's
melody with a model.

Output:
  public/audio/speak/<id>.mp3     one file per text
  src/data/speakAudio.json        { "<exact text>": "/audio/speak/<id>.mp3" }

Run:
  npx tsx scripts/dump-speak-texts.ts > /tmp/speak.json
  python3 scripts/generate-speak-audio.py /tmp/speak.json [--models DIR]
"""
import argparse, hashlib, json, os
import numpy as np
import hsk_tts as T

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')
RETRY_SPEEDS = (T.SPEED, 0.8, 1.0, 0.7)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('texts')
    ap.add_argument('--models', default=HERE)
    args = ap.parse_args()
    tts, asr = T.load_tts(args.models), T.load_asr(args.models)
    texts = json.load(open(args.texts))
    out_dir = os.path.join(ROOT, 'public', 'audio', 'speak')
    mapping, warnings = {}, []
    for k, text in enumerate(texts):
        # alternate the female and male voice so learners hear both
        voice = T.FEMALE if k % 2 == 0 else T.MALE
        best = None
        for sp in RETRY_SPEEDS:
            x = T.speak(tts, text, voice, sp)
            e = T.cer(T.spoken_form(text), T.transcribe(asr, x))
            if best is None or e < best[0]:
                best = (e, x)
            if e <= 0.05:
                break
        e, x = best
        cid = hashlib.sha1(text.encode('utf-8')).hexdigest()[:12]
        T.encode(np.concatenate([T.silence(0.15), x, T.silence(0.3)]), os.path.join(out_dir, f'{cid}.mp3'), 64)
        mapping[text] = f'/audio/speak/{cid}.mp3'
        print(f'{e:4.0%}  {text}', flush=True)
        if e > T.CER_WARN:
            warnings.append(text)
    with open(os.path.join(ROOT, 'src', 'data', 'speakAudio.json'), 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=1)
    for w in warnings:
        print('CHECK BY EAR:', w)


if __name__ == '__main__':
    main()
