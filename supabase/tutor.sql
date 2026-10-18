-- HSK Path: Laoshi (AI tutor) daily quota on the shared server key.
-- Run once in the Supabase SQL Editor (after schema.sql and admin.sql).
-- Messages sent with a student's own API key are not counted.
--
-- Limits are constants inside the functions (not parameters), so a student calling
-- the functions directly can only use up their own allowance. To change them, edit
-- the three values below and run the file again.
--   free student: 10 messages / day · Pro: 30 / day · whole site: 80 / day (UTC days)

create table if not exists public.tutor_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  count integer not null default 0,
  primary key (user_id, day)
);

alter table public.tutor_usage enable row level security;

drop policy if exists "Users read own tutor usage" on public.tutor_usage;
create policy "Users read own tutor usage" on public.tutor_usage
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "Admins read all tutor usage" on public.tutor_usage;
create policy "Admins read all tutor usage" on public.tutor_usage
  for select to authenticated using ((select public.is_admin()));

-- No insert/update/delete policies: rows only change through consume_tutor_quota().
revoke insert, update, delete on public.tutor_usage from authenticated, anon;

-- Current allowance for the signed-in student (read only).
create or replace function public.tutor_quota_status()
returns json
language plpgsql stable security definer set search_path = ''
as $$
declare
  user_limit constant int := 10;
  pro_limit constant int := 30;
  global_limit constant int := 80;
  uid uuid := auth.uid();
  today date := (now() at time zone 'utc')::date;
  pro boolean := false;
  used int := 0;
  total int := 0;
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;
  select coalesce(p.is_pro, false) into pro from public.user_progress p where p.user_id = uid;
  select coalesce(u.count, 0) into used from public.tutor_usage u where u.user_id = uid and u.day = today;
  select coalesce(sum(u.count), 0) into total from public.tutor_usage u where u.day = today;
  return json_build_object(
    'used', coalesce(used, 0),
    'limit', case when coalesce(pro, false) then pro_limit else user_limit end,
    'globalUsed', total,
    'globalLimit', global_limit,
    'isPro', coalesce(pro, false)
  );
end;
$$;

-- Count one message for the signed-in student; refuses beyond the limits.
create or replace function public.consume_tutor_quota()
returns json
language plpgsql volatile security definer set search_path = ''
as $$
declare
  user_limit constant int := 10;
  pro_limit constant int := 30;
  global_limit constant int := 80;
  uid uuid := auth.uid();
  today date := (now() at time zone 'utc')::date;
  pro boolean := false;
  lim int;
  used int := 0;
  total int := 0;
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;
  -- One message counted at a time, so the site-wide total stays exact.
  perform pg_advisory_xact_lock(hashtext('hskpath_tutor_quota'));
  select coalesce(p.is_pro, false) into pro from public.user_progress p where p.user_id = uid;
  lim := case when coalesce(pro, false) then pro_limit else user_limit end;
  select coalesce(u.count, 0) into used from public.tutor_usage u where u.user_id = uid and u.day = today;
  used := coalesce(used, 0);
  select coalesce(sum(u.count), 0) into total from public.tutor_usage u where u.day = today;
  if used >= lim then
    return json_build_object('ok', false, 'reason', 'user', 'used', used, 'limit', lim);
  end if;
  if total >= global_limit then
    return json_build_object('ok', false, 'reason', 'global', 'used', used, 'limit', lim);
  end if;
  insert into public.tutor_usage (user_id, day, count) values (uid, today, 1)
    on conflict (user_id, day) do update set count = public.tutor_usage.count + 1;
  return json_build_object('ok', true, 'used', used + 1, 'limit', lim);
end;
$$;

revoke all on function public.tutor_quota_status() from public, anon;
revoke all on function public.consume_tutor_quota() from public, anon;
grant execute on function public.tutor_quota_status() to authenticated;
grant execute on function public.consume_tutor_quota() to authenticated;
