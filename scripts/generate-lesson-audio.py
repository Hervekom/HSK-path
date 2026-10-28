#!/usr/bin/env python3
"""
Record the lesson stories (scenes line by line, whole scenes, readings) with offline voices,
so the Histoire tab no longer depends on the browser's Chinese voice.

Each recurring character keeps the same voice across the three levels; minor roles get a
voice of their gender that differs from the other speakers of the scene. Readings use the
narrator voice. Same levels, encoding and speech-recognition check as hsk_tts.py.

Output:
  public/audio/lessons/<id>.mp3        one file per line and per reading paragraph
  src/data/lessonAudio.json            { "<exact text>": file, or [files] for a whole scene / reading }
                                       (loaded with the story; the app plays a list in order)

Run:
  npx tsx scripts/dump-lesson-audio.ts > /tmp/lesson-audio.json
  python3 scripts/generate-lesson-audio.py /tmp/lesson-audio.json [--models DIR]
"""
import argparse, hashlib, json, os
import numpy as np
import hsk_tts as T

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')

# Kokoro v1.0 Chinese voices (sherpa-onnx speaker ids).
XIAOBEI, XIAONI, XIAOXIAO, XIAOYI, YUNJIAN, YUNXI, YUNXIA, YUNYANG = range(45, 53)

CAST = {
    '大卫': YUNXIA, '小明': YUNXI, '王老师': YUNJIAN, '张经理': YUNYANG, '爸爸': YUNYANG,
    '安娜': XIAOXIAO, '玛丽': XIAOBEI, '妈妈': XIAOYI, '妹妹': XIAOBEI, '姐姐': XIAOYI,
}
FEMALE_ROLES = {'女儿', '奶奶', '阿姨', '新娘', '王老师的妻子'}
FEMALE_POOL = [XIAOYI, XIAOBEI, XIAOXIAO]
MALE_POOL = [YUNJIAN, YUNYANG, YUNXI, YUNXIA]
RETRY_SPEEDS = (T.SPEED, 0.8, 1.0, 0.7)
# zf_xiaoni is left out: far less intelligible (about 36 % character error on these lines).


def scene_voices(lines):
    """Speaker → voice for one scene: cast voices first, then distinct voices for the others."""
    used = {CAST[l['speaker']] for l in lines if l['speaker'] in CAST}
    voices = {}
    for l in lines:
        sp = l['speaker']
        if sp in voices:
            continue
        if sp in CAST:
            voices[sp] = CAST[sp]
            continue
        pool = FEMALE_POOL if sp in FEMALE_ROLES else MALE_POOL
        v = next((p for p in pool if p not in used), pool[0])
        voices[sp] = v
        used.add(v)
    return voices


def cid(text: str) -> str:
    return hashlib.sha1(text.encode('utf-8')).hexdigest()[:12]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('texts')
    ap.add_argument('--models', default=HERE)
    ap.add_argument('--redo', help='file with one text per line: re-record only these, keep the other files')
    args = ap.parse_args()
    tts, asr = T.load_tts(args.models), T.load_asr(args.models)
    lessons = json.load(open(args.texts))
    out_dir = os.path.join(ROOT, 'public', 'audio', 'lessons')
    map_path = os.path.join(ROOT, 'src', 'data', 'lessonAudio.json')
    mapping, warnings = {}, []
    redo = set(open(args.redo, encoding='utf-8').read().split('\n')) - {''} if args.redo else None
    old = json.load(open(map_path, encoding='utf-8')) if redo is not None else {}

    def save(text, x):
        if text in mapping:
            return
        if x is None:  # kept from the previous run
            mapping[text] = old[text]
            return
        name = cid(text)
        T.encode(np.concatenate([T.silence(0.15), x, T.silence(0.3)]), os.path.join(out_dir, f'{name}.mp3'), 64)
        mapping[text] = f'/audio/lessons/{name}.mp3'

    def record(text, voice):
        # Short lines are sometimes slurred: try a few speeds and keep the clearest take.
        best = None
        for speed in RETRY_SPEEDS:
            x = T.speak(tts, text, voice, speed)
            e = T.cer(T.spoken_form(text), T.transcribe(asr, x))
            if best is None or e < best[0]:
                best = (e, x)
            if e <= T.CER_WARN:
                break
        e, x = best
        print(f'{e:4.0%}  {text}', flush=True)
        if e > T.CER_WARN:
            warnings.append(f'{e:.0%} {text}')
        return x

    for lesson in lessons:
        print('==', lesson['id'], flush=True)
        for lines in lesson['scenes']:
            voices = scene_voices(lines)
            for l in lines:
                keep = redo is not None and l['text'] not in redo and l['text'] in old
                save(l['text'], None if keep else record(l['text'], voices[l['speaker']]))
            # The scene's play-all button reads the lines joined together: the app plays the
            # line files one after the other (no second copy of the audio).
            mapping.setdefault(''.join(l['text'] for l in lines), [mapping[l['text']] for l in lines])
        if lesson['story']:
            for p in lesson['story']:
                keep = redo is not None and p not in redo and p in old
                save(p, None if keep else record(p, T.NARRATOR))
            mapping.setdefault(''.join(lesson['story']), [mapping[p] for p in lesson['story']])

    with open(map_path, 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=0)
    print(len(mapping), 'files')
    for w in warnings:
        print('CHECK BY EAR:', w)


if __name__ == '__main__':
    main()
