-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit a review" ON public.reviews;

-- Create a more restrictive INSERT policy with basic validation
CREATE POLICY "Anyone can submit a review with valid data" ON public.reviews
FOR INSERT
WITH CHECK (
  char_length(reviewer_name) > 0
  AND char_length(comment) > 0
  AND rating >= 1
  AND rating <= 5
  AND char_length(tour_slug) > 0
);