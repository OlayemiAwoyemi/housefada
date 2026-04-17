ALTER TABLE public.transaction_items
ADD COLUMN IF NOT EXISTS service_type text NOT NULL DEFAULT 'Other';