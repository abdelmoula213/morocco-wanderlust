import { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const REVIEW_LINK = "https://search.google.com/local/writereview?placeid=ChIJ_PLACEHOLDER";
const MAPS_LINK = "https://www.google.com/maps?cid=1612132695717590420";

type Review = {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  profileUrl: string;
};

type ReviewsData = {
  placeName: string;
  rating: number;
  totalReviews: number;
  reviews: Review[];
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" : "text-border"}
      />
    ))}
  </div>
);

const GoogleReviewsWidget = () => {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data: result, error } = await supabase.functions.invoke("google-reviews");
        if (error) {
          console.error("Error fetching reviews:", error);
          return;
        }
        if (result && result.reviews && result.reviews.length > 0) {
          setData(result);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-muted-foreground">Loading reviews...</p>
        </div>
      </section>
    );
  }

  if (!data || data.reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-secondary/50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Reviews
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Travelers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_42x14dp.png"
              alt="Google"
              className="h-5 object-contain"
            />
            <div className="flex items-center gap-1.5">
              <StarRating rating={Math.round(data.rating)} />
              <span className="font-body text-sm font-semibold text-foreground">
                {data.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            {data.totalReviews} reviews on Google
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {data.reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-5 shadow-warm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading text-sm font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <a
                    href={review.profileUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-sm font-bold text-foreground hover:text-primary transition-colors truncate block"
                  >
                    {review.name}
                  </a>
                  <p className="font-body text-xs text-muted-foreground">{review.date}</p>
                </div>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 shrink-0"
                />
              </div>
              <StarRating rating={review.rating} />
              <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Star size={16} /> Leave Us a Review
          </a>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card text-foreground font-body font-semibold px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <ExternalLink size={16} /> See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;
