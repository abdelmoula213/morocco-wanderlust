CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  tour TEXT NOT NULL,
  preferred_date DATE,
  guests TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking with valid data"
ON public.bookings
FOR INSERT
TO public
WITH CHECK (
  char_length(name) > 0 AND char_length(name) <= 100
  AND char_length(email) > 0 AND char_length(email) <= 255
  AND char_length(tour) > 0 AND char_length(tour) <= 300
  AND (message IS NULL OR char_length(message) <= 2000)
);

CREATE INDEX idx_bookings_tour ON public.bookings(tour);
CREATE INDEX idx_bookings_created_at ON public.bookings(created_at DESC);