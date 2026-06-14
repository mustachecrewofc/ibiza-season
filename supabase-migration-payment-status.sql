-- =============================================
-- Migration: expand payment_status options
-- Run this once in your Supabase SQL Editor
-- =============================================

alter table public.submissions
  drop constraint submissions_payment_status_check;

alter table public.submissions
  add constraint submissions_payment_status_check
  check (payment_status in ('not_charged', 'first_contact', 'recall', 'declined', 'paid'));
