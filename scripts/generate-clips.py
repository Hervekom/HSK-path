#!/usr/bin/env python3
"""
Record the short Chinese texts read aloud in the app (audioText of the short mock exams and
exercises) so they no longer depend on the browser's Chinese voice.

Output:
  public/audio/clips/<id>.mp3          one file per text
  src/data/audioClips.json             { "<exact text>": "/audio/clips/<id>.mp3" }
The app's audio engine plays the file when a text is in the map, and falls back to the
browser voice otherwise.

Voices as in generate-hsk3-audio.py: 男 → male, 女 → female, other text → narrator.
Every clip is checked with speech recognition (Paraformer); clips above 15 % error are listed.

Run:
  npx tsx scripts/dump-clip-texts.ts > /tmp/clips.json
  python3 scripts/generate-clips.py /tmp/clips.json [--models DIR]
"""
import argparse, hashlib, importlib.util, json, os, re, subprocess, tempfile
import numpy as np
import soundfile as sf

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')
spec = importlib.util.spec_from_file_location('gen', os.path.join(HERE, 'generate-hsk3-audio.py'))
gen = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gen)

# How some strings must be pronounced (text shown on screen stays unchanged).
SAY_AS = {'CA1832': '国航幺八三二'}


def segments(text: str):
    """[(text, voice)] — splits inline dialogues such as '男：…女：…'."""
    parts = re.split(r'(男：|女：)', text)
    out, voice = [], gen.NARRATOR
    for p in parts:
        if p == '男：':
            voice = gen.MALE
        elif p == '女：':
            voice = gen.FEMALE
        elif p.strip():
            spoken = p.strip()
            for k, v in SAY_AS.items():
                spoken = spoken.replace(k, v)
            out.append((spoken, voice))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('texts')
    ap.add_argument('--models', default=HERE)
    args = ap.parse_args()
    tts, asr = gen.load_tts(args.models), gen.load_asr(args.models)
    texts = json.load(open(args.texts))
    out_dir = os.path.join(ROOT, 'public', 'audio', 'clips')
    os.makedirs(out_dir, exist_ok=True)
    mapping, warnings = {}, []
    for text in texts:
        sr, parts, spoken = 24000, [], []
        for k, (seg, voice) in enumerate(segments(text)):
            a = tts.generate(seg, sid=voice, speed=gen.SPEED)
            sr = a.sample_rate
            if k:
                parts.append(np.zeros(int(0.45 * sr), np.float32))
            parts.append(np.array(a.samples, np.float32))
            spoken.append(seg)
        audio = np.concatenate([np.zeros(int(0.15 * sr), np.float32), *parts, np.zeros(int(0.3 * sr), np.float32)])
        audio = audio / (np.max(np.abs(audio)) or 1) * 0.89
        cid = hashlib.sha1(text.encode('utf-8')).hexdigest()[:12]
        with tempfile.NamedTemporaryFile(suffix='.wav') as wav:
            sf.write(wav.name, audio, sr)
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav.name, '-ac', '1', '-ar', '22050', '-b:a', '40k',
                            os.path.join(out_dir, f'{cid}.mp3')], check=True)
        mapping[text] = f'/audio/clips/{cid}.mp3'
        s = asr.create_stream()
        s.accept_waveform(sr, audio)
        asr.decode_stream(s)
        e = gen.cer(''.join(spoken), s.result.text)
        print(f'{e:4.0%}  {text}', flush=True)
        if e > gen.CER_WARN:
            warnings.append((text, s.result.text))
    with open(os.path.join(ROOT, 'src', 'data', 'audioClips.json'), 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=1)
    for w in warnings:
        print('CHECK BY EAR:', *w)


if __name__ == '__main__':
    main()
