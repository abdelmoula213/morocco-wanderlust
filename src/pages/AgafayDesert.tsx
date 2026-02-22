import agafayImage from "@/assets/agafay-desert.jpg";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, MapPin, Clock, Star } from "lucide-react";

const activities = [
  { name: "Quad Biking", desc: "Race across the rocky desert landscape on powerful quad bikes", price: "From 350 DH" },
  { name: "Camel Ride", desc: "Traditional camel trek through the desert at sunset", price: "From 200 DH" },
  { name: "Sunset Experience", desc: "Watch the sun set behind the Atlas Mountains from the desert", price: "Included" },
  { name: "Camp Dinner", desc: "Traditional Moroccan dinner under the stars in a luxury camp", price: "From 450 DH" },
  { name: "Buggy Tours", desc: "Off-road buggy adventure across the Agafay landscape", price: "From 500 DH" },
  { name: "Hot Air Balloon", desc: "Optional sunrise balloon ride over the desert (seasonal)", price: "From 1500 DH" },
];

const AgafayDesert = () => {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img src={agafayImage} alt="Agafay Desert near Marrakech" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> 30 Min from Marrakech
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Agafay Desert Tours
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Quad biking, camel rides, sunset dinner & luxury camp experiences — just outside Marrakech.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Hotel Pickup Included", "Pay on Arrival", "Same-Day Booking"].map((b) => (
            <span key={b} className="flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm px-4 py-2 rounded-full">
              <CheckCircle size={14} className="text-primary" /> {b}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Activities & Experiences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {activities.map((a) => (
                <div key={a.name} className="bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all">
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{a.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">{a.desc}</p>
                  <span className="font-body text-sm font-semibold text-primary">{a.price}</span>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Hotel pickup & drop-off from Marrakech",
                "Professional English-speaking guide",
                "Safety equipment & helmets",
                "Mint tea welcome",
                "Sunset photo stops",
                "Insurance coverage",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-4">Book Agafay Tour</h3>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgafayDesert;
