-- HSK Path: friends, challenges and encouragements between learners.
-- Run in the Supabase SQL Editor (after schema.sql and admin.sql); safe to run again.
--
-- Privacy: a learner is found only by their friend code (HSK-XXXXX), never by name or e-mail.
-- Friends see each other's name, streak, XP and badges (from user_progress.profile.game), nothing else.
-- The tables are reached only through the functions below (no direct access).

create table if not exists public.social_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  code text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.friendships (
  id bigint generated always as identity primary key,
  requester uuid not null references auth.users(id) on delete cascade,
  addressee uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted')),
  created_at timestamptz not null default now(),
  responded_at timestamptz,
  check (requester <> addressee)
);
create unique index if not exists friendships_pair on public.friendships (least(requester, addressee), greatest(requester, addressee));

create table if not exists public.challenges (
  id bigint generated always as identity primary key,
  creator uuid not null references auth.users(id) on delete cascade,
  opponent uuid not null references auth.users(id) on delete cascade,
  days integer not null default 7 check (days between 1 and 14),
  status text not null default 'pending' check (status in ('pending', 'active', 'declined', 'cancelled')),
  start_date date,
  end_date date,
  created_at timestamptz not null default now(),
  check (creator <> opponent)
);

create table if not exists public.cheers (
  id bigint generated always as identity primary key,
  sender uuid not null references auth.users(id) on delete cascade,
  receiver uuid not null references auth.users(id) on delete cascade,
  kind text not null check (kind in ('fire', 'clap', 'muscle', 'heart')),
  created_at timestamptz not null default now(),
  seen boolean not null default false
);
create index if not exists cheers_receiver on public.cheers (receiver, seen);

alter table public.social_profiles enable row level security;
alter table public.friendships enable row level security;
alter table public.challenges enable row level security;
alter table public.cheers enable row level security;
revoke all on public.social_profiles, public.friendships, public.challenges, public.cheers from anon, authenticated;

-- ---------------------------------------------------------------------------------------------
-- helpers

create or replace function public.social_are_friends(a uuid, b uuid)
returns boolean
language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1 from public.friendships f
    where f.status = 'accepted'
      and least(f.requester, f.addressee) = least(a, b)
      and greatest(f.requester, f.addressee) = greatest(a, b)
  );
$$;
revoke all on function public.social_are_friends(uuid, uuid) from public, anon, authenticated;

-- Public card of a learner for their friends: name + game state (last 30 days of XP only).
create or replace function public.social_card(uid uuid)
returns json
language sql stable security definer set search_path = ''
as $$
  select json_build_object(
    'user_id', uid,
    'name', coalesce(nullif(p.profile->>'name', ''), 'HSK learner'),
    'level', coalesce(p.profile->>'currentHsk', 'hsk1'),
    'goal_minutes', coalesce((p.profile->>'dailyGoalMinutes')::int, 20),
    'streak', coalesce(p.profile->'game'->'streak', '{}'::jsonb),
    'total', coalesce((p.profile->'game'->>'total')::int, 0),
    'badges', coalesce(p.profile->'game'->'badges', '{}'::jsonb),
    'xp', coalesce((
      select jsonb_object_agg(k, v) from jsonb_each(coalesce(p.profile->'game'->'xp', '{}'::jsonb)) as e(k, v)
      where k >= to_char(current_date - 30, 'YYYY-MM-DD')
    ), '{}'::jsonb)
  )
  from public.user_progress p where p.user_id = uid
  union all
  select json_build_object('user_id', uid, 'name', 'HSK learner', 'level', 'hsk1', 'goal_minutes', 20,
    'streak', '{}'::jsonb, 'total', 0, 'badges', '{}'::jsonb, 'xp', '{}'::jsonb)
  where not exists (select 1 from public.user_progress p where p.user_id = uid)
  limit 1;
$$;
revoke all on function public.social_card(uuid) from public, anon, authenticated;

-- ---------------------------------------------------------------------------------------------
-- my code

create or replace function public.social_me()
returns json
language plpgsql volatile security definer set search_path = ''
as $$
declare
  uid uuid := auth.uid();
  c text;
begin
  if uid is null then raise exception 'not authenticated'; end if;
  select code into c from public.social_profiles where user_id = uid;
  while c is null loop
    c := 'HSK-' || upper(substr(translate(md5(random()::text || clock_timestamp()::text), '01', ''), 1, 5));
    if length(c) < 9 or exists (select 1 from public.social_profiles where code = c) then
      c := null;
    else
      insert into public.social_profiles (user_id, code) values (uid, c) on conflict (user_id) do nothing;
      select code into c from public.social_profiles where user_id = uid;
    end if;
  end loop;
  return json_build_object('code', c);
end;
$$;

-- ---------------------------------------------------------------------------------------------
-- friends

create or replace function public.social_add_friend(p_code text)
returns json
language plpgsql volatile security definer set search_path = ''
as $$
declare
  uid uuid := auth.uid();
  other uuid;
  f public.friendships;
begin
  if uid is null then raise exception 'not authenticated'; end if;
  select user_id into other from public.social_profiles where code = upper(trim(p_code));
  if other is null then return json_build_object('status', 'not_found'); end if;
  if other = uid then return json_build_object('status', 'self'); end if;
  if (select count(*) from public.friendships where (requester = uid or addressee = uid)) >= 200 then
    return json_build_object('status', 'too_many');
  end if;
  select * into f from public.friendships
    where least(requester, addressee) = least(uid, other) and greatest(requester, addressee) = greatest(uid, other);
  if f.id is not null then
    if f.status = 'accepted' then return json_build_object('status', 'already'); end if;
    if f.addressee = uid then
      update public.friendships set status = 'accepted', responded_at = now() where id = f.id;
      return json_build_object('status', 'accepted');
    end if;
    return json_build_object('status', 'pending');
  end if;
  insert into public.friendships (requester, addressee) values (uid, other);
  return json_build_object('status', 'requested');
end;
$$;

create or replace function public.social_respond_friend(p_id bigint, p_accept boolean)
returns void
language plpgsql volatile security definer set search_path = ''
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not authenticated'; end if;
  if p_accept then
    update public.friendships set status = 'accepted', responded_at = now() where id = p_id and addressee = uid and status = 'pending';
  else
    delete from public.friendships where id = p_id and addressee = uid and status = 'pending';
  end if;
end;
$$;

create or replace function public.social_remove_friend(p_user uuid)
returns void
language plpgsql volatile security definer set search_path = ''
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not authenticated'; end if;
  delete from public.friendships
    where least(requester, addressee) = least(uid, p_user) and greatest(requester, addressee) = greatest(uid, p_user);
  update public.challenges set status = 'cancelled'
    where status in ('pending', 'active') and ((creator = uid and opponent = p_user) or (creator = p_user and opponent = uid));
end;
$$;

-- ---------------------------------------------------------------------------------------------
-- encouragements (at most 3 a day from one friend to another)

create or replace function public.social_send_cheer(p_user uuid, p_kind text)
returns json
language plpgsql volatile security definer set search_path = ''
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not authenticated'; end if;
  if not public.social_are_friends(uid, p_user) then return json_build_object('ok', false, 'reason', 'not_friends'); end if;
  if (select count(*) from public.cheers where sender = uid and receiver = p_user and created_at > now() - interval '1 day') >= 3 then
    return json_build_object('ok', false, 'reason', 'limit');
  end if;
  insert into public.cheers (sender, receiver, kind) values (uid, p_user, p_kind);
  delete from public.cheers where created_at < now() - interval '30 days';
  return json_build_object('ok', true);
end;
$$;

create or replace function public.social_mark_cheers_seen()
returns void
language sql volatile security definer set search_path = ''
as $$
  update public.cheers set seen = true where receiver = auth.uid() and not seen;
$$;

-- ---------------------------------------------------------------------------------------------
-- challenges: who earns the most XP in N days

create or replace function public.social_challenge(p_user uuid, p_days int)
returns json
language plpgsql volatile security definer set search_path = ''
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not authenticated'; end if;
  if not public.social_are_friends(uid, p_user) then return json_build_object('ok', false, 'reason', 'not_friends'); end if;
  if exists (select 1 from public.challenges where status in ('pending', 'active')
      and ((creator = uid and opponent = p_user) or (creator = p_user and opponent = uid))
      and (end_date is null or end_date >= current_date)) then
    return json_build_object('ok', false, 'reason', 'exists');
  end if;
  insert into public.challenges (creator, opponent, days) values (uid, p_user, greatest(1, least(14, coalesce(p_days, 7))));
  return json_build_object('ok', true);
end;
$$;

create or replace function public.social_respond_challenge(p_id bigint, p_accept boolean)
returns void
language plpgsql volatile security definer set search_path = ''
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not authenticated'; end if;
  if p_accept then
    update public.challenges set status = 'active', start_date = current_date, end_date = current_date + days - 1
      where id = p_id and opponent = uid and status = 'pending';
  else
    update public.challenges set status = 'declined' where id = p_id and opponent = uid and status = 'pending';
  end if;
  -- the creator can also withdraw a challenge that was not accepted yet
  update public.challenges set status = 'cancelled' where id = p_id and creator = uid and status = 'pending' and not p_accept;
end;
$$;

-- ---------------------------------------------------------------------------------------------
-- everything the Friends page needs, in one call

create or replace function public.social_overview()
returns json
language plpgsql stable security definer set search_path = ''
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not authenticated'; end if;
  return json_build_object(
    'code', (select code from public.social_profiles where user_id = uid),
    'friends', coalesce((
      select json_agg(public.social_card(case when f.requester = uid then f.addressee else f.requester end) order by f.responded_at desc)
      from public.friendships f where f.status = 'accepted' and (f.requester = uid or f.addressee = uid)
    ), '[]'::json),
    'incoming', coalesce((
      select json_agg(json_build_object('id', f.id, 'user_id', f.requester,
        'name', coalesce(nullif((select p.profile->>'name' from public.user_progress p where p.user_id = f.requester), ''), 'HSK learner')) order by f.created_at desc)
      from public.friendships f where f.status = 'pending' and f.addressee = uid
    ), '[]'::json),
    'outgoing', coalesce((
      select json_agg(json_build_object('id', f.id, 'user_id', f.addressee,
        'name', coalesce(nullif((select p.profile->>'name' from public.user_progress p where p.user_id = f.addressee), ''), 'HSK learner')) order by f.created_at desc)
      from public.friendships f where f.status = 'pending' and f.requester = uid
    ), '[]'::json),
    'challenges', coalesce((
      select json_agg(json_build_object('id', c.id, 'creator', c.creator, 'opponent', c.opponent, 'days', c.days, 'status', c.status,
        'start_date', c.start_date, 'end_date', c.end_date,
        'other', case when c.creator = uid then c.opponent else c.creator end) order by c.created_at desc)
      from public.challenges c
      where (c.creator = uid or c.opponent = uid)
        and (c.status = 'pending' or (c.status = 'active' and c.end_date >= current_date - 14))
    ), '[]'::json),
    'cheers', coalesce((
      select json_agg(json_build_object('id', h.id, 'kind', h.kind, 'created_at', h.created_at,
        'name', coalesce(nullif((select p.profile->>'name' from public.user_progress p where p.user_id = h.sender), ''), 'HSK learner')) order by h.created_at desc)
      from public.cheers h where h.receiver = uid and not h.seen
    ), '[]'::json)
  );
end;
$$;

revoke all on function public.social_me(), public.social_add_friend(text), public.social_respond_friend(bigint, boolean),
  public.social_remove_friend(uuid), public.social_send_cheer(uuid, text), public.social_mark_cheers_seen(),
  public.social_challenge(uuid, int), public.social_respond_challenge(bigint, boolean), public.social_overview() from public, anon;
grant execute on function public.social_me(), public.social_add_friend(text), public.social_respond_friend(bigint, boolean),
  public.social_remove_friend(uuid), public.social_send_cheer(uuid, text), public.social_mark_cheers_seen(),
  public.social_challenge(uuid, int), public.social_respond_challenge(bigint, boolean), public.social_overview() to authenticated;
