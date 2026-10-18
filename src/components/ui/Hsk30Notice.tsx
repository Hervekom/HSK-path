import React from 'react';
import { Info } from '../icons';
import { tr } from '../../locales/tr';

interface Hsk30NoticeProps {
  variant?: 'levels' | 'mock';
  className?: string;
}

/** Explains that HSK Path follows the new HSK 3.0 syllabus (and, for mock exams, what is not updated yet). */
export const Hsk30Notice: React.FC<Hsk30NoticeProps> = ({ variant = 'levels', className = '' }) => (
  <div className={`p-4 sm:p-5 rounded-2xl bg-white border border-[#E4DCCE] flex gap-3 ${className}`}>
    <span className="w-9 h-9 rounded-xl bg-[#1C1917] text-white flex items-center justify-center shrink-0">
      <Info className="w-4 h-4" />
    </span>
    <div className="space-y-1 min-w-0">
      <div className="text-sm font-bold text-stone-900">
        {variant === 'mock' ? tr("About the mock exams") : tr("Updated for the new HSK 3.0")}
      </div>
      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
        {variant === 'mock'
          ? tr("These mock exams still follow the current HSK format. Versions in the new HSK 3.0 format (including the speaking part from HSK 3) are being prepared.")
          : tr("HSK Path follows the official HSK 3.0 syllabus published in November 2025: 300 words for HSK 1, 500 for HSK 2 and 1,000 for HSK 3 (cumulative). The HSK 3.0 exam also includes a speaking test from HSK 3.")}
      </p>
    </div>
  </div>
);
