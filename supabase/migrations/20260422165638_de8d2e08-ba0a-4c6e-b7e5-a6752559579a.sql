DROP POLICY IF EXISTS "Anyone can submit a booking with valid data" ON public.bookings;
ALTER TABLE public.bookings DROP COLUMN IF EXISTS email;
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS phone text NOT NULL DEFAULT '';

CREATE POLICY "Anyone can submit a booking with valid data"
ON public.bookings
FOR INSERT
TO public
WITH CHECK (
  char_length(name) > 0 AND char_length(name) <= 100
  AND char_length(phone) > 0 AND char_length(phone) <= 50
  AND char_length(tour) > 0 AND char_length(tour) <= 300
  AND (message IS NULL OR char_length(message) <= 2000)
);