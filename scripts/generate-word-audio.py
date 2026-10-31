#!/usr/bin/env python3
"""
Record every HSK 3.0 word (levels 1–3) with an offline voice, for the Pronunciation page
(model to imitate) and the vocabulary cards. The four-tone syllables are made by
generate-tone-audio.py (the voice cannot say an isolated syllable with a clean tone).

- Words: zm_yunxia (clearest voice by speech recognition); the neutral-tone example 吗 also
  in zf_xiaoxiao.
- The voice's own melody on isolated words is unreliable, so each word is re-sung with the
  textbook tones of its syllables (tone_shape.py); kept as read when its syllables cannot be found.
- Polyphones read alone are said through a homophone or a pseudo-character
  (scripts/dump-word-audio.ts, scripts/lexicon-hsk-extra.txt).
- Same levels and encoding as hsk_tts.py; --report saves what speech recognition heard for
  each file (single syllables are too short for it to be meaningful).

Output:
  public/audio/words/<key>.mp3       w<syllabusId> for words, t-ma0 (+ -f) for the neutral tone,
                                     x-<hash> for lesson words outside the official list (key v:<hanzi>)
  src/data/wordAudio.json            { "<key>": "/audio/words/<key>.mp3" }

Run:
  npx tsx scripts/dump-word-audio.ts > /tmp/word-audio.json
  python3 scripts/generate-word-audio.py /tmp/word-audio.json [--models DIR] [--only KEY,KEY]
"""
import argparse, hashlib, json, os, re
import hsk_tts as T
import tone_shape as TS

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')
OUT = os.path.join(ROOT, 'public', 'audio', 'words')
MAP = os.path.join(ROOT, 'src', 'data', 'wordAudio.json')
MALE, FEMALE = 51, 47  # zm_yunxia, zf_xiaoxiao


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('items')
    ap.add_argument('--models', default=os.environ.get('HSK_TTS_MODELS', '/home/claude/models'))
    ap.add_argument('--only', default='')
    ap.add_argument('--report', default='')
    a = ap.parse_args()
    items = json.load(open(a.items, encoding='utf-8'))
    only = set(filter(None, a.only.split(',')))
    tts = T.load_tts(a.models, (os.path.join(HERE, 'lexicon-hsk-extra.txt'),))
    asr = T.load_asr(a.models)
    audio = json.load(open(MAP, encoding='utf-8')) if os.path.exists(MAP) else {}
    report = []
    for n, it in enumerate(items):
        jobs = [(it['key'], MALE)]
        if it['key'].startswith('t-'):
            jobs.append((it['key'] + '-f', FEMALE))
        for key, voice in jobs:
            if only and key not in only and it['key'] not in only:
                continue
            x = T.speak(tts, it['say'], voice, 0.85)
            y = TS.resing_word(x, T.SR, it['tones'])
            resung = y is not None
            if resung:
                x = T.level(y)
            # Short silence before and after: phone speakers clip the first syllable otherwise.
            x = T.np.concatenate([T.silence(0.08), x, T.silence(0.12)])
            name = key if re.fullmatch(r'[\w-]+', key) else 'x-' + hashlib.sha1(key.encode()).hexdigest()[:10]
            T.encode(x, os.path.join(OUT, name + '.mp3'))
            audio[key] = f'/audio/words/{name}.mp3'
            report.append({'key': key, 'text': it['text'], 'heard': T.transcribe(asr, x), 'sec': round(len(x) / T.SR, 2), 'resung': resung})
        if n % 100 == 0:
            print(n, '/', len(items), flush=True)
    with open(MAP, 'w', encoding='utf-8') as f:
        json.dump(dict(sorted(audio.items())), f, ensure_ascii=False, indent=0)
    if a.report:
        json.dump(report, open(a.report, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('done', len(report))


if __name__ == '__main__':
    main()
