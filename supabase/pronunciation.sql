-- HSK Path: daily quota for the Pronunciation page's speech recognition (shared Groq key).
-- Run in the Supabase SQL Editor (after schema.sql and admin.sql); safe to run again.
-- Recordings checked with a learner's own Groq key are not counted. The melody (tone) analysis
-- runs in the browser and is never counted.
--
-- Limits are constants inside the functions, so a learner calling them directly can only use up
-- their own allowance. To change them, edit the three values below (in both functions) and run
-- the file again.
--   free learner: 30 checks / day · Pro: 150 / day · whole site: 1500 / day (UTC days)
-- Groq's free speech-to-text: about 2 000 requests a day and 20 a minute per model; the server
-- falls back to a second model when the first is busy.

create table if not exists public.pronounce_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  count integer not null default 0,
  primary key (user_id, day)
);

alter table public.pronounce_usage enable row level security;

drop policy if exists "Users read own pronounce usage" on public.pronounce_usage;
create policy "Users read own pronounce usage" on public.pronounce_usage
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "Admins read all pronounce usage" on public.pronounce_usage;
create policy "Admins read all pronounce usage" on public.pronounce_usage
  for select to authenticated using ((select public.is_admin()));

-- No insert/update/delete policies: rows only change through consume_pronounce_quota().
revoke insert, update, delete on public.pronounce_usage from authenticated, anon;

create or replace function public.pronounce_quota_status()
returns json
language plpgsql stable security definer set search_path = ''
as $$
declare
  user_limit constant int := 30;
  pro_limit constant int := 150;
  global_limit constant int := 1500;
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
  pro := coalesce(pro, false) or public.is_admin();
  select coalesce(u.count, 0) into used from public.pronounce_usage u where u.user_id = uid and u.day = today;
  select coalesce(sum(u.count), 0) into total from public.pronounce_usage u where u.day = today;
  return json_build_object(
    'used', coalesce(used, 0),
    'limit', case when coalesce(pro, false) then pro_limit else user_limit end,
    'globalUsed', total,
    'globalLimit', global_limit,
    'isPro', coalesce(pro, false)
  );
end;
$$;

create or replace function public.consume_pronounce_quota()
returns json
language plpgsql volatile security definer set search_path = ''
as $$
declare
  user_limit constant int := 30;
  pro_limit constant int := 150;
  global_limit constant int := 1500;
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
  perform pg_advisory_xact_lock(hashtext('hskpath_pronounce_quota'));
  select coalesce(p.is_pro, false) into pro from public.user_progress p where p.user_id = uid;
  pro := coalesce(pro, false) or public.is_admin();
  lim := case when coalesce(pro, false) then pro_limit else user_limit end;
  select coalesce(u.count, 0) into used from public.pronounce_usage u where u.user_id = uid and u.day = today;
  used := coalesce(used, 0);
  select coalesce(sum(u.count), 0) into total from public.pronounce_usage u where u.day = today;
  if used >= lim then
    return json_build_object('ok', false, 'reason', 'user', 'used', used, 'limit', lim);
  end if;
  if total >= global_limit then
    return json_build_object('ok', false, 'reason', 'global', 'used', used, 'limit', lim);
  end if;
  insert into public.pronounce_usage (user_id, day, count) values (uid, today, 1)
    on conflict (user_id, day) do update set count = public.pronounce_usage.count + 1;
  return json_build_object('ok', true, 'used', used + 1, 'limit', lim);
end;
$$;

revoke all on function public.pronounce_quota_status() from public, anon;
revoke all on function public.consume_pronounce_quota() from public, anon;
grant execute on function public.pronounce_quota_status() to authenticated;
grant execute on function public.consume_pronounce_quota() to authenticated;
