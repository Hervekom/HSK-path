import React from 'react';
import {
  Flame, Crown, BookOpen, GraduationCap, Brain, ChatsCircle, Microphone, Waveform, Medal, ChatCircleText,
  Student, Lightning, Exam, Trophy, Star, UsersThree, HandsClapping, Sword, Lock, BookOpenText,
} from '@phosphor-icons/react';
import type { BadgeTier } from '../../game/badges';

const ICONS: Record<string, React.ComponentType<any>> = {
  Flame, Crown, BookOpen, GraduationCap, Brain, ChatsCircle, Microphone, Waveform, Medal, ChatCircleText,
  Student, Lightning, Exam, Trophy, Star, UsersThree, HandsClapping, Sword, BookOpenText,
};

const TIER: Record<BadgeTier, { bg: string; ring: string; fg: string }> = {
  bronze: { bg: 'bg-[#F6E7D8]', ring: 'ring-[#D9A877]', fg: 'text-[#8A4B16]' },
  silver: { bg: 'bg-[#EEF1F4]', ring: 'ring-[#B8C2CC]', fg: 'text-[#475569]' },
  gold: { bg: 'bg-[#FDF3D0]', ring: 'ring-[#E5B83A]', fg: 'text-[#8A6100]' },
};

/** Round badge medal; greyed with a lock when not earned yet. */
export const BadgeIcon: React.FC<{ icon: string; tier: BadgeTier; earned: boolean; size?: 'sm' | 'md' | 'lg' }> = ({ icon, tier, earned, size = 'md' }) => {
  const Icon = ICONS[icon] || Medal;
  const dim = size === 'lg' ? 'w-20 h-20' : size === 'sm' ? 'w-10 h-10' : 'w-14 h-14';
  const ic = size === 'lg' ? 'w-10 h-10' : size === 'sm' ? 'w-5 h-5' : 'w-7 h-7';
  const t = TIER[tier];
  return (
    <span className={`relative inline-grid place-items-center rounded-full ring-4 ${dim} ${earned ? `${t.bg} ${t.ring} ${t.fg}` : 'bg-stone-100 ring-stone-200 text-stone-300'}`}>
      <Icon className={ic} weight={earned ? 'fill' : 'regular'} />
      {!earned && (
        <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-stone-200 grid place-items-center text-stone-400">
          <Lock className="w-3 h-3" weight="bold" />
        </span>
      )}
    </span>
  );
};
