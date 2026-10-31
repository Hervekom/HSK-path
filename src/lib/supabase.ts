import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** Null when the env vars are missing (the app then runs in demo-only mode). */
export const supabase: SupabaseClient | null =
  url && key ? createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true } }) : null;

export const isSupabaseConfigured = Boolean(supabase);

/**
 * The signed-in user as last saved on this device, read without the network.
 * Used when the app opens offline: getSession() would try to refresh an expired token and fail.
 * Same key supabase-js uses by default (sb-<project ref>-auth-token).
 */
export function storedAuthUser(): import('@supabase/supabase-js').User | null {
  if (!url) return null;
  try {
    const key = `sb-${new URL(url).hostname.split('.')[0]}-auth-token`;
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed?.user ?? parsed?.currentSession?.user ?? null;
  } catch {
    return null;
  }
}
