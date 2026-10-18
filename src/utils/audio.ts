// Audio synthesis and playback helper for Chinese pronunciation and test audio

class ChineseAudioEngine {
  private isSpeaking = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private audioCtx: AudioContext | null = null;

  public speak(
    text: string, 
    rate: number = 1.0, 
    onEnd?: () => void, 
    onError?: () => void
  ): void {
    if (typeof window === 'undefined') return;

    // Stop any ongoing speech
    this.stop();

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
          this.isSpeaking = false;
          this.currentUtterance = null;
          if (onEnd) onEnd();
        };

        utterance.onerror = () => {
          this.isSpeaking = false;
          this.currentUtterance = null;
          // Fallback tone
          this.playChime(440, 0.2);
          if (onError) onError();
          else if (onEnd) onEnd();
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
    setTimeout(() => {
      if (onEnd) onEnd();
    }, 1200);
  }

  public stop(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
    this.isSpeaking = false;
    this.currentUtterance = null;
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
