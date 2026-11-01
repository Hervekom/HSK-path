import React from 'react';
import { Flame, Star, Trophy } from '@phosphor-icons/react';
import { tr } from '../locales/tr';
import { BADGES } from '../game/badges';
import { dayKey, levelOf, shiftDay, streakCta, streakView, type GameState } from '../game/engine';
import { BadgeIcon } from '../components/game/BadgeIcon';
import type { AppState } from '../types';

interface Props {
  game: GameState;
  goal: number;
  words: number;
  phrases: number;
  onNavigate: (view: AppState['currentView']) => void;
}

/** Streak calendar, level and badges. */
export const AchievementsView: React.FC<Props> = ({ game, goal, words, phrases, onNavigate }) => {
  const s = streakView(game, goal);
  const lvl = levelOf(game.total);
  const today = dayKey();
  // 5 weeks, Monday first
  const start = (() => {
    const d = new Date();
    const dow = (d.getDay() + 6) % 7;
    return shiftDay(today, -(dow + 28));
  })();
  const days = Array.from({ length: 35 }, (_, i) => shiftDay(start, i));
  const ctx = { words, phrases, friends: game.stats.friends || 0 };
  const earned = BADGES.filter((b) => game.badges[b.id]);
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{tr('Badges & streak')}</h1>
        <p className="text-sm sm:text-base text-stone-500 mt-1">{tr('Reach your daily goal every day to grow your streak and unlock badges.')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className={`p-5 rounded-3xl text-white ${s.todayDone ? 'bg-emerald-700' : s.atRisk ? 'bg-[#C52828]' : 'bg-[#1C1917]'}`}>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-80">
            <Flame className="w-4 h-4" weight="fill" /> {tr('Streak')}
          </div>
          <div className="text-4xl font-black mt-1">
            {s.count} <span className="text-base font-bold">{tr(s.count === 1 ? 'day' : 'days')}</span>
          </div>
          <p className="text-xs opacity-80 mt-1">
            {tr('Record')}: {s.best} · {s.todayDone ? tr('Today: done') : s.atRisk ? tr('Today: still to do') : tr('Start today')}
          </p>
          <div className="h-2 mt-3 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: `${Math.min(100, (s.todayXp / s.goal) * 100)}%` }} />
          </div>
          <p className="text-xs mt-1 tabular-nums opacity-90">
            {s.todayXp} / {s.goal} XP {tr('today')}
          </p>
          {!s.todayDone && (
            <button type="button" onClick={() => onNavigate('vocabulary')} className="mt-3 w-full px-4 py-3 rounded-2xl bg-white text-stone-900 text-sm font-extrabold cursor-pointer hover:bg-stone-100">
              {tr(streakCta(s))}
            </button>
          )}
        </div>
        <div className="p-5 rounded-3xl bg-white border border-[#E4DCCE]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
            <Star className="w-4 h-4 text-amber-500" weight="fill" /> {tr('Level')}
          </div>
          <div className="text-4xl font-black text-stone-950 mt-1">{lvl.level}</div>
          <div className="h-2 mt-3 rounded-full bg-stone-100 overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${(lvl.into / lvl.need) * 100}%` }} />
          </div>
          <p className="text-xs text-stone-500 mt-1 tabular-nums">
            {game.total.toLocaleString()} XP · {lvl.need - lvl.into} XP {tr('to the next level')}
          </p>
        </div>
        <div className="p-5 rounded-3xl bg-white border border-[#E4DCCE]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
            <Trophy className="w-4 h-4 text-[#C52828]" weight="fill" /> {tr('Badges')}
          </div>
          <div className="text-4xl font-black text-stone-950 mt-1">
            {earned.length} <span className="text-base font-bold text-stone-400">/ {BADGES.length}</span>
          </div>
          <button type="button" onClick={() => onNavigate('friends')} className="mt-3 text-sm font-bold text-[#C52828] cursor-pointer">
            {tr('Compare with your friends')} →
          </button>
        </div>
      </div>

      <section className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E4DCCE] space-y-3">
        <h2 className="text-base font-bold text-stone-900">{tr('Last 5 weeks')}</h2>
        <div className="grid grid-cols-7 gap-1.5 max-w-md">
          {weekdays.map((w) => (
            <span key={w} className="text-[10px] font-bold text-stone-400 text-center">
              {tr(w)}
            </span>
          ))}
          {days.map((d) => {
            const xp = game.xp[d] || 0;
            const future = d > today;
            const done = xp >= goal || (game.streak.last === d);
            const cls = future ? 'bg-transparent border-dashed' : done ? 'bg-[#C52828] border-[#C52828] text-white' : xp > 0 ? 'bg-rose-100 border-rose-200 text-rose-800' : 'bg-stone-50 border-stone-200 text-stone-400';
            return (
              <span
                key={d}
                title={`${d} · ${xp} XP`}
                className={`aspect-square rounded-lg border grid place-items-center text-[10px] font-bold ${cls} ${d === today ? 'ring-2 ring-stone-900 ring-offset-1' : ''}`}
              >
                {Number(d.slice(8))}
              </span>
            );
          })}
        </div>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-stone-500">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#C52828]" /> {tr('goal reached')}</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-rose-100 border border-rose-200" /> {tr('some practice')}</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-stone-50 border border-stone-200" /> {tr('no practice')}</span>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-stone-900">{tr('All badges')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {BADGES.map((b) => {
            const got = game.badges[b.id];
            const [v, t] = b.progress(game, ctx);
            return (
              <div key={b.id} className={`p-4 rounded-2xl border text-center space-y-2 ${got ? 'bg-white border-[#E4DCCE]' : 'bg-[#FAF8F5] border-[#EFE8DE]'}`}>
                <BadgeIcon icon={b.icon} tier={b.tier} earned={Boolean(got)} />
                <div className={`text-sm font-bold ${got ? 'text-stone-900' : 'text-stone-500'}`}>{tr(b.title)}</div>
                <p className="text-[11px] text-stone-500 leading-snug">{tr(b.desc)}</p>
                {got ? (
                  <p className="text-[10px] font-semibold text-emerald-700">✓ {got}</p>
                ) : (
                  <div>
                    <div className="h-1.5 rounded-full bg-stone-200 overflow-hidden">
                      <div className="h-full bg-stone-500" style={{ width: `${(v / t) * 100}%` }} />
                    </div>
                    <p className="text-[10px] text-stone-400 mt-0.5 tabular-nums">
                      {v} / {t}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
