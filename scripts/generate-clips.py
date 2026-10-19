#!/usr/bin/env python3
"""
Record the short Chinese texts read aloud in the app (audioText of the short mock exams and
exercises) so they no longer depend on the browser's Chinese voice.

Output:
  public/audio/clips/<id>.mp3          one file per text
  src/data/audioClips.json             { "<exact text>": "/audio/clips/<id>.mp3" }
The app's audio engine plays the file when a text is in the map, and falls back to the
browser voice otherwise.

Voices and levels as in hsk_tts.py: 男 → male, 女 → female, other text → narrator.
Every clip is checked with speech recognition (Paraformer); clips above 15 % error are listed.

Run:
  npx tsx scripts/dump-clip-texts.ts > /tmp/clips.json
  python3 scripts/generate-clips.py /tmp/clips.json [--models DIR]
"""
import argparse, hashlib, json, os, re
import numpy as np
import hsk_tts as T

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')


def segments(text: str):
    """[(text, voice)] — splits inline dialogues such as '男：…女：…'."""
    out, voice = [], T.NARRATOR
    for p in re.split(r'(男：|女：)', text):
        if p == '男：':
            voice = T.MALE
        elif p == '女：':
            voice = T.FEMALE
        elif p.strip():
            out.append((p.strip(), voice))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('texts')
    ap.add_argument('--models', default=HERE)
    args = ap.parse_args()
    tts, asr = T.load_tts(args.models), T.load_asr(args.models)
    texts = json.load(open(args.texts))
    out_dir = os.path.join(ROOT, 'public', 'audio', 'clips')
    mapping, warnings = {}, []
    for text in texts:
        parts, spoken = [], []
        for k, (seg, voice) in enumerate(segments(text)):
            if k:
                parts.append(T.silence(0.5))
            parts.append(T.speak(tts, seg, voice))
            spoken.append(seg)
        x = np.concatenate(parts)
        cid = hashlib.sha1(text.encode('utf-8')).hexdigest()[:12]
        T.encode(np.concatenate([T.silence(0.15), x, T.silence(0.3)]), os.path.join(out_dir, f'{cid}.mp3'), 64)
        mapping[text] = f'/audio/clips/{cid}.mp3'
        e = T.cer(T.spoken_form(''.join(spoken)), T.transcribe(asr, x))
        print(f'{e:4.0%}  {text}', flush=True)
        if e > T.CER_WARN:
            warnings.append(text)
    with open(os.path.join(ROOT, 'src', 'data', 'audioClips.json'), 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=1)
    for w in warnings:
        print('CHECK BY EAR:', w)


if __name__ == '__main__':
    main()
