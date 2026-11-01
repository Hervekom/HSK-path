// Recorded models for the everyday phrases and the speaking test (scripts/generate-speak-audio.py),
// loaded on demand and added to the audio engine so every speaker button uses them too.
import { audioEngine } from './audio';

let loading: Promise<Record<string, string>> | null = null;

export function loadSpeakAudio(): Promise<Record<string, string>> {
  if (!loading) {
    loading = import('../data/speakAudio.json')
      .then((m) => {
        const map = m.default as Record<string, string>;
        audioEngine.addRecordings(map, false);
        return map;
      })
      .catch(() => {
        loading = null;
        return {};
      });
  }
  return loading;
}
