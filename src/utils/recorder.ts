// Microphone recording for the Pronunciation page, entirely in the browser.
// - Raw samples are captured through the Web Audio API (AudioWorklet, or ScriptProcessor on old
//   browsers), so every browser gives the same format and nothing depends on MediaRecorder codecs.
// - Recording stops by itself after a short silence once the learner has spoken.
// - The microphone is released after each recording (no lasting "mic in use" indicator).
// - Nothing is stored: the recording lives in memory until the next one.

export interface Recording {
  samples: Float32Array;
  sampleRate: number;
  /** True when something louder than the background noise was heard. */
  hadSpeech: boolean;
}

export type MicError = 'unsupported' | 'insecure' | 'denied' | 'no_device' | 'busy' | 'failed';

export interface RecordOptions {
  /** Hard limit in seconds. */
  maxSec: number;
  /** Stop after this much silence once speech has started. */
  silenceSec: number;
  /** Give up when nothing is said for this long. */
  waitSec?: number;
  /** Input level 0–1, about 20 times a second (for a meter). */
  onLevel?: (level: number) => void;
}

let sharedCtx: AudioContext | null = null;

/** One AudioContext for the page; must first be created or resumed in a tap/click handler. */
export function audioContext(): AudioContext {
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!sharedCtx || sharedCtx.state === 'closed') sharedCtx = new Ctx();
  if (sharedCtx.state === 'suspended') void sharedCtx.resume();
  return sharedCtx;
}

export function micSupport(): MicError | null {
  if (typeof window === 'undefined') return 'unsupported';
  if (!window.isSecureContext) return 'insecure';
  if (!navigator.mediaDevices?.getUserMedia) return 'unsupported';
  if (!(window.AudioContext || (window as unknown as { webkitAudioContext?: unknown }).webkitAudioContext)) return 'unsupported';
  return null;
}

const WORKLET = `
class Tap extends AudioWorkletProcessor {
  constructor() { super(); this.buf = new Float32Array(1024); this.n = 0; }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (ch) for (let i = 0; i < ch.length; i++) {
      this.buf[this.n++] = ch[i];
      if (this.n === this.buf.length) { this.port.postMessage(this.buf.slice(0)); this.n = 0; }
    }
    return true;
  }
}
registerProcessor('hsk-tap', Tap);`;

let workletReady: Promise<boolean> | null = null;
function loadWorklet(ctx: AudioContext): Promise<boolean> {
  if (!ctx.audioWorklet) return Promise.resolve(false);
  if (!workletReady) {
    const url = URL.createObjectURL(new Blob([WORKLET], { type: 'application/javascript' }));
    workletReady = ctx.audioWorklet
      .addModule(url)
      .then(() => true)
      .catch(() => false)
      .finally(() => URL.revokeObjectURL(url));
  }
  return workletReady;
}

function micError(err: unknown): MicError {
  const name = (err as { name?: string })?.name;
  if (name === 'NotAllowedError' || name === 'SecurityError') return 'denied';
  if (name === 'NotFoundError' || name === 'OverconstrainedError') return 'no_device';
  if (name === 'NotReadableError' || name === 'AbortError') return 'busy';
  return 'failed';
}

export class VoiceRecorder {
  private stopFn: (() => void) | null = null;

  get recording() {
    return this.stopFn !== null;
  }

  /** Stops the current recording early (its promise still resolves with what was heard). */
  stop() {
    this.stopFn?.();
  }

  async record(opts: RecordOptions): Promise<Recording> {
    const unsupported = micSupport();
    if (unsupported) throw unsupported;
    const ctx = audioContext();
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 },
      });
    } catch (err) {
      throw micError(err);
    }
    if (ctx.state === 'suspended') await ctx.resume().catch(() => undefined);

    const source = ctx.createMediaStreamSource(stream);
    const chunks: Float32Array[] = [];
    const sr = ctx.sampleRate;
    let total = 0;
    let noise = Infinity;
    let speechAt = -1;
    let lastLoud = 0;
    let loudRun = 0;

    return new Promise<Recording>((resolve, reject) => {
      let node: AudioNode | null = null;
      let done = false;
      const sink = ctx.createGain();
      sink.gain.value = 0; // keeps the graph running without playing the mic back
      sink.connect(ctx.destination);

      const finish = () => {
        if (done) return;
        done = true;
        this.stopFn = null;
        try {
          source.disconnect();
          node?.disconnect();
          sink.disconnect();
        } catch {
          // already disconnected
        }
        stream.getTracks().forEach((t) => t.stop());
        const samples = new Float32Array(total);
        let o = 0;
        for (const c of chunks) {
          samples.set(c, o);
          o += c.length;
        }
        resolve({ samples, sampleRate: sr, hadSpeech: speechAt >= 0 });
      };
      this.stopFn = finish;

      const onChunk = (c: Float32Array) => {
        if (done) return;
        chunks.push(c);
        total += c.length;
        const t = total / sr;
        let s = 0;
        for (let i = 0; i < c.length; i++) s += c[i] * c[i];
        const level = Math.sqrt(s / c.length);
        // Background noise: the quietest moment so far (the first 0.3 s set it).
        if (t < 0.3 || level < noise) noise = Math.min(noise, Math.max(level, 0.0005));
        const loud = level > Math.max(0.012, noise * 3.5);
        loudRun = loud ? loudRun + 1 : 0;
        if (loud) lastLoud = t;
        if (speechAt < 0 && loudRun >= 3) speechAt = t;
        opts.onLevel?.(Math.min(1, level * 8));
        if (t >= opts.maxSec) finish();
        else if (speechAt >= 0 && t - lastLoud >= opts.silenceSec) finish();
        else if (speechAt < 0 && t >= (opts.waitSec ?? 6)) finish();
      };

      loadWorklet(ctx)
        .then((ok) => {
          if (done) return;
          if (ok) {
            const w = new AudioWorkletNode(ctx, 'hsk-tap', { numberOfInputs: 1, numberOfOutputs: 1, channelCount: 1 });
            w.port.onmessage = (e) => onChunk(e.data as Float32Array);
            node = w;
          } else {
            const p = ctx.createScriptProcessor(2048, 1, 1);
            p.onaudioprocess = (e) => onChunk(new Float32Array(e.inputBuffer.getChannelData(0)));
            node = p;
          }
          source.connect(node);
          node.connect(sink);
        })
        .catch((err) => {
          stream.getTracks().forEach((t) => t.stop());
          this.stopFn = null;
          done = true;
          reject(micError(err));
        });
    });
  }
}

/** Plays raw samples; returns a function that stops playback. */
export function playSamples(samples: Float32Array, sampleRate: number, onEnd?: () => void): () => void {
  const ctx = audioContext();
  const buf = ctx.createBuffer(1, samples.length, sampleRate);
  buf.copyToChannel(samples as Float32Array<ArrayBuffer>, 0);
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.connect(ctx.destination);
  let ended = false;
  src.onended = () => {
    if (ended) return;
    ended = true;
    onEnd?.();
  };
  src.start();
  return () => {
    try {
      src.stop();
    } catch {
      // already stopped
    }
  };
}

const decoded = new Map<string, Promise<{ samples: Float32Array; sampleRate: number }>>();

/** Decodes a model recording (MP3) once, for its melody curve. */
export function decodeUrl(url: string): Promise<{ samples: Float32Array; sampleRate: number }> {
  let p = decoded.get(url);
  if (!p) {
    p = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.arrayBuffer();
      })
      .then((buf) => audioContext().decodeAudioData(buf))
      .then((ab) => ({ samples: ab.getChannelData(0).slice(0), sampleRate: ab.sampleRate }));
    p.catch(() => decoded.delete(url));
    decoded.set(url, p);
  }
  return p;
}

/** Keeps the spoken part (with a little margin): shorter uploads, cleaner playback. */
export function trimSilence(rec: Recording): Recording {
  const { samples, sampleRate } = rec;
  const win = Math.round(sampleRate * 0.02);
  const levels: number[] = [];
  for (let i = 0; i + win <= samples.length; i += win) {
    let s = 0;
    for (let j = i; j < i + win; j++) s += samples[j] * samples[j];
    levels.push(Math.sqrt(s / win));
  }
  if (!levels.length) return rec;
  const sorted = [...levels].sort((a, b) => a - b);
  const floor = sorted[Math.floor(sorted.length * 0.1)];
  const peak = sorted[Math.floor(sorted.length * 0.99)];
  const thr = Math.max(floor * 3, peak * 0.05, 0.004);
  const first = levels.findIndex((l) => l > thr);
  let last = levels.length - 1;
  while (last > 0 && levels[last] <= thr) last--;
  if (first < 0 || last <= first) return rec;
  const a = Math.max(0, (first - 10) * win);
  const b = Math.min(samples.length, (last + 15) * win);
  return { ...rec, samples: samples.slice(a, b) };
}

/** 16 kHz 16-bit mono WAV, base64 (what the transcription endpoint takes). */
export function toWavBase64(samples: Float32Array, sampleRate: number): string {
  const rate = 16000;
  const ratio = sampleRate / rate;
  const n = Math.floor(samples.length / ratio);
  const buf = new ArrayBuffer(44 + n * 2);
  const v = new DataView(buf);
  const str = (o: number, s: string) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
  str(0, 'RIFF');
  v.setUint32(4, 36 + n * 2, true);
  str(8, 'WAVE');
  str(12, 'fmt ');
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true);
  v.setUint16(22, 1, true);
  v.setUint32(24, rate, true);
  v.setUint32(28, rate * 2, true);
  v.setUint16(32, 2, true);
  v.setUint16(34, 16, true);
  str(36, 'data');
  v.setUint32(40, n * 2, true);
  const span = Math.max(1, Math.floor(ratio));
  for (let i = 0; i < n; i++) {
    // Averaging the samples of each step is a simple low-pass (no aliasing hiss).
    const j = Math.floor(i * ratio);
    let s = 0;
    for (let k = 0; k < span; k++) s += samples[j + k] || 0;
    s /= span;
    v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, s)) * 0x7fff, true);
  }
  const bytes = new Uint8Array(buf);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
