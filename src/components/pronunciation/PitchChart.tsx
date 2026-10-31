import React from 'react';
import type { PitchContour } from '../../utils/pitch';

export interface PitchSeries {
  contour: PitchContour;
  color: string;
  dashed?: boolean;
  label?: string;
}

interface PitchChartProps {
  series: PitchSeries[];
  /** Semitones shown above and below the centre line. */
  span?: number;
  height?: number;
  /** Faint lines for the five Chao pitch levels. */
  levels?: boolean;
  className?: string;
  ariaLabel?: string;
}

const W = 300;

function path(c: PitchContour, h: number, span: number, pad: number): string {
  const n = c.st.length;
  if (!n) return '';
  let d = '';
  let pen = false;
  c.st.forEach((v, i) => {
    if (v === null) {
      pen = false;
      return;
    }
    const x = n > 1 ? pad + (i / (n - 1)) * (W - 2 * pad) : W / 2;
    const y = h / 2 - (Math.max(-span, Math.min(span, v)) / span) * (h / 2 - pad);
    d += `${pen ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)} `;
    pen = true;
  });
  return d;
}

/** Melody curves (semitones over time), each stretched to the full width. */
export const PitchChart: React.FC<PitchChartProps> = ({ series, span = 7, height = 120, levels = true, className = '', ariaLabel }) => {
  const pad = 8;
  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      preserveAspectRatio="none"
      className={`w-full block ${className}`}
      style={{ height }}
      role="img"
      aria-label={ariaLabel}
    >
      {levels &&
        [-1, -0.5, 0, 0.5, 1].map((k) => (
          <line
            key={k}
            x1={0}
            x2={W}
            y1={height / 2 - k * (height / 2 - pad)}
            y2={height / 2 - k * (height / 2 - pad)}
            stroke="currentColor"
            className="text-stone-200"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      {series.map((s, i) => (
        <path
          key={i}
          d={path(s.contour, height, span, pad)}
          fill="none"
          stroke={s.color}
          strokeWidth={s.dashed ? 2.5 : 3.5}
          strokeDasharray={s.dashed ? '6 5' : undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
};

/** Small textbook tone shape (Chao numbers), for buttons and the tone chart. */
export const ToneShape: React.FC<{ tone: number; className?: string; color?: string }> = ({ tone, className = 'w-8 h-6', color = 'currentColor' }) => {
  const shapes: Record<number, string> = {
    1: 'M4 5 L28 5',
    2: 'M4 13 L28 4',
    3: 'M4 15 Q12 25 18 21 T28 7',
    4: 'M4 4 L28 20',
    0: 'M14 14 L18 14',
  };
  return (
    <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
      <path d={shapes[tone] ?? shapes[0]} fill="none" stroke={color} strokeWidth={tone === 0 ? 4 : 2.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
