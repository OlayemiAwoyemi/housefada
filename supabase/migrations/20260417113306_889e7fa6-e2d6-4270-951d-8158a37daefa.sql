-- Status enum
CREATE TYPE public.transaction_status AS ENUM ('pending', 'in_progress', 'paid', 'completed', 'cancelled');

-- Transactions table
CREATE TABLE public.transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_number TEXT NOT NULL UNIQUE,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_whatsapp TEXT NOT NULL,
  service_type TEXT NOT NULL,
  status public.transaction_status NOT NULL DEFAULT 'pending',
  total_amount NUMERIC(12, 2) NOT NULL DEFAULT 0,
  notes TEXT,
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Transaction items
CREATE TABLE public.transaction_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  transaction_id UUID NOT NULL REFERENCES public.transactions(id) ON DELETE CASCADE,
  item_name TEXT NOT NULL,
  quantity NUMERIC(10, 2) NOT NULL DEFAULT 1,
  unit_price NUMERIC(12, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transaction_items ENABLE ROW LEVEL SECURITY;

-- Open policies (admin gate is in-app password as requested by user)
CREATE POLICY "Public can read transactions"
  ON public.transactions FOR SELECT USING (true);
CREATE POLICY "Public can insert transactions"
  ON public.transactions FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can update transactions"
  ON public.transactions FOR UPDATE USING (true);
CREATE POLICY "Public can delete transactions"
  ON public.transactions FOR DELETE USING (true);

CREATE POLICY "Public can read transaction items"
  ON public.transaction_items FOR SELECT USING (true);
CREATE POLICY "Public can insert transaction items"
  ON public.transaction_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can update transaction items"
  ON public.transaction_items FOR UPDATE USING (true);
CREATE POLICY "Public can delete transaction items"
  ON public.transaction_items FOR DELETE USING (true);

-- Updated_at trigger function (idempotent)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_transactions_updated_at
  BEFORE UPDATE ON public.transactions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_transactions_status ON public.transactions(status);
CREATE INDEX idx_transactions_created_at ON public.transactions(created_at DESC);
CREATE INDEX idx_transaction_items_transaction_id ON public.transaction_items(transaction_id);