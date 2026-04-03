import { Star, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_CID = "1612132695717590420";
const REVIEW_LINK = `https://search.google.com/local/writereview?placeid=${GOOGLE_MAPS_CID}`;
const MAPS_LINK = `https://www.google.com/maps?cid=${GOOGLE_MAPS_CID}`;

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "March 2025",
    text: "Amazing Sahara desert tour! Our guide was incredibly knowledgeable and made the whole experience unforgettable. The camel ride at sunset was magical. Highly recommend SK Morocco!",
    avatar: "S",
  },
  {
    name: "James P.",
    rating: 5,
    date: "February 2025",
    text: "We did the Ouzoud Waterfalls day trip and it was fantastic. Pickup was on time, the driver was friendly, and the waterfalls were breathtaking. Great value for money.",
    avatar: "J",
  },
  {
    name: "Léa D.",
    rating: 5,
    date: "January 2025",
    text: "Essaouira day trip was perfect! The argan oil cooperative visit was fascinating and we had plenty of free time to explore the medina. Very well organized.",
    avatar: "L",
  },
  {
    name: "Marco R.",
    rating: 5,
    date: "March 2025",
    text: "Did the Agafay Desert luxury camp experience — absolutely stunning! The quad biking was thrilling and dinner under the stars was romantic. A must-do from Marrakech.",
    avatar: "M",
  },
  {
    name: "Emily W.",
    rating: 5,
    date: "February 2025",
    text: "Atlas Mountains trip exceeded all expectations. The Berber village lunch was authentic and delicious. Our guide shared so much history and culture. Will book again!",
    avatar: "E",
  },
  {
    name: "Karim B.",
    rating: 5,
    date: "January 2025",
    text: "Professional, punctual and passionate about Morocco. The 3-day Sahara tour was the highlight of our trip. Thank you SK Morocco for an incredible adventure!",
    avatar: "K",
  },
];

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
              <StarRating rating={5} />
              <span className="font-body text-sm font-semibold text-foreground">5.0</span>
            </div>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            Based on Google Reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card rounded-2xl p-5 shadow-warm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading text-sm font-bold text-primary">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{review.date}</p>
                </div>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 ml-auto"
                />
              </div>
              <StarRating rating={review.rating} />
              <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={REVIEW_LINK}
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
