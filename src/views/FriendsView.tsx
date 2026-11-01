import React, { useCallback, useEffect, useState } from 'react';
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
              <UserPlus className="w-5 h-5 text-[#C52828]" />
              <span className="flex-1 text-sm text-stone-800">
                <b>{r.name}</b> {tr('wants to be your friend')}
              </span>
              <button type="button" disabled={busy} onClick={() => run(() => social.respondFriend(r.id, true), 'You are now friends!')} className="w-9 h-9 rounded-xl bg-emerald-600 text-white grid place-items-center cursor-pointer" aria-label={tr('Accept')}>
                <Check className="w-4 h-4" weight="bold" />
              </button>
              <button type="button" disabled={busy} onClick={() => run(() => social.respondFriend(r.id, false))} className="w-9 h-9 rounded-xl border border-[#E2D9CC] grid place-items-center cursor-pointer" aria-label={tr('Decline')}>
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          {incomingChallenges.map((c) => (
            <div key={`c${c.id}`} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E4DCCE]">
              <Sword className="w-5 h-5 text-[#C52828]" />
              <span className="flex-1 text-sm text-stone-800">
                <b>{nameOf(c.other)}</b> {tr('challenges you: most XP in')} {c.days} {tr('days')}
              </span>
              <button type="button" disabled={busy} onClick={() => run(() => social.respondChallenge(c.id, true), 'Challenge accepted: good luck!')} className="px-3 h-9 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer">
                {tr('Accept')}
              </button>
              <button type="button" disabled={busy} onClick={() => run(() => social.respondChallenge(c.id, false))} className="w-9 h-9 rounded-xl border border-[#E2D9CC] grid place-items-center cursor-pointer" aria-label={tr('Decline')}>
                <X className="w-4 h-4" />
              </button>
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
            <li key={r.id} className={`p-3 rounded-2xl border flex items-center gap-3 ${r.me ? 'bg-rose-50 border-rose-200' : 'bg-white border-[#E4DCCE]'}`}>
              <span className={`w-8 h-8 rounded-full grid place-items-center text-sm font-black shrink-0 ${i === 0 ? 'bg-amber-400 text-white' : i === 1 ? 'bg-stone-300 text-white' : i === 2 ? 'bg-[#D9A877] text-white' : 'bg-stone-100 text-stone-600'}`}>{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-stone-900 truncate">
                  {r.name} {r.me && <span className="text-xs font-semibold text-stone-500">({tr('you')})</span>}
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="inline-flex items-center gap-0.5">
                    <Flame className={`w-3.5 h-3.5 ${r.streak ? 'text-orange-500' : 'text-stone-300'}`} weight="fill" /> {r.streak}
                  </span>
                  {r.todayDone ? (
                    <span className="inline-flex items-center gap-0.5 text-emerald-700">
                      <CheckCircle className="w-3.5 h-3.5" weight="fill" /> {tr('goal done today')}
                    </span>
                  ) : (
                    <span>{tr('goal not done yet')}</span>
                  )}
                  {r.card && Object.keys(r.card.badges || {}).length > 0 && (
                    <span className="hidden sm:inline">· {Object.keys(r.card.badges).length} {tr('badges')}</span>
                  )}
                </div>
              </div>
              <span className="text-sm font-black text-stone-900 tabular-nums shrink-0">{r.week} XP</span>
              {r.card && (
                <div className="relative shrink-0">
                  <button type="button" onClick={() => setMenu(menu === r.id ? null : r.id)} className="w-9 h-9 rounded-xl border border-[#E2D9CC] grid place-items-center cursor-pointer" aria-label={tr('Actions')}>
                    <DotsThree className="w-5 h-5" weight="bold" />
                  </button>
                  {menu === r.id && (
                    <div className="absolute right-0 top-11 z-20 w-60 p-2 rounded-2xl bg-white border border-[#E4DCCE] shadow-lg space-y-1" onMouseLeave={() => setMenu(null)}>
                      <p className="px-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-stone-400">{tr('Encourage')}</p>
                      <div className="flex gap-1 px-1">
                        {(Object.keys(CHEER_EMOJI) as Cheer['kind'][]).map((k) => (
                          <button key={k} type="button" disabled={busy} onClick={() => (setMenu(null), cheer(r.card!, k))} className="flex-1 h-10 rounded-xl hover:bg-[#FAF8F5] text-xl cursor-pointer">
                            {CHEER_EMOJI[k]}
                          </button>
                        ))}
                      </div>
                      <button type="button" disabled={busy} onClick={() => (setMenu(null), challenge(r.card!))} className="w-full flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-[#FAF8F5] text-sm font-semibold text-stone-800 cursor-pointer">
                        <Sword className="w-4 h-4 text-[#C52828]" /> {tr('Challenge (7 days)')}
                      </button>
                      <FriendBadges card={r.card} />
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => {
                          setMenu(null);
                          if (window.confirm(`${tr('Remove')} ${r.name} ${tr('from your friends?')}`)) void run(() => social.removeFriend(r.card!.user_id));
                        }}
                        className="w-full text-left px-2 py-2 rounded-xl hover:bg-rose-50 text-sm text-rose-700 cursor-pointer"
                      >
                        {tr('Remove friend')}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

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

const FriendBadges: React.FC<{ card: FriendCard }> = ({ card }) => {
  const got = BADGES.filter((b) => card.badges?.[b.id]).slice(-6);
  if (!got.length) return null;
  return (
    <div className="px-2 py-1">
      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">{tr('Latest badges')}</p>
      <div className="flex flex-wrap gap-1">
        {got.map((b) => (
          <span key={b.id} title={tr(b.title)}>
            <BadgeIcon icon={b.icon} tier={b.tier} earned size="sm" />
          </span>
        ))}
      </div>
    </div>
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
