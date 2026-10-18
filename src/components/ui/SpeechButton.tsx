import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from '../icons';
import { audioEngine } from '../../utils/audio';

interface SpeechButtonProps {
  text: string;
  rate?: number; // 0.8 or 1.0
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  className?: string;
  allowSpeedToggle?: boolean;
}

export const SpeechButton: React.FC<SpeechButtonProps> = ({
  text,
  rate = 1.0,
  size = 'md',
  showLabel = false,
  label,
  className = '',
  allowSpeedToggle = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRate, setCurrentRate] = useState(rate);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    audioEngine.speak(
      text,
      currentRate,
      () => setIsPlaying(false),
      () => setIsPlaying(false)
    );
  };

  const toggleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextRate = currentRate === 1.0 ? 0.75 : 1.0;
    setCurrentRate(nextRate);
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs rounded-lg',
    md: 'p-2 text-sm rounded-xl',
    lg: 'p-3 text-base rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={handlePlay}
        title={`Listen to pronunciation (${currentRate}x)`}
        aria-label={`Listen to ${text}`}
        className={`inline-flex items-center justify-center gap-1.5 font-medium transition-all cursor-pointer border ${
          isPlaying
            ? 'bg-rose-50 border-[#C52828] text-[#C52828] shadow-sm ring-2 ring-rose-300/40'
            : 'bg-white border-[#E2D9CC] text-stone-700 hover:bg-[#FAF8F5] hover:text-[#C52828] hover:border-[#D8CDC0] shadow-xs'
        } ${sizeClasses[size]} ${className}`}
      >
        <Volume2 className={`${iconSizes[size]} ${isPlaying ? 'animate-pulse text-[#C52828]' : 'text-stone-500'}`} />
        {showLabel && (
          <span className="text-xs font-semibold">
            {label || (isPlaying ? 'Playing...' : 'Audio')}
          </span>
        )}
      </button>

      {allowSpeedToggle && (
        <button
          type="button"
          onClick={toggleSpeed}
          title="Toggle playback speed"
          className="text-[11px] font-semibold px-2 py-1 rounded-lg border border-[#E2D9CC] bg-white hover:bg-[#FAF8F5] text-stone-600 cursor-pointer shadow-2xs"
        >
          {currentRate === 1.0 ? '1.0x' : '0.8x'}
        </button>
      )}
    </div>
  );
};

