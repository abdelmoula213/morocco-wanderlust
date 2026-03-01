import saharaImage from "@/assets/sahara-desert.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, X, MapPin, Clock, Users, Star, Shield } from "lucide-react";

const itinerary = [
  {
    day: "Day 1",
    title: "Marrakech → Ait Ben Haddou → Ouarzazate → Dades Valley",
    details: [
      "Depart Marrakech through the High Atlas Mountains via Tizi n'Tichka Pass",
      "Visit the UNESCO World Heritage site of Ait Ben Haddou Kasbah",
      "Explore Ouarzazate — the 'Hollywood of Africa'",
      "Arrive at Dades Valley for overnight stay",
    ],
  },
  {
    day: "Day 2",
    title: "Tinghir → Todra Gorge → Merzouga → Sahara Camp",
    details: [
      "Drive through stunning Todra Gorge (300m canyon walls)",
      "Continue to Merzouga at the edge of the Sahara Desert",
      "Camel trek into the Erg Chebbi sand dunes",
      "Night in desert camp under the stars",
    ],
  },
  {
    day: "Day 3",
    title: "Sahara Sunrise → Return to Marrakech",
    details: [
      "Wake for an unforgettable Sahara sunrise over the dunes",
      "Camel ride back to Merzouga",
      "Return journey through Ouarzazate",
      "Arrive back in Marrakech by evening",
    ],
  },
];

const sharedInclusions = [
  "Shared transport",
  "Overnight stay (2 nights)",
  "Camel trek in Merzouga",
  "Sahara desert experience",
];

const SaharaDesertTour = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img src={saharaImage} alt="Sahara Desert Merzouga Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> Most Popular Tour
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3">
            3-Day Sahara Desert Tour<br />from Marrakech
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl mb-4">
            The ultimate Morocco adventure — ancient kasbahs, dramatic gorges, camel treks & a night under Sahara stars.
          </p>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80 font-body text-sm">
            <span className="flex items-center gap-1"><Clock size={14} /> 3 Days / 2 Nights</span>
            <span className="flex items-center gap-1"><Users size={14} /> Small Groups or Private</span>
            <span className="flex items-center gap-1"><Star size={14} fill="currentColor" className="text-accent" /> 4.9/5 Rating</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Hotel Pickup Included", "Pay on Arrival", "Free Cancellation"].map((b) => (
            <span key={b} className="flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm px-4 py-2 rounded-full">
              <CheckCircle size={14} className="text-primary" /> {b}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Package Comparison */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Choose Your Package</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Standard */}
              <div className="bg-card rounded-2xl p-6 shadow-warm border border-border">
                <p className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-2">Standard</p>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-foreground">800 DH</span>
                  <span className="font-body text-sm text-muted-foreground ml-1">/ person</span>
                </div>
                <ul className="space-y-3 mb-4">
                  {sharedInclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> Standard desert camp / hotel
                  </li>
                </ul>
                <a
                  href="https://wa.me/212766776545?text=Hello!%20I%27d%20like%20to%20book%20the%203-Day%20Sahara%20Tour%20-%20Standard%20Package%20(800%20DH)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold py-3 rounded-lg hover:bg-secondary/80 transition-colors font-body text-sm"
                >
                  💬 Book Standard
                </a>
              </div>

              {/* Luxury */}
              <div className="bg-card rounded-2xl p-6 shadow-warm-lg border-2 border-accent relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Recommended
                </div>
                <p className="font-body text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-2">Luxury</p>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-foreground">2,000 DH</span>
                  <span className="font-body text-sm text-muted-foreground ml-1">/ person</span>
                </div>
                <ul className="space-y-3 mb-4">
                  {sharedInclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                      <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 font-body text-sm text-foreground font-medium">
                    <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> Luxury desert camp / hotel
                  </li>
                </ul>
                <a
                  href="https://wa.me/212766776545?text=Hello!%20I%27d%20like%20to%20book%20the%203-Day%20Sahara%20Tour%20-%20Luxury%20Package%20(2000%20DH)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors font-body text-sm"
                >
                  💬 Book Luxury
                </a>
              </div>
            </div>

            <div className="bg-secondary/60 rounded-xl p-4 mb-16">
              <p className="font-body text-sm text-muted-foreground text-center italic">
                <Shield size={14} className="inline mr-1 text-primary" />
                The difference between Standard and Luxury packages is the category and comfort level of the accommodation. All other services remain the same.
              </p>
            </div>

            {/* Itinerary */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Tour Itinerary</h2>
            <div className="space-y-8 mb-16">
              {itinerary.map((day, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i < itinerary.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="font-body text-sm font-semibold text-primary uppercase tracking-wider">{day.day}</p>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">{day.title}</h3>
                    <ul className="space-y-2">
                      {day.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-2 gap-4 mb-16">
              <img src={saharaImage} alt="Sahara Desert sunset" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
              <img src={aitBenHaddouImage} alt="Ait Ben Haddou" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Summary */}
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-4">Pricing Summary</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <span className="font-body text-sm">Standard</span>
                    <span className="font-heading text-xl font-bold text-primary">800 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gold-light border border-accent/30">
                    <span className="font-body text-sm font-semibold">Luxury</span>
                    <span className="font-heading text-xl font-bold text-accent-foreground">2,000 DH</span>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-foreground text-center mb-4">Per person · Pay on arrival</p>
                <a
                  href="https://wa.me/212766776545?text=Hello!%20I%27d%20like%20to%20book%20the%203-Day%20Sahara%20Desert%20Tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors font-body"
                >
                  💬 Book on WhatsApp
                </a>
              </div>

              {/* Booking Form */}
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-4">Book This Tour</h3>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaharaDesertTour;
