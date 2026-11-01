import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Copy, ShareNetwork, UserPlus, Flame, CheckCircle, Sword, Trophy, X, Check, UsersThree, DotsThree } from '@phosphor-icons/react';
import { tr } from '../locales/tr';
import { social, CHEER_EMOJI, type SocialOverview, type FriendCard, type Challenge, type Cheer, type AddFriendStatus } from '../lib/social';
import { dailyGoalXp, dayKey, earn, setStat, shiftDay, xpBetween, type GameState } from '../game/engine';
import { BADGES } from '../game/badges';
import { BadgeIcon } from '../components/game/BadgeIcon';
import { useToast } from '../components/ui/Toast';
import type { AppState } from '../types';

interface Props {
  signedIn: boolean;
  game: GameState;
  goal: number;
  myName: string;
  onNavigate: (view: AppState['currentView']) => void;
}

const SITE = 'https://hsk-path-eosin.vercel.app';

/** A friend's streak as seen from today (0 when a day was missed). */
function friendStreak(f: FriendCard, today: string): { count: number; todayDone: boolean } {
  const last = f.streak?.last || null;
  const alive = last === today || last === shiftDay(today, -1);
  const goal = dailyGoalXp(f.goal_minutes);
  return { count: alive ? f.streak?.count || 0 : 0, todayDone: last === today || (f.xp?.[today] || 0) >= goal };
}

const ADD_MSG: Record<AddFriendStatus, string> = {
  requested: 'Request sent! Your friend will see it next time.',
  accepted: 'You are now friends!',
  already: 'You are already friends.',
  pending: 'Your request is waiting for an answer.',
  not_found: 'No learner has this code. Check it and try again.',
  self: 'This is your own code.',
  too_many: 'You have reached the maximum number of friends.',
};

export const FriendsView: React.FC<Props> = ({ signedIn, game, goal, myName, onNavigate }) => {
  const { addToast } = useToast();
  const [data, setData] = useState<SocialOverview | null>(null);
  const [error, setError] = useState(false);
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const today = dayKey();
  const weekFrom = shiftDay(today, -6);

  const load = useCallback(async () => {
    try {
      await social.me();
      const o = await social.overview();
      setData(o);
      setError(false);
      setStat('friends', o.friends.length);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    if (signedIn) void load();
  }, [signedIn, load]);

  // A finished challenge that was won earns its reward once.
  useEffect(() => {
    if (!data) return;
    for (const c of data.challenges) {
      if (c.status !== 'active' || !c.end_date || c.end_date >= today) continue;
      const other = data.friends.find((f) => f.user_id === c.other);
      if (!other) continue;
      const mine = xpBetween(game.xp, c.start_date!, c.end_date);
      const theirs = xpBetween(other.xp, c.start_date!, c.end_date);
      const key = `challenge:${c.id}`;
      if (mine > theirs && !game.stats[`won_${c.id}`]) {
        earn('challenge', { key, stats: { challengeWon: 1, [`won_${c.id}`]: 1 } });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!signedIn) {
    return (
      <div className="max-w-xl mx-auto py-10 text-center space-y-4">
        <UsersThree className="w-12 h-12 mx-auto text-stone-400" />
        <h1 className="text-2xl font-extrabold text-stone-950">{tr('Friends & challenges')}</h1>
        <p className="text-sm text-stone-600">{tr('Create a free account to add friends, compare your streaks and challenge each other.')}</p>
        <button type="button" onClick={() => onNavigate('signup')} className="px-5 py-2.5 rounded-xl bg-[#C52828] text-white font-bold cursor-pointer">
          {tr('Create my account')}
        </button>
      </div>
    );
  }

  const run = async (fn: () => Promise<unknown>, ok?: string) => {
    setBusy(true);
    try {
      await fn();
      if (ok) addToast(tr(ok), 'success');
      await load();
    } catch {
      addToast(tr('Something went wrong. Please try again.'), 'warning');
    } finally {
      setBusy(false);
    }
  };

  const add = async () => {
    const c = code.trim().toUpperCase();
    if (!c) return;
    setBusy(true);
    try {
      const r = await social.addFriend(c.startsWith('HSK-') ? c : `HSK-${c}`);
      addToast(tr(ADD_MSG[r.status]), r.status === 'requested' || r.status === 'accepted' ? 'success' : 'info');
      if (r.status === 'requested' || r.status === 'accepted') setCode('');
      await load();
    } catch {
      addToast(tr('Something went wrong. Please try again.'), 'warning');
    } finally {
      setBusy(false);
    }
  };

  const shareText = data?.code ? `${tr('Learn Chinese with me on HSK Path! My friend code:')} ${data.code} — ${SITE}` : '';
  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: 'HSK Path', text: shareText });
      else {
        await navigator.clipboard.writeText(shareText);
        addToast(tr('Copied!'), 'success');
      }
    } catch {
      // share cancelled
    }
  };

  const cheer = (f: FriendCard, kind: Cheer['kind']) =>
    run(async () => {
      const r = await social.cheer(f.user_id, kind);
      if (!r.ok) throw new Error(r.reason);
      earn('cheer');
    }, 'Encouragement sent!');

  const challenge = (f: FriendCard) =>
    run(async () => {
      const r = await social.challenge(f.user_id, 7);
      if (!r.ok) {
        addToast(tr(r.reason === 'exists' ? 'You already have a challenge with this friend.' : 'Something went wrong. Please try again.'), 'info');
        throw new Error('handled');
      }
    }, 'Challenge sent!');

  const myWeek = xpBetween(game.xp, weekFrom, today);
  const board = [
    { id: 'me', name: myName || tr('Me'), week: myWeek, streak: game.streak.last === today || game.streak.last === shiftDay(today, -1) ? game.streak.count : 0, todayDone: (game.xp[today] || 0) >= goal, me: true, card: null as FriendCard | null },
    ...(data?.friends || []).map((f) => {
      const s = friendStreak(f, today);
      return { id: f.user_id, name: f.name, week: xpBetween(f.xp, weekFrom, today), streak: s.count, todayDone: s.todayDone, me: false, card: f };
    }),
  ].sort((a, b) => b.week - a.week);

  const menuRow = board.find((r) => r.id === menu && r.card);
  const nameOf = (id: string) => data?.friends.find((f) => f.user_id === id)?.name || tr('Friend');
  const incomingChallenges = (data?.challenges || []).filter((c) => c.status === 'pending' && c.creator === c.other);
  const outgoingChallenges = (data?.challenges || []).filter((c) => c.status === 'pending' && c.creator !== c.other);
  const activeChallenges = (data?.challenges || []).filter((c) => c.status === 'active');

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{tr('Friends & challenges')}</h1>
        <p className="text-sm sm:text-base text-stone-500 mt-1">{tr('Study together: compare your streaks, cheer each other on and launch weekly challenges.')}</p>
      </div>

      {error && <p className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-900">{tr('Friends are not available right now. Check your connection and try again.')}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="p-4 sm:p-5 rounded-3xl bg-[#1C1917] text-white space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400">{tr('Your friend code')}</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-widest font-mono">{data?.code || '……'}</span>
            <button
              type="button"
              onClick={() => data?.code && navigator.clipboard.writeText(data.code).then(() => addToast(tr('Copied!'), 'success'))}
              className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center cursor-pointer"
              aria-label={tr('Copy')}
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={share} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#C52828] text-sm font-bold cursor-pointer">
              <ShareNetwork className="w-4 h-4" /> {tr('Invite a friend')}
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 text-sm font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E4DCCE] space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-500">{tr('Add a friend')}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void add();
            }}
            className="flex gap-2"
          >
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 9))}
              placeholder="HSK-XXXXX"
              className="flex-1 min-w-0 h-11 px-3 rounded-xl border border-[#E6DFD3] bg-[#FAF8F5] font-mono tracking-widest text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C52828]/30"
              aria-label={tr('Friend code')}
            />
            <button type="submit" disabled={busy || !code.trim()} className="inline-flex items-center gap-1.5 px-4 h-11 rounded-xl bg-[#1C1917] text-white text-sm font-bold disabled:opacity-40 cursor-pointer">
              <UserPlus className="w-4 h-4" /> {tr('Add')}
            </button>
          </form>
          <p className="text-xs text-stone-500">{tr('Ask your friend for their code: it is on their Friends page.')}</p>
        </div>
      </div>

      {/* Requests and invitations */}
      {(data?.incoming.length || incomingChallenges.length) ? (
        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-900">{tr('Waiting for your answer')}</h2>
          {data!.incoming.map((r) => (
            <div key={`f${r.id}`} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E4DCCE]">
              <UserPlus className="w-5 h-5 text-[#C52828] shrink-0" />
              <span className="flex-1 min-w-0 text-sm text-stone-800">
                <b>{r.name}</b> {tr('wants to be your friend')}
              </span>
              <button type="button" disabled={busy} onClick={() => run(() => social.respondFriend(r.id, true), 'You are now friends!')} className="w-10 h-10 shrink-0 rounded-xl bg-emerald-600 text-white grid place-items-center cursor-pointer" aria-label={tr('Accept')}>
                <Check className="w-4 h-4" weight="bold" />
              </button>
              <button type="button" disabled={busy} onClick={() => run(() => social.respondFriend(r.id, false))} className="w-10 h-10 shrink-0 rounded-xl border border-[#E2D9CC] grid place-items-center cursor-pointer" aria-label={tr('Decline')}>
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          {incomingChallenges.map((c) => (
            <div key={`c${c.id}`} className="flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-white border border-[#E4DCCE]">
              <Sword className="w-5 h-5 text-[#C52828] shrink-0" />
              <span className="flex-1 min-w-[10rem] text-sm text-stone-800">
                <b>{nameOf(c.other)}</b> {tr('challenges you: most XP in')} {c.days} {tr('days')}
              </span>
              <div className="ml-auto flex items-center gap-2 shrink-0">
                <button type="button" disabled={busy} onClick={() => run(() => social.respondChallenge(c.id, true), 'Challenge accepted: good luck!')} className="px-4 h-10 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer">
                  {tr('Accept')}
                </button>
                <button type="button" disabled={busy} onClick={() => run(() => social.respondChallenge(c.id, false))} className="w-10 h-10 shrink-0 rounded-xl border border-[#E2D9CC] grid place-items-center cursor-pointer" aria-label={tr('Decline')}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : null}

      {/* Active challenges */}
      {activeChallenges.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-900">{tr('Challenges')}</h2>
          {activeChallenges.map((c) => (
            <ChallengeCard key={c.id} c={c} game={game} friend={data!.friends.find((f) => f.user_id === c.other)} today={today} myName={myName} />
          ))}
        </section>
      )}

      {/* Weekly leaderboard */}
      <section className="space-y-2">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-base font-bold text-stone-900">{tr('This week')}</h2>
          <span className="text-xs text-stone-500">{tr('XP of the last 7 days')}</span>
        </div>
        {board.length === 1 && (
          <p className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE] text-sm text-stone-600">{tr('Add your first friend with their code, or invite a classmate: learning together keeps you going.')}</p>
        )}
        <ol className="space-y-2">
          {board.map((r, i) => (
            <li key={r.id} className={`p-3 rounded-2xl border flex items-center gap-2.5 sm:gap-3 ${r.me ? 'bg-rose-50 border-rose-200' : 'bg-white border-[#E4DCCE]'}`}>
              <span className={`w-8 h-8 rounded-full grid place-items-center text-sm font-black shrink-0 ${i === 0 ? 'bg-amber-400 text-white' : i === 1 ? 'bg-stone-300 text-white' : i === 2 ? 'bg-[#D9A877] text-white' : 'bg-stone-100 text-stone-600'}`}>{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-stone-900 truncate">
                  {r.name} {r.me && <span className="text-xs font-semibold text-stone-500">({tr('you')})</span>}
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-stone-500 mt-0.5">
                  <span className="inline-flex items-center gap-0.5 whitespace-nowrap font-semibold text-stone-700">
                    <Flame className={`w-3.5 h-3.5 ${r.streak ? 'text-orange-500' : 'text-stone-300'}`} weight="fill" /> {r.streak} {tr(r.streak === 1 ? 'day' : 'days')}
                  </span>
                  {r.todayDone ? (
                    <span className="inline-flex items-center gap-0.5 whitespace-nowrap text-emerald-700">
                      <CheckCircle className="w-3.5 h-3.5" weight="fill" /> {tr('goal done')}
                    </span>
                  ) : (
                    <span className="whitespace-nowrap">{tr('goal to do')}</span>
                  )}
                </div>
              </div>
              <span className="text-sm font-black text-stone-900 tabular-nums shrink-0 whitespace-nowrap">{r.week} XP</span>
              {r.card && (
                <button
                  type="button"
                  onClick={() => setMenu(r.id)}
                  className="w-10 h-10 rounded-xl border border-[#E2D9CC] grid place-items-center cursor-pointer shrink-0 active:bg-stone-100"
                  aria-label={`${tr('Actions')}: ${r.name}`}
                >
                  <DotsThree className="w-5 h-5" weight="bold" />
                </button>
              )}
            </li>
          ))}
        </ol>
      </section>

      {menuRow?.card && (
        <FriendSheet
          card={menuRow.card}
          week={menuRow.week}
          streak={menuRow.streak}
          todayDone={menuRow.todayDone}
          busy={busy}
          onClose={() => setMenu(null)}
          onCheer={(k) => {
            setMenu(null);
            void cheer(menuRow.card!, k);
          }}
          onChallenge={() => {
            setMenu(null);
            void challenge(menuRow.card!);
          }}
          onRemove={() => {
            setMenu(null);
            void run(() => social.removeFriend(menuRow.card!.user_id));
          }}
        />
      )}

      {(data?.outgoing.length || outgoingChallenges.length) ? (
        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-stone-500">{tr('Sent, waiting for an answer')}</h2>
          {data!.outgoing.map((r) => (
            <p key={`o${r.id}`} className="text-sm text-stone-600">
              • {tr('Friend request to')} <b>{r.name}</b>
            </p>
          ))}
          {outgoingChallenges.map((c) => (
            <p key={`oc${c.id}`} className="text-sm text-stone-600 flex items-center gap-2">
              • {tr('Challenge sent to')} <b>{nameOf(c.other)}</b>
              <button type="button" onClick={() => run(() => social.respondChallenge(c.id, false))} className="text-xs text-stone-400 underline cursor-pointer">
                {tr('Cancel')}
              </button>
            </p>
          ))}
        </section>
      ) : null}
    </div>
  );
};

const CHEER_LABEL: Record<Cheer['kind'], string> = { fire: 'Keep it up!', clap: 'Well done!', muscle: 'You can do it!', heart: 'Thinking of you' };

/** Actions on a friend: a bottom sheet on phones, a centred dialog on larger screens. */
const FriendSheet: React.FC<{
  card: FriendCard;
  week: number;
  streak: number;
  todayDone: boolean;
  busy: boolean;
  onClose: () => void;
  onCheer: (k: Cheer['kind']) => void;
  onChallenge: () => void;
  onRemove: () => void;
}> = ({ card, week, streak, todayDone, busy, onClose, onCheer, onChallenge, onRemove }) => {
  const [confirmRemove, setConfirmRemove] = useState(false);
  const got = BADGES.filter((b) => card.badges?.[b.id]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  return createPortal(
    <div className="fixed inset-0 z-[80] bg-stone-950/50 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={card.name}
        className="w-full sm:max-w-md max-h-[88vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-xl pb-[max(1rem,env(safe-area-inset-bottom))] animate-in slide-in-from-bottom-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm:hidden flex justify-center pt-2.5">
          <span className="w-10 h-1.5 rounded-full bg-stone-200" />
        </div>
        <div className="flex items-start gap-3 px-5 pt-4">
          <span className="w-12 h-12 rounded-2xl bg-[#1C1917] text-white grid place-items-center text-lg font-black shrink-0">
            {(card.name || '?').charAt(0).toUpperCase()}
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-extrabold text-stone-950 break-words">{card.name}</div>
            <div className="text-sm text-stone-500">{(card.level || 'hsk1').toUpperCase().replace('HSK', 'HSK ')}</div>
          </div>
          <button type="button" onClick={onClose} className="w-10 h-10 rounded-xl bg-stone-100 grid place-items-center cursor-pointer shrink-0" aria-label={tr('Close')}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 px-5 mt-4">
          <div className="p-2.5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE] text-center">
            <div className="text-xl font-black text-stone-900 inline-flex items-center gap-1">
              <Flame className={`w-5 h-5 ${streak ? 'text-orange-500' : 'text-stone-300'}`} weight="fill" />
              {streak}
            </div>
            <div className="text-xs text-stone-500">{tr('Streak')}</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE] text-center">
            <div className="text-xl font-black text-stone-900 tabular-nums">{week}</div>
            <div className="text-xs text-stone-500">{tr('XP this week')}</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE] text-center">
            <div className="text-xl font-black text-stone-900">{got.length}</div>
            <div className="text-xs text-stone-500">{tr('Badges')}</div>
          </div>
        </div>
        <p className={`mx-5 mt-2 text-sm font-semibold flex items-center gap-1.5 ${todayDone ? 'text-emerald-700' : 'text-stone-500'}`}>
          {todayDone ? <CheckCircle className="w-4 h-4" weight="fill" /> : <Flame className="w-4 h-4" />}
          {todayDone ? tr('goal done today') : tr('goal not done yet')}
        </p>

        <div className="px-5 mt-5">
          <p className="text-sm font-bold text-stone-900">{tr('Encourage')}</p>
          <p className="text-xs text-stone-500">{tr('Your friend will see it the next time they open the app.')}</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {(Object.keys(CHEER_EMOJI) as Cheer['kind'][]).map((k) => (
              <button
                key={k}
                type="button"
                disabled={busy}
                onClick={() => onCheer(k)}
                className="flex items-center gap-2 px-3 py-3 rounded-2xl border border-[#E8E2D8] text-left cursor-pointer active:bg-[#FAF8F5] hover:border-stone-900 disabled:opacity-50"
              >
                <span className="text-2xl leading-none">{CHEER_EMOJI[k]}</span>
                <span className="text-sm font-semibold text-stone-800 leading-tight">{tr(CHEER_LABEL[k])}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 mt-4">
          <button
            type="button"
            disabled={busy}
            onClick={onChallenge}
            className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#C52828] text-white text-left cursor-pointer hover:bg-[#A82020] disabled:opacity-50"
          >
            <Sword className="w-5 h-5 shrink-0" weight="fill" />
            <span className="flex-1">
              <span className="block text-sm font-bold">{tr('Challenge (7 days)')}</span>
              <span className="block text-xs opacity-90">{tr('Whoever earns the most XP in 7 days wins +50 XP.')}</span>
            </span>
          </button>
        </div>

        {got.length > 0 && (
          <div className="px-5 mt-5">
            <p className="text-sm font-bold text-stone-900 mb-2">{tr('Latest badges')}</p>
            <div className="flex flex-wrap gap-3">
              {got.slice(-6).map((b) => (
                <div key={b.id} className="w-16 flex flex-col items-center text-center">
                  <BadgeIcon icon={b.icon} tier={b.tier} earned size="sm" />
                  <div className="text-[11px] leading-tight text-stone-600 mt-1">{tr(b.title)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="px-5 mt-5">
          {confirmRemove ? (
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
              <p className="text-sm text-rose-900">
                {tr('Remove')} <b>{card.name}</b> {tr('from your friends?')}
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={onRemove} disabled={busy} className="flex-1 py-2.5 rounded-xl bg-rose-700 text-white text-sm font-bold cursor-pointer">
                  {tr('Remove')}
                </button>
                <button type="button" onClick={() => setConfirmRemove(false)} className="flex-1 py-2.5 rounded-xl border border-rose-200 text-sm font-semibold text-rose-900 cursor-pointer">
                  {tr('Cancel')}
                </button>
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => setConfirmRemove(true)} className="w-full py-3 rounded-2xl text-sm font-semibold text-rose-700 cursor-pointer hover:bg-rose-50">
              {tr('Remove friend')}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

const ChallengeCard: React.FC<{ c: Challenge; game: GameState; friend?: FriendCard; today: string; myName: string }> = ({ c, game, friend, today, myName }) => {
  if (!c.start_date || !c.end_date) return null;
  const mine = xpBetween(game.xp, c.start_date, c.end_date);
  const theirs = friend ? xpBetween(friend.xp, c.start_date, c.end_date) : 0;
  const total = Math.max(1, mine + theirs);
  const over = c.end_date < today;
  const daysLeft = over ? 0 : Math.round((new Date(c.end_date).getTime() - new Date(today).getTime()) / 86400000) + 1;
  const won = over && mine > theirs;
  return (
    <div className="p-4 rounded-2xl bg-white border border-[#E4DCCE] space-y-2">
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="font-bold text-stone-900 flex items-center gap-1.5">
          <Sword className="w-4 h-4 text-[#C52828]" /> {myName || tr('Me')} vs {friend?.name || tr('Friend')}
        </span>
        <span className="text-xs font-semibold text-stone-500">
          {over ? (won ? <span className="text-emerald-700 inline-flex items-center gap-1"><Trophy className="w-3.5 h-3.5" weight="fill" /> {tr('You won!')}</span> : mine === theirs ? tr('Draw') : tr('Finished')) : `${daysLeft} ${tr(daysLeft === 1 ? 'day left' : 'days left')}`}
        </span>
      </div>
      <div className="flex h-3 rounded-full overflow-hidden bg-stone-100">
        <div className="bg-[#C52828]" style={{ width: `${(mine / total) * 100}%` }} />
        <div className="bg-stone-400" style={{ width: `${(theirs / total) * 100}%` }} />
      </div>
      <div className="flex justify-between text-xs font-bold tabular-nums">
        <span className="text-[#C52828]">{mine} XP</span>
        <span className="text-stone-500">{theirs} XP</span>
      </div>
    </div>
  );
};
