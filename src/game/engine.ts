// Daily goal, streak, XP and badges. Pure functions on a small state object that is stored
// with the learner's profile (profile.game), so it follows them on every device.
//
// - Every activity earns XP (earn() below). Reaching the daily XP goal "validates" the day.
// - The streak counts consecutive validated days; it is at risk until today's goal is reached.
// - Badges are unlocked from counters (stats) and from the rest of the progress (words, phrases…).

export type XpSource =
  | 'word' // a word marked as learned
  | 'srs' // a flashcard reviewed
  | 'phrase' // an everyday phrase marked as known
  | 'pron' // a pronunciation attempt scored
  | 'tones' // a tone drill finished
  | 'quiz'
  | 'practice' // listening / reading / writing drill
  | 'exam' // short mock exam
  | 'hsk3' // full HSK 3 exam
  | 'lesson'
  | 'laoshi' // a message to the tutor
  | 'speaking' // one task of the speaking test
  | 'cheer' // encouragement sent to a friend
  | 'challenge'; // challenge won

export const XP: Record<XpSource, number> = {
  word: 5,
  srs: 2,
  phrase: 3,
  pron: 3,
  tones: 5,
  quiz: 15,
  practice: 15,
  exam: 30,
  hsk3: 50,
  lesson: 20,
  laoshi: 2,
  speaking: 6,
  cheer: 1,
  challenge: 50,
};

export interface GameState {
  v: 1;
  /** XP earned per local day (YYYY-MM-DD), last 120 days. */
  xp: Record<string, number>;
  total: number;
  /** count: consecutive validated days; last: last validated day; best: record. */
  streak: { count: number; last: string | null; best: number };
  /** Activity counters for the badges. */
  stats: Record<string, number>;
  /** Badge id → day it was earned. */
  badges: Record<string, string>;
  /** Keys already rewarded today (lesson ids…), to avoid farming the same thing. */
  seen: Record<string, string>;
}

export interface EarnEvent {
  source: XpSource;
  /** XP; defaults to XP[source]. */
  amount?: number;
  /** Counted once per day (e.g. a lesson id): no XP the second time the same day. */
  key?: string;
  /** Extra counters to add (e.g. { pronGreat: 1, hsk3Pass: 1 }). */
  stats?: Record<string, number>;
}

/** Local calendar day, not UTC: "today" must match the learner's own clock. */
export function dayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function shiftDay(key: string, delta: number): string {
  const [y, m, d] = key.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + delta));
}

/** Daily XP goal from the minutes the learner chose at sign-up (10 min → 20 XP … 60 min → 120 XP). */
export function dailyGoalXp(minutes?: number): number {
  return Math.max(20, Math.min(120, Math.round((minutes || 20) * 2)));
}

export function emptyGame(): GameState {
  return { v: 1, xp: {}, total: 0, streak: { count: 0, last: null, best: 0 }, stats: {}, badges: {}, seen: {} };
}

/**
 * Game state for a learner who had no game yet: the login streak of the old system is kept,
 * so nobody loses their series with the update (it continues if today's goal is reached).
 */
export function migrateGame(raw: unknown, legacyStreak?: number, legacyLastActive?: string | null): GameState {
  const g = raw && typeof raw === 'object' ? (raw as Partial<GameState>) : null;
  if (g && g.v === 1) {
    return { ...emptyGame(), ...g, streak: { ...emptyGame().streak, ...g.streak }, stats: { ...g.stats }, badges: { ...g.badges }, seen: { ...g.seen }, xp: { ...g.xp } } as GameState;
  }
  const base = emptyGame();
  if (legacyStreak && legacyStreak > 0 && legacyLastActive) {
    // the old system counted a day at login: treat the last active day as validated
    const last = legacyLastActive.slice(0, 10);
    base.streak = { count: legacyStreak, last, best: legacyStreak };
  }
  return base;
}

export interface StreakView {
  /** Days in the current series (0 when it was lost). */
  count: number;
  best: number;
  todayXp: number;
  goal: number;
  todayDone: boolean;
  /** The series continues only if today's goal is reached. */
  atRisk: boolean;
  /** A series existed and was broken (a day was missed). */
  lost: boolean;
}

export function streakView(g: GameState, goal: number, today = dayKey()): StreakView {
  const todayXp = g.xp[today] || 0;
  const todayDone = todayXp >= goal || g.streak.last === today;
  const yesterday = shiftDay(today, -1);
  const alive = g.streak.last === today || g.streak.last === yesterday;
  return {
    count: alive ? g.streak.count : 0,
    best: g.streak.best,
    todayXp,
    goal,
    todayDone,
    atRisk: alive && !todayDone && g.streak.count > 0,
    lost: !alive && g.streak.count > 0,
  };
}

/** Adds XP (and counters) for one activity; validates the day when the goal is reached. */
export function applyEarn(g: GameState, e: EarnEvent, goal: number, today = dayKey()): { game: GameState; xp: number; goalReached: boolean } {
  const next: GameState = { ...g, xp: { ...g.xp }, stats: { ...g.stats }, seen: { ...g.seen }, streak: { ...g.streak } };
  let xp = e.amount ?? XP[e.source];
  if (e.key) {
    if (next.seen[e.key] === today) xp = 0;
    else next.seen[e.key] = today;
  }
  next.stats[e.source] = (next.stats[e.source] || 0) + 1;
  if (e.key) next.stats[`${e.source}Unique`] = Object.keys(next.seen).filter((k) => k.startsWith(`${e.source}:`)).length;
  for (const [k, v] of Object.entries(e.stats || {})) next.stats[k] = (next.stats[k] || 0) + v;

  const before = next.xp[today] || 0;
  next.xp[today] = before + xp;
  next.total += xp;

  let goalReached = false;
  if (before < goal && next.xp[today] >= goal && next.streak.last !== today) {
    const yesterday = shiftDay(today, -1);
    next.streak.count = next.streak.last === yesterday ? next.streak.count + 1 : 1;
    next.streak.last = today;
    next.streak.best = Math.max(next.streak.best, next.streak.count);
    next.stats.goalDays = (next.stats.goalDays || 0) + 1;
    goalReached = true;
  }

  // keep 120 days of history and 60 days of "seen" keys
  const cut = shiftDay(today, -120);
  for (const k of Object.keys(next.xp)) if (k < cut) delete next.xp[k];
  const cutSeen = shiftDay(today, -60);
  for (const [k, d] of Object.entries(next.seen)) if (d < cutSeen) delete next.seen[k];
  return { game: next, xp, goalReached };
}

/** XP earned between two days (inclusive), e.g. this week or a challenge. */
export function xpBetween(xp: Record<string, number> | undefined, from: string, to: string): number {
  let s = 0;
  for (const [k, v] of Object.entries(xp || {})) if (k >= from && k <= to) s += Number(v) || 0;
  return s;
}

/** Level from total XP: each level needs a little more than the previous one. */
export function levelOf(total: number): { level: number; into: number; need: number } {
  let level = 1;
  let need = 100;
  let left = total;
  while (left >= need) {
    left -= need;
    level++;
    need = Math.round(need * 1.15);
  }
  return { level, into: left, need };
}

// ------------------------------------------------------------------------------------------
// Events: any page calls earn(); the app (App.tsx) applies it to the learner's game state.

export const EARN_EVENT = 'hsk-earn';

export function earn(source: XpSource, opts: Omit<EarnEvent, 'source'> = {}): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<EarnEvent>(EARN_EVENT, { detail: { source, ...opts } }));
}

/** Sets a counter that is not an activity (e.g. the number of friends) for the badges. */
export const STAT_EVENT = 'hsk-stat';

export function setStat(key: string, value: number): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<{ key: string; value: number }>(STAT_EVENT, { detail: { key, value } }));
}
