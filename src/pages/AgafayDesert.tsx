import { Helmet } from "react-helmet-async";
import agafayImage from "@/assets/agafay-desert.jpg";
import buggySmallImage from "@/assets/buggy-small.jpg";
import buggyBigImage from "@/assets/buggy-big.jpg";
import hotAirBalloonImage from "@/assets/hot-air-balloon.jpg";
import quadBikingImage from "@/assets/quad-biking.jpg";

import BookingFormSection from "@/components/BookingFormSection";
import { CheckCircle, MapPin, Clock, Shield } from "lucide-react";

const standardIncludes = ["Quad biking", "Camel ride", "Sunset experience", "Camp dinner"];
const luxuryIncludes = ["Quad biking", "Camel ride", "Sunset experience", "Camp dinner", "Access to swimming pool"];

const AgafayDesert = () => {
  return (
    <>
      <Helmet>
        <title>Agafay Desert Experience near Marrakech | SK Morocco</title>
        <meta name="description" content="Enjoy the Agafay Desert experience just 30 min from Marrakech. Quad biking, camel rides, sunset dinner & luxury camp. Same-day booking, pay on arrival." />
        <meta name="keywords" content="Agafay desert, Agafay desert tour, quad biking Marrakech, camel ride Agafay, sunset dinner desert, Marrakech desert camp, Agafay experience, Morocco desert near Marrakech, buggy ride Agafay, hot air balloon Marrakech, Agafay luxury camp, Morocco adventure, Agafay quad, desert excursion Marrakech" />
      </Helmet>
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img src={agafayImage} alt="Agafay Desert near Marrakech" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> 30 Min from Marrakech
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Agafay Desert Experience
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Quad biking, camel rides, sunset dinner & camp experiences — just outside Marrakech.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Hotel Pickup Included", "Pay on Arrival", "Same-Day Booking"].map((b) =>
          <span key={b} className="flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm px-4 py-2 rounded-full">
              <CheckCircle size={14} className="text-primary" /> {b}
            </span>
          )}
        </div>

        <div>
          <div>
            {/* Package Comparison */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Choose Your Package</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {/* Standard */}
              <div className="bg-card rounded-2xl p-6 shadow-warm border border-border">
                <p className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-2">Standard</p>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-foreground">400 DH</span>
                  <span className="font-body text-sm text-muted-foreground ml-1">/ person</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {standardIncludes.map((item) =>
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                    </li>
                  )}
                </ul>
                <a
                  href="#booking-widget"
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold py-3 rounded-lg hover:bg-secondary/80 transition-colors font-body text-sm">
                  📅 Book Standard
                </a>
              </div>

              {/* Luxury */}
              <div className="bg-card rounded-2xl p-6 shadow-warm-lg border-2 border-accent relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Recommended
                </div>
                <p className="font-body text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-2">Luxury</p>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-foreground">700 DH</span>
                  <span className="font-body text-sm text-muted-foreground ml-1">/ person</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {luxuryIncludes.map((item) =>
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                      <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {item}
                    </li>
                  )}
                </ul>
                <a
                  href="#booking-widget"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors font-body text-sm">
                  📅 Book Luxury
                </a>
              </div>
            </div>

            {/* Optional Add-ons */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Optional Add-ons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {/* Buggy */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-warm">
                <div className="grid grid-cols-2 gap-2 p-3">
                  <div>
                    <img src={buggySmallImage} alt="Small 2-seat buggy in Agafay desert" className="rounded-lg w-full h-32 object-cover" />
                    <div className="flex items-center justify-between mt-2 px-1">
                      <div>
                        <p className="font-body text-sm font-medium text-foreground">Small Buggy</p>
                        <p className="font-body text-xs text-muted-foreground">2 seats</p>
                      </div>
                      <span className="font-heading text-lg font-bold text-primary">1,000 DH</span>
                    </div>
                  </div>
                  <div>
                    <img src={buggyBigImage} alt="Big 4-seat buggy in Agafay desert" className="rounded-lg w-full h-32 object-cover" />
                    <div className="flex items-center justify-between mt-2 px-1">
                      <div>
                        <p className="font-body text-sm font-medium text-foreground">Big Buggy</p>
                        <p className="font-body text-xs text-muted-foreground">4 seats</p>
                      </div>
                      <span className="font-heading text-lg font-bold text-primary">2,000 DH</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hot Air Balloon */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-warm">
                <img src={hotAirBalloonImage} alt="Hot air balloon over Agafay desert at sunset" className="w-full h-40 object-cover" />
                <div className="p-4 space-y-3">
                  <h3 className="font-heading text-lg font-bold text-card-foreground">🎈 Hot Air Balloon</h3>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">First Departure</p>
                      <p className="font-body text-xs text-muted-foreground">16:30</p>
                    </div>
                    <span className="font-heading text-lg font-bold text-primary">1,400 DH</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">Sunset Departure</p>
                      <p className="font-body text-xs text-muted-foreground">Golden hour</p>
                    </div>
                    <span className="font-heading text-lg font-bold text-primary">1,200 DH</span>
                  </div>
                </div>
              </div>

              {/* Quad Biking */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-warm sm:col-span-2">
                <div className="flex flex-col sm:flex-row">
                  <img src={quadBikingImage} alt="Quad biking in Agafay desert" className="w-full sm:w-1/2 h-48 object-cover" />
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">🏍️ Quad Biking</h3>
                    <p className="font-body text-sm text-muted-foreground mb-3">Thrilling ATV ride through the desert terrain with professional guides and safety equipment.</p>
                    <p className="font-body text-xs text-muted-foreground">Included in Standard & Luxury packages</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
              "Hotel pickup & drop-off from Marrakech",
              "Professional English-speaking guide",
              "Safety equipment & helmets",
              "Mint tea welcome",
              "Sunset photo stops",
              "Insurance coverage"].
              map((item) =>
              <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <BookingFormSection
        title="Book Your Agafay Desert Experience"
        subtitle="Choose your experience type — we'll confirm by email"
        tourOptions={[
          { value: "Agafay Desert - Standard (400 DH)", label: "Standard - 400 DH per person" },
          { value: "Agafay Desert - Luxury (700 DH)", label: "Luxury - 700 DH per person" },
        ]}
        addOns={[
          { id: "hot-air-balloon", label: "🎈 Hot Air Balloon Ride(First Departure):1,400 DH" },
          { id: "hot-air-balloon", label: "🎈 Hot Air Balloon Ride(Sunset Departure):1,200 DH" },
          { id: "buggy", label: "🏜️ small Buggy Adventure:1,000 DH " },
          { id: "buggy", label: "🏜️ big Buggy Adventure:2,000 DH " }
        ]}
      />
    </>);

};

export default AgafayDesert;
