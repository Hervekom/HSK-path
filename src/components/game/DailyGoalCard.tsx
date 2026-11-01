import React from 'react';
import { Flame, CheckCircle, Trophy, UsersThree, ArrowRight } from '@phosphor-icons/react';
import { tr } from '../../locales/tr';
import { dailyGoalXp, emptyGame, streakCta, streakView } from '../../game/engine';
import { BADGES } from '../../game/badges';
import type { AppState, UserProfile } from '../../types';

/** Today's goal and the streak, at the top of the dashboard. */
export const DailyGoalCard: React.FC<{ user: UserProfile; onNavigate: (v: AppState['currentView']) => void }> = ({ user, onNavigate }) => {
  const g = user.game || emptyGame();
  const s = streakView(g, dailyGoalXp(user.dailyGoalMinutes));
  const pct = Math.min(100, Math.round((s.todayXp / s.goal) * 100));
  const now = new Date();
  const hoursLeft = 23 - now.getHours();
  const tone = s.todayDone ? 'bg-emerald-700' : s.atRisk ? 'bg-[#C52828]' : 'bg-[#1C1917]';
  const earned = BADGES.filter((b) => g.badges[b.id]).length;
  return (
    <div className={`p-4 sm:p-5 rounded-3xl text-white ${tone}`}>
      <div className="flex items-center gap-4">
        <span className={`w-14 h-14 rounded-2xl bg-white/15 grid place-items-center shrink-0 ${s.atRisk ? 'animate-pulse' : ''}`}>
          {s.todayDone ? <CheckCircle className="w-8 h-8" weight="fill" /> : <Flame className="w-8 h-8" weight="fill" />}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black">{s.count}</span>
            <span className="text-sm font-bold">{tr(s.count === 1 ? 'day' : 'days')} · {tr('Streak')}</span>
          </div>
          <p className="text-xs sm:text-sm opacity-90">
            {s.todayDone
              ? tr('Daily goal reached! Your streak is safe.')
              : s.atRisk
                ? `${tr('Your streak is in danger!')} ${tr('Time left')}: ${hoursLeft + 1}\u00a0h`
                : s.lost
                  ? tr('Your streak stopped: start a new one today!')
                  : tr('Reach your daily goal to start a streak.')}
          </p>
        </div>
        {!s.todayDone && (
          <button
            type="button"
            onClick={() => onNavigate('vocabulary')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-stone-900 text-sm font-extrabold shadow-md cursor-pointer hover:bg-stone-100 shrink-0"
          >
            {tr(streakCta(s))} <ArrowRight className="w-4 h-4" weight="bold" />
          </button>
        )}
      </div>
      {!s.todayDone && (
        <button
          type="button"
          onClick={() => onNavigate('vocabulary')}
          className="sm:hidden mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white text-stone-900 text-base font-extrabold shadow-md cursor-pointer active:bg-stone-100"
        >
          <Flame className="w-5 h-5 text-[#C52828]" weight="fill" /> {tr(streakCta(s))}
        </button>
      )}
      <div className="mt-3">
        <div className="flex justify-between text-xs font-bold opacity-90">
          <span>{tr("Today's goal")}</span>
          <span className="tabular-nums">
            {s.todayXp} / {s.goal} XP
          </span>
        </div>
        <div className="h-2.5 mt-1 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <button type="button" onClick={() => onNavigate('achievements')} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 text-xs font-bold cursor-pointer">
          <Trophy className="w-3.5 h-3.5" weight="fill" /> {earned} {tr('badges')}
        </button>
        <button type="button" onClick={() => onNavigate('friends')} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 text-xs font-bold cursor-pointer">
          <UsersThree className="w-3.5 h-3.5" weight="fill" /> {tr('Friends')}
        </button>
      </div>
    </div>
  );
};
