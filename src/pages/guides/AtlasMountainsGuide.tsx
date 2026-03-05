import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import atlasImage from "@/assets/atlas-mountains.jpg";
import ourikaImage from "@/assets/ourika-valley.jpg";
import { CheckCircle, Clock, MapPin, Phone, Star, AlertTriangle } from "lucide-react";

const AtlasMountainsGuide = () => {
  return (
    <>
      <Helmet>
        <title>Atlas Mountains Day Trip Guide from Marrakech (2026) | SK Morocco</title>
        <meta name="description" content="Plan your Atlas Mountains day trip from Marrakech. Complete guide to Imlil, Berber villages, waterfalls & trekking. Best routes, prices, tips & what to wear." />
        <meta name="keywords" content="Atlas Mountains day trip, Atlas Mountains guide, Imlil day trip Marrakech, Berber village tour, Atlas Mountains trekking, Morocco hiking guide, Toubkal base, Marrakech mountain trip, Atlas waterfalls, Morocco nature tour, Atlas Mountains what to expect, day trip from Marrakech, Atlas Mountains prices, Morocco trekking guide, Atlas Mountains 2026" />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={atlasImage} alt="Atlas Mountains Morocco panoramic view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">Day Trip Guide</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Atlas Mountains Day Trip<br />Guide from Marrakech
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Everything you need to know about visiting the Atlas Mountains in 2026.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
          The Atlas Mountains are just 60 km from Marrakech — a world away from the medina's hustle. In this guide, we cover the best routes, what to expect, costs, and tips for an unforgettable mountain day trip.
        </p>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Best Routes from Marrakech</h2>
        <div className="space-y-4 mb-10">
          {[
            { route: "Imlil Valley", desc: "The most popular option. Visit traditional Berber villages, walk to waterfalls, and enjoy views of Mount Toubkal (4,167m). Great for all fitness levels.", price: "150 DH", link: "/atlas-mountains" },
            { route: "Ourika Valley", desc: "A lush green valley with seven waterfalls. Less strenuous than Imlil, perfect for families. Visit a Berber home and enjoy mountain tagine.", price: "150 DH", link: "/ourika-valley" },
          ].map((r) => (
            <div key={r.route} className="bg-card rounded-xl p-6 shadow-warm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-bold text-foreground">{r.route}</h3>
                <span className="font-heading text-lg font-bold text-primary">{r.price}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-3">{r.desc}</p>
              <Link to={r.link} className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:underline">
                <MapPin size={14} /> View tour →
              </Link>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What to Expect</h2>
        <div className="space-y-3 mb-10">
          {[
            { time: "8:00 AM", event: "Pickup from your riad/hotel in Marrakech" },
            { time: "9:30 AM", event: "Arrive in the Atlas Mountains, begin guided walk" },
            { time: "11:00 AM", event: "Visit Berber village, traditional mint tea" },
            { time: "12:30 PM", event: "Walk to waterfalls (Imlil) or upper cascades (Ourika)" },
            { time: "1:30 PM", event: "Traditional Berber tagine lunch with mountain views" },
            { time: "3:00 PM", event: "Free time to explore, shop for argan oil" },
            { time: "5:00 PM", event: "Return to Marrakech" },
          ].map((item) => (
            <div key={item.time} className="flex items-start gap-3">
              <span className="font-body text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded shrink-0">{item.time}</span>
              <span className="font-body text-sm text-muted-foreground">{item.event}</span>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What to Wear & Bring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {["Comfortable hiking shoes", "Layers (weather changes fast)", "Sunscreen & hat", "Water bottle", "Cash for souvenirs/tips", "Camera"].map((item) => (
            <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Best Time to Visit</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The Atlas Mountains are beautiful year-round. <strong>Spring (March–May)</strong> brings wildflowers and green valleys. <strong>Autumn (September–November)</strong> has crisp air and clear skies. Winter can bring snow to higher elevations — beautiful but cold.
        </p>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Pro tip:</strong> In summer, Ourika Valley is cooler than Imlil and makes a refreshing escape from Marrakech heat.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Book Your Atlas Mountains Trip</h2>
          <p className="font-body text-muted-foreground mb-6">
            From just 150 DH per person. Hotel pickup, local guide, pay on arrival.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/atlas-mountains"
              className="bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              View Imlil Tour
            </Link>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20want%20to%20book%20an%20Atlas%20Mountains%20day%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:bg-secondary/80 transition-all duration-300"
            >
              <Phone size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default AtlasMountainsGuide;
