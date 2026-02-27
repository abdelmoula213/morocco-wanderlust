import { useState, useEffect } from "react";
import { Star, Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const reviewSchema = z.object({
  reviewer_name: z.string().trim().min(1, "Name is required").max(100),
  rating: z.number().min(1).max(5),
  comment: z.string().trim().min(5, "Review must be at least 5 characters").max(1000),
});

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const ReviewSection = ({ tourSlug, tourName }: { tourSlug: string; tourName: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ reviewer_name: "", rating: 5, comment: "" });
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, [tourSlug]);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("tour_slug", tourSlug)
      .order("created_at", { ascending: false })
      .limit(20);
    setReviews((data as Review[]) || []);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const parsed = reviewSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      return;
    }

    setSubmitting(true);
    const { error: dbError } = await supabase.from("reviews").insert({
      tour_slug: tourSlug,
      reviewer_name: parsed.data.reviewer_name,
      rating: parsed.data.rating,
      comment: parsed.data.comment,
    });

    if (dbError) {
      setError("Failed to submit review. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
    fetchReviews();
  };

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">
          Guest Reviews
        </p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-2">
          What Travelers Say About {tourName}
        </h2>
        {avgRating && (
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  fill={s <= Math.round(Number(avgRating)) ? "currentColor" : "none"}
                  className="text-accent"
                />
              ))}
            </div>
            <span className="font-body text-sm text-muted-foreground">
              {avgRating} · {reviews.length} review{reviews.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>

      {/* Reviews list */}
      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="animate-spin text-primary" size={24} />
        </div>
      ) : reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div key={r.id} className="bg-card border border-border p-6 rounded-2xl shadow-warm">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    fill={s <= r.rating ? "currentColor" : "none"}
                    className="text-accent"
                  />
                ))}
              </div>
              <p className="font-body text-sm text-foreground/80 leading-relaxed italic mb-4">
                "{r.comment}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-body font-semibold text-foreground text-sm">{r.reviewer_name}</p>
                <p className="font-body text-xs text-muted-foreground">
                  {new Date(r.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-body text-muted-foreground mb-12">
          No reviews yet — be the first to share your experience!
        </p>
      )}

      {/* Submit form */}
      <div className="max-w-lg mx-auto bg-card rounded-2xl p-8 shadow-warm border border-border">
        <h3 className="font-heading text-xl font-bold text-foreground mb-5 text-center">
          Leave a Review
        </h3>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle className="mx-auto h-12 w-12 text-primary mb-3" />
            <p className="font-heading text-lg font-bold text-foreground mb-1">Thank you!</p>
            <p className="font-body text-sm text-muted-foreground">Your review has been published.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1">Your Name *</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.reviewer_name}
                onChange={(e) => setForm({ ...form, reviewer_name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1">Rating *</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setForm({ ...form, rating: s })}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      size={24}
                      fill={s <= (hoverRating || form.rating) ? "currentColor" : "none"}
                      className="text-accent"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1">Your Review *</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                placeholder="Share your experience..."
              />
            </div>

            {error && <p className="font-body text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              Submit Review
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
