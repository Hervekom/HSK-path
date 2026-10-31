import { useCallback, useEffect, useRef, useState } from 'react';
import { audioEngine } from '../../utils/audio';
import { audioContext, micSupport, trimSilence, VoiceRecorder, type MicError, type RecordOptions, type Recording } from '../../utils/recorder';

export type RecorderState = 'idle' | 'starting' | 'recording';

/** Microphone for one practice card: start/stop, input level, and a friendly error code. */
export function useRecorder() {
  const rec = useRef<VoiceRecorder | null>(null);
  const [state, setState] = useState<RecorderState>('idle');
  const [level, setLevel] = useState(0);
  const [error, setError] = useState<MicError | 'silent' | null>(() => micSupport());

  useEffect(() => () => rec.current?.stop(), []);

  const start = useCallback(async (opts: Omit<RecordOptions, 'onLevel'>): Promise<Recording | null> => {
    if (state !== 'idle') return null;
    const unsupported = micSupport();
    if (unsupported) {
      setError(unsupported);
      return null;
    }
    audioEngine.stop();
    audioContext(); // created inside the tap, as mobile browsers require
    setError(null);
    setState('starting');
    rec.current = rec.current || new VoiceRecorder();
    try {
      let started = false;
      const result = await rec.current.record({
        ...opts,
        onLevel: (l) => {
          if (!started) {
            started = true;
            setState('recording');
          }
          setLevel(l);
        },
      });
      if (!result.hadSpeech) {
        setError('silent');
        return null;
      }
      return trimSilence(result);
    } catch (err) {
      setError((typeof err === 'string' ? err : 'failed') as MicError);
      return null;
    } finally {
      setState('idle');
      setLevel(0);
    }
  }, [state]);

  const stop = useCallback(() => rec.current?.stop(), []);

  return { state, level, error, setError, start, stop };
}
