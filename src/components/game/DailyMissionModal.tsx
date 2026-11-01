import React, { useEffect, useState } from 'react';
import { Flame, BookOpen, ChatsCircle, GraduationCap, Lightning, X, ArrowRight, UsersThree, CheckCircle } from '@phosphor-icons/react';
import { tr } from '../../locales/tr';
import type { StreakView } from '../../game/engine';
import { XP, streakCta } from '../../game/engine';
import { social, CHEER_EMOJI, type SocialOverview } from '../../lib/social';
import type { AppState } from '../../types';

interface Props {
  streak: StreakView;
  name: string;
  signedIn: boolean;
  onClose: () => void;
  onGo: (view: AppState['currentView']) => void;
}

const TASKS: Array<{ view: AppState['currentView']; icon: React.ComponentType<any>; title: string; xp: string }> = [
  { view: 'vocabulary', icon: BookOpen, title: 'Review your flashcards', xp: `+${XP.srs} XP / ${'card'}` },
  { view: 'phrases', icon: ChatsCircle, title: 'Say 5 everyday phrases aloud', xp: `+${XP.pron} XP / ${'try'}` },
  { view: 'hsk-levels', icon: GraduationCap, title: 'Finish a lesson', xp: `+${XP.lesson} XP` },
  { view: 'practice-hub', icon: Lightning, title: 'Do a quick drill', xp: `+${XP.quiz} XP` },
];

function timeLeft(): { h: number; m: number } {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const mins = Math.max(0, Math.round((end.getTime() - now.getTime()) / 60000));
  return { h: Math.floor(mins / 60), m: mins % 60 };
}

/** Shown once a day when the learner arrives: today's goal, the streak at stake, friends' news. */
export const DailyMissionModal: React.FC<Props> = ({ streak, name, signedIn, onClose, onGo }) => {
  const [news, setNews] = useState<SocialOverview | null>(null);
  const left = timeLeft();
  const pct = Math.min(100, Math.round((streak.todayXp / streak.goal) * 100));
  const urgent = streak.atRisk && left.h < 6;

  useEffect(() => {
    if (!signedIn) return;
    social.overview().then(setNews).catch(() => undefined);
  }, [signedIn]);

  const close = () => {
    if (news?.cheers.length) social.markCheersSeen().catch(() => undefined);
    onClose();
  };

  const pendingChallenges = news ? news.challenges.filter((c) => c.status === 'pending' && c.creator === c.other).length : 0;
  const invites = news ? news.incoming.length + pendingChallenges : 0;
  const first = (name || '').split(' ')[0];

  let headline: string;
  let sub: string;
  if (streak.todayDone) {
    headline = tr('Daily goal reached!');
    sub = tr('Your streak is safe for today. Come back tomorrow to keep it going.');
  } else if (streak.atRisk) {
    headline = `${tr('Your streak is in danger!')}`;
    sub = `${tr('Reach today’s goal to save your')} ${streak.count} ${tr('day streak')}. ${tr('Time left')}: ${left.h}\u00a0h\u00a0${left.m}\u00a0min.`;
  } else if (streak.lost) {
    headline = tr('Your streak stopped');
    sub = `${tr('Your record is')} ${streak.best} ${tr('days')}. ${tr('Start a new streak today!')}`;
  } else {
    headline = tr('Start your streak today');
    sub = tr('Reach your daily goal every day: your streak grows and unlocks badges.');
  }

  return (
    <div className="fixed inset-0 z-[70] bg-stone-950/60 flex items-end sm:items-center justify-center sm:p-4" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={tr("Today's goal")}
        className="w-full sm:max-w-md max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-xl animate-in slide-in-from-bottom-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative px-5 pt-6 pb-5 text-white ${streak.todayDone ? 'bg-emerald-700' : urgent || streak.atRisk ? 'bg-[#C52828]' : 'bg-[#1C1917]'}`}>
          <button type="button" onClick={close} className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/15 grid place-items-center cursor-pointer" aria-label={tr('Close')}>
            <X className="w-4 h-4" />
          </button>
          <p className="text-xs font-bold uppercase tracking-wider opacity-80">
            {first ? `${tr('Hello')} ${first} · ` : ''}
            {tr("Today's goal")}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span className={`w-16 h-16 rounded-2xl bg-white/15 grid place-items-center ${streak.atRisk ? 'animate-pulse' : ''}`}>
              {streak.todayDone ? <CheckCircle className="w-9 h-9" weight="fill" /> : <Flame className="w-9 h-9" weight="fill" />}
            </span>
            <div className="min-w-0">
              <div className="text-3xl font-black leading-none">
                {streak.count} <span className="text-base font-bold">{tr(streak.count === 1 ? 'day' : 'days')}</span>
              </div>
              <div className="text-sm font-bold mt-1">{headline}</div>
            </div>
          </div>
          <p className="text-sm mt-3 opacity-90 leading-relaxed">{sub}</p>
          <div className="mt-4">
            <div className="flex justify-between text-xs font-bold opacity-90">
              <span>{tr('Today')}</span>
              <span className="tabular-nums">
                {streak.todayXp} / {streak.goal} XP
              </span>
            </div>
            <div className="h-2.5 mt-1 rounded-full bg-white/20 overflow-hidden">
              <div className="h-full rounded-full bg-white transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
          {!streak.todayDone && (
            <button
              type="button"
              onClick={() => onGo(TASKS[0].view)}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white text-stone-900 text-base font-extrabold shadow-md cursor-pointer hover:bg-stone-100 active:bg-stone-100"
            >
              <Flame className="w-5 h-5 text-[#C52828]" weight="fill" /> {tr(streakCta(streak))}
            </button>
          )}
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {news && news.cheers.length > 0 && (
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
              {news.cheers.slice(0, 3).map((c) => (
                <p key={c.id} className="text-sm text-amber-900">
                  <span className="text-lg mr-1">{CHEER_EMOJI[c.kind]}</span>
                  <b>{c.name}</b> {tr('is cheering you on!')}
                </p>
              ))}
            </div>
          )}

          {!streak.todayDone && (
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">{tr('Or choose an activity')}</p>
              {TASKS.map((t) => {
                const Icon = t.icon;
                return (
                  <button
                    key={t.view}
                    type="button"
                    onClick={() => onGo(t.view)}
                    className="w-full flex items-center gap-3 p-3 rounded-2xl border border-[#E8E2D8] hover:border-stone-900 text-left cursor-pointer"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EFE8DE] grid place-items-center text-[#C52828] shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-bold text-stone-900">{tr(t.title)}</span>
                      <span className="block text-xs text-stone-500">{t.xp.replace('card', tr('card')).replace('try', tr('try'))}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </button>
                );
              })}
            </div>
          )}

          {signedIn && (
            <button
              type="button"
              onClick={() => onGo('friends')}
              className="w-full flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE] text-left cursor-pointer"
            >
              <UsersThree className="w-5 h-5 text-stone-700" />
              <span className="flex-1 text-sm font-semibold text-stone-800">
                {invites > 0 ? `${invites} ${tr('invitation(s) from your friends')}` : tr('See how your friends are doing')}
              </span>
              <ArrowRight className="w-4 h-4 text-stone-400" />
            </button>
          )}

          <div className="flex gap-2">
            <button type="button" onClick={close} className="flex-1 px-4 py-3 rounded-2xl border border-[#E2D9CC] text-stone-700 font-semibold cursor-pointer">
              {streak.todayDone ? tr('Close') : tr('Later')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
