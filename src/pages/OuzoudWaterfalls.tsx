import { Helmet } from "react-helmet-async";
import ouzoudImage from "@/assets/ouzoud-waterfalls.jpg";
import BookingCalendarWidget from "@/components/BookingCalendarWidget";
import { CheckCircle, MapPin, Clock, X, Droplets, Camera, TreePine, Sun } from "lucide-react";

const OuzoudWaterfalls = () => {
  return (
    <>
      <Helmet>
        <title>Ouzoud Waterfalls Day Trip from Marrakech | SK Morocco</title>
        <meta name="description" content="Visit the spectacular Ouzoud Waterfalls on a guided day trip from Marrakech. Morocco's tallest waterfalls with guided tour & free time. Book now, pay on arrival." />
        <meta name="keywords" content="Ouzoud waterfalls, Ouzoud waterfalls tour, Marrakech day trip, Morocco waterfalls, Cascades d'Ouzoud, Ouzoud excursion, nature tour Morocco, Ouzoud falls day trip, Morocco adventure, waterfalls near Marrakech, Morocco nature, guided waterfall tour, Ouzoud monkeys, Morocco travel" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img src={ouzoudImage} alt="Ouzoud Waterfalls Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> 2.5 hours from Marrakech
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Ouzoud Waterfalls Tour
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Morocco's most spectacular waterfalls — a full-day nature escape with guided tour and free time.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Hotel Pickup Included", "Pay on Arrival", "Tour Only"].map((b) => (
            <span key={b} className="flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm px-4 py-2 rounded-full">
              <CheckCircle size={14} className="text-primary" /> {b}
            </span>
          ))}
        </div>

        

        {/* Highlights */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Tour Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Droplets, title: "110m Waterfalls", desc: "Morocco's tallest and most dramatic cascading waterfalls with multiple tiers." },
            { icon: TreePine, title: "Barbary Macaques", desc: "Spot playful wild monkeys living in the olive groves around the falls." },
            { icon: Camera, title: "Photo Opportunities", desc: "Breathtaking viewpoints and rainbow mist create unforgettable photo moments." },
            { icon: Sun, title: "Natural Pools", desc: "Swim in the refreshing natural pools at the base of the waterfalls (seasonal)." },
          ].map((h) => (
            <div key={h.title} className="bg-card rounded-2xl p-5 shadow-warm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <h.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-1">{h.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Itinerary */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Day Itinerary</h2>
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-warm mb-12">
          <div className="space-y-6">
            {[
              { time: "08:00", title: "Hotel Pickup", desc: "We collect you from your hotel or riad in Marrakech and head northeast through the Moroccan countryside." },
              { time: "09:30", title: "Scenic Drive & Rest Stop", desc: "Enjoy views of olive groves and Berber villages along the way. Quick stop for refreshments." },
              { time: "10:30", title: "Arrive at Ouzoud", desc: "Arrive at the Cascades d'Ouzoud and begin your guided walk down to the falls through lush olive terraces." },
              { time: "11:00", title: "Guided Waterfall Tour", desc: "Your guide takes you along the main viewing trails, explaining the geology and local history. Spot Barbary macaques in the trees." },
              { time: "12:30", title: "Free Time & Lunch", desc: "Enjoy free time to explore, swim in the natural pools, take a boat ride under the falls, or relax at a riverside restaurant (lunch at your own expense)." },
              { time: "15:00", title: "Return to Marrakech", desc: "Depart the waterfalls and drive back to Marrakech, arriving around 5:00 PM." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-heading text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{step.time}</span>
                  {i < 5 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-base font-bold text-foreground">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included / Not Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card rounded-2xl p-6 shadow-warm">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">What's Included</h3>
            <ul className="space-y-3">
              {["Hotel pickup & drop-off", "Air-conditioned transport", "Professional English-speaking guide", "Guided tour of the waterfalls", "Free time for swimming & exploring", "Insurance coverage"].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-warm">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Not Included</h3>
            <ul className="space-y-3">
              {["Lunch (available at local restaurants ~50-80 DH)", "Boat ride under the falls (~20 DH)", "Personal expenses & tips", "Drinks"].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <X size={14} className="text-destructive mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Good to Know */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Good to Know</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            "Wear comfortable walking shoes — the trail has uneven steps",
            "Bring swimwear if you want to swim in the natural pools",
            "Best visited spring through autumn for fullest water flow",
            "Don't feed the monkeys — enjoy them from a respectful distance",
            "Sunscreen & a hat are recommended, especially in summer",
            "The walk down to the falls takes about 20 minutes",
          ].map((tip) => (
            <div key={tip} className="flex items-start gap-2 font-body text-sm text-foreground bg-card rounded-xl p-3 shadow-warm">
              <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {tip}
            </div>
          ))}
        </div>
      </div>

      <BookingCalendarWidget bokunWidgetSrc="https://widgets.bokun.io/online-sales/33e3b4d4-1dd7-4cd5-912d-61a588e6f5a3/experience-calendar/1175866" />
    </>
  );
};

export default OuzoudWaterfalls;
