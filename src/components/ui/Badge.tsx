import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'neutral' | 'success' | 'warning' | 'error' | 'hsk1' | 'hsk2' | 'hsk3' | 'accent' | 'luxury' | 'dark';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  id,
}) => {
  const sizeStyles = {
    xs: 'text-[10px] px-2 py-0.5 font-semibold tracking-wider uppercase',
    sm: 'text-[11px] px-2.5 py-0.5 font-semibold tracking-wide',
    md: 'text-xs px-3 py-1 font-semibold tracking-wide',
  };

  const variantStyles = {
    default: 'bg-[#F2ECE4] text-[#3D352F] border border-[#E0D6C8]',
    neutral: 'bg-stone-100 text-stone-700 border border-stone-200',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80',
    warning: 'bg-amber-50 text-amber-900 border border-amber-200/80',
    error: 'bg-rose-50 text-rose-800 border border-rose-200/80',
    accent: 'bg-rose-50 text-[#C52828] border border-rose-200/90 font-bold',
    luxury: 'bg-[#FAF5EB] text-[#8C6405] border border-[#E6D4B0] font-bold',
    dark: 'bg-[#1C1917] text-[#FAF8F5] border border-stone-800 font-semibold',
    hsk1: 'bg-emerald-50 text-emerald-800 border border-emerald-300/80 font-bold',
    hsk2: 'bg-sky-50 text-sky-800 border border-sky-300/80 font-bold',
    hsk3: 'bg-rose-50 text-[#C52828] border border-rose-300/80 font-bold',
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 rounded-full whitespace-nowrap leading-none transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};


