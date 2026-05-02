import { Helmet } from "react-helmet-async";
import atlasImage from "@/assets/atlas-mountains.jpg";
import BookingFormSection from "@/components/BookingFormSection";

import { CheckCircle, MapPin, Clock, X, Users, Footprints, Mountain, TreePine } from "lucide-react";

const itinerary = [
  {
    time: "9:00 AM",
    title: "Hotel Pickup & Departure",
    description:
      "Your driver picks you up from your hotel or riad in Marrakech. Travel south along the Tizi n'Test road, passing through olive groves and small Berber settlements as the Atlas Mountains rise ahead.",
  },
  {
    time: "10:15 AM",
    title: "Arrive in Imlil Village",
    description:
      "Reach the mountain village of Imlil (1,740 m), the gateway to Jebel Toubkal — North Africa's highest peak. Meet your local Berber guide and begin your walk through terraced walnut orchards and traditional mud-brick villages.",
  },
  {
    time: "10:45 AM",
    title: "Guided Mountain Walk & Waterfalls",
    description:
      "Follow mountain trails through the valley, crossing streams and passing ancient irrigation channels. Visit a stunning waterfall hidden among the rocks, surrounded by lush vegetation and towering cliff faces.",
  },
  {
    time: "12:00 PM",
    title: "Berber Village Visit & Mint Tea",
    description:
      "Visit a traditional Berber household and experience genuine mountain hospitality. Enjoy freshly brewed mint tea while learning about Berber customs, architecture, and daily life at altitude.",
  },
  {
    time: "1:00 PM",
    title: "Free Time & Lunch (Optional)",
    description:
      "Enjoy free time in Imlil. You can have lunch at a local restaurant (not included) — try a traditional mountain tagine or freshly baked bread with local honey and argan oil. Browse the small village shops for handmade crafts.",
  },
  {
    time: "3:00 PM",
    title: "Return to Marrakech",
    description:
      "Begin the scenic drive back to Marrakech through the foothills, arriving at your hotel by approximately 5:00 PM, refreshed from a day in the mountains.",
  },
];

const highlights = [
  { icon: Mountain, title: "High Atlas Scenery", text: "Walk through dramatic mountain landscapes at 1,740 m altitude with views towards Jebel Toubkal, North Africa's highest peak." },
  { icon: Footprints, title: "Guided Mountain Walk", text: "Follow ancient trails through terraced valleys, past waterfalls and streams with an experienced local Berber guide." },
  { icon: Users, title: "Berber Culture", text: "Step inside a traditional mountain home, share mint tea, and learn about centuries-old customs and hospitality." },
  { icon: TreePine, title: "Walnut Groves & Nature", text: "Walk through lush walnut orchards, terraced gardens, and wildflower meadows — a green oasis in the High Atlas." },
];

const AtlasMountains = () => {
  return (
    <>
      <Helmet>
        <title>Imlil & Atlas Mountains Day Tour from Marrakech | SK Morocco</title>
        <meta name="description" content="Explore the Atlas Mountains on a guided Imlil day tour from Marrakech. Visit Berber villages, waterfalls & enjoy stunning mountain views. Book now, pay on arrival." />
        <meta name="keywords" content="Atlas Mountains tour, Imlil day trip, Marrakech mountain tour, Berber village visit, Atlas waterfalls, Morocco trekking, Atlas Mountains hiking, Imlil Marrakech, Morocco mountain adventure, High Atlas tour, guided mountain walk Morocco, Toubkal region, Atlas day trip, Morocco nature tour" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img src={atlasImage} alt="Atlas Mountains Imlil Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> Imlil, Atlas Mountains
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Imlil Day Tour
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Guided mountain walk through the Atlas Mountains — waterfalls, Berber villages & breathtaking views.
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
            <div key={step.time} className="flex gap-4">
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
                "Guided mountain walk with local Berber guide",
                "Visit to waterfalls",
                "Visit to traditional Berber village & mint tea",
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
                "Lunch & drinks (available at local restaurants)",
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
              "Wear sturdy, comfortable walking shoes — the trail includes rocky and uneven sections.",
              "Bring sunscreen, a hat, and at least 1 litre of water, especially in summer.",
              "The hike is moderate difficulty and suitable for most fitness levels (no climbing experience needed).",
              "Imlil is cooler than Marrakech — bring a light jacket, especially in spring and autumn.",
              "Best time to visit: spring (March–May) for wildflowers, or autumn (Sept–Nov) for golden walnut groves.",
              "The village sits at 1,740 m altitude — take it easy if you're not used to higher elevations.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BookingFormSection
        title="Book Your Atlas Mountains Tour"
        lockedTour="Imlil Day Tour (150 DH)"
      />
    </>
  );
};

export default AtlasMountains;
