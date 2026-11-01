// Friends, challenges and encouragements (supabase/social.sql). Every call goes through a
// database function: learners never read each other's rows directly.
import { supabase } from './supabase';

export interface FriendCard {
  user_id: string;
  name: string;
  level: string;
  goal_minutes: number;
  streak: { count?: number; last?: string | null; best?: number };
  total: number;
  badges: Record<string, string>;
  xp: Record<string, number>;
}

export interface FriendRequest {
  id: number;
  user_id: string;
  name: string;
}

export interface Challenge {
  id: number;
  creator: string;
  opponent: string;
  other: string;
  days: number;
  status: 'pending' | 'active' | 'declined' | 'cancelled';
  start_date: string | null;
  end_date: string | null;
}

export interface Cheer {
  id: number;
  kind: 'fire' | 'clap' | 'muscle' | 'heart';
  name: string;
  created_at: string;
}

export interface SocialOverview {
  code: string | null;
  friends: FriendCard[];
  incoming: FriendRequest[];
  outgoing: FriendRequest[];
  challenges: Challenge[];
  cheers: Cheer[];
}

export type AddFriendStatus = 'requested' | 'accepted' | 'already' | 'pending' | 'not_found' | 'self' | 'too_many';

async function rpc<T>(fn: string, args?: Record<string, unknown>): Promise<T> {
  if (!supabase) throw new Error('not_configured');
  const { data, error } = await supabase.rpc(fn, args);
  if (error) throw error;
  return data as T;
}

export const social = {
  me: () => rpc<{ code: string }>('social_me'),
  overview: () => rpc<SocialOverview>('social_overview'),
  addFriend: (code: string) => rpc<{ status: AddFriendStatus }>('social_add_friend', { p_code: code }),
  respondFriend: (id: number, accept: boolean) => rpc<void>('social_respond_friend', { p_id: id, p_accept: accept }),
  removeFriend: (userId: string) => rpc<void>('social_remove_friend', { p_user: userId }),
  cheer: (userId: string, kind: Cheer['kind']) => rpc<{ ok: boolean; reason?: string }>('social_send_cheer', { p_user: userId, p_kind: kind }),
  markCheersSeen: () => rpc<void>('social_mark_cheers_seen'),
  challenge: (userId: string, days: number) => rpc<{ ok: boolean; reason?: string }>('social_challenge', { p_user: userId, p_days: days }),
  respondChallenge: (id: number, accept: boolean) => rpc<void>('social_respond_challenge', { p_id: id, p_accept: accept }),
};

export const CHEER_EMOJI: Record<Cheer['kind'], string> = { fire: '🔥', clap: '👏', muscle: '💪', heart: '❤️' };
