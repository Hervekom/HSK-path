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
}

export async function loadProgress(userId: string): Promise<StoredProgress | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle<Row>();
  if (error) {
    console.warn('loadProgress failed', error);
    return null;
  }
  if (!data) return null;
  return {
    profile: data.profile || {},
    learnedIds: data.learned_ids || [],
    favoriteIds: data.favorite_ids || [],
    testHistory: data.test_history || [],
    streakDays: data.streak_days ?? 1,
    weeklyMinutes: data.weekly_minutes ?? 0,
    lastActiveDate: data.last_active_date,
    srs: data.srs,
  };
}

export async function saveProgress(userId: string, p: StoredProgress): Promise<void> {
  if (!supabase) return;
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
  if (error) console.warn('saveProgress failed', error);
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
