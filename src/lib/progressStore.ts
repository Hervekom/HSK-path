import { supabase } from './supabase';
import type { TestResult, UserProfile } from '../types';


export interface StoredProgress {
  profile: Partial<UserProfile>;
  learnedIds: string[];
  favoriteIds: string[];
  testHistory: TestResult[];
  streakDays: number;
  weeklyMinutes: number;
  lastActiveDate: string | null;
  srs: Record<string, unknown> | null;
  isPro?: boolean;
}

interface Row {
  user_id: string;
  profile: Partial<UserProfile> | null;
  learned_ids: string[] | null;
  favorite_ids: string[] | null;
  test_history: TestResult[] | null;
  streak_days: number | null;
  weekly_minutes: number | null;
  last_active_date: string | null;
  srs: Record<string, unknown> | null;
  is_pro?: boolean | null;
}

// A copy of the progress stays on the device, so the installed app works offline:
// - loaded when the database can't be reached;
// - every save writes it first; a save that fails offline is marked "pending" and sent
//   once the connection is back (and wins over the older copy in the database).
const cacheKey = (userId: string) => `hskpath_progress_${userId}`;
const pendingKey = (userId: string) => `hskpath_progress_pending_${userId}`;

function readCache(userId: string): StoredProgress | null {
  try {
    const raw = localStorage.getItem(cacheKey(userId));
    return raw ? (JSON.parse(raw) as StoredProgress) : null;
  } catch {
    return null;
  }
}

function writeCache(userId: string, p: StoredProgress) {
  try {
    localStorage.setItem(cacheKey(userId), JSON.stringify(p));
  } catch {
    // storage full or blocked: the database copy still works online
  }
}

export function hasPendingProgress(userId: string): boolean {
  try {
    return localStorage.getItem(pendingKey(userId)) === '1';
  } catch {
    return false;
  }
}

function setPending(userId: string, on: boolean) {
  try {
    if (on) localStorage.setItem(pendingKey(userId), '1');
    else localStorage.removeItem(pendingKey(userId));
  } catch {
    // ignore
  }
}

export interface LoadResult {
  /** null: no progress saved yet (new student), or offline with nothing on this device. */
  progress: StoredProgress | null;
  /** True when the database could not be reached. */
  offline: boolean;
}

export async function loadProgress(userId: string): Promise<LoadResult> {
  const cached = readCache(userId);
  if (!supabase) return { progress: cached, offline: false };
  // Changes made offline that never reached the database are newer than its copy.
  if (cached && hasPendingProgress(userId)) {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return { progress: cached, offline: true };
    const { data } = await supabase.from('user_progress').select('is_pro').eq('user_id', userId).maybeSingle<{ is_pro: boolean | null }>();
    return { progress: data ? { ...cached, isPro: Boolean(data.is_pro) } : cached, offline: !data };
  }
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return { progress: cached, offline: true };
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle<Row>();
  if (error) {
    console.warn('loadProgress failed', error);
    return { progress: cached, offline: true };
  }
  if (!data) return { progress: null, offline: false };
  const progress: StoredProgress = {
    profile: data.profile || {},
    learnedIds: data.learned_ids || [],
    favoriteIds: data.favorite_ids || [],
    testHistory: data.test_history || [],
    streakDays: data.streak_days ?? 1,
    weeklyMinutes: data.weekly_minutes ?? 0,
    lastActiveDate: data.last_active_date,
    srs: data.srs,
    isPro: Boolean(data.is_pro),
  };
  writeCache(userId, progress);
  return { progress, offline: false };
}

/** Saves on the device, then in the database. Returns false when the database could not be reached. */
export async function saveProgress(userId: string, p: StoredProgress): Promise<boolean> {
  writeCache(userId, { ...p, isPro: p.isPro ?? readCache(userId)?.isPro });
  if (!supabase) return true;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    setPending(userId, true);
    return false;
  }
  const { error } = await supabase.from('user_progress').upsert(
    {
      user_id: userId,
      profile: p.profile,
      learned_ids: p.learnedIds,
      favorite_ids: p.favoriteIds,
      test_history: p.testHistory,
      streak_days: p.streakDays,
      weekly_minutes: p.weeklyMinutes,
      last_active_date: p.lastActiveDate,
      srs: p.srs,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' }
  );
  if (error) {
    console.warn('saveProgress failed', error);
    setPending(userId, true);
    return false;
  }
  setPending(userId, false);
  return true;
}

/** Streak: +1 if last activity was yesterday, unchanged if today, reset to 1 otherwise. */
export function computeStreak(prevStreak: number, lastActiveDate: string | null): { streak: number; today: string } {
  const today = new Date().toISOString().slice(0, 10);
  if (!lastActiveDate) return { streak: 1, today };
  if (lastActiveDate === today) return { streak: Math.max(1, prevStreak), today };
  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yesterday = y.toISOString().slice(0, 10);
  return { streak: lastActiveDate === yesterday ? prevStreak + 1 : 1, today };
}

/** Current plan of the signed-in student, read fresh from the database (not from the cached profile). */
export async function fetchPlan(userId: string): Promise<{ isPro: boolean; isAdmin: boolean } | null> {
  if (!supabase) return null;
  const [pro, admin] = await Promise.all([
    supabase.from('user_progress').select('is_pro').eq('user_id', userId).maybeSingle<{ is_pro: boolean | null }>(),
    supabase.rpc('is_admin'),
  ]);
  if (pro.error || admin.error) return null;
  return { isPro: Boolean(pro.data?.is_pro), isAdmin: admin.data === true };
}

/** null when the database can't be reached (offline): keep the last known value. */
export async function fetchIsAdmin(): Promise<boolean | null> {
  if (!supabase) return false;
  const { data, error } = await supabase.rpc('is_admin');
  if (error) return null;
  return data === true;
}

export interface AdminStudentRow {
  user_id: string;
  profile: Partial<UserProfile> | null;
  learned_ids: string[] | null;
  favorite_ids: string[] | null;
  test_history: TestResult[] | null;
  streak_days: number | null;
  weekly_minutes: number | null;
  last_active_date: string | null;
  is_pro: boolean | null;
  created_at: string;
  updated_at: string;
}

export async function fetchAllStudents(): Promise<AdminStudentRow[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('user_progress')
    .select('user_id, profile, learned_ids, favorite_ids, test_history, streak_days, weekly_minutes, last_active_date, is_pro, created_at, updated_at')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return (data || []) as AdminStudentRow[];
}

export async function adminSetPro(userId: string, value: boolean): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.rpc('admin_set_pro', { target: userId, value });
  if (error) throw error;
}
