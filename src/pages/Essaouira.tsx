import { Helmet } from "react-helmet-async";
import essaouiraImage from "@/assets/essaouira.jpg";
import BookingFormSection from "@/components/BookingFormSection";
import { CheckCircle, MapPin, X } from "lucide-react";

const Essaouira = () => {
  return (
    <>
      <Helmet>
        <title>Essaouira Day Trip from Marrakech | SK Morocco</title>
        <meta
          name="description"
          content="Escape to Essaouira on a day trip from Marrakech. Explore the historic medina, fishing port & Atlantic coast. Hotel pickup included, pay on arrival."
        />
        <meta
          name="keywords"
          content="Essaouira day trip, Essaouira from Marrakech, Morocco coastal town, Essaouira medina, Essaouira tour, Morocco Atlantic coast, Mogador, Essaouira excursion, Morocco travel, Essaouira fishing port"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img
          src={essaouiraImage}
          alt="Essaouira coastal city Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> Atlantic Coast · 2.5 hours from Marrakech
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Essaouira Day Trip
          </h1>

          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Escape to Morocco's charming Atlantic coastal town — historic medina,
            fishing port & free time by the sea.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Hotel Pickup Included", "Pay on Arrival", "Tour Only"].map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm px-4 py-2 rounded-full"
            >
              <CheckCircle size={14} className="text-primary" /> {b}
            </span>
          ))}
        </div>

         {/* Price card    */}
        {/* <div className="max-w-md mx-auto bg-card rounded-2xl p-6 shadow-warm mb-12 text-center">
          <p className="font-heading text-4xl font-bold text-primary">200 DH</p>
          <p className="font-body text-sm text-muted-foreground">per person · Full Day · Pay on Arrival</p>
          <a
            href="#booking-widget"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors font-body"
          >
            📅 Book Now
          </a>
        </div> */}

        {/* Highlights */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Tour Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Wind, title: "Windy City Charm", desc: "Known as the 'Wind City of Africa,' Essaouira's breezy ramparts and blue-shuttered streets are iconic." },
            { icon: Fish, title: "Fishing Port", desc: "Watch fishermen bring in their daily catch and enjoy the freshest seafood at the bustling harbour." },
            { icon: Compass, title: "Historic Medina", desc: "A UNESCO World Heritage Site with 18th-century fortifications, art galleries & winding souks." },
            { icon: Camera, title: "Film & Art Hub", desc: "Essaouira has featured in Game of Thrones and is home to a thriving art and music scene." },
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
              { time: "09:00", title: "Hotel Pickup", desc: "We collect you from your hotel or riad in Marrakech and head west through the argan tree countryside." },
              { time: "10:00", title: "Argan Oil Cooperative", desc: "Stop at a women's argan oil cooperative to learn about traditional Berber oil extraction and sample fresh products." },
              { time: "11:30", title: "Arrive in Essaouira", desc: "Arrive at the Atlantic coast and enter Essaouira through the historic Bab Sbaa gate." },
              { time: "11:45", title: "Medina & Ramparts Tour", desc: "Explore the UNESCO-listed medina, walk along the 18th-century Portuguese ramparts with panoramic ocean views, and browse artisan workshops." },
              { time: "13:00", title: "Fishing Port & Free Time", desc: "Visit the vibrant fishing port, enjoy fresh grilled seafood for lunch (at your own expense), explore the souks, or relax on the beach." },
              { time: "15:30", title: "Return to Marrakech", desc: "Depart Essaouira and drive back to Marrakech, arriving around 5:00–5:30 PM at your hotel." },
            ].map((step) => (
              <div key={step.time} className="flex gap-4">
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
              {[
                "Hotel pickup & drop-off",
                "Air-conditioned transport",
                "Visit to argan oil cooperative",
                "Guided medina & port tour",
                "Free time for exploring, shopping & beach",
                "Insurance coverage",
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
                "Lunch (fresh seafood available ~60-100 DH)",
                "Personal expenses & souvenirs",
                "Tips for the guide",
                "Drinks",
              ].map((item) => (
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
            "Essaouira is windier and cooler than Marrakech — bring a light jacket",
            "The medina is a UNESCO World Heritage Site since 2001",
            "Great for Game of Thrones fans — Essaouira was used as Astapor",
            "Wear comfortable walking shoes for the cobblestone streets",
            "Best time to visit is spring or autumn for mild weather",
            "You'll have about 3 hours of free time to explore at your own pace",
          ].map((tip) => (
            <div key={tip} className="flex items-start gap-2 font-body text-sm text-foreground bg-card rounded-xl p-3 shadow-warm">
              <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {tip}
            </div>
          ))}
        </div>
      </div>

      <BookingFormSection
        title="Book Your Essaouira Day Trip"
        lockedTour="Essaouira Day Trip (200 DH)"
      />
    </>
  );
};

export default Essaouira;
