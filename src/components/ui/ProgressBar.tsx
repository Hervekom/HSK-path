import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showPercent?: boolean;
  color?: 'primary' | 'emerald' | 'blue' | 'amber' | 'rose' | 'indigo' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercent = false,
  color = 'primary',
  size = 'md',
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const colorStyles = {
    primary: 'bg-[#C52828] shadow-xs',
    emerald: 'bg-emerald-600 shadow-xs',
    blue: 'bg-sky-600 shadow-xs',
    amber: 'bg-amber-600 shadow-xs',
    rose: 'bg-[#C52828] shadow-xs',
    indigo: 'bg-indigo-600 shadow-xs',
    purple: 'bg-purple-600 shadow-xs',
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center text-xs font-semibold text-stone-600 mb-1.5">
          {label && <span>{label}</span>}
          {showPercent && <span className="text-stone-900 font-bold">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full bg-[#EDE5DB] rounded-full overflow-hidden border border-[#DDD3C6] ${sizeStyles[size]}`}>
        <div
          className={`h-full rounded-full transition-all duration-300 ${colorStyles[color]}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

