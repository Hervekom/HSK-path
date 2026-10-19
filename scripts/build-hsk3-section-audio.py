#!/usr/bin/env python3
"""
Build one continuous listening recording per original HSK 3 exam, in the same format as the
official papers (H31001 …), so the exam page plays it exactly like the free official exams:

  大家好！欢迎参加汉语水平考试三级。(×3) · 三级听力考试分四部分，共四十题。请大家注意，听力考试现在开始。
  第一部分 · 一共十个题，每题听两次。· 例如：<example ×2> · 现在开始第一到五题。· items 1–5 (no number)
  现在开始第六到十题。· items 6–10
  第二部分 … 现在开始第十一题。· "十一" + item, pause, "十一" + item again … (same for parts 3 and 4)
  听力考试现在结束。

Uses the per-item recordings made by generate-hsk3-audio.py (public/hsk3/<id>/00.mp3 … 40.mp3)
and the same narrator voice for the announcements.
Output: public/hsk3/<CODE>.mp3 (e.g. HP3-01.mp3), mono 22 kHz, 32 kbit/s.

Run: python3 scripts/build-hsk3-section-audio.py [--models DIR] [--only hp3-02]
"""
import argparse, importlib.util, os, subprocess, tempfile
import numpy as np
import soundfile as sf

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('gen', os.path.join(HERE, 'generate-hsk3-audio.py'))
gen = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gen)

SR = 22050
EXAMS = [('hp3-01', 'HP3-01'), ('hp3-02', 'HP3-02'), ('hp3-03', 'HP3-03'), ('hp3-04', 'HP3-04'), ('hp3-05', 'HP3-05')]
PARTS = [('第一部分', 1, 10), ('第二部分', 11, 20), ('第三部分', 21, 30), ('第四部分', 31, 40)]
REPEAT_GAP, NEXT_GAP = 3.0, 8.0  # seconds, close to the official recordings

DIGITS = '零一二三四五六七八九'


def zh_number(n: int) -> str:
    if n < 10:
        return DIGITS[n]
    tens, ones = divmod(n, 10)
    return ('' if tens == 1 else DIGITS[tens]) + '十' + (DIGITS[ones] if ones else '')


def silence(sec: float) -> np.ndarray:
    return np.zeros(int(sec * SR), dtype=np.float32)


def load_mp3(path: str) -> np.ndarray:
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-f', 'f32le', '-ac', '1', '-ar', str(SR), '-'],
                         check=True, capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.float32).copy()


class Narrator:
    def __init__(self, models: str):
        self.tts = gen.load_tts(models)
        self.cache = {}

    def say(self, text: str) -> np.ndarray:
        if text not in self.cache:
            a = self.tts.generate(text, sid=gen.NARRATOR, speed=gen.SPEED)
            x = np.array(a.samples, dtype=np.float32)
            # resample 24 kHz → 22.05 kHz
            idx = np.linspace(0, len(x) - 1, int(len(x) * SR / a.sample_rate))
            x = np.interp(idx, np.arange(len(x)), x).astype(np.float32)
            self.cache[text] = x / (np.max(np.abs(x)) or 1) * 0.89
        return self.cache[text]


def build(exam_id: str, code: str, narrator: Narrator, root: str) -> float:
    item = lambda n: load_mp3(os.path.join(root, exam_id, f'{n:02d}.mp3'))
    say = narrator.say
    out = [silence(1.0)]
    for _ in range(3):
        out += [say('大家好！欢迎参加汉语水平考试三级。'), silence(1.2)]
    out += [say('三级听力考试分四部分，共四十题。'), silence(1.0), say('请大家注意，听力考试现在开始。'), silence(2.0)]

    for title, first, last in PARTS:
        out += [say(title), silence(1.0), say('一共十个题，每题听两次。'), silence(1.5)]
        if first == 1 and os.path.exists(os.path.join(root, exam_id, '00.mp3')):
            ex = item(0)
            out += [say('例如：'), silence(1.0), ex, silence(REPEAT_GAP), ex, silence(5.0)]
        if first == 1:
            for a, b in ((1, 5), (6, 10)):
                out += [say(f'现在开始第{zh_number(a)}到{zh_number(b)}题。'), silence(3.0)]
                for n in range(a, b + 1):
                    x = item(n)
                    out += [x, silence(REPEAT_GAP), x, silence(NEXT_GAP)]
        else:
            out += [say(f'现在开始第{zh_number(first)}题。'), silence(2.5)]
            for n in range(first, last + 1):
                x, num = item(n), say(zh_number(n))
                out += [num, silence(1.0), x, silence(REPEAT_GAP), num, silence(1.0), x, silence(NEXT_GAP)]
        out.append(silence(2.0))
    out += [say('听力考试现在结束。'), silence(2.0)]

    audio = np.concatenate(out)
    with tempfile.NamedTemporaryFile(suffix='.wav') as wav:
        sf.write(wav.name, audio, SR)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav.name, '-ac', '1', '-ar', str(SR), '-b:a', '32k',
                        os.path.join(root, f'{code}.mp3')], check=True)
    return len(audio) / SR


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--models', default=HERE)
    ap.add_argument('--root', default=os.path.join(HERE, '..', 'public', 'hsk3'))
    ap.add_argument('--only')
    args = ap.parse_args()
    narrator = Narrator(args.models)
    for exam_id, code in EXAMS:
        if args.only and args.only != exam_id:
            continue
        sec = build(exam_id, code, narrator, args.root)
        print(f'{code}.mp3  {int(sec // 60)} min {int(sec % 60)} s', flush=True)


if __name__ == '__main__':
    main()
