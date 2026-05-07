UPDATE storage.buckets SET public = false WHERE id = 'tour-images';

CREATE POLICY "tour-images read public"
ON storage.objects FOR SELECT
USING (bucket_id = 'tour-images');

CREATE POLICY "tour-images no insert"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'tour-images' AND false);

CREATE POLICY "tour-images no update"
ON storage.objects FOR UPDATE
USING (bucket_id = 'tour-images' AND false);

CREATE POLICY "tour-images no delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'tour-images' AND false);