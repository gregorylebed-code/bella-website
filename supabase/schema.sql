-- Run this in the Supabase SQL Editor (Bella's project)

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists email_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists drawing_suggestions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  suggestion text not null,
  created_at timestamptz not null default now()
);

alter table messages enable row level security;
alter table email_signups enable row level security;
alter table drawing_suggestions enable row level security;

-- Anyone can read the message board
create policy "public can read messages"
  on messages for select
  using (true);

-- Anyone can post a message
create policy "public can insert messages"
  on messages for insert
  with check (true);

-- Anyone can submit their email (no read access for the public)
create policy "public can insert email signups"
  on email_signups for insert
  with check (true);

-- Anyone can submit a drawing suggestion
create policy "public can insert drawing suggestions"
  on drawing_suggestions for insert
  with check (true);

-- Admin page reads these using the same public anon key, so a read policy
-- is required here too. Access is still gated by the /admin password screen.
create policy "public can read email signups"
  on email_signups for select
  using (true);

create policy "public can read drawing suggestions"
  on drawing_suggestions for select
  using (true);
