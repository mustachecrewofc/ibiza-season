-- =============================================
-- Migration: add recall tracking fields
-- Run this once in your Supabase SQL Editor
-- =============================================

alter table public.submissions
  add column if not exists last_recall_at timestamptz,
  add column if not exists recall_count integer not null default 0;
