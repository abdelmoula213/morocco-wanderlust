import essaouiraImage from "@/assets/essaouira.jpg";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, MapPin, Clock, X } from "lucide-react";

const Essaouira = () => {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img src={essaouiraImage} alt="Essaouira coastal city Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> Atlantic Coast
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Essaouira Day Trip
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Escape to Morocco's charming Atlantic coastal town — historic medina, fishing port & free time.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Hotel Pickup Included", "Pay on Arrival", "Tour Only"].map((b) => (
            <span key={b} className="flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm px-4 py-2 rounded-full">
              <CheckCircle size={14} className="text-primary" /> {b}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Tour Program</h2>
            <div className="bg-card rounded-2xl p-6 shadow-warm mb-8">
              <div className="flex flex-wrap gap-4 mb-6 font-body text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={14} /> Departure: 9:00 AM</span>
                <span className="flex items-center gap-1"><Clock size={14} /> Return: 5:00 PM</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                {["Medina visit", "Port visit", "Free time for exploring & photos", "Hotel pickup & drop-off", "Air-conditioned transport"].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Not Included</h3>
              <ul className="space-y-3">
                {["Lunch", "Dinner", "Personal expenses"].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <X size={14} className="text-destructive mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <div className="text-center mb-4">
                  <p className="font-heading text-3xl font-bold text-primary">200 DH</p>
                  <p className="font-body text-xs text-muted-foreground">per person · Full Day · Pay on Arrival</p>
                </div>
                <a
                  href="https://wa.me/212766776545?text=Hello!%20I%27d%20like%20to%20book%20the%20Essaouira%20Day%20Trip%20(200%20DH)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors font-body mb-4"
                >
                  💬 Book on WhatsApp
                </a>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Essaouira;
