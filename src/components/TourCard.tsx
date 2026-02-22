import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  badge?: string;
  link: string;
}

const TourCard = ({ image, title, description, price, duration, badge, link }: TourCardProps) => {
  return (
    <Link
      to={link}
      className="group block rounded-2xl overflow-hidden bg-card shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
          {price}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" className="text-accent" />
          ))}
          <span className="text-xs text-muted-foreground ml-1">5.0</span>
        </div>
        <h3 className="font-heading text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-body text-xs text-muted-foreground">⏱ {duration}</span>
          <span className="font-body text-sm font-semibold text-primary group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
