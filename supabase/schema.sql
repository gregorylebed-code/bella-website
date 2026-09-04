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

alter table messages enable row level security;
alter table email_signups enable row level security;

-- Anyone can read the message board
create policy "public can read messages"
  on messages for select
  using (true);

-- Anyone can post a message
create policy "public can insert messages"
  on messages for insert
  with check (true);

-- Admin page needs to delete messages. The app itself gates this
-- behind the admin password cookie (see src/app/admin/actions.ts).
create policy "public can delete messages"
  on messages for delete
  using (true);

-- Anyone can submit their email (no read access for the public)
create policy "public can insert email signups"
  on email_signups for insert
  with check (true);

create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  name text,
  question text not null,
  answer text,
  created_at timestamptz not null default now(),
  answered_at timestamptz
);

alter table questions enable row level security;

-- Anyone can submit a question
create policy "public can insert questions"
  on questions for insert
  with check (true);

-- Anyone can read questions (the /ask page only displays answered ones
-- client-side; the admin page, password-gated in the app, also needs to
-- see unanswered ones using this same anon key).
create policy "public can read questions"
  on questions for select
  using (true);

-- Admin page needs to save answers.
create policy "public can update questions"
  on questions for update
  using (true)
  with check (true);
