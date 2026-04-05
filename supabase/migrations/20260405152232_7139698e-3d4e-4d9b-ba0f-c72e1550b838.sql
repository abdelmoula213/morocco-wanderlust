
DROP POLICY IF EXISTS "Anyone can submit a review with valid data" ON public.reviews;

CREATE POLICY "Anyone can submit a review with valid data"
ON public.reviews
FOR INSERT
TO public
WITH CHECK (
  char_length(reviewer_name) > 0 AND char_length(reviewer_name) <= 100
  AND char_length(comment) > 0 AND char_length(comment) <= 2000
  AND rating >= 1 AND rating <= 5
  AND char_length(tour_slug) > 0 AND char_length(tour_slug) <= 200
);
