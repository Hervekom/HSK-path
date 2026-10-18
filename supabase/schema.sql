-- HSK Path: per-user progress storage
create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  profile jsonb not null default '{}'::jsonb,
  learned_ids text[] not null default '{}',
  favorite_ids text[] not null default '{}',
  test_history jsonb not null default '[]'::jsonb,
  streak_days integer not null default 1,
  weekly_minutes integer not null default 0,
  last_active_date date,
  srs jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

create policy "Users read own progress" on public.user_progress
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users insert own progress" on public.user_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users update own progress" on public.user_progress
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Users delete own progress" on public.user_progress
  for delete to authenticated using ((select auth.uid()) = user_id);
