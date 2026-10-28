// Audio synthesis and playback helper for Chinese pronunciation and test audio.
// Texts recorded in advance (src/data/audioClips.json, scripts/generate-clips.py) are played from
// their MP3 file; anything else uses the browser's Chinese voice, which many devices lack.
import CLIPS from '../data/audioClips.json';

// Recordings known so far. Large sets (the lesson stories) are added when they are loaded.
// A list of files (a whole scene) is played in order.
const RECORDED: Record<string, string | string[]> = { ...(CLIPS as Record<string, string>) };

class ChineseAudioEngine {
  private isSpeaking = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private audioCtx: AudioContext | null = null;
  private player: HTMLAudioElement | null = null;
  /** End callback of what is playing now; called once, also when it is interrupted. */
  private pendingEnd: (() => void) | null = null;

  private finish(): void {
    const cb = this.pendingEnd;
    this.pendingEnd = null;
    this.isSpeaking = false;
    cb?.();
  }

  /** Adds recorded files ({ exact text: file }) loaded later, e.g. a lesson's story audio. */
  public addRecordings(map: Record<string, string | string[]>): void {
    Object.assign(RECORDED, map);
  }

  /** True when this text has a recorded file. */
  public hasRecording(text: string): boolean {
    return Boolean(RECORDED[text.trim()]);
  }

  public speak(
    text: string, 
    rate: number = 1.0, 
    onEnd?: () => void, 
    onError?: () => void
  ): void {
    if (typeof window === 'undefined') return;

    // Stop any ongoing speech
    this.stop();

    const rec = RECORDED[text.trim()];
    this.pendingEnd = onEnd || null;
    if (rec) {
      this.isSpeaking = true;
      this.playFiles(Array.isArray(rec) ? rec : [rec], 0, text, rate);
      return;
    }
    this.speakWithBrowser(text, rate);
  }

  private playFiles(files: string[], index: number, text: string, rate: number): void {
    if (!this.player) this.player = new Audio();
    const player = this.player;
    player.src = files[index];
    player.playbackRate = rate;
    (player as any).preservesPitch = true;
    player.onended = () => {
      if (index + 1 < files.length) this.playFiles(files, index + 1, text, rate);
      else this.finish();
    };
    player.onerror = () => {
      player.onerror = null;
      this.speakWithBrowser(text, rate);
    };
    player.play().catch((err) => {
      if (err?.name === 'AbortError') return; // replaced by a newer play
      if (err?.name === 'NotAllowedError') this.finish();
      else this.speakWithBrowser(text, rate);
    });
  }

  private speakWithBrowser(text: string, rate: number): void {
    if ('speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = rate; // 0.8 to 1.0
        utterance.pitch = 1.0;

        // Try to pick a native Chinese voice if available
        const voices = window.speechSynthesis.getVoices();
        const zhVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('cmn') || v.lang.includes('Chinese'));
        if (zhVoice) {
          utterance.voice = zhVoice;
        }

        utterance.onstart = () => {
          this.isSpeaking = true;
        };

        utterance.onend = () => {
          if (this.currentUtterance !== utterance) return;
          this.currentUtterance = null;
          this.finish();
        };

        utterance.onerror = (ev: SpeechSynthesisErrorEvent) => {
          if (this.currentUtterance !== utterance) return;
          this.currentUtterance = null;
          // Being stopped or replaced is not an error: no beep.
          if (ev?.error !== 'interrupted' && ev?.error !== 'canceled') this.playChime(440, 0.2);
          this.finish();
        };

        this.currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);
        return;
      } catch (e) {
        console.warn('Speech synthesis error, falling back to audio tone', e);
      }
    }

    // Fallback chime if SpeechSynthesis is blocked in sandboxed iframe
    this.playChime(520, 0.3);
    setTimeout(() => this.finish(), 1200);
  }

  public stop(): void {
    if (this.player) {
      this.player.pause();
      this.player.onended = this.player.onerror = null;
    }
    this.currentUtterance = null;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
    // Let whoever started the previous audio know it ended (e.g. reset its button).
    this.finish();
  }

  public playChime(freq: number = 587.33, duration: number = 0.25): void {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // AudioContext not allowed or disabled
    }
  }

  public playFeedback(correct: boolean): void {
    if (correct) {
      // Happy two-tone chord
      this.playChime(523.25, 0.15); // C5
      setTimeout(() => this.playChime(659.25, 0.25), 100); // E5
    } else {
      // Soft low tone
      this.playChime(261.63, 0.3); // C4
    }
  }
}

export const audioEngine = new ChineseAudioEngine();
