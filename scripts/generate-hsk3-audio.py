#!/usr/bin/env python3
"""
Record the listening of the original HSK 3 exams (HP3-01 … HP3-05).

Outputs (public/hsk3/):
  <id>/00.mp3            example dialogue of part 1
  <id>/01.mp3 … 40.mp3   each listening item, read once (replayed on the review screen)
  <CODE>.mp3             the whole listening section in the official format (same player as
                         the official papers): welcome, part announcements, example, every
                         item read twice, numbers from part 2, "听力考试现在结束"

Voices and levels: see hsk_tts.py (male / female / narrator matched in loudness, erhua fixed).
The full recording is assembled from the raw audio (not from the MP3s), so it is encoded once.
Each item is checked with speech recognition; items above 15 % error are listed.

Setup (once): pip install sherpa-onnx soundfile numpy; ffmpeg; extract next to this script
  https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_0.tar.bz2
  https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-paraformer-zh-2024-03-09.tar.bz2
Run:
  npx tsx scripts/dump-hsk3-listening.ts > /tmp/items.json
  python3 scripts/generate-hsk3-audio.py /tmp/items.json [--models DIR] [--only hp3-02] [--no-check]
"""
import argparse, json, os, re
import numpy as np
import hsk_tts as T

HERE = os.path.dirname(os.path.abspath(__file__))
PARTS = [('第一部分', 1, 10), ('第二部分', 11, 20), ('第三部分', 21, 30), ('第四部分', 31, 40)]
REPEAT_GAP, NEXT_GAP = 3.0, 8.0  # seconds, close to the official recordings
DIGITS = '零一二三四五六七八九'


def zh_number(n: int) -> str:
    if n < 10:
        return DIGITS[n]
    tens, ones = divmod(n, 10)
    return ('' if tens == 1 else DIGITS[tens]) + '十' + (DIGITS[ones] if ones else '')


def lines_to_speech(transcript: str, n: int):
    """[(text, voice, pause before)] for one item."""
    mono = T.MALE if n % 2 else T.FEMALE
    out = []
    for line in [l.strip() for l in transcript.split('\n') if l.strip()]:
        m = re.match(r'^(男|女|问)：(.*)$', line)
        if line.startswith('★'):
            out.append((line.lstrip('★').strip(), T.NARRATOR, 1.0))
        elif m:
            voice = {'男': T.MALE, '女': T.FEMALE, '问': T.NARRATOR}[m.group(1)]
            out.append((m.group(2), voice, 1.0 if m.group(1) == '问' else 0.5))
        else:
            out.append((line, mono, 0.5))
    return out


def render_item(tts, transcript: str, n: int):
    parts, spoken = [], []
    for k, (text, voice, pause) in enumerate(lines_to_speech(transcript, n)):
        if k:
            parts.append(T.silence(pause))
        parts.append(T.speak(tts, text, voice))
        spoken.append(text)
    return np.concatenate(parts), ''.join(spoken)


def build_section(tts, items: dict) -> np.ndarray:
    say = lambda t: T.speak(tts, t, T.NARRATOR)
    out = [T.silence(1.0)]
    for _ in range(3):
        out += [say('大家好！欢迎参加汉语水平考试三级。'), T.silence(1.2)]
    out += [say('三级听力考试分四部分，共四十题。'), T.silence(1.0), say('请大家注意，听力考试现在开始。'), T.silence(2.0)]
    for title, first, last in PARTS:
        out += [say(title), T.silence(1.0), say('一共十个题，每题听两次。'), T.silence(1.5)]
        if first == 1:
            if 0 in items:
                out += [say('例如：'), T.silence(1.0), items[0], T.silence(REPEAT_GAP), items[0], T.silence(5.0)]
            for a, b in ((1, 5), (6, 10)):
                out += [say(f'现在开始第{zh_number(a)}到{zh_number(b)}题。'), T.silence(3.0)]
                for n in range(a, b + 1):
                    out += [items[n], T.silence(REPEAT_GAP), items[n], T.silence(NEXT_GAP)]
        else:
            out += [say(f'现在开始第{zh_number(first)}题。'), T.silence(2.5)]
            for n in range(first, last + 1):
                num = say(zh_number(n))
                out += [num, T.silence(1.0), items[n], T.silence(REPEAT_GAP),
                        num, T.silence(1.0), items[n], T.silence(NEXT_GAP)]
        out.append(T.silence(2.0))
    out += [say('听力考试现在结束。'), T.silence(2.0)]
    return np.concatenate(out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('items')
    ap.add_argument('--models', default=HERE)
    ap.add_argument('--out', default=os.path.join(HERE, '..', 'public', 'hsk3'))
    ap.add_argument('--only')
    ap.add_argument('--no-check', action='store_true')
    args = ap.parse_args()

    tts = T.load_tts(args.models)
    asr = None if args.no_check else T.load_asr(args.models)
    all_items = json.load(open(args.items))
    exams = sorted({(i["exam"], i.get("code") or i["exam"].upper()) for i in all_items})
    warnings = []
    for exam_id, code in exams:
        if args.only and args.only != exam_id:
            continue
        audio = {}
        for it in [i for i in all_items if i['exam'] == exam_id]:
            x, spoken = render_item(tts, it['transcript'], it['n'])
            audio[it['n']] = x
            T.encode(np.concatenate([T.silence(0.2), x, T.silence(0.4)]),
                     os.path.join(args.out, exam_id, f"{it['n']:02d}.mp3"), 64)
            msg = ''
            if asr:
                e = T.cer(T.spoken_form(spoken), T.transcribe(asr, x))
                msg = f'error {e:.0%}'
                if e > T.CER_WARN:
                    warnings.append((exam_id, it['n'], f'{e:.0%}', spoken))
            print(f"{exam_id} {it['n']:02d} {msg}", flush=True)
        section = build_section(tts, audio)
        T.encode(section, os.path.join(args.out, f'{code}.mp3'), 48)
        print(f'{code}.mp3  {int(len(section) / T.SR // 60)} min {int(len(section) / T.SR % 60)} s', flush=True)
    for w in warnings:
        print('CHECK BY EAR:', *w)


if __name__ == '__main__':
    main()
