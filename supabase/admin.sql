-- HSK Path: admin access + Pro flag managed only by admins
create table if not exists public.admins (
  email text primary key,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;
create policy "Admins can see their own admin row" on public.admins
  for select to authenticated using (email = (select auth.jwt() ->> 'email'));

create or replace function public.is_admin()
returns boolean
language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from public.admins a where a.email = (auth.jwt() ->> 'email'));
$$;
revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

-- Pro flag: readable by the student, writable only through admin_set_pro()
alter table public.user_progress add column if not exists is_pro boolean not null default false;

revoke insert, update on public.user_progress from authenticated, anon;
grant insert (user_id, profile, learned_ids, favorite_ids, test_history, streak_days, weekly_minutes, last_active_date, srs, updated_at)
  on public.user_progress to authenticated;
grant update (user_id, profile, learned_ids, favorite_ids, test_history, streak_days, weekly_minutes, last_active_date, srs, updated_at)
  on public.user_progress to authenticated;

create policy "Admins read all progress" on public.user_progress
  for select to authenticated using ((select public.is_admin()));

create or replace function public.admin_set_pro(target uuid, value boolean)
returns void
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'not authorized';
  end if;
  update public.user_progress set is_pro = value where user_id = target;
end;
$$;
revoke all on function public.admin_set_pro(uuid, boolean) from public, anon;
grant execute on function public.admin_set_pro(uuid, boolean) to authenticated;

insert into public.admins (email) values ('hervekom37@gmail.com') on conflict do nothing;
