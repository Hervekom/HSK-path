"""
Shared speech helpers for HSK Path's recorded audio (HSK 3 exams, short exam clips).

- Kokoro 82M v1.0 Chinese voices through sherpa-onnx (offline, Apache 2.0).
- Every spoken line is loudness-matched (male and female voices at the same level),
  trimmed, given short fades, then softly limited: no voice is quieter than another.
- Erhua (儿化) is kept, as on the real exam (the voice reads 一点儿 / 一会儿 / 哪儿 correctly);
  ERHUA can map a word to another spoken form if one ever sounds wrong.
- Files are encoded once, at 64 kbit/s 24 kHz (clear speech, no double encoding).
"""
import os, re, subprocess, tempfile
import numpy as np
import soundfile as sf
import sherpa_onnx

SR = 24000
# Chosen by speech-recognition intelligibility on the exam lines (character error):
# zm_yunxia 0.9 %, zf_xiaoyi 2.4 % (narrator), zf_xiaoxiao 3.5 %.
FEMALE, MALE, NARRATOR = 47, 51, 48  # zf_xiaoxiao, zm_yunxia, zf_xiaoyi
SPEED = 0.9
TARGET_DB = -17.0  # RMS of voiced frames (≈ -19 LUFS overall: clear on phone speakers)
CER_WARN = 0.15

# Spoken form overrides (text on screen unchanged). Empty: erhua is read correctly.
ERHUA: dict = {}
SAY_AS = {'CA1832': '国航幺八三二', 'HSK': '汉语水平考试'}


def spoken_form(text: str) -> str:
    for k in sorted(SAY_AS, key=len, reverse=True):
        text = text.replace(k, SAY_AS[k])
    for k in sorted(ERHUA, key=len, reverse=True):
        text = text.replace(k, ERHUA[k])
    return text


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


def voiced_rms_db(x: np.ndarray) -> float:
    w = int(0.05 * SR)
    frames = [x[i:i + w] for i in range(0, max(1, len(x) - w), w)]
    e = np.array([np.sqrt(np.mean(f ** 2)) for f in frames]) if frames else np.array([0.0])
    v = e[e > max(0.01, 0.1 * (e.max() if len(e) else 0))]
    return float(20 * np.log10(np.sqrt(np.mean(v ** 2)))) if len(v) else -99.0


def level(x: np.ndarray) -> np.ndarray:
    """Trim, match loudness, fade edges, soft-limit."""
    nz = np.where(np.abs(x) > 0.005)[0]
    if len(nz):
        x = x[max(0, nz[0] - int(0.03 * SR)): nz[-1] + int(0.08 * SR)]
    gain = 10 ** ((TARGET_DB - voiced_rms_db(x)) / 20)
    x = x * gain
    f = int(0.008 * SR)
    if len(x) > 2 * f:
        x[:f] *= np.linspace(0, 1, f)
        x[-f:] *= np.linspace(1, 0, f)
    # soft limiter above -1.5 dBFS
    t = 10 ** (-1.5 / 20)
    over = np.abs(x) > t
    x[over] = np.sign(x[over]) * (t + (1 - t) * np.tanh((np.abs(x[over]) - t) / (1 - t)))
    return x.astype(np.float32)


def speak(tts, text: str, voice: int, speed: float = SPEED) -> np.ndarray:
    a = tts.generate(spoken_form(text), sid=voice, speed=speed)
    x = np.array(a.samples, dtype=np.float32)
    if a.sample_rate != SR:
        idx = np.linspace(0, len(x) - 1, int(len(x) * SR / a.sample_rate))
        x = np.interp(idx, np.arange(len(x)), x).astype(np.float32)
    return level(x)


def silence(sec: float) -> np.ndarray:
    return np.zeros(int(sec * SR), dtype=np.float32)


def encode(x: np.ndarray, path: str, kbps: int = 64):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix='.wav') as wav:
        sf.write(wav.name, x, SR)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav.name, '-ac', '1', '-ar', str(SR),
                        '-b:a', f'{kbps}k', path], check=True)


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


def transcribe(asr, x: np.ndarray) -> str:
    s = asr.create_stream()
    s.accept_waveform(SR, x)
    asr.decode_stream(s)
    return s.result.text
