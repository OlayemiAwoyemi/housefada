CREATE SEQUENCE IF NOT EXISTS public.housefada_invoice_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE FUNCTION public.next_housefada_invoice_number()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  next_val bigint;
BEGIN
  next_val := nextval('public.housefada_invoice_seq');
  RETURN 'HouseFada-' || LPAD(next_val::text, 4, '0');
END;
$$;

GRANT EXECUTE ON FUNCTION public.next_housefada_invoice_number() TO anon, authenticated;