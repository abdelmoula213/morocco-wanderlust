import { Helmet } from "react-helmet-async";
import ourikaImage from "@/assets/ourika-valley.jpg";

import { CheckCircle, MapPin, Clock, X, Mountain, Droplets, Users, Leaf } from "lucide-react";
import BookingFormSection from "@/components/BookingFormSection";

const itinerary = [
  {
    time: "9:00 AM",
    title: "Hotel Pickup & Departure",
    description:
      "Your driver picks you up from your hotel or riad in Marrakech. Head south through the Haouz Plain towards the Atlas foothills, enjoying views of olive groves and traditional Berber villages along the way.",
  },
  {
    time: "10:00 AM",
    title: "Arrive in Ourika Valley",
    description:
      "Enter the lush green Ourika Valley, a striking contrast to the arid landscapes around Marrakech. Stop at a panoramic viewpoint to take in the terraced hillsides and the Ourika River winding below.",
  },
  {
    time: "10:30 AM",
    title: "Setti Fatma Waterfall Hike",
    description:
      "Begin a guided walk to the famous Setti Fatma waterfalls. The trail follows the river through rocky terrain and lush vegetation. Reach the first waterfall and enjoy the refreshing mist and stunning scenery. The hike is moderate and suitable for most fitness levels.",
  },
  {
    time: "12:30 PM",
    title: "Free Time & Lunch (Optional)",
    description:
      "Enjoy free time to explore the village of Setti Fatma. You can have lunch at a riverside restaurant (not included) — try traditional Moroccan tagine with fresh bread while sitting on terraces built over the river.",
  },
  {
    time: "2:00 PM",
    title: "Berber Village & Local Life",
    description:
      "Visit a traditional Berber house to learn about local customs, Berber hospitality, and daily mountain life. You may also browse the small local market for handmade crafts, argan oil products, and spices.",
  },
  {
    time: "3:30 PM",
    title: "Return to Marrakech",
    description:
      "Begin the scenic drive back to Marrakech, arriving at your hotel by approximately 5:00 PM.",
  },
];

const highlights = [
  { icon: Droplets, title: "Setti Fatma Waterfalls", text: "Guided hike to one of Morocco's most beautiful cascading waterfalls hidden in the Atlas foothills." },
  { icon: Mountain, title: "Atlas Mountain Views", text: "Panoramic views of terraced hillsides, river valleys, and snow-capped peaks in the distance." },
  { icon: Users, title: "Berber Culture", text: "Visit a traditional Berber home and learn about the customs and hospitality of the mountain communities." },
  { icon: Leaf, title: "Lush Green Valley", text: "A refreshing escape from Marrakech's heat — riverside paths, olive groves, and vibrant gardens." },
];

const OurikaValley = () => {
  return (
    <>
      <Helmet>
        <title>Ourika Valley Day Tour from Marrakech | SK Morocco</title>
        <meta name="description" content="Discover the green Ourika Valley on a guided day trip from Marrakech. Waterfall walk, Berber village visit & stunning Atlas nature. Book now, pay on arrival." />
        <meta name="keywords" content="Ourika Valley, Ourika Valley tour, Marrakech day trip, Ourika waterfalls, Morocco valley tour, Atlas foothills, Setti Fatma, Ourika excursion, Morocco nature tour, Berber market Ourika, guided valley walk, Morocco travel, Ourika from Marrakech, green valley Morocco" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img src={ourikaImage} alt="Ourika Valley Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> 1 hour from Marrakech
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Ourika Valley Day Tour
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Escape to the green heart of the Atlas Mountains — waterfall hikes, Berber villages & breathtaking valley views, all in one day.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-primary-foreground/80 font-body text-sm">
            <span className="flex items-center gap-1"><Clock size={14} /> Full Day (9 AM – 5 PM)</span>
            <span className="flex items-center gap-1"><Users size={14} /> Small Groups or Private</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Hotel Pickup Included", "Pay on Arrival", "Tour Only — 150 DH/person"].map((b) => (
            <span key={b} className="flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm px-4 py-2 rounded-full">
              <CheckCircle size={14} className="text-primary" /> {b}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Tour Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card rounded-2xl p-6 shadow-warm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <h.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{h.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>

        {/* Itinerary */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Full Day Itinerary</h2>
        <div className="space-y-6 mb-16">
          {itinerary.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                {i < itinerary.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-4">
                <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider">{step.time}</p>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included / Not Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card rounded-2xl p-6 shadow-warm">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">What's Included</h3>
            <ul className="space-y-3">
              {[
                "Hotel pickup & drop-off in Marrakech",
                "Comfortable air-conditioned transport",
                "Guided waterfall hike",
                "Guided valley & village tour",
                "Visit to a traditional Berber house",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-warm">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Not Included</h3>
            <ul className="space-y-3">
              {[
                "Lunch & drinks (available at riverside restaurants)",
                "Personal expenses & souvenirs",
                "Tips for guide (optional)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <X size={14} className="text-destructive mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Good to Know */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Good to Know</h2>
        <div className="bg-secondary/60 rounded-2xl p-6 mb-8">
          <ul className="space-y-3">
            {[
              "Wear comfortable walking shoes — the waterfall trail has rocky sections.",
              "Bring sunscreen, a hat, and a water bottle, especially in summer.",
              "The hike is moderate difficulty and takes about 1–1.5 hours round trip.",
              "Best time to visit: spring (March–May) for wildflowers and flowing waterfalls.",
              "The valley is noticeably cooler than Marrakech — a light layer is recommended.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BookingFormSection />
    </>
  );
};

export default OurikaValley;
